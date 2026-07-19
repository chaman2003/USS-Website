import { getCollection } from 'astro:content';
import { generateOgImage } from '../../lib/og/generate';
import type { APIRoute, GetStaticPaths } from 'astro';

const STATIC_PAGES: Record<string, { title: string; subtitle?: string }> = {
  home: { title: 'Unity Software Solution (USS)', subtitle: 'Software studio, Bengaluru' },
  services: { title: 'Software Development Services', subtitle: 'Web, mobile, AI & cloud' },
  contact: { title: 'Contact USS', subtitle: 'Start your project' },
  blog: { title: 'Blog & Insights', subtitle: 'AI, web, startups & security' },
  work: { title: 'Case Studies', subtitle: 'Software we have delivered' },
};

export const getStaticPaths = (async () => {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const work = await getCollection('work');
  const paths = [
    ...blog.map((p) => ({ params: { slug: `blog-${p.id}` }, props: { title: p.data.title, subtitle: p.data.description } })),
    ...work.map((w) => ({ params: { slug: `work-${w.id}` }, props: { title: w.data.title, subtitle: w.data.summary ?? w.data.challenge } })),
    ...Object.entries(STATIC_PAGES).map(([slug, meta]) => ({ params: { slug }, props: meta })),
  ];
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle?: string };
  const png = await generateOgImage(title, subtitle);
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
