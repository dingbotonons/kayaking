import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/src/data/tours";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { LocationPinIcon, ClockIcon } from "./Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface BestToursSectionProps {
  tours: Tour[];
}

export function BestToursSection({ tours }: BestToursSectionProps) {
  return (
    <Section
      bg="seafoam"
      aria-labelledby="best-tours-heading"
      id="best-tours"
      className="border-t border-seafoam-border"
    >
      <Container>
        <SectionHeader
          titleId="best-tours-heading"
          title="Best bioluminescent kayaking tours"
          intro="Handpicked night paddles listed on GetYourGuide, with launch points and our honest best-for picks."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {tours.map((tour) => {
            const affiliateHref = tour.affiliateUrl;

            return (
              <div
                key={tour.id}
                className="custom-card flex flex-col h-full overflow-hidden group bg-white border border-border-soft"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-ink-muted px-3 py-1 rounded-full text-xs font-bold border border-border-soft shadow-sm h-7 flex items-center">
                    {tour.provider}
                  </span>
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-teal px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm h-7">
                    <ClockIcon className="w-4 h-4" />
                    {tour.duration}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-teal mb-2 leading-snug">
                      {tour.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-ink-muted text-xs mb-4">
                      <LocationPinIcon className="w-4 h-4 text-teal shrink-0" />
                      <span>Launch point: {tour.launchPoint}</span>
                    </div>

                    {/* Honest Verdict Banner */}
                    <div className="bg-seafoam/60 border border-seafoam-border rounded-[16px] p-4 mb-6">
                      <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
                        Our Verdict
                      </span>
                      <p className="text-sm text-ink font-medium leading-relaxed">
                        {tour.verdict}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                    <div>
                      <span className="text-xs text-ink-muted block">
                        Prices checked {tour.priceCheckedDate}
                      </span>
                      <span className="font-serif text-xl font-bold text-teal">
                        {tour.priceFormatted}
                      </span>
                    </div>
                    <a
                      href={affiliateHref}
                      target="_blank"
                      rel={AFFILIATE_REL}
                      className="inline-flex items-center justify-center text-sm bg-coral hover:bg-coral-hover text-white h-12 px-6 rounded-full font-bold shadow-sm transition-all duration-150 active:scale-95"
                    >
                      Check dates
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Button */}
        <div className="text-center">
          <Link
            href="/best-bioluminescent-kayaking-tours/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white border border-border-soft text-teal text-sm font-bold shadow-sm hover:border-teal/50 transition-all duration-150 active:scale-95"
          >
            Compare all tours →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
