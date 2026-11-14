import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function MosquitoBayHero() {
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
            <li>
              <Link href="/puerto-rico/" className="hover:text-teal transition-colors">
                Puerto Rico
              </Link>
            </li>
            <li>
              <span className="text-ink/40">/</span>
            </li>
            <li className="font-semibold text-teal" aria-current="page">
              Mosquito Bay
            </li>
          </ol>
        </nav>

        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Guinness World Record Holder · Vieques, Puerto Rico
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 hero-enter">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink leading-tight tracking-tight">
              Bioluminescent Kayaking in Mosquito Bay, Vieques
            </h1>

            {/* Verdict Callout Card */}
            <div className="bg-seafoam/60 border border-teal/20 rounded-[20px] p-6 shadow-sm">
              <p className="text-base leading-7 text-ink/80 font-sans">
                The brightest bioluminescent bay on Earth — a Guinness World Record holder that glows all year round. The catch is the journey: you have to get to Vieques island, and you have to stay the night. It&apos;s worth it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Clear-Kayak Tours from $55
              </a>
              <a
                href="#tonight"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Tonight&apos;s Glow Score
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="/images/mosquito_bay.webp"
                alt="Clear kayak gliding through electric blue bioluminescent water in Mosquito Bay Vieques Puerto Rico at twilight"
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
