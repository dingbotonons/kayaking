import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { DestinationsHero } from "@/components/destinations/DestinationsHero";
import { DestinationsTonightStrip } from "@/components/destinations/DestinationsTonightStrip";
import { DestinationsRegionSections } from "@/components/destinations/DestinationsRegionSections";
import { DestinationsHowToChoose } from "@/components/destinations/DestinationsHowToChoose";
import {
  DESTINATION_REGIONS,
  DESTINATIONS_HERO_IMAGE,
} from "@/src/data/destinations";

export const metadata: Metadata = {
  title: "Where to See Bioluminescence in the USA: 12 Glowing Bays",
  description:
    "Every glowing bay in America mapped: Florida Space Coast, Puerto Rico's 3 bio bays, Tomales Bay & San Juan Islands. See tonight's glow score and best months.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/destinations/",
  },
  openGraph: {
    title: "Where to See Bioluminescence in the USA: 12 Glowing Bays",
    description:
      "Every glowing bay in America mapped: Florida Space Coast, Puerto Rico's 3 bio bays, Tomales Bay & San Juan Islands. See tonight's glow score and best months.",
    url: "https://bioluminescentkayaking.us/destinations/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: DESTINATIONS_HERO_IMAGE.src,
        width: 1200,
        height: 800,
        alt: DESTINATIONS_HERO_IMAGE.alt,
      },
    ],
  },
};

export default function DestinationsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bioluminescentkayaking.us/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Destinations",
            item: "https://bioluminescentkayaking.us/destinations/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Bioluminescent Kayaking Destinations in the USA",
        description:
          "All bioluminescent kayaking regions and launch locations across Florida, Puerto Rico, California, and Washington.",
        numberOfItems: DESTINATION_REGIONS.length,
        itemListElement: DESTINATION_REGIONS.map((region, regionIdx) => ({
          "@type": "ListItem",
          position: regionIdx + 1,
          item: {
            "@type": "ItemList",
            name: region.name,
            description: region.intro,
            url: `https://bioluminescentkayaking.us/destinations/#${region.id}`,
            numberOfItems: region.locations.length,
            itemListElement: region.locations.map((loc, locIdx) => ({
              "@type": "ListItem",
              position: locIdx + 1,
              name: loc.name,
              description: loc.waterAndSeason,
              url: loc.isPublished
                ? `https://bioluminescentkayaking.us${loc.href}`
                : `https://bioluminescentkayaking.us/destinations/#${region.id}`,
            })),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-white text-ink font-sans">
        <Header />
        <main className="flex-1">
          <DestinationsHero />
          <DestinationsTonightStrip />
          <DestinationsRegionSections />
          <DestinationsHowToChoose />
        </main>
        <Footer />
      </div>
    </>
  );
}

