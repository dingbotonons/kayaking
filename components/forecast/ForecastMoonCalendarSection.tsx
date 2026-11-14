import Link from "next/link";
import { MoonNight } from "@/lib/glow";
import { CalendarIcon, MoonIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface ForecastMoonCalendarSectionProps {
  nights: MoonNight[];
}

export function ForecastMoonCalendarSection({
  nights,
}: ForecastMoonCalendarSectionProps) {
  return (
    <Section bg="white" aria-labelledby="dark-nights-heading">
      <Container>
        <div className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 custom-card border border-teal/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider bg-gold/20 px-3 py-1 rounded-full border border-gold/40 h-7 inline-flex items-center">
                Lunar Alignment
              </span>
              <h2
                id="dark-nights-heading"
                className="font-serif text-3xl lg:text-4xl text-teal mt-3 font-bold leading-snug"
              >
                The next dark nights
              </h2>
              <p className="text-base text-ink-muted mt-1 leading-7 font-sans">
                New moon = darkest skies = brightest glow
              </p>
            </div>
            <Link
              href="/moon-phase-calendar/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-teal text-teal hover:bg-seafoam text-sm font-bold transition-colors shrink-0"
            >
              <CalendarIcon className="w-4 h-4 text-teal" />
              Open the moon calendar
            </Link>
          </div>

          {/* Slim Moon Strip Card with Warm Cream Accent - strictly confined here */}
          <div className="p-4 sm:p-6 bg-cream rounded-[16px] border border-cream-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 text-center">
              {nights.map((night, idx) => {
                const isPeak = night.isPeak;
                const isNewMoon = night.phaseLabel === "New Moon";

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-[12px] bg-white flex flex-col items-center justify-between min-h-[96px] ${
                      isPeak
                        ? "border-2 border-gold shadow-sm"
                        : "border border-cream-border"
                    }`}
                  >
                    <span className="text-xs font-bold text-teal block mb-1">
                      {night.dayLabel}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center my-1 ${
                        isNewMoon ? "bg-ink text-gold" : "bg-seafoam text-teal"
                      }`}
                    >
                      {isNewMoon ? (
                        <span className="w-3 h-3 rounded-full bg-gold" />
                      ) : (
                        <MoonIcon className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-ink-muted block mt-1">
                      {night.phaseLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
