import Link from "next/link";
import { ChevronRight, Home, Gavel } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function HowWeRankHero() {
  return (
    <Section variant="hero" bg="white">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-ink/70">
            <li>
              <Link href="/" className="hover:text-teal transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-ink/60" />
                <span>Home</span>
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li className="font-semibold text-teal" aria-current="page">
              How We Rank Tours
            </li>
          </ol>
        </nav>

        {/* Hero Title Block */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 h-7 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider mb-4 border border-teal/20">
            <span>Transparency &amp; Standards</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
            How We Rank Tours
          </h1>

          <p className="text-ink/80 text-base leading-7">
            No operator can pay to be listed, ranked higher, or labelled a pick on this site. Here is exactly what earns a tour its place — and what gets it removed.
          </p>
        </div>

        {/* Independence Commitment Banner */}
        <div className="rounded-[20px] bg-seafoam/40 border border-teal/20 p-6 lg:p-8 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-white rounded-[20px] text-teal shrink-0 shadow-sm border border-teal/10">
            <Gavel className="w-6 h-6 text-teal" />
          </div>
          <div className="space-y-1">
            <h2 className="font-serif text-xl font-bold text-teal">
              Our Independence Commitment
            </h2>
            <p className="text-sm text-ink/80 leading-relaxed">
              Independent curation, clear evaluation criteria, and zero paid placement. We evaluate every excursion through uniform benchmarks so paddlers can explore the glow with complete clarity.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
