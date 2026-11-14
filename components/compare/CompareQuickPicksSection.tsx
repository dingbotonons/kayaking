import Image from "next/image";
import { MapPin, ExternalLink } from "@/components/ui/Icons";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CARD_DEFS = [
  {
    id: "t922494",
    badge: "Brightest bay on Earth",
    badgeClass: "bg-cream text-teal border border-gold/30",
    location: "Mosquito Bay, Vieques",
    anchorId: "#tour-detail-1" as string | null,
  },
  {
    id: "t1470618",
    badge: "Best in Florida",
    badgeClass: "bg-seafoam text-teal",
    location: "Cocoa Beach, Florida",
    anchorId: "#tour-detail-2" as string | null,
  },
  {
    id: "t140169",
    badge: "Easiest from San Juan",
    badgeClass: "bg-seafoam text-teal",
    location: "Laguna Grande, Fajardo",
    anchorId: "#tour-detail-3" as string | null,
  },
  {
    id: "t400689",
    badge: "Transport included",
    badgeClass: "bg-cream text-teal border border-gold/30",
    location: "from San Juan to Fajardo",
    anchorId: null as string | null,
  },
];

export function CompareQuickPicksSection() {
  const cards = CARD_DEFS.map((def) => {
    const tour = getTourById(def.id)!;
    return {
      ...def,
      provider: "GetYourGuide",
      title: tour.name,
      price: tour.priceFormatted.replace(/^from /, ""),
      url: tour.affiliateUrl,
      image: tour.image,
      imageAlt: tour.imageAlt,
    };
  });

  return (
    <Section id="quick-picks" bg="seafoam">
      <Container>
        <SectionHeader
          title="Quick picks"
          description="Selected for glow strength, clear booking terms, and night-sky conditions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 h-7 inline-flex items-center rounded-full text-xs font-bold ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                  <span className="text-xs font-semibold text-teal bg-seafoam px-2.5 h-7 inline-flex items-center rounded-md">
                    {card.provider}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs text-ink/70 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-teal shrink-0" />
                  <span>{card.location}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-teal/10 flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-xs text-ink/50">from</span>
                  <span className="font-serif text-xl font-bold text-teal">{card.price}</span>
                </div>
                {card.anchorId ? (
                  <a
                    href={card.anchorId}
                    className="bg-coral hover:bg-[#ff7b52] text-white h-10 px-4 rounded-full text-xs font-bold transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Read details</span>
                  </a>
                ) : (
                  <a
                    href={card.url}
                    target="_blank"
                    rel={AFFILIATE_REL}
                    className="bg-coral hover:bg-[#ff7b52] text-white h-10 px-4 rounded-full text-xs font-bold transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Check dates</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
