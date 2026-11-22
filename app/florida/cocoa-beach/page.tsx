import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CocoaBeachHero } from "@/components/cocoa-beach/CocoaBeachHero";
import { CocoaBeachTonightSection } from "@/components/cocoa-beach/CocoaBeachTonightSection";
import { CocoaBeachToursSection } from "@/components/cocoa-beach/CocoaBeachToursSection";
import { CocoaBeachTwoGlowsSection } from "@/components/cocoa-beach/CocoaBeachTwoGlowsSection";
import { CocoaBeachLaunchAndOrlandoSections } from "@/components/cocoa-beach/CocoaBeachLaunchAndOrlandoSections";
import { CocoaBeachFaqSection } from "@/components/cocoa-beach/CocoaBeachFaqSection";

export const metadata: Metadata = {
  title: "Cocoa Beach Bioluminescent Kayaking: Clear Kayak Tours & Glow",
  description:
    "Paddle Cocoa Beach's glowing Banana River! Compare clear-bottom kayak tours from $64.20, tonight's glow forecast, and summer dinos vs winter comb jellies.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/florida/cocoa-beach",
  },
  openGraph: {
    title: "Cocoa Beach Bioluminescent Kayaking: Clear Kayak Tours & Glow",
    description:
      "Paddle Cocoa Beach's glowing Banana River! Compare clear-bottom kayak tours from $64.20, tonight's glow forecast, and summer dinos vs winter comb jellies.",
    url: "https://bioluminescentkayaking.us/florida/cocoa-beach",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCv5tzo7sRGWHQByEw2Rc_HE7kYI9Z9U4v1HQUazODKXVyWkNByETsYp6SU8lBVD9nxoHIONmCSDgsoHhQwh-t2D1aFnWYpXCObJlO5mtoSQ17DHKAIjX2KCb9aBwmTAA7WG0NI-FRGcEmalmqnRhrOd5FM5JA5pavso-NFeM9-Tu4Mbv8idTyhbbJ4O5984OM1rMwkbjFXi3bef_vSDsgRGZAaXWl6EorO4VmE5NLCvGH06H4rNL6zpy4",
        width: 1200,
        height: 630,
        alt: "Clear kayaks paddling through calm Banana River lagoon waters in Cocoa Beach Florida at twilight",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CocoaBeachLocationPage() {
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cocoa Beach",
            "item": "https://bioluminescentkayaking.us/florida/cocoa-beach/",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        "name": "Cocoa Beach Bioluminescent Kayaking",
        "description": "America's best-known bioluminescent kayaking spot along the Banana River Lagoon and Indian River on Florida's Space Coast.",
        "url": "https://bioluminescentkayaking.us/florida/cocoa-beach/",
        "isAccessibleForFree": false,
        "touristType": ["Eco-tourism", "Kayaking", "Bioluminescence"],
      },
      {
        "@type": "ItemList",
        "name": "Cocoa Beach Bioluminescent Kayak Tours",
        "description": "Top guided bioluminescent kayak tours departing from Cocoa Beach and Banana River launch sites.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Bioluminescent Kayak Tour, Cocoa Beach & Merritt Island",
            "description": "The most-reviewed Cocoa Beach paddle on GetYourGuide, launching from Cape Crossing Marina into the Indian River Lagoon from $64.20.",
            "url": "https://bioluminescentkayaking.us/florida/cocoa-beach/#tours",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Florida: Clear Bottom Bioluminescent Kayak Tour",
            "description": "100% clear-bottom kayak tour launching from Kiwanis Island Park on the Banana River from $100.03.",
            "url": "https://bioluminescentkayaking.us/florida/cocoa-beach/#tours",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Florida: LED Night Kayak Tour with Comb Jellies",
            "description": "Clear-kayak night paddle from Kiwanis Island Park built around summer dinoflagellates and winter comb jellies from $100.03.",
            "url": "https://bioluminescentkayaking.us/florida/cocoa-beach/#tours",
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
          <CocoaBeachHero />
          <CocoaBeachTonightSection />
          <CocoaBeachToursSection />
          <CocoaBeachTwoGlowsSection />
          <CocoaBeachLaunchAndOrlandoSections />
          <CocoaBeachFaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

