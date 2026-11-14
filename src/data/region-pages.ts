/**
 * Editorial content for the Phase 2 California / Washington hubs and
 * location pages. Every fact here is sourced from the site
 * architecture blueprint (§3), src/data/season-baselines.ts,
 * src/data/tours.ts or the GetYourGuide grab database
 * (files/gyg-tour-database.md) — no invented prices, operators or
 * statistics. California has zero standalone GYG tours and Hood Canal
 * has none on GYG either; their sections say so plainly.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InfoCard {
  title: string;
  highlight: string;
  details: string;
}

export interface RegionLocationCardContent {
  id: string;
  name: string;
  tagline: string;
  verdict: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  href: string;
}

export interface RegionPageContent {
  id: "california" | "washington";
  name: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroCaptionTitle: string;
  heroCaptionSub: string;
  metaTitle: string;
  metaDescription: string;
  tonightCards: { id: string; name: string; subhead: string; href: string }[];
  locationsTitle: string;
  locationsIntro: string;
  locations: RegionLocationCardContent[];
  seasonIntro: string;
  seasonLocationIds: string[];
  infoEyebrow: string;
  infoTitle: string;
  infoIntro: string;
  infoCards: InfoCard[];
  faqs: FaqItem[];
}

import { getLocationStatic, REGIONS } from "@/src/data/locations";

function locImage(id: string): { image: string; imageAlt: string } {
  const loc = getLocationStatic(id);
  return { image: loc?.image ?? "", imageAlt: loc?.imageAlt ?? "" };
}

function regionImage(id: string): { image: string; imageAlt: string } {
  const region = REGIONS.find((r) => r.id === id);
  return { image: region?.image ?? "", imageAlt: region?.imageAlt ?? "" };
}

export const CALIFORNIA_REGION: RegionPageContent = {
  id: "california",
  name: "California",
  eyebrow: "Pacific Coast Region",
  h1: "Bioluminescent Kayaking in California",
  intro:
    "California's glow is the hardest in America to plan around. Tomales Bay, up by Point Reyes, runs sheltered night paddles on dark-moon windows in late summer and autumn. San Diego's glow comes from red-tide blooms that arrive without warning and can't be scheduled at all. This page treats the two honestly — one you can book, one you can only watch for.",
  heroImage: regionImage("california").image,
  heroImageAlt: regionImage("california").imageAlt,
  heroCaptionTitle: "Tomales Bay & Point Reyes",
  heroCaptionSub: "Marin County's sheltered bay waters",
  metaTitle: "Bioluminescent Kayaking in California: Tomales Bay & San Diego",
  metaDescription:
    "California's glowing waters: Tomales Bay dark-moon paddles near SF, and San Diego's honest red-tide tracker. Tonight's glow forecast, season dates & booking tips.",
  tonightCards: [
    {
      id: "tomales-bay",
      name: "Tomales Bay",
      subhead: "Point Reyes National Seashore",
      href: "/california/tomales-bay/",
    },
    {
      id: "san-diego",
      name: "San Diego",
      subhead: "Red-tide bloom tracker",
      href: "/california/san-diego/",
    },
  ],
  locationsTitle: "Where to paddle in California",
  locationsIntro:
    "Two very different California stories: a bookable bay in the north, and an unbookable bloom in the south.",
  locations: [
    {
      id: "tomales-bay",
      name: "Tomales Bay",
      tagline: "The bookable one",
      verdict: "Dark-moon paddles, late summer into autumn",
      description:
        "A long, sheltered bay inside Point Reyes National Seashore. Dinoflagellates build through summer and local outfitters run night paddles on the darkest-moon windows — roughly June to October, with the strongest odds in September and October.",
      highlights: [
        "Point Reyes National Seashore",
        "Strongest odds Sep–Oct on operator season guides",
        "Booked direct with local outfitters",
      ],
      ...locImage("tomales-bay"),
      href: "/california/tomales-bay/",
    },
    {
      id: "san-diego",
      name: "San Diego",
      tagline: "The unpredictable one",
      verdict: "Red tides — tracked, never scheduled",
      description:
        "San Diego glows when Lingulodinium polyedra red tides bloom offshore — a few nights at a time, a few times a year, with no calendar to book against. Our bloom tracker page reports the current state instead of pretending to forecast it.",
      highlights: [
        "No nightly score — blooms can't be forecast",
        "La Jolla, Torrey Pines and Mission Bay watch spots",
        "We flag LED 'glow' kayaks for what they are",
      ],
      image: regionImage("california").image,
      imageAlt: "Waves rolling onto a Southern California beach at sunset",
      href: "/california/san-diego/",
    },
  ],
  seasonIntro:
    "California runs on two clocks: a real season in Tomales Bay, and no season at all in San Diego.",
  seasonLocationIds: ["tomales-bay", "san-diego"],
  infoEyebrow: "California Travel Tips",
  infoTitle: "Plan your trip",
  infoIntro:
    "How to base yourself for a Tomales Bay paddle, and how to think about San Diego's blooms.",
  infoCards: [
    {
      title: "Getting there",
      highlight: "Point Reyes, Marin County",
      details:
        "Tomales Bay sits on the eastern shore of Point Reyes National Seashore in Marin County, north of San Francisco. Tours launch after dark, so stay nearby rather than driving back late.",
    },
    {
      title: "When to aim for",
      highlight: "Dark-moon windows, Aug–Nov",
      details:
        "Tomales Bay's known window is select nights from August to November, peaking in September and October. The Moon Calendar shows the dark windows; the Glow Forecast scores them night by night.",
    },
    {
      title: "San Diego expectations",
      highlight: "A bloom is a bonus, not a plan",
      details:
        "If a red tide lights up while you're in San Diego, drop everything and go that night — blooms can fade within days. Just don't book a whole trip around one.",
    },
  ],
  faqs: [
    {
      question: "Where can you go bioluminescent kayaking in California?",
      answer:
        "Tomales Bay by Point Reyes is California's established bioluminescent kayaking spot, with guided night paddles in late summer and autumn. San Diego sees natural glow during red-tide blooms, but those can't be scheduled — see the San Diego bloom tracker page.",
    },
    {
      question: "Is there bioluminescent kayaking in Monterey?",
      answer:
        "Monterey Bay gets occasional bioluminescence reports, but there is no regular guided night-paddle product we can verify there, so we don't list one. The established California paddle is Tomales Bay, further north.",
    },
    {
      question: "What about bioluminescent kayaking in San Francisco?",
      answer:
        "There are no bioluminescent kayak tours in San Francisco Bay itself. Tomales Bay, north of the city in Marin County, is the nearest place with guided bioluminescent paddles.",
    },
    {
      question: "When is the best time for bioluminescence in California?",
      answer:
        "For Tomales Bay: late summer into autumn, with September and October the strongest months on operator season guides, always on dark-moon nights. San Diego has no season you can plan around — its blooms are unpredictable in any month.",
    },
    {
      question: "Why aren't there California tours to book on this page?",
      answer:
        "We checked GetYourGuide's full catalogue: no standalone California bioluminescent kayak tour is listed. Tomales Bay outfitters book directly, and San Diego's natural glow can't be scheduled — the 'glow kayak' products sold there use LED lights, not bioluminescence.",
    },
  ],
};

export const WASHINGTON_REGION: RegionPageContent = {
  id: "washington",
  name: "Washington",
  eyebrow: "San Juan Islands Region",
  h1: "Bioluminescent Kayaking in Washington",
  intro:
    "Washington's glow is a short-season treat: Noctiluca dinoflagellates in the cold, rich waters of the San Juan Islands and Hood Canal, peaking in July and August when the surface water is warmest. Tours run from mid-May to October at best — in winter there is simply no show, and this page will tell you that plainly.",
  heroImage: regionImage("washington").image,
  heroImageAlt: regionImage("washington").imageAlt,
  heroCaptionTitle: "San Juan Islands",
  heroCaptionSub: "Salish Sea night paddles, June to September",
  metaTitle: "Bioluminescent Kayaking in Washington: San Juan Islands Guide",
  metaDescription:
    "Paddle glowing Salish Sea waters! Compare Friday Harbor & Orcas Island tours from $119, Hood Canal drive-up launch, summer season dates, and tonight's glow score.",
  tonightCards: [
    {
      id: "san-juan-island",
      name: "San Juan Island",
      subhead: "Friday Harbor / Griffin Bay",
      href: "/washington/san-juan-island/",
    },
    {
      id: "orcas-island",
      name: "Orcas Island",
      subhead: "Eastsound",
      href: "/washington/orcas-island/",
    },
    {
      id: "hood-canal",
      name: "Hood Canal",
      subhead: "Brinnon, Olympic Peninsula",
      href: "/washington/hood-canal/",
    },
  ],
  locationsTitle: "Where to paddle in Washington",
  locationsIntro:
    "Two islands with bookable tours, and one mainland fjord where you book direct.",
  locations: [
    {
      id: "san-juan-island",
      name: "San Juan Island",
      tagline: "The flagship",
      verdict: "Friday Harbor night paddles, from $179",
      description:
        "Washington's best-known glow paddle launches from Friday Harbor into Griffin Bay. Two GetYourGuide tours run here in a short season — and because night tours end after the last ferry, you sleep on the island.",
      highlights: [
        "Two bookable tours on GetYourGuide",
        "Season June to mid-September",
        "Plan an overnight — tours end after the last ferry",
      ],
      ...locImage("san-juan-island"),
      href: "/washington/san-juan-island/",
    },
    {
      id: "orcas-island",
      name: "Orcas Island",
      tagline: "The quieter island",
      verdict: "Eastsound's glow paddle, from $119",
      description:
        "Orcas is the largest of the San Juan Islands, and its bioluminescent kayak tour launches from Rosario Resort by Eastsound for a two-hour summer night paddle.",
      highlights: [
        "One bookable tour on GetYourGuide",
        "2-hour paddle from Eastsound",
        "Same June–September peak as Friday Harbor",
      ],
      image: regionImage("washington").image,
      imageAlt: regionImage("washington").imageAlt,
      href: "/washington/orcas-island/",
    },
    {
      id: "hood-canal",
      name: "Hood Canal",
      tagline: "The mainland option",
      verdict: "Booked direct, no ferry needed",
      description:
        "Hood Canal is a natural fjord west of Seattle where a local operator in Brinnon runs bioluminescent paddles in the same summer season — no island ferry required, and no GetYourGuide listing, so you book with the operator directly.",
      highlights: [
        "Drive-up access on the Olympic Peninsula side",
        "Direct booking only",
        "Same Salish Sea season: peak Jun–Sep",
      ],
      image: locImage("hood-canal").image,
      imageAlt:
        "Rocky pine-covered coastline and calm waters in Washington at twilight",
      href: "/washington/hood-canal/",
    },
  ],
  seasonIntro:
    "One short Salish Sea season covers all three Washington locations — here it is, month by month.",
  seasonLocationIds: ["san-juan-island", "orcas-island", "hood-canal"],
  infoEyebrow: "Washington Travel Tips",
  infoTitle: "Plan your trip",
  infoIntro:
    "Ferries, overnights and the short season — the logistics that decide a Washington glow trip.",
  infoCards: [
    {
      title: "The ferry rule",
      highlight: "Sleep on the island",
      details:
        "San Juan Island night tours finish after the last ferry back to Anacortes, so a glow trip means a night in Friday Harbor or Eastsound. Book the room when you book the tour — summer weekends fill.",
    },
    {
      title: "When to aim for",
      highlight: "Peak June to September",
      details:
        "Operator season guides put the peak from June through September, with July and August strongest. Outside that window the honest answer is: wait for summer.",
    },
    {
      title: "Getting there",
      highlight: "Ferry from Anacortes",
      details:
        "Washington State Ferries run from Anacortes to Friday Harbor and Orcas Island. Hood Canal needs no ferry — it's reachable by road from Seattle and Tacoma.",
    },
  ],
  faqs: [
    {
      question: "Where is the best place for bioluminescent kayaking in Washington?",
      answer:
        "The San Juan Islands. Friday Harbor on San Juan Island has the best-known night paddle and two bookable tours; Orcas Island has one; Hood Canal is the mainland alternative near Brinnon.",
    },
    {
      question: "Can you go bioluminescent kayaking near Seattle?",
      answer:
        "Not in Seattle itself — there is no glow tour in the city. The nearest established paddles are Hood Canal, a drive west, and the San Juan Islands by ferry from Anacortes. Those are the trips this page covers.",
    },
    {
      question: "When is bioluminescence season in Washington?",
      answer:
        "Tours run from mid-May to October, with the real peak from June through September and the strongest glow in July and August, when surface water is warmest. In winter the baseline is effectively zero — the forecast labels it Off season, because it is.",
    },
    {
      question: "Why are Washington tours more expensive than Florida's?",
      answer:
        "A short season, small groups and island logistics. The Friday Harbor paddle was $179 per person when we last checked prices on 12 Nov 2026; Florida's year-round lagoon tours start far lower. Short season, premium price — that's the trade.",
    },
    {
      question: "What about Olympic National Park, Anacortes or Whidbey Island?",
      answer:
        "There are no established glow tours in those places themselves. Anacortes is the ferry gateway to the islands, and Hood Canal — on the Olympic Peninsula side — is the closest paddle to the national park. Both questions land on this page for that reason.",
    },
  ],
};

export interface LocationPageContent {
  id: string;
  name: string;
  regionId: "california" | "washington";
  regionName: string;
  regionHref: string;
  href: string;
  badge: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroCaptionTitle: string;
  heroCaptionSub: string;
  metaTitle: string;
  metaDescription: string;
  toursSlug?: string;
  tourSeasonNote?: string;
  directBooking?: {
    title: string;
    intro: string;
    paragraphs: string[];
    noteTitle: string;
    noteBullets: string[];
  };
  infoEyebrow: string;
  infoTitle: string;
  infoIntro: string;
  infoCards: InfoCard[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
}
