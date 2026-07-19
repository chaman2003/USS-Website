/**
 * Submit URLs to IndexNow (Bing/Yandex). Requires INDEXNOW_KEY env var.
 * Usage: npx tsx scripts/indexnow.ts [url1 url2 ...]
 */
const SITE = process.env.SITE_URL ?? 'https://unitysoftwaresolution.com';
const KEY = process.env.INDEXNOW_KEY;

async function main() {
  if (!KEY) {
    console.error('INDEXNOW_KEY not set — skipping IndexNow submission');
    process.exit(0);
  }

  const urls = process.argv.slice(2);
  if (urls.length === 0) {
    console.error('Usage: npx tsx scripts/indexnow.ts <url> [url...]');
    process.exit(1);
  }

  const host = new URL(SITE).host;
  const body = {
    host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow: ${res.status} ${res.statusText}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
