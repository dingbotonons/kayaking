import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface OptionCard {
  tour: Tour;
  chip: string;
  description: string;
}

const CARDS: OptionCard[] = [
  {
    tour: getTourById("t400689")!,
    chip: "Fajardo with transport",
    description:
      "The standard choice: pickup in San Juan, the drive east handled for you, a paddle through the mangrove channel into Laguna Grande, and back the same evening. No car to park, no driving in the dark on unfamiliar roads.",
  },
  {
    tour: getTourById("t279767")!,
    chip: "Rainforest + bio bay",
    description:
      "The full-day version: El Yunque rainforest by day, then on to Fajardo for the bio bay kayak after dark, with transport throughout. A long day — pick it if El Yunque was already on your list.",
  },
  {
    tour: getTourById("t406943")!,
    chip: "La Parguera with transport",
    description:
      "The swim option without the cross-island drive: transport from San Juan to La Parguera, a boat trip on the bay, and a swim in the glowing water — the only bio bay where swimming is allowed.",
  },
];

export function SanJuanOptionsDetailSection() {
  return (
    <Section bg="white" id="the-options-in-detail">
      <Container>
        {/* Affiliate Disclosure directly above first card */}
        <p className="text-xs text-ink/60 text-center max-w-2xl mx-auto mb-6 italic font-sans">
          Prices and availability come from GetYourGuide. We may earn a commission — it never changes the price you pay.
        </p>

        <SectionHeader
          eyebrow={`Prices checked ${PRICE_CHECKED_DATE}`}
          title="The options in detail"
          intro="Detailed breakdown of each departure format from San Juan, including what is provided and who it fits best."
          align="center"
        />

        {/* 3 Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {CARDS.map(({ tour, chip, description }) => (
            <div
              key={tour.id}
              className="bg-white rounded-[20px] border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal bg-seafoam px-3 py-1 rounded-full h-7 inline-flex items-center">
                    {chip}
                  </span>
                  <span className="text-xs font-semibold text-ink/70 bg-gray-100 px-2 py-0.5 rounded-md">
                    GetYourGuide
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-snug">
                  {tour.name}
                </h3>

                <p className="text-sm leading-relaxed text-ink/80 mb-6 font-sans">
                  {description}
                </p>

                {tour.rating !== null && tour.reviewCount !== null && (
                  <p className="text-xs text-ink/60 font-sans mt-auto">
                    Rated {tour.rating.toFixed(1)}/5 · {tour.reviewCount} reviews on GetYourGuide
                  </p>
                )}
              </div>

              <div className="p-6 pt-0 border-t border-border-soft flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-ink/60 uppercase tracking-wider block font-sans">
                    Checked {PRICE_CHECKED_DATE}
                  </span>
                  <span className="font-serif text-xl font-bold text-teal">
                    {tour.priceFormatted}
                  </span>
                </div>
                <a
                  href={tour.affiliateUrl}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-150"
                >
                  Check dates
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
