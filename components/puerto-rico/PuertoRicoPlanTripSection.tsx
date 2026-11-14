import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PuertoRicoPlanTripSection() {
  const tips = [
    {
      title: "Getting there",
      highlight: "Vieques Ferry vs Flight vs Drive",
      details: "For Vieques, take the passenger ferry from Ceiba (advance booking essential) or fly from Isla Grande (SIG) or SJU. For Fajardo, drive ~1 hour east from San Juan or book a tour with round-trip hotel transport.",
    },
    {
      title: "Where to stay",
      highlight: "Vieques Overnight vs San Juan Base",
      details: "Vieques bio bay tours end late, usually after the last ferry back to the main island. Plan to stay overnight in Esperanza or Isabel II. If basing in San Juan, Fajardo is the easiest evening day-trip option.",
    },
    {
      title: "Timing & moon",
      highlight: "Target the Dark Window",
      details: "While Puerto Rico's bio bays glow year-round, the brightest contrast is always during the dark window (3 days before to 3 days after the new moon). Full moon nights can wash out the glow.",
    },
  ];

  return (
    <Section bg="seafoam" id="plan">
      <Container>
        {/* Editorial Container: One organism, three bays */}
        <div className="bg-white rounded-[20px] p-6 lg:p-10 border border-teal/10 shadow-sm mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
              Biology &amp; Climate
            </div>
            <h3 className="font-serif text-3xl font-bold text-teal mb-4 leading-snug">
              One organism, three bays
            </h3>
            <p className="text-base leading-7 text-ink/80 mb-6 font-sans">
              All three bays glow thanks to <strong className="font-bold text-teal">Pyrodinium bahamense</strong>, a dinoflagellate that loves warm, sheltered, mangrove-fringed water — exactly what Puerto Rico&apos;s coasts offer all year. The bays differ in concentration and setting, not in the creature making the light. Brightness peaks in the drier months, December to April, and always on dark, moonless nights.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold border border-teal/20 h-7">
                <span className="w-2 h-2 rounded-full bg-teal" />
                Pyrodinium bahamense
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-ink text-xs font-bold border border-gold/40 h-7">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Peak: Dec – Apr
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-ink text-xs font-bold border border-teal/20 h-7">
                <span className="w-2 h-2 rounded-full bg-teal" />
                Dark moonless nights
              </span>
            </div>
          </div>
        </div>

        <SectionHeader
          eyebrow="Island Travel Logistics"
          title="Plan your Puerto Rico trip"
          intro="Essential logistics for timing, transportation, and overnight planning."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-teal/10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal mb-2">
                  {tip.highlight}
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3">
                  {tip.title}
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  {tip.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
