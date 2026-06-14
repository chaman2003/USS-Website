export interface FaqEntry {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  entries: FaqEntry[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'services',
    label: 'Services & Scope',
    entries: [
      {
        question: 'What services does Unity Software Solution offer?',
        answer:
          'We cover the full software lifecycle: web development, mobile apps, custom software, AI-enabled applications, ERP systems, e-commerce platforms, API integration, cloud infrastructure & DevOps, and cybersecurity. Whether you need a single product built or an existing system modernised, we can help.',
      },
      {
        question: 'Can you work on an existing project, or only build from scratch?',
        answer:
          'Both. We take on greenfield builds as well as existing codebases that need new features, a performance overhaul, or a migration. We start by reviewing what you have, then recommend whether to extend, refactor, or rebuild based on what serves the project best.',
      },
      {
        question: 'Do you design as well as build?',
        answer:
          'Yes. Product design, UI, and UX are part of how we work. We can take you from a rough idea through wireframes and interface design into a built, tested product, or slot into an existing design system if you already have one.',
      },
      {
        question: 'What size of business do you work with?',
        answer:
          'Startups, SMEs, and enterprises. Our approach stays the same regardless of size: understand the problem first, then build the right solution. The scope and infrastructure change, but the standard does not.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Timelines & Process',
    entries: [
      {
        question: 'How long does a typical project take?',
        answer:
          "It depends on scope. A focused MVP or marketing site can take a few weeks, while a full custom platform or AI system runs over several months. After our discovery conversation, we give you a realistic timeline with clear milestones, no vague estimates.",
      },
      {
        question: 'What does your engagement process look like?',
        answer:
          'Five steps: Discovery, Planning & Design, Development, Testing & Deployment, and Ongoing Support. We define architecture and a roadmap before writing code, then build iteratively with regular check-ins so there are no surprises.',
      },
      {
        question: 'How involved do I need to be during the project?',
        answer:
          'As involved as you want to be. We keep a steady rhythm of check-ins and share progress regularly, so you always know where things stand. Most clients prefer a short weekly sync plus async updates, but we adapt to how your team likes to work.',
      },
      {
        question: 'What happens if requirements change mid-project?',
        answer:
          "Changing requirements are normal, and our iterative process is built for them. We reprioritise the roadmap together, talk through any impact on timeline or scope, and keep moving. You stay in control of what gets built next.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Engagement',
    entries: [
      {
        question: 'How do you approach pricing?',
        answer:
          "We scope each project individually and quote based on the work involved. There are no off-the-shelf packages. Once we understand your requirements, we provide a transparent breakdown so you know exactly what you're paying for.",
      },
      {
        question: 'Do you offer fixed-price or time-based engagements?',
        answer:
          'Both, depending on what fits the work. Well-defined projects suit a fixed quote against an agreed scope. Open-ended or evolving work often runs better on a retainer or time-and-materials basis. We will recommend the model that gives you the best value and clarity.',
      },
      {
        question: 'Who owns the code and intellectual property?',
        answer:
          'You do. On completion and final payment, the source code and associated intellectual property are yours. We hand over the repository and documentation so you are never locked in.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support & Maintenance',
    entries: [
      {
        question: 'Do you provide support after launch?',
        answer:
          'Yes. Ongoing support is part of how we work, not an add-on. We offer post-launch monitoring, updates, and improvements so your software keeps performing as your business grows.',
      },
      {
        question: 'What does ongoing support include?',
        answer:
          'Monitoring, bug fixes, security patches, dependency updates, and small enhancements. For products that keep evolving, we can also run a continuous improvement cycle where new features ship on a regular cadence.',
      },
      {
        question: 'What if we need help long after the project ends?',
        answer:
          "You can reach out any time. We keep documentation and handover notes so picking work back up is straightforward, whether it's a quick fix months later or a new phase of development.",
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
    entries: [
      {
        question: 'What technologies do you use?',
        answer:
          'We choose the right tools for each job rather than forcing one stack. Typical work spans modern web frameworks, native and cross-platform mobile, cloud platforms like AWS and GCP, Docker, and AI tooling including LLMs, RAG pipelines, and voice/telephony integrations.',
      },
      {
        question: 'Do you build AI and machine-learning features?',
        answer:
          'Yes. We build AI-enabled applications including LLM-powered assistants, retrieval-augmented generation over your own data, and voice and telephony agents. We focus on practical, reliable AI that solves a real problem rather than features bolted on for their own sake.',
      },
      {
        question: 'How do you handle security and data privacy?',
        answer:
          'Security is built in, not added later. We follow secure coding practices, apply least-privilege access, keep dependencies patched, and design with data protection in mind. For sensitive domains we can align the build with the compliance requirements you operate under.',
      },
      {
        question: 'Where will my application be hosted?',
        answer:
          'Wherever fits your needs and budget, commonly AWS, GCP, or modern edge platforms. We set up the infrastructure, deployment pipelines, and monitoring, and we can deploy into your own cloud account so you retain full ownership and control.',
      },
    ],
  },
  {
    id: 'working-together',
    label: 'Working Together',
    entries: [
      {
        question: 'Are you based in Bengaluru? Do you work with remote clients?',
        answer:
          "We're based in Bengaluru, Karnataka, India, and we work with clients remotely across regions. Most collaboration happens over calls and shared tools, so location is rarely a barrier.",
      },
      {
        question: 'How do I get started with a project?',
        answer:
          'Reach out through our contact form with a short description of what you have in mind. A fully scoped brief or just an early idea both work. We respond within 24-48 hours to set up a conversation.',
      },
      {
        question: 'Is the first conversation free?',
        answer:
          'Yes. The initial discovery conversation is free and no-obligation. It is where we understand your goals, answer your questions, and figure out whether we are the right fit before anyone commits to anything.',
      },
    ],
  },
];

// Flat list, derived from the categories above. Used for the FAQPage
// structured data and consumed by tests.
export const faq: FaqEntry[] = faqCategories.flatMap((category) => category.entries);
