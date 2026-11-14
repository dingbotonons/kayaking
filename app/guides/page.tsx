import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { GuidesHero } from "@/components/guides/GuidesHero";
import { GuidesContentSections } from "@/components/guides/GuidesContentSections";
import { GuidesCtaBand } from "@/components/guides/GuidesCtaBand";
import { getPublishedGuides, guideHref } from "@/src/data/guides";

export const metadata: Metadata = {
  title: "Bioluminescent Kayaking Guides: Science, Moon & Packing Tips",
  description:
    "Expert night paddle guides: dinoflagellates vs comb jellies, moon phase rules, what to wear, clear kayaks vs regular, photography tips, and safety with kids.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/guides/",
  },
  openGraph: {
    title: "Bioluminescent Kayaking Guides: Science, Moon & Packing Tips",
    description:
      "Expert night paddle guides: dinoflagellates vs comb jellies, moon phase rules, what to wear, clear kayaks vs regular, photography tips, and safety with kids.",
    url: "https://bioluminescentkayaking.us/guides/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFwiRbXfnMhe8d8qG_W8wUlKqYkA_A6HK52zn5qn3eb4eetUQn8T75W9qv_rnqu-mcnYRn135M4YJQ90QfGK4vc8BaaaRODtf2Iq1f1wYtj06A6xBNCbW9EMlMKGie0X24P3uh0BDmxzF2YtE5jfLMPWk6tGlOvjZOUTM3OR1xGZx1S1kTPGh_pa_mZnpyMIs1f7h_v1zxXvE09ZnNsCpC2R-db5_XwCBqoYSrMeftHTVVNJDQl-YJS6zmPq4Vj-IvPZP9mJGkhoM7",
        width: 1200,
        height: 800,
        alt: "A family paddling in transparent clear kayaks on calm twilight coastal water as bioluminescence glows under the hull",
      },
    ],
  },
};

export default function GuidesHubPage() {
  const publishedGuides = getPublishedGuides();
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
            name: "Guides",
            item: "https://bioluminescentkayaking.us/guides/",
          },
        ],
      },
      // Only published guides get an ItemList entry — planned guides
      // have no live URL to point schema at.
      ...(publishedGuides.length > 0
        ? [
            {
              "@type": "ItemList",
              name: "Bioluminescent Kayaking Guides",
              description:
                "Practical, independent guides to understanding the glow, picking your night, and getting ready for bioluminescent paddling.",
              numberOfItems: publishedGuides.length,
              itemListElement: publishedGuides.map((guide, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: guide.title,
                description: guide.excerpt,
                url: `https://bioluminescentkayaking.us${guideHref(guide)}`,
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
      <div className="min-h-screen flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">
          <GuidesHero />
          <GuidesContentSections />
          <GuidesCtaBand />
        </main>
        <Footer />
      </div>
    </>
  );
}

