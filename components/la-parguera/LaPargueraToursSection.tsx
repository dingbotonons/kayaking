import { Ship, Waves } from "@/components/ui/Icons";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DESCRIPTIONS: Record<string, string> = {
  t437542:
    "A boat cruise from the La Parguera waterfront timed for sunset or late night, with a swim stop in the glowing water.",
  t885721:
    "The classic 1-hour boat tour out to the bay, with time to swim in the bioluminescence.",
  t714293:
    "Pedal a water bike across the bay instead of riding a boat — a steadier, drier way to see the glow, and this one has no swimming.",
};

const PICKS: Tour[] = ["t437542", "t885721", "t714293"]
  .map((id) => getTourById(id))
  .filter((t): t is Tour => Boolean(t));

export function LaPargueraToursSection() {
  return (
    <Section bg="white" id="tours">
      <Container>
        {/* Affiliate Disclosure strictly directly above first card */}
        <p className="text-xs text-ink/60 text-center max-w-2xl mx-auto mb-6 italic font-sans">
          Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.
        </p>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="La Parguera bio bay tours"
          intro="Boat tours and a water-bike trip leaving from the La Parguera waterfront in Lajas — the one bio bay where swimming is the point."
          align="center"
        />

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PICKS.map((t) => {
            const Icon = t.tourType === "water bike" ? Waves : Ship;
            return (
              <div
                key={t.id}
                className="bg-white rounded-[20px] border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden h-full"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal bg-seafoam px-3 py-1 rounded-full border border-teal/20 h-7 inline-flex items-center">
                      GetYourGuide
                    </span>
                    <Icon className="w-5 h-5 text-teal/60" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink mb-2 leading-snug">
                    {t.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-ink/75 mb-6 font-sans">
                    {DESCRIPTIONS[t.id]}
                  </p>

                  {/* Verdict box */}
                  <div className="bg-seafoam/60 border border-teal/10 rounded-[16px] p-3 mb-6">
                    <span className="text-[10px] font-bold uppercase text-teal tracking-wider block mb-0.5">
                      Our verdict
                    </span>
                    <p className="text-xs text-ink/80 leading-relaxed font-sans">
                      {t.verdict}
                    </p>
                  </div>

                  {t.rating !== null && t.reviewCount !== null && (
                    <p className="text-xs text-ink/60 font-sans -mt-3 mb-6">
                      Rated {t.rating.toFixed(1)}/5 · {t.reviewCount} reviews on GetYourGuide
                    </p>
                  )}
                </div>

                <div className="p-6 pt-0 border-t border-border-soft flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-ink/60 uppercase tracking-wider block font-sans">
                      Checked {PRICE_CHECKED_DATE}
                    </span>
                    <span className="font-serif text-lg font-bold text-teal">
                      {t.priceFormatted}
                    </span>
                  </div>
                  <a
                    href={t.affiliateUrl}
                    target="_blank"
                    rel={AFFILIATE_REL}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-150"
                  >
                    Check dates
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
