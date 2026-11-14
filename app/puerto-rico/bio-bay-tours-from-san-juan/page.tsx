import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { SanJuanHero } from "@/components/san-juan-transit/SanJuanHero";
import { SanJuanComparisonTableSection } from "@/components/san-juan-transit/SanJuanComparisonTableSection";
import { SanJuanOptionsDetailSection } from "@/components/san-juan-transit/SanJuanOptionsDetailSection";
import { SanJuanDecisionAndFaqSections } from "@/components/san-juan-transit/SanJuanDecisionAndFaqSections";
import { getToursByLocation } from "@/src/data/tours";

export const metadata: Metadata = {
  title: "Bio Bay Tours from San Juan: Hotel Pickup & Transport Included",
  description:
    "No rental car required! Compare top bioluminescent tours from San Juan to Laguna Grande & Vieques. Hotel pickups, return times, and checked prices from $65.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/puerto-rico/bio-bay-tours-from-san-juan/",
  },
  openGraph: {
    title: "Bio Bay Tours from San Juan: Hotel Pickup & Transport Included",
    description:
      "No rental car required! Compare top bioluminescent tours from San Juan to Laguna Grande & Vieques. Hotel pickups, return times, and checked prices from $65.",
    url: "https://bioluminescentkayaking.us/puerto-rico/bio-bay-tours-from-san-juan/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNEYOADeAmzNoaFjsDKbMaaZuI4YKJjS-u5N8TPlc0OQHchVIbt2IcJQF8xzlE4yhNRFY9z_re-cV2730Gn81CF_2BAdqcyu_zaQNT_SSuJ3I5UU10Q7ixLIZ3k90n-GEDQ6U0xzYphJoKgHi9DyfClNuztaQcpOxIwgR2G2EqApgGabxQqSRedVbvZhI0-TR8u9fvkkXi9PZzDnPmmHYerkbTAxRD3hRvEkPphIMS7cThXi4-OG18-h1k7MDqZPtHBNcSa3-p05h",
        width: 1200,
        height: 800,
        alt: "San Juan Puerto Rico historic fortress walls and coastline at dusk",
      },
    ],
  },
};

export default function SanJuanBioBayToursPage() {
  const tours = getToursByLocation("puerto-rico/bio-bay-tours-from-san-juan");

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
            name: "Puerto Rico",
            item: "https://bioluminescentkayaking.us/puerto-rico/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Bio Bay Tours from San Juan",
            item: "https://bioluminescentkayaking.us/puerto-rico/bio-bay-tours-from-san-juan/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Bio Bay Tours from San Juan Comparison",
        description:
          "Bioluminescent bay tours that depart from San Juan, compared from GetYourGuide — hotel-pickup kayak trips to Laguna Grande, El Yunque and bio bay combos, and boat trips to La Parguera.",
        numberOfItems: tours.length,
        itemListElement: tours.map((tour, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: tour.name,
          description: tour.verdict,
          url: tour.affiliateUrl,
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
      <div className="min-h-screen flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">
          <SanJuanHero />
          <SanJuanComparisonTableSection />
          <SanJuanOptionsDetailSection />
          <SanJuanDecisionAndFaqSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

