import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import products from './products.mjs';

const modulePath = fileURLToPath(import.meta.url);
const moduleDir = path.dirname(modulePath);
const productImagesRoot = moduleDir;
const outputPath = path.join(productImagesRoot, 'images.json');
const forceDownload = process.argv.includes('--force');

const titleCase = (value) =>
    value.replace(/\b\w/g, (letter) => letter.toUpperCase());

const unique = (values) =>
    [...new Set(values.flatMap((value) => Array.isArray(value) ? value : [value]).filter(Boolean))];

const splitTerms = (value) =>
    String(value)
        .split(/[^a-zA-Z0-9]+/)
        .map((term) => term.trim())
        .filter(Boolean);

const toHex = (value) => value.toString(16).padStart(2, '0');

const quantizeChannel = (value) => Math.min(255, Math.floor(value / 32) * 32 + 16);

const rgbToHex = ({ r, g, b }) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;

const getOrientation = (width, height) => {
    if (width === height) return 'square';
    return width > height ? 'landscape' : 'portrait';
};

const normalizeOutputFilename = (urlPath) =>
    urlPath.replace(/^\/static\//, '').replace(/^\//, '');

const createSourceUrl = (urlPath) => {
    const baseUrl = process.env.PRODUCT_IMAGE_BASE_URL;

    if (!baseUrl) {
        throw new Error('PRODUCT_IMAGE_BASE_URL is required to download missing product images.');
    }

    return new URL(urlPath, baseUrl).toString();
};

const downloadImage = async (urlPath, localPath) => {
    if (fs.existsSync(localPath) && !forceDownload) return;

    fs.mkdirSync(path.dirname(localPath), { recursive: true });

    const response = await fetch(createSourceUrl(urlPath));

    if (!response.ok) {
        throw new Error(`Failed to download ${urlPath}: ${response.status} ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(localPath, buffer);
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

const createDescription = ({ product, imageLabel, width, height, format, orientation, prominentColors }) => {
    const colors = prominentColors.map((color) => color.hex).join(', ');
    const brand = product.brand ? `${product.brand} ` : '';
    const rewards = product.rewards ? ` with ${product.rewards}` : '';

    return `${titleCase(product.name)} ${imageLabel} image for a ${brand}credit card${rewards}, ${width}x${height} ${orientation} ${format.toUpperCase()} with prominent colors ${colors}.`;
};

const createTags = ({ product, imageLabel, imageTag, filename, width, height, format, orientation, prominentColors }) => {
    const aspectRatio = Number((width / height).toFixed(2));

    return unique([
        product.name,
        product.slug,
        splitTerms(product.name),
        splitTerms(product.slug),
        product.tags,
        product.brand,
        product.rewards,
        splitTerms(product.rewards),
        `min-salary-${product.min_salary}`,
        `annual-fee-${product.annual_fee}`,
        'credit card',
        'product',
        imageLabel,
        imageTag,
        filename,
        `${width}x${height}`,
        `${width}w`,
        `${height}h`,
        orientation,
        format,
        `aspect-${aspectRatio}`,
        prominentColors.map((color) => color.hex),
        prominentColors.map((color) => `color-${color.hex.slice(1)}`),
    ]);
};

const enrichProductImage = async ({ product, imageLabel, imageTag, sourcePath }) => {
    const filename = normalizeOutputFilename(sourcePath);
    const imagePath = path.join(productImagesRoot, filename);

    await downloadImage(sourcePath, imagePath);

    const metadata = await sharp(imagePath).metadata();
    const { width, height, format } = metadata;

    if (!width || !height || !format) {
        throw new Error(`Could not read required metadata for: ${filename}`);
    }

    const prominentColors = await getProminentColors(imagePath);
    const orientation = getOrientation(width, height);
    const record = {
        product,
        imageLabel,
        imageTag,
        filename,
        width,
        height,
        format,
        orientation,
        prominentColors,
    };

    return {
        title: `${product.name} ${imageLabel}`,
        filename,
        description: createDescription(record),
        tags: createTags(record),
    };
};

const generateProductImageCatalog = async () => {
    const result = [];

    for (const product of products.products) {
        result.push(await enrichProductImage({
            product,
            imageLabel: 'card front',
            imageTag: 'card',
            sourcePath: product.card_front,
        }));
        result.push(await enrichProductImage({
            product,
            imageLabel: 'lifestyle',
            imageTag: 'lifestyle',
            sourcePath: product.lifestyle,
        }));
    }

    const expectedCount = products.count * 2;

    if (result.length !== expectedCount) {
        throw new Error(`Expected ${expectedCount} product images, generated ${result.length}`);
    }

    fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
    console.log(`Wrote ${result.length} product image records to ${path.relative(productImagesRoot, outputPath)}`);
};

if (process.argv[1] && path.resolve(process.argv[1]) === modulePath) {
    generateProductImageCatalog().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

export { generateProductImageCatalog };
