const ROBOTS = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://unitysoftwaresolution.com/sitemap-index.xml
Sitemap: https://unitysoftwaresolution.com/sitemap-images.xml
`;

export const onRequest: PagesFunction = () =>
  new Response(ROBOTS, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
