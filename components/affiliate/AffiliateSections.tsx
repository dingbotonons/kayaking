import Link from "next/link";
import { CreditCard, Scale, Link2, HeartHandshake, ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function AffiliateSections() {
  return (
    <>
      {/* 4 Cards Grid: The Four Sections */}
      <Section bg="seafoam">
        <Container size="readable">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Section 1: How we earn */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-teal mb-3">
                  How we earn
                </h2>
                <p className="text-sm text-ink/80 leading-relaxed">
                  When you book a tour on GetYourGuide after clicking a link or button on this site, GetYourGuide may pay us a commission. The price you pay is the same as booking direct — the commission comes out of the booking site&apos;s side, not your pocket.
                </p>
              </div>
            </div>

            {/* Section 2: How it affects our content */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal mb-6">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-teal mb-3">
                  How it affects our content
                </h2>
                <p className="text-sm text-ink/80 leading-relaxed">
                  It doesn&apos;t buy placement. Rankings and picks follow the criteria on our How We Rank Tours page, and operators cannot pay to be listed or ranked higher. We cover locations where commissions are small or nonexistent — California&apos;s best bay is mostly direct-booking — because the guide comes first.
                </p>
              </div>
            </div>

            {/* Section 3: How to spot an affiliate link */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal mb-6">
                  <Link2 className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-teal mb-3">
                  How to spot an affiliate link
                </h2>
                <p className="text-sm text-ink/80 leading-relaxed">
                  Every tour card and price button on this site is an affiliate link. Pages with prices carry a short disclosure above the first price, and this page is linked from every footer.
                </p>
              </div>
            </div>

            {/* Section 4: Our promise */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-teal mb-3">
                  Our promise
                </h2>
                <p className="text-sm text-ink/80 leading-relaxed">
                  If a tour is on this site, it&apos;s because it belongs in the comparison. If we wouldn&apos;t book it on a good dark night ourselves, it doesn&apos;t get a pick label — commission or not.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Questions Bar */}
      <Section bg="white">
        <Container size="readable">
          <div className="bg-seafoam/40 border border-teal/20 rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <p className="font-serif text-xl font-bold text-teal">
                Questions about how this site works?
              </p>
              <p className="text-sm text-ink/75">
                Explore our ranking benchmarks and predictive forecast models.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/how-we-rank-tours"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-colors"
              >
                <span>How We Rank Tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/glow-forecast-method"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-colors"
              >
                <span>Glow Forecast Method</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
