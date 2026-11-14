import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { FloridaHero } from "@/components/florida/FloridaHero";
import { FloridaTonightSection } from "@/components/florida/FloridaTonightSection";
import { FloridaWhereToPaddle } from "@/components/florida/FloridaWhereToPaddle";
import { FloridaToursSection } from "@/components/florida/FloridaToursSection";
import { FloridaTwoGlowsSection } from "@/components/florida/FloridaTwoGlowsSection";
import { FloridaPlanTripSection } from "@/components/florida/FloridaPlanTripSection";
import { FloridaFaqSection } from "@/components/florida/FloridaFaqSection";

export const metadata: Metadata = {
  title: "Bioluminescent Kayaking in Florida: Space Coast Tour Guide",
  description:
    "Experience Florida's glowing waters in Cocoa Beach & Titusville. Compare clear kayak tours from $64.20, tonight's glow score, and summer sparkle vs winter jellies.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/florida/",
  },
  openGraph: {
    title: "Bioluminescent Kayaking in Florida: Space Coast Tour Guide",
    description:
      "Experience Florida's glowing waters in Cocoa Beach & Titusville. Compare clear kayak tours from $64.20, tonight's glow score, and summer sparkle vs winter jellies.",
    url: "https://bioluminescentkayaking.us/florida/",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://bioluminescentkayaking.us/images/florida.webp",
        width: 1200,
        height: 630,
        alt: "Palm trees over a turquoise lagoon and white sand beach in Florida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FloridaRegionPage() {
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
            "name": "Florida",
            "item": "https://bioluminescentkayaking.us/florida/",
          },
        ],
      },
      {
        "@type": "ItemList",
        "name": "Florida Bioluminescent Kayaking Launch Locations",
        "description": "Primary bioluminescent kayaking launch points and tour regions in Florida's Indian River Lagoon system.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Cocoa Beach",
            "description": "Banana River and Thousand Islands launches, famous for clear kayak bioluminescence tours.",
            "url": "https://bioluminescentkayaking.us/florida/#where-to-paddle",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Titusville & Merritt Island",
            "description": "Haulover Canal and Mosquito Lagoon in Merritt Island National Wildlife Refuge, providing the darkest skies.",
            "url": "https://bioluminescentkayaking.us/florida/#where-to-paddle",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Near Orlando",
            "description": "Convenient 45-60 minute day-trip paddles from Disney and Universal resorts to Space Coast waters.",
            "url": "https://bioluminescentkayaking.us/florida/#where-to-paddle",
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
          <FloridaHero />
          <FloridaTonightSection />
          <FloridaWhereToPaddle />
          <FloridaToursSection />
          <FloridaTwoGlowsSection />
          <FloridaPlanTripSection />
          <FloridaFaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

