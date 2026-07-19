import { generateOgImage } from '../src/lib/og/generate';
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const buf = await generateOgImage(
  'Unity Software Solution (USS)',
  'Software studio in Bengaluru — web, mobile & AI',
);
const jpg = await sharp(buf).jpeg({ quality: 90 }).toBuffer();
await writeFile(path.join(process.cwd(), 'public', 'og-default.jpg'), jpg);
console.log('Generated public/og-default.jpg');
