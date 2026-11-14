import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function PuertoRicoHero() {
  return (
    <Section bg="white" variant="hero" className="border-b border-seafoam">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold text-ink/70">
            <li>
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-ink/40">/</span>
            </li>
            <li className="font-semibold text-teal" aria-current="page">
              Puerto Rico
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 hero-enter">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Puerto Rico Region · Caribbean
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink leading-tight tracking-tight mb-4">
              Bioluminescent Kayaking in Puerto Rico
            </h1>

            <p className="text-base leading-7 text-ink/80 mb-8 max-w-2xl font-sans">
              Puerto Rico has three year-round bioluminescent bays — more than anywhere else in the United States. All three glow with the same organism, <em className="italic font-serif font-bold text-teal">Pyrodinium bahamense</em>, but each one is a different trip: Vieques is the brightest, Fajardo is the easiest, and La Parguera is the one you can swim in.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Explore Tours
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Compare the 3 Bays
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="/images/puerto_rico.webp"
                alt="Clear kayaks glowing under tranquil Caribbean waters in Puerto Rico at twilight"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
