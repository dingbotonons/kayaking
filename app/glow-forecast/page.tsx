import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { ForecastHero } from "@/components/forecast/ForecastHero";
import { TonightGlanceSection } from "@/components/forecast/TonightGlanceSection";
import { AllLocationsSection } from "@/components/forecast/AllLocationsSection";
import { HowToReadSection } from "@/components/forecast/HowToReadSection";
import { ForecastMoonCalendarSection } from "@/components/forecast/ForecastMoonCalendarSection";
import { ForecastFaqSection } from "@/components/forecast/ForecastFaqSection";
import { ForecastCtaBand } from "@/components/forecast/ForecastCtaBand";

import {
  TONIGHT_FEATURED_IDS,
  getLocationStatic,
  type LocationStatic,
} from "@/src/data/locations";
import type { TonightCardData } from "@/components/home/TonightGlowSection";
import { getTonightConditions } from "@/lib/conditions";
import { getNextDarkNights } from "@/lib/glow";

export const metadata: Metadata = {
  title: "Tonight's Bioluminescence Forecast (0–100 Glow Score) | 12 Bays",
  description:
    "Will it glow tonight? Real-time 0–100 bioluminescent kayak forecast for FL, PR, CA & WA. Live moon darkness, cloud cover, wind, and season ratings.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/glow-forecast/",
  },
  openGraph: {
    title: "Tonight's Bioluminescence Forecast (0–100 Glow Score) | 12 Bays",
    description:
      "Will it glow tonight? Real-time 0–100 bioluminescent kayak forecast for FL, PR, CA & WA. Live moon darkness, cloud cover, wind, and season ratings.",
    url: "https://bioluminescentkayaking.us/glow-forecast/",
    siteName: "BioluminescentKayaking.us",
    locale: "en_US",
    type: "website",
  },
};

export default async function GlowForecastPage() {
  const tonightCards: TonightCardData[] = await Promise.all(
    TONIGHT_FEATURED_IDS.map(async (id) => ({
      loc: getLocationStatic(id) as LocationStatic,
      tonight: await getTonightConditions(id),
    }))
  );
  // 7-day strip for the moon section on the forecast page
  const next7Nights = getNextDarkNights(7);

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
            name: "Glow Forecast",
            item: "https://bioluminescentkayaking.us/glow-forecast/",
          },
        ],
      },
      {
        "@type": "Dataset",
        name: "Bioluminescent Kayaking Glow Forecast",
        description:
          "Nightly glow estimates (0–100) for 12 bioluminescent kayaking locations in Florida, Puerto Rico, California and Washington, calculated from season baselines, SunCalc moon data and Open-Meteo cloud, wind and rainfall forecasts. An estimate, not a live bioluminescence measurement — no such measurement exists.",
        url: "https://bioluminescentkayaking.us/glow-forecast/",
        creator: {
          "@type": "Organization",
          name: "BioluminescentKayaking.us",
          url: "https://bioluminescentkayaking.us/",
        },
        temporalCoverage: "2026/..",
        spatialCoverage: "Florida, Puerto Rico, California and Washington, USA",
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        <ForecastHero />
        <TonightGlanceSection cards={tonightCards} />
        <AllLocationsSection />
        <HowToReadSection />
        <ForecastMoonCalendarSection nights={next7Nights} />
        <ForecastFaqSection />
        <ForecastCtaBand />
      </main>

      <Footer />
    </div>
  );
}
