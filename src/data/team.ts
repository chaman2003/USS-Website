export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Sunil B',
    role: 'Founder &\nChief Executive Officer (CEO)',
    bio: 'Drives product direction and client delivery, with a focus on building software that holds up in the real world.',
    image: '/people/sunil-b.jpg',
    linkedIn: 'https://www.linkedin.com/in/sunil-b-2004s/',
  },
  {
    name: 'Chaman S',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Leads engineering and architecture, turning business requirements into scalable, maintainable systems.',
    image: '/people/chaman-s.jpg',
    linkedIn: 'https://www.linkedin.com/in/chaman2003/',
  },
  {
    name: 'M D Abhinav Karthik',
    role: 'Software Developer',
    bio: 'Builds mobile applications end to end, crafting fast, reliable experiences across Android and iOS.',
    image: '/people/abhinav-karthik.jpg',
    linkedIn: 'https://www.linkedin.com/in/mdabhinav4002/',
  },
];
