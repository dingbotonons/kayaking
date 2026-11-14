import Link from "next/link";
import { MoonIcon, WaterDropIcon, CameraIcon } from "./Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PlanItRightSection() {
  return (
    <Section
      bg="seafoam"
      aria-labelledby="plan-it-right-heading"
      id="guides"
      className="border-t border-seafoam-border"
    >
      <Container>
        <SectionHeader
          titleId="plan-it-right-heading"
          title="Plan it right"
          intro="Friendly practical advice before you book your evening paddle."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Guide Card 1 */}
          <div className="custom-card p-6 flex flex-col justify-between bg-white border border-border-soft h-full group">
            <div>
              <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                <MoonIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug group-hover:text-coral transition-colors">
                Moon phase &amp; bioluminescence: why the moon kills the glow
              </h3>
              <p className="text-base leading-7 text-ink-muted mb-6 font-sans">
                A bright moon washes out the glow. Moonrise and moonset times matter as much as the phase — here&apos;s how to use them.
              </p>
            </div>
            <Link
              href="/guides/moon-phase-and-bioluminescence/"
              className="inline-flex items-center gap-1 text-sm font-bold text-teal group-hover:text-coral transition-colors"
            >
              <span>Read guide</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Guide Card 2 */}
          <div className="custom-card p-6 flex flex-col justify-between bg-white border border-border-soft h-full group">
            <div>
              <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                <WaterDropIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug group-hover:text-coral transition-colors">
                Dinoflagellates vs comb jellies: Florida&apos;s two different glows
              </h3>
              <p className="text-base leading-7 text-ink-muted mb-6 font-sans">
                Summer brings sparkling blue dinoflagellates; winter brings comb jellies that flash rainbow light as you paddle through them. Two different shows in the same lagoon.
              </p>
            </div>
            <Link
              href="/guides/dinoflagellates-vs-comb-jellies/"
              className="inline-flex items-center gap-1 text-sm font-bold text-teal group-hover:text-coral transition-colors"
            >
              <span>Read guide</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Guide Card 3 */}
          <div className="custom-card p-6 flex flex-col justify-between bg-white border border-border-soft h-full group">
            <div>
              <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                <CameraIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-teal mb-3 leading-snug group-hover:text-coral transition-colors">
                What is bioluminescence? The science behind glowing water
              </h3>
              <p className="text-base leading-7 text-ink-muted mb-6 font-sans">
                Luciferin, luciferase, and dinoflagellates explained simply: why shallow coastal bays and estuaries light up like liquid neon.
              </p>
            </div>
            <Link
              href="/guides/what-is-bioluminescence/"
              className="inline-flex items-center gap-1 text-sm font-bold text-teal group-hover:text-coral transition-colors"
            >
              <span>Read guide</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
