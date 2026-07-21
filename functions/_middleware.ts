const CANONICAL_HOST = 'unitysoftwaresolution.com';

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname !== CANONICAL_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Legacy /services/:slug URLs (with or without trailing slash) → main services page.
  const legacyService = url.pathname.match(/^\/services\/([^/]+)\/?$/);
  if (legacyService) {
    return Response.redirect(`${url.origin}/services`, 301);
  }

  return context.next();
};
