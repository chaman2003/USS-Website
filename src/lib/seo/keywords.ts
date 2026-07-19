import { metaDescription } from './meta';

/** Location spellings and phrasing variants for Indian local SEO. */
export const LOCATION = {
  city: 'Bengaluru',
  cityAlt: 'Bangalore',
  region: 'Karnataka',
  country: 'India',
  paired: 'Bengaluru (Bangalore)',
  inCity: ['in Bengaluru', 'in Bangalore', 'in Karnataka', 'in India'],
} as const;

/** Brand and navigational query variants. */
export const BRAND_PHRASES = [
  'Unity Software Solution',
  'USS software',
  'USS Bengaluru',
  'Unity Software Solution Bengaluru',
  'Unity Software Solution Bangalore',
  'Unity Software Solution India',
  'software studio Bengaluru',
  'software company Bangalore',
  'custom software development India',
  'IT company Bengaluru',
  'software development agency India',
] as const;

/** Core service synonyms — how people search, not just official service names. */
export const SERVICE_SYNONYMS: Record<string, readonly string[]> = {
  'web-development': [
    'website development',
    'web application development',
    'web design and development',
    'responsive website development',
    'corporate website development',
    'web dev agency',
    'frontend development',
    'full stack web development',
  ],
  'mobile-app': [
    'mobile app development',
    'Android app development',
    'iOS app development',
    'cross-platform mobile apps',
    'React Native development',
    'Flutter app development',
    'mobile application company',
  ],
  'custom-software': [
    'custom software development',
    'bespoke software',
    'tailored software solutions',
    'enterprise software development',
    'business software development',
    'software product development',
  ],
  'ai-applications': [
    'AI application development',
    'AI software development',
    'voice AI agents',
    'RAG development',
    'LLM integration',
    'AI chatbot development',
    'generative AI solutions',
    'conversational AI India',
  ],
  'erp-systems': [
    'ERP development',
    'ERP software',
    'enterprise resource planning',
    'inventory management software',
    'operations management system',
    'business management software',
  ],
  'ecommerce': [
    'e-commerce development',
    'online store development',
    'D2C platform development',
    'Shopify alternative custom',
    'headless commerce',
    'ecommerce website India',
  ],
  'api-integration': [
    'API integration services',
    'system integration',
    'third-party API development',
    'webhook automation',
    'middleware development',
  ],
  'cloud-devops': [
    'cloud infrastructure',
    'DevOps services',
    'CI/CD pipeline setup',
    'AWS cloud consulting',
    'cloud migration',
    'infrastructure as code',
  ],
  cybersecurity: [
    'cybersecurity services',
    'application security',
    'security audit',
    'secure software development',
    'DPDP compliance engineering',
    'penetration testing support',
  ],
};

export const INDUSTRY_SYNONYMS: Record<string, readonly string[]> = {
  'real-estate': [
    'real estate CRM',
    'property management software',
    'real estate portal development',
    'promoter software India',
    'real estate lead management',
  ],
  'fashion-retail': [
    'fashion e-commerce',
    'garment ERP',
    'retail inventory software',
    'B2B ordering platform',
    'omnichannel retail software',
  ],
  healthcare: [
    'healthcare software',
    'clinic management system',
    'patient portal development',
    'health tech India',
    'hospital appointment software',
  ],
  fintech: [
    'fintech app development',
    'payment app development',
    'lending platform software',
    'UPI integration development',
    'financial software India',
  ],
  manufacturing: [
    'manufacturing ERP',
    'production tracking software',
    'inventory management manufacturing',
    'shop floor software',
    'SMB manufacturing software India',
  ],
  education: [
    'EdTech development',
    'LMS development',
    'learning management system',
    'online education platform',
    'assessment software India',
  ],
};

export const TECHNOLOGY_SYNONYMS: Record<string, readonly string[]> = {
  astro: ['Astro framework', 'Astro developer', 'static site generator', 'islands architecture', 'Astro agency India'],
  nextjs: ['Next.js development', 'Next.js agency', 'React SSR', 'Next.js India', 'full stack React'],
  'react-native': [
    'React Native developer',
    'cross-platform app development',
    'React Native agency India',
    'mobile app React Native',
  ],
  python: ['Python development', 'Python backend', 'AI Python stack', 'FastAPI development', 'Django development India'],
  cloudflare: [
    'Cloudflare Pages',
    'Cloudflare Workers',
    'edge hosting',
    'CDN setup',
    'Cloudflare agency India',
  ],
  aws: ['AWS consulting', 'AWS cloud services', 'Amazon Web Services India', 'cloud architecture AWS'],
};

export const SOLUTION_SYNONYMS: Record<string, readonly string[]> = {
  'ai-voice-agents': [
    'voice AI agents India',
    'AI calling bot',
    'automated phone assistant',
    'inbound voice bot',
    'appointment booking AI',
    'conversational voice AI',
    'IVR replacement AI',
  ],
  'rag-knowledge-assistants': [
    'RAG assistant',
    'enterprise knowledge base AI',
    'document Q&A system',
    'internal chatbot over PDFs',
    'retrieval augmented generation',
    'company policy search AI',
  ],
  'ecommerce-d2c-india': [
    'D2C e-commerce India',
    'online store development India',
    'UPI checkout integration',
    'headless e-commerce India',
    'direct to consumer website',
    'Indian D2C platform',
  ],
  'startup-mvp': [
    'MVP development India',
    'startup product development',
    'build MVP fast',
    'founder MVP agency',
    'minimum viable product Bengaluru',
    'startup tech partner India',
  ],
};

export const GUIDE_SYNONYMS: Record<string, readonly string[]> = {
  'ai-for-indian-businesses': [
    'AI guide India',
    'enterprise AI India',
    'voice AI India guide',
    'RAG for business India',
    'AI adoption Indian companies',
    'generative AI India 2026',
  ],
  'web-performance-guide': [
    'Core Web Vitals guide',
    'website speed optimization',
    'INP optimization',
    'web performance India',
    'fast website checklist',
    'page speed best practices',
  ],
  'cybersecurity-for-smb': [
    'SMB cybersecurity India',
    'small business security guide',
    'DPDP compliance guide',
    'ransomware protection SMB',
    'secure software checklist',
  ],
  'startup-tech-playbook': [
    'startup technology guide',
    'founder tech decisions',
    'MVP to scale playbook',
    'startup stack India',
    'bootstrapping vs VC tech',
  ],
  'ecommerce-india-guide': [
    'e-commerce India guide',
    'D2C growth India',
    'UPI payments e-commerce',
    'WhatsApp commerce guide',
    'Indian online retail guide',
  ],
};

/** Category-level blog synonyms — combined with post tags at build time. */
export const BLOG_CATEGORY_SYNONYMS: Record<string, readonly string[]> = {
  AI: ['artificial intelligence', 'machine learning', 'generative AI', 'LLM', 'AI India'],
  Startups: ['Indian startups', 'founder advice', 'startup growth', 'venture capital India', 'MVP'],
  'E-Commerce': ['e-commerce India', 'D2C', 'online retail', 'conversion optimization', 'UPI checkout'],
  Cybersecurity: ['cyber security', 'data privacy', 'DPDP Act', 'application security', 'zero trust'],
  'Web Development': ['web dev', 'frontend', 'Astro', 'React', 'Core Web Vitals', 'website performance'],
};

const TAG_PHRASE_MAP: Record<string, string> = {
  'voice-agents': 'voice AI agents',
  rag: 'RAG pipelines',
  dpdp: 'DPDP compliance',
  mvp: 'MVP development',
  bengaluru: 'Bengaluru startups',
  upi: 'UPI payments',
  'core-web-vitals': 'Core Web Vitals',
  astro: 'Astro framework',
};

const TITLE_TEMPLATES = [
  (name: string) => `${name} Company in Bengaluru & Bangalore`,
  (name: string) => `${name} Services | Bengaluru, Karnataka, India`,
  (name: string) => `Hire a ${name} Team in India`,
  (name: string) => `${name} Agency — Bengaluru (Bangalore)`,
] as const;

/** Stable hash from slug — same page always gets same variant (no randomness per build). */
export function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function pickVariants<T>(items: readonly T[], slug: string, count: number): T[] {
  if (items.length === 0) return [];
  const start = hashSlug(slug) % items.length;
  const out: T[] = [];
  for (let i = 0; i < Math.min(count, items.length); i++) {
    out.push(items[(start + i) % items.length]);
  }
  return out;
}

/** Cross-product core terms with location modifiers for long-tail coverage. */
export function withLocationVariants(terms: readonly string[]): string[] {
  const out = new Set<string>();
  for (const term of terms) {
    out.add(term);
    out.add(`${term} ${LOCATION.city}`);
    out.add(`${term} ${LOCATION.cityAlt}`);
    out.add(`${term} ${LOCATION.country}`);
    out.add(`${term} in ${LOCATION.city}`);
    out.add(`${term} in ${LOCATION.cityAlt}`);
  }
  return [...out];
}

export function serviceSearchPhrases(serviceId: string): string[] {
  const base = SERVICE_SYNONYMS[serviceId] ?? [];
  return withLocationVariants(base);
}

export function industrySearchPhrases(slug: string): string[] {
  const base = INDUSTRY_SYNONYMS[slug] ?? [];
  return withLocationVariants(base);
}

export function technologySearchPhrases(slug: string): string[] {
  const base = TECHNOLOGY_SYNONYMS[slug] ?? [];
  return withLocationVariants(base);
}

export function solutionSearchPhrases(slug: string): string[] {
  const base = SOLUTION_SYNONYMS[slug] ?? [];
  return withLocationVariants(base);
}

export function guideSearchPhrases(slug: string): string[] {
  const base = GUIDE_SYNONYMS[slug] ?? [];
  return withLocationVariants(base);
}

/** Build blog keyword phrases from category, tags, and slug. */
export function blogSearchPhrases(slug: string, tags: string[] = [], category?: string): string[] {
  const base = new Set<string>();
  if (category && BLOG_CATEGORY_SYNONYMS[category]) {
    BLOG_CATEGORY_SYNONYMS[category].forEach((t) => base.add(t));
  }
  for (const tag of tags) {
    const mapped = TAG_PHRASE_MAP[tag] ?? tag.replace(/-/g, ' ');
    base.add(mapped);
    base.add(`${mapped} guide`);
    base.add(`${mapped} India`);
  }
  const slugPhrase = slug.replace(/-/g, ' ');
  base.add(slugPhrase);
  base.add(`${slugPhrase} 2026`);
  return withLocationVariants([...base]);
}

export function solutionPageTitle(title: string, slug: string): string {
  const variants = [
    title,
    `${title} | USS India`,
    `${title} — Bengaluru & Bangalore`,
    `Hire USS for ${title.replace(/^AI /, '')}`,
  ];
  return variants[hashSlug(slug) % variants.length];
}

export function guidePageTitle(title: string, slug: string): string {
  const short = title.replace(/\s*\(2026\)\s*$/, '').trim();
  const variants = [
    title,
    `${short} | USS Bengaluru`,
    `${short} — India Edition`,
    `${short} for Indian Businesses`,
  ];
  return variants[hashSlug(slug) % variants.length];
}

export function servicePageTitle(serviceName: string, serviceId: string): string {
  const template = TITLE_TEMPLATES[hashSlug(serviceId) % TITLE_TEMPLATES.length];
  return template(serviceName);
}

export function technologyPageTitle(techName: string, slug: string): string {
  const variants = [
    `${techName} Development Agency India`,
    `Hire ${techName} Developers in Bengaluru`,
    `${techName} Company — Bangalore & India`,
    `${techName} Consulting | USS Bengaluru`,
  ];
  return variants[hashSlug(slug) % variants.length];
}

export function industryPageTitle(title: string, slug: string): string {
  const variants = [
    title,
    `${title} | Bengaluru & Bangalore`,
    `${title} Company India`,
    `${title} — USS Karnataka`,
  ];
  return variants[hashSlug(slug) % variants.length];
}

/** Meta description with one rotated synonym phrase woven in naturally. */
export function metaWithVariants(base: string, slug: string, synonyms: readonly string[]): string {
  const phrase = pickVariants(synonyms, slug, 1)[0];
  if (!phrase) return metaDescription([base]);
  return metaDescription([base, `Also: ${phrase}.`]);
}

/** Comma-separated meta keywords (light signal for Bing; not stuffed). */
export function metaKeywords(phrases: string[], slug: string, max = 12): string {
  return pickVariants(phrases, slug, max).join(', ');
}

/** Visible related-search line for on-page semantic coverage. */
export function relatedSearchLine(phrases: string[], slug: string, count = 8): string {
  return pickVariants(phrases, slug, count).join(' · ');
}

/** Extra FAQ using alternate phrasing — helps voice search and PAA. */
export function synonymFaq(
  serviceId: string,
  _serviceName: string,
): { question: string; answer: string } | null {
  const map: Record<string, { q: string; a: string }> = {
    'web-development': {
      q: 'Do you offer website development in Bangalore (Bengaluru)?',
      a: 'Yes. USS builds responsive websites and web apps for clients in Bengaluru, Bangalore, and across India—same team, remote or on-site as needed.',
    },
    'mobile-app': {
      q: 'Who builds Android and iOS apps in India?',
      a: 'USS develops native and cross-platform mobile applications for startups and enterprises in Bengaluru and pan-India, from MVP to app-store launch.',
    },
    'custom-software': {
      q: 'What is bespoke software development?',
      a: 'Bespoke (custom) software is built around your workflows—not generic SaaS. USS designs tailored platforms for Indian businesses that need full control and integration.',
    },
    'ai-applications': {
      q: 'Can you build voice AI agents and RAG assistants in India?',
      a: 'Yes. We ship voice agents, RAG knowledge assistants, and LLM automation for Indian businesses, including multilingual and telephony integrations.',
    },
    'erp-systems': {
      q: 'Do you develop custom ERP for small manufacturers?',
      a: 'We build modular ERP and operations software for Indian SMBs—inventory, production, finance, and integrations without forcing off-the-shelf limits.',
    },
    ecommerce: {
      q: 'Do you build D2C e-commerce websites in India?',
      a: 'Yes—custom storefronts with UPI-ready payments, inventory, admin dashboards, and headless or monolithic architectures as your scale requires.',
    },
    'api-integration': {
      q: 'Who does API integration and system connectivity in Bengaluru?',
      a: 'USS connects CRMs, ERPs, payment gateways, and third-party APIs so your tools share data automatically—reducing manual ops work.',
    },
    'cloud-devops': {
      q: 'Do you provide DevOps and AWS cloud setup in India?',
      a: 'We architect CI/CD pipelines, containerized deployments, and AWS or Cloudflare infrastructure for reliable production workloads.',
    },
    cybersecurity: {
      q: 'Do you offer application security and secure coding in India?',
      a: 'USS embeds security reviews, auth hardening, and DPDP-aware data practices into web, mobile, and API projects from design through launch.',
    },
  };
  const entry = map[serviceId];
  if (!entry) return null;
  return { question: entry.q, answer: entry.a };
}
