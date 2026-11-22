import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { HowWeRankHero } from "@/components/how-we-rank/HowWeRankHero";
import { HowWeRankSections } from "@/components/how-we-rank/HowWeRankSections";

export const metadata: Metadata = {
  title: "How We Rank Bioluminescent Kayak Tours: 4 Editorial Criteria",
  description:
    "Unbiased ranking methodology: glow intensity, boat experience (clear kayaks), launch logistics, and checked pricing. Zero paid placements or sponsored ranks.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/how-we-rank-tours",
  },
  openGraph: {
    title: "How We Rank Bioluminescent Kayak Tours: 4 Editorial Criteria",
    description:
      "Unbiased ranking methodology: glow intensity, boat experience (clear kayaks), launch logistics, and checked pricing. Zero paid placements or sponsored ranks.",
    url: "https://bioluminescentkayaking.us/how-we-rank-tours",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function HowWeRankToursPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How We Rank Tours",
    description:
      "How we rank bioluminescent kayaking tours: glow strength, the kayak experience, launch logistics, and price and booking terms — and why ranking is never paid.",
    url: "https://bioluminescentkayaking.us/how-we-rank-tours",
    breadcrumb: {
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
          name: "How We Rank Tours",
          item: "https://bioluminescentkayaking.us/how-we-rank-tours/",
        },
      ],
    },
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
          <HowWeRankHero />
          <HowWeRankSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

