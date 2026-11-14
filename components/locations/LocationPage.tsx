import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationTonightSection } from "@/components/locations/LocationTonightSection";
import { LocationSeasonSection } from "@/components/locations/LocationSeasonSection";
import { LocationFaqSection } from "@/components/locations/LocationFaqSection";
import { DirectBookingSection } from "@/components/locations/DirectBookingSection";
import { TourCardsSection } from "@/components/regions/TourCardsSection";
import { RegionInfoSection } from "@/components/regions/RegionInfoSection";
import { getToursByLocation } from "@/src/data/tours";
import { getLocationMeta } from "@/lib/conditions/locations-meta";
import type { LocationPageContent } from "@/src/data/region-pages";

/**
 * Shared location-page assembly for the Phase 2 pages (same template
 * family as the Cocoa Beach page): hero → tonight → tours or honest
 * direct-booking section → season → know-before-you-go → FAQ + CTA.
 * JSON-LD: BreadcrumbList + TouristAttraction (+ ItemList of tours
 * where the location has bookable tours). No ratings and no live
 * conditions data in schema, per the site rules.
 */
export function LocationPage({ page }: { page: LocationPageContent }) {
  const tours = page.toursSlug ? getToursByLocation(page.toursSlug) : [];
  const meta = getLocationMeta(page.id);

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
            name: page.regionName,
            item: `https://bioluminescentkayaking.us${page.regionHref}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.name,
            item: `https://bioluminescentkayaking.us${page.href}`,
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        name: `${page.name} Bioluminescent Kayaking`,
        description: page.metaDescription,
        url: `https://bioluminescentkayaking.us${page.href}`,
        ...(meta
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: meta.lat,
                longitude: meta.lng,
              },
            }
          : {}),
        touristType: ["Eco-tourism", "Kayaking", "Bioluminescence"],
      },
      ...(tours.length > 0
        ? [
            {
              "@type": "ItemList",
              name: `${page.name} Bioluminescent Kayak Tours`,
              description: `Guided bioluminescent kayak tours at ${page.name}, compared from GetYourGuide.`,
              itemListElement: tours.map((tour, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: tour.name,
                description: tour.verdict,
                url: `https://bioluminescentkayaking.us${page.href}#tours`,
              })),
            },
          ]
        : []),
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
          <LocationHero page={page} />
          <LocationTonightSection page={page} />
          {page.toursSlug ? (
            <TourCardsSection
              tourIds={tours.map((t) => t.id)}
              title="Tours compared"
              intro={`Guided night paddles at ${page.name}, from the GetYourGuide catalogue.`}
              seasonNote={page.tourSeasonNote}
              variant="location"
              bg="white"
            />
          ) : page.directBooking ? (
            <DirectBookingSection
              title={page.directBooking.title}
              intro={page.directBooking.intro}
              paragraphs={page.directBooking.paragraphs}
              noteTitle={page.directBooking.noteTitle}
              noteBullets={page.directBooking.noteBullets}
              bg="white"
            />
          ) : null}
          <LocationSeasonSection page={page} />
          <RegionInfoSection
            eyebrow={page.infoEyebrow}
            title={page.infoTitle}
            intro={page.infoIntro}
            cards={page.infoCards}
            bg="white"
          />
          <LocationFaqSection page={page} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export function locationMetadata(page: LocationPageContent) {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://bioluminescentkayaking.us${page.href}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://bioluminescentkayaking.us${page.href}`,
      siteName: "BioluminescentKayaking.us",
      images: [
        {
          url: page.heroImage,
          width: 1200,
          height: 630,
          alt: page.heroImageAlt,
        },
      ],
      locale: "en_US",
      type: "website" as const,
    },
  };
}
