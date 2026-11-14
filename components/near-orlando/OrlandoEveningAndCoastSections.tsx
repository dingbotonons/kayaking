import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OrlandoEveningAndCoastSections() {
  const steps = [
    {
      num: "01",
      title: "Finish the parks by late afternoon",
      details: "Head back to your hotel to freshen up or drive straight out before rush hour peaks.",
    },
    {
      num: "02",
      title: "Drive east before dark — about an hour to the coast",
      details: "Easy highway drive along SR 528 Beachline Expressway or SR 50 towards Titusville/Cocoa Beach with sunset views.",
    },
    {
      num: "03",
      title: "Paddle after dark, home around midnight — or stay the night at the beach",
      details: "Launches happen in total darkness. Most paddlers are off the water by 10:30 PM, back in Orlando by midnight.",
    },
  ];

  return (
    <>
      {/* Section 3: How the evening runs */}
      <Section bg="seafoam" id="evening-timeline">
        <Container>
          <SectionHeader
            eyebrow="Trip Logistics"
            title="How the evening runs"
            intro="A realistic timeline for pairing theme parks with a night glow paddle."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-4xl font-serif font-extrabold text-teal/30 mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base leading-7 text-ink/80 font-sans">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: Space Coast Pairing Callout */}
      <Section bg="white" id="coast-pairing">
        <Container size="readable">
          <div className="bg-white rounded-[20px] p-6 lg:p-10 border border-teal/10 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal block h-7">
              Pair with Kennedy Space Center
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Make a whole day of it on the Space Coast
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Spend the morning and afternoon exploring rocket gardens and launch pads at Kennedy Space Center Visitor Complex, grab early seafood on the lagoon, and push off in kayaks as night falls.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
