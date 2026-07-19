import { getCollection } from 'astro:content';
import { serviceDetails } from '../data/serviceDetails';
import { faqCategories } from '../data/faq';
import { glossaryTerms } from '../data/glossary';
import { SITE_EMAIL, SITE_NAME, getSiteUrl } from '../lib/seo/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = getSiteUrl();
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const lines = [
    `# ${SITE_NAME} — Full context`,
    '',
    `> ${SITE_NAME} (USS) is a Bengaluru-based software studio building web, mobile, and AI-powered products for startups, SMEs, and enterprises.`,
    '',
    `Contact: ${SITE_EMAIL}`,
    `Website: ${site}`,
    '',
    '## Services (detailed)',
    ...serviceDetails.map(
      (s) =>
        `### ${s.name}\n${s.body}\nCapabilities: ${(s.subCapabilities ?? s.included).slice(0, 5).join('; ')}.\nLink: ${site}/services#${s.id}`,
    ),
    '',
    '## Glossary',
    ...glossaryTerms.map((t) => `- **${t.term}**: ${t.definition}`),
    '',
    '## FAQ excerpts',
    ...faqCategories.flatMap((c) =>
      c.entries.map((f) => `**${f.question}** ${f.answer}`),
    ),
    '',
    '## Blog index',
    ...posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => `- [${p.data.title}](${site}/blog/${p.id}) — ${p.data.description}`),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
