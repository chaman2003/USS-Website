export interface Service {
  id: string;
  name: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom, responsive websites and web applications built for performance and growth.',
    href: '/services#web-development',
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    description: "Native and cross-platform apps for Android and iOS that put your business in your customers' hands.",
    href: '/services#mobile-app',
  },
  {
    id: 'custom-software',
    name: 'Custom Software Development',
    description: 'Tailored solutions designed around your exact workflows and business logic.',
    href: '/services#custom-software',
  },
  {
    id: 'ai-applications',
    name: 'AI-Enabled Applications',
    description: 'Voice agents, RAG assistants, and AI-driven features built into your products.',
    href: '/services#ai-applications',
  },
  {
    id: 'erp-systems',
    name: 'ERP Systems',
    description: 'Centralised platforms to manage operations, inventory, finance, and teams from one place.',
    href: '/services#erp-systems',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platforms',
    description: 'Scalable online stores with secure payments, inventory management, and seamless UX.',
    href: '/services#ecommerce',
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    description: 'Connect your systems, automate workflows, and enable seamless data flow between platforms.',
    href: '/services#api-integration',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    description: 'Reliable deployment pipelines, cloud architecture, and infrastructure management.',
    href: '/services#cloud-devops',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security audits, secure coding practices, and protection built into every layer of your software.',
    href: '/services#cybersecurity',
  },
];
