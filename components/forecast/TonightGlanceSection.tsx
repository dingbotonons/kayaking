import Link from "next/link";
import type { TonightCardData } from "@/components/home/TonightGlowSection";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LocalNow } from "@/components/ui/LocalNow";

interface TonightGlanceSectionProps {
  cards: TonightCardData[];
}

/**
 * "Tonight at a glance" — the four flagship bays with tonight's glow
 * estimate. The visitor-local date and time render above the heading
 * (client-side, so it is the reader's own tonight). Cards lead with
 * the score: big number first, then the label, summary and the inputs
 * the score was built from.
 */
export function TonightGlanceSection({ cards }: TonightGlanceSectionProps) {
  return (
    <Section bg="white" aria-labelledby="tonight-glance-heading" id="tonight">
      <Container>
        <div className="mb-10 lg:mb-12">
          <LocalNow
            withTime
            className="font-serif text-2xl lg:text-3xl font-bold text-ink leading-tight mb-3"
          />
          <h2
            id="tonight-glance-heading"
            className="font-serif text-3xl lg:text-4xl leading-snug font-bold text-teal tracking-tight"
          >
            Tonight at a glance
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80 font-sans">
            Current conditions across primary bays. Every score is a glow
            estimate built from tonight&apos;s moon, cloud, wind and season.
          </p>
        </div>

        {/* 4 flagship cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map(({ loc, tonight }) => {
            const isExcellent = tonight.label === "Excellent chance";
            const isGood = tonight.label === "Good chance";
            const badgeBg = isExcellent
              ? "bg-gold text-ink"
              : isGood
              ? "bg-seafoam-border text-teal"
              : "bg-stone-200 text-ink-muted";

            const featureTag =
              loc.id === "mosquito-bay"
                ? "Brightest in world"
                : loc.id === "tomales-bay"
                ? "Pacific coastal waters"
                : loc.id === "san-juan-island"
                ? "Summer bio paddles"
                : null;

            return (
              <div
                key={loc.id}
                className="bg-white rounded-[20px] p-6 custom-card flex flex-col justify-between h-full border border-teal/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-teal uppercase tracking-wider">
                      {loc.state}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${badgeBg}`}
                    >
                      {tonight.label}
                    </span>
                  </div>

                  {/* Score leads the card with live radial gauge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-5xl font-bold text-teal leading-none">
                          {tonight.score}
                        </span>
                        <span className="text-sm font-semibold text-ink/60">
                          /100
                        </span>
                      </div>
                      <span className="text-xs font-bold text-ink-muted block mt-1">
                        Nightly Glow Estimate
                      </span>
                    </div>

                    {/* Radial Glow Meter */}
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
                        <circle
                          cx="24"
                          cy="24"
                          r="19"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          className="text-seafoam-border"
                        />
                        <circle
                          cx="24"
                          cy="24"
                          r="19"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeDasharray={119.38}
                          strokeDashoffset={119.38 - (119.38 * (tonight.score ?? 0)) / 100}
                          strokeLinecap="round"
                          className={isExcellent ? "text-gold" : isGood ? "text-teal" : "text-stone-300"}
                        />
                      </svg>
                      <span className="absolute text-[11px] font-bold text-ink">
                        {tonight.score ?? 0}%
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink mb-2">
                    {loc.name}
                  </h3>

                  <p className="text-sm text-ink/75 mb-2 font-sans">
                    {tonight.summary}
                  </p>

                  <div className="bg-seafoam/50 border border-seafoam-border rounded-[16px] px-4 py-3 mb-4">
                    <p className="text-xs text-ink-muted font-sans leading-relaxed">
                      {tonight.inputsLine}
                    </p>
                  </div>

                  {featureTag && (
                    <div className="inline-block mb-4">
                      <span className="text-[11px] font-bold bg-seafoam text-teal px-2.5 py-0.5 rounded-full border border-teal/10">
                        {featureTag}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border-soft flex items-center justify-end">
                  <Link
                    href={loc.pageSlug}
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full text-xs font-bold bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors"
                  >
                    View bay →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
