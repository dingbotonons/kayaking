import Link from "next/link";
import { Moon, ArrowRight } from "@/components/ui/Icons";
import {
  getSevenNightOutlook,
  getTonightConditions,
} from "@/lib/conditions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export async function LaPargueraTonightSection() {
  const [tonight, outlook] = await Promise.all([
    getTonightConditions("la-parguera"),
    getSevenNightOutlook("la-parguera"),
  ]);
  const score = tonight.score ?? 0;

  return (
    <Section bg="seafoam" id="tonight">
      <Container>
        <SectionHeader
          title="Tonight's glow"
          intro="Tonight's glow estimate for La Parguera, Lajas — built from season, moon phase, cloud and wind."
          align="center"
        />

        {/* Forecast Card */}
        <div className="bg-white rounded-[20px] shadow-sm border border-teal/10 p-6 lg:p-8 max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Score circle */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-seafoam/40 rounded-[16px] border border-teal/10">
              <span className="text-xs uppercase font-bold text-teal tracking-wider mb-1">
                Glow estimate
              </span>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-5xl font-bold text-teal font-serif">{score}</span>
                <span className="text-ink/50 text-base font-semibold font-sans">/100</span>
              </div>
              <span className="inline-block px-3 py-1 bg-teal text-white text-xs font-bold rounded-full">
                {tonight.label}
              </span>
            </div>

            {/* Moon condition */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-3 font-sans">
              <div className="flex items-center gap-2 text-ink font-semibold text-base sm:text-lg">
                <Moon className="w-5 h-5 text-teal shrink-0" />
                <span>{tonight.inputsLine}</span>
              </div>
              <p className="text-ink/80 text-sm leading-relaxed">
                Tonight&apos;s estimate in one line: {tonight.summary}. Because this bay is more open to the Caribbean than Mosquito Bay, timing around a dark new-moon window is especially important for strong contrast.
              </p>
              <div className="pt-2">
                <Link
                  href="/glow-forecast"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-coral transition-colors"
                >
                  <span>See full 7-day glow forecast</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Strip */}
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-3 font-sans text-center md:text-left">
            7-Night Outlook
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {outlook.nights.map((night) => {
              const isExcellent = night.label === "Excellent";
              const isGood = night.label === "Good";
              return (
                <div
                  key={night.dateLocal}
                  className={`rounded-[16px] p-3 text-center border ${
                    isExcellent
                      ? "bg-white border-teal/30 shadow-xs"
                      : isGood
                      ? "bg-white/80 border-teal/15"
                      : "bg-white/50 border-stone-200"
                  }`}
                >
                  <span className="text-xs font-semibold text-ink/70 block font-sans">
                    {night.dayLabel}
                  </span>
                  <span
                    className={`text-xs font-bold block mt-1 ${
                      isExcellent ? "text-teal" : isGood ? "text-teal/80" : "text-ink/60"
                    }`}
                  >
                    {night.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
