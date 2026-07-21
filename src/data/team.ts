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
  {
    slug: 'gagan-s',
    name: 'Gagan S',
    role: 'Software Engineer',
    bio: 'Builds reliable application features across the stack, from clean APIs to polished user interfaces.',
    image: '/people/gagan-s.jpeg',
  },
  {
    slug: 'praveen-v',
    name: 'Praveen V',
    role: 'Software Engineer',
    bio: 'Ships production-ready code with a focus on performance, clarity, and maintainable architecture.',
    image: '/people/praveen-v.png',
    linkedIn: 'https://www.linkedin.com/in/praveen-v2/',
  },
  {
    slug: 'shree-madhu-n',
    name: 'Shree Madhu N',
    role: 'Software Engineer',
    bio: 'Turns requirements into working software with attention to detail across backend and frontend delivery.',
    image: '/people/shree-madhu-n.png?v=2',
    linkedIn: 'https://www.linkedin.com/in/shree-madhu-n-3225a7312/',
  },
  {
    slug: 'ramya-umesh-nayak',
    name: 'Ramya Umesh Nayak',
    role: 'Software Engineer',
    bio: 'Develops dependable software solutions with a practical, quality-first approach to every release.',
    image: '/people/ramya-umesh-naik.png',
    linkedIn: 'https://www.linkedin.com/in/ramya-naik-cse',
  },
  {
    slug: 'shwetha-b',
    name: 'Shwetha B',
    role: 'Chartered Accountant',
    bio: 'Keeps our finances, compliance, and reporting in order so the team can focus on building great software.',
    image: '/people/swetha-b.png',
    linkedIn: 'https://www.linkedin.com/in/swetha-b-254918336/',
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
