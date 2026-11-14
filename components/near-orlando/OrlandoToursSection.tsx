import { AFFILIATE_REL } from "@/lib/affiliates";
import { getToursByLocation, PRICE_CHECKED_DATE } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TOURS = getToursByLocation("florida/bioluminescent-kayaking-near-orlando");

export function OrlandoToursSection() {
  return (
    <Section bg="white" id="tours">
      <Container>
        {/* Exact Disclosure Line above cards */}
        <div className="mb-6 text-xs text-ink/70 flex items-center justify-center text-center font-sans">
          <span>Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.</span>
        </div>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="Tours within an hour of Orlando"
          intro="Evening guided departures easily reached via FL-528 or SR-50 with checked pricing."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TOURS.map((t) => {
            return (
              <div
                key={t.id}
                className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-ink/70 uppercase tracking-wider bg-seafoam px-3 py-1 rounded-full h-7 inline-flex items-center">
                      {t.provider}
                    </span>
                    {t.duration ? (
                      <span className="text-xs text-ink/60 font-medium">
                        {t.duration}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug">
                    {t.name}
                  </h3>

                  <p className="text-xs text-ink/70 font-sans mb-3">
                    Launch: {t.launchPoint}
                  </p>

                  <div className="p-4 rounded-[16px] bg-seafoam/50 border border-teal/10 mb-6">
                    <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
                      Our verdict
                    </span>
                    <p className="text-sm text-ink/80 font-sans">
                      {t.verdict}
                    </p>
                  </div>

                  {t.rating !== null && t.reviewCount !== null && (
                    <p className="text-xs text-ink/60 font-sans -mt-3 mb-6">
                      Rated {t.rating.toFixed(1)}/5 · {t.reviewCount} reviews on GetYourGuide
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-ink/60 uppercase tracking-wider block font-sans">
                      Price checked
                    </span>
                    <span className="font-serif text-xl font-extrabold text-teal">
                      {t.priceFormatted}
                    </span>
                  </div>
                  <a
                    href={t.affiliateUrl}
                    target="_blank"
                    rel={AFFILIATE_REL}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-150"
                  >
                    Check Dates
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
