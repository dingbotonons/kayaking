import { Compass, Car, Sun, Moon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LagunaGrandeMangroveAndLogisticsSections() {
  return (
    <>
      {/* Section 3: The mangrove paddle */}
      <Section bg="seafoam">
        <Container size="readable">
          <div className="text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal mb-4 leading-snug">
              The mangrove paddle
            </h2>
            <p className="text-ink/85 text-base leading-7 mb-8 font-sans">
              This trip starts differently: you launch at Las Croabas, Fajardo&apos;s waterfront village, and paddle single file through a narrow channel roofed by red mangroves. It&apos;s nearly dark under the trees. Then the channel opens into Laguna Grande — and every paddle stroke, fish and fingertip trail lights up in the open water. The paddle back through the mangroves, in full darkness, is half the adventure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold text-teal border border-teal/15 shadow-sm h-8">
                <Compass className="w-4 h-4 text-teal" />
                Las Croabas Launch
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold text-teal border border-teal/15 shadow-sm h-8">
                <Compass className="w-4 h-4 text-teal" />
                Red Mangrove Canal
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold text-teal border border-teal/15 shadow-sm h-8">
                <Compass className="w-4 h-4 text-teal" />
                Dinoflagellate Glow
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4: Fajardo logistics */}
      <Section bg="white">
        <Container>
          <SectionHeader
            title="Fajardo logistics"
            intro="Practical planning details for reaching Las Croabas and making the most of your evening."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1: From San Juan */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[16px] bg-seafoam flex items-center justify-center mb-4 text-teal">
                  <Car className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-2">
                  From San Juan
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  About 50–60 minutes east along Route 66 and PR-3. Easy driving on modern toll highways.
                </p>
              </div>
            </div>

            {/* Card 2: Pair with El Yunque */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[16px] bg-seafoam flex items-center justify-center mb-4 text-teal">
                  <Sun className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-2">
                  Pair with El Yunque
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  The rainforest sits directly on the drive from San Juan to Fajardo. Perfect combo day.
                </p>
              </div>
            </div>

            {/* Card 3: Two tour times */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-[16px] bg-seafoam flex items-center justify-center mb-4 text-teal">
                  <Moon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-2">
                  Two tour times
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  Most operators run sunset (easier paddling) and late evening (darker skies, brighter glow).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
