import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface MonthPill {
  month: string;
  glowType: "Jellies" | "Sparkle";
}

const MONTHS: MonthPill[] = [
  { month: "Jan", glowType: "Jellies" },
  { month: "Feb", glowType: "Jellies" },
  { month: "Mar", glowType: "Jellies" },
  { month: "Apr", glowType: "Jellies" },
  { month: "May", glowType: "Jellies" },
  { month: "Jun", glowType: "Sparkle" },
  { month: "Jul", glowType: "Sparkle" },
  { month: "Aug", glowType: "Sparkle" },
  { month: "Sep", glowType: "Sparkle" },
  { month: "Oct", glowType: "Sparkle" },
  { month: "Nov", glowType: "Jellies" },
  { month: "Dec", glowType: "Jellies" },
];

export function FloridaTwoGlowsSection() {
  return (
    <Section bg="white" id="seasons">
      <Container>
        <SectionHeader
          eyebrow="Year-Round Phenomenon"
          title="The two glows"
          intro="One lagoon, two entirely different natural light shows across the year."
          align="center"
        />

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Summer Sparkle */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border-2 border-teal/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7">
                Summer Glow · Jun – Oct
              </div>
              <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                Summer: the sparkle
              </h3>
              <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
                Dinoflagellates light the water blue with every paddle stroke. Peak glow, warm nights, the famous photos.
              </p>
            </div>
            <div className="space-y-2 text-sm text-ink/70 pt-4 border-t border-seafoam">
              <div className="flex items-center gap-2">
                <span className="font-bold text-teal">Organism:</span>
                <span>Pyrodinium bahamense (dinoflagellate)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-teal">Effect:</span>
                <span>Electric blue swirls and sparkling paddle trails</span>
              </div>
            </div>
          </div>

          {/* Winter Comb Jellies */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
                Winter Glow · Nov – May
              </div>
              <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                Winter: the comb jellies
              </h3>
              <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
                Ctenophores flash blue-green when disturbed by paddle or hand. Cool air, calm water, fewer bugs.
              </p>
            </div>
            <div className="space-y-2 text-sm text-ink/70 pt-4 border-t border-seafoam">
              <div className="flex items-center gap-2">
                <span className="font-bold text-teal">Organism:</span>
                <span>Mnemiopsis leidyi (comb jelly, non-stinging)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-teal">Effect:</span>
                <span>Pulsing rainbow iridescence and gentle glows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Month by month pill strip */}
        <div className="bg-seafoam/60 rounded-[20px] p-6 border border-teal/10">
          <h4 className="font-serif text-lg font-bold text-teal mb-4 text-center">
            Month-by-month calendar
          </h4>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
            {MONTHS.map((m) => {
              const isSparkle = m.glowType === "Sparkle";
              return (
                <div
                  key={m.month}
                  className={`p-2.5 rounded-[12px] flex flex-col items-center justify-center ${
                    isSparkle
                      ? "bg-teal text-white shadow-xs"
                      : "bg-white text-ink border border-teal/10"
                  }`}
                >
                  <span className="text-xs font-bold uppercase block">
                    {m.month}
                  </span>
                  <span
                    className={`text-[10px] font-semibold mt-0.5 ${
                      isSparkle ? "text-seafoam" : "text-teal"
                    }`}
                  >
                    {m.glowType}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
