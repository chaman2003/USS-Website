export const SITE_NAME = 'Unity Software Solution';
export const SITE_SHORT = 'USS';
export const SITE_TAGLINE = 'Software Studio, Bengaluru';
export const SITE_EMAIL = 'uss@unitysoftwaresolution.com';
export const SITE_LOCATION = 'Bengaluru, Karnataka, India';

export const SAME_AS = [
  'https://www.linkedin.com/company/unity-software-solution/',
  'https://www.instagram.com/unitysoftwaresolutionuss_25/',
] as const;

export const SITE_ALTERNATE_NAMES = [
  'USS',
  'Unity Software Solution USS',
  'Unity Software Solution Bengaluru',
  'Unity Software Solution Bangalore',
  'USS Software',
  'USS Bengaluru',
  'USS Bangalore',
] as const;

/** @deprecated Use SITE_ALTERNATE_NAMES in schema; keyword-style names confuse Google site-name selection. */
export const ALTERNATE_NAMES = [
  ...SITE_ALTERNATE_NAMES,
  'software company Bengaluru',
  'software development company India',
  'IT company Bangalore',
  'custom software studio Karnataka',
] as const;

export const KNOWS_ABOUT = [
  'Web Development',
  'Website Development',
  'Mobile App Development',
  'Android App Development',
  'iOS App Development',
  'Custom Software Development',
  'Bespoke Software',
  'AI Applications',
  'Voice AI Agents',
  'RAG Development',
  'ERP Systems',
  'E-Commerce',
  'D2C Platforms',
  'API Integration',
  'Cloud Infrastructure',
  'DevOps',
  'Cybersecurity',
  'Software Studio Bengaluru',
  'Software Company Bangalore',
] as const;

export function getSiteUrl(): string {
  const url = import.meta.env.SITE ?? 'https://unitysoftwaresolution.com';
  return url.replace(/\/$/, '');
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path.startsWith('http')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function isPreviewDeploy(): boolean {
  const site = getSiteUrl();
  return site.includes('pages.dev') || import.meta.env.DEV;
}
