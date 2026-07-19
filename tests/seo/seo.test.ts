import { describe, it, expect } from 'vitest';
import { cleanCanonicalUrl } from '../../src/lib/seo/canonical';
import { categorySlug, tagSlug, slugify } from '../../src/lib/seo/blog-utils';
import { buildPageGraph, buildFAQPage, buildHowTo, buildSpeakable } from '../../src/lib/seo/schema';
import { getServiceById } from '../../src/data/serviceDetails';
import { glossaryTerms } from '../../src/data/glossary';

import { metaDescription } from '../../src/lib/seo/meta';
import {
  blogSearchPhrases,
  guideSearchPhrases,
  metaKeywords,
  metaWithVariants,
  pickVariants,
  serviceSearchPhrases,
  solutionSearchPhrases,
  withLocationVariants,
} from '../../src/lib/seo/keywords';

describe('meta', () => {
  it('pads short descriptions to SEO range', () => {
    const d = metaDescription(['Short tag page about AI tools.']);
    expect(d.length).toBeGreaterThanOrEqual(120);
    expect(d.length).toBeLessThanOrEqual(160);
  });
});

describe('keywords', () => {
  it('picks stable variants from slug hash', () => {
    const a = pickVariants(['one', 'two', 'three'], 'web-development', 2);
    const b = pickVariants(['one', 'two', 'three'], 'web-development', 2);
    expect(a).toEqual(b);
    expect(a).toHaveLength(2);
  });

  it('expands terms with Bengaluru and Bangalore', () => {
    const expanded = withLocationVariants(['web development']);
    expect(expanded).toContain('web development Bengaluru');
    expect(expanded).toContain('web development Bangalore');
  });

  it('builds service search phrases with locations', () => {
    const phrases = serviceSearchPhrases('ai-applications');
    expect(phrases.some((p) => p.includes('Bengaluru') || p.includes('Bangalore'))).toBe(true);
  });

  it('builds blog search phrases from tags and category', () => {
    const phrases = blogSearchPhrases('ai-voice-agents-india', ['voice-agents', 'india'], 'AI');
    expect(phrases.length).toBeGreaterThan(5);
    expect(phrases.some((p) => p.toLowerCase().includes('voice'))).toBe(true);
  });

  it('builds solution and guide phrase lists', () => {
    expect(solutionSearchPhrases('startup-mvp').length).toBeGreaterThan(3);
    expect(guideSearchPhrases('ai-for-indian-businesses').length).toBeGreaterThan(3);
  });

  it('weaves variants into meta descriptions in range', () => {
    const d = metaWithVariants('Short base about AI apps.', 'ai-applications', [
      'voice AI agents Bengaluru',
      'RAG development India',
    ]);
    expect(d.length).toBeGreaterThanOrEqual(120);
    expect(d.length).toBeLessThanOrEqual(160);
  });

  it('formats meta keywords without duplicates per slug', () => {
    const k = metaKeywords(['alpha', 'beta', 'gamma', 'delta'], 'mobile-app', 3);
    expect(k.split(', ')).toHaveLength(3);
  });
});

describe('canonical', () => {
  it('strips UTM parameters', () => {
    const url = cleanCanonicalUrl(new URL('https://example.com/page?utm_source=x&gclid=abc'));
    expect(url).toBe('https://example.com/page');
  });
});

describe('blog-utils', () => {
  it('slugifies categories', () => {
    expect(categorySlug('Web Development')).toBe('web-development');
    expect(tagSlug('Core Web Vitals')).toBe('core-web-vitals');
    expect(slugify('  Hello World! ')).toBe('hello-world');
  });
});

describe('schema', () => {
  it('builds a page graph with organization and breadcrumbs', () => {
    const graph = buildPageGraph({
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ],
      page: { url: 'https://unitysoftwaresolution.com/blog', name: 'Blog', description: 'Test' },
    });
    expect(graph['@graph']).toHaveLength(4);
    expect(JSON.stringify(graph)).toContain('Unity Software Solution');
  });

  it('builds FAQPage schema', () => {
    const faq = buildFAQPage([{ question: 'Q?', answer: 'A.' }]);
    expect(faq['@type']).toBe('FAQPage');
    expect(faq.mainEntity).toHaveLength(1);
  });

  it('builds HowTo and Speakable schema', () => {
    const howTo = buildHowTo('Process', [{ name: 'Step 1', text: 'Do thing' }]);
    expect(howTo['@type']).toBe('HowTo');
    expect(howTo.step).toHaveLength(1);

    const speakable = buildSpeakable('https://unitysoftwaresolution.com/blog/test', ['h1']);
    expect(speakable.speakable.cssSelector).toEqual(['h1']);
  });
});

describe('content data', () => {
  it('has all service detail pages', () => {
    expect(getServiceById('web-development')).toBeDefined();
    expect(getServiceById('ai-applications')?.faqs?.length).toBeGreaterThan(0);
  });

  it('has glossary terms with unique slugs', () => {
    const slugs = glossaryTerms.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
