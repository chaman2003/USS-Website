export interface Technology {
  slug: string;
  name: string;
  description: string;
  useCases: string[];
  relatedPosts: string[];
  relatedServices: string[];
}

export const technologies: Technology[] = [
  {
    slug: 'astro',
    name: 'Astro',
    description: 'Static-first framework with islands architecture—ideal for fast marketing sites and content hubs.',
    useCases: ['Marketing websites', 'Blogs and docs', 'SEO-critical landing pages'],
    relatedPosts: ['web-astro-islands-architecture', 'web-core-web-vitals-inp'],
    relatedServices: ['web-development'],
  },
  {
    slug: 'nextjs',
    name: 'Next.js',
    description: 'React framework for SSR, SSG, and full-stack apps with rich client interactivity.',
    useCases: ['SaaS dashboards', 'Authenticated portals', 'E-commerce storefronts'],
    relatedPosts: ['web-react-server-components-2026', 'web-core-web-vitals-inp'],
    relatedServices: ['web-development'],
  },
  {
    slug: 'react-native',
    name: 'React Native',
    description: 'Cross-platform mobile development for Android and iOS from a shared codebase.',
    useCases: ['Consumer apps', 'B2B field apps', 'MVP mobile products'],
    relatedPosts: ['startups-mvp-to-scale'],
    relatedServices: ['mobile-app'],
  },
  {
    slug: 'python',
    name: 'Python / AI Stack',
    description: 'Backend services, data pipelines, and AI/ML workloads with Python ecosystems.',
    useCases: ['RAG pipelines', 'API backends', 'Automation and ETL'],
    relatedPosts: ['ai-rag-enterprise-knowledge-2026', 'ai-agents-workflow-automation'],
    relatedServices: ['ai-applications', 'custom-software'],
  },
  {
    slug: 'cloudflare',
    name: 'Cloudflare',
    description: 'Edge hosting, CDN, Workers, and security for global performance.',
    useCases: ['Static site hosting', 'Edge APIs', 'DDoS protection'],
    relatedPosts: ['web-edge-rendering-performance'],
    relatedServices: ['cloud-devops'],
  },
  {
    slug: 'aws',
    name: 'AWS',
    description: 'Scalable cloud infrastructure for production workloads and enterprise integrations.',
    useCases: ['Container orchestration', 'Managed databases', 'CI/CD pipelines'],
    relatedPosts: ['web-edge-rendering-performance'],
    relatedServices: ['cloud-devops'],
  },
];

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}
