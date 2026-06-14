---
title: "Core Web Vitals and INP: Where Web Performance Actually Stands"
description: "INP replaced FID as the Core Web Vitals interactivity metric, and the field data tells a clear story about where web performance still struggles."
pubDate: 2026-05-12
author: "Unity Software Solution"
tags: ["Performance", "Core Web Vitals", "INP"]
category: "Web Development"
draft: false
---

In March 2024, Google replaced First Input Delay (FID) with Interaction to Next Paint (INP) as the Core Web Vitals metric for interactivity. The effect was immediate in the numbers: the share of sites passing all Core Web Vitals on mobile dropped from 48% to 43% overnight  -  not because sites got worse, but because INP is a more demanding and accurate measure of how responsive a page feels.

Over a year later, that gap is instructive. The sites that were coasting on a good FID score now have a harder problem to solve.

## What INP Actually Measures, and Why It Is Harder

FID measured only the first interaction on a page. INP tracks every interaction throughout the session and reports the worst one at the 75th percentile of page loads. A page that is fast on load but sluggish when a user opens a dropdown, submits a filter, or clicks a tab will now show that in the metric.

The thresholds are:
- **Good:** ≤ 200ms
- **Needs improvement:** 201–500ms
- **Poor:** > 500ms

Field data from HTTP Archive's 2024 Web Almanac shows 74% of pages achieving good INP on mobile  -  up from 55% in 2022, which is genuine progress. Desktop sits at 97%. The 23-point gap between mobile and desktop is the defining challenge for most web teams, and it is driven by device capability more than anything else. A mid-range Android phone processing a React app with heavy event handlers is a fundamentally different runtime environment than a MacBook.

## The Culprits That Show Up in Real Data

When researchers look at what correlates with poor INP, a few patterns stand out consistently:

- **Consent management scripts**  -  pages with a consent provider active show significantly worse INP. These scripts often block the main thread during the interaction window right after load, when users are most likely to click something.
- **"User behavior" tracking scripts**  -  analytics and session replay tools that hook into every click and scroll event add processing overhead to every interaction.
- **High-traffic sites**  -  the top 1,000 most popular sites actually perform *worse* on INP than average, because popularity correlates with heavier JavaScript, more third-party scripts, and more complex interaction handlers.

## What Improves INP in Practice

The root cause of poor INP is almost always **long tasks blocking the main thread** during an interaction. The practical fixes follow from that:

- Break up long JavaScript tasks using `scheduler.yield()` or `setTimeout(0)` to yield back to the browser between chunks of work
- Move expensive computation off the main thread into Web Workers
- Defer or lazy-load non-critical third-party scripts, especially analytics and consent tools
- Minimize DOM size  -  larger DOMs take longer to update during interactions
- Profile with Chrome DevTools' Performance panel with interaction timing enabled; the flame chart will show exactly where the input delay, processing time, and presentation delay are coming from

## The Metric That Has Not Moved: TTFB

One number worth paying attention to is Time to First Byte, which has stayed roughly flat at around 42% good on mobile for five years running. It is the largest single component of Largest Contentful Paint for most pages, and it points directly at server response time and caching strategy. CDN configuration, ISR, and server-side rendering decisions all show up here. It is the next meaningful lever once INP is under control.

At USS, performance audits are part of how we evaluate web projects  -  not as a post-launch checklist item, but as a factor in architecture decisions from the start.
