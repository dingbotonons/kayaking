import { getLocationStatic, REGIONS } from "@/src/data/locations";
import type { LocationPageContent } from "@/src/data/region-pages";

/**
 * Editorial content for the five Phase 2 location pages, imported type
 * from region-pages.ts. Facts are sourced from the site architecture
 * blueprint (§3, §6), src/data/season-baselines.ts, src/data/tours.ts
 * and files/gyg-tour-database.md only.
 */

function locImage(id: string): { image: string; imageAlt: string } {
  const loc = getLocationStatic(id);
  return { image: loc?.image ?? "", imageAlt: loc?.imageAlt ?? "" };
}

function regionImage(id: string): { image: string; imageAlt: string } {
  const region = REGIONS.find((r) => r.id === id);
  return { image: region?.image ?? "", imageAlt: region?.imageAlt ?? "" };
}

export const TOMALES_BAY_PAGE: LocationPageContent = {
  id: "tomales-bay",
  name: "Tomales Bay",
  regionId: "california",
  regionName: "California",
  regionHref: "/california/",
  href: "/california/tomales-bay/",
  badge: "Point Reyes · Marin County, California",
  h1: "Bioluminescent Kayaking in Tomales Bay, Point Reyes",
  intro:
    "A sheltered bay inside Point Reyes National Seashore where dinoflagellates light up on dark, calm nights — California's one established bioluminescent paddle, sold by local outfitters on dark-moon windows in late summer and autumn.",
  heroImage: locImage("tomales-bay").image,
  heroImageAlt: locImage("tomales-bay").imageAlt,
  heroCaptionTitle: "Tomales Bay",
  heroCaptionSub: "Point Reyes National Seashore",
  metaTitle: "Tomales Bay Bioluminescent Kayaking: Point Reyes Night Paddles",
  metaDescription:
    "Kayak through glowing waters near SF! Complete guide to Tomales Bay dark-moon paddles: peak August–November season, direct outfitters, and tonight's glow score.",
  directBooking: {
    title: "Tours here book direct — and that's normal",
    intro:
      "There is no standalone Tomales Bay bioluminescent kayak tour on GetYourGuide, so this page has no booking cards. Here is how it actually works.",
    paragraphs: [
      "We checked GetYourGuide's catalogue carefully: the only listings that mention a Tomales Bay glow evening are multi-day package tours, which are not a night paddle you can book on its own. Local outfitters — Blue Waters Kayaking is the name you will see most — sell their bioluminescence paddles directly, on selected dark-moon dates.",
      "We earn nothing when you book one, and this page carries no prices, because the outfitters price by date and we never publish a price we have not verified. Use the tonight box and the 7-night outlook above to pick your night first, then book direct with the outfitter for that date.",
    ],
    noteTitle: "What this means for you",
    noteBullets: [
      "No prices on this page — operator prices vary by date and we won't guess them",
      "Book on the outfitter's own site or by phone",
      "Choose your date with the 7-night outlook before you book",
    ],
  },
  infoEyebrow: "Know Before You Go",
  infoTitle: "What to expect at Tomales Bay",
  infoIntro:
    "Dark-moon scheduling, cold Pacific water and small shore towns — the practical picture.",
  infoCards: [
    {
      title: "Dark-moon only",
      highlight: "The moon picks the dates",
      details:
        "Outfitters schedule glow paddles around the new moon. A bright-moon weekend in September can be worse than a dark weekend in August — check the Moon Calendar before you pick dates.",
    },
    {
      title: "Cold water, real coast",
      highlight: "Dress for a wet paddle",
      details:
        "Tomales Bay is Pacific water. Expect cool evenings on the bay and dress in layers you don't mind getting splashed.",
    },
    {
      title: "Stay nearby",
      highlight: "Base yourself by the bay",
      details:
        "Launches are after dark on the Point Reyes side of the bay. Staying in Point Reyes Station, Inverness or Marshall beats a long late drive back.",
    },
  ],
  faqs: [
    {
      question: "When is the best time to see bioluminescence in Tomales Bay?",
      answer:
        "Late summer into autumn. Operator season guides put the known window on select nights from August to November, peaking in September and October, always around the dark-moon weeks. Winter is effectively off.",
    },
    {
      question: "Can you book a Tomales Bay glow tour on GetYourGuide?",
      answer:
        "No — there is no standalone listing. The glow appears only as one evening inside multi-day package tours. Book a dedicated night paddle directly with a Point Reyes outfitter.",
    },
    {
      question: "Why is there no tour price on this page?",
      answer:
        "Because the tours here are sold direct and priced by date, and we never publish a price we have not verified. Check the outfitter's own calendar for the night you want.",
    },
    {
      question: "What will I actually see?",
      answer:
        "On a good dark night, dinoflagellates sparkle blue-green around paddle strokes and in the bow wake. It is bloom- and weather-dependent — some scheduled nights are faint, which is exactly why the forecast above weights the moon so heavily.",
    },
  ],
  ctaTitle: "Ready to paddle Tomales Bay on a dark night?",
  ctaBody:
    "Check tonight's glow estimate, find the next dark-moon window, then book your night direct with a Point Reyes outfitter.",
};

export const SAN_DIEGO_PAGE: LocationPageContent = {
  id: "san-diego",
  name: "San Diego",
  regionId: "california",
  regionName: "California",
  regionHref: "/california/",
  href: "/california/san-diego/",
  badge: "Southern California · Bloom Tracker",
  h1: "Bioluminescent Kayaking in San Diego",
  intro:
    "San Diego glows in bursts: red tides of Lingulodinium polyedra light up the surf for a few nights at a time, a few times a year — and nobody can tell you which nights until the bloom is already there. This page tracks the state of play instead of selling you a forecast that can't exist.",
  heroImage: regionImage("california").image,
  heroImageAlt: "Waves rolling onto a Southern California beach at sunset",
  heroCaptionTitle: "San Diego Coast",
  heroCaptionSub: "Red-tide blooms, when they come",
  metaTitle: "San Diego Bioluminescence Tracker: Live Red Tide & Kayak Guide",
  metaDescription:
    "Is San Diego glowing tonight? Real-time red tide tracker for La Jolla & Torrey Pines, why blooms cannot be scheduled, and critical warning on LED fake-glow kayaks.",
  directBooking: {
    title: "Why there are no tour cards here",
    intro:
      "A bloom can't be scheduled, so nobody can honestly sell you a dated ticket for one. What is actually sold in San Diego needs a warning label.",
    paragraphs: [
      "There is no natural-bioluminescence kayak tour for San Diego on GetYourGuide. What you will find sold as 'glow kayaking' in San Diego are clear kayaks lit by LED lights. Those can be a fun night paddle, but the light comes from a battery, not the ocean — and we don't list them as bioluminescence.",
      "When a real red tide blooms, local outfitters sometimes announce pop-up paddles on their own channels at short notice. That is the only honest way this product can exist, and it's why this page is a tracker rather than a booking page.",
    ],
    noteTitle: "What this means for you",
    noteBullets: [
      "No score for San Diego — ever. Blooms can't be forecast",
      "LED-lit 'glow' kayaks are not bioluminescence",
      "When a bloom is reported, go that night — it can fade in days",
    ],
  },
  infoEyebrow: "How Red Tides Work",
  infoTitle: "The San Diego glow, explained",
  infoIntro:
    "The organism, the watch spots and the lifespan of a bloom — from the red-tide research this page's tracker is based on.",
  infoCards: [
    {
      title: "What a red tide is",
      highlight: "Lingulodinium polyedra",
      details:
        "Dense blooms of this dinoflagellate tint the water rusty-red by day. At night, disturbed cells flash blue — waves, footprints in wet sand and paddle strokes all light up.",
    },
    {
      title: "Where people watch",
      highlight: "La Jolla · Torrey Pines · Mission Bay",
      details:
        "Blooms are usually watched from shore along La Jolla, Torrey Pines and Mission Bay — wherever the bloom is densest that week. There is no single best beach until the bloom picks one.",
    },
    {
      title: "How long it lasts",
      highlight: "Days to a few weeks",
      details:
        "A bloom can build, peak and fade over days to a few weeks. If reports say the water is glowing, go that night rather than next weekend.",
    },
  ],
  faqs: [
    {
      question: "Is San Diego glowing right now?",
      answer:
        "The tracker at the top of this page is the honest answer: unless a bloom has been reported by lifeguards or researchers, the state is 'no bloom reported right now'. We never fill that box with a guess.",
    },
    {
      question: "When is bioluminescence season in San Diego?",
      answer:
        "There isn't one you can plan around. Red tides have appeared in different months in different years; researchers at Scripps Institution of Oceanography track them, but the blooms remain unpredictable.",
    },
    {
      question: "Are the 'glow kayak' tours in San Diego bioluminescent?",
      answer:
        "No. The clear-kayak 'glow' products sold in San Diego are lit by LEDs. Pretty, but not bioluminescence — the water itself isn't glowing.",
    },
    {
      question: "What should I do when a bloom is reported?",
      answer:
        "Go the same night if you can, to the beaches named in the reports — La Jolla, Torrey Pines and Mission Bay are the usual watch spots — and give your eyes about 20 minutes to adapt to the dark.",
    },
  ],
  ctaTitle: "Waiting on a San Diego bloom?",
  ctaBody:
    "While San Diego decides, the forecast scores every bookable bay nightly — pick a sure thing, or watch the Moon Calendar for your next trip north.",
};

export const SAN_JUAN_ISLAND_PAGE: LocationPageContent = {
  id: "san-juan-island",
  name: "San Juan Island",
  regionId: "washington",
  regionName: "Washington",
  regionHref: "/washington/",
  href: "/washington/san-juan-island/",
  badge: "Friday Harbor · San Juan Islands, Washington",
  h1: "Bioluminescent Kayaking in Friday Harbor, San Juan Island",
  intro:
    "Washington's flagship night paddle: a summer-only trip into Griffin Bay, where Noctiluca dinoflagellates sparkle in some of the darkest, coldest water on this site — and where the last ferry leaves before your tour ends, so the island gets you for the night.",
  heroImage: locImage("san-juan-island").image,
  heroImageAlt: locImage("san-juan-island").imageAlt,
  heroCaptionTitle: "Griffin Bay, Friday Harbor",
  heroCaptionSub: "Summer night paddles, June to mid-September",
  metaTitle: "Friday Harbor Bioluminescent Kayaking: San Juan Island Tours",
  metaDescription:
    "Paddle Griffin Bay's sparkling Noctiluca glow! Verified Friday Harbor tours from $179, June–Sept peak season, tonight's glow score, and overnight ferry rule.",
  toursSlug: "washington/san-juan-island",
  tourSeasonNote:
    "Seasonal tours: both San Juan Island products run in the summer season only — the next bookable dates we saw when checking were for May 2027.",
  infoEyebrow: "Know Before You Go",
  infoTitle: "What to expect on San Juan Island",
  infoIntro:
    "An overnight by necessity, a ferry by day, and a short bright season.",
  infoCards: [
    {
      title: "Sleep on the island",
      highlight: "Tours end after the last ferry",
      details:
        "Night tours finish after the last ferry back to Anacortes. Book a Friday Harbor room the same day you book the paddle.",
    },
    {
      title: "Getting here",
      highlight: "Ferry from Anacortes",
      details:
        "Washington State Ferries sail from Anacortes to Friday Harbor. One of the tours above even includes transport from the ferry terminal.",
    },
    {
      title: "Short season",
      highlight: "Peak July and August",
      details:
        "The flagship paddle's season runs roughly June to mid-September. July and August are the peak the forecast is built around.",
    },
  ],
  faqs: [
    {
      question: "When is the best time for bioluminescent kayaking on San Juan Island?",
      answer:
        "June through September, peaking in July and August, on dark-moon nights. Outside the season the water doesn't perform — winter shows 'Off season' on the forecast because it is.",
    },
    {
      question: "How much does the Friday Harbor bioluminescent kayak tour cost?",
      answer:
        "The Friday Harbor night paddle was $179 per person when we checked prices on 12 Nov 2026; a longer sunset version was $226. The tour cards above carry the checked prices.",
    },
    {
      question: "Can I take the ferry back after the tour?",
      answer:
        "No — tours end after the last sailing. Plan an overnight in Friday Harbor; it's part of the trip, not a flaw in it.",
    },
    {
      question: "Where do the tours launch?",
      answer:
        "From Friday Harbor — the flagship paddle launches at Jackson's Beach into Griffin Bay.",
    },
  ],
  ctaTitle: "Ready for a Friday Harbor night paddle?",
  ctaBody:
    "Check tonight's glow estimate, compare the two checked tours, and book the room before the summer weekends go.",
};

export const ORCAS_ISLAND_PAGE: LocationPageContent = {
  id: "orcas-island",
  name: "Orcas Island",
  regionId: "washington",
  regionName: "Washington",
  regionHref: "/washington/",
  href: "/washington/orcas-island/",
  badge: "Eastsound · San Juan Islands, Washington",
  h1: "Bioluminescent Kayaking on Orcas Island",
  intro:
    "Orcas is the biggest, greenest island in the San Juans, and its glow paddle is the relaxed version: a two-hour evening trip from Rosario Resort by Eastsound, in the same rich summer water as Friday Harbor.",
  heroImage: locImage("orcas-island").image,
  heroImageAlt: locImage("orcas-island").imageAlt,
  heroCaptionTitle: "Eastsound, Orcas Island",
  heroCaptionSub: "A two-hour summer night paddle",
  metaTitle: "Orcas Island Bioluminescent Kayaking: Eastsound Night Paddle",
  metaDescription:
    "Relaxed 2-hour summer night paddle from Rosario Resort by Eastsound. Checked tours from $119, June–Sept Salish Sea season, and tonight's glow forecast.",
  toursSlug: "washington/orcas-island",
  tourSeasonNote:
    "Seasonal tour: the Orcas Island product runs in the summer season only — the next bookable dates we saw when checking were for May 2027.",
  infoEyebrow: "Know Before You Go",
  infoTitle: "What to expect on Orcas Island",
  infoIntro: "One island, one paddle, one short season — plan it simply.",
  infoCards: [
    {
      title: "One island, one paddle",
      highlight: "Book ahead in peak weeks",
      details:
        "Orcas has a single bookable glow tour on GetYourGuide. In peak weeks it can sell out — book ahead rather than on arrival.",
    },
    {
      title: "Getting here",
      highlight: "Ferry to Orcas, then Eastsound",
      details:
        "Ferries from Anacortes serve Orcas Island; Eastsound is the island's main village, close to the Rosario Resort launch.",
    },
    {
      title: "Same water, same season",
      highlight: "Peak June to September",
      details:
        "Orcas shares the Salish Sea season: peak June to September, strongest in July and August when surface water is warmest.",
    },
  ],
  faqs: [
    {
      question: "How much is the Orcas Island bioluminescent kayak tour?",
      answer:
        "It was $119 per person when we checked prices on 12 Nov 2026, for a 2-hour paddle launching from Rosario Resort, Eastsound. The tour card above carries the checked price.",
    },
    {
      question: "When does the Orcas Island glow tour run?",
      answer:
        "Summer season only — the glow here is a June-to-September show at its best, and the forecast shows Off season through winter.",
    },
    {
      question: "San Juan Island or Orcas Island — which should I pick?",
      answer:
        "Friday Harbor has two tours and more places to stay and eat; Orcas is quieter, with one tour and a resort launch. The water and the season are the same.",
    },
  ],
  ctaTitle: "Ready for an Orcas Island night paddle?",
  ctaBody:
    "Check tonight's glow estimate and book the island's one glow tour before peak-season dates go.",
};

export const HOOD_CANAL_PAGE: LocationPageContent = {
  id: "hood-canal",
  name: "Hood Canal",
  regionId: "washington",
  regionName: "Washington",
  regionHref: "/washington/",
  href: "/washington/hood-canal/",
  badge: "Brinnon · Olympic Peninsula, Washington",
  h1: "Bioluminescent Kayaking in Hood Canal",
  intro:
    "The mainland option: a long, quiet fjord on the Olympic Peninsula side of Puget Sound, where the same Noctiluca glow as the San Juan Islands shows in summer — and you can drive to the launch instead of taking a ferry.",
  heroImage: locImage("hood-canal").image,
  heroImageAlt:
    "Rocky pine-covered coastline and calm waters in Washington at twilight",
  heroCaptionTitle: "Hood Canal",
  heroCaptionSub: "The drive-up glow, near Brinnon",
  metaTitle: "Hood Canal Bioluminescent Kayaking: No Ferry Required (Brinnon)",
  metaDescription:
    "The drive-up Washington glow! Experience fjord bioluminescence near Brinnon with Hood Canal Adventures ($125). Peak summer dates, no ferry needed & tonight's score.",
  directBooking: {
    title: "Booked direct with the local operator",
    intro:
      "No Hood Canal bioluminescent tour is listed on GetYourGuide, so this page has no booking cards — and we earn nothing here. This is the whole picture.",
    paragraphs: [
      "The local operator is Hood Canal Adventures, based in Brinnon, which runs bioluminescent paddles through the summer season. Trips were listed at $125 when we checked in November 2026 — confirm the current price and dates on the operator's own site before you travel.",
      "Book direct with them, and use the tonight box and 7-night outlook above to pick your night first: the same moon and season rules that govern the San Juan Islands apply in the canal.",
    ],
    noteTitle: "What this means for you",
    noteBullets: [
      "No GetYourGuide listing for Hood Canal — book with the operator",
      "Price shown was listed at $125 when checked in Nov 2026 — verify before you go",
      "No ferry needed — Hood Canal is a drive from Seattle or Tacoma",
    ],
  },
  infoEyebrow: "Know Before You Go",
  infoTitle: "What to expect at Hood Canal",
  infoIntro: "Drive-up access, sheltered water and the Salish Sea season.",
  infoCards: [
    {
      title: "No ferry required",
      highlight: "The drive-up option",
      details:
        "Hood Canal is a drive from Seattle or Tacoma — the only Washington glow on this site you can reach by road alone.",
    },
    {
      title: "Same season as the islands",
      highlight: "Peak June to September",
      details:
        "The canal shares the Salish Sea season: tours run in the summer window, and the forecast shows Off season through winter.",
    },
    {
      title: "Quiet water",
      highlight: "Sheltered fjord paddling",
      details:
        "The canal is sheltered and still on summer nights — good first-night-paddle water.",
    },
  ],
  faqs: [
    {
      question: "Is there a bioluminescent kayak tour in Hood Canal?",
      answer:
        "Yes — Hood Canal Adventures runs one from Brinnon in the summer season. It's booked directly with the operator; it isn't listed on GetYourGuide, so it has no booking card on this page.",
    },
    {
      question: "How much does the Hood Canal bioluminescent tour cost?",
      answer:
        "Trips were listed at $125 when we checked in November 2026. Confirm the current price and dates on the operator's site before you travel.",
    },
    {
      question: "Hood Canal or the San Juan Islands?",
      answer:
        "Pick Hood Canal for drive-up simplicity and a quieter scene; pick the islands for more tour choice, more places to stay, and the classic Friday Harbor trip.",
    },
  ],
  ctaTitle: "Ready for a Hood Canal night paddle?",
  ctaBody:
    "Check tonight's glow estimate, pick a dark summer night, then book direct with the Brinnon operator.",
};

export const LOCATION_PAGES: Record<string, LocationPageContent> = {
  "tomales-bay": TOMALES_BAY_PAGE,
  "san-diego": SAN_DIEGO_PAGE,
  "san-juan-island": SAN_JUAN_ISLAND_PAGE,
  "orcas-island": ORCAS_ISLAND_PAGE,
  "hood-canal": HOOD_CANAL_PAGE,
};
