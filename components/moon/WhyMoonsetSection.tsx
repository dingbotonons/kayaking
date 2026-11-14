import Link from "next/link";
import { MoonIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function WhyMoonsetSection() {
  return (
    <Section bg="white" variant="compact" aria-labelledby="why-moonset-heading">
      <Container size="readable">
        <div className="custom-card bg-seafoam p-8 md:p-12 border border-seafoam-border rounded-[20px] shadow-sm relative overflow-hidden">
          <h2
            id="why-moonset-heading"
            className="font-serif text-3xl lg:text-4xl text-teal tracking-tight font-bold mb-4 leading-snug"
          >
            Why moonset matters
          </h2>
          <p className="text-base leading-7 text-ink-muted mb-8 font-sans">
            The phase isn&apos;t the whole story. A bright moon that sets before your tour starts does no harm — for an hour or two the sky is properly dark. That&apos;s why the glow forecast checks moonrise and moonset times for every location, every night. The calendar shows you the phase; the forecast does the fine print.
          </p>
          <Link
            href="/glow-forecast/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal hover:bg-teal/90 text-white h-12 px-6 text-sm font-bold active:scale-95 transition-all shadow-sm shrink-0"
          >
            <MoonIcon className="w-4 h-4 text-white" />
            Tonight&apos;s glow forecast
          </Link>
        </div>
      </Container>
    </Section>
  );
}
