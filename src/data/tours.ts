import { buildAffiliateUrl } from "@/lib/affiliates";

/**
 * Tour database — GetYourGuide only.
 *
 * Source: manual GetYourGuide catalogue grab, 12 Nov 2026 (the partner
 * CSV export was blocked, so every row was verified on its live
 * GetYourGuide activity page). Prices are that snapshot, stamped with
 * PRICE_CHECKED_DATE wherever they render — never presented as live.
 *
 * TOURS holds only status "current" rows and is the only list components
 * may render. HELD_TOURS holds "legacy-recheck" rows (verified from
 * older crawls, absent from current listings — re-check bookability
 * before use) and "hold" rows (unverified ID or per-group pricing).
 * Nothing renders HELD_TOURS.
 *
 * Rows from the suspended second provider were removed site-wide.
 */

export type TourStatus = "current" | "legacy-recheck" | "hold";

export interface Tour {
  id: string;
  name: string;
  region: string;
  locationSlug: string;
  launchPoint: string;
  provider: "GetYourGuide";
  providerProductId: string;
  affiliateUrl: string;
  duration: string;
  startingPrice: number | null;
  priceFormatted: string;
  priceCheckedDate: string;
  verdict: string;
  rating: number | null;
  reviewCount: number | null;
  tourType: string;
  status: TourStatus;
  image: string;
  imageAlt: string;
  slug: string;
}

export const PRICE_CHECKED_DATE = "12 Nov 2026";

const COCOA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkA18hVmCaxWldXtFGHmzrFpf1dE9jBL75iP3trbIzOgKIT1KOH80ruoUj6AZgSePZNVBN-UlrHeG1G9nE8c9WGJPtkSRaZpW2sdP3E4UFQgS85Ywdv6XRtaJSi3waOpbBOLPOT9Uak1BKi0FSpa1fWjE_oeZW6oj8uB3MpULIlxUOTCMMljxvPfP2U4_RaCjbeOhy2slNu_y7pjZ9YaPzOIOH4qLayZTz5av0YXn3sI27DPY9fJ5J9WfXB_I-3Lizlfx3N8ZQZ-G";
const COCOA_IMG_ALT =
  "Tourists paddling in clear acrylic kayaks through calm turquoise coastal lagoon waters with subtle glowing blue swirls under night skies";
const MERRITT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2fZw2_v9kHqUhoopapW7BvyNvE_E-onGpCmtDQsXgoAv2k4MY-xUHxCFJ9vZ18WDRBNVSJnPqOsvID6u6SwX9aNwAlxheTmyyMdpV2VnoMmm9I03mPHgueihw4DmEHOwx2SL4WLuvq2ZIyjF7_18nLAQ6Rq3fUVVOBhbfxWm831nwzjUorM5d-Mn_3f-NWtQBDPYeAF2oOqEUteXIkWJkmeFRnCHGQGTKJXikZMo2sIfI6yfGEDcDXElrEiiw0i9TaUf_qkW-SZx";
const MERRITT_IMG_ALT =
  "Classic tandem kayaks launching at Haulover Canal in Merritt Island National Wildlife Refuge";
const COMBJELLY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfj_9jUAY2pS2GjbJnOkdiWn7oBKdby63P3sdlgJr-sq_UweTV8DR4CeP5CaOLFz4M4DYZypY6crlcbzD3_ZOsQ-HXXhVDekxj9uDgrSA023Mqj33mKUpv9PHgOdPBNykOTkFhWj6riL6fabYh3naPce1c-ef47IDqw1MK7iLCufeR7-z3XiHX4HFxdleeAIdiaZ-y5XEMydOXBU_rc8B9j5iBGVI0wOtyw8E2I_KugAiBtv0OO6g57tMMIc37aLS-z65qOLgaeblx";
const COMBJELLY_IMG_ALT =
  "Winter night kayaking with comb jellies glowing under paddle blades in Florida";
const VIEQUES_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFy0xtn0GszSd67HdDuOe8P74q656zZQCY2w7eHntVCyD9v3_AdrNB_8HJ-OwtxPv8CpevSYKW31tRY02udtKe952KlY4--9NOzBYtzFKDXFrpd17oCtUPskCRrzEUQILmZUKhep21qIWMfednMSZfxv3GS98F7Ca_1meAzC-AGW23t6w2dkiwHE-pIY156YDR2q0jdd2l4Rf2VLVU8yghaUUeY5cFkhawyNi3FP-fYIgCWeDrZ5SELKHx63Bev0QwZxQe36VL3FF";
const VIEQUES_IMG_ALT =
  "Clear kayak resting on quiet waters in Mosquito Bay Vieques Puerto Rico against lush mangroves at evening twilight";
const FAJARDO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCC6KGXXcV4pQ5Xn04iDN0gfFXdcBM7xrAPLE61effG2pPG5BLxYVLLtVzqox7Dy1aE6KbaCCdjtwdPBLskB6RVl3sXOM88Wtk0SBgFXKCFYIKBrc_XwSVE74_y_18T64FdA1xsXM6Uk0VeCRXAuIWx8eOKwo4Dbg2JfwnMXprQRRKSsaKeQ5tCsWOjbp7UAT3TOz4neZb3vDF8tQz5svOwGm0fEU0ViWjkRJTHlqRQVpqokHwL5SJ9X7pp6b6uMbxVZck5tVtHMnpY";
const FAJARDO_IMG_ALT =
  "Tandem kayak navigating through a mangrove tunnel leading into Laguna Grande Fajardo at dusk";
const PUERTO_RICO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjp-tppXdW3LBXTqrAANKOH_KLaMUOIQ8BhH7GvBezlUUtVdGga4kC_oKdu6Hr_yCkgE3eioI7f1n_rG85P5lZ1yH0_OVFjn9i7FlPtZC-s9t4vY-09V_YJKA5nOgybjMOaLgKEQnSvPft4VPgVrKGR2r2gVEyNFfCOqj3WZ8ZqnA5fbfxHaRtftbDLqmJkMmQbSa4kNhDp9dxaKXy7RcSaX7CuH2F-c63Tu4-6FZYHI0HeGvQKZ7zmgW7QJUVW5BQ6Fsci1_uf8nU";
const PUERTO_RICO_IMG_ALT =
  "Tropical palm shoreline and calm Caribbean waters of Vieques Puerto Rico at dusk";
const WASHINGTON_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzvz4DGvFkr4hlDb2HFn1svmZ_idg7_f2RfevNhQjSkGXlrtg4VKkGHEhknWLQJDSfB44QYhWYAFEXNDkhv98FgU_DIel90s1dc3U4ahRxl9bJpOwkY9L_97V4hj45ifbbsiKiqowumuE3SwaswjwIWEOkIK234cmMrEPWpOemlLnoARG8pvE_8sc4hRwGp_b5ZEGje49UCLmedyH8GmLDXE3dLaVO3SDREZhAVOjc-O1B5BHhjpB-tHjpkGKE8ybrFt83ouA9dKeL";
const WASHINGTON_IMG_ALT =
  "Rocky pine-covered coastline and calm waters of the San Juan Islands Washington at twilight";

type TourSeed = Omit<
  Tour,
  "provider" | "affiliateUrl" | "priceCheckedDate" | "status" | "slug"
>;

function currentTour(seed: TourSeed): Tour {
  return {
    ...seed,
    provider: "GetYourGuide",
    affiliateUrl: buildAffiliateUrl(seed.providerProductId),
    priceCheckedDate: PRICE_CHECKED_DATE,
    status: "current",
    slug: seed.id,
  };
}

function heldTour(seed: TourSeed, status: "legacy-recheck" | "hold"): Tour {
  return {
    ...seed,
    provider: "GetYourGuide",
    affiliateUrl: seed.providerProductId
      ? buildAffiliateUrl(seed.providerProductId)
      : "",
    priceCheckedDate: PRICE_CHECKED_DATE,
    status,
    slug: seed.id,
  };
}

export const TOURS: Tour[] = [
  // ── Featured three (homepage) ──────────────────────────────────────────
  currentTour({
    id: "t697907",
    name: "Bioluminescent Kayak Tour, Cocoa Beach & Merritt Island",
    region: "Florida",
    locationSlug: "florida/cocoa-beach",
    launchPoint: "Cape Crossing Marina, Merritt Island",
    providerProductId: "t697907",
    duration: "1.5 hours",
    startingPrice: 64.2,
    priceFormatted: "from $64.20",
    verdict:
      "The most-reviewed Cocoa Beach paddle on GetYourGuide, launching into the Indian River Lagoon",
    rating: 4.5,
    reviewCount: 169,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/53e7561d192f8e71e97d154c6fe2a2bac2d655cc9e7b86893a62f53e9b6a789f.jpg",
    imageAlt: "Bioluminescent Kayak Tour, Cocoa Beach & Merritt Island — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t922494",
    name: "Vieques: Bioluminescent Bay Full Clear Kayaking",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t922494",
    duration: "2 hours",
    startingPrice: 112,
    priceFormatted: "from $112",
    verdict: "The full clear-kayak paddle on the brightest bay — 2 hours on the water",
    rating: 4.7,
    reviewCount: 108,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/e58a30cbeca619e2c35d26c0d36634a38ca641fe0f74e150dd97d51c2ab069fe.jpeg",
    imageAlt: "Vieques: Bioluminescent Bay Full Clear Kayaking — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t140169",
    name: "Fajardo: Bio Bay Kayak Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/laguna-grande-fajardo",
    launchPoint: "Laguna Grande, Fajardo",
    providerProductId: "t140169",
    duration: "2 hours",
    startingPrice: 72.48,
    priceFormatted: "from $72.48",
    verdict: "The most-reviewed Laguna Grande paddle on GetYourGuide",
    rating: 4.4,
    reviewCount: 311,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/5f2181ef0dc0d.jpeg",
    imageAlt: "Fajardo: Bio Bay Kayak Tour — GetYourGuide tour photo",
  }),

  // ── Florida: Cocoa Beach ───────────────────────────────────────────────
  currentTour({
    id: "t1470618",
    name: "Florida: Clear Bottom Bioluminescent Kayak Tour",
    region: "Florida",
    locationSlug: "florida/cocoa-beach",
    launchPoint: "Kiwanis Island Park, Merritt Island",
    providerProductId: "t1470618",
    duration: "1.5 hours",
    startingPrice: 100.03,
    priceFormatted: "from $100.03",
    verdict: "Clear-bottom kayak from Kiwanis Island Park — the glow right under your seat",
    rating: 5.0,
    reviewCount: 1,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/1a52f495ac2eeb8004c0b57951a6a81ac2a59a3caa139714a4927b00c718beea.png",
    imageAlt: "Florida: Clear Bottom Bioluminescent Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1470567",
    name: "Florida: LED Night Kayak Tour with Comb Jellies",
    region: "Florida",
    locationSlug: "florida/cocoa-beach",
    launchPoint: "Kiwanis Island Park, Merritt Island",
    providerProductId: "t1470567",
    duration: "1.5 hours",
    startingPrice: 100.03,
    priceFormatted: "from $100.03",
    verdict:
      "A clear-kayak night tour built around the seasons — comb jellies in winter, dinoflagellates in summer",
    rating: null,
    reviewCount: null,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/461b82ec8a91a18a7fbaddc69c32adb8582d2a62c21055ca52b6d54bd0237235.png",
    imageAlt: "Florida: LED Night Kayak Tour with Comb Jellies — GetYourGuide tour photo",
  }),

  // ── Florida: Titusville ────────────────────────────────────────────────
  currentTour({
    id: "t1171174",
    name: "Titusville: Bioluminescent Clear Kayak Tour",
    region: "Florida",
    locationSlug: "florida/titusville",
    launchPoint: "Haulover Canal, Merritt Island National Wildlife Refuge",
    providerProductId: "t1171174",
    duration: "1.5 hours",
    startingPrice: 119,
    priceFormatted: "from $119",
    verdict: "Clear kayak from Haulover Canal, inside the refuge — the darkest launch on the Space Coast",
    rating: null,
    reviewCount: null,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/403d1b3c113629c88d38e04515b4f3e100b4f1e39c9d36d2898262493c953e70.jpg",
    imageAlt: "Titusville: Bioluminescent Clear Kayak Tour — GetYourGuide tour photo",
  }),

  // ── Florida: Near Orlando ──────────────────────────────────────────────
  currentTour({
    id: "t469544",
    name: "Orlando: Magic After Dark Bioluminescence Kayak Tour",
    region: "Florida",
    locationSlug: "florida/bioluminescent-kayaking-near-orlando",
    launchPoint: "Kayak Beach, off Highway 528",
    providerProductId: "t469544",
    duration: "1.5 hours",
    startingPrice: 85,
    priceFormatted: "from $85",
    verdict: "The Orlando-marketed pick, launching off Highway 528 toward Cape Canaveral",
    rating: 4.9,
    reviewCount: 46,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/56fbf884f6d1aa5c821ff30e512fd50bd0b5857c549ce8cd1aa3607df30abf0a.png",
    imageAlt: "Orlando: Magic After Dark Bioluminescence Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t478208",
    name: "Orlando: Bioluminescence Clear Kayaking or Paddleboarding",
    region: "Florida",
    locationSlug: "florida/bioluminescent-kayaking-near-orlando",
    launchPoint: "Space Coast lagoon launch sites",
    providerProductId: "t478208",
    duration: "",
    startingPrice: 75,
    priceFormatted: "from $75",
    verdict: "Clear kayak or paddleboard across lagoon launch sites on the Space Coast",
    rating: 4.3,
    reviewCount: 79,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/a0430e6dda1f50e842aca122453234d02c5b2bad1822fb962850af0b8ddfd873.jpeg",
    imageAlt: "Orlando: Bioluminescence Clear Kayaking or Paddleboarding — GetYourGuide tour photo",
  }),

  // ── Puerto Rico: Mosquito Bay, Vieques ─────────────────────────────────
  currentTour({
    id: "t999419",
    name: "Vieques: Bioluminescent Bay Kayak Night Tour with Guide",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t999419",
    duration: "1 hour",
    startingPrice: 55,
    priceFormatted: "from $55",
    verdict: "The budget way into Mosquito Bay — a 1-hour guided clear-kayak tour",
    rating: 4.4,
    reviewCount: 53,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/6f9b6dc7b342c9a721ca6ef7aaf7a90f2a7829370584012d4c9584b19e34db89.jpg",
    imageAlt: "Vieques: Bioluminescent Bay Kayak Night Tour with Guide — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1202092",
    name: "Vieques Island: Clear Kayaking Biobay Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Esperanza, Vieques",
    providerProductId: "t1202092",
    duration: "1.5 hours",
    startingPrice: 63,
    priceFormatted: "from $63",
    verdict: "Clear kayaking from Esperanza, on the bay's south-shore village",
    rating: 4.7,
    reviewCount: 12,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/8c20e09cfb5f4d6e1ca8aa8be7baf87e039c06ce15fffd2b86d3be51476747d7.png",
    imageAlt: "Vieques Island: Clear Kayaking Biobay Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1083143",
    name: "Transparent Canoe in the Bioluminescent Bay in Vieques",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t1083143",
    duration: "1 hour",
    startingPrice: 57,
    priceFormatted: "from $57",
    verdict: "A transparent canoe instead of a kayak — a slower, stable way to see the glow",
    rating: 4.3,
    reviewCount: 32,
    tourType: "clear canoe",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/5bbc128ec96d4f04443c950b9ca567772aa1d5ed36bbb2d314b73714851456f8.jpeg",
    imageAlt: "Transparent Canoe in the Bioluminescent Bay in Vieques — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1314316",
    name: "Vieques: Bioluminescent Bay Night Clear Kayak Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t1314316",
    duration: "1.5 hours",
    startingPrice: 64.88,
    priceFormatted: "from $64.88",
    verdict: "A 1.5-hour clear-kayak night tour with a solid run of reviews behind it",
    rating: 4.1,
    reviewCount: 69,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/9884ce6853c856b624b4aee097c67ce64736a293db78dd269df73fdbea56e8a4.jpg",
    imageAlt: "Vieques: Bioluminescent Bay Night Clear Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t417387",
    name: "Vieques: Bioluminescent Bay Boat Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t417387",
    duration: "40 minutes",
    startingPrice: 105,
    priceFormatted: "from $105",
    verdict: "The no-paddle option: an electric catamaran trip across the bay",
    rating: 4.5,
    reviewCount: 54,
    tourType: "boat",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/641666503dd5a.jpeg",
    imageAlt: "Vieques: Bioluminescent Bay Boat Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1363631",
    name: "Vieques: Bioluminescent Bay Clear Kayak Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Mosquito Bay, Vieques",
    providerProductId: "t1363631",
    duration: "1.5 hours",
    startingPrice: null,
    priceFormatted: "Prices vary by date",
    verdict: "A newer clear-kayak listing — book it for the format, not a long track record",
    rating: 5.0,
    reviewCount: 1,
    tourType: "clear kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/97dc482cfd092023bb87280716fc1b68870a0d8b42c9aafe5379272602b3dacb.png",
    imageAlt: "Vieques: Bioluminescent Bay Clear Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1282407",
    name: "Vieques Bio Bay Kayak Experience — From Mainland Puerto Rico",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/mosquito-bay-vieques",
    launchPoint: "Departs Fajardo (mainland)",
    providerProductId: "t1282407",
    duration: "7 hours",
    startingPrice: 295,
    priceFormatted: "from $295",
    verdict: "Mosquito Bay from the mainland: departs Fajardo with the crossing handled",
    rating: 5.0,
    reviewCount: 1,
    tourType: "clear kayak + boat transfer",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/33eaa6326e37118dcff5bbb3f6b4597d99b13b829264e1e4410289dd7a3f6cbf.png",
    imageAlt: "Vieques Bio Bay Kayak Experience — From Mainland Puerto Rico — GetYourGuide tour photo",
  }),

  // ── Puerto Rico: Laguna Grande, Fajardo ────────────────────────────────
  currentTour({
    id: "t22181",
    name: "Fajardo: Bioluminescent Lagoon Kayak or Full Moon Kayak Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/laguna-grande-fajardo",
    launchPoint: "Laguna Grande, Fajardo",
    providerProductId: "t22181",
    duration: "3 hours",
    startingPrice: 85,
    priceFormatted: "from $85",
    verdict: "The long-standing Fajardo listing — the longest of the three on the water",
    rating: 4.6,
    reviewCount: 275,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/603ff10dc4c6f.jpeg",
    imageAlt: "Fajardo: Bioluminescent Lagoon Kayak or Full Moon Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1057360",
    name: "Fajardo: Bioluminescent Bay Kayak Tour in Puerto Rico",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/laguna-grande-fajardo",
    launchPoint: "Laguna Grande, Fajardo",
    providerProductId: "t1057360",
    duration: "2 hours",
    startingPrice: 65.78,
    priceFormatted: "from $65.78",
    verdict: "The lowest-priced Laguna Grande kayak tour we found on GetYourGuide",
    rating: 4.0,
    reviewCount: 57,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/0cbc7beefb3bb6b234d6238be3081dc2ac92883e9a09f7db17c54d96d26423c.jpg",
    imageAlt: "Fajardo: Bioluminescent Bay Kayak Tour in Puerto Rico — GetYourGuide tour photo",
  }),

  // ── Puerto Rico: La Parguera ───────────────────────────────────────────
  currentTour({
    id: "t437542",
    name: "La Parguera: Sunset and Biobay or Late Night Biobay Cruise",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/la-parguera",
    launchPoint: "La Parguera waterfront, Lajas",
    providerProductId: "t437542",
    duration: "2 hours",
    startingPrice: 65,
    priceFormatted: "from $65",
    verdict: "The most-reviewed La Parguera trip — a sunset or late-night cruise with a swim stop",
    rating: 4.8,
    reviewCount: 581,
    tourType: "boat + swim",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/63996a2fae035.jpeg",
    imageAlt: "La Parguera: Sunset and Biobay or Late Night Biobay Cruise — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t885721",
    name: "La Parguera: Bioluminescent Bay Boat Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/la-parguera",
    launchPoint: "La Parguera waterfront, Lajas",
    providerProductId: "t885721",
    duration: "1 hour",
    startingPrice: 60,
    priceFormatted: "from $60",
    verdict: "The classic 1-hour boat tour with swimming in the glowing water",
    rating: 4.6,
    reviewCount: 296,
    tourType: "boat + swim",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/f3e49ef964723d3b89505149f81b7e342cc75e7d4a9979f48abad23e5fe12a44.jpeg",
    imageAlt: "La Parguera: Bioluminescent Bay Boat Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t714293",
    name: "La Parguera: Bioluminescent Bay Water Bike Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/la-parguera",
    launchPoint: "La Parguera waterfront, Lajas",
    providerProductId: "t714293",
    duration: "1.5 hours",
    startingPrice: 79,
    priceFormatted: "from $79",
    verdict: "Water bikes instead of a boat — you pedal above the glow, and there's no swimming on this one",
    rating: 4.8,
    reviewCount: 106,
    tourType: "water bike",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/2a9e513979753b6b7cad799a385f1e60d02d84ffd80aba43e2d0a2d91267c651.jpeg",
    imageAlt: "La Parguera: Bioluminescent Bay Water Bike Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1370783",
    name: "La Parguera: Bioluminescent Bay Boat Tour — Small Group",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/la-parguera",
    launchPoint: "La Parguera waterfront, Lajas",
    providerProductId: "t1370783",
    duration: "1 hour",
    startingPrice: 79,
    priceFormatted: "from $79",
    verdict: "A small-group catamaran if you want the bay without the swim stop",
    rating: null,
    reviewCount: null,
    tourType: "boat",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/4e725c765f8e7937ecd618329548a5c67495a3372b00a19998fd67f2a3bac3c3.jpeg",
    imageAlt: "La Parguera: Bioluminescent Bay Boat Tour — Small Group — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1427696",
    name: "Puerto Rico Bioluminescent Bay Boat Tour with Swim",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/la-parguera",
    launchPoint: "La Parguera waterfront, Lajas",
    providerProductId: "t1427696",
    duration: "2 hours",
    startingPrice: 100,
    priceFormatted: "from $100",
    verdict: "A 2-hour boat tour with swimming — a newer listing with few reviews so far",
    rating: 5.0,
    reviewCount: 1,
    tourType: "boat + swim",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/26515b59f16b53ce61f5fbf764689278cd29dd550738272f0679b0c77568ba24.png",
    imageAlt: "Puerto Rico Bioluminescent Bay Boat Tour with Swim — GetYourGuide tour photo",
  }),

  // ── Puerto Rico: Bio bay tours from San Juan ───────────────────────────
  currentTour({
    id: "t400689",
    name: "From San Juan: Bioluminescent Bay Kayak Adventure at Night",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan (transport included)",
    providerProductId: "t400689",
    duration: "5 hours",
    startingPrice: 110,
    priceFormatted: "from $110",
    verdict: "The San Juan departure with the deepest review base — Laguna Grande and back in one evening",
    rating: 4.1,
    reviewCount: 615,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/da8a232735fece84.jpeg",
    imageAlt: "From San Juan: Bioluminescent Bay Kayak Adventure at Night — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t230407",
    name: "San Juan: Bioluminescent Laguna Grande Bay Night Kayaking",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan",
    providerProductId: "t230407",
    duration: "5 hours",
    startingPrice: null,
    priceFormatted: "Prices vary by date",
    verdict: "A 5-hour San Juan departure for Laguna Grande, priced by date on GetYourGuide",
    rating: 4.4,
    reviewCount: 96,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/5cad409c62144.jpeg",
    imageAlt: "San Juan: Bioluminescent Laguna Grande Bay Night Kayaking — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t400232",
    name: "From San Juan: El Yunque Rainforest & Bio Bay Kayak Combo",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan (transport included)",
    providerProductId: "t400232",
    duration: "12 hours",
    startingPrice: 165,
    priceFormatted: "from $165",
    verdict: "The full-day combo: El Yunque rainforest by day, bio bay kayak by night",
    rating: 4.6,
    reviewCount: 167,
    tourType: "regular kayak (combo)",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/61e9a647a0567.png",
    imageAlt: "From San Juan: El Yunque Rainforest & Bio Bay Kayak Combo — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t279767",
    name: "San Juan: El Yunque and Bio Bay Full-Day Tour with Transport",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan (transport included)",
    providerProductId: "t279767",
    duration: "12 hours",
    startingPrice: 184,
    priceFormatted: "from $184",
    verdict: "El Yunque plus bio bay with the transport handled for you",
    rating: 4.7,
    reviewCount: 248,
    tourType: "regular kayak (combo)",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/6480a3848b7b6.jpeg",
    imageAlt: "San Juan: El Yunque and Bio Bay Full-Day Tour with Transport — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t406943",
    name: "From San Juan: La Parguera Glowing Bio Bay Boat Tour",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan (transport included)",
    providerProductId: "t406943",
    duration: "9 hours",
    startingPrice: 199,
    priceFormatted: "from $199",
    verdict: "La Parguera from San Juan without the drive — boat trip and swim included",
    rating: null,
    reviewCount: null,
    tourType: "boat + swim",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/6206c2734c480.png",
    imageAlt: "From San Juan: La Parguera Glowing Bio Bay Boat Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1508483",
    name: "San Juan to La Parguera Bio Bay Boat Ride and Swimming",
    region: "Puerto Rico",
    locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
    launchPoint: "San Juan (transport included)",
    providerProductId: "t1508483",
    duration: "",
    startingPrice: 65,
    priceFormatted: "from $65",
    verdict: "The lowest-priced San Juan departure we found for La Parguera",
    rating: 4.5,
    reviewCount: 8,
    tourType: "boat + swim",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/de21834b6b621f94dcd98e4937e9f12b8ec791f334260add7f8c9f18ced79969.jpeg",
    imageAlt: "San Juan to La Parguera Bio Bay Boat Ride and Swimming — GetYourGuide tour photo",
  }),

  // ── Washington ─────────────────────────────────────────────────────────
  currentTour({
    id: "t781875",
    name: "Bioluminescence Night Paddle",
    region: "Washington",
    locationSlug: "washington/san-juan-island",
    launchPoint: "Jackson's Beach, Friday Harbor",
    providerProductId: "t781875",
    duration: "3 hours",
    startingPrice: 179,
    priceFormatted: "from $179",
    verdict: "Friday Harbor's night paddle in Griffin Bay — a short summer season, June to mid-September",
    rating: 4.3,
    reviewCount: 9,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/fa85cf99d591c32d49d2d48a0f91c57d5f6ecd5b423ad7f3f188cd6d5c6bd2b7.jpeg",
    imageAlt: "Bioluminescence Night Paddle — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t1520890",
    name: "Friday Harbor: Sunset Bioluminescence Kayak Tour",
    region: "Washington",
    locationSlug: "washington/san-juan-island",
    launchPoint: "Friday Harbor",
    providerProductId: "t1520890",
    duration: "4 hours",
    startingPrice: 226,
    priceFormatted: "from $226",
    verdict: "The beginner format: a beach lesson first, then the sunset paddle, with transport from the ferry terminal",
    rating: null,
    reviewCount: null,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/251f5db4d39e3624ac83a7c9c2b3e219e60cf5f236528efa23166af99cdc62c4.jpg",
    imageAlt: "Friday Harbor: Sunset Bioluminescence Kayak Tour — GetYourGuide tour photo",
  }),
  currentTour({
    id: "t969515",
    name: "Eastsound: Orcas Island Bioluminescent Kayak Tour",
    region: "Washington",
    locationSlug: "washington/orcas-island",
    launchPoint: "Rosario Resort, Eastsound",
    providerProductId: "t969515",
    duration: "2 hours",
    startingPrice: 119,
    priceFormatted: "from $119",
    verdict: "Orcas Island's glow paddle, departing Eastsound in the summer season",
    rating: 4.4,
    reviewCount: 20,
    tourType: "regular kayak",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=70%2Cwidth=800%2Cheight=500/tour_img/b801d306937df4f6b79ffc456c3cd2fda5693bc2d8636981d02c53faf122c106.jpg",
    imageAlt: "Eastsound: Orcas Island Bioluminescent Kayak Tour — GetYourGuide tour photo",
  }),
];

/**
 * Held rows — never rendered. "legacy-recheck": verified from older
 * GetYourGuide crawls but absent from current category pages; re-check
 * bookability and price before promoting. "hold": activity ID unverified
 * or pricing is per-group, not per-person.
 */
export const HELD_TOURS: Tour[] = [
  // Delisted by GetYourGuide — activity page returns HTTP 410 (verified 2026-11-13).
  heldTour(
    {
      id: "t340951",
      name: "From San Juan: Bio Bay Magic & Rum Tasting Tour",
      region: "Puerto Rico",
      locationSlug: "puerto-rico/bio-bay-tours-from-san-juan",
      launchPoint: "San Juan (transport included)",
      providerProductId: "t340951",
      duration: "10 hours",
      startingPrice: 250,
      priceFormatted: "from $250",
      verdict: "The big day out: rum tasting, dinner and a sand bar before the glowing swim at La Parguera",
      rating: 4.8,
      reviewCount: 212,
      tourType: "boat + swim (combo)",
      image: PUERTO_RICO_IMG,
      imageAlt: PUERTO_RICO_IMG_ALT,
    },
    "hold"
  ),
  heldTour(
    {
      id: "t1020304",
      name: "Cocoa Beach: Bioluminescent Paddle Raft Tour",
      region: "Florida",
      locationSlug: "florida/cocoa-beach",
      launchPoint: "",
      providerProductId: "t1020304",
      duration: "1.5 hours",
      startingPrice: null,
      priceFormatted: "Prices vary by date",
      verdict: "",
      rating: 4.3,
      reviewCount: null,
      tourType: "raft",
      image: COCOA_IMG,
      imageAlt: COCOA_IMG_ALT,
    },
    "legacy-recheck"
  ),
  heldTour(
    {
      id: "t1020218",
      name: "Titusville: Bioluminescent Kayaking Tour",
      region: "Florida",
      locationSlug: "florida/titusville",
      launchPoint: "",
      providerProductId: "t1020218",
      duration: "1.5 hours",
      startingPrice: null,
      priceFormatted: "Prices vary by date",
      verdict: "",
      rating: 5.0,
      reviewCount: 2,
      tourType: "regular kayak",
      image: MERRITT_IMG,
      imageAlt: MERRITT_IMG_ALT,
    },
    "legacy-recheck"
  ),
  heldTour(
    {
      id: "t1190875",
      name: "Titusville Bioluminescent Raft Tour",
      region: "Florida",
      locationSlug: "florida/titusville",
      launchPoint: "",
      providerProductId: "t1190875",
      duration: "1.5 hours",
      startingPrice: null,
      priceFormatted: "Prices vary by date",
      verdict: "",
      rating: null,
      reviewCount: null,
      tourType: "raft",
      image: MERRITT_IMG,
      imageAlt: MERRITT_IMG_ALT,
    },
    "legacy-recheck"
  ),
  heldTour(
    {
      id: "t1010611",
      name: "Near Orlando: Clear Kayak Bioluminescence — Wildlife Refuge",
      region: "Florida",
      locationSlug: "florida/bioluminescent-kayaking-near-orlando",
      launchPoint: "",
      providerProductId: "t1010611",
      duration: "",
      startingPrice: null,
      priceFormatted: "Prices vary by date",
      verdict: "",
      rating: null,
      reviewCount: null,
      tourType: "clear kayak",
      image: MERRITT_IMG,
      imageAlt: MERRITT_IMG_ALT,
    },
    "legacy-recheck"
  ),
  heldTour(
    {
      id: "vieques-ferry-day-trip-unverified",
      name: "Vieques Beach & BioBay With Ferry & Beach Transfer",
      region: "Puerto Rico",
      locationSlug: "puerto-rico/mosquito-bay-vieques",
      launchPoint: "Departs Ceiba",
      providerProductId: "",
      duration: "11 hours",
      startingPrice: 199,
      priceFormatted: "from $199",
      verdict: "",
      rating: 3.0,
      reviewCount: 4,
      tourType: "clear-bottom kayak + ferry",
      image: VIEQUES_IMG,
      imageAlt: VIEQUES_IMG_ALT,
    },
    "hold"
  ),
  heldTour(
    {
      id: "t843204",
      name: "Private Snorkeling, Sunset and Bioluminescent Swim Boat Tour",
      region: "Puerto Rico",
      locationSlug: "puerto-rico/la-parguera",
      launchPoint: "Departs Ponce",
      providerProductId: "t843204",
      duration: "",
      startingPrice: 1499,
      priceFormatted: "from $1,499",
      verdict: "",
      rating: null,
      reviewCount: null,
      tourType: "boat + swim (private)",
      image: PUERTO_RICO_IMG,
      imageAlt: PUERTO_RICO_IMG_ALT,
    },
    "hold"
  ),
  heldTour(
    {
      id: "t1062844",
      name: "Bioluminescence Kayak Tour: Port Townsend, WA",
      region: "Washington",
      locationSlug: "unassigned/port-townsend",
      launchPoint: "Fort Flagler, Marrowstone Island",
      providerProductId: "t1062844",
      duration: "2.5 hours",
      startingPrice: null,
      priceFormatted: "Prices vary by date",
      verdict: "",
      rating: 5.0,
      reviewCount: 6,
      tourType: "regular kayak",
      image: WASHINGTON_IMG,
      imageAlt: WASHINGTON_IMG_ALT,
    },
    "hold"
  ),
];

/** Tours for one location page, in database order. */
export function getToursByLocation(locationSlug: string): Tour[] {
  return TOURS.filter((t) => t.locationSlug === locationSlug);
}

/** "from $X" for a location, from its cheapest priced current tour. */
export function getFromPriceFormatted(locationSlug: string): string | undefined {
  const prices = getToursByLocation(locationSlug)
    .map((t) => t.startingPrice)
    .filter((p): p is number => p !== null);
  if (prices.length === 0) return undefined;
  const min = Math.min(...prices);
  const tour = getToursByLocation(locationSlug).find(
    (t) => t.startingPrice === min
  );
  return tour?.priceFormatted;
}

/** Homepage Best Tours picks (feature tours from the database report). */
export const FEATURED_TOUR_IDS = ["t697907", "t922494", "t140169"];

export function getTourById(id: string): Tour | undefined {
  return TOURS.find((t) => t.providerProductId === id);
}
