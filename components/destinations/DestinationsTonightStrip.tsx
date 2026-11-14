import Link from "next/link";
import { ArrowRight, Moon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LocalNow } from "@/components/ui/LocalNow";
import { SCOREABLE_LOCATION_IDS } from "@/src/data/destinations";
import { getLocationStatic } from "@/src/data/locations";
import { getTonightConditions } from "@/lib/conditions";

export async function DestinationsTonightStrip() {
  const chips = await Promise.all(
    SCOREABLE_LOCATION_IDS.map(async (id) => {
      const tonight = await getTonightConditions(id);
      const loc = getLocationStatic(id);
      return { id, name: loc?.name ?? id, state: loc?.state ?? "", tonight };
    })
  );

  return (
    <Section bg="seafoam" id="tonight">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
              <Moon className="w-3.5 h-3.5 text-teal" />
              <span>Tonight&apos;s Conditions · Glow estimates</span>
            </div>
            <LocalNow className="font-serif text-3xl lg:text-4xl font-bold text-ink leading-tight mb-2" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
              Tonight&apos;s glow across America
            </h2>
          </div>

          <p className="text-sm text-ink/75 font-sans max-w-md">
            Calculated using season, moon, clouds, and wind. Every score is an estimate, not a reading.
          </p>
        </div>

        {/* Grid of scoreable location cards — the glow rating leads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {chips.map((chip) => (
            <Link
              key={chip.id}
              href="/glow-forecast/"
              className="bg-white rounded-[20px] border border-teal/15 p-5 flex items-center justify-between gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div>
                <p className="font-serif text-base font-bold text-ink group-hover:text-teal transition-colors">
                  {chip.name}
                </p>
                <p className="text-xs text-ink/65 font-sans mt-0.5">
                  {chip.state}
                </p>
                <p className="text-xs font-semibold text-teal mt-2">
                  {chip.tonight.offSeason
                    ? "Off season"
                    : chip.tonight.label}
                </p>
              </div>

              {chip.tonight.score !== null && !chip.tonight.offSeason ? (
                <span className="text-right shrink-0">
                  <span className="font-serif text-5xl font-bold text-teal leading-none">
                    {chip.tonight.score}
                  </span>
                  <span className="block text-[11px] font-semibold text-ink/55 mt-1">
                    /100 · Glow estimate
                  </span>
                </span>
              ) : (
                <span className="inline-flex items-center px-3 h-7 rounded-full bg-seafoam text-teal text-xs font-bold shrink-0">
                  Off season
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/glow-forecast/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors"
          >
            <span>See the full glow forecast</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
