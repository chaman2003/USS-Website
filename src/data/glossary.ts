export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  related?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'An AI pattern that retrieves relevant documents before generating an answer, improving accuracy for company-specific knowledge.',
    related: ['llm', 'vector-database'],
  },
  {
    slug: 'llm',
    term: 'Large Language Model (LLM)',
    definition:
      'A neural network trained on large text corpora to understand and generate human-like language, used in chatbots and automation.',
    related: ['rag', 'prompt-engineering'],
  },
  {
    slug: 'core-web-vitals',
    term: 'Core Web Vitals',
    definition:
      "Google's metrics for user experience: LCP (loading), INP (interactivity), and CLS (visual stability).",
    related: ['seo', 'performance'],
  },
  {
    slug: 'headless-commerce',
    term: 'Headless Commerce',
    definition:
      'An e-commerce architecture where the storefront and backend are decoupled, enabling flexible frontends and omnichannel experiences.',
    related: ['api', 'ecommerce'],
  },
  {
    slug: 'dpdp',
    term: 'DPDP Act',
    definition:
      "India's Digital Personal Data Protection Act governing how organizations collect, process, and protect personal data.",
    related: ['cybersecurity', 'compliance'],
  },
  {
    slug: 'ci-cd',
    term: 'CI/CD',
    definition:
      'Continuous Integration and Continuous Deployment — automated pipelines that test and ship code changes reliably.',
    related: ['devops', 'cloud'],
  },
  {
    slug: 'mvp',
    term: 'MVP (Minimum Viable Product)',
    definition:
      'The smallest version of a product that delivers core value, used to validate ideas before full-scale development.',
    related: ['startups', 'product'],
  },
  {
    slug: 'seo',
    term: 'SEO (Search Engine Optimization)',
    definition:
      'Practices that help websites rank in search engines through technical quality, content relevance, and authority signals.',
    related: ['core-web-vitals', 'structured-data'],
  },
  {
    slug: 'structured-data',
    term: 'Structured Data',
    definition:
      'Machine-readable markup (often JSON-LD) that helps search engines understand page content for rich results.',
    related: ['seo', 'schema-org'],
  },
  {
    slug: 'schema-org',
    term: 'Schema.org',
    definition:
      'A collaborative vocabulary for structured data used by Google, Bing, and other search engines.',
    related: ['structured-data', 'seo'],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
