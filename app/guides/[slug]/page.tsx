import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { TourCardsSection } from "@/components/regions/TourCardsSection";
import { AuthorByline } from "@/components/about/AuthorByline";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "@/components/ui/Icons";
import { AUTHOR } from "@/src/data/author";
import { getGuideBySlug, getPublishedGuides, guideHref } from "@/src/data/guides";
import { renderGuideMdx } from "@/lib/mdx";

export function generateStaticParams() {
  return getPublishedGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide || guide.status !== "published") return {};

  const title = guide.title;
  const description = guide.metaDescription || guide.excerpt;
  const canonicalUrl = `https://bioluminescentkayaking.us${guideHref(guide)}`;
  const imageUrl = guide.featuredImage
    ? `https://bioluminescentkayaking.us${guide.featuredImage}`
    : "https://bioluminescentkayaking.us/images/hero.webp";
  const imageAlt = guide.featuredImageAlt || guide.title;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "BioluminescentKayaking.us",
      type: "article",
      ...(guide.datePublished ? { publishedTime: guide.datePublished } : {}),
      authors: [guide.author || AUTHOR.name],
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
          width: 1200,
          height: 800,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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

  const mdxContent = await renderGuideMdx(guide.content);
  const guideUrl = `https://bioluminescentkayaking.us${guideHref(guide)}`;
  const guideImage = guide.featuredImage
    ? `https://bioluminescentkayaking.us${guide.featuredImage}`
    : "https://bioluminescentkayaking.us/images/hero.webp";

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
            item: "https://bioluminescentkayaking.us/guides",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: guideUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.metaDescription || guide.excerpt,
        url: guideUrl,
        image: [guideImage],
        ...(guide.datePublished ? { datePublished: guide.datePublished, dateModified: guide.datePublished } : {}),
        author: {
          "@type": "Person",
          name: guide.author || AUTHOR.name,
          url: AUTHOR.linkedinUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "BioluminescentKayaking.us",
          url: "https://bioluminescentkayaking.us/",
          logo: {
            "@type": "ImageObject",
            url: "https://bioluminescentkayaking.us/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": guideUrl,
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
          {/* Hero Section */}
          <Section bg="white" variant="compact" className="border-b border-seafoam pt-8 pb-8 lg:pt-12 lg:pb-12">
            <Container>
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
                      href="/guides"
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

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight mb-4">
                    {guide.title}
                  </h1>

                  <p className="text-base sm:text-lg leading-relaxed text-ink/80 max-w-2xl mb-6 font-sans">
                    {guide.excerpt}
                  </p>

                  <AuthorByline />
                </div>

                {guide.featuredImage && (
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md border border-teal/15">
                      <Image
                        src={guide.featuredImage}
                        alt={guide.featuredImageAlt ?? guide.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 480px"
                        className="object-cover"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </Section>

          {/* Article MDX Body */}
          <Section bg="seafoam" variant="compact" className="py-8 lg:py-12">
            <Container size="readable">
              {/* MDX rendered content */}
              <div className="prose-guide">
                {mdxContent}
              </div>

              <div className="mt-8 pt-6 border-t border-teal/15">
                <AuthorByline />
              </div>
            </Container>
          </Section>

          {/* Related Tours CTA Section */}
          {guide.relatedTourIds && guide.relatedTourIds.length > 0 && (
            <TourCardsSection
              tourIds={guide.relatedTourIds}
              title="See it yourself"
              intro="The science is better in person. Three well-placed tours for a first glowing night, with checked prices from GetYourGuide."
              variant="hub"
              bg="white"
              sectionVariant="compact"
              showDisclosure={false}
              className="py-10 lg:py-14"
            />
          )}

          {/* Planning CTA Band */}
          <Section variant="compact" bg="white" className="pt-0 lg:pt-0 pb-12 lg:pb-16">
            <Container size="readable">
              <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-6 sm:p-8 lg:p-10 text-center shadow-md">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">
                  Planning a trip now?
                </h2>
                <p className="text-white/85 text-base max-w-xl mx-auto mb-6 leading-relaxed font-sans">
                  Check tonight&apos;s glow estimate and the dark-moon windows
                  for your dates.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/glow-forecast"
                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-[#ff7b52] text-white font-bold text-sm shadow-sm transition-colors duration-200"
                  >
                    See tonight&apos;s glow forecast
                  </Link>
                  <Link
                    href="/moon-phase-calendar"
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
