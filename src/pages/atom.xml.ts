import { getCollection } from 'astro:content';
import { getSiteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = getSiteUrl();
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const entries = sorted
    .map(
      (post) => `
  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${site}/blog/${post.id}" />
    <id>${site}/blog/${post.id}</id>
    <updated>${post.data.pubDate.toISOString()}</updated>
    <summary>${escapeXml(post.data.description)}</summary>
  </entry>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Unity Software Solution Blog</title>
  <link href="${site}/atom.xml" rel="self" />
  <link href="${site}" />
  <link href="https://pubsubhubbub.appspot.com/" rel="hub" />
  <id>${site}/</id>
  <updated>${sorted[0]?.data.pubDate.toISOString() ?? new Date().toISOString()}</updated>${entries}
</feed>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
