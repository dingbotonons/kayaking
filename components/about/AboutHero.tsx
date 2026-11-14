import Link from "next/link";
import { ChevronRight, Home } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
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
              About
            </li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl hero-enter">
          <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
            <span>Independent USA Paddle Guide</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
            About BioluminescentKayaking.us
          </h1>

          <p className="font-serif text-xl lg:text-2xl text-ink/85 leading-relaxed font-normal">
            An independent guide to America&apos;s glowing waters. It exists because a bioluminescent tour is usually decided by two things nobody was showing travellers before they booked: the moon, and the weather.
          </p>
        </div>
      </Container>
    </Section>
  );
}
