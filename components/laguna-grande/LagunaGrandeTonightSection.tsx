import Link from "next/link";
import {
  getSevenNightOutlook,
  getTonightConditions,
} from "@/lib/conditions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export async function LagunaGrandeTonightSection() {
  const [tonight, outlook] = await Promise.all([
    getTonightConditions("laguna-grande"),
    getSevenNightOutlook("laguna-grande"),
  ]);
  const score = tonight.score ?? 0;

  return (
    <Section bg="seafoam" id="tonight">
      <Container>
        <div className="space-y-6">
          {/* Main Status Card */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold border border-teal/10 h-7">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {tonight.label}
                </span>
                <span className="text-xs font-bold text-teal bg-seafoam px-3 py-1 rounded-full h-7 inline-flex items-center">
                  {score}/100 Bay index
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

            <div className="shrink-0 flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <span className="font-serif text-4xl font-extrabold text-teal block leading-none">
                  {score}
                  <span className="text-xs font-sans font-normal text-ink/60">/100</span>
                </span>
                <span className="text-[11px] font-bold text-teal">Laguna Grande</span>
              </div>
              <Link
                href="/glow-forecast/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Full 7-Night Forecast →
              </Link>
            </div>

          </div>

          {/* 7-Night Mini-Outlook Strip */}
          <div className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-3 font-sans">
              7-Night Glow Outlook · Laguna Grande
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
