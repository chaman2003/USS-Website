export interface ProcessStep {
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    body: 'We start by understanding your business, goals, and constraints.',
  },
  {
    title: 'Planning & Design',
    body: 'Architecture, UX, and project roadmap defined before any code is written.',
  },
  {
    title: 'Development',
    body: 'Iterative builds with regular check-ins, so there are no surprises.',
  },
  {
    title: 'Testing & Deployment',
    body: 'Rigorous testing followed by smooth, secure deployment.',
  },
  {
    title: 'Ongoing Support',
    body: 'Post-launch monitoring, updates, and improvements as your business grows.',
  },
];
