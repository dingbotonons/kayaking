import Link from "next/link";
import { MoonIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function MoonHero() {
  return (
    <Section bg="white" variant="hero" aria-labelledby="moon-hero-heading">
      <Container>
        <div className="max-w-3xl space-y-4 hero-enter">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-ink-muted text-xs font-semibold"
          >
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-teal font-bold">Moon Calendar</span>
          </nav>

          {/* Tag Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal font-bold text-xs h-7 border border-seafoam-border">
            <MoonIcon className="w-4 h-4 text-teal" />
            <span>Optimal Planning Window</span>
          </div>

          <h1
            id="moon-hero-heading"
            className="font-serif text-4xl lg:text-5xl text-ink tracking-tight font-bold leading-tight"
          >
            Moon Calendar for Bioluminescent Kayaking
          </h1>

          <p className="text-base leading-7 text-ink-muted font-sans">
            The moon is the single biggest factor in how bright the water looks. This calendar shows the dark nights — the ones around each new moon — for the next three months, so you can plan a trip when the glow stands a chance.
          </p>
        </div>
      </Container>
    </Section>
  );
}
