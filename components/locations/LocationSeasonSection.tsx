import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  SeasonMonthStrip,
  peakWindowLabel,
} from "@/components/regions/SeasonMonthStrip";
import { getSeasonEntry } from "@/src/data/season-baselines";
import type { LocationPageContent } from "@/src/data/region-pages";

/**
 * When-to-go section rendered from the location's documented season
 * baseline (src/data/season-baselines.ts) — organism, notes, month
 * strip and the named source, so the page can never drift from the
 * numbers the Glow Forecast scores with. Bloom-tracker locations
 * (San Diego) show the organism explainer without a month strip.
 */
export function LocationSeasonSection({ page }: { page: LocationPageContent }) {
  const entry = getSeasonEntry(page.id);
  if (!entry) return null;
  const peak = peakWindowLabel(page.id);

  return (
    <Section bg="seafoam" id="seasons">
      <Container>
        <SectionHeader
          eyebrow="When to Go"
          title={`Best time to go: ${page.name}`}
          intro={entry.notes}
          align="center"
        />

        <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center px-3 h-7 rounded-full bg-seafoam text-teal text-xs font-bold">
              {entry.organism}
            </span>
            {peak && (
              <span className="text-sm font-bold text-teal font-sans">
                Peak: {peak}
              </span>
            )}
          </div>

          {entry.type === "seasonal" ? (
            <>
              <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-4 text-center font-sans">
                Seasonal Calendar
              </span>
              <SeasonMonthStrip locationId={page.id} />
              <p className="text-xs text-ink/60 font-sans mt-6 text-center">
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
                (checked {entry.dateChecked}). The same baseline feeds this
                bay&apos;s Glow Forecast score.
              </p>
            </>
          ) : (
            <p className="text-xs text-ink/60 font-sans text-center">
              No season baseline — this location is a bloom tracker, and its
              glow is never scored. Source: {entry.sourceName} (checked{" "}
              {entry.dateChecked}).
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
