import {
  ALTERNATE_NAMES,
  KNOWS_ABOUT,
  SAME_AS,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  absoluteUrl,
} from './site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildOrganization() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': absoluteUrl('/#organization'),
    name: SITE_NAME,
    alternateName: [...ALTERNATE_NAMES],
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo-opt.svg'),
    image: absoluteUrl('/og-default.jpg'),
    description:
      'Unity Software Solution (USS) is a Bengaluru and Bangalore software studio—a software development company building web, mobile, AI, and custom software for India.',
    email: SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    areaServed: ['India', 'Bengaluru', 'Karnataka'],
    sameAs: [...SAME_AS],
    knowsAbout: [...KNOWS_ABOUT],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SITE_EMAIL,
        contactType: 'sales',
        availableLanguage: ['English', 'en-IN'],
        areaServed: 'IN',
      },
    ],
  };
}

export function buildWebSite() {
  return {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: SITE_NAME,
    url: absoluteUrl('/'),
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: absoluteUrl('/search?q={search_term_string}'),
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildWebPage({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'en-IN',
  };
}

export function buildFAQPage(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBlogPosting({
  title,
  description,
  url,
  pubDate,
  updatedDate,
  authorName,
  authorPerson,
  image,
  category,
  tags,
  wordCount,
}: {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
  authorName: string;
  authorPerson?: {
    name: string;
    url: string;
    image?: string;
    jobTitle?: string;
  };
  image?: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
}) {
  const author = authorPerson
    ? {
        '@type': 'Person' as const,
        name: authorPerson.name,
        url: authorPerson.url,
        ...(authorPerson.image ? { image: absoluteUrl(authorPerson.image) } : {}),
        ...(authorPerson.jobTitle ? { jobTitle: authorPerson.jobTitle } : {}),
      }
    : { '@type': 'Organization' as const, name: authorName };

  return {
    '@type': 'BlogPosting',
    headline: title,
    description,
    author,
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate ?? pubDate).toISOString(),
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
    image: image ? absoluteUrl(image) : absoluteUrl('/og-default.jpg'),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo-opt.svg'),
      },
    },
    articleSection: category,
    keywords: tags?.join(', '),
    inLanguage: 'en-IN',
    ...(wordCount ? { wordCount } : {}),
  };
}

export function buildService({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': absoluteUrl('/#organization') },
    areaServed: SITE_LOCATION,
  };
}

export function buildCreativeWork({
  title,
  description,
  url,
  year,
  liveUrl,
  image,
}: {
  title: string;
  description: string;
  url: string;
  year?: string;
  liveUrl?: string;
  image?: string;
}) {
  return {
    '@type': 'CreativeWork',
    name: title,
    description,
    url,
    dateCreated: year,
    creator: { '@id': absoluteUrl('/#organization') },
    ...(image ? { image: absoluteUrl(image) } : {}),
    ...(liveUrl ? { sameAs: liveUrl } : {}),
  };
}

export function buildHowTo(name: string, steps: { name: string; text: string }[]) {
  return {
    '@type': 'HowTo',
    name,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildSpeakable(pageUrl: string, cssSelectors: string[]) {
  return {
    '@type': 'WebPage',
    '@id': `${pageUrl}#speakable`,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

export function buildPerson({
  name,
  role,
  bio,
  url,
  image,
  linkedIn,
}: {
  name: string;
  role: string;
  bio: string;
  url: string;
  image?: string;
  linkedIn?: string;
}) {
  return {
    '@type': 'Person',
    name,
    jobTitle: role.replace(/\n/g, ' '),
    description: bio,
    url,
    image: image ? absoluteUrl(image) : undefined,
    worksFor: { '@id': absoluteUrl('/#organization') },
    sameAs: linkedIn ? [linkedIn] : undefined,
  };
}

export function buildSoftwareApplication({
  name,
  description,
  url,
  applicationCategory = 'BusinessApplication',
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Web, Android, iOS',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    creator: { '@id': absoluteUrl('/#organization') },
  };
}

export function buildPageGraph({
  breadcrumbs,
  page,
  extra = [],
}: {
  breadcrumbs: BreadcrumbItem[];
  page: { url: string; name: string; description: string };
  extra?: Record<string, unknown>[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganization(),
      buildWebSite(),
      buildWebPage(page),
      buildBreadcrumbList(breadcrumbs),
      ...extra,
    ],
  };
}
