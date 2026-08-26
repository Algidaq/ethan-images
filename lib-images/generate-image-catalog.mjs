import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import res from './res.mjs';

const modulePath = fileURLToPath(import.meta.url);
const moduleDir = path.dirname(modulePath);
const projectRoot = path.resolve(moduleDir, '..');
const imagesRoot = path.join(projectRoot, 'images');
const outputPath = path.join(imagesRoot, 'images.json');

const titleCase = (value) =>
    value.replace(/\b\w/g, (letter) => letter.toUpperCase());

const unique = (values) =>
    [...new Set(values.filter(Boolean))];

const toHex = (value) => value.toString(16).padStart(2, '0');

const quantizeChannel = (value) => Math.min(255, Math.floor(value / 32) * 32 + 16);

const rgbToHex = ({ r, g, b }) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;

const getOrientation = (width, height) => {
    if (width === height) return 'square';
    return width > height ? 'landscape' : 'portrait';
};

const getProminentColors = async (imagePath) => {
    const { data, info } = await sharp(imagePath)
        .resize(64, 64, { fit: 'inside' })
        .raw()
        .toBuffer({ resolveWithObject: true });

    const colors = new Map();
    const channels = info.channels;
    let countedPixels = 0;

    for (let offset = 0; offset < data.length; offset += channels) {
        if (channels === 4 && data[offset + 3] === 0) continue;

        const rgb = {
            r: quantizeChannel(data[offset]),
            g: quantizeChannel(data[offset + 1]),
            b: quantizeChannel(data[offset + 2]),
        };
        const hex = rgbToHex(rgb);
        const current = colors.get(hex) ?? { ...rgb, hex, count: 0 };

        current.count += 1;
        colors.set(hex, current);
        countedPixels += 1;
    }

    return [...colors.values()]
        .sort((left, right) => right.count - left.count || left.hex.localeCompare(right.hex))
        .slice(0, 5)
        .map(({ count, hex, r, g, b }) => ({
            hex,
            rgb: { r, g, b },
            percentage: Number(((count / countedPixels) * 100).toFixed(2)),
        }));
};

const createDescription = ({ label, category, width, height, format, orientation, prominentColors }) => {
    const colors = prominentColors.map((color) => color.hex).join(', ');

    return `${titleCase(label)} image in the ${category} category, ${width}x${height} ${orientation} ${format.toUpperCase()} with prominent colors ${colors}.`;
};

const createTags = ({ photo, width, height, format, orientation, prominentColors }) => {
    const aspectRatio = Number((width / height).toFixed(2));

    return unique([
        photo.category,
        photo.label,
        ...photo.label.split(/\s+/),
        `${width}x${height}`,
        `${width}w`,
        `${height}h`,
        orientation,
        format,
        `aspect-${aspectRatio}`,
        ...prominentColors.map((color) => color.hex),
        ...prominentColors.map((color) => `color-${color.hex.slice(1)}`),
    ]);
};

const enrichPhoto = async (photo) => {
    const imagePath = path.join(imagesRoot, photo.filename);

    if (!fs.existsSync(imagePath)) {
        throw new Error(`Missing image file: ${photo.filename}`);
    }

    const metadata = await sharp(imagePath).metadata();
    const { width, height, format } = metadata;

    if (!width || !height || !format) {
        throw new Error(`Could not read required metadata for: ${photo.filename}`);
    }

    const stats = fs.statSync(imagePath);
    const prominentColors = await getProminentColors(imagePath);
    const orientation = getOrientation(width, height);
    const aspectRatio = Number((width / height).toFixed(2));
    const enriched = {
        ...photo,
        title: photo.label,
        description: '',
        width,
        height,
        format,
        sizeBytes: stats.size,
        aspectRatio,
        orientation,
        prominentColors,
    };

    return {
        title: enriched.title,
        filename: enriched.filename,
        description: createDescription(enriched),
        tags: createTags({ photo, width, height, format, orientation, prominentColors }),
    };
};

const generateImageCatalog = async () => {
    const result = [];

    for (const photo of res.photos) {
        result.push(await enrichPhoto(photo));
    }

    if (result.length !== res.photos.length) {
        throw new Error(`Expected ${res.photos.length} photos, generated ${result.length}`);
    }

    fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
    console.log(`Wrote ${result.length} image records to ${path.relative(projectRoot, outputPath)}`);
};

if (process.argv[1] && path.resolve(process.argv[1]) === modulePath) {
    generateImageCatalog().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

export { generateImageCatalog };
