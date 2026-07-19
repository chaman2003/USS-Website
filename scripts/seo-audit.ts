import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const PUBLIC = join(process.cwd(), 'public');
const SITE = process.env.SITE_URL ?? 'https://unitysoftwaresolution.com';
const errors: string[] = [];
const warnings: string[] = [];

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function normalizePath(filePath: string): string {
  const rel = filePath.replace(DIST, '').replace(/\\/g, '/');
  if (rel.endsWith('/index.html')) return rel.replace('/index.html', '/') || '/';
  return rel;
}

function extractInternalLinks(html: string): string[] {
  const hrefs: string[] = [];
  const regex = /href="(\/[^"#?]*)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    hrefs.push(match[1].replace(/\/$/, '') || '/');
  }
  return hrefs;
}

function isServiceRedirect(rel: string): boolean {
  return /^\/services\/[^/]+\/?$/.test(rel);
}

function routeExists(href: string): boolean {
  const pathOnly = href.split('?')[0].split('#')[0];
  if (!pathOnly || pathOnly === '/') {
    return existsSync(join(DIST, 'index.html'));
  }

  const normalized = pathOnly.replace(/\/$/, '') || '/';
  const rel = normalized.startsWith('/') ? normalized.slice(1) : normalized;
  const candidates = [
    join(DIST, rel, 'index.html'),
    join(DIST, `${rel}.html`),
    join(DIST, rel),
    join(PUBLIC, rel),
  ];
  return candidates.some((candidate) => existsSync(candidate));
}

function isNavFooterLink(html: string, href: string): boolean {
  const navFooter = html.match(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/gi)?.join('') ?? '';
  return navFooter.includes(`href="${href}"`) || navFooter.includes(`href="${href}/"`);
}

function check() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found — run npm run build first');
    process.exit(1);
  }

  const htmlFiles = walk(DIST).filter((f) => f.endsWith('index.html') || f.endsWith('.html'));
  const titles = new Map<string, string>();
  const inbound = new Map<string, number>();

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf-8');
    const rel = normalizePath(file);

    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    const descMatch = html.match(/name="description" content="([^"]*)"/);
    const canonicalMatch = html.match(/rel="canonical" href="([^"]*)"/);
    const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;

    if (titleMatch && !rel.includes('/404')) {
      const t = titleMatch[1];
      if (titles.has(t)) warnings.push(`Duplicate title "${t}": ${titles.get(t)} and ${rel}`);
      else titles.set(t, rel);
    }
    if (descMatch && !rel.includes('/404')) {
      const len = descMatch[1].length;
      if (len < 80 || len > 170) warnings.push(`${rel}: description length ${len} (target 120-160)`);
    }

    if (!rel.includes('/404') && !rel.includes('/search') && !isServiceRedirect(rel)) {
      if (h1Count !== 1) warnings.push(`${rel}: expected 1 H1, found ${h1Count}`);
      if (canonicalMatch && !canonicalMatch[1].startsWith(SITE)) {
        warnings.push(`${rel}: canonical should use production SITE_URL`);
      }
    }

    if (rel.includes('/404') || isServiceRedirect(rel)) {
      if (rel.includes('/404') && !html.includes('noindex')) warnings.push(`${rel}: 404 should have noindex`);
    } else if (!rel.includes('/search')) {
      if (!html.includes('<title>')) errors.push(`${rel}: missing <title>`);
      if (!html.includes('rel="canonical"')) errors.push(`${rel}: missing canonical`);
      if (!html.includes('application/ld+json')) warnings.push(`${rel}: missing JSON-LD`);
      if (!html.includes('name="description"')) errors.push(`${rel}: missing meta description`);
    }

    for (const href of extractInternalLinks(html)) {
      const target = href === '/' ? '/' : href.replace(/\/$/, '');
      if (!routeExists(target)) {
        errors.push(`${rel}: broken internal link → ${target}`);
      }
      if (target === rel.replace(/\/$/, '')) continue;
      if (isNavFooterLink(html, target)) continue;
      inbound.set(target, (inbound.get(target) ?? 0) + 1);
    }
  }

  const indexable = htmlFiles
    .map(normalizePath)
    .filter((p) => !p.includes('/404') && !p.includes('/search') && !isServiceRedirect(p));

  for (const page of indexable) {
    const key = page.replace(/\/$/, '') || '/';
    const count = inbound.get(key) ?? 0;
    if (count === 0) warnings.push(`${page}: no inbound internal links outside nav/footer`);
    else if (count < 2) warnings.push(`${page}: only ${count} inbound content link(s) (target ≥2)`);
  }

  const requiredPaths = [
    '/rss.xml',
    '/atom.xml',
    '/feed.json',
    '/llms.txt',
    '/llms-full.txt',
    '/sitemap-index.xml',
    '/sitemap-images.xml',
    '/manifest.webmanifest',
    '/og-default.jpg',
    '/favicon.ico',
  ];

  for (const p of requiredPaths) {
    const candidates = [join(DIST, p.slice(1)), join(DIST, p.slice(1), 'index.html')];
    if (!candidates.some((c) => existsSync(c))) {
      errors.push(`Missing built asset: ${p}`);
    }
  }

  if (warnings.length) {
    console.warn('SEO audit warnings:');
    warnings.forEach((w) => console.warn(`  ⚠ ${w}`));
  }

  if (errors.length) {
    console.error('SEO audit failed:');
    errors.forEach((e) => console.error(`  ✗ ${e}`));
    process.exit(1);
  }

  console.log(`SEO audit passed (${htmlFiles.length} HTML files checked)`);
}

check();
