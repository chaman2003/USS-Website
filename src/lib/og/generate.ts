import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let fontData: Buffer | null = null;

async function loadFont(): Promise<Buffer> {
  if (fontData) return fontData;
  const fontPath = path.join(
    process.cwd(),
    'node_modules',
    '@fontsource',
    'inter',
    'files',
    'inter-latin-700-normal.woff',
  );
  fontData = await readFile(fontPath);
  return fontData;
}

export async function generateOgImage(title: string, subtitle?: string): Promise<Buffer> {
  const font = await loadFont();
  const displayTitle = title.length > 90 ? `${title.slice(0, 87)}…` : title;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #08080a 0%, #1a1508 50%, #08080a 100%)',
          color: '#f5f0e6',
          padding: '64px',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #c19315, #e9b935)',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '22px', fontWeight: 700, color: '#e9b935' },
                          children: 'Unity Software Solution',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '14px', color: '#a89f8f', marginTop: '4px' },
                          children: 'USS · Bengaluru, India',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '52px',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                    },
                    children: displayTitle,
                  },
                },
                subtitle
                  ? {
                      type: 'div',
                      props: {
                        style: { fontSize: '22px', color: '#c4b8a0', lineHeight: 1.4 },
                        children: subtitle.length > 120 ? `${subtitle.slice(0, 117)}…` : subtitle,
                      },
                    }
                  : { type: 'div', props: { children: '' } },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '16px', color: '#8a8070' },
              children: 'unitysoftwaresolution.com',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Inter', data: font, weight: 700, style: 'normal' }],
    },
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
