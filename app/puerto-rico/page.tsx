import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PuertoRicoHero } from "@/components/puerto-rico/PuertoRicoHero";
import { PuertoRicoTonightSection } from "@/components/puerto-rico/PuertoRicoTonightSection";
import { PuertoRicoComparisonSection } from "@/components/puerto-rico/PuertoRicoComparisonSection";
import { PuertoRicoThreeBaysSection } from "@/components/puerto-rico/PuertoRicoThreeBaysSection";
import { PuertoRicoToursSection } from "@/components/puerto-rico/PuertoRicoToursSection";
import { PuertoRicoPlanTripSection } from "@/components/puerto-rico/PuertoRicoPlanTripSection";
import { PuertoRicoFaqSection } from "@/components/puerto-rico/PuertoRicoFaqSection";

export const metadata: Metadata = {
  title: "Puerto Rico Bioluminescent Bay Tours: 3 Bio Bays Compared",
  description:
    "Which Puerto Rico bio bay is best? Compare Mosquito Bay (brightest), Laguna Grande (near San Juan) & La Parguera (swimming allowed). Tours from $55 + glow score.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/puerto-rico",
  },
  openGraph: {
    title: "Puerto Rico Bioluminescent Bay Tours: 3 Bio Bays Compared",
    description:
      "Which Puerto Rico bio bay is best? Compare Mosquito Bay (brightest), Laguna Grande (near San Juan) & La Parguera (swimming allowed). Tours from $55 + glow score.",
    url: "https://bioluminescentkayaking.us/puerto-rico",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://bioluminescentkayaking.us/images/puerto_rico.webp",
        width: 1200,
        height: 630,
        alt: "Clear kayaks glowing under tranquil Caribbean waters in Puerto Rico at twilight",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PuertoRicoRegionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bioluminescentkayaking.us/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Puerto Rico",
            "item": "https://bioluminescentkayaking.us/puerto-rico/",
          },
        ],
      },
      {
        "@type": "ItemList",
        "name": "Puerto Rico Bioluminescent Bays and Tours",
        "description": "Puerto Rico's three year-round bioluminescent bays compared: Mosquito Bay, Laguna Grande, and La Parguera.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Mosquito Bay, Vieques",
            "description": "The Guinness World Record holder for brightest bioluminescent bay on Earth.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/#the-three-bays",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Laguna Grande, Fajardo",
            "description": "Mangrove channel paddle into a glowing lagoon, located about an hour from San Juan.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/#the-three-bays",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "La Parguera, Lajas",
            "description": "Southwest coast bay and the only bioluminescent bay in Puerto Rico where swimming is permitted.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/#the-three-bays",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bio Bay Tours from San Juan",
            "description": "Convenient day-trip and evening excursions with round-trip transportation from San Juan.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/#the-three-bays",
          },
        ],
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
          <PuertoRicoHero />
          <PuertoRicoTonightSection />
          <PuertoRicoComparisonSection />
          <PuertoRicoThreeBaysSection />
          <PuertoRicoToursSection />
          <PuertoRicoPlanTripSection />
          <PuertoRicoFaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

