import Link from "next/link";
import {
  getSevenNightOutlook,
  getTonightConditions,
} from "@/lib/conditions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import type { LocationPageContent } from "@/src/data/region-pages";

/**
 * Location tonight box — mirrors CocoaBeachTonightSection (status card
 * + 7-night strip), with a bloom-tracker variant for San Diego: status
 * only, no score and no outlook, ever.
 */
export async function LocationTonightSection({
  page,
}: {
  page: LocationPageContent;
}) {
  const tonight = await getTonightConditions(page.id);

  if (tonight.bloomTracker) {
    return (
      <Section bg="seafoam" id="tonight">
        <Container>
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold border border-teal/10 h-7">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {tonight.label}
                </span>
                <span className="text-[11px] font-semibold text-ink/60">
                  Bloom tracker — no glow score
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
                  Is San Diego glowing?
                </h2>
                <p className="text-base text-ink/70 mt-2 font-sans max-w-2xl">
                  San Diego&apos;s glow comes from unpredictable red tides, so
                  there&apos;s no nightly forecast — we report blooms when
                  lifeguards and researchers spot them.
                  {tonight.inputs.waterTempF !== undefined &&
                  tonight.inputs.waterStationName
                    ? ` Water ${tonight.inputs.waterTempF.toFixed(1)}°F at ${tonight.inputs.waterStationName} · ${tonight.inputs.waterObservedAt}.`
                    : ""}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/glow-forecast/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Tonight&apos;s Bookable Bays →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  const outlook = await getSevenNightOutlook(page.id);
  const score = tonight.score ?? 0;

  return (
    <Section bg="seafoam" id="tonight">
      <Container>
        <div className="space-y-6">
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold border border-teal/10 h-7">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {tonight.label}
                </span>
                <span className="text-xs font-bold text-teal bg-seafoam px-3 py-1 rounded-full h-7 inline-flex items-center">
                  {score}/100
                </span>
                <span className="text-[11px] font-semibold text-ink/60">
                  Glow estimate
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
                  Tonight&apos;s glow
                </h2>
                <p className="text-base text-ink/70 flex items-center gap-2 mt-2 font-sans">
                  {tonight.inputsLine}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/glow-forecast/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Full 7-Night Forecast →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-3 font-sans">
              7-Night Glow Outlook
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {outlook.nights.map((night) => {
                const isExcellent = night.label === "Excellent";
                return (
                  <div
                    key={night.dateLocal}
                    className={`rounded-[16px] p-3 text-center border ${
                      isExcellent
                        ? "bg-seafoam border-teal/20"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <span className="text-xs font-semibold text-ink/70 block font-sans">
                      {night.dayLabel}
                    </span>
                    <span
                      className={`text-xs font-bold block mt-1 ${
                        isExcellent ? "text-teal" : "text-ink/80"
                      }`}
                    >
                      {night.label}
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
