import Image from "next/image";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PICKS: Tour[] = ["t922494", "t140169", "t437542"]
  .map((id) => getTourById(id))
  .filter((t): t is Tour => Boolean(t));

export function PuertoRicoToursSection() {
  return (
    <Section bg="white" id="tours">
      <Container>
        {/* Disclosure Line strictly placed above the cards */}
        <div className="mb-6 text-xs text-ink/70 flex items-center justify-center text-center font-sans">
          <span>Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.</span>
        </div>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="Featured tours"
          intro="Bio bay trips on GetYourGuide with launch site details and checked pricing."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PICKS.map((t) => {
            return (
              <div
                key={t.id}
                className="bg-white rounded-[20px] overflow-hidden border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={t.image}
                      alt={t.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-ink/80 text-xs font-bold px-3 py-1 rounded-full shadow-xs h-7 flex items-center">
                      {t.provider}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-teal text-xs font-bold px-3 py-1 rounded-full shadow-xs h-7 flex items-center">
                      {t.duration}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-teal mb-2 leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs text-ink/70 font-sans mb-3">
                      Launch: {t.launchPoint}
                    </p>

                    <div className="p-3 rounded-[16px] bg-seafoam/60 border border-teal/10 mb-4">
                      <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
                        Our verdict
                      </span>
                      <p className="text-sm text-ink/80 font-sans">
                        {t.verdict}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border-soft flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-ink/60 uppercase tracking-wider block font-sans">
                      Checked price
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
