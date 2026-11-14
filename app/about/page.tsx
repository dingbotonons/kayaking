import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About BioluminescentKayaking.us: Independent Tour & Glow Guide",
  description:
    "Meet founder & editor Harsha Zoysa. Learn how we research 20+ USA bioluminescent kayak tours, calculate nightly 0–100 glow scores, and maintain independence.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/about/",
  },
  openGraph: {
    title: "About BioluminescentKayaking.us: Independent Tour & Glow Guide",
    description:
      "Meet founder & editor Harsha Zoysa. Learn how we research 20+ USA bioluminescent kayak tours, calculate nightly 0–100 glow scores, and maintain independence.",
    url: "https://bioluminescentkayaking.us/about/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About BioluminescentKayaking.us",
    description:
      "An independent guide to bioluminescent kayaking in the USA — how we compare tours, check prices, and forecast the glow.",
    url: "https://bioluminescentkayaking.us/about/",
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
          name: "About",
          item: "https://bioluminescentkayaking.us/about/",
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
          <AboutHero />
          <AboutSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

