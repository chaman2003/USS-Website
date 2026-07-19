export interface Solution {
  slug: string;
  title: string;
  description: string;
  audience: string;
  outcomes: string[];
  services: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'ai-voice-agents',
    title: 'AI Voice Agents for Indian Businesses',
    description:
      'Inbound and outbound voice AI for appointment booking, lead qualification, and customer support in English and regional languages.',
    audience: 'Healthcare, real estate, D2C, and service businesses',
    outcomes: [
      '24/7 call handling without scaling headcount',
      'CRM and calendar integrations',
      'Multilingual support for Indian markets',
    ],
    services: ['ai-applications', 'api-integration', 'cloud-devops'],
  },
  {
    slug: 'rag-knowledge-assistants',
    title: 'RAG Knowledge Assistants',
    description:
      'Internal Q&A over policies, manuals, and operational documents with access controls and evaluation workflows.',
    audience: 'Enterprises and growing teams with document-heavy operations',
    outcomes: [
      'Faster onboarding and policy lookup',
      'Reduced support ticket volume',
      'Audit-friendly retrieval with citations',
    ],
    services: ['ai-applications', 'custom-software', 'cybersecurity'],
  },
  {
    slug: 'ecommerce-d2c-india',
    title: 'D2C E-Commerce for India',
    description:
      'Headless or traditional storefronts with UPI payments, inventory sync, and conversion-focused UX.',
    audience: 'D2C brands and retail expanding online',
    outcomes: [
      'UPI and payment gateway integration',
      'Admin dashboards for orders and inventory',
      'Performance tuned for mobile-first shoppers',
    ],
    services: ['ecommerce', 'web-development', 'api-integration'],
  },
  {
    slug: 'startup-mvp',
    title: 'Startup MVP Development',
    description:
      'From idea to launch-ready MVP with scalable architecture, so you can validate with real users fast.',
    audience: 'Founders and early-stage startups in Bengaluru and beyond',
    outcomes: [
      'Ship in weeks, not months',
      'Technical due diligence-ready codebase',
      'Clear path from MVP to scale',
    ],
    services: ['web-development', 'mobile-app', 'cloud-devops'],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
