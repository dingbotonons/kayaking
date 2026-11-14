import { Lightbulb, Car, Umbrella } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LaPargueraSwimAndLogisticsSections() {
  const steps = [
    {
      num: "01",
      title: "Boat out at dusk",
      desc: "Tours leave the La Parguera waterfront in Lajas and motor through the mangrove cays as it gets dark.",
    },
    {
      num: "02",
      title: "Anchor in the bay",
      desc: "The boat anchors where the glow is strongest that night.",
    },
    {
      num: "03",
      title: "In you go",
      desc: "Swimmers slip into the warm water in life vests. Every movement lights up — arms, hair, splashes.",
    },
    {
      num: "04",
      title: "Rinse rules",
      desc: "No sunscreen, oils or bug spray before swimming: they harm the organisms that make the glow. Shower first, glow second.",
    },
  ];

  return (
    <>
      {/* Section 3: How the swim works */}
      <Section bg="seafoam" id="how-swim-works">
        <Container>
          <SectionHeader
            title="How the swim works"
            intro="What to expect from departure to slip-in at the cays."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-[20px] border border-teal/15 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-teal/40 block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base leading-7 text-ink/75 font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: The trade-off: gentler glow, whole-body immersion */}
      <Section bg="white">
        <Container size="readable">
          <div className="bg-seafoam border border-teal/15 rounded-[20px] p-6 lg:p-10 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-teal mb-4 leading-snug">
              The trade-off: gentler glow, whole-body immersion
            </h2>
            <p className="text-ink/85 text-base leading-7 mb-4 font-sans">
              Mosquito Bay in Vieques is measurably brighter. Laguna Grande is closer to San Juan. But neither allows you in the water. La Parguera is the only place in Puerto Rico where you look down and see your own limbs glowing blue in the dark.
            </p>
            <p className="text-ink/80 text-sm leading-relaxed font-sans">
              Because motorboat traffic and tidal flow dilute the organism concentration compared to landlocked bays, picking a dark new-moon window is doubly important here. On a bright moonlit night the glow can feel faint; on a dark night it is strong enough to light up your arms as you swim.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 5: Southwest coast logistics */}
      <Section bg="seafoam">
        <Container>
          <SectionHeader
            title="Southwest coast logistics"
            intro="Getting to Lajas and pairing the trip with Puerto Rico's scenic southwest coast."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-[16px] bg-seafoam flex items-center justify-center text-teal mb-2">
                <Car className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-teal">
                Getting there
              </h3>
              <p className="text-base leading-7 text-ink/80 font-sans">
                About 2 to 2.5 hours from San Juan via PR-52 and PR-2. A rental car is essential; rideshares do not operate reliably for late-night returns from the southwest coast.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-[16px] bg-seafoam flex items-center justify-center text-teal mb-2">
                <Umbrella className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-teal">
                Where to stay
              </h3>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Stay in the fishing village of La Parguera itself for walkable access to evening docks, or in nearby Rincón, Cabo Rojo or Ponce for a broader southwest road trip.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
