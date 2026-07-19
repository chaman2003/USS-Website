import { getCollection } from 'astro:content';
import { serviceDetails } from '../data/serviceDetails';
import { faqCategories } from '../data/faq';
import { SITE_EMAIL, SITE_NAME, getSiteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = getSiteUrl();
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_NAME} (USS) is a Bengaluru-based software studio building web, mobile, and AI-powered products.`,
    '',
    `Contact: ${SITE_EMAIL}`,
    `Website: ${site}`,
    '',
    '## Main pages',
    `- [Home](${site}/)`,
    `- [About](${site}/about)`,
    `- [Services](${site}/services)`,
    `- [Work / Case Studies](${site}/work)`,
    `- [Blog](${site}/blog)`,
    `- [Contact](${site}/contact)`,
    `- [FAQ](${site}/faq)`,
    '',
    '## Services',
    ...serviceDetails.map((s) => `- [${s.name}](${site}/services#${s.id})`),
    '',
    '## FAQ',
    ...faqCategories.flatMap((c) => c.entries.slice(0, 3).map((f) => `- Q: ${f.question} A: ${f.answer}`)),
    '',
    '## Blog posts',
    ...posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => `- [${p.data.title}](${site}/blog/${p.id}) — ${p.data.description}`),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
