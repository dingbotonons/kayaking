import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function MoonCtaBand() {
  return (
    <Section bg="white" variant="cta">
      <Container size="readable">
        <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 lg:p-12 shadow-md text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3 leading-snug">
              Found your dark night?
            </h2>
            <p className="text-white/85 text-base leading-7 mb-8 font-sans">
              Check the weather-aware forecast for that exact night, then pick your tour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/glow-forecast/"
                className="w-full sm:w-auto rounded-full bg-coral hover:bg-coral-hover text-white h-12 px-6 text-sm font-bold shadow-sm active:scale-95 transition-all text-center inline-flex items-center justify-center"
              >
                Open the glow forecast
              </Link>
              <Link
                href="/best-bioluminescent-kayaking-tours/"
                className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 text-sm font-bold active:scale-95 transition-all text-center inline-flex items-center justify-center"
              >
                Compare the best tours
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
