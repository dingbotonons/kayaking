import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Compass } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { DESTINATIONS_HERO_IMAGE } from "@/src/data/destinations";

/**
 * Full-width hero, same treatment as the homepage hero: full-bleed
 * photograph, teal gradient, and a solid white content card on top.
 * (Owner audit 2026-11-13: the previous boxed two-column hero read as
 * dull next to the homepage.)
 */
export function DestinationsHero() {
  return (
    <section
      aria-labelledby="destinations-hero-heading"
      className="relative w-full overflow-hidden min-h-[540px] lg:min-h-[600px] flex items-center bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={DESTINATIONS_HERO_IMAGE.src}
          alt={DESTINATIONS_HERO_IMAGE.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal/65 via-teal/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-white/90">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5 text-white/80" />
                <span>Home</span>
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <li className="font-semibold text-white" aria-current="page">
              Destinations
            </li>
          </ol>
        </nav>

        <div className="max-w-xl bg-white p-6 sm:p-8 lg:p-10 rounded-[20px] border border-border-soft shadow-sm hero-enter">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 mb-4 h-7">
            <Compass className="w-4 h-4 text-amber-800" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900">
              All USA Destinations
            </span>
          </div>

          <h1
            id="destinations-hero-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight mb-4"
          >
            Bioluminescent Kayaking Destinations
          </h1>

          <p className="text-base leading-7 text-ink/80 font-sans mb-8">
            Four regions, twelve glowing places. Every bioluminescent
            kayaking destination in the USA on one page — with
            tonight&apos;s glow score for each, so you can see where the
            water is brightest before you plan.
          </p>

          {/* Quick Region Jump Anchors */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">
              Jump to region:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#florida"
                className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-seafoam text-teal hover:bg-teal hover:text-white transition-colors text-xs font-bold border border-teal/15"
              >
                Florida
              </Link>
              <Link
                href="#puerto-rico"
                className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-seafoam text-teal hover:bg-teal hover:text-white transition-colors text-xs font-bold border border-teal/15"
              >
                Puerto Rico
              </Link>
              <Link
                href="#california"
                className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-seafoam text-teal hover:bg-teal hover:text-white transition-colors text-xs font-bold border border-teal/15"
              >
                California
              </Link>
              <Link
                href="#washington"
                className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-seafoam text-teal hover:bg-teal hover:text-white transition-colors text-xs font-bold border border-teal/15"
              >
                Washington
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
