import res from './res.mjs';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const downloadImage = async (url, filename) => {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFileSync(filename, response.data);
};

const downloadImages = async () => {
  const total = res.photos.length;

  for (const [index, item] of res.photos.entries()) {
    const { url, filename } = item;
    const current = index + 1;
    const remaining = total - current;
    const percentage = Math.round((current / total) * 100);
    const filePath = path.join('images', filename);
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      console.log(`Downloading ${current}/${total} (${percentage}%) - ${remaining} remaining: ${url}`);
      await downloadImage(url, filePath);
      console.log(`Downloaded: ${filePath}`);
    } catch (error) {
      console.error(`Failed to download ${url}: ${error.message}`);
    }
  }
}

downloadImages();