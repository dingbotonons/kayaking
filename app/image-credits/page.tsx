import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChevronRight, Home } from "@/components/ui/Icons";
import { IMAGE_CREDITS } from "@/src/data/image-credits";

export const metadata: Metadata = {
  title: "Image Credits & Photo Licensing | BioluminescentKayaking",
  description:
    "Complete photographic attribution and licensing directory: image sources, creative commons credits, and original photography across all 12 bay guides.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/image-credits/",
  },
  openGraph: {
    title: "Image Credits & Photo Licensing | BioluminescentKayaking",
    description:
      "Complete photographic attribution and licensing directory: image sources, creative commons credits, and original photography across all 12 bay guides.",
    url: "https://bioluminescentkayaking.us/image-credits/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function ImageCreditsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Image Credits",
    description:
      "Every photograph used on BioluminescentKayaking.us, where it appears, and its source.",
    url: "https://bioluminescentkayaking.us/image-credits/",
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
          name: "Image Credits",
          item: "https://bioluminescentkayaking.us/image-credits/",
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
          <Section variant="hero" bg="white">
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
                    Image Credits
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
                  Image Credits
                </h1>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  Every photograph used on this site, listed with where it
                  appears and a link to the image itself as its source. If you
                  own an image listed here and would like it credited
                  differently or removed, write to us via the{" "}
                  <Link
                    href="/contact/"
                    className="text-teal font-semibold hover:underline"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </Container>
          </Section>

          <Section bg="seafoam">
            <Container>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {IMAGE_CREDITS.map((credit) => (
                  <article
                    key={credit.src}
                    className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm h-full flex flex-col"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={credit.src}
                        alt={`Photograph used on: ${credit.appearsOn.join(", ")}`}
                        fill
                        unoptimized={credit.src.startsWith("/")}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-base font-bold text-ink mb-2">
                        {credit.appearsOn.join(" · ")}
                      </h2>
                      <p className="text-sm text-ink/70 font-sans">
                        Source:{" "}
                        <a
                          href={credit.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-teal hover:underline break-all"
                        >
                          view the image
                        </a>
                        {credit.note ? ` (${credit.note.toLowerCase()})` : ""}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
