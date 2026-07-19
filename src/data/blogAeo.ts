const OVERRIDES: Record<string, { quickAnswer?: string; faqs?: { question: string; answer: string }[] }> = {
  'ai-voice-agents-india': {
    quickAnswer:
      'AI voice agents answer phone calls in natural language, book appointments, and handle support—often in English and Indian regional languages—without rigid IVR menus.',
    faqs: [
      {
        question: 'How much do AI voice agents cost in India?',
        answer:
          'Costs depend on call volume, integrations, and languages. MVPs can start lean; USS scopes projects based on telephony, CRM, and workflow complexity.',
      },
      {
        question: 'Which platforms integrate with voice AI?',
        answer: 'Common integrations include Twilio, Plivo, CRMs, calendars, and custom APIs for order or ticket lookup.',
      },
    ],
  },
  'security-data-privacy-dpdp-india': {
    quickAnswer:
      'India’s DPDP Act requires lawful data collection, purpose limitation, security safeguards, and user rights—engineering teams should implement privacy by design.',
    faqs: [
      {
        question: 'Does USS help with DPDP compliance?',
        answer:
          'We implement access controls, encryption, data minimization, and audit-friendly logging aligned with DPDP requirements.',
      },
    ],
  },
};

export function getBlogAeo(
  slug: string,
  title: string,
  description: string,
  category?: string,
): { quickAnswer: string; faqs: { question: string; answer: string }[] } {
  const override = OVERRIDES[slug];
  const topic = title.split(':')[0].replace(/^How |^The /, '').trim();

  return {
    quickAnswer: override?.quickAnswer ?? description,
    faqs: override?.faqs ?? [
      {
        question: `What is the main takeaway from "${topic}"?`,
        answer: description,
      },
      {
        question: `Who should read this ${category ?? 'article'}?`,
        answer: `Founders, product leaders, and engineering teams in India exploring ${category?.toLowerCase() ?? 'software'} strategy and execution.`,
      },
      {
        question: 'Can USS help implement these ideas?',
        answer:
          'Yes. Unity Software Solution builds web, mobile, AI, and custom software in Bengaluru for startups and enterprises.',
      },
    ],
  };
}
