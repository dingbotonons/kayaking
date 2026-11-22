import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { OrlandoHero } from "@/components/near-orlando/OrlandoHero";
import { OrlandoOptionsSection } from "@/components/near-orlando/OrlandoOptionsSection";
import { OrlandoToursSection } from "@/components/near-orlando/OrlandoToursSection";
import { OrlandoEveningAndCoastSections } from "@/components/near-orlando/OrlandoEveningAndCoastSections";
import { OrlandoFaqSection } from "@/components/near-orlando/OrlandoFaqSection";

export const metadata: Metadata = {
  title: "Bioluminescent Kayaking Near Orlando: 45-Min Day Trip Guide",
  description:
    "Only 45 minutes from Disney & Universal! Compare evening bioluminescence kayak tours from $75, drive times to Cocoa Beach/Titusville, and tonight's glow score.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando",
  },
  openGraph: {
    title: "Bioluminescent Kayaking Near Orlando: 45-Min Day Trip Guide",
    description:
      "Only 45 minutes from Disney & Universal! Compare evening bioluminescence kayak tours from $75, drive times to Cocoa Beach/Titusville, and tonight's glow score.",
    url: "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWnf2EFYBKMiFWxNJT52sHHuY9erD53CwNfF0wAIjXfPb2xJCajEZwjhD-aD60Q4j1lybJcmjnGed__G0wxnP06mujn0YMPTametpcBPZV8I5yn91YGraCfn1I_axctulfpSy2dK4pp3L48e_I8o2WqIFGhNhohr7WSNY-I5IGM98a02xIJgh5I8xYuSKaOQT1xUvUMhBmt2cac2EW3UbPQO_NrTnXeH0BuPF5AgWSdHOP8QvrtBUxc_6KpZi6Uz4swOgDD5MaHU-",
        width: 1200,
        height: 630,
        alt: "Family driving towards the Florida Space Coast at dusk for bioluminescent kayaking near Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function OrlandoDayTripPage() {
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
            "name": "Near Orlando",
            "item": "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando/",
          },
        ],
      },
      {
        "@type": "ItemList",
        "name": "Bioluminescent Kayaking Options and Tours Near Orlando",
        "description": "Drive-time options and guided bioluminescent kayak departures from the Space Coast accessible for Orlando day-trippers.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Cocoa Beach Departures",
            "description": "About 1 hour drive east from Orlando along SR 528 Beachline Expressway.",
            "url": "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando/#options",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Titusville & Merritt Island Departures",
            "description": "About 45 to 55 minutes drive east from Orlando along SR 50 to Mosquito Lagoon.",
            "url": "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando/#options",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bioluminescence Clear Kayak Tour, Cocoa Beach",
            "description": "Guided evening clear kayak tour launching from Beacon 42 on the Banana River.",
            "url": "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando/#tours",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bioluminescent Kayak Tour, Titusville",
            "description": "Closest glow tour to Orlando in Merritt Island National Wildlife Refuge.",
            "url": "https://bioluminescentkayaking.us/florida/bioluminescent-kayaking-near-orlando/#tours",
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
          <OrlandoHero />
          <OrlandoOptionsSection />
          <OrlandoToursSection />
          <OrlandoEveningAndCoastSections />
          <OrlandoFaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

