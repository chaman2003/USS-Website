export interface PillarGuide {
  slug: string;
  title: string;
  description: string;
  spokes: string[];
  sections: { heading: string; body: string }[];
}

export const pillarGuides: PillarGuide[] = [
  {
    slug: 'ai-for-indian-businesses',
    title: 'The Complete Guide to AI for Indian Businesses (2026)',
    description:
      'A definitive hub on voice AI, RAG, agents, regulation, and deployment patterns for Indian startups and enterprises.',
    spokes: [
      'ai-voice-agents-india',
      'ai-rag-enterprise-knowledge-2026',
      'ai-agents-workflow-automation',
      'ai-multimodal-models-business',
      'ai-small-language-models-edge',
      'ai-regulation-india-compliance',
      'ai-coding-assistants-development',
    ],
    sections: [
      {
        heading: 'Where AI creates ROI first',
        body: 'Indian businesses see the fastest returns in high-volume support (voice and chat), internal knowledge search (RAG), and workflow automation—not generic chatbots bolted onto legacy systems.',
      },
      {
        heading: 'Multilingual and compliance reality',
        body: 'Deployments must handle English plus Hindi/regional languages, and align engineering practices with India’s DPDP Act for data handling, retention, and access controls.',
      },
      {
        heading: 'How USS builds AI products',
        body: 'We integrate telephony (Twilio, Plivo), retrieval pipelines, evaluation workflows, and secure APIs so AI features ship as production systems—not demos.',
      },
    ],
  },
  {
    slug: 'web-performance-guide',
    title: 'Web Performance & Core Web Vitals: Complete Guide',
    description:
      'Everything teams need to know about INP, LCP, CLS, Astro islands, edge rendering, and modern React patterns.',
    spokes: [
      'web-core-web-vitals-inp',
      'web-astro-islands-architecture',
      'web-edge-rendering-performance',
      'web-react-server-components-2026',
      'web-development-best-practices-2025',
      'web-accessibility-eaa-2025',
      'web-ai-assisted-development',
    ],
    sections: [
      {
        heading: 'Measure before you optimize',
        body: 'Use field data (CrUX, RUM) to prioritize INP and LCP on real devices and networks—especially mobile-first Indian users on 4G.',
      },
      {
        heading: 'Architecture choices matter',
        body: 'Content-heavy marketing sites often win with Astro’s zero-JS default; app-like experiences may need Next.js or partial hydration strategies.',
      },
      {
        heading: 'Performance is an SEO signal',
        body: 'Core Web Vitals influence rankings and conversion. Fast sites also reduce bounce and improve ad quality scores.',
      },
    ],
  },
  {
    slug: 'cybersecurity-for-smb',
    title: 'Cybersecurity for Indian SMBs: Complete Guide',
    description:
      'Practical defense for ransomware, supply chain risk, secure coding, zero trust, and DPDP-aligned data protection.',
    spokes: [
      'security-zero-trust-architecture',
      'security-ransomware-smb-defense',
      'security-supply-chain-attacks',
      'security-secure-coding-practices',
      'security-data-privacy-dpdp-india',
      'security-ai-threats-2026',
    ],
    sections: [
      {
        heading: 'Baseline controls',
        body: 'MFA, least-privilege access, patched dependencies, and backups remain the highest-leverage defenses for SMBs.',
      },
      {
        heading: 'Secure development',
        body: 'Threat modeling, code review, and CI security gates catch issues before production—cheaper than incident response.',
      },
      {
        heading: 'Privacy by design',
        body: 'Map data flows, minimize collection, and document retention so DPDP compliance is operational—not a checkbox.',
      },
    ],
  },
  {
    slug: 'startup-tech-playbook',
    title: 'The Indian Startup Tech Playbook',
    description:
      'From MVP to scale: funding context, SaaS go-global, Bengaluru ecosystem, bootstrapping vs VC, and AI-first company building.',
    spokes: [
      'startups-mvp-to-scale',
      'startups-saas-india-global',
      'startups-ai-first-companies',
      'startups-bengaluru-deeptech',
      'startups-bootstrapping-vs-vc',
      'startups-india-funding-2026',
      'bengaluru-startup-ecosystem',
    ],
    sections: [
      {
        heading: 'Ship the MVP, plan for scale',
        body: 'Choose stacks and architecture that unblock validation now without painting you into a corner—clear module boundaries and observability from day one.',
      },
      {
        heading: 'Capital strategy shapes tech',
        body: 'Bootstrapped teams optimize for revenue efficiency; VC-backed teams optimize for speed and market capture—the roadmap should reflect that.',
      },
      {
        heading: 'Bengaluru as a launchpad',
        body: 'Talent density, investor networks, and enterprise buyers make Bengaluru ideal for B2B SaaS, deeptech, and AI products with global ambition.',
      },
    ],
  },
  {
    slug: 'ecommerce-india-guide',
    title: 'E-Commerce in India: Complete Guide',
    description:
      'D2C growth, UPI checkout, headless commerce, WhatsApp selling, personalization, and conversion optimization.',
    spokes: [
      'ecommerce-india-d2c-growth',
      'ecommerce-payments-upi-checkout',
      'ecommerce-headless-commerce',
      'ecommerce-whatsapp-social-selling',
      'ecommerce-conversion-optimization',
      'ecommerce-ai-personalization-2026',
    ],
    sections: [
      {
        heading: 'Mobile-first commerce',
        body: 'Indian shoppers discover on social, pay with UPI, and expect fast mobile checkout—optimize for that funnel end to end.',
      },
      {
        heading: 'Composable stacks',
        body: 'Headless storefronts decouple UX from backend systems, enabling faster experiments and omnichannel catalogs.',
      },
      {
        heading: 'Conversion levers',
        body: 'Trust signals, payment friction reduction, and personalized merchandising compound—measure each step in the funnel.',
      },
    ],
  },
];

export function getPillarGuide(slug: string): PillarGuide | undefined {
  return pillarGuides.find((g) => g.slug === slug);
}
