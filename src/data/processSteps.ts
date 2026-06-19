export interface ProcessStep {
  title: string;
  body: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    body: 'We start by understanding your business, goals, and constraints.',
    icon: 'discovery',
  },
  {
    title: 'Planning & Design',
    body: 'Architecture, UX, and project roadmap defined before any code is written.',
    icon: 'planning',
  },
  {
    title: 'Development',
    body: 'Iterative builds with regular check-ins, so there are no surprises.',
    icon: 'custom-software',
  },
  {
    title: 'Testing & Deployment',
    body: 'Rigorous testing followed by smooth, secure deployment.',
    icon: 'deployment',
  },
  {
    title: 'Ongoing Support',
    body: 'Post-launch monitoring, updates, and improvements as your business grows.',
    icon: 'support',
  },
];
