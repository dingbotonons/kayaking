import Link from "next/link";
import { CompassExploreIcon } from "./MoonIcons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowToUseSection() {
  return (
    <Section bg="seafoam" variant="compact" aria-labelledby="how-to-use-heading">
      <Container>
        <SectionHeader
          titleId="how-to-use-heading"
          title="How to use this calendar"
          intro="Three simple steps to picking the night you will actually remember."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Step 1 */}
          <div className="custom-card bg-white p-6 md:p-8 border border-border-soft rounded-[20px] shadow-sm relative h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-teal text-white font-serif text-lg font-bold flex items-center justify-center mb-5">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3">
                Start with the season
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Dark nights only help inside a location&apos;s glowing season. Florida and Puerto Rico glow most of the year; California is June to October; Washington is June to mid-September.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="custom-card bg-white p-6 md:p-8 border-2 border-gold rounded-[20px] shadow-sm relative h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-gold text-ink font-serif text-lg font-bold flex items-center justify-center mb-5">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3">
                Find the gold nights
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Pick a night inside a gold dark window that falls in that season. The closer to the new moon, the darker the sky and the brighter the sparkles appear to human eyes.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="custom-card bg-white p-6 md:p-8 border border-border-soft rounded-[20px] shadow-sm relative h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-teal text-white font-serif text-lg font-bold flex items-center justify-center mb-5">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3">
                Check the glow forecast
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Closer to your trip, check our nightly glow forecast to factor in real-time clouds, wind and moonset times before you book.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Destinations Banner */}
        <div className="custom-card bg-white border border-teal/10 rounded-[20px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-seafoam text-teal flex items-center justify-center shrink-0">
              <CompassExploreIcon className="w-5 h-5 text-teal" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-teal mb-1">
                Know where you want to paddle?
              </h3>
              <p className="text-sm text-ink-muted font-sans">
                Explore individual destination guides for local launch spots, tour operators and peak seasons.
              </p>
            </div>
          </div>
          <Link
            href="/florida/"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white text-sm font-bold shadow-sm transition-all active:scale-95 shrink-0"
          >
            Explore Florida tours
          </Link>
        </div>
      </Container>
    </Section>
  );
}
