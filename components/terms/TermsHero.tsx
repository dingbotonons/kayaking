import Link from "next/link";
import { ChevronRight, Home, ShieldCheck } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface TermsHeroProps {
  intro: string;
}

export function TermsHero({ intro }: TermsHeroProps) {
  return (
    <Section variant="hero" bg="white">
      <Container size="readable">
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
              Terms
            </li>
          </ol>
        </nav>

        {/* Hero Title Block */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 h-7 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider mb-4 border border-teal/20">
            <ShieldCheck className="w-3.5 h-3.5 text-teal" />
            <span>Terms</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-6 leading-tight">
            Terms of Use
          </h1>

          {/* Intro Callout Card */}
          <div className="bg-seafoam/50 border border-teal/20 rounded-[20px] p-6 lg:p-8 shadow-sm">
            <p className="font-serif text-xl lg:text-2xl text-teal font-semibold leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

