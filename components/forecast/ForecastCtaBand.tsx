import Link from "next/link";
import { KayakIcon } from "./ForecastIcons";
import { CalendarIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function ForecastCtaBand() {
  return (
    <Section bg="white" variant="cta">
      <Container size="readable">
        <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 sm:p-12 text-center space-y-6 shadow-md">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl lg:text-4xl text-white tracking-tight font-bold leading-snug">
              Picked your night?
            </h2>
            <p className="text-base leading-7 text-white/85 font-sans">
              Now find the tour that launches nearest to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/best-bioluminescent-kayaking-tours/"
              className="bg-coral hover:bg-coral-hover text-white h-12 px-6 rounded-full text-sm font-bold shadow-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <KayakIcon className="w-5 h-5 text-white" />
              Compare the best tours
            </Link>
            <Link
              href="/moon-phase-calendar/"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 rounded-full text-sm font-bold shadow-sm transition-all inline-flex items-center justify-center gap-2 active:scale-95"
            >
              <CalendarIcon className="w-4 h-4 text-white" />
              Open the moon calendar
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
