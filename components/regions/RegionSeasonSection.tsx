import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SeasonMonthStrip } from "@/components/regions/SeasonMonthStrip";
import { getSeasonEntry } from "@/src/data/season-baselines";
import { getLocationStatic } from "@/src/data/locations";
import type { RegionPageContent } from "@/src/data/region-pages";

/**
 * Region season-at-a-glance: one card per location, rendered from the
 * documented season baselines (organism, notes and named source) that
 * also feed the Glow Forecast.
 */
export function RegionSeasonSection({
  region,
}: {
  region: RegionPageContent;
}) {
  return (
    <Section bg="white" id="seasons">
      <Container>
        <SectionHeader
          eyebrow="Season at a Glance"
          title={`${region.name} seasons`}
          intro={region.seasonIntro}
          align="center"
        />

        <div className="space-y-6">
          {region.seasonLocationIds.map((locationId) => {
            const entry = getSeasonEntry(locationId);
            const loc = getLocationStatic(locationId);
            if (!entry || !loc) return null;
            return (
              <div
                key={locationId}
                className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="font-serif text-xl font-bold text-teal">
                    {loc.name}
                  </h3>
                  <span className="inline-flex items-center px-3 h-7 rounded-full bg-seafoam text-teal text-xs font-bold">
                    {entry.organism}
                  </span>
                </div>

                <p className="text-base leading-7 text-ink/80 font-sans mb-6">
                  {entry.notes}
                </p>

                {entry.type === "seasonal" ? (
                  <>
                    <SeasonMonthStrip locationId={locationId} />
                    <p className="text-xs text-ink/60 font-sans mt-4">
                      Season baseline source:{" "}
                      {entry.sourceUrl ? (
                        <a
                          href={entry.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-teal hover:underline"
                        >
                          {entry.sourceName}
                        </a>
                      ) : (
                        entry.sourceName
                      )}{" "}
                      (checked {entry.dateChecked}).
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-ink/60 font-sans">
                    No season baseline — this location is a bloom tracker.
                    Source: {entry.sourceName} (checked {entry.dateChecked}).
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
