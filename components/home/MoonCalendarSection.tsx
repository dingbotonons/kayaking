import Link from "next/link";
import { MoonNight } from "@/lib/glow";
import { CalendarIcon, LightbulbIcon, MoonIcon } from "./Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface MoonCalendarSectionProps {
  nights: MoonNight[];
}

export function MoonCalendarSection({ nights }: MoonCalendarSectionProps) {
  return (
    <Section
      bg="white"
      aria-labelledby="moon-calendar-heading"
      id="moon-calendar"
      className="border-t border-border-soft"
    >
      <Container>
        {/* Moon strip card: cream accent container (per spec: cream accents only, never full section background) */}
        <div className="p-6 sm:p-8 lg:p-12 relative overflow-hidden bg-cream border border-cream-border rounded-[20px] shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 mb-3 h-7">
                <MoonIcon className="w-4 h-4 text-amber-800" />
                <span className="text-xs uppercase tracking-wider font-bold text-amber-900">
                  New moon = darkest skies = brightest glow
                </span>
              </div>
              <h2
                id="moon-calendar-heading"
                className="font-serif text-3xl lg:text-4xl text-teal font-bold leading-snug"
              >
                The next dark nights
              </h2>
            </div>

            <Link
              href="/moon-phase-calendar/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-teal text-white text-sm font-bold hover:bg-teal/90 transition-all shadow-sm active:scale-95 self-start lg:self-auto shrink-0"
            >
              <CalendarIcon className="w-4 h-4 text-white" />
              Open the moon calendar
            </Link>
          </div>

          {/* 14 Night Chips Horizontal Strip */}
          <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4">
            <div className="flex items-center gap-4 min-w-max">
              {nights.map((night, index) => {
                const isPeak = night.isPeak;
                const isNewMoon = night.phaseLabel === "New Moon";

                return (
                  <div
                    key={`${night.dayLabel}-${index}`}
                    className={`flex flex-col items-center p-3 rounded-[16px] bg-white text-center relative ${
                      isPeak
                        ? "border-2 border-gold shadow-sm min-w-[96px]"
                        : "border border-cream-border min-w-[80px]"
                    }`}
                  >
                    {isPeak && night.peakBadge && (
                      <span className="absolute -top-2.5 bg-gold text-ink px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {night.peakBadge}
                      </span>
                    )}

                    <span
                      className={`text-xs font-bold mb-2 ${
                        isPeak ? "text-teal mt-1" : "text-ink"
                      }`}
                    >
                      {night.dayLabel}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                        isNewMoon ? "bg-ink text-gold" : "bg-seafoam text-teal"
                      }`}
                    >
                      {isNewMoon ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-gold" />
                      ) : (
                        <MoonIcon className="w-4 h-4" />
                      )}
                    </div>

                    <span
                      className={`text-xs font-semibold ${
                        isPeak ? "text-teal" : "text-ink-muted"
                      }`}
                    >
                      {night.phaseLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tip Box */}
          <div className="mt-6 p-4 rounded-[16px] bg-white border border-cream-border flex items-center gap-3">
            <LightbulbIcon className="w-6 h-6 text-gold shrink-0" />
            <p className="text-sm text-ink-muted leading-relaxed">
              <strong className="text-teal font-bold">Pro tip:</strong> Even
              during a half or full moon, paddling{" "}
              <strong className="text-ink font-semibold">after moonset</strong>{" "}
              or before moonrise gives you pitch-black skies and peak glow. Check
              the moonset time on each tour day before booking.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
