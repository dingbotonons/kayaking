import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function SanJuanHero() {
  return (
    <Section bg="white" variant="hero" className="border-b border-seafoam">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-ink/70">
            <li>
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li>
              <Link href="/puerto-rico" className="hover:text-teal transition-colors">
                Puerto Rico
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li className="font-semibold text-teal" aria-current="page">
              Bio Bay Tours from San Juan
            </li>
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider mb-4 border border-teal/20 h-7">
              <MapPin className="w-3.5 h-3.5 text-teal" />
              <span>Puerto Rico · San Juan Transit</span>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-extrabold text-teal leading-tight mb-4">
              Bio Bay Tours from San Juan
            </h1>

            {/* Verdict Callout */}
            <div className="bg-seafoam border-l-4 border-teal p-5 rounded-r-[16px] mb-6">
              <p className="text-ink/90 text-base leading-7 font-sans">
                Staying in San Juan without a car? You can still paddle a glowing bay tonight. Three ways to do it — one easy evening, one long day, one cheap drive — compared honestly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#comparison-table"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Compare the 3 Options
              </a>
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Browse Tours with Pickup
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoNEYOADeAmzNoaFjsDKbMaaZuI4YKJjS-u5N8TPlc0OQHchVIbt2IcJQF8xzlE4yhNRFY9z_re-cV2730Gn81CF_2BAdqcyu_zaQNT_SSuJ3I5UU10Q7ixLIZ3k90n-GEDQ6U0xzYphJoKgHi9DyfClNuztaQcpOxIwgR2G2EqApgGabxQqSRedVbvZhI0-TR8u9fvkkXi9PZzDnPmmHYerkbTAxRD3hRvEkPphIMS7cThXi4-OG18-h1k7MDqZPtHBNcSa3-p05h"
                alt="San Juan Puerto Rico coastline and historic walls at twilight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-[16px] border border-white/40 shadow-xs">
                <p className="text-xs font-bold text-teal">Departing from San Juan</p>
                <p className="text-[11px] text-ink/80">Condado, Isla Verde &amp; Old San Juan Hotel Pickups</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
