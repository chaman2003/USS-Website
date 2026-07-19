export interface Comparison {
  slug: string;
  title: string;
  description: string;
  optionA: { name: string; points: string[] };
  optionB: { name: string; points: string[] };
  verdict: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'astro-vs-nextjs',
    title: 'Astro vs Next.js for Marketing Sites',
    description:
      'Choosing between Astro and Next.js for content-heavy, SEO-focused websites in 2026.',
    optionA: {
      name: 'Astro',
      points: [
        'Ships zero JS by default — excellent Core Web Vitals',
        'Islands architecture for selective interactivity',
        'Ideal for blogs, docs, and marketing pages',
      ],
    },
    optionB: {
      name: 'Next.js',
      points: [
        'Full React ecosystem and SSR/SSG flexibility',
        'Strong for app-like experiences with heavy client state',
        'Larger default JS payload on content pages',
      ],
    },
    verdict:
      'For USS client marketing sites and blogs, Astro often wins on performance and simplicity. Next.js fits when the product is a full web application.',
  },
  {
    slug: 'custom-software-vs-saas',
    title: 'Custom Software vs Off-the-Shelf SaaS',
    description:
      'When should Bengaluru startups and SMBs build custom software vs buy SaaS? A side-by-side guide on cost, speed, ownership, and long-term fit from USS.',
    optionA: {
      name: 'Custom Software',
      points: [
        'Tailored workflows and integrations',
        'Full data ownership and roadmap control',
        'Higher upfront investment, lower long-term lock-in',
      ],
    },
    optionB: {
      name: 'SaaS',
      points: [
        'Fast time-to-value for standard workflows',
        'Vendor handles maintenance and updates',
        'Per-seat costs and limited customization',
      ],
    },
    verdict:
      'Start with SaaS for commodity workflows; invest in custom when differentiation, complex integrations, or scale economics demand it.',
  },
  {
    slug: 'native-vs-cross-platform-mobile',
    title: 'Native vs Cross-Platform Mobile Apps',
    description:
      'Native Swift/Kotlin vs React Native/Flutter for Indian businesses: compare performance, time-to-market, cost, and when each approach wins for your mobile app.',
    optionA: {
      name: 'Native (Swift/Kotlin)',
      points: [
        'Best platform-specific performance and UX',
        'Full access to device APIs',
        'Separate codebases per platform',
      ],
    },
    optionB: {
      name: 'Cross-Platform (React Native/Flutter)',
      points: [
        'Shared codebase speeds MVP delivery',
        'Good performance for most business apps',
        'Some platform-specific polish may be needed',
      ],
    },
    verdict:
      'Cross-platform for MVPs and internal tools; native when performance, animations, or platform depth are critical.',
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
