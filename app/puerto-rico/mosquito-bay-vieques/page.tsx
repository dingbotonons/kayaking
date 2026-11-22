import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { MosquitoBayHero } from "@/components/mosquito-bay/MosquitoBayHero";
import { MosquitoBayTonightSection } from "@/components/mosquito-bay/MosquitoBayTonightSection";
import { MosquitoBayToursSection } from "@/components/mosquito-bay/MosquitoBayToursSection";
import { MosquitoBayWhyAndTransitSections } from "@/components/mosquito-bay/MosquitoBayWhyAndTransitSections";
import { MosquitoBaySeasonsAndFaqSections } from "@/components/mosquito-bay/MosquitoBaySeasonsAndFaqSections";

export const metadata: Metadata = {
  title: "Mosquito Bay Vieques Bioluminescent Kayaking: World's Brightest",
  description:
    "Paddle the Guinness-record brightest bio bay on Earth! Verified clear kayak tours from $55, tonight's glow score, ferry logistics, and why you must stay overnight.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques",
  },
  openGraph: {
    title: "Mosquito Bay Vieques Bioluminescent Kayaking: World's Brightest",
    description:
      "Paddle the Guinness-record brightest bio bay on Earth! Verified clear kayak tours from $55, tonight's glow score, ferry logistics, and why you must stay overnight.",
    url: "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCv5tzo7sRGWHQByEw2Rc_HE7kYI9Z9U4v1HQUazODKXVyWkNByETsYp6SU8lBVD9nxoHIONmCSDgsoHhQwh-t2D1aFnWYpXCObJlO5mtoSQ17DHKAIjX2KCb9aBwmTAA7WG0NI-FRGcEmalmqnRhrOd5FM5JA5pavso-NFeM9-Tu4Mbv8idTyhbbJ4O5984OM1rMwkbjFXi3bef_vSDsgRGZAaXWl6EorO4VmE5NLCvGH06H4rNL6zpy4",
        width: 1200,
        height: 630,
        alt: "Clear kayak gliding through electric blue bioluminescent water in Mosquito Bay Vieques Puerto Rico at twilight",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MosquitoBayLocationPage() {
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mosquito Bay, Vieques",
            "item": "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques/",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        "name": "Mosquito Bay Bioluminescent Kayaking",
        "description": "Guinness World Record holder for the brightest bioluminescent bay on Earth, located on the island of Vieques in Puerto Rico.",
        "url": "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques/",
        "isAccessibleForFree": false,
        "touristType": ["Eco-tourism", "Kayaking", "Bioluminescence"],
      },
      {
        "@type": "ItemList",
        "name": "Mosquito Bay Bioluminescent Kayak Tours",
        "description": "Top guided bioluminescent kayak tours on Mosquito Bay in Vieques, Puerto Rico.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Vieques: Bioluminescent Bay Full Clear Kayaking",
            "description": "2 hour full clear kayak tour in Mosquito Bay, Vieques from $112 via GetYourGuide.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques/#tours",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Vieques: Bioluminescent Bay Kayak Night Tour with Guide",
            "description": "1 hour guided clear kayak tour in Mosquito Bay, Vieques from $55 via GetYourGuide.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques/#tours",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Vieques Island: Clear Kayaking Biobay Tour",
            "description": "1.5 hour clear kayak tour from Esperanza, Vieques from $63 via GetYourGuide.",
            "url": "https://bioluminescentkayaking.us/puerto-rico/mosquito-bay-vieques/#tours",
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
          <MosquitoBayHero />
          <MosquitoBayTonightSection />
          <MosquitoBayToursSection />
          <MosquitoBayWhyAndTransitSections />
          <MosquitoBaySeasonsAndFaqSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

