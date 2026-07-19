export interface Industry {
  slug: string;
  title: string;
  description: string;
  painPoints: string[];
  services: string[];
  caseStudy?: { title: string; slug: string };
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    title: 'Real Estate Software Development',
    description:
      'CRM, promoter portals, lead management, and field operations software for Indian real estate developers.',
    painPoints: [
      'Fragmented lead data across brokers and campaigns',
      'Slow site-visit scheduling and follow-ups',
      'Reporting across projects and sales teams',
    ],
    services: ['custom-software', 'web-development', 'mobile-app', 'api-integration'],
    caseStudy: { title: 'PVS Promoters', slug: 'pvs-promoters' },
    faqs: [
      {
        question: 'Do you build real estate CRMs?',
        answer: 'Yes—we build custom CRM and promoter platforms tailored to Indian real estate workflows.',
      },
    ],
  },
  {
    slug: 'fashion-retail',
    title: 'Fashion & Retail E-Commerce',
    description: 'Inventory, B2B ordering, and omnichannel platforms for garment and retail brands.',
    painPoints: ['SKU complexity and size/color matrices', 'Wholesale vs retail channels', 'Order fulfillment visibility'],
    services: ['ecommerce', 'erp-systems', 'api-integration'],
    caseStudy: { title: 'Fashion Garment Platform', slug: 'fashion-garment-platform' },
    faqs: [
      {
        question: 'Can you integrate with existing ERP?',
        answer: 'We connect storefronts and admin tools to ERP, accounting, and logistics APIs.',
      },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Software Development',
    description: 'Appointment systems, patient portals, and HIPAA/DPDP-aware health tech for clinics and providers.',
    painPoints: ['Appointment no-shows', 'Patient communication at scale', 'Secure health data handling'],
    services: ['ai-applications', 'web-development', 'cybersecurity'],
    faqs: [
      {
        question: 'Can voice AI handle appointment booking?',
        answer: 'Yes—inbound voice agents can book, reschedule, and answer FAQs in English and regional languages.',
      },
    ],
  },
  {
    slug: 'fintech',
    title: 'Fintech App Development India',
    description: 'Payments, lending workflows, and secure financial platforms for Indian fintech startups.',
    painPoints: ['Regulatory compliance', 'Payment gateway integration', 'Fraud and access control'],
    services: ['custom-software', 'cybersecurity', 'cloud-devops'],
    faqs: [
      {
        question: 'Do you integrate UPI and payment gateways?',
        answer: 'We integrate Razorpay, Cashfree, and other gateways with secure server-side verification.',
      },
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing ERP & Operations',
    description: 'Inventory, production tracking, and ERP modules for Indian manufacturing SMBs.',
    painPoints: ['Stock visibility across locations', 'Production planning', 'Vendor and purchase workflows'],
    services: ['erp-systems', 'custom-software', 'api-integration'],
    faqs: [
      {
        question: 'Custom ERP vs off-the-shelf?',
        answer: 'Custom fits unique shop-floor workflows; we help you decide based on scale and integration needs.',
      },
    ],
  },
  {
    slug: 'education',
    title: 'EdTech Platform Development',
    description: 'LMS, assessment platforms, and student engagement tools for Indian education companies.',
    painPoints: ['Content delivery at scale', 'Assessment integrity', 'Multilingual learning experiences'],
    services: ['web-development', 'mobile-app', 'ai-applications'],
    faqs: [
      {
        question: 'Can you add AI tutoring features?',
        answer: 'We build RAG-based tutors, adaptive quizzes, and multilingual chat assistants for learners.',
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
