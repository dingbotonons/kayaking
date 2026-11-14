import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, Waves } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function LaPargueraHero() {
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
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li>
              <Link href="/puerto-rico" className="hover:text-teal transition-colors">
                Puerto Rico
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-ink/40" />
            <li className="font-semibold text-teal" aria-current="page">
              La Parguera
            </li>
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider h-7 border border-teal/15">
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                Puerto Rico · Lajas
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-teal font-bold text-xs uppercase tracking-wider border border-gold/30 h-7">
                <Waves className="w-3.5 h-3.5 text-teal" />
                Swimming Bio Bay
              </span>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-extrabold text-teal leading-tight mb-4">
              Bioluminescent Kayaking in La Parguera
            </h1>

            {/* Verdict Callout */}
            <div className="bg-seafoam border-l-4 border-teal p-5 rounded-r-[16px] mb-6">
              <p className="text-ink/90 text-base leading-7 font-sans">
                <span className="font-bold text-teal">Verdict: </span>
                The only bio bay in Puerto Rico where swimming is permitted. The glow is gentler than Mosquito Bay, but swimming in living light — looking down through a snorkel mask as your fingers trail blue sparks — is an experience no kayak can match.
              </p>
            </div>

            <p className="text-base leading-7 text-ink/80 mb-8 max-w-2xl font-sans">
              Located in the fishing village of La Parguera in southwest Puerto Rico, this sheltered mangrove bay allows motorboats, kayaks and swimmers to share the water.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Tours
              </a>
              <a
                href="#tonight"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Tonight&apos;s Glow Score
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="/images/la_parguera.webp"
                alt="People floating in glowing water at La Parguera bio bay"
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
