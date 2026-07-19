import { getCollection } from 'astro:content';
import { getSiteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = getSiteUrl();
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Unity Software Solution Blog',
    home_page_url: site,
    feed_url: `${site}/feed.json`,
    description: 'Insights from USS Bengaluru on AI, web, startups, security, and commerce.',
    items: sorted.map((post) => ({
      id: `${site}/blog/${post.id}`,
      url: `${site}/blog/${post.id}`,
      title: post.data.title,
      summary: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      tags: post.data.tags,
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: { 'Content-Type': 'application/feed+json; charset=utf-8' },
  });
};
