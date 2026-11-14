import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FloridaPlanTripSection() {
  const tips = [
    {
      title: "Getting there",
      highlight: "Fly into MCO or MLB",
      details: "Orlando International (MCO) is ~45–55 minutes away by car. Melbourne Orlando International (MLB) is even closer (~25–30 min south of Cocoa Beach). Renting a car is the easiest way to reach evening kayak launches.",
    },
    {
      title: "Where to stay",
      highlight: "Cocoa Beach vs Titusville",
      details: "Stay in Cocoa Beach for oceanfront hotels, lively restaurants, and surf culture. Stay in Titusville if you want immediate proximity to Merritt Island Wildlife Refuge launches and quieter, budget-friendly motels.",
    },
    {
      title: "Make a day of it",
      highlight: "Kennedy Space Center + Evening Glow",
      details: "Visit Kennedy Space Center Visitor Complex during the afternoon, grab an early dinner along the Indian River, then head straight to your twilight launch for one of the most memorable Florida days possible.",
    },
  ];

  return (
    <Section bg="seafoam" id="plan">
      <Container>
        <SectionHeader
          eyebrow="Space Coast Travel Tips"
          title="Plan your trip"
          intro="How to time your arrival, pick your base, and pair your night paddle with the Space Coast."
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
