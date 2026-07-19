import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import remarkReadingTime from 'remark-reading-time';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { pagefindIntegration } from './src/integrations/pagefind';
import { remarkInternalLinks } from './src/lib/remark/internal-links';
import { serializeSitemapItem } from './src/lib/seo/sitemap-meta';

const site = process.env.SITE_URL ?? 'https://unitysoftwaresolution.com';

export default defineConfig({
  site,
  compressHTML: true,
  build: { format: 'directory' },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  env: {
    schema: {
      PUBLIC_GA_MEASUREMENT_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GSC_VERIFICATION: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GISCUS_REPO: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GISCUS_REPO_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_GISCUS_CATEGORY_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      INDEXNOW_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/search') &&
        !page.includes('/og/') &&
        !/\/services\/[^/]+\/?$/.test(page.replace(/\/$/, '')),
      serialize: serializeSitemapItem,
    }),
    mdx(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    pagefindIntegration(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkInternalLinks] as any,
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      rehypeAutolinkHeadings,
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
