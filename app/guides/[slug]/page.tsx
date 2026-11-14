import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { AuthorByline } from "@/components/about/AuthorByline";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "@/components/ui/Icons";
import { AUTHOR } from "@/src/data/author";
import { getGuideBySlug, getPublishedGuides, guideHref } from "@/src/data/guides";

export function generateStaticParams() {
  return getPublishedGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

/**
 * Guide article route. Renders only guides whose status is
 * "published" in src/data/guides.ts; planned and unknown slugs
 * return notFound(). Articles are written in a later phase — today
 * every guide is planned, so this route 404s by design while the
 * /guides/ hub shows the cards as "In the works" without links.
 *
 * No generateStaticParams: with Cache Components enabled, Next 16
 * requires it to return at least one result, and there are no
 * published guides yet. The route resolves params at request time;
 * add generateStaticParams back when the first guide is published.
 * `instant = false` marks the segment as a blocking (non-instant)
 * route, which is what a params-driven article page is.
 */
export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide || guide.status !== "published") return {};
  return {
    title: `${guide.title}`,
    description: guide.excerpt,
    alternates: {
      canonical: `https://bioluminescentkayaking.us${guideHref(guide)}`,
    },
    openGraph: {
      title: `${guide.title}`,
      description: guide.excerpt,
      url: `https://bioluminescentkayaking.us${guideHref(guide)}`,
      siteName: "BioluminescentKayaking.us",
      type: "article",
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide || guide.status !== "published") {
    notFound();
  }

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
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: `https://bioluminescentkayaking.us${guideHref(guide)}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.excerpt,
        url: `https://bioluminescentkayaking.us${guideHref(guide)}`,
        author: {
          "@type": "Person",
          name: AUTHOR.name,
          url: AUTHOR.linkedinUrl,
        },
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
          <Section bg="white" variant="hero" className="border-b border-seafoam">
            <Container size="readable">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-xs font-semibold text-ink/70">
                  <li>
                    <Link href="/" className="hover:text-teal transition-colors">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
                  <li>
                    <Link
                      href="/guides/"
                      className="hover:text-teal transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                  <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
                  <li className="font-semibold text-teal" aria-current="page">
                    {guide.title}
                  </li>
                </ol>
              </nav>

              <span className="inline-flex items-center px-3 h-7 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/15">
                {guide.clusterLabel}
              </span>

              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                {guide.title}
              </h1>

              <p className="text-base leading-7 text-ink/80 max-w-2xl mb-8 font-sans">
                {guide.excerpt}
              </p>

              <AuthorByline />
            </Container>
          </Section>

          <Section bg="seafoam">
            <Container size="readable">
              <div className="space-y-6">
                {(guide.body ?? []).map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "text-lg leading-8 text-ink font-medium border-l-4 border-teal pl-5 py-2 bg-white/70 rounded-r-xl shadow-xs font-sans"
                        : "text-base leading-7 text-ink/80 font-sans"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-teal/15">
                <AuthorByline />
              </div>
            </Container>
          </Section>

          <Section variant="cta" bg="white">
            <Container size="readable">
              <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 lg:p-12 text-center shadow-md">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3">
                  Planning a trip now?
                </h2>
                <p className="text-white/85 text-base max-w-xl mx-auto mb-8 leading-relaxed font-sans">
                  Check tonight&apos;s glow estimate and the dark-moon windows
                  for your dates.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/glow-forecast/"
                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-[#ff7b52] text-white font-bold text-sm shadow-sm transition-colors duration-200"
                  >
                    See tonight&apos;s glow forecast
                  </Link>
                  <Link
                    href="/moon-phase-calendar/"
                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-teal hover:bg-seafoam font-bold text-sm shadow-sm transition-colors duration-200"
                  >
                    Open the moon calendar
                  </Link>
                </div>
              </div>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
