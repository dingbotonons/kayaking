import Image from "next/image";
import Link from "next/link";
import { CompassIcon, CheckCircleIcon } from "./Icons";
import { Container } from "@/components/ui/Container";
import { HOMEPAGE_HERO_IMAGE } from "@/src/data/locations";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
    >
      {/* Hero Background Image with priority loading for LCP under 2.5s */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOMEPAGE_HERO_IMAGE.src}
          alt={HOMEPAGE_HERO_IMAGE.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal/65 via-teal/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Left Rounded Overlay Box: pure solid white with soft border and elevated shadow */}
        <div className="max-w-xl bg-white p-6 sm:p-8 lg:p-10 rounded-[20px] border border-border-soft shadow-sm hero-enter">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 mb-4 h-7">
            <CompassIcon className="w-4 h-4 text-amber-800" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900">
              Independent USA Paddle Guide
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight mb-4"
          >
            Bioluminescent Kayaking in America
          </h1>

          <p className="text-base leading-7 text-ink-muted mb-8 font-sans">
            Compare every glowing-water kayak tour in Florida, Puerto Rico, California and Washington — and pick a night when it will actually glow.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/glow-forecast/"
              className="inline-flex items-center justify-center h-12 px-6 bg-coral hover:bg-coral-hover text-white rounded-full transition-all duration-150 shadow-sm active:scale-95 font-bold text-sm"
            >
              See tonight&apos;s glow
            </Link>
            <Link
              href="/best-bioluminescent-kayaking-tours/"
              className="inline-flex items-center justify-center h-12 px-6 bg-white hover:bg-seafoam text-teal border border-teal rounded-full transition-all duration-150 shadow-sm active:scale-95 font-bold text-sm"
            >
              Browse tours
            </Link>
          </div>

          {/* Trust points - without "vetted" claims */}
          <div className="pt-6 border-t border-border-soft space-y-2.5">
            <div className="flex items-center gap-2 text-ink text-sm">
              <CheckCircleIcon className="w-5 h-5 text-teal shrink-0" />
              <span>Tour prices checked on GetYourGuide</span>
            </div>
            <div className="flex items-center gap-2 text-ink text-sm">
              <CheckCircleIcon className="w-5 h-5 text-teal shrink-0" />
              <span>Glow forecast updated daily</span>
            </div>
            <div className="flex items-center gap-2 text-ink text-sm">
              <CheckCircleIcon className="w-5 h-5 text-teal shrink-0" />
              <span>Independent — we don&apos;t run tours</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

