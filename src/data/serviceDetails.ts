export interface ServiceDetail {
  id: string;
  name: string;
  body: string;
  included: string[];
  differentiator?: boolean;
  subCapabilities?: string[];
  faqs?: { question: string; answer: string }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    body: "Custom websites and web applications built with modern frameworks for speed, responsiveness, and reliability. Whether it's a company website, a customer portal, or a complex web platform, we design and build with both user experience and long-term maintainability in mind.",
    included: [
      'Responsive design',
      'SEO-friendly architecture',
      'CMS integration where needed',
      'Performance optimization',
      'Ongoing maintenance',
    ],
    faqs: [
      {
        question: 'Do you build SEO-friendly websites?',
        answer:
          'Yes. We ship semantic HTML, fast Core Web Vitals, structured data, and clean URL architecture so your site is discoverable from day one.',
      },
      {
        question: 'Which web frameworks do you use?',
        answer:
          'We choose the stack per project—Astro, Next.js, React, and other modern frameworks—based on performance, content needs, and long-term maintainability.',
      },
    ],
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    body: 'Native (Android/iOS) and cross-platform mobile applications designed to deliver smooth, reliable experiences for your customers. From MVPs to full-featured apps, we handle design, development, testing, and deployment to app stores.',
    included: [
      'UI/UX design',
      'Cross-platform or native development',
      'Backend integration',
      'App store deployment',
      'Post-launch support',
    ],
    faqs: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer:
          'Both. We recommend native when platform-specific performance matters most, and cross-platform when speed-to-market and shared codebases are the priority.',
      },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software Development',
    body: "Every business runs differently. Off-the-shelf tools don't always fit. We build custom software designed around your specific processes, whether that's internal tools, automation systems, or industry-specific platforms.",
    included: [
      'Requirements analysis',
      'System architecture design',
      'Custom development',
      'Integration with existing tools',
      'Training & documentation',
    ],
    faqs: [
      {
        question: 'When does custom software make sense over SaaS?',
        answer:
          'When your workflows are unique, integrations are complex, or you need full ownership of data, roadmap, and economics at scale.',
      },
    ],
  },
  {
    id: 'ai-applications',
    name: 'AI-Enabled Applications',
    body: 'This is where USS goes beyond typical software development. We build AI-powered features and standalone AI products, including conversational voice agents, RAG-based knowledge assistants, intelligent automation pipelines, and multilingual AI systems tailored for Indian business contexts.',
    included: [],
    differentiator: true,
    subCapabilities: [
      'Voice AI agents (inbound/outbound calling, appointment booking, customer support)',
      'RAG (Retrieval-Augmented Generation) pipelines for document-based Q&A',
      'AI-powered chat and WhatsApp bots, including multilingual support',
      'Workflow automation using LLMs',
      'Integration with telephony platforms (Twilio, Plivo) and AI providers',
    ],
    faqs: [
      {
        question: 'Can you build RAG assistants for internal company documents?',
        answer:
          'Yes. We design retrieval pipelines, access controls, and evaluation workflows so teams can query policies, manuals, and operational data securely.',
      },
    ],
  },
  {
    id: 'erp-systems',
    name: 'ERP Systems',
    body: 'Centralized platforms that bring together inventory, finance, HR, sales, and operations into a single, manageable system. We design ERP solutions that fit how your business actually works, not the other way around.',
    included: [
      'Custom module development',
      'Data migration',
      'Role-based access control',
      'Reporting dashboards',
      'Third-party integrations',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platforms',
    body: 'End-to-end online store development, from product catalogs and secure checkout to inventory management and order tracking. Built to scale as your customer base grows.',
    included: [
      'Storefront design',
      'Payment gateway integration',
      'Inventory & order management',
      'Admin dashboards',
      'Performance optimization',
    ],
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    body: 'We connect your tools, platforms, and systems so data flows seamlessly, reducing manual work and enabling automation across your business.',
    included: [
      'Third-party API integration',
      'Custom API development',
      'Webhook automation',
      'System-to-system data sync',
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    body: 'Reliable, scalable infrastructure and deployment pipelines so your software runs smoothly, from development to production. We set up cloud environments and CI/CD workflows that reduce downtime and deployment friction.',
    included: [
      'Cloud architecture (AWS/GCP)',
      'CI/CD pipeline setup',
      'Containerization (Docker)',
      'Monitoring & logging',
      'Infrastructure scaling',
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    body: "Security isn't an add-on. It's part of how we build. We help businesses identify vulnerabilities, implement secure practices, and protect their systems and data from emerging threats.",
    included: [
      'Security audits',
      'Secure coding reviews',
      'Authentication & access control setup',
      'Data protection practices',
      'Compliance guidance',
    ],
    faqs: [
      {
        question: 'Do you help with DPDP Act compliance in India?',
        answer:
          'We help teams implement practical data protection controls, privacy-by-design patterns, and engineering practices aligned with India’s DPDP requirements.',
      },
    ],
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.id === id);
}
