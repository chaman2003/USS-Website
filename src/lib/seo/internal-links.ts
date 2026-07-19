import type { CollectionEntry } from 'astro:content';
import { glossaryTerms } from '../../data/glossary';
import { serviceDetails } from '../../data/serviceDetails';

export const CATEGORY_SERVICE_ID: Record<string, string> = {
  AI: 'ai-applications',
  Cybersecurity: 'cybersecurity',
  'Web Development': 'web-development',
  'E-Commerce': 'ecommerce',
  Startups: 'custom-software',
};

const GLOSSARY_BLOG_SLUG: Record<string, string> = {
  rag: 'ai-rag-enterprise-knowledge-2026',
  llm: 'ai-multimodal-models-business',
  'core-web-vitals': 'web-core-web-vitals-inp',
  'headless-commerce': 'ecommerce-headless-commerce',
  dpdp: 'security-data-privacy-dpdp-india',
  mvp: 'startups-mvp-to-scale',
  seo: 'web-core-web-vitals-inp',
};

export interface InternalLinkTerm {
  term: string;
  url: string;
}

export function buildInternalLinkTerms(): InternalLinkTerm[] {
  const terms: InternalLinkTerm[] = [];

  for (const service of serviceDetails) {
    terms.push({ term: service.name, url: `/services#${service.id}` });
  }

  for (const entry of glossaryTerms) {
    const blogSlug = GLOSSARY_BLOG_SLUG[entry.slug];
    const shortTerm = entry.term.split('(')[0].trim();
    terms.push({
      term: entry.term,
      url: blogSlug ? `/blog/${blogSlug}` : `/search?q=${encodeURIComponent(shortTerm)}`,
    });
    if (shortTerm !== entry.term) {
      terms.push({
        term: shortTerm,
        url: blogSlug ? `/blog/${blogSlug}` : `/search?q=${encodeURIComponent(shortTerm)}`,
      });
    }
  }

  terms.push(
    { term: 'voice AI', url: '/blog/ai-voice-agents-india' },
    { term: 'Bengaluru', url: '/about' },
    { term: 'Bangalore', url: '/about' },
  );

  return terms.sort((a, b) => b.term.length - a.term.length);
}

export function getServiceIdForCategory(category?: string): string | undefined {
  if (!category) return undefined;
  return CATEGORY_SERVICE_ID[category];
}

export function getBlogPostsForService(
  serviceId: string,
  posts: CollectionEntry<'blog'>[],
  limit = 3,
): CollectionEntry<'blog'>[] {
  const category = Object.entries(CATEGORY_SERVICE_ID).find(([, id]) => id === serviceId)?.[0];
  const keywords = serviceDetails.find((s) => s.id === serviceId)?.name.toLowerCase() ?? serviceId;

  return posts
    .map((post) => {
      let score = 0;
      if (category && post.data.category === category) score += 3;
      if (post.data.tags.some((t) => t.toLowerCase().includes(keywords.split(' ')[0]))) score += 2;
      if (post.data.title.toLowerCase().includes(serviceId.replace(/-/g, ' '))) score += 1;
      return { post, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf())
    .slice(0, limit)
    .map((r) => r.post);
}

export function getBlogPostsForCategory(
  category: string | undefined,
  posts: CollectionEntry<'blog'>[],
  excludeSlug: string,
  limit = 3,
): CollectionEntry<'blog'>[] {
  if (!category) return [];
  return posts
    .filter((p) => p.id !== excludeSlug && p.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit);
}
