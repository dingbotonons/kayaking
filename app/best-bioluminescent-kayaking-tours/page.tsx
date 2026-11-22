import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CompareHero } from "@/components/compare/CompareHero";
import { CompareQuickPicksSection } from "@/components/compare/CompareQuickPicksSection";
import { CompareTableSection } from "@/components/compare/CompareTableSection";
import { CompareDetailedPicksSection } from "@/components/compare/CompareDetailedPicksSection";
import { CompareHowWePickAndTripTypeSections } from "@/components/compare/CompareHowWePickAndTripTypeSections";
import { CompareFaqAndCtaSections } from "@/components/compare/CompareFaqAndCtaSections";
import { getTourById } from "@/src/data/tours";

// The four Quick Picks, in the same order the page shows them.
// Schema is generated from tours.ts so prices can never drift from
// the visible page (blueprint §8: Product + Offer, identical data).
const QUICK_PICK_IDS = ["t922494", "t1470618", "t140169", "t400689"];

export const metadata: Metadata = {
  title: "10 Best Bioluminescent Kayaking Tours in the USA (Ranked)",
  description:
    "Top-rated bioluminescent kayak tours compared across Florida, Puerto Rico & WA. Unbiased rankings, clear-hull kayak picks, and verified prices from $55 to $226.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/best-bioluminescent-kayaking-tours",
  },
  openGraph: {
    title: "10 Best Bioluminescent Kayaking Tours in the USA (Ranked)",
    description:
      "Top-rated bioluminescent kayak tours compared across Florida, Puerto Rico & WA. Unbiased rankings, clear-hull kayak picks, and verified prices from $55 to $226.",
    url: "https://bioluminescentkayaking.us/best-bioluminescent-kayaking-tours",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCunOJXLpVIkmUU_nGz3ZvMAOodZ8aEdcw20qi5lRv17Bja8uxR40opSlJjJY9Tf_QfO-YQQyjzhMBi06j40xwO5svRAQakBcBzACdBFXiG3ghB7raUfDjcERX57W4xfIlG6eOBDw3FX-6BAugC5dob03oFzYi8XrAgXFqppER6YwynljGMTPaDezFUYypJaDeBFmLOSZf5YXeAoORqIM_eCzq_k81x2S5tHZsbjmah3PmLu6C_R2oML8QiZ2u_5CImK4N-ji_ImNa",
        width: 1200,
        height: 800,
        alt: "Kayakers in clear transparent kayaks paddling on glowing bioluminescent water at dusk",
      },
    ],
  },
};

export default function BestBioluminescentKayakingToursPage() {
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
            name: "Best Tours",
            item: "https://bioluminescentkayaking.us/best-bioluminescent-kayaking-tours/",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Best Bioluminescent Kayaking Tours in the USA",
        description:
          "Independent national comparison of bioluminescent kayaking and night paddling excursions across Florida, Puerto Rico, California and Washington.",
        numberOfItems: QUICK_PICK_IDS.length,
        itemListElement: QUICK_PICK_IDS.map((id, idx) => {
          const tour = getTourById(id)!;
          return {
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Product",
              name: tour.name,
              description: tour.verdict,
              url: tour.affiliateUrl,
              ...(tour.startingPrice != null
                ? {
                    offers: {
                      "@type": "Offer",
                      price: tour.startingPrice.toFixed(2),
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                      url: tour.affiliateUrl,
                    },
                  }
                : {}),
            },
          };
        }),
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
          <CompareHero />
          <CompareQuickPicksSection />
          <CompareTableSection />
          <CompareDetailedPicksSection />
          <CompareHowWePickAndTripTypeSections />
          <CompareFaqAndCtaSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

