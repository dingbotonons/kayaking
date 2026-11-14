import { Clock, MapPin, CheckCircle2 } from "@/components/ui/Icons";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CHIPS: Record<string, { label: string; className: string }> = {
  t140169: {
    label: "Most reviewed",
    className: "text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md",
  },
  t22181: {
    label: "Longest on the water",
    className: "text-xs font-semibold text-teal bg-seafoam px-2 py-0.5 rounded-md",
  },
  t1057360: {
    label: "Lowest price",
    className: "text-xs font-semibold text-ink/60 bg-stone-100 px-2 py-0.5 rounded-md",
  },
};

const PICKS: Tour[] = ["t140169", "t22181", "t1057360"]
  .map((id) => getTourById(id))
  .filter((t): t is Tour => Boolean(t));

export function LagunaGrandeToursSection() {
  return (
    <Section bg="white" id="tours">
      <Container>
        {/* Affiliate Disclosure strictly directly above first card */}
        <p className="text-xs text-ink/60 text-center max-w-2xl mx-auto mb-6 italic font-sans">
          Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.
        </p>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="The best Laguna Grande tours"
          intro="Kayak tours that launch at Laguna Grande itself, in Fajardo. Staying in San Juan without a car? The San Juan departures page lists the transport-included options."
          align="center"
        />

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PICKS.map((t) => {
            const chip = CHIPS[t.id];
            return (
              <div
                key={t.id}
                className="bg-white rounded-[20px] border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden h-full"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal bg-seafoam px-3 py-1 rounded-full h-7 inline-flex items-center">
                      GetYourGuide
                    </span>
                    {chip && <span className={chip.className}>{chip.label}</span>}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink mb-2 leading-snug">
                    {t.name}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-ink/70 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal" />
                      <span>{t.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal" />
                      <span>{t.launchPoint}</span>
                    </span>
                  </div>

                  {/* Verdict box */}
                  <div className="bg-seafoam/60 border border-teal/10 rounded-[16px] p-3 mb-4">
                    <span className="text-[10px] font-bold uppercase text-teal tracking-wider block mb-0.5">
                      Our verdict
                    </span>
                    <p className="text-xs text-ink/80 leading-relaxed font-sans">
                      {t.verdict}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-ink/75 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Guided paddle through the mangrove channel into the lagoon</span>
                    </div>
                    {t.rating !== null && t.reviewCount !== null && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span>
                          Rated {t.rating.toFixed(1)}/5 · {t.reviewCount} reviews on GetYourGuide
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border-soft flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-ink/60 uppercase tracking-wider block font-sans">
                      Checked {PRICE_CHECKED_DATE}
                    </span>
                    <span className="font-serif text-xl font-bold text-teal">
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
