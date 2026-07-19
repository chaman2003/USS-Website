const STRIP_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'msclkid',
]);

export function cleanCanonicalUrl(url: URL): string {
  const copy = new URL(url.href);
  for (const key of [...copy.searchParams.keys()]) {
    if (STRIP_PARAMS.has(key)) copy.searchParams.delete(key);
  }
  copy.hash = '';
  return copy.href.replace(/\/$/, '') || copy.origin;
}
