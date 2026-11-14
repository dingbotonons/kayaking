import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Sparkles } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function GlowMethodHero() {
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
              Glow Forecast Method
            </li>
          </ol>
        </nav>

        {/* Hero Title Block */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 h-7 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider mb-4 border border-teal/20">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span>Transparency &amp; Science</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
            How Our Glow Forecast Works
          </h1>

          <p className="text-ink/80 text-base leading-7">
            The forecast turns four things — season, moon, sky and water — into one simple glow chance out of 100 for every location, every night. Here is the recipe, in plain English.
          </p>
        </div>

        {/* Hero Atmosphere Strip */}
        <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-teal/15 aspect-[16/9] sm:aspect-[24/8] max-h-64 bg-teal/10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQAETEveTlBKOM5T1h5UN6Gg3SMOihCf9CupzaINPLzHh3WW0n73IKyubsnkcwXoeKB-YifpGwASrGrFEWtof8nDLc7Qr63PXVvwE2sfvqCuCKo-9lSxdir0o5LqTeCcoBb2nUR3TZCiWDot7o5CiSJttrE4xnw9c29Y0a1rWaLG4N3lfNKXVgfQG4cFcJt14jVN0yvTulCZQSPQttzMSJAsTWv6nBfFM5Mu5zEDS31HCJ6bQ0w_wCTNtSw2KNuwX41cPrbuLilTbO"
            alt="Kayakers paddling across calm coastal waters at dusk under twilight skies"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span className="text-white text-xs font-semibold px-3 h-7 inline-flex items-center rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              Clear night conditions on coastal waters
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
