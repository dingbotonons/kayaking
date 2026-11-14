import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { HOMEPAGE_HERO_IMAGE } from "@/src/data/locations";

/**
 * Full-width hero, same treatment as the homepage hero (full-bleed
 * photo, teal gradient, white content card), with tighter padding —
 * the previous boxed bento hero was dull and over-padded (owner
 * audit, 2026-11-13).
 */
export function GuidesHero() {
  return (
    <section
      aria-labelledby="guides-hero-heading"
      className="relative w-full overflow-hidden min-h-[440px] lg:min-h-[500px] flex items-center bg-white pt-10 pb-12 lg:pt-16 lg:pb-20"
    >
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-white/90">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <li className="font-semibold text-white" aria-current="page">
              Guides
            </li>
          </ol>
        </nav>

        <div className="max-w-xl bg-white p-6 sm:p-8 lg:p-10 rounded-[20px] border border-border-soft shadow-sm hero-enter">
          <span className="inline-flex items-center px-3 h-7 rounded-full bg-cream text-teal border border-gold/30 text-xs font-bold uppercase tracking-wider mb-4">
            Paddle Planning &amp; Knowledge
          </span>

          <h1
            id="guides-hero-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight mb-4"
          >
            Guides: Understand the Glow, Pick Your Night
          </h1>

          <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
            What decides whether a bioluminescent trip is bright or a
            washout: the organism, the moon, the seasons, and the
            practical details nobody mentions until you&apos;re at the
            launch.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-ink/80">
            <div className="flex items-center gap-1.5 bg-seafoam px-3 h-7 rounded-full border border-teal/15">
              <span>Moon Phases Checked</span>
            </div>
            <div className="flex items-center gap-1.5 bg-seafoam px-3 h-7 rounded-full border border-teal/15">
              <span>Updated for 2026 Season</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
