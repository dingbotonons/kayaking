import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { RegionHero } from "@/components/regions/RegionHero";
import { RegionTonightSection } from "@/components/regions/RegionTonightSection";
import { RegionLocationsSection } from "@/components/regions/RegionLocationsSection";
import { RegionSeasonSection } from "@/components/regions/RegionSeasonSection";
import { RegionInfoSection } from "@/components/regions/RegionInfoSection";
import { RegionFaqSection } from "@/components/regions/RegionFaqSection";
import { DirectBookingSection } from "@/components/locations/DirectBookingSection";
import { CALIFORNIA_REGION } from "@/src/data/region-pages";

const region = CALIFORNIA_REGION;

export const metadata: Metadata = {
  title: region.metaTitle,
  description: region.metaDescription,
  alternates: {
    canonical: "https://bioluminescentkayaking.us/california/",
  },
  openGraph: {
    title: region.metaTitle,
    description: region.metaDescription,
    url: "https://bioluminescentkayaking.us/california/",
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

export default function CaliforniaRegionPage() {
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
            name: "California",
            item: "https://bioluminescentkayaking.us/california/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "California Bioluminescent Kayaking Locations",
        description:
          "Tomales Bay's dark-moon paddles and San Diego's red-tide bloom tracker.",
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
          <DirectBookingSection
            bg="seafoam"
            title="How booking works in California"
            intro="This region has no booking cards, and that's deliberate."
            paragraphs={[
              "There are no standalone bioluminescent kayak tours for California on GetYourGuide — we checked the full catalogue, and the Tomales Bay glow only appears inside multi-day package tours. So this region works differently: Tomales Bay outfitters sell their night paddles directly, and San Diego has no bookable natural-glow product at all.",
              "We earn nothing on California bookings. These pages exist to complete the map, to score the nights that can be scored, and to warn you off products that fake the glow with LED lights.",
            ]}
            noteTitle="The short version"
            noteBullets={[
              "Tomales Bay: book direct with a Point Reyes outfitter",
              "San Diego: no bookable natural glow — follow the bloom tracker",
              "LED 'glow' kayaks are not bioluminescence, anywhere",
            ]}
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
            intro="Clear, honest answers about bioluminescent kayaking in California."
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
