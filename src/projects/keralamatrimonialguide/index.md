---
title: "Keralamatrimonialguide"
description: "A full-stack matrimonial platform built from scratch, scaled to 3000+ active users with a multi-gateway payment system, audit trail, and a production-grade observability stack."
date: "2024-01-01"
tech: ["Laravel", "Livewire", "MySQL", "Razorpay", "PWA", "Flare", "Umami"]
image: "/projects/kmg/dashboard.png"
featured: true
---

## Overview

Keralamatrimonialguide is a matrimonial service platform I designed and built from scratch after a detailed requirements session with the client — a business that had been operating manually for four years. The goal was to digitise their workflow, remove pain points their customers repeatedly faced, and build a system that could grow without requiring a rewrite.

The platform is live, actively growing, and currently handles **30,000+ page views per week** with a 68% week-over-week visitor growth rate. 93% of traffic is mobile — meaning every backend decision had to account for lean, fast responses on low-end Android devices over mobile data.

---

## Platform at a Glance

The admin dashboard gives a live view of the platform's state — ₹8,99,784 in total revenue processed, 2,639 paid accounts, and 4,200+ profiles across Hindu, Christian, and Muslim categories.

---

## 1. Schema Design with Realistic Load Simulation

Before writing a single controller, I mapped the full domain model from the client's four years of operational experience. Every relationship — user profiles, subscription tiers, interests, profile views, contact requests — was planned upfront.

Crucially, I built out **Seeders and Model Factories** before building any feature. This let me populate the database with thousands of realistic profiles from day one of development, which exposed query performance problems at a simulated scale before they could ever reach production. Most developers skip this step and only discover slowness when real users are already affected.

I also enabled **slow query logging** in the application layer — any query exceeding a threshold is flagged and logged, giving an early warning system before any query can become a production problem.

**Result:** Zero performance incidents in production. The system has scaled to 3000+ active users without a single query-related outage.

---

## 2. Tamper-Proof Audit Trail with Soft Deletes

Every meaningful user action — account updates, profile edits, page-level interactions — is logged with a timestamp and the context of where in the application it occurred. This isn't just for analytics; it's a deliberate data protection layer.

The system uses **soft deletes** throughout. Profile views, interest signals, and contact requests are never hard-deleted — they are preserved until an admin explicitly purges a profile. Transient session activity is cleaned up automatically via a **scheduled cron job** (running during off-peak hours) with a 3-month retention window.

This design proved its value in production. A subscriber deleted their own account and then contacted the client demanding a refund, claiming the platform was faulty. The audit logs showed the exact timestamp of the delete action and the page it was triggered from — a clear, timestamped record that resolved the dispute immediately.

**Result:** Zero successful fraudulent refund claims. The audit system has been the deciding factor in at least one verified dispute.

---

## 3. Resilient Payment Infrastructure with Idempotent Webhooks

The payment system supports **4 active payment gateways** — Razorpay as primary, with three fallbacks. Any system outside our control is treated as a potential point of failure, and a fallback exists for every one of them. Admins can switch gateways manually if needed.

Every payment flows through a dedicated webhook endpoint. The endpoint does two things: it **validates the request signature** (HMAC verification to confirm the ping is genuinely from the gateway) and then **flips the subscription state** for the corresponding order — but only if that order is still in a pending state.

That last condition is the idempotency guarantee. Razorpay will re-ping a webhook endpoint if it doesn't receive a `200 OK` response. Without the status check, a retry would double-credit a user. With it, the second ping finds an already-processed order and exits immediately. The endpoint returns `200` synchronously and fast — no heavy processing that could cause a timeout and trigger a false retry.

**Result:** Zero duplicate payment credits. Zero missed payments. The system handles Razorpay's retry behaviour correctly by design.

---

## 4. Production Observability Stack

Running a live platform for a paying customer requires knowing when things break before the customer does.

The stack includes **Flare** for real-time exception monitoring, **slow SQL query logging** at the application layer, **Umami** for self-hosted privacy-friendly traffic analytics, and all background jobs scheduled during off-peak hours to avoid competing with user traffic.

The traffic data below also drove product decisions directly:

<img src="/projects/kmg/traffic-7d.png" alt="Keralamatrimonialguide — 7-day traffic: 30.4k views, 1.9k visitors, growing 68% week-over-week" />

<img src="/projects/kmg/traffic-24h.png" alt="Keralamatrimonialguide — 24-hour traffic pattern showing peak usage in evening hours" />

Seeing that `/search` accounts for **55% of all page views** made it clear that the filtering backend — not the homepage — is the product's core, and that's where engineering effort has been prioritised.

<img src="/projects/kmg/traffic-pages.png" alt="Keralamatrimonialguide — page breakdown showing /search at 13.2k views, 93% mobile traffic" />

Key numbers visible here:
- `/search` — 13,200 views (55% of all traffic)
- **93% mobile**, 90% Android — the backend must serve lean, fast responses
- **5m 48s average session** — deep user engagement, not casual browsing
- 99% direct traffic — a highly retained, returning user base

**Result:** Issues are caught and resolved proactively. The platform has maintained consistent uptime with no user-reported performance degradation.

---

## 5. Scalable Search Architecture with a Clear Growth Roadmap

Search is the heart of the product — users filter profiles by age (date of birth range), caste, religion, and marital status. The query is built using a **dedicated Eloquent query scope** that composes these filters cleanly, keeping the controller thin and the filtering logic testable and reusable.

Indexes are in place on the most-used filter columns — `dob`, `caste`, `religion`, and `marital_status`. Infinite scroll is handled with server-side pagination, avoiding the client needing to load all profiles upfront.

The current architecture is designed to serve up to ~10,000 profiles efficiently. Beyond that, two known limitations kick in: **OFFSET-based pagination** becomes expensive as users scroll deeper, and **single-column indexes** stop being effective when multiple filters combine. The planned solution — already scoped — is a **read replica** for all search queries and a migration to **cursor-based pagination** with **composite indexes** on the most common filter combinations.

**Result:** Search performs fast at current scale. The scaling ceiling is known, documented, and has a concrete solution already designed.

---

## What's Next

- **Algorithmic profile matching** — ranking profiles by compatibility score rather than just filtering
- **Weekly digest notifications** — a queue-driven system that batches and sends each subscriber a curated list of new profiles matching their preferences
- **Ticketing system** — structured support workflow for the admin team
- **PWA push notifications** — already in progress, enabling native-like re-engagement on Android
