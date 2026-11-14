import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function GuidesCtaBand() {
  return (
    <Section variant="compact" bg="white">
      <Container size="readable">
        <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 lg:p-12 text-center shadow-md">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3">
            Planning a trip now?
          </h2>
          <p className="text-white/85 text-base max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            Check luminescence levels, moon phases, and tour departures listed on GetYourGuide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/glow-forecast/"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-[#ff7b52] text-white font-bold text-sm shadow-sm transition-colors duration-200"
            >
              See tonight&apos;s glow forecast
            </Link>
            <Link
              href="/best-bioluminescent-kayaking-tours/"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-teal hover:bg-seafoam font-bold text-sm shadow-sm transition-colors duration-200"
            >
              Compare the best tours
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

