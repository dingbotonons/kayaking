import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CocoaBeachLaunchAndOrlandoSections() {
  return (
    <>
      {/* Section 4: Launch sides */}
      <Section bg="white" id="launch-sides">
        <Container>
          <SectionHeader
            eyebrow="Geographic Layout"
            title="Launch sides"
            intro="Understanding the two primary waterways around Cocoa Beach."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm space-y-3 h-full">
              <div className="flex items-center gap-2 text-teal font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-teal" />
                <h3 className="font-serif text-xl font-bold">
                  Banana River (Cocoa Beach side)
                </h3>
              </div>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Launches like Beacon 42 sit on the Banana River, the lagoon between Cocoa Beach and Merritt Island. Closest if you&apos;re staying at the beach.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm space-y-3 h-full">
              <div className="flex items-center gap-2 text-teal font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <h3 className="font-serif text-xl font-bold">
                  Merritt Island (Indian River side)
                </h3>
              </div>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Launches around Merritt Island paddle the Indian River Lagoon itself. A short drive over the causeway from Cocoa Beach.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5: Coming from Orlando? */}
      <Section bg="seafoam" id="coming-from-orlando">
        <Container size="readable">
          <div className="bg-white rounded-[20px] p-6 lg:p-10 border border-teal/10 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
                Day-Trip Logistics
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal mb-3 leading-snug">
                Coming from Orlando?
              </h2>
              <p className="text-base leading-7 text-ink/80 font-sans">
                About an hour east along FL-528 (the Beachline). Many travelers drive over for dinner and the tour, then drive back the same night.
              </p>
            </div>

            <div className="pt-4 border-t border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm font-semibold text-teal font-sans">
                Want route and timing advice?
              </span>
              <Link
                href="/florida/bioluminescent-kayaking-near-orlando/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-150 shrink-0"
              >
                Orlando Day-Trip Guide →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
