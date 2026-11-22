import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { AffiliateHero } from "@/components/affiliate/AffiliateHero";
import { AffiliateSections } from "@/components/affiliate/AffiliateSections";

export const metadata: Metadata = {
  title: "Affiliate Disclosure & Transparency: How We Stay Unbiased",
  description:
    "Complete affiliate disclosure: how we partner with GetYourGuide, why readers pay identical rates, and how our 0–100 glow scores remain 100% editorial.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure & Transparency: How We Stay Unbiased",
    description:
      "Complete affiliate disclosure: how we partner with GetYourGuide, why readers pay identical rates, and how our 0–100 glow scores remain 100% editorial.",
    url: "https://bioluminescentkayaking.us/affiliate-disclosure",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function AffiliateDisclosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Affiliate Disclosure",
    description:
      "We compare tours from GetYourGuide and may earn a commission — it never changes the price you pay.",
    url: "https://bioluminescentkayaking.us/affiliate-disclosure",
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
          name: "Affiliate Disclosure",
          item: "https://bioluminescentkayaking.us/affiliate-disclosure/",
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
          <AffiliateHero />
          <AffiliateSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

