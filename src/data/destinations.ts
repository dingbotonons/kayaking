import {
  LOCATIONS_STATIC,
  REGIONS,
  getLocationStatic,
} from "@/src/data/locations";
import { TOURS, getFromPriceFormatted } from "@/src/data/tours";

export interface DestinationLocationCard {
  id: string;
  name: string;
  badgeTag?: string;
  waterAndSeason: string;
  href: string;
  isPublished: boolean;
  forecastId?: string;
  priceFormatted?: string;
  image: string;
  imageAlt: string;
}

export interface DestinationRegionGroup {
  id: "florida" | "puerto-rico" | "california" | "washington";
  name: string;
  countLabel: string;
  intro: string;
  hubHref: string;
  isHubPublished: boolean;
  locations: DestinationLocationCard[];
}

export const DESTINATIONS_HERO_IMAGE = {
  src: "/images/destinations-hero.webp",
  alt: "Kayakers paddling through glowing blue bioluminescent water under a starry sky",
};

function getTourPrice(locationSlug: string): string | undefined {
  return getFromPriceFormatted(locationSlug);
}

export const DESTINATION_REGIONS: DestinationRegionGroup[] = [
  {
    id: "florida",
    name: "Florida",
    countLabel: "3 Destinations",
    intro:
      "One lagoon system on the Space Coast — the only region that glows all year.",
    hubHref: "/florida/",
    isHubPublished: true,
    locations: [
      {
        id: "cocoa-beach",
        name: "Cocoa Beach",
        badgeTag: "Banana River",
        waterAndSeason: "Banana River — glows all year, two seasons of glow",
        href: "/florida/cocoa-beach/",
        isPublished: true,
        forecastId: "cocoa-beach",
        priceFormatted: getTourPrice("florida/cocoa-beach"),
        image: LOCATIONS_STATIC[0].image,
        imageAlt: LOCATIONS_STATIC[0].imageAlt,
      },
      {
        id: "titusville",
        name: "Titusville & Merritt Island",
        badgeTag: "Mosquito Lagoon",
        waterAndSeason: "Mosquito Lagoon — the wild, dark side of the lagoon",
        href: "/florida/titusville/",
        isPublished: true,
        forecastId: "titusville",
        priceFormatted: getTourPrice("florida/titusville"),
        image: "/images/titusville_img.webp",
        imageAlt:
          "Night kayaking under twilight sky near NASA launch complex at Titusville Merritt Island",
      },
      {
        id: "near-orlando",
        name: "Near Orlando",
        badgeTag: "Space Coast Access (45–60 min drive)",
        waterAndSeason:
          "The glow trip for theme-park holidays, under an hour east",
        href: "/florida/bioluminescent-kayaking-near-orlando/",
        isPublished: true,
        priceFormatted: getTourPrice("florida/bioluminescent-kayaking-near-orlando"),
        image: TOURS[0].image,
        imageAlt: TOURS[0].imageAlt,
      },
    ],
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico",
    countLabel: "4 Destinations",
    intro:
      "Three famous bio bays, three different trips — the brightest water on Earth included.",
    hubHref: "/puerto-rico/",
    isHubPublished: true,
    locations: [
      {
        id: "mosquito-bay",
        name: "Mosquito Bay, Vieques",
        waterAndSeason: "The brightest bio bay on Earth — plan an overnight",
        href: "/puerto-rico/mosquito-bay-vieques/",
        isPublished: true,
        forecastId: "mosquito-bay",
        priceFormatted: getTourPrice("puerto-rico/mosquito-bay-vieques"),
        image: LOCATIONS_STATIC[3].image,
        imageAlt: LOCATIONS_STATIC[3].imageAlt,
      },
      {
        id: "laguna-grande",
        name: "Laguna Grande, Fajardo",
        waterAndSeason: "The mangrove-channel paddle, an hour from San Juan",
        href: "/puerto-rico/laguna-grande-fajardo/",
        isPublished: true,
        forecastId: "laguna-grande",
        priceFormatted: getTourPrice("puerto-rico/laguna-grande-fajardo"),
        image: TOURS[2].image,
        imageAlt: TOURS[2].imageAlt,
      },
      {
        id: "la-parguera",
        name: "La Parguera",
        waterAndSeason: "The bay you can swim in",
        href: "/puerto-rico/la-parguera/",
        isPublished: true,
        forecastId: "la-parguera",
        priceFormatted: getTourPrice("puerto-rico/la-parguera"),
        image: "/images/la_parguera.webp",
        imageAlt:
          "Swimmers in glowing bioluminescent waters of La Parguera alongside tour boat at dusk",
      },
      {
        id: "from-san-juan",
        name: "Bio Bay Tours from San Juan",
        badgeTag: "Hotel pickup available",
        waterAndSeason: "No car? Tours with transport included",
        href: "/puerto-rico/bio-bay-tours-from-san-juan/",
        isPublished: true,
        priceFormatted: getTourPrice("puerto-rico/bio-bay-tours-from-san-juan"),
        image: "/images/bio_bay.webp",
        imageAlt:
          "Aerial historic coastal view of Old San Juan Puerto Rico fortress at sunset overlooking ocean",
      },
    ],
  },
  {
    id: "california",
    name: "California",
    countLabel: "2 Destinations",
    intro:
      "Dark-moon paddles on Tomales Bay, and San Diego's unpredictable red-tide blooms.",
    hubHref: "/california/",
    isHubPublished: true,
    locations: [
      {
        id: "tomales-bay",
        name: "Tomales Bay",
        badgeTag: "Point Reyes National Seashore",
        waterAndSeason: "Dark-moon paddles by Point Reyes, June–October",
        href: "/california/tomales-bay/",
        isPublished: true,
        forecastId: "tomales-bay",
        image: LOCATIONS_STATIC[6].image,
        imageAlt: LOCATIONS_STATIC[6].imageAlt,
      },
      {
        id: "san-diego",
        name: "San Diego",
        badgeTag: "Southern California",
        waterAndSeason:
          "Red-tide blooms — unpredictable, tracked not scheduled",
        href: "/california/san-diego/",
        isPublished: true,
        forecastId: "san-diego",
        image: REGIONS[2].image,
        imageAlt: REGIONS[2].imageAlt,
      },
    ],
  },
  {
    id: "washington",
    name: "Washington",
    countLabel: "3 Destinations",
    intro:
      "A short summer season in the San Juan Islands — book the dark-moon weeks.",
    hubHref: "/washington/",
    isHubPublished: true,
    locations: [
      {
        id: "san-juan-island",
        name: "San Juan Island",
        waterAndSeason: "Summer-only night paddles from Friday Harbor",
        href: "/washington/san-juan-island/",
        isPublished: true,
        priceFormatted: getTourPrice("washington/san-juan-island"),
        forecastId: "san-juan-island",
        image: LOCATIONS_STATIC[8].image,
        imageAlt: LOCATIONS_STATIC[8].imageAlt,
      },
      {
        id: "orcas-island",
        name: "Orcas Island",
        waterAndSeason: "Eastsound's summer glow",
        href: "/washington/orcas-island/",
        isPublished: true,
        priceFormatted: getTourPrice("washington/orcas-island"),
        forecastId: "orcas-island",
        image: REGIONS[3].image,
        imageAlt: REGIONS[3].imageAlt,
      },
      {
        id: "hood-canal",
        name: "Hood Canal",
        waterAndSeason: "The quiet mainland option",
        href: "/washington/hood-canal/",
        isPublished: true,
        forecastId: "hood-canal",
        image: getLocationStatic("hood-canal")!.image,
        imageAlt: getLocationStatic("hood-canal")!.imageAlt,
      },
    ],
  },
];

export const SCOREABLE_LOCATION_IDS = LOCATIONS_STATIC.filter(
  (loc) => loc.id !== "san-diego"
).map((loc) => loc.id);

export const HOW_TO_CHOOSE_CARDS = [
  {
    id: "brightest-glow",
    title: "Brightest glow",
    body: "Mosquito Bay, if you can stay the night.",
  },
  {
    id: "easiest-trip",
    title: "Easiest trip",
    body: "Laguna Grande from San Juan, or Cocoa Beach from Orlando.",
  },
  {
    id: "swim",
    title: "Only here for the swim",
    body: "La Parguera is the one bay you can get into.",
  },
];
