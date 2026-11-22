import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { TermsHero } from "@/components/terms/TermsHero";
import { TermsSections } from "@/components/terms/TermsSections";
import { TERMS_DATA } from "@/src/data/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use for BioluminescentKayaking.us: conditions forecasting disclaimers, GetYourGuide booking terms, and intellectual property guidelines.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/terms",
  },
  openGraph: {
    title: "Terms of Service",
    description:
      "Terms of use for BioluminescentKayaking.us: conditions forecasting disclaimers, GetYourGuide booking terms, and intellectual property guidelines.",
    url: "https://bioluminescentkayaking.us/terms",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use",
    description:
      "The terms for using BioluminescentKayaking.us: what we do, what bookings mean, and why the glow forecast is an estimate, not a promise.",
    url: "https://bioluminescentkayaking.us/terms",
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
          name: "Terms",
          item: "https://bioluminescentkayaking.us/terms/",
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
          <TermsHero intro={TERMS_DATA.intro} />
          <TermsSections sections={TERMS_DATA.sections} />
        </main>
        <Footer />
      </div>
    </>
  );
}

