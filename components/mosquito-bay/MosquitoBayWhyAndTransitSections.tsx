import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MosquitoBayWhyAndTransitSections() {
  const transitCards = [
    {
      title: "Ferry from Ceiba",
      description: "The budget route: about an hour on the water from Ceiba on Puerto Rico's east coast. Book ahead — ferries sell out on busy weekends.",
      iconNumber: "1",
    },
    {
      title: "Fly in",
      description: "Small planes from San Juan and Ceiba get you there in minutes and give you the best views of the island. Pricier, much faster.",
      iconNumber: "2",
    },
    {
      title: "Stay the night",
      description: "Non-negotiable for almost everyone: tours end long after the last ferry back. Base yourself in Esperanza, the south-coast town where tours meet — restaurants, guesthouses and the bay all within a short drive.",
      iconNumber: "3",
    },
  ];

  return (
    <>
      {/* Section 3: Why is it so bright here? */}
      <Section bg="seafoam" id="why-so-bright">
        <Container>
          <div className="bg-white rounded-[20px] border border-teal/10 p-6 lg:p-12 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-teal font-bold text-xs uppercase tracking-wider mb-4 border border-teal/10 h-7">
                Marine Biology &amp; Geography
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal mb-4 tracking-tight leading-snug">
                Why is it so bright here?
              </h2>
              <p className="text-base leading-7 text-ink/80 mb-8 font-sans">
                The bay is shallow and warm, ringed by mangroves, and connected to the sea by a narrow channel. The dinoflagellates that drift in mostly stay in — and the mangrove-fringed water feeds them. The result is a concentration of glowing organisms that no other bay in this guide matches.
              </p>

              {/* 3 Fact Chips */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam border border-teal/20 text-teal text-xs font-bold shadow-xs h-7">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>Guinness World Record holder</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam border border-teal/20 text-teal text-xs font-bold shadow-xs h-7">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  <span>Glows all year</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-gold/40 text-ink text-xs font-bold italic shadow-xs h-7">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  <span>Pyrodinium bahamense</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4: Getting to Vieques — and staying over */}
      <Section bg="white" id="getting-to-vieques">
        <Container>
          <SectionHeader
            eyebrow="Island Transit &amp; Lodging"
            title="Getting to Vieques — and staying over"
            intro="You cannot take a late-night ferry back to the main island after your tour. Plan your travel accordingly."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {transitCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm mb-4">
                    {card.iconNumber}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-teal mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base leading-7 text-ink/80 font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
