import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CocoaBeachTwoGlowsSection() {
  const months = [
    { label: "J", name: "Jan", season: "Winter" },
    { label: "F", name: "Feb", season: "Winter" },
    { label: "M", name: "Mar", season: "Winter" },
    { label: "A", name: "Apr", season: "Winter" },
    { label: "M", name: "May", season: "Winter" },
    { label: "J", name: "Jun", season: "Summer" },
    { label: "J", name: "Jul", season: "Summer" },
    { label: "A", name: "Aug", season: "Summer" },
    { label: "S", name: "Sep", season: "Summer" },
    { label: "O", name: "Oct", season: "Summer" },
    { label: "N", name: "Nov", season: "Winter" },
    { label: "D", name: "Dec", season: "Winter" },
  ];

  return (
    <Section bg="seafoam" id="the-two-glows">
      <Container>
        <SectionHeader
          eyebrow="Year-Round Science"
          title="The two glows"
          intro="Cocoa Beach is the only place on this site with a show in every season — but it's two different shows."
          align="center"
        />

        {/* 2 Glows Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Summer Sparkle */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border-2 border-teal/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-2 h-full absolute left-0 top-0 bg-teal" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7">
                June to early October
              </div>
              <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                Summer: the sparkle
              </h3>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Tiny dinoflagellates light up blue with every paddle stroke, fish trail and hand swish. This is the famous one.
              </p>
            </div>
          </div>

          {/* Winter Comb Jellies */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border-2 border-gold/30 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-2 h-full absolute left-0 top-0 bg-gold" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
                November to May
              </div>
              <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                Winter: the comb jellies
              </h3>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Comb jellies flash bright green-blue as your paddle disturbs them. Calmer water, fewer bugs, cold air.
              </p>
            </div>
          </div>
        </div>

        {/* Month Pills Strip */}
        <div className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-4 text-center font-sans">
            Seasonal Calendar
          </span>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
            {months.map((m, idx) => {
              const isSummer = m.season === "Summer";
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-[12px] flex flex-col items-center justify-center ${
                    isSummer
                      ? "bg-teal text-white shadow-xs"
                      : "bg-seafoam text-teal border border-teal/10"
                  }`}
                >
                  <span className="text-xs font-bold uppercase block">
                    {m.name}
                  </span>
                  <span
                    className={`text-[10px] font-semibold mt-0.5 ${
                      isSummer ? "text-seafoam" : "text-teal"
                    }`}
                  >
                    {isSummer ? "Sparkle" : "Jellies"}
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
