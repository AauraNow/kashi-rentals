---
name: seo-article
description: Daily SEO/AEO content run for Kashi Rentals. Researches upcoming Varanasi events and search demand, then writes ONE new article, refreshes ONE existing article, or logs research only, and opens a draft PR for human review. Use when asked to run the content pipeline, write a blog post for the site, or refresh an existing post.
---

# Kashi Rentals daily content run

Goal: earn search and AI-answer traffic from people planning a Varanasi trip, and turn it into scooty/bike bookings.
Every run ends in exactly one of: **a draft PR with one new article**, **a draft PR with one refreshed article**, or **a research-only update** (also a PR, touching only `content/seo/`).

Quality beats volume. Thin or near-duplicate pages hurt the whole site (Google's scaled-content-abuse policy), so "research only" is a good outcome on a day with nothing worth writing.

## Files

| File | Role |
|---|---|
| `content/seo/events.yaml` | Festival/season calendar: dates, lead time, rental angle, keywords |
| `content/seo/content-log.json` | `runs` (what each day did) and `backlog` (ideas with due dates) |
| `content/blog/*.mdx` | Published articles (front matter + markdown, rendered with `marked`, not MDX components) |
| `lib/config.ts` | Brand, contact, and booking links. Article text never repeats phone, WhatsApp or email |
| `lib/pricing.ts`, `lib/locations.ts` | The only source for prices and pickup hubs you may quote |

## Step 1: Load state and check the brakes

1. Read `events.yaml`, `content-log.json`, and the front matter of every post in `content/blog/`.
2. Use the GitHub MCP tools to list open PRs whose branch starts with `seo/`.
   - **3 or more are still open and unreviewed:** do a research-only run (Step 6, research path). Don't pile up work for the reviewer.
3. Count `new` and `refresh` runs in the log for the last 7 days. **4 or more:** research-only run.

## Step 2: Research (web search)

Today's date is in your context. Work out the **upcoming window**: events whose start date is between today and today + `publish_lead_days` + 7.

For each event in the window, and for the top 2-3 backlog items:
- **Verify dates** for any entry that is `unverified` or missing for the coming year. Use 2+ independent sources, preferring a panchang (drikpanchang.com) or an official/government source. Update `events.yaml` with what you found, setting `status` and `source`. If sources disagree, keep it `unverified` and do not write date-specific copy for it.
- **Find what people ask.** Search the event plus "Varanasi", "how to reach", "parking", "best ghat", "timings", "traffic", "date". Note the recurring questions; they become the FAQ.
- **Check the competition.** Look at what ranks now. Find the gap: practical logistics (roads, parking, timing, costs) is usually where competitors are weak and where a rental company has genuine authority.
- **Look for news**: traffic advisories, closures, new ghats or routes, changed rules. Hindi local outlets (Amar Ujala, Dainik Jagran, Patrika) publish Varanasi advisories first.

Also check for **refresh candidates**: posts whose content names a past year, whose prices disagree with `lib/pricing.ts`, which have no FAQ section (the validator warns about these), or which cover an event in the window.

## Step 3: Choose one action

Score each candidate from 1 to 5 on each factor, then pick the highest total:

| Factor | High score when |
|---|---|
| Timing | Event start is within `publish_lead_days` and the article isn't live yet |
| Rental intent | The reader will need to get around: logistics, routes, day trips, multi-day stays |
| Gap | We have no post on it, or ours is outdated |
| Answerability | The question has a clear, quotable answer (good for AI answers and snippets) |
| Confidence | You found solid sources for the key facts |

Rules:
- **Never write a second article for a topic an existing post already targets.** Refresh that post instead.
- **Confidence 1-2 means research only**, whatever the other scores.
- **Prefer a refresh** when an existing post covers an event in the window.

## Step 4: Write

### New article

File: `content/blog/<slug>.mdx`. The slug is lowercase-kebab-case, keyword-led, and includes the year only for dated events (`dev-deepawali-varanasi-2026-guide`).

```yaml
---
title: "<= 70 chars, primary keyword first"
description: "110-170 chars; answers the query and gives the reader a reason to click"
category: "Festival Guides" # or Travel Guides | Route Guides | Comparison | Hyperlocal
date: "YYYY-MM-DD"          # today
readTime: "N min read"      # about 200 words per minute
keywords: ["primary keyword", "3-5 secondary keywords from research"]
---
```

Structure (see `content/blog/dev-deepawali-varanasi-2026-guide.mdx` as the reference):
1. `# Title`, matching the front matter title.
2. **Answer first.** The first paragraph is 2-3 sentences that directly answer the main query, in bold. This is the part AI answer engines and featured snippets quote.
3. **An at-a-glance table** with the key facts (date, timing, cost, crowd level).
4. **Body sections** with descriptive `##` headings phrased the way people search. Write concrete local detail: named ghats, roads, parking points, distances, rupee costs, times.
5. **An honest rental section.** Say what a scooty or bike does and doesn't solve. If vehicles are banned near a venue, say so plainly. Credibility is what converts.
6. **Internal links**: at least 3, chosen from `/pricing`, `/scooty-rental-in-varanasi`, `/bike-rental-in-varanasi`, `/locations/<slug>` (only slugs in `lib/locations.ts`), and related posts from the event's `related_posts`.
7. `## Frequently Asked Questions`: 5-8 real questions from research, each in exactly this format (the FAQPage schema parser depends on it):

   ```
   **Q: Question as people type it?**
   A: Self-contained one-paragraph answer that names the subject (not "it").
   ```

8. `## Sources`: markdown links for every date, rule, and price claim.

Writing rules:
- **Prices and hubs come from `lib/pricing.ts` and `lib/locations.ts` only.** Never invent fleet sizes, discounts, reviews, or testimonials.
- **No phone numbers, WhatsApp links, or email addresses in the article.** Every post already ends with a booking card built from `siteConfig`. The validator fails the run if you add them.
- **Mark the unconfirmed.** If a rule comes from a past year, say so ("in 2022 the area between X and Y was closed..."), and add a backlog item to refresh the article when the official info is out.
- **Write for Indian domestic tourists first, foreign visitors second.** Use plain English, ₹ amounts, and IST times.
- **No filler.** Cut "nestled", "vibrant tapestry", and "in conclusion". Every paragraph should help someone plan.

### Refresh

- Update facts, dates, prices and the year in the title only if the article is year-specific. Add or expand the FAQ, fix broken internal links, and add `updated: "YYYY-MM-DD"`.
- Keep the slug. Changing the URL throws away the post's ranking.
- Keep `date` as the original publish date.

## Step 5: Quality gates (all must pass before you open a PR)

```bash
npm ci            # fresh container
npm run validate:content
npm run lint
npm run build
```

If a gate fails, fix the content and re-run. If you can't fix it, open no PR, log the run with `action: "research"`, and explain the failure in `notes`.

Then re-read the article once as a skeptical traveller. Check that every date, closure and price matches a cited source.

## Step 6: Log and open the PR

1. **Log the run.** Append to `content-log.json` `runs`:
   `{ "date", "action": "new" | "refresh" | "research", "slug" (omit for research), "event", "target_keyword", "notes" }`.
   Update `backlog`: remove what you did, and add follow-ups with a `due` date (for example, "refresh when the official advisory is out").
2. **Branch:** `seo/YYYY-MM-DD-<slug-or-research>` off `main`. Commit with a message like `content: <title>` or `content: refresh <slug>` or `seo: research <date>`.
3. Push, then use the GitHub MCP tools to **open a draft PR** against `main`, with this body:

   ```
   ## <New article | Refresh | Research only>: <title>

   **Target query:** <primary keyword>    **Event:** <event name, date, status>
   **Why now:** <one or two sentences: timing, gap, demand signal>

   ### What changed
   - ...

   ### Facts to double-check
   - <each date/rule/price claim, with its source link>

   ### Follow-ups added to backlog
   - ...

   ### Checks
   - [x] validate:content  - [x] lint  - [x] build
   ```

4. **Research-only runs** still open a PR, but it touches only `content/seo/` (calendar updates and new backlog ideas), so the reviewer sees what was learned.

## Hard limits

- **One PR per run.** Never merge, approve, or close PRs.
- **Touch only `content/blog/` and `content/seo/`.** If site code needs a change (a new category, a schema fix), describe it in the PR body for a human to do.
- **Never delete or rename an existing post.**
- **Never copy text from competitor pages.** Write from facts you have verified.
