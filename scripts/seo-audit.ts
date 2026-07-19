import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const errors: string[] = [];
const warnings: string[] = [];

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function check() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found — run npm run build first');
    process.exit(1);
  }

  const htmlFiles = walk(DIST).filter((f) => f.endsWith('index.html') || f.endsWith('.html'));
  const titles = new Map<string, string>();

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf-8');
    const rel = file.replace(DIST, '').replace(/\\/g, '/');

    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    const descMatch = html.match(/name="description" content="([^"]*)"/);
    if (titleMatch && !rel.includes('/404')) {
      const t = titleMatch[1];
      if (titles.has(t)) warnings.push(`Duplicate title "${t}": ${titles.get(t)} and ${rel}`);
      else titles.set(t, rel);
    }
    if (descMatch && !rel.includes('/404')) {
      const len = descMatch[1].length;
      if (len < 80 || len > 170) warnings.push(`${rel}: description length ${len} (target 120-160)`);
    }

    if (rel.includes('/404')) {
      if (!html.includes('noindex')) warnings.push(`${rel}: 404 should have noindex`);
    } else {
      if (!html.includes('<title>')) errors.push(`${rel}: missing <title>`);
      if (!html.includes('rel="canonical"')) errors.push(`${rel}: missing canonical`);
      if (!html.includes('application/ld+json')) warnings.push(`${rel}: missing JSON-LD`);
      if (!html.includes('name="description"')) errors.push(`${rel}: missing meta description`);
    }
  }

  const requiredPaths = [
    '/rss.xml',
    '/atom.xml',
    '/feed.json',
    '/llms.txt',
    '/sitemap-index.xml',
    '/manifest.webmanifest',
    '/og-default.jpg',
  ];

  for (const p of requiredPaths) {
    const candidates = [
      join(DIST, p.slice(1)),
      join(DIST, p.slice(1), 'index.html'),
    ];
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
