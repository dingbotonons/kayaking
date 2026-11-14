import Image from "next/image";
import Link from "next/link";
import type { LocationStatic } from "@/src/data/locations";
import type { TonightConditions } from "@/lib/conditions";
import { SparklesIcon, CalendarIcon } from "./Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface TonightCardData {
  loc: LocationStatic;
  tonight: TonightConditions;
}

function intensityLabelFor(tonight: TonightConditions): string {
  if (tonight.offSeason) return "Off season";
  switch (tonight.label) {
    case "Excellent chance":
      return "High Intensity";
    case "Good chance":
      return "Moderate";
    case "Fair chance":
      return "Low";
    default:
      return "Dormant";
  }
}

interface TonightGlowSectionProps {
  cards: TonightCardData[];
}

export function TonightGlowSection({ cards }: TonightGlowSectionProps) {
  return (
    <Section
      bg="seafoam"
      aria-labelledby="tonight-glow-heading"
      id="glow-forecast"
    >
      <Container>
        <SectionHeader
          titleId="tonight-glow-heading"
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-teal h-7 border border-seafoam-border shadow-xs">
              <SparklesIcon className="w-4 h-4 text-teal" />
              <span className="text-[11px] uppercase tracking-wider font-bold">
                Nightly Conditions
              </span>
            </div>
          }
          title="Tonight's Glow"
          intro="Our nightly glow estimate — like a weather forecast, but for glowing water."
          align="center"
        />

        {/* 4 Forecast Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {cards.map(({ loc, tonight }) => {
            const isExcellent = tonight.label === "Excellent chance";
            const isGood = tonight.label === "Good chance";
            const badgeBg = isExcellent
              ? "bg-gold text-ink"
              : isGood
              ? "bg-seafoam-border text-teal"
              : "bg-stone-200 text-ink-muted";

            return (
              <div
                key={loc.id}
                className={`custom-card flex flex-col h-full overflow-hidden bg-white group ${
                  tonight.offSeason ? "opacity-90" : ""
                }`}
              >
                <div
                  className={`aspect-[4/3] w-full relative overflow-hidden ${
                    tonight.offSeason ? "grayscale-[30%]" : ""
                  }`}
                >
                  <Image
                    src={loc.image}
                    alt={loc.imageAlt}
                    fill
                    unoptimized={loc.image.startsWith("/")}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold shadow-sm ${badgeBg}`}
                  >
                    {tonight.label}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-serif text-xl font-bold text-teal">
                        {loc.name}, {loc.state}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 my-2">
                      <span className="font-serif text-2xl font-bold text-teal">
                        {tonight.score}
                        <span className="font-sans text-xs font-normal text-ink-muted">
                          /100
                        </span>
                      </span>
                      <span className="text-xs bg-seafoam text-teal px-2 py-0.5 rounded font-semibold border border-seafoam-border">
                        {intensityLabelFor(tonight)}
                      </span>
                      <span className="text-[11px] font-semibold text-ink-muted">
                        Glow estimate
                      </span>
                    </div>

                    <p className="text-xs text-ink-muted mt-2 mb-4">
                      {tonight.inputsLine}
                    </p>
                  </div>

                  <Link
                    href={loc.pageSlug}
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors mt-2"
                  >
                    See tours →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Button */}
        <div className="text-center">
          <Link
            href="/glow-forecast/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white border border-seafoam-border text-teal text-sm font-bold shadow-sm hover:border-teal/50 transition-all duration-150 active:scale-95"
          >
            <CalendarIcon className="w-5 h-5 text-teal" />
            See the full 7-night forecast
          </Link>
        </div>
      </Container>
    </Section>
  );
}
