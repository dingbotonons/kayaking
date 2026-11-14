import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { GlowMethodHero } from "@/components/glow-method/GlowMethodHero";
import { GlowMethodSections } from "@/components/glow-method/GlowMethodSections";

export const metadata: Metadata = {
  title: "How Our Glow Forecast Works: Moon, Weather & Season Formula",
  description:
    "The math behind our 0–100 nightly glow score: SunCalc lunar darkness, Open-Meteo cloud cover & wind, NOAA water readings, and biological season baselines.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/glow-forecast-method/",
  },
  openGraph: {
    title: "How Our Glow Forecast Works: Moon, Weather & Season Formula",
    description:
      "The math behind our 0–100 nightly glow score: SunCalc lunar darkness, Open-Meteo cloud cover & wind, NOAA water readings, and biological season baselines.",
    url: "https://bioluminescentkayaking.us/glow-forecast-method/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAETEveTlBKOM5T1h5UN6Gg3SMOihCf9CupzaINPLzHh3WW0n73IKyubsnkcwXoeKB-YifpGwASrGrFEWtof8nDLc7Qr63PXVvwE2sfvqCuCKo-9lSxdir0o5LqTeCcoBb2nUR3TZCiWDot7o5CiSJttrE4xnw9c29Y0a1rWaLG4N3lfNKXVgfQG4cFcJt14jVN0yvTulCZQSPQttzMSJAsTWv6nBfFM5Mu5zEDS31HCJ6bQ0w_wCTNtSw2KNuwX41cPrbuLilTbO",
        width: 1200,
        height: 800,
        alt: "Kayakers paddling on calm waters at dusk under twilight skies",
      },
    ],
  },
};

export default function GlowForecastMethodPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How Our Glow Forecast Works",
    description:
      "How our glow forecast works: the moon, clouds, wind and season behind every score — and why a forecast is an estimate, not a guarantee.",
    url: "https://bioluminescentkayaking.us/glow-forecast-method/",
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
          name: "Glow Forecast Method",
          item: "https://bioluminescentkayaking.us/glow-forecast-method/",
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
          <GlowMethodHero />
          <GlowMethodSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

