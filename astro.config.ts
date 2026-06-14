import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://unitysoftwaresolution.com', // override per-deploy via SITE_URL until the real domain is live
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
