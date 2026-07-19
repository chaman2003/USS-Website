export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    slug: 'sunil-b',
    name: 'Sunil B',
    role: 'Founder &\nChief Executive Officer (CEO)',
    bio: 'Drives product direction and client delivery, with a focus on building software that holds up in the real world.',
    image: '/people/sunil-b.jpg',
    linkedIn: 'https://www.linkedin.com/in/sunil-b-2004s/',
  },
  {
    slug: 'chaman-s',
    name: 'Chaman S',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Leads engineering and architecture, turning business requirements into scalable, maintainable systems.',
    image: '/people/chaman-s.jpg',
    linkedIn: 'https://www.linkedin.com/in/chaman2003/',
  },
  {
    slug: 'uday-kiran',
    name: 'Uday Kiran',
    role: 'Co-Founder',
    bio: 'Shapes company strategy and partnerships, bridging business goals with technical execution.',
    image: '/people/uday-kiran.png',
  },
  {
    slug: 'gowtham-s',
    name: 'Gowtham S',
    role: 'AI Engineer',
    bio: 'Designs and implements intelligent systems, bringing machine learning capabilities to client products.',
    image: '/people/gowtham-s.png',
    linkedIn: 'https://www.linkedin.com/in/gowtham-s-vk013/',
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
