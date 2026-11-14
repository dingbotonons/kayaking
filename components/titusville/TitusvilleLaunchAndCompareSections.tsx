import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TitusvilleLaunchAndCompareSections() {
  return (
    <>
      {/* Section 3: Two launch areas */}
      <Section bg="seafoam" id="launch-areas">
        <Container>
          <SectionHeader
            eyebrow="Geography &amp; Access"
            title="Two launch areas"
            intro="Where you push off shapes your encounter with nocturnal wildlife and sky darkness."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Launch Area 1 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-teal">
                    Haulover Canal &amp; Mosquito Lagoon
                  </h3>
                </div>
                <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
                  The northern launches, between the Indian River and Mosquito Lagoon, inside Merritt Island National Wildlife Refuge. Famous for manatees by day.
                </p>
              </div>
              <div className="flex items-center gap-2 text-teal text-xs font-semibold pt-4 border-t border-seafoam">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span>Wildlife sanctuary boundary · Ultra-dark nocturnal sky</span>
              </div>
            </div>

            {/* Launch Area 2 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-teal">
                    Kiwanis Island &amp; the Indian River
                  </h3>
                </div>
                <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
                  The Indian River launches around Kiwanis Island Park in Merritt Island, just south of Titusville. Easy access from town, a little more ambient light than Haulover.
                </p>
              </div>
              <div className="flex items-center gap-2 text-teal text-xs font-semibold pt-4 border-t border-seafoam">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Quick highway access · Indian River shoreline launches</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4: Titusville vs Cocoa Beach */}
      <Section bg="white" id="compare-cocoa">
        <Container size="readable">
          <div className="bg-white rounded-[20px] p-6 lg:p-10 border border-teal/10 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
                Head-to-Head Comparison
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal mb-3 leading-snug">
                Titusville vs Cocoa Beach: which should you pick?
              </h2>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Titusville gives you darker skies, wilder water and the Merritt Island refuge. Cocoa Beach gives you more clear-kayak tours and easier evening dining if you&apos;re staying on the beach. Same lagoon system, different vibe.
              </p>
            </div>

            <div className="pt-4 border-t border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm font-semibold text-teal font-sans">
                Planning to stay beachfront?
              </span>
              <Link
                href="/florida/cocoa-beach/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-150 shrink-0"
              >
                Explore Cocoa Beach Guide →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
