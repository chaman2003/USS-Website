import type { SitemapItem } from '@astrojs/sitemap';
import { ChangeFreqEnum } from '@astrojs/sitemap';

const LEGAL = ['/privacy-policy', '/terms-and-conditions'];

export function serializeSitemapItem(item: SitemapItem): SitemapItem {
  const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';

  if (path === '/') {
    return { ...item, priority: 1.0, changefreq: ChangeFreqEnum.DAILY };
  }

  if (path.startsWith('/blog/') && path !== '/blog') {
    return { ...item, priority: 0.8, changefreq: ChangeFreqEnum.WEEKLY };
  }

  if (path === '/blog') {
    return { ...item, priority: 0.85, changefreq: ChangeFreqEnum.DAILY };
  }

  if (LEGAL.some((p) => path === p)) {
    return { ...item, priority: 0.3, changefreq: ChangeFreqEnum.YEARLY };
  }

  if (path === '/work' || path.startsWith('/work/')) {
    return { ...item, priority: 0.75, changefreq: ChangeFreqEnum.MONTHLY };
  }

  if (path === '/services' || path === '/contact' || path === '/faq') {
    return { ...item, priority: 0.9, changefreq: ChangeFreqEnum.WEEKLY };
  }

  return { ...item, priority: 0.7, changefreq: ChangeFreqEnum.MONTHLY };
}
