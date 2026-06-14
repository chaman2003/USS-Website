---
title: "Web Accessibility in 2026: WCAG 2.2, the EAA, and What Compliance Actually Requires"
description: "The European Accessibility Act deadline passed in June 2025. Here is what WCAG 2.2 compliance means and what organizations needed to have in place."
pubDate: 2026-02-22
author: "Unity Software Solution"
tags: ["Accessibility", "WCAG", "European Accessibility Act"]
category: "Web Development"
draft: false
---

Web accessibility moved from a best-practice conversation to a legal compliance conversation in 2025. The European Accessibility Act (EAA) enforcement deadline passed on June 28, 2025, and WCAG 2.2 was adopted as an ISO standard (ISO/IEC 40500:2025). For web teams that had been treating accessibility as a stretch goal, the landscape changed materially.

## WCAG 2.2: What Changed From 2.1

WCAG 2.2 was published by the W3C in October 2023 and updated in December 2024. It is now the current recommended version and is backwards compatible: conforming to 2.2 implies conformance with 2.1 and 2.0.

Nine new success criteria were added. The focus is heavily on **cognitive accessibility and mobile usability**, two areas that previous versions under-addressed:

- **Focus Appearance (2.4.11 / 2.4.13):** keyboard focus indicators must meet minimum size and contrast ratios. The days of removing the default browser outline with `outline: none` and leaving nothing in its place are over.
- **Dragging Movements (2.5.7):** any functionality that uses a drag interaction must also be achievable through a single pointer action (click/tap). Critical for users with motor impairments.
- **Target Size Minimum (2.5.8):** interactive targets must be at least 24×24 CSS pixels. Tiny icon buttons fail this criterion.
- **Consistent Help (3.2.6):** help mechanisms (chat widgets, phone numbers, contact links) must appear in a consistent location across pages.
- **Redundant Entry (3.3.7):** forms in a multi-step process cannot require users to re-enter information already provided in the same session.
- **Accessible Authentication (3.3.8 / 3.3.9):** cognitive function tests (remembering passwords, solving puzzles) cannot be the only authentication option unless alternatives are provided. This affects CAPTCHA implementations directly.

One criterion was also removed: 4.1.1 Parsing is now obsolete, as modern browsers handle malformed HTML gracefully and it was no longer meaningful to test against.

## The European Accessibility Act: Practical Scope

The EAA applies to any company placing products or services in EU markets, including non-EU businesses with EU customers. The scope covers:

- Consumer-facing e-commerce websites and mobile apps
- Banking and financial services websites and apps
- Travel and transport booking platforms
- Media streaming services and telephony

Micro-enterprises (under 10 employees, under €2 million turnover) are exempt. Everyone else is expected to demonstrate conformance.

The technical standard referenced by the EAA is **EN 301 549**, which currently maps to WCAG 2.1 AA as the web accessibility baseline. The next version of EN 301 549 is expected to incorporate WCAG 2.2. Organizations that have already reached 2.2 AA conformance are well-positioned regardless of which version becomes the official reference.

Non-compliance carries real penalties, fines up to €3 million per violation in some member states, and in serious cases, suspension of the right to sell into EU markets. Beyond documentation of conformance, the EAA also requires an **accessibility statement**, staff training, and documented processes for handling user complaints.

## What WCAG 3.0 Is and Is Not

WCAG 3.0 (formerly "Silver") is an early working draft with no finalization date. The W3C has been explicit that it should not be the basis for compliance strategies today. Its approach differs fundamentally from 2.x, it uses a scoring model rather than pass/fail criteria, but until it is finalized and adopted into legal frameworks, WCAG 2.2 AA is the target to build for.

## Beyond Checklists

One thing the accessibility community has consistently noted: automated testing tools catch roughly 30–40% of accessibility issues. The rest require manual testing with screen readers, keyboard-only navigation, and input from users with disabilities. An accessibility audit that consists only of a Lighthouse score is not a compliance audit.

USS builds accessibility requirements into web projects from the design phase  -  because retrofitting accessible patterns onto an existing codebase is significantly more expensive than designing for them from the start.
