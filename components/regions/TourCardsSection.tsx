import Image from "next/image";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * GetYourGuide tour cards from the central tour database.
 * variant "hub" mirrors FloridaToursSection (image header cards);
 * variant "location" mirrors CocoaBeachToursSection (text cards).
 * An optional seasonNote renders under the header (Washington's
 * tours are seasonal — the database requires the note).
 */
export function TourCardsSection({
  tourIds,
  title,
  intro,
  seasonNote,
  variant = "location",
  bg = "seafoam",
  sectionVariant = "standard",
  className = "",
  showDisclosure = true,
}: {
  tourIds: string[];
  title: string;
  intro: string;
  seasonNote?: string;
  variant?: "hub" | "location";
  bg?: "white" | "seafoam";
  sectionVariant?: "standard" | "hero" | "cta" | "compact";
  className?: string;
  showDisclosure?: boolean;
}) {
  const picks: Tour[] = tourIds
    .map((id) => getTourById(id))
    .filter((t): t is Tour => Boolean(t));

  if (picks.length === 0) return null;

  return (
    <Section bg={bg} variant={sectionVariant} className={className} id="tours">
      <Container>
        {/* Disclosure line strictly placed above the cards */}
        {showDisclosure && (
          <div className="mb-6 text-xs text-ink/70 flex items-center justify-center text-center font-sans">
            <span>
              Prices and availability come from GetYourGuide. We may earn a
              commission — it never changes the price you pay.
            </span>
          </div>
        )}

        <SectionHeader
          eyebrow={showDisclosure ? `Prices checked ${PRICE_CHECKED_DATE}` : undefined}
          title={title}
          intro={intro}
          align="center"
        />

        {seasonNote && (
          <div className="mb-10 lg:mb-12 -mt-4 bg-cream border border-gold/30 rounded-[20px] p-4 text-center">
            <p className="text-sm font-semibold text-ink/80 font-sans">
              {seasonNote}
            </p>
          </div>
        )}

        <div
          className={`grid grid-cols-1 ${
            picks.length === 1
              ? "md:grid-cols-2 lg:grid-cols-3"
              : picks.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
          } gap-6 lg:gap-8`}
        >
          {picks.map((t) =>
            variant === "hub" ? (
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
                    {t.duration && (
                      <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-teal text-xs font-bold px-3 py-1 rounded-full shadow-xs h-7 flex items-center">
                        {t.duration}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-teal mb-2 leading-snug">
                      {t.name}
                    </h3>
                    {t.launchPoint && (
                      <p className="text-xs text-ink/70 font-sans mb-3">
                        Launch: {t.launchPoint}
                      </p>
                    )}

                    <div className="p-3 rounded-[16px] bg-seafoam/60 border border-teal/10 mb-4">
                      <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
                        Our verdict
                      </span>
                      <p className="text-sm text-ink/80 font-sans">{t.verdict}</p>
                    </div>

                    {t.rating !== null && t.reviewCount !== null && (
                      <p className="text-xs text-ink/60 font-sans">
                        Rated {t.rating.toFixed(1)}/5 · {t.reviewCount} reviews on
                        GetYourGuide
                      </p>
                    )}
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
            ) : (
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

                  <div className="p-4 rounded-[16px] bg-seafoam/50 border border-teal/10 mb-6">
                    <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
                      Our verdict
                    </span>
                    <p className="text-sm text-ink/80 font-sans">{t.verdict}</p>
                  </div>

                  {t.rating !== null && t.reviewCount !== null && (
                    <p className="text-xs text-ink/60 font-sans -mt-3 mb-6">
                      Rated {t.rating.toFixed(1)}/5 · {t.reviewCount} reviews on
                      GetYourGuide
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
            )
          )}
        </div>
      </Container>
    </Section>
  );
}
