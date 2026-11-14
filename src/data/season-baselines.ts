/**
 * Season baselines for the glow score — up to 40 of the 100 points.
 *
 * Researched and sourced by Dash, 2026-11-13 (see
 * files/prompt-f-implementation-spec.md in the goal workspace).
 * DO NOT alter a value, organism or source without a named source to
 * replace it. `monthlyBaseline` is Jan→Dec, points out of 40.
 * Baseline ≤ 6 in the current month presents as "Off season".
 */

export interface SeasonBaseline {
  locationId: string;
  type: "seasonal";
  /** 12 values, Jan→Dec, points out of 40. */
  monthlyBaseline: number[];
  organism: string;
  sourceName: string;
  sourceUrl: string;
  dateChecked: "2026-11-13";
  notes: string;
}

export interface BloomTrackerEntry {
  locationId: string;
  type: "bloom-tracker";
  organism: string;
  sourceName: string;
  /** No URL was supplied for this source in the spec — none is invented here. */
  sourceUrl?: string;
  dateChecked: "2026-11-13";
  notes: string;
}

export type SeasonEntry = SeasonBaseline | BloomTrackerEntry;

const INDIAN_RIVER_LAGOON: Pick<
  SeasonBaseline,
  "monthlyBaseline" | "organism" | "sourceName" | "sourceUrl" | "dateChecked" | "notes"
> = {
  monthlyBaseline: [22, 22, 24, 26, 32, 38, 40, 40, 38, 32, 26, 22],
  organism:
    "Pyrodinium bahamense dinoflagellates in summer, comb jellies in winter",
  sourceName: "Otter Paddle Orlando — Bioluminescence Florida (operator season guide)",
  sourceUrl: "https://www.otterpaddleorlando.com/bioluminescence-florida",
  dateChecked: "2026-11-13",
  notes:
    "Dinoflagellates May–Sep (peak Jul–Aug), comb jellies Oct–Apr give a softer glow, so winter is moderate, never zero — Florida has a show in every season. Corroborated by BK Adventure's GYG product seasons (summer dinoflagellate May–early Nov; winter comb jelly late Nov–Apr).",
};

const SALISH_SEA: Pick<
  SeasonBaseline,
  "monthlyBaseline" | "organism" | "sourceName" | "sourceUrl" | "dateChecked" | "notes"
> = {
  monthlyBaseline: [2, 2, 4, 6, 16, 32, 38, 38, 32, 14, 4, 2],
  organism: "Noctiluca scintillans and other dinoflagellates",
  sourceName: "Sea Quest Kayak Tours — Bioluminescence Kayak Tours, San Juan Island",
  sourceUrl:
    "https://sea-quest-kayak.com/kayaking-san-juan-islands/bioluminescence-kayak-tours/",
  dateChecked: "2026-11-13",
  notes:
    "Peak Jun–Sep (Jul–Aug strongest, warmest surface water), tours run mid-May–Oct, winter off.",
};

export const SEASON_BASELINES: SeasonEntry[] = [
  { locationId: "cocoa-beach", type: "seasonal", ...INDIAN_RIVER_LAGOON },
  { locationId: "titusville", type: "seasonal", ...INDIAN_RIVER_LAGOON },
  { locationId: "near-orlando", type: "seasonal", ...INDIAN_RIVER_LAGOON },
  {
    locationId: "mosquito-bay",
    type: "seasonal",
    monthlyBaseline: [38, 38, 38, 38, 34, 34, 36, 36, 32, 32, 34, 38],
    organism: "Pyrodinium bahamense, year-round, Guinness-record density",
    sourceName: "Casa Vieques — Vieques Bioluminescent Bay Guide",
    sourceUrl: "https://casavieques.com/vieques-bioluminescent-bay-guide/",
    dateChecked: "2026-11-13",
    notes:
      "Glows every night of the year; dry season Dec–mid-Apr most reliable; Sep–Oct dip for heavy-rain/hurricane runoff.",
  },
  {
    locationId: "laguna-grande",
    type: "seasonal",
    monthlyBaseline: [36, 36, 36, 36, 32, 32, 34, 34, 30, 30, 32, 36],
    organism: "Pyrodinium bahamense, year-round",
    sourceName: "Puerto Rico Bio Bay Kayak Tours — bay comparison and timing guide",
    sourceUrl: "https://puertoricobiobaykayaktours.com/",
    dateChecked: "2026-11-13",
    notes:
      "All three Puerto Rico bays visible year-round; month matters less than moon. Same PR pattern as Mosquito Bay, slightly lower base.",
  },
  {
    locationId: "la-parguera",
    type: "seasonal",
    monthlyBaseline: [34, 34, 34, 34, 31, 31, 33, 33, 29, 29, 31, 34],
    organism: "Pyrodinium bahamense, year-round; the gentlest of the three PR bays",
    sourceName: "Puerto Rico Bio Bay Kayak Tours — bay comparison and timing guide",
    sourceUrl: "https://puertoricobiobaykayaktours.com/",
    dateChecked: "2026-11-13",
    notes: "Year-round; the gentlest of the three Puerto Rico bays.",
  },
  {
    locationId: "tomales-bay",
    type: "seasonal",
    monthlyBaseline: [4, 4, 6, 8, 12, 20, 28, 36, 38, 36, 24, 8],
    organism: "Dinoflagellates (incl. Lingulodinium polyedra)",
    sourceName:
      "Napa Valley Paddle — Bioluminescence in Tomales Bay: Everything You Need to Know",
    sourceUrl:
      "https://www.napavalleypaddle.com/northernreach/bioluminescence-in-tomales-bay-everything-you-need-to-know",
    dateChecked: "2026-11-13",
    notes:
      "Can occur year-round, prominent in summer; select nights Aug–Nov are the known window (peak Sep–Oct), winter effectively off.",
  },
  {
    locationId: "san-diego",
    type: "bloom-tracker",
    organism: "Lingulodinium polyedra red tides (unpredictable)",
    sourceName:
      "Scripps Institution of Oceanography red-tide FAQ (as cited in ScienceInsights' California bioluminescence guide)",
    dateChecked: "2026-11-13",
    notes:
      "No baseline and NO score — San Diego's glow comes from unpredictable red tides. The site reports blooms when they are spotted; it never forecasts them.",
  },
  { locationId: "san-juan-island", type: "seasonal", ...SALISH_SEA },
  { locationId: "orcas-island", type: "seasonal", ...SALISH_SEA },
  { locationId: "hood-canal", type: "seasonal", ...SALISH_SEA },
];

export function getSeasonEntry(locationId: string): SeasonEntry | undefined {
  return SEASON_BASELINES.find((e) => e.locationId === locationId);
}

/** Baseline points for a 1-based month, or null for bloom-tracker entries. */
export function getBaselineForMonth(
  locationId: string,
  month1to12: number
): number | null {
  const entry = getSeasonEntry(locationId);
  if (!entry || entry.type !== "seasonal") return null;
  return entry.monthlyBaseline[month1to12 - 1];
}
