import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { TitusvilleHero } from "@/components/titusville/TitusvilleHero";
import { TitusvilleTonightSection } from "@/components/titusville/TitusvilleTonightSection";
import { TitusvilleToursSection } from "@/components/titusville/TitusvilleToursSection";
import { TitusvilleLaunchAndCompareSections } from "@/components/titusville/TitusvilleLaunchAndCompareSections";
import { TitusvilleSeasonsAndFaqSections } from "@/components/titusville/TitusvilleSeasonsAndFaqSections";

export const metadata: Metadata = {
  title: "Titusville Bioluminescent Kayaking: Haulover Canal Tours",
  description:
    "Paddle Florida's darkest refuge waters at Haulover Canal & Mosquito Lagoon. Verified clear kayak tours from $119, tonight's glow score, and Cocoa Beach comparison.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/florida/titusville/",
  },
  openGraph: {
    title: "Titusville Bioluminescent Kayaking: Haulover Canal Tours",
    description:
      "Paddle Florida's darkest refuge waters at Haulover Canal & Mosquito Lagoon. Verified clear kayak tours from $119, tonight's glow score, and Cocoa Beach comparison.",
    url: "https://bioluminescentkayaking.us/florida/titusville/",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeT1WnpbtSvCfn1qP0D1R295Rk-fK2P3wbEyIElBIfOqsMDkLiB1Wmzxls2UH7fA7VpeKjk2T4edjivnMKw8WupKYEAMoi7ZE2v59YcljYc9Y_0rFR93QrTr-CLmZc6VbxJEX8lcJUqjUPHFhbTrsrQvvR50d6GBCgVtJQEqJrI6lXjfEzgVBsqcRwc_frt3dHmv6B7ta9_-gzWEjYHZsrrzhP81zFzef54PzvPnZ5jdoHlYmySAmagkxzFUKf6ptMHJWvApd_B562",
        width: 1200,
        height: 630,
        alt: "Kayakers paddling through tranquil bioluminescent waters at night near Titusville in Merritt Island National Wildlife Refuge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TitusvilleLocationPage() {
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
            "name": "Titusville & Merritt Island",
            "item": "https://bioluminescentkayaking.us/florida/titusville/",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        "name": "Titusville & Merritt Island Bioluminescent Kayaking",
        "description": "Refuge shoreline and dark-sky bioluminescent kayaking in Mosquito Lagoon and Haulover Canal within Merritt Island National Wildlife Refuge.",
        "url": "https://bioluminescentkayaking.us/florida/titusville/",
        "isAccessibleForFree": false,
        "touristType": ["Eco-tourism", "Kayaking", "Wildlife Watching", "Bioluminescence"],
      },
      {
        "@type": "ItemList",
        "name": "Titusville Bioluminescent Kayak Tours",
        "description": "Top guided bioluminescent kayak tours departing from Haulover Canal and Merritt Island launch sites.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Bioluminescent Kayak Tour, Titusville",
            "description": "The Mosquito Lagoon paddle — the darkest water on the Space Coast.",
            "url": "https://bioluminescentkayaking.us/florida/titusville/#tours",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Clear Kayak Bioluminescence Tour, Merritt Island",
            "description": "Clear hull over the Indian River shallows.",
            "url": "https://bioluminescentkayaking.us/florida/titusville/#tours",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Titusville Bioluminescent Kayak Tour",
            "description": "Guided evening kayak tour through protected refuge waters.",
            "url": "https://bioluminescentkayaking.us/florida/titusville/#tours",
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
          <TitusvilleHero />
          <TitusvilleTonightSection />
          <TitusvilleToursSection />
          <TitusvilleLaunchAndCompareSections />
          <TitusvilleSeasonsAndFaqSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

