export type GuideStatus = "planned" | "published";

export interface GuideItem {
  slug: string;
  title: string;
  excerpt: string;
  cluster: "understand-the-glow" | "pick-your-night" | "get-ready";
  clusterLabel: string;
  readTime: string;
  status: GuideStatus;
  /**
   * Article body for published guides — an array of paragraphs.
   * Articles are written in a later phase; planned guides carry no
   * body at all (never filler text).
   */
  body?: string[];
}

export interface GuideGroup {
  id: string;
  title: string;
  description: string;
  guides: GuideItem[];
}

export function guideHref(guide: GuideItem): string {
  return `/guides/${guide.slug}/`;
}

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getPublishedGuides(): GuideItem[] {
  return GUIDES.filter((g) => g.status === "published");
}

/**
 * Master catalog of guide articles on BioluminescentKayaking.us.
 *
 * LINK RULE (non-negotiable):
 * The guide articles are a later publishing phase. Every guide starts
 * as status "planned": the hub renders its card WITHOUT a link (badge
 * "In the works") and the slug stays out of the sitemap. Flipping a
 * guide to "published" (and adding its body) makes the hub card a
 * link automatically and lets the /guides/[slug]/ route render it —
 * planned and unknown slugs return notFound().
 */
export const GUIDES: GuideItem[] = [
  // Cluster 1: Understand the glow
  {
    slug: "what-is-bioluminescence",
    title: "What is bioluminescence?",
    excerpt:
      "The living light explained simply: the chemistry, the creatures, and why bays glow brighter than the open sea.",
    cluster: "understand-the-glow",
    clusterLabel: "Science & Marine Life",
    readTime: "5 min read",
    status: "published",
    body: [
      "Bioluminescence is the production and emission of light by a living organism through an internal chemical reaction. When a substrate molecule called luciferin reacts with oxygen in the presence of the enzyme luciferase, it releases nearly 100% of its energy as cold blue-green light, with virtually zero heat wasted.",
      "In coastal waters, the glow you see trailing behind a kayak paddle is caused primarily by microscopic single-celled marine plankton called dinoflagellates. When physical motion — such as a paddle stroke, the bow of a boat, or a swimming fish — deforms their cell wall, it triggers an electrical impulse that opens proton channels, sparking a light flash lasting roughly a tenth of a second.",
      "Scientists believe marine organisms evolved bioluminescence primarily as a burglar alarm defense mechanism. When a predator like a shrimp or small fish grazes on plankton, the sudden burst of light startles the attacker while simultaneously illuminating it, alerting larger secondary predators to come hunt the grazer.",
      "Why do sheltered coastal bays glow so much brighter than the open ocean? In open water, currents disperse plankton thinly across vast distances. In contrast, shallow estuaries like Mosquito Bay in Puerto Rico and the Indian River Lagoon in Florida feature narrow inlet channels, dense mangrove root systems that trap organic nutrients, and high water residence times. This allows dinoflagellates like Pyrodinium bahamense to concentrate in staggering numbers — frequently exceeding 100,000 to 700,000 cells per liter.",
      "To human eyes, bioluminescence appears as a pale neon blue or electric green sparkle. Because human night vision relies on rod cells rather than color cones in low light, the water looks like a field of submerged liquid stars rather than the saturated neon blues captured by long-exposure cameras.",
    ],
  },
  {
    slug: "dinoflagellates-vs-comb-jellies",
    title: "Dinoflagellates vs comb jellies",
    excerpt:
      "Florida's two different shows — blue sparkle in summer, rainbow jellies in winter — and how to tell which one you'll get.",
    cluster: "understand-the-glow",
    clusterLabel: "Natural Cycles",
    readTime: "4 min read",
    status: "published",
    body: [
      "Florida's Indian River Lagoon is unique among American waterways because it glows 365 nights a year — but it delivers two completely different biological displays. From June through early October, microscopic dinoflagellates produce an electric blue sparkle, while from November through May, golf-ball-sized comb jellies flash vibrant rainbow pulses.",
      "Dinoflagellates (specifically Pyrodinium bahamense) thrive in warm, shallow, brackish water during Florida's summer. When your paddle blade slices through the lagoon, thousands of microscopic cells fire simultaneously, creating an ethereal blue-white wake that outlines boats, hands, and darting mullet like liquid neon.",
      "Comb jellies (Mnemiopsis leidyi) take over as water temperatures drop in late autumn. Despite their name, comb jellies are ctenophores, not true jellyfish — they have no tentacles, contain zero venom, and cannot sting. In daylight, eight rows of beating cilia refract sunlight like tiny prisms into a shimmering rainbow. In darkness, mechanical contact triggers photoproteins inside their tissues to emit bright flashes of green-blue luminescence.",
      "Comparing the kayak experience between the two seasons reveals distinct advantages. Summer offers maximum spark intensity and warm evening breezes, but requires insect repellent against coastal mosquitoes. Winter brings crisp air, virtually zero bugs, and calmer waters, where you can cup living, glowing comb jellies gently in your palm right beside the kayak before returning them to the water.",
      "If your priority is seeing intense, neon blue wake trails beneath a clear-bottom kayak, choose peak summer (July to August). If your priority is comfortable night temperatures, family-friendly handling of harmless glowing creatures, and fewer crowds, choose winter comb jelly season (December to March).",
    ],
  },

  // Cluster 2: Pick your night
  {
    slug: "best-time-to-see-bioluminescence",
    title: "The best time to see bioluminescence",
    excerpt:
      "Season first, then the moon, then the weather. The master guide to choosing dates, region by region.",
    cluster: "pick-your-night",
    clusterLabel: "Trip Planning",
    readTime: "6 min read",
    status: "planned",
  },
  {
    slug: "moon-phase-and-bioluminescence",
    title: "Moon phase & bioluminescence",
    excerpt:
      "Why the moon kills the glow, why moonset matters as much as the phase, and how to read the calendar like a guide.",
    cluster: "pick-your-night",
    clusterLabel: "Lunar Timing",
    readTime: "5 min read",
    status: "published",
    body: [
      "Moonlight is the single biggest factor determining whether your bioluminescent kayak tour is breathtaking or disappointing. Because biological light in water is delicate, ambient moonlight from a bright moon acts like a stadium floodlight, washing out contrast and reducing visible brightness by as much as 80 percent.",
      "The gold standard for bioluminescence paddling is the New Moon dark window — spanning the three nights before the new moon, the night of the new moon itself, and the three nights after. During this seven-night monthly window, the sky remains pitch-black from sunset to midnight, allowing your eyes to fully adapt and revealing every subtle micro-sparkle.",
      "Many paddlers mistakenly cancel trips if their vacation falls during a full moon or waxing gibbous phase. However, veteran kayak guides rely on the moonset calculation: the moon is only a spoiler while it remains above the local horizon. If a full moon sets at 8:15 PM and your tour launches at 8:45 PM, you will enjoy completely dark skies regardless of the lunar phase.",
      "Conversely, during a waning moon, the lunar disc rises late in the evening. If moonrise occurs at 10:30 PM, an early tour departing at 8:00 PM will finish in pristine darkness before the moon ever crests the horizon. Checking local moonrise and moonset tables during tour hours (19:00 to 24:00) is far more important than checking calendar moon phase icons alone.",
      "Cloud cover can also transform a difficult night into a spectacular paddle. Heavy overcast skies block lunar glare, effectively creating synthetic dark-sky conditions on bright moonlit evenings. Our nightly Glow Forecast calculates exact astronomical moon altitude, phase illumination, and cloud shielding to score every bay from 0 to 100.",
    ],
  },

  // Cluster 3: Get ready
  {
    slug: "clear-kayak-vs-regular-kayak",
    title: "Clear kayak vs regular kayak",
    excerpt:
      "What the see-through hull actually adds, and when a normal kayak is the smarter booking.",
    cluster: "get-ready",
    clusterLabel: "Gear & Boats",
    readTime: "4 min read",
    status: "planned",
  },
  {
    slug: "what-to-wear-and-bring",
    title: "What to wear and bring",
    excerpt:
      "You will get wet. The honest packing list for a night paddle, by season.",
    cluster: "get-ready",
    clusterLabel: "Packing List",
    readTime: "4 min read",
    status: "planned",
  },
  {
    slug: "bioluminescent-kayaking-with-kids",
    title: "Bioluminescent kayaking with kids",
    excerpt:
      "Ages, attention spans, bedtimes and the locations that work best for families.",
    cluster: "get-ready",
    clusterLabel: "Family Paddling",
    readTime: "5 min read",
    status: "planned",
  },
  {
    slug: "is-bioluminescent-kayaking-safe",
    title: "Is bioluminescent kayaking safe?",
    excerpt:
      "Night water, wildlife, weather calls — the real risks, honestly sized.",
    cluster: "get-ready",
    clusterLabel: "Safety & Preparation",
    readTime: "5 min read",
    status: "planned",
  },
  {
    slug: "how-to-photograph-bioluminescence",
    title: "How to photograph bioluminescence",
    excerpt:
      "Why your phone struggles, the settings that help, and when to just put it away and watch.",
    cluster: "get-ready",
    clusterLabel: "Night Photography",
    readTime: "6 min read",
    status: "planned",
  },
  {
    slug: "can-you-swim-in-bioluminescent-water",
    title: "Can you swim in bioluminescent water?",
    excerpt:
      "Where it's allowed, where it isn't, and why the rules differ by bay.",
    cluster: "get-ready",
    clusterLabel: "Regulations & Tips",
    readTime: "3 min read",
    status: "planned",
  },
];

export const GUIDE_GROUPS: GuideGroup[] = [
  {
    id: "understand-the-glow",
    title: "Understand the glow",
    description:
      "The organisms, the chemistry, and why quiet bays light up at night.",
    guides: GUIDES.filter((g) => g.cluster === "understand-the-glow"),
  },
  {
    id: "pick-your-night",
    title: "Pick your night",
    description:
      "Mastering the dark: lunar cycles, cloud cover, and seasonal brightness windows.",
    guides: GUIDES.filter((g) => g.cluster === "pick-your-night"),
  },
  {
    id: "get-ready",
    title: "Get ready",
    description:
      "Practical tips, gear dilemmas, family logistics, and honest night-water realities.",
    guides: GUIDES.filter((g) => g.cluster === "get-ready"),
  },
];
