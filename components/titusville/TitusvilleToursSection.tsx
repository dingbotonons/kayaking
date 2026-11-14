import { AFFILIATE_REL } from "@/lib/affiliates";
import { getToursByLocation, PRICE_CHECKED_DATE } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Only tours with status "current" in the database render. The older
// Titusville listings are held for a bookability re-check, so this page
// currently shows the one confirmed GetYourGuide tour.
const TOURS = getToursByLocation("florida/titusville");

export function TitusvilleToursSection() {
  return (
    <Section bg="white" id="tours">
      <Container>
        {/* Disclosure Line strictly placed above the cards */}
        <div className="mb-6 text-xs text-ink/70 flex items-center justify-center text-center font-sans">
          <span>Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.</span>
        </div>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="The best Titusville bioluminescent tours"
          intro="The one Titusville listing we could verify on GetYourGuide: a clear-kayak tour launching from Haulover Canal, inside the Merritt Island refuge."
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
                    {t.duration && (
                      <span className="text-xs text-ink/60 font-medium">
                        {t.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug">
                    {t.name}
                  </h3>

                  {t.launchPoint && (
                    <p className="text-xs text-ink/70 font-sans mb-3">
                      Launch: {t.launchPoint}
                    </p>
                  )}

                  <p className="text-base leading-7 text-ink/80 font-sans mb-6">
                    {t.verdict}
                  </p>
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
