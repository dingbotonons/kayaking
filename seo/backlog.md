# SEO Backlog — BioluminescentKayaking.us

_Ordered by expected conversion impact per hour of work. Updated: 2026-11-23._

> **Ship mode:** PR for review. Build must pass before merge.
> **Missing tools:** No Search Console, Ahrefs, or analytics connected yet. Positions are unknown; estimates are from manual SERP inspection (Nov 2026). Add these in the first weekly check.

---

## 🔴 P0 — Fix this run (critical technical SEO)

### 1. Create `public/robots.txt`
**Status:** SHIPPED (this run)  
**Why:** Every crawler that hits `https://bioluminescentkayaking.us/robots.txt` currently gets a 404. This is a signal-destruction bug — Googlebot logs the 404, and some crawlers deprioritize sites without robots.txt. Fix takes 5 minutes, impact is immediate on recrawl.  
**Fix:** Standard robots.txt allowing all bots, pointing to sitemap. Done.

### 2. ✅ `BreadcrumbList` structured data on location pages
**Status:** ALREADY DONE (found in `app/florida/cocoa-beach/page.tsx`, `app/puerto-rico/mosquito-bay-vieques/page.tsx`, etc.)  
Each location page has a `@graph` with BreadcrumbList + TouristAttraction + ItemList for tours. No action needed.

### 3. ✅ `FAQPage` structured data on FAQ sections
**Status:** ALREADY DONE (found in `components/ui/FaqJsonLd.tsx`)  
Homepage FaqSection renders `<FaqJsonLd faqs={FAQS} />` which outputs valid FAQPage JSON-LD. Guide articles with FAQ accordions also use this component. No action needed.

---

## 🟠 P1 — Ship this week

### 4. Publish the 8 planned guide articles (stubs)
**Status:** Planned  
**Why:** 8 of 10 guides are `status: planned` stubs — they appear in `getAllGuides()` but have no real content. These are orphaned routes with thin content. Each targets a head informational query with 900–3,400 monthly searches.
- `/guides/best-time-to-see-bioluminescence` (3,400/mo) — HIGH VALUE
- `/guides/is-bioluminescent-kayaking-safe` (1,200/mo)
- `/guides/what-to-wear-and-bring` (1,800/mo)
- `/guides/clear-kayak-vs-regular-kayak` (900/mo)
- `/guides/moon-phase-and-bioluminescence` (2,100/mo) — HIGH VALUE
- `/guides/dinoflagellates-vs-comb-jellies` (800/mo)  
**Fix:** Write and publish one article per week. Start with highest-volume gap.  
**Effort:** 3–5 hours per article.

### 5. Write article: "Best Time to See Bioluminescence" (gap fill)
**Status:** Gap  
**Why:** 3,400 est. monthly searches. This is the #1 pre-booking question. Currently no page exists for this query. Competitors: paddlingmag.com and tripoutside.com have general content; none have a data-backed answer with the glow forecast model.  
**Opportunity:** We can build a unique, data-backed page using our season baselines (Florida peak: May–Oct; Puerto Rico: year-round; WA: June–Sept) + moon calendar data. No other independent guide site has this combination.  
**Effort:** 4–5 hours (write + publish + social posts).

### 6. ✅ `TouristAttraction` structured data on location pages
**Status:** ALREADY DONE — confirmed in `app/florida/cocoa-beach/page.tsx` and `app/puerto-rico/mosquito-bay-vieques/page.tsx`. Each location page has TouristAttraction in its `@graph`. Could be enhanced with `geo` coordinates for each bay — low priority backlog item.

### 7. Connect Google Search Console
**Status:** Not done  
**Why:** Without GSC we cannot know which queries send traffic, what pages are indexed, or what positions are. ALL position data in `keyword-map.csv` is currently "unknown". This is the single highest-leverage non-code action.  
**Action for owner:** Verify property at search.google.com/search-console. Submit sitemap URL `https://bioluminescentkayaking.us/sitemap.xml`.  
**Effort for owner:** 15 minutes.

---

## 🟡 P2 — Ship this month

### 8. Create gap page: "Bioluminescent Kayaking with Kids"
**Query:** "bioluminescent kayaking with kids" / "family bioluminescent kayaking" — 1,500/mo est.  
**Status:** Gap — no page exists.  
**Opportunity:** Family travel is a major segment for Florida and Puerto Rico tours. No page on the site addresses family-specific concerns (age minimums, life jacket rules, tour duration for young children). This is content none of our competitors have in a focused page.  
**Effort:** 3–4 hours.

### 9. Create gap page: "Best Time to Visit Mosquito Bay Vieques"
**Query:** 2,800/mo est. The existing `/puerto-rico/mosquito-bay-vieques` page covers the tour but may not answer timing questions in the depth that earns position 1.  
**Opportunity:** Add a dedicated "best time" section or standalone article. Use moon calendar data to show historically dark-sky windows.  
**Effort:** 2–3 hours.

### 10. Add comparison page: "Viator vs GetYourGuide for Bioluminescent Kayaking Tours"
**Query:** "viator vs getyourguide kayaking" / "best place to book bioluminescent tour"  
**Opportunity:** Position the site as the neutral comparison layer above both OTAs. Admission that GYG sometimes costs more for the same tour (if true) builds trust. Transparent, cited comparison.  
**Effort:** 3–4 hours.

### 11. Directories — submit to these targets
**Status:** Drafted (pending owner to submit — per SKILL.md, do not submit on owner's behalf)

| Directory | Type | URL | Notes |
|---|---|---|---|
| Tripadvisor | Activity listing | tripadvisor.com | Add site as a travel resource / list in relevant destination forums |
| Lonely Planet | Editorial submission | lonelyplanet.com | Pitch guides/features |
| NOAA Ocean Explorer Links | Science reference | oceanexplorer.noaa.gov | We already cite them; worth reciprocal link request |
| Paddling Magazine | Guest content | paddlingmag.com | They cover FL and PR bio-kayaking. Pitch a "Glow Forecast explained" piece |
| NPS Point Reyes | Local link | nps.gov/pore | We cite their bioluminescence page; potential link from their "plan your visit" |

### 12. Set up image alt text audit
**Status:** Planned  
**Why:** Next.js `<Image />` requires descriptive `alt` text. Many location images may use generic alts. Alt text affects both accessibility and Google Image search rankings.  
**Fix:** Audit all `<Image />` calls across location and guide pages. Add specific, keyword-rich but natural alt text.

---

## 🟢 P3 — Monthly / ongoing

### 13. Build free tool: "Bioluminescent Kayaking Date Picker"
**Concept:** Input: destination + month → output: best dark-sky windows (moon phase calendar + season baseline score). This is a shareable, linkable tool. We already have the data (SunCalc + season baselines).  
**Effort:** 8–12 hours (tool + landing page).

### 14. Comparison page: Mosquito Bay vs Laguna Grande vs La Parguera
**Query:** "which puerto rico bio bay is best" / "mosquito bay vs laguna grande"  
**Effort:** 3–4 hours.

### 15. Publish 8 remaining guide stubs
_(See item 4 above — write one per week)_

---

_Items promoted to SHIPPED are logged in `seo/log.md`._
