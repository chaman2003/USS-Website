import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.join(process.cwd(), 'public');
const source = await readFile(path.join(publicDir, 'logo-opt.png'));

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

for (const { name, size } of sizes) {
  const buf = await sharp(source).resize(size, size).png().toBuffer();
  await writeFile(path.join(publicDir, name), buf);
  console.log(`Generated public/${name}`);
}

// ICO is optional on modern browsers; PNG favicons in BaseLayout are sufficient.
console.log('Favicon PNG set generated.');
