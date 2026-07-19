import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.join(process.cwd(), 'public');
const sourcePath = path.join(publicDir, 'logo-opt.png');
const source = await readFile(sourcePath);

const faviconBackground = { r: 8, g: 8, b: 10, alpha: 1 };

function pngToIco(pngBuffer: Buffer, size: number): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry[0] = size >= 256 ? 0 : size;
  entry[1] = size >= 256 ? 0 : size;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

async function renderIcon(size: number): Promise<Buffer> {
  return sharp(source)
    .resize(size, size, {
      fit: 'contain',
      background: faviconBackground,
    })
    .png()
    .toBuffer();
}

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

for (const { name, size } of sizes) {
  const buf = await renderIcon(size);
  await writeFile(path.join(publicDir, name), buf);
  console.log(`Generated public/${name}`);
}

const favicon32 = await renderIcon(32);
await writeFile(path.join(publicDir, 'favicon.ico'), pngToIco(favicon32, 32));
console.log('Generated public/favicon.ico');

console.log('Favicon set generated from logo-opt.png.');
