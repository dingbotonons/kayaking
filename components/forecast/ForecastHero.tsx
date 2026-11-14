import Link from "next/link";
import { InfoIcon } from "@/components/forecast/ForecastIcons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function ForecastHero() {
  return (
    <Section bg="seafoam" variant="hero" aria-labelledby="forecast-hero-heading">
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
            <span className="text-teal font-bold">Glow Forecast</span>
          </nav>

          <h1
            id="forecast-hero-heading"
            className="font-serif text-4xl lg:text-5xl text-ink tracking-tight font-bold leading-tight"
          >
            Bioluminescent Glow Forecast
          </h1>

          <p className="text-base leading-7 text-ink-muted font-sans">
            A nightly forecast for glowing water — like a weather forecast, but for bioluminescence. We combine the moon, the clouds, the wind and the season into one simple glow chance for tonight and the week ahead, for every kayaking spot on this site.
          </p>

          {/* Friendly Note Chip/Box */}
          <div className="inline-flex items-center gap-3 bg-white/80 border border-seafoam-border px-4 py-3 rounded-[16px] text-teal text-sm shadow-xs mt-2">
            <InfoIcon className="w-5 h-5 text-teal shrink-0" />
            <span>
              Live conditions, refreshed hourly. Every score is a glow estimate built from tonight's moon, cloud, wind and season.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
