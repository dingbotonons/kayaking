import Link from "next/link";
import { ChevronRight, Info } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function CompareHero() {
  return (
    <Section variant="hero" bg="white">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-ink/70">
            <li>
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li className="font-semibold text-teal" aria-current="page">
              Best Tours
            </li>
          </ol>
        </nav>

        {/* Headline Block */}
        <div className="max-w-3xl hero-enter">
          <div className="inline-flex items-center gap-2 bg-seafoam border border-teal/20 text-teal px-3.5 h-7 rounded-full text-xs uppercase tracking-wider font-bold mb-4">
            <span>Curated Comparison</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
            Best Bioluminescent Kayaking Tours
          </h1>

          <p className="text-ink/80 text-base leading-7 mb-6">
            Our independent picks from GetYourGuide — chosen for glow strength, clear kayaks and how easy each launch is to reach. The right tour is usually the good one near where you&apos;re staying, on a dark night.
          </p>

          {/* Verbatim Disclosure Line 1 */}
          <div className="flex items-start gap-2 text-xs text-ink/60 bg-seafoam/40 p-4 rounded-[20px] border border-teal/15">
            <Info className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              We may earn a commission when you book through links on this page — it never changes the price you pay. Prices shown were checked against the booking sites.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
