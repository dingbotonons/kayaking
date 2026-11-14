import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function OrlandoHero() {
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
              <Link href="/florida/" className="hover:text-teal transition-colors">
                Florida
              </Link>
            </li>
            <li>
              <span className="text-ink/40">/</span>
            </li>
            <li className="font-semibold text-teal" aria-current="page">
              Near Orlando
            </li>
          </ol>
        </nav>

        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7 border border-teal/15">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Orlando Day-Trip Guide
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Typography & Verdict */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-extrabold text-teal leading-tight tracking-tight">
              Bioluminescent Kayaking Near Orlando
            </h1>

            {/* Verdict Callout Card */}
            <div className="bg-seafoam/60 border border-teal/20 rounded-[20px] p-6 shadow-sm">
              <p className="text-base leading-7 text-ink/80 font-sans">
                <strong className="font-bold text-teal">Verdict:</strong> Orlando itself is landlocked — but one of the world&apos;s great glow lagoons starts less than an hour east. Parks by day, paddling a glowing lagoon by night is the best double-header in Florida.
              </p>
            </div>

            <p className="text-base leading-7 text-ink/80 max-w-2xl font-sans">
              Theme park resorts in Orlando sit just 45 to 60 minutes west of the Indian River Lagoon and Banana River. Hundreds of visitors head east on FL-528 every night for twilight launches, then drive right back to Orlando before midnight.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#two-options"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Choose Cocoa vs Titusville
              </a>
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                View Evening Tours
              </a>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgWnf2EFYBKMiFWxNJT52sHHuY9erD53CwNfF0wAIjXfPb2xJCajEZwjhD-aD60Q4j1lybJcmjnGed__G0wxnP06mujn0YMPTametpcBPZV8I5yn91YGraCfn1I_axctulfpSy2dK4pp3L48e_I8o2WqIFGhNhohr7WSNY-I5IGM98a02xIJgh5I8xYuSKaOQT1xUvUMhBmt2cac2EW3UbPQO_NrTnXeH0BuPF5AgWSdHOP8QvrtBUxc_6KpZi6Uz4swOgDD5MaHU-"
                alt="Family driving east from Orlando toward bioluminescent waters at twilight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-[16px] border border-white/40 shadow-xs">
                <p className="text-xs font-bold text-teal">Orlando to Space Coast Corridor</p>
                <p className="text-[11px] text-ink/80">45-Minute Eastbound Sunset Drive</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
