import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function TitusvilleHero() {
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
              Titusville &amp; Merritt Island
            </li>
          </ol>
        </nav>

        {/* Category Pill Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider h-7">
            Refuge &amp; Dark-Sky Shoreline
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider h-7 border border-teal/15">
            Space Coast, Florida
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Typography & Verdict */}
          <div className="lg:col-span-6 flex flex-col justify-center hero-enter">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink leading-tight tracking-tight mb-4">
              Bioluminescent Kayaking in Titusville
            </h1>

            {/* Verdict Callout Card */}
            <div className="bg-seafoam/60 border border-teal/15 rounded-[16px] p-4 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal block mb-1">
                The Honest Verdict
              </span>
              <p className="text-sm font-semibold text-ink/90 leading-relaxed font-sans">
                Darker skies, wilder water, fewer beach crowds. The lagoon side for paddlers who care more about the glow than beachfront drinks.
              </p>
            </div>

            <p className="text-base leading-7 text-ink/80 mb-8 max-w-2xl font-sans">
              Titusville is the gateway to Merritt Island National Wildlife Refuge and the northern Indian River Lagoon system, including Mosquito Lagoon and Haulover Canal. Away from coastal condo glow, this is Central Florida&apos;s darkest water.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Explore Titusville Tours
              </a>
              <a
                href="#compare-cocoa"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Titusville vs Cocoa Beach
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden shadow-sm border border-teal/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeT1WnpbtSvCfn1qP0D1R295Rk-fK2P3wbEyIElBIfOqsMDkLiB1Wmzxls2UH7fA7VpeKjk2T4edjivnMKw8WupKYEAMoi7ZE2v59YcljYc9Y_0rFR93QrTr-CLmZc6VbxJEX8lcJUqjUPHFhbTrsrQvvR50d6GBCgVtJQEqJrI6lXjfEzgVBsqcRwc_frt3dHmv6B7ta9_-gzWEjYHZsrrzhP81zFzef54PzvPnZ5jdoHlYmySAmagkxzFUKf6ptMHJWvApd_B562"
                alt="Kayakers paddling through tranquil bioluminescent waters at night near Titusville in Merritt Island National Wildlife Refuge"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
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
