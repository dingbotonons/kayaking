/**
 * Static location metadata ONLY — names, slugs, images.
 *
 * All glow scores, chance labels, conditions summaries and 7-night
 * outlooks are computed live by lib/conditions (SunCalc moon +
 * Open-Meteo weather + documented season baselines in
 * src/data/season-baselines.ts). No score value may be stored here:
 * the design-stage mock scores were deleted with the Prompt F build
 * (2026-11-13) and must not come back.
 */

export type RegionId = "florida" | "puerto-rico" | "california" | "washington";

export interface LocationStatic {
  id: string;
  name: string;
  state: string;
  regionId: RegionId;
  pageSlug: string;
  toursSlug: string;
  image: string;
  imageAlt: string;
  notes?: string;
}

export const LOCATIONS_STATIC: LocationStatic[] = [
  // Florida
  {
    id: "cocoa-beach",
    name: "Cocoa Beach",
    state: "Florida",
    regionId: "florida",
    pageSlug: "/florida/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/cocoa_beach.webp",
    imageAlt: "Kayakers paddling through a mangrove tunnel near Cocoa Beach, Florida",
  },
  {
    id: "titusville",
    name: "Titusville & Merritt Island",
    state: "Florida",
    regionId: "florida",
    pageSlug: "/florida/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/titusville_img.webp",
    imageAlt: "Night kayaking under twilight sky near NASA launch complex at Titusville Merritt Island",
  },
  {
    id: "near-orlando",
    name: "Near Orlando",
    state: "Florida",
    regionId: "florida",
    pageSlug: "/florida/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkA18hVmCaxWldXtFGHmzrFpf1dE9jBL75iP3trbIzOgKIT1KOH80ruoUj6AZgSePZNVBN-UlrHeG1G9nE8c9WGJPtkSRaZpW2sdP3E4UFQgS85Ywdv6XRtaJSi3waOpbBOLPOT9Uak1BKi0FSpa1fWjE_oeZW6oj8uB3MpULIlxUOTCMMljxvPfP2U4_RaCjbeOhy2slNu_y7pjZ9YaPzOIOH4qLayZTz5av0YXn3sI27DPY9fJ5J9WfXB_I-3Lizlfx3N8ZQZ-G",
    imageAlt: "Tranquil twilight lagoon scene with mangroves in Cocoa Beach Florida under evening twilight",
  },
  // Puerto Rico
  {
    id: "mosquito-bay",
    name: "Mosquito Bay, Vieques",
    state: "Puerto Rico",
    regionId: "puerto-rico",
    pageSlug: "/puerto-rico/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/mosquito_bay.webp",
    imageAlt: "White sand beach and turquoise water under palm trees on Vieques, Puerto Rico",
  },
  {
    id: "laguna-grande",
    name: "Laguna Grande, Fajardo",
    state: "Puerto Rico",
    regionId: "puerto-rico",
    pageSlug: "/puerto-rico/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC6KGXXcV4pQ5Xn04iDN0gfFXdcBM7xrAPLE61effG2pPG5BLxYVLLtVzqox7Dy1aE6KbaCCdjtwdPBLskB6RVl3sXOM88Wtk0SBgFXKCFYIKBrc_XwSVE74_y_18T64FdA1xsXM6Uk0VeCRXAuIWx8eOKwo4Dbg2JfwnMXprQRRKSsaKeQ5tCsWOjbp7UAT3TOz4neZb3vDF8tQz5svOwGm0fEU0ViWjkRJTHlqRQVpqokHwL5SJ9X7pp6b6uMbxVZck5tVtHMnpY",
    imageAlt: "Tandem kayak navigating through a mangrove tunnel leading into Laguna Grande Fajardo at dusk",
  },
  {
    id: "la-parguera",
    name: "La Parguera",
    state: "Puerto Rico",
    regionId: "puerto-rico",
    pageSlug: "/puerto-rico/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/la_parguera.webp",
    imageAlt: "Swimmers in glowing bioluminescent waters of La Parguera alongside tour boat at dusk",
  },
  // California
  {
    id: "tomales-bay",
    name: "Tomales Bay",
    state: "California",
    regionId: "california",
    pageSlug: "/california/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/tomales_bay.webp",
    imageAlt: "Waves breaking on a rocky Northern California shoreline at sunset",
  },
  {
    id: "san-diego",
    name: "San Diego",
    state: "California",
    regionId: "california",
    pageSlug: "/california/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/california.webp",
    imageAlt: "Waves rolling onto a Southern California beach at sunset",
    notes: "San Diego's glow comes from unpredictable red tides, so there's no nightly forecast — we report blooms when lifeguards and researchers spot them.",
  },
  // Washington
  {
    id: "san-juan-island",
    name: "San Juan Island",
    state: "Washington",
    regionId: "washington",
    pageSlug: "/washington/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "/images/san_guan_islands.webp",
    imageAlt: "Sunset over calm water beside a rocky, pine-covered shoreline in the San Juan Islands",
  },
  {
    id: "orcas-island",
    name: "Orcas Island",
    state: "Washington",
    regionId: "washington",
    pageSlug: "/washington/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBHnUx3DFDrmK2PWQXBBd7s7ALWnoF-wO8riioYkr1CzJG3I50if-XybvHLQnjwirpfFGZh7X3OvuToW6fpWZ7BijXnUf6rQjqVYANo7nqed9cD1jXHvPhHTMT4sAdoYDp4YuvpL-B16qG7O2FJFuilFhIAbtdSCwB7SNUOE8v8clCW73ajlymwfRoG9VR3DBft9SowCh31s-xaUSpZAwyx3OxKyHeMM7h2molc63BZ61RD3IRtiP06eOCt4HAVDE3SngANR9pU3Qu",
    imageAlt: "Evergreen shoreline along tranquil Puget Sound inlet waters in Washington at blue hour",
  },
  {
    id: "hood-canal",
    name: "Hood Canal",
    state: "Washington",
    regionId: "washington",
    pageSlug: "/washington/",
    toursSlug: "/best-bioluminescent-kayaking-tours/",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzvz4DGvFkr4hlDb2HFn1svmZ_idg7_f2RfevNhQjSkGXlrtg4VKkGHEhknWLQJDSfB44QYhWYAFEXNDkhv98FgU_DIel90s1dc3U4ahRxl9bJpOwkY9L_97V4hj45ifbbsiKiqowumuE3SwaswjwIWEOkIK234cmMrEPWpOemlLnoARG8pvE_8sc4hRwGp_b5ZEGje49UCLmedyH8GmLDXE3dLaVO3SDREZhAVOjc-O1B5BHhjpB-tHjpkGKE8ybrFt83ouA9dKeL",
    imageAlt: "Rocky pine-covered coastline and calm waters of the San Juan Islands Washington at twilight",
  },
];

export function getLocationStatic(id: string): LocationStatic | undefined {
  return LOCATIONS_STATIC.find((l) => l.id === id);
}

/** The four locations featured in the homepage / forecast-page tonight strips. */
export const TONIGHT_FEATURED_IDS = [
  "cocoa-beach",
  "mosquito-bay",
  "tomales-bay",
  "san-juan-island",
] as const;

export interface RegionSummary {
  id: string;
  name: string;
  season: string;
  organisms: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export const REGIONS: RegionSummary[] = [
  {
    id: "florida",
    name: "Florida",
    season: "Peak Jun-Oct · comb jellies in winter",
    organisms: "Dinoflagellates & comb jellies, Indian River Lagoon",
    image: "/images/florida.webp",
    imageAlt: "Palm trees over a turquoise lagoon and white sand beach in Florida",
    slug: "/florida/",
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico",
    season: "Glows year-round · brightest Dec-Apr",
    organisms: "Pyrodinium bahamense, three bio bays",
    image: "/images/puerto_rico.webp",
    imageAlt: "Aerial view of a turquoise cove beach with palm trees and rocky headlands in Puerto Rico",
    slug: "/puerto-rico/",
  },
  {
    id: "california",
    name: "California",
    season: "Best Jun-Oct, dark-moon nights",
    organisms: "Tomales Bay & San Diego red tides",
    image: "/images/california.webp",
    imageAlt: "Waves rolling onto a Southern California beach at sunset, with lifeguard towers and palm trees",
    slug: "/california/",
  },
  {
    id: "washington",
    name: "Washington",
    season: "Jun to mid-Sep only",
    organisms: "San Juan Islands & Hood Canal",
    image: "/images/washington.webp",
    imageAlt: "Aerial view of a Washington coastal town beside a long sandy beach",
    slug: "/washington/",
  },
];

/**
 * Homepage hero photograph — supplied by the site owner (2026-11-13).
 * Local file in public/images/; rendered unoptimized because the
 * production host's image optimizer fails on local files (see
 * AuthorByline note).
 */
export const HOMEPAGE_HERO_IMAGE = {
  src: "/images/hero.webp",
  alt: "Family paddling kayaks through glowing blue bioluminescent water at night",
};
