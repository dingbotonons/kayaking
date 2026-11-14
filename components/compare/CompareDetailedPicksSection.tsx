import Image from "next/image";
import { ExternalLink, Lightbulb, Compass, Clock } from "@/components/ui/Icons";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { getTourById } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CompareDetailedPicksSection() {
  const viequesTour = getTourById("t922494")!;
  const cocoaTour = getTourById("t1470618")!;
  const fajardoTour = getTourById("t140169")!;
  const gygViequesUrl = viequesTour.affiliateUrl;
  const gygCocoaUrl = cocoaTour.affiliateUrl;
  const gygFajardoUrl = fajardoTour.affiliateUrl;

  return (
    <Section id="the-detailed-picks" bg="seafoam">
      <Container>
        <SectionHeader
          title="The detailed picks"
          description="A closer look at the three paddles we rate highest."
        />

        <div className="space-y-8">
          {/* Detail 1: Mosquito Bay */}
          <article
            id="tour-detail-1"
            className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full aspect-[4/3] lg:aspect-auto">
              <Image
                src={viequesTour.image}
                alt={viequesTour.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cream text-amber-900 border border-gold/40 px-3 h-7 inline-flex items-center rounded-full text-xs font-bold shadow-sm">
                  Ranked #1 for Glow
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Mosquito Bay, Vieques — the brightest
                  </h3>
                  <div className="text-xs font-bold text-teal bg-seafoam px-3 h-7 inline-flex items-center rounded-full">
                    from $112 on GetYourGuide
                  </div>
                </div>

                <div className="space-y-4 my-6">
                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Compass className="w-4 h-4 text-teal" />
                      <span>Why we picked it</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      Mosquito Bay holds the Guinness World Record for the brightest bioluminescence. On a dark night the water doesn&apos;t just sparkle — it glows.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Lightbulb className="w-4 h-4 text-gold" />
                      <span>Good to know</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      You must sleep at least one night on Vieques: tours end long after the last ferry back. Fly or ferry over from Ceiba, paddle that night, and enjoy the island the next day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-ink/60 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal" />
                  <span>Clear kayaks • 2 hr duration</span>
                </span>
                <a
                  href={gygViequesUrl}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Check dates</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

          {/* Detail 2: Cocoa Beach */}
          <article
            id="tour-detail-2"
            className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full aspect-[4/3] lg:aspect-auto">
              <Image
                src={cocoaTour.image}
                alt={cocoaTour.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-seafoam text-teal border border-teal/30 px-3 h-7 inline-flex items-center rounded-full text-xs font-bold shadow-sm">
                  Mainland Favorite
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Cocoa Beach, Florida — the easy yes
                  </h3>
                  <div className="text-xs font-bold text-teal bg-seafoam px-3 h-7 inline-flex items-center rounded-full">
                    from $100.03 on GetYourGuide
                  </div>
                </div>

                <div className="space-y-4 my-6">
                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Compass className="w-4 h-4 text-teal" />
                      <span>Why we picked it</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      A clear kayak over the Banana River in summer is the strongest version of this trip in the mainland US, an hour from Orlando.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Lightbulb className="w-4 h-4 text-gold" />
                      <span>Good to know</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      Summer is the sparkle season; in winter the same lagoon switches to comb jellies, a different and gentler show.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-ink/60 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal" />
                  <span>Clear bottom hull • 1.5 hr paddle</span>
                </span>
                <a
                  href={gygCocoaUrl}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Check dates</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

          {/* Detail 3: Laguna Grande */}
          <article
            id="tour-detail-3"
            className="bg-white rounded-[20px] overflow-hidden border border-teal/15 shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full aspect-[4/3] lg:aspect-auto">
              <Image
                src={fajardoTour.image}
                alt={fajardoTour.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-seafoam text-teal border border-teal/30 px-3 h-7 inline-flex items-center rounded-full text-xs font-bold shadow-sm">
                  Easiest Day Trip
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Laguna Grande, Fajardo — the convenient one
                  </h3>
                  <div className="text-xs font-bold text-teal bg-seafoam px-3 h-7 inline-flex items-center rounded-full">
                    from $72.48 on GetYourGuide
                  </div>
                </div>

                <div className="space-y-4 my-6">
                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Compass className="w-4 h-4 text-teal" />
                      <span>Why we picked it</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      The closest bio bay to San Juan, with transport-included options, so a cruise or city-break visitor can do it in one evening.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-teal flex items-center gap-2 mb-1">
                      <Lightbulb className="w-4 h-4 text-gold" />
                      <span>Good to know</span>
                    </h4>
                    <p className="text-sm text-ink/80 leading-relaxed pl-6">
                      You paddle through a mangrove channel to reach the lagoon — book the later departure if you can — the sky is fully dark by then, and the glow shows at its strongest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-ink/60 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal" />
                  <span>Mangrove canal paddle • 2 hr tour</span>
                </span>
                <a
                  href={gygFajardoUrl}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Check dates</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
