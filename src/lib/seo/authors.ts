import { getTeamMember } from '../../data/team';
import type { TeamMember } from '../../data/team';

const CATEGORY_AUTHOR_SLUG: Record<string, string> = {
  AI: 'gowtham-s',
  Cybersecurity: 'chaman-s',
  'Web Development': 'chaman-s',
  'E-Commerce': 'sunil-b',
  Startups: 'uday-kiran',
};

export function resolveBlogAuthor(category?: string): TeamMember | undefined {
  if (!category) return getTeamMember('chaman-s');
  const slug = CATEGORY_AUTHOR_SLUG[category];
  return slug ? getTeamMember(slug) : getTeamMember('chaman-s');
}
