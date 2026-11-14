import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { LagunaGrandeHero } from "@/components/laguna-grande/LagunaGrandeHero";
import { LagunaGrandeTonightSection } from "@/components/laguna-grande/LagunaGrandeTonightSection";
import { LagunaGrandeToursSection } from "@/components/laguna-grande/LagunaGrandeToursSection";
import { LagunaGrandeMangroveAndLogisticsSections } from "@/components/laguna-grande/LagunaGrandeMangroveAndLogisticsSections";
import { LagunaGrandeSeasonsAndFaqSections } from "@/components/laguna-grande/LagunaGrandeSeasonsAndFaqSections";
import { getToursByLocation } from "@/src/data/tours";

export const metadata: Metadata = {
  title: "Laguna Grande Fajardo Bioluminescent Kayaking: Mangrove Tours",
  description:
    "Kayak through the magical mangrove channel into Laguna Grande from $65.78. Just 1 hour from San Juan! Check tonight's glow score and how it compares to Vieques.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/puerto-rico/laguna-grande-fajardo/",
  },
  openGraph: {
    title: "Laguna Grande Fajardo Bioluminescent Kayaking: Mangrove Tours",
    description:
      "Kayak through the magical mangrove channel into Laguna Grande from $65.78. Just 1 hour from San Juan! Check tonight's glow score and how it compares to Vieques.",
    url: "https://bioluminescentkayaking.us/puerto-rico/laguna-grande-fajardo/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCv5tzo7sRGWHQByEw2Rc_HE7kYI9Z9U4v1HQUazODKXVyWkNByETsYp6SU8lBVD9nxoHIONmCSDgsoHhQwh-t2D1aFnWYpXCObJlO5mtoSQ17DHKAIjX2KCb9aBwmTAA7WG0NI-FRGcEmalmqnRhrOd5FM5JA5pavso-NFeM9-Tu4Mbv8idTyhbbJ4O5984OM1rMwkbjFXi3bef_vSDsgRGZAaXWl6EorO4VmE5NLCvGH06H4rNL6zpy4",
        width: 1200,
        height: 800,
        alt: "Kayaking through the mangrove channel into Laguna Grande Fajardo",
      },
    ],
  },
};

export default function LagunaGrandePage() {
  const tours = getToursByLocation("puerto-rico/laguna-grande-fajardo");

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
            name: "Laguna Grande, Fajardo",
            item: "https://bioluminescentkayaking.us/puerto-rico/laguna-grande-fajardo/",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        name: "Laguna Grande Bioluminescent Bay",
        description:
          "Bioluminescent lagoon in Fajardo, Puerto Rico, renowned for its glowing dinoflagellates and guided night kayak trips through red mangrove tunnels.",
        url: "https://bioluminescentkayaking.us/puerto-rico/laguna-grande-fajardo/",
        image:
          "https://lh3.googleusercontent.com/aida/ALJJyrCv5tzo7sRGWHQByEw2Rc_HE7kYI9Z9U4v1HQUazODKXVyWkNByETsYp6SU8lBVD9nxoHIONmCSDgsoHhQwh-t2D1aFnWYpXCObJlO5mtoSQ17DHKAIjX2KCb9aBwmTAA7WG0NI-FRGcEmalmqnRhrOd5FM5JA5pavso-NFeM9-Tu4Mbv8idTyhbbJ4O5984OM1rMwkbjFXi3bef_vSDsgRGZAaXWl6EorO4VmE5NLCvGH06H4rNL6zpy4",
        isAccessibleForFree: false,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.3758,
          longitude: -65.6267,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fajardo",
          addressRegion: "PR",
          addressCountry: "US",
        },
      },
      {
        "@type": "ItemList",
        name: "Laguna Grande Bioluminescent Kayak Tours",
        description:
          "Guided night kayak tours in Laguna Grande, Fajardo with direct launches and San Juan transportation options.",
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
          <LagunaGrandeHero />
          <LagunaGrandeTonightSection />
          <LagunaGrandeToursSection />
          <LagunaGrandeMangroveAndLogisticsSections />
          <LagunaGrandeSeasonsAndFaqSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

