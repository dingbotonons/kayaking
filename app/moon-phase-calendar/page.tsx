import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { MoonHero } from "@/components/moon/MoonHero";
import { BestNightsComingUp } from "@/components/moon/BestNightsComingUp";
import { MonthGrid } from "@/components/moon/MonthGrid";
import { HowToUseSection } from "@/components/moon/HowToUseSection";
import { WhyMoonsetSection } from "@/components/moon/WhyMoonsetSection";
import { MoonFaqSection } from "@/components/moon/MoonFaqSection";
import { MoonCtaBand } from "@/components/moon/MoonCtaBand";

import { getMonthCalendarData } from "@/lib/moon";

export const metadata: Metadata = {
  title: "Bioluminescence Moon Calendar 2026–2027: Best Dark Sky Nights",
  description:
    "Don't waste money paddling under a bright full moon! See month-by-month dark windows for bioluminescent kayaking, plus the moonset timing trick that saves your trip.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/moon-phase-calendar/",
  },
  openGraph: {
    title: "Bioluminescence Moon Calendar 2026–2027: Best Dark Sky Nights",
    description:
      "Don't waste money paddling under a bright full moon! See month-by-month dark windows for bioluminescent kayaking, plus the moonset timing trick that saves your trip.",
    url: "https://bioluminescentkayaking.us/moon-phase-calendar/",
    siteName: "BioluminescentKayaking.us",
    locale: "en_US",
    type: "website",
  },
};

export default function MoonPhaseCalendarPage() {
  // Computed calendar grids:
  // Nov 2026 (month 10), Dec 2026 (month 11) & Jan 2027 (month 0)
  const novemberData = getMonthCalendarData(2026, 10);
  const decemberData = getMonthCalendarData(2026, 11);
  const januaryData = getMonthCalendarData(2027, 0);

  const jsonLd = {
    "@context": "https://schema.org",
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
        name: "Moon Phase Calendar",
        item: "https://bioluminescentkayaking.us/moon-phase-calendar/",
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
        <MoonHero />
        <BestNightsComingUp />

        {/* Month Grids: strict alternating rhythm per design system */}
        <MonthGrid calendar={novemberData} bg="white" />
        <MonthGrid calendar={decemberData} bg="seafoam" />
        <MonthGrid calendar={januaryData} bg="white" />

        {/* Section: How to use this calendar */}
        <HowToUseSection />

        {/* Section: Why moonset matters */}
        <WhyMoonsetSection />

        {/* Section: Frequently asked questions */}
        <MoonFaqSection />

        {/* CTA Band */}
        <MoonCtaBand />
      </main>

      <Footer />
    </div>
  );
}
