import Link from "next/link";
import {
  RainIcon,
  WindIcon,
  ThermometerIcon,
  BookIcon,
  MoonNightIcon,
} from "./ForecastIcons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowToReadSection() {
  return (
    <>
      {/* How to read the forecast */}
      <Section bg="white" aria-labelledby="how-to-read-heading">
        <Container>
          <SectionHeader
            titleId="how-to-read-heading"
            title="How to read the forecast"
            intro="Simple categories so you know whether tonight is worth paddling out."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Legend 1: Excellent */}
            <div className="bg-white rounded-[20px] p-6 custom-card border-t-4 border-t-teal space-y-3 h-full">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal" />
                <h3 className="font-serif text-xl text-teal font-bold">
                  Excellent
                </h3>
              </div>
              <p className="text-base leading-7 text-ink-muted">
                Dark moon, clear skies, peak season. Book this night if you can.
              </p>
            </div>

            {/* Legend 2: Good */}
            <div className="bg-white rounded-[20px] p-6 custom-card border-t-4 border-t-[#19827d] space-y-3 h-full">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#19827d]" />
                <h3 className="font-serif text-xl text-teal font-bold">Good</h3>
              </div>
              <p className="text-base leading-7 text-ink-muted">
                The glow should be clearly visible. A solid night to go.
              </p>
            </div>

            {/* Legend 3: Fair */}
            <div className="bg-white rounded-[20px] p-6 custom-card border-t-4 border-t-[#c6891a] space-y-3 h-full">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#c6891a]" />
                <h3 className="font-serif text-xl text-teal font-bold">Fair</h3>
              </div>
              <p className="text-base leading-7 text-ink-muted">
                Visible in shadowy areas or under a kayak tarp. Partial moon or shoulder season.
              </p>
            </div>

            {/* Legend 4: Poor */}
            <div className="bg-white rounded-[20px] p-6 custom-card border-t-4 border-t-stone-400 space-y-3 h-full">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-stone-400" />
                <h3 className="font-serif text-xl text-teal font-bold">Poor</h3>
              </div>
              <p className="text-base leading-7 text-ink-muted">
                Bright moon, rough water or off-season. Better to wait for a darker night.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What goes into the score */}
      <Section bg="seafoam" aria-labelledby="what-goes-in-heading">
        <Container>
          <SectionHeader
            titleId="what-goes-in-heading"
            title="What goes into the score"
            intro="We combine the physical factors that decide how bright your paddle will be."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white rounded-[20px] p-6 custom-card space-y-3 h-full">
              <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal">
                <MoonNightIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-teal font-bold">
                Moon Phase &amp; Rise
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                The single biggest factor. Dark skies mean vivid neon glow; bright moon washes it out.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 custom-card space-y-3 h-full">
              <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal">
                <RainIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-teal font-bold">
                Cloud Cover
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Overcast skies can block ambient light and moonlight, actually helping the glow stand out.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 custom-card space-y-3 h-full">
              <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal">
                <WindIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-teal font-bold">
                Wind &amp; Surface Chop
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Calm water makes the glow easiest to see. Whitecaps and chop churn and diffuse the light.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-6 custom-card space-y-3 h-full">
              <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal">
                <ThermometerIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-teal font-bold">
                Water Temperature &amp; Season
              </h3>
              <p className="text-base leading-7 text-ink-muted">
                Dinoflagellates bloom in warmer summer waters; comb jellies thrive in cooler winter lagoons.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
