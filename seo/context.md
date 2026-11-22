# SEO Context — BioluminescentKayaking.us

_Built from repo code, llms.txt, and site content. Every fact carries its source._

---

## Product

**Name:** BioluminescentKayaking.us  
**Type:** Independent travel guide / affiliate comparison site  
**Owner:** Harsha Zoysa, founder and editor (source: `public/llms.txt`, `/about`)  
**Founded:** 2026 (domain launched, prices checked 12 Nov 2026)

**What it does:** Compares and curates bookable bioluminescent kayaking tours across the USA (Florida, Puerto Rico, California, Washington). Publishes a nightly Glow Forecast (0–100 score) for 12 bays and lagoons. Does not run tours. Bookings go through GetYourGuide; the site earns affiliate commission (disclosed).

**What it does NOT do:** Run tours, take direct bookings, or guarantee live bioluminescence readings (no live measurement exists for any bay; forecast is an estimate).

---

## Buyer Persona

**Primary buyer:** Leisure traveler (couple, family, or solo) planning a US trip and wanting to add a bioluminescent kayaking night. Typically researches 2–6 weeks before travel. Budget: $55–$179 per person. Key anxiety: will we actually see the glow?

**Secondary buyer:** Planner who already has flights/hotel booked and is adding an activity. Needs moon calendar and weather timing help.

**AI-search buyer:** Asks ChatGPT / Perplexity questions like "best time to see bioluminescence in Florida" or "is mosquito bay worth it". Needs clear, citable answers.

---

## Conversion

The conversion that counts: a click to a GetYourGuide tour listing (affiliate link). Secondary: return visits via Glow Forecast (bookmarks, direct traffic).

---

## Pricing (source: `public/llms.txt`, checked 12 Nov 2026)

| Location | Price From | Tour Operator / Notes |
|---|---|---|
| Cocoa Beach, FL | $64.20 | GetYourGuide listing |
| Titusville, FL | $119 | One verified GYG listing |
| Mosquito Bay, Vieques PR | $55 | GetYourGuide |
| Laguna Grande, Fajardo PR | $65.78 | GetYourGuide |
| La Parguera PR | $60 | GetYourGuide |
| San Juan Island, WA | $179 | GetYourGuide, June–Sept season |
| Hood Canal, WA | $125 | Hood Canal Adventures direct — confirm before travel |
| Tomales Bay, CA | No GYG listing | Book direct with local operators |
| San Diego, CA | No score | Red-tide glow, cannot be forecast |

Prices are GetYourGuide prices. Commission paid to this site never changes the price the reader pays (source: `public/llms.txt`).

---

## Site Features

1. **Glow Forecast** — nightly 0–100 estimate for 12 bays. Inputs: season baseline (up to 40 pts), moon darkness 19:00–24:00 local (up to 30 pts, via SunCalc), cloud cover (up to 15 pts, Open-Meteo), wind (up to 15 pts, Open-Meteo). Heavy rain (>25 mm prior 48 h) caps FL/PR score at 60. San Diego never scored (unpredictable red tides). Water temp from NOAA Tides and Currents where available. Source: `public/llms.txt`, `/glow-forecast-method`.

2. **Moon Phase Calendar** — 12-month dark-sky window calendar. Source: `app/page.tsx`.

3. **Tour Comparison** — `/best-bioluminescent-kayaking-tours` and location pages. Ratings and review counts from GetYourGuide, labelled as such.

4. **Guides Hub** — `/guides` with 10 planned articles (2 published as of Nov 2026, 8 stubs). Topics: science, moon timing, gear, safety, kayak types.

5. **Destinations map** — all 4 regions, 12 locations at `/destinations`.

6. **llms.txt / llms-full.txt** — machine-readable product context for AI crawlers. Source: `public/`.

---

## Regions & Locations

| Region | Locations | Season |
|---|---|---|
| Florida | Cocoa Beach, Titusville, Near Orlando | Dinos: May–Oct; Comb jellies: Nov–Apr |
| Puerto Rico | Mosquito Bay, Laguna Grande, La Parguera, San Juan day-trips | Year-round |
| California | Tomales Bay, San Diego | Tomales Bay: Aug–Oct; San Diego: unpredictable |
| Washington | San Juan Island, Orcas Island, Hood Canal | June–Sept |

---

## Competitors

Identified from web search (Nov 2026). No Search Console data available yet.

| Competitor | Type | URL | Threat Level |
|---|---|---|---|
| Viator.com | OTA aggregator (transaction) | viator.com | High — appears in all tour queries |
| GetYourGuide | OTA aggregator (transaction) | getyourguide.com | High — same OTAs we link to |
| Paddling Magazine | Editorial | paddlingmag.com | Medium — trusted editorial, national |
| TripOutside | Niche aggregator | tripoutside.com | Medium — comparison site for outdoor activities |
| ThingsToDoPR | Puerto Rico tourism editorial | thingstodopr.com | Medium — dominates PR-specific queries |
| Daytripto.com | Activity guide blog | daytripto.com | Low–Medium |
| BKAdventure | Direct operator (Cocoa Beach) | bkadventure.com | Low for guide queries; competes on FL terms |
| KayakingPuertoRico.com | Direct operator | kayakingpuertorico.com | Low — operator not guide |
| DiscoverPuertoRico | PR tourism board | discoverpuertorico.com | Medium — high authority, PR queries |
| OutsideOnline | National outdoor editorial | outsideonline.com | Medium — high DA, general outdoor |

**Key editorial competitors (independent, like us):**
- `paddlingmag.com` — has destination guides for FL and PR bio-kayaking
- `tripoutside.com` — comparison-style content on bio-bay tours
- `daytripto.com` — practical touring guide, appears in PR and FL queries

**Directories / AI answer sources to target for citation:**
- National Geographic Travel, TripAdvisor editorial, Lonely Planet, NOAA Ocean Explorer (we already cite), NPS (we already cite)

---

## Claims & What to Never Invent

- **Never invent:** statistics, quotes, prices outside the GYG-checked data, review counts, brightness rankings beyond cited Guinness record for Mosquito Bay.
- **Always source:** season data, dinoflagellate density claims, any numerical forecast claim.
- **Competitor claims:** Always date them ("as of Nov 2026") and link to source.

---

## Technical Stack (source: `next.config.ts`, `package.json`, `app/layout.tsx`)

- Next.js 16.4.6, App Router, Turbopack, React 19
- Tailwind CSS 4.3.3
- Static generation with Cache Components + Partial Prefetching
- MDX articles via `next-mdx-remote/rsc` + `remark-gfm`
- Fonts: Fraunces (serif, headings) + Nunito Sans (sans, body) via `next/font/google`
- `trailingSlash: false` (all URLs without trailing slash)
- `metadataBase`: `https://bioluminescentkayaking.us`
- Sitemap: `app/sitemap.ts` — static routes + published guides
- Robots.txt: **MISSING** (critical gap — created in this run)
- Structured data: Organization + WebSite on homepage; Article on guide pages
- OG images: `/images/hero.webp` (1200×630)

---

_Last built: 2026-11-23. Source console: not connected. Ahrefs: not connected._
