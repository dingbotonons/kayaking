import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChevronRight, Home, ArrowRight } from "@/components/ui/Icons";
import { getPublishedGuides, guideHref } from "@/src/data/guides";

export const metadata: Metadata = {
  title: "Bioluminescent Kayaking Guides: Science, Moon & Packing Tips",
  description:
    "Expert night paddle guides: dinoflagellates vs comb jellies, moon phase rules, what to wear, clear kayaks vs regular, photography tips, and safety with kids.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/guides",
  },
  openGraph: {
    title: "Bioluminescent Kayaking Guides: Science, Moon & Packing Tips",
    description:
      "Expert night paddle guides: dinoflagellates vs comb jellies, moon phase rules, what to wear, clear kayaks vs regular, photography tips, and safety with kids.",
    url: "https://bioluminescentkayaking.us/guides",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://bioluminescentkayaking.us/images/hero.webp",
        width: 1200,
        height: 800,
        alt: "Kayakers paddling through glowing bioluminescent waters at night",
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
          {/* Guide Hub Hero */}
          <Section variant="hero" bg="white" className="border-b border-seafoam">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-xs md:text-sm text-ink/70">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-teal transition-colors flex items-center gap-1"
                    >
                      <Home className="w-3.5 h-3.5 text-ink/60" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
                  <li className="font-semibold text-teal" aria-current="page">
                    Guides
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl hero-enter">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  Field Guides &amp; Trip Preparation
                </div>

                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
                  Bioluminescent Kayaking Guides
                </h1>

                <p className="text-base leading-7 text-ink/80 font-sans max-w-2xl">
                  Practical, independent field guides to understanding marine glow,
                  timing your trip with moon calendars, and preparing for your night on
                  the water.
                </p>
              </div>
            </Container>
          </Section>

          {/* Published Articles Grid */}
          <Section bg="seafoam">
            <Container>
              {publishedGuides.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {publishedGuides.map((guide) => (
                    <article
                      key={guide.slug}
                      className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full group"
                    >
                      <Link
                        href={guideHref(guide)}
                        className="flex flex-col h-full"
                      >
                        {/* Featured Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-seafoam/60">
                          <Image
                            src={guide.featuredImage || "/images/hero.webp"}
                            alt={guide.featuredImageAlt || guide.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized={guide.featuredImage?.startsWith("/") ?? true}
                          />
                        </div>

                        {/* Card Details */}
                        <div className="p-6 lg:p-8 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center text-xs text-ink/60 font-medium mb-3">
                              <span>{guide.readTime}</span>
                            </div>

                            <h2 className="font-serif text-xl font-bold text-ink group-hover:text-teal transition-colors leading-snug mb-3">
                              {guide.title}
                            </h2>

                            <p className="text-sm leading-relaxed text-ink/80 font-sans line-clamp-3 mb-6">
                              {guide.excerpt}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-teal/10 flex items-center justify-between mt-auto">
                            <span className="text-sm font-bold text-teal group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                              <span>Read guide</span>
                              <ArrowRight className="w-4 h-4 text-teal" />
                            </span>
                            {guide.datePublished && (
                              <span className="text-xs text-ink/50 font-sans">
                                {guide.datePublished}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-[20px] border border-teal/15 p-8 max-w-lg mx-auto">
                  <p className="text-base text-ink/80 font-sans">
                    Articles are currently being prepared for publishing. Check back soon!
                  </p>
                </div>
              )}
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
