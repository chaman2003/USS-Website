# USS SEO — Links to Visit & Configure

> **Site:** [unitysoftwaresolution.com](https://unitysoftwaresolution.com)  
> Work top to bottom. Check `- [ ]` when done.

---

## 1. Cloudflare (env vars for SEO)

**Link:** [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → your project → **Settings** → **Environment variables**

| Variable | Set to |
|----------|--------|
| `SITE_URL` | `https://unitysoftwaresolution.com` |
| `PUBLIC_GSC_VERIFICATION` | From step 2 below (content value only) |
| `INDEXNOW_KEY` | From step 4 below (mark **Encrypted**) |

After any change → **Deployments** → **Retry deployment**.

---

## 2. Google Search Console

**Link:** [search.google.com/search-console](https://search.google.com/search-console)

| Step | Action |
|------|--------|
| Add property | URL prefix → `https://unitysoftwaresolution.com` |
| Verify | HTML tag → copy **content=** value → paste into Cloudflare `PUBLIC_GSC_VERIFICATION` → redeploy → click **Verify** |
| Submit sitemap | **Sitemaps** → add `sitemap-index.xml` |

**Request indexing** (URL Inspection → paste URL → Request indexing):

- [ ] [unitysoftwaresolution.com/](https://unitysoftwaresolution.com/)
- [ ] […/services](https://unitysoftwaresolution.com/services)
- [ ] […/services/ai-applications](https://unitysoftwaresolution.com/services/ai-applications)
- [ ] […/local/bengaluru](https://unitysoftwaresolution.com/local/bengaluru)
- [ ] […/blog](https://unitysoftwaresolution.com/blog)
- [ ] […/blog/ai-voice-agents-india](https://unitysoftwaresolution.com/blog/ai-voice-agents-india)

**Check weekly:** [Performance](https://search.google.com/search-console/performance/search-analytics) · [Pages](https://search.google.com/search-console/index) · [Core Web Vitals](https://search.google.com/search-console/core-web-vitals)

---

## 3. Bing Webmaster Tools

**Link:** [bing.com/webmasters](https://www.bing.com/webmasters)

- [ ] Add site → **Import from Google Search Console** (easiest)
- [ ] **Sitemaps** → submit `https://unitysoftwaresolution.com/sitemap-index.xml`

---

## 4. IndexNow (faster Bing indexing)

**Generate key** (PowerShell), then:

1. Create file in repo: `public/<YOUR_KEY>.txt` (content = key only)
2. Set same key as `INDEXNOW_KEY` in Cloudflare → redeploy
3. **Verify:** `https://unitysoftwaresolution.com/<YOUR_KEY>.txt`

**Submit URLs after new posts** (local terminal):

```bash
npm run indexnow https://unitysoftwaresolution.com/blog/your-slug
```

**Docs:** [indexnow.org](https://www.indexnow.org/documentation)

---

## 5. Rich Results Test (validate schema)

**Link:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

Paste each URL → fix any **errors**:

- [ ] [/](https://unitysoftwaresolution.com/)
- [ ] [/faq](https://unitysoftwaresolution.com/faq)
- [ ] [/services/ai-applications](https://unitysoftwaresolution.com/services/ai-applications)
- [ ] [/blog/ai-voice-agents-india](https://unitysoftwaresolution.com/blog/ai-voice-agents-india)
- [ ] [/local/bengaluru](https://unitysoftwaresolution.com/local/bengaluru)

**Backup validator:** [validator.schema.org](https://validator.schema.org/)

---

## 6. Google Business Profile (local SEO)

**Link:** [business.google.com](https://business.google.com)

| Field | Value |
|-------|-------|
| Name | Unity Software Solution |
| Website | `https://unitysoftwaresolution.com` |
| Service area | Bengaluru, Karnataka, India |
| Email | uss@unitysoftwaresolution.com |

- [ ] Verify listing
- [ ] Add logo + photos
- [ ] First post → link to [/local/bengaluru](https://unitysoftwaresolution.com/local/bengaluru)

---

## 7. Social / OG cache (when shares look wrong)

**Facebook / LinkedIn preview:** [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)  
→ paste URL → **Scrape Again**

**Test OG image directly:** [unitysoftwaresolution.com/og/home.png](https://unitysoftwaresolution.com/og/home.png)

---

## 8. Verify live SEO files (open in browser)

- [ ] [robots.txt](https://unitysoftwaresolution.com/robots.txt)
- [ ] [sitemap-index.xml](https://unitysoftwaresolution.com/sitemap-index.xml)
- [ ] [rss.xml](https://unitysoftwaresolution.com/rss.xml)
- [ ] [llms.txt](https://unitysoftwaresolution.com/llms.txt)

---

## 9. Optional authority links (submit site)

- [ ] [astro.build/showcase](https://astro.build/showcase)
- [ ] [linkedin.com/company/unity-software-solution](https://www.linkedin.com/company/unity-software-solution/) — set website URL
- [ ] [instagram.com/unitysoftwaresolutionuss_25](https://www.instagram.com/unitysoftwaresolutionuss_25/) — bio link

---

## 10. Edit keywords in code (when GSC shows new queries)

**File:** `src/lib/seo/keywords.ts` → add phrases to the right `*_SYNONYMS` map → deploy.

**Blog FAQs:** `src/data/blogAeo.ts`

---

## Local checks (before deploy)

```bash
npm run build
npm run seo:audit
```

---

*That's it — no other SEO dashboards required to launch.*
