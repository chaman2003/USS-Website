export const BLOG_CATEGORY_ORDER = [
  'AI',
  'Web Development',
  'Startups',
  'Cybersecurity',
  'E-Commerce',
] as const;

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function categorySlug(category: string): string {
  return slugify(category);
}

export function tagSlug(tag: string): string {
  return slugify(tag);
}
