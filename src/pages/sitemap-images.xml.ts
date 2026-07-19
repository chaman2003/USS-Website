import { getCollection } from 'astro:content';
import { team } from '../data/team';
import { getSiteUrl, absoluteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = getSiteUrl();
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const work = await getCollection('work');

  const urls: { loc: string; caption: string }[] = [
    { loc: absoluteUrl('/og-default.jpg'), caption: 'Unity Software Solution default social preview' },
    ...posts.map((p) => ({
      loc: absoluteUrl(`/og/blog-${p.id}.png`),
      caption: p.data.title,
    })),
    ...work.map((w) => ({
      loc: absoluteUrl(`/og/work-${w.id}.png`),
      caption: w.data.title,
    })),
    ...team
      .filter((m) => m.image)
      .map((m) => ({
        loc: absoluteUrl(m.image!),
        caption: `${m.name} — ${m.role.replace(/\n/g, ' ')}`,
      })),
  ];

  const entries = urls
    .map(
      (img) => `  <url>
    <loc>${img.loc}</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
