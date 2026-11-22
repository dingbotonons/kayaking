import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { RegionHero } from "@/components/regions/RegionHero";
import { RegionTonightSection } from "@/components/regions/RegionTonightSection";
import { RegionLocationsSection } from "@/components/regions/RegionLocationsSection";
import { RegionSeasonSection } from "@/components/regions/RegionSeasonSection";
import { RegionInfoSection } from "@/components/regions/RegionInfoSection";
import { RegionFaqSection } from "@/components/regions/RegionFaqSection";
import { TourCardsSection } from "@/components/regions/TourCardsSection";
import { WASHINGTON_REGION } from "@/src/data/region-pages";

const region = WASHINGTON_REGION;

export const metadata: Metadata = {
  title: region.metaTitle,
  description: region.metaDescription,
  alternates: {
    canonical: "https://bioluminescentkayaking.us/washington",
  },
  openGraph: {
    title: region.metaTitle,
    description: region.metaDescription,
    url: "https://bioluminescentkayaking.us/washington",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: region.heroImage,
        width: 1200,
        height: 630,
        alt: region.heroImageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WashingtonRegionPage() {
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
            name: "Washington",
            item: "https://bioluminescentkayaking.us/washington/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Washington Bioluminescent Kayaking Locations",
        description:
          "Friday Harbor and Orcas Island night paddles in the San Juan Islands, and Hood Canal's direct-book glow.",
        itemListElement: region.locations.map((loc, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: loc.name,
          description: loc.description,
          url: `https://bioluminescentkayaking.us${loc.href}`,
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
      <div className="min-h-screen bg-white text-ink flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <RegionHero region={region} />
          <RegionTonightSection region={region} />
          <RegionLocationsSection region={region} />
          <TourCardsSection
            tourIds={["t781875", "t1520890", "t969515"]}
            title="Featured Washington tours"
            intro="Every bookable Washington glow tour on GetYourGuide — two from Friday Harbor, one from Eastsound."
            seasonNote="Seasonal tours: Washington's glow products run in the summer season only — the next bookable dates we saw when checking were for May 2027."
            variant="hub"
            bg="seafoam"
          />
          <RegionSeasonSection region={region} />
          <RegionInfoSection
            eyebrow={region.infoEyebrow}
            title={region.infoTitle}
            intro={region.infoIntro}
            cards={region.infoCards}
            bg="seafoam"
            id="plan"
          />
          <RegionFaqSection
            faqs={region.faqs}
            intro="Clear, honest answers about bioluminescent kayaking in Washington."
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
