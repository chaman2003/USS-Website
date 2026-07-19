import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getSiteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Unity Software Solution Blog',
    description: 'Insights on AI, web development, startups, security, and e-commerce from USS Bengaluru.',
    site: getSiteUrl(),
    customData: `<atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" xmlns:atom="http://www.w3.org/2005/Atom" />`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: [post.data.category, ...post.data.tags].filter(Boolean) as string[],
    })),
  });
};
