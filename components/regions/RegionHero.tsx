import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import type { RegionPageContent } from "@/src/data/region-pages";

/** Region hub hero — mirrors components/florida/FloridaHero.tsx. */
export function RegionHero({ region }: { region: RegionPageContent }) {
  return (
    <Section bg="white" variant="hero" className="border-b border-seafoam">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-ink/70">
            <li>
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-ink/40">/</span>
            </li>
            <li className="font-semibold text-teal" aria-current="page">
              {region.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 hero-enter">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              {region.eyebrow}
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink leading-tight tracking-tight mb-4">
              {region.h1}
            </h1>

            <p className="text-base leading-7 text-ink/80 mb-8 max-w-2xl font-sans">
              {region.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#where-to-paddle"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Explore Locations
              </a>
              <a
                href="#seasons"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Seasonal Differences
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src={region.heroImage}
                alt={region.heroImageAlt}
                fill
                priority
                unoptimized={region.heroImage.startsWith("/")}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
