import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { TonightGlowSection } from "@/components/home/TonightGlowSection";
import { WhereWaterGlowsSection } from "@/components/home/WhereWaterGlowsSection";
import { BestToursSection } from "@/components/home/BestToursSection";
import { MoonCalendarSection } from "@/components/home/MoonCalendarSection";
import { PlanItRightSection } from "@/components/home/PlanItRightSection";
import { FaqSection } from "@/components/home/FaqSection";
import { Footer } from "@/components/home/Footer";

import { FEATURED_TOUR_IDS, getTourById, type Tour } from "@/src/data/tours";
import {
  TONIGHT_FEATURED_IDS,
  getLocationStatic,
  type LocationStatic,
} from "@/src/data/locations";
import type { TonightCardData } from "@/components/home/TonightGlowSection";
import { getTonightConditions } from "@/lib/conditions";
import { getNextDarkNights } from "@/lib/glow";

export default async function HomePage() {
  const featuredTours: Tour[] = FEATURED_TOUR_IDS.map((id) =>
    getTourById(id)
  ).filter((t): t is Tour => Boolean(t));
  const tonightCards: TonightCardData[] = await Promise.all(
    TONIGHT_FEATURED_IDS.map(async (id) => ({
      loc: getLocationStatic(id) as LocationStatic,
      tonight: await getTonightConditions(id),
    }))
  );
  const nextNights = getNextDarkNights();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bioluminescentkayaking.us/#organization",
        "name": "BioluminescentKayaking.us",
        "url": "https://bioluminescentkayaking.us/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bioluminescentkayaking.us/logo.png",
        },
        "description":
          "Independent traveler guide comparing bioluminescent kayaking tours and nightly glow conditions across America.",
      },
      {
        "@type": "WebSite",
        "@id": "https://bioluminescentkayaking.us/#website",
        "url": "https://bioluminescentkayaking.us/",
        "name": "BioluminescentKayaking.us",
        "publisher": {
          "@id": "https://bioluminescentkayaking.us/#organization",
        },
        "description":
          "Compare bioluminescent kayaking tours in Florida, Puerto Rico, California and Washington — with tonight's glow forecast, moon calendar and checked prices.",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema: Organization + WebSite only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <HeroSection />
        <TonightGlowSection cards={tonightCards} />
        <WhereWaterGlowsSection />
        <BestToursSection tours={featuredTours} />
        <MoonCalendarSection nights={nextNights} />
        <PlanItRightSection />
        <FaqSection />
      </main>

      <Footer />
    </>
  );
}
