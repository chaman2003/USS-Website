---
title: "Edge Rendering in 2025: Where Web Apps Actually Run Now"
description: "Edge computing and serverless are converging. Here is how Vercel Fluid Compute, Cloudflare Workers, and in-region rendering are reshaping app deployment."
pubDate: 2026-01-15
author: "Unity Software Solution"
tags: ["Edge Computing", "Serverless", "Web Performance"]
category: "Web Development"
draft: false
---

For a few years the conventional wisdom was straightforward: move everything to the edge, run code in data centers close to every user, and latency problems go away. The reality turned out to be more nuanced. 2025 saw a correction  -  not a retreat from edge computing, but a more honest accounting of when it helps and when it does not, combined with genuine architectural innovation from the major platforms.

## Vercel's Fluid Compute: Rethinking Serverless

The most significant infrastructure shift of 2025 in the web hosting space came from Vercel in February with **Fluid Compute**  -  a model they describe as combining serverless efficiency with server-like flexibility. The core idea: instead of spinning up a fresh, isolated function instance for every request (the classic serverless model), Fluid Compute reuses existing compute capacity when available, collapsing concurrent requests into the same instance.

The claimed results are substantial  -  up to 95% reduction in cold starts and meaningfully lower compute costs for traffic patterns with concurrent requests. By mid-2025, Vercel reported handling over 45 billion weekly requests through the system.

In June 2025, Vercel added **Active CPU pricing**, which bills only for the time a function is actually executing rather than total wall-clock time. For workloads that spend significant time waiting  -  calling external APIs, waiting on database queries, sitting idle during an LLM response stream  -  this changes the economics considerably. AI-integrated web applications in particular benefit from not paying for inference wait time.

## True Edge vs. In-Region: The Real Trade-Off

The 2025 consensus among infrastructure engineers is clearer than it was in 2020:

**True global edge** (running in hundreds of points of presence worldwide) is the right tool for:
- Latency-sensitive, stateless operations: JWT validation, geolocation lookups, A/B routing, redirect rules
- Static asset delivery
- Request manipulation that needs to happen before a response is served

**In-region compute** (a smaller number of well-located data centers) is often better for:
- Server-side rendering of React and other framework apps
- Operations that need to query a database  -  because the database usually lives in one region, and a function running geographically far from the database pays higher latency on every query
- Workloads with heavy CPU processing, where the overhead of a global edge network's function isolation model adds cost without benefit

The nuance matters: for a Next.js app with a Postgres database in us-east-1, running SSR at the edge in Tokyo adds a cross-continental database round-trip to every render. Running it in us-east-1 is faster end-to-end for users who can tolerate slightly more network transit time but benefit from single-hop data access.

## Cloudflare's Platform Evolution

Cloudflare has moved its developer platform firmly into agent-infrastructure territory. Their AI Gateway evolved from a simple proxy into a unified inference layer across multiple AI providers, with real-time spend controls and request logging. The Durable Objects model  -  persistent state at the edge  -  continues to be the most compelling primitive for stateful edge applications.

Other 2025 additions worth noting:
- Browser Rendering (now Browser Run) runs on Containers with significantly higher concurrency limits, enabling more scalable server-side browser automation
- Workflows got a rearchitected control plane for higher concurrency on durable execution patterns
- Rust Workers gained panic and abort recovery, making them more production-reliable

## What This Means for Architecture Decisions

The practical question for any new web project is no longer "edge or serverless?" but "what runs where, and why?" A well-architected 2025 application might use:

- CDN edge for static assets and simple redirects
- Edge middleware for auth token validation and routing
- In-region serverless (or Fluid Compute) for SSR and API routes
- Durable Objects or similar primitives for real-time features and agent state

The platforms are also converging on **durable execution** as the substrate for AI agent workflows  -  long-running tasks that span minutes or hours, survive failures, and require persistent state. This is a different workload profile from the stateless HTTP request handling that edge infrastructure was originally designed for.

USS evaluates deployment infrastructure as part of project architecture, matching rendering strategy and compute placement to the actual access patterns and data topology of each application.
