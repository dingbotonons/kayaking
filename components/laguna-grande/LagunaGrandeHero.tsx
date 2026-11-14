import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function LagunaGrandeHero() {
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
              Laguna Grande, Fajardo
            </li>
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal font-bold text-xs uppercase tracking-wider mb-4 h-7 border border-teal/15">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span>Puerto Rico · Fajardo</span>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-extrabold text-teal leading-tight mb-4">
              Bioluminescent Kayaking in Laguna Grande, Fajardo
            </h1>

            {/* Verdict Callout */}
            <div className="bg-seafoam border-l-4 border-teal p-5 rounded-r-[16px] mb-6">
              <p className="text-ink/90 text-base leading-7 font-sans">
                <span className="font-bold text-teal">Verdict: </span>
                The easiest bio bay trip in Puerto Rico: paddle through a mangrove channel as darkness falls, then watch the lagoon light up around your kayak. An hour from San Juan, no island ferry, and home the same night.
              </p>
            </div>

            <p className="text-base leading-7 text-ink/80 mb-8 max-w-2xl font-sans">
              Located on the northeast tip of Puerto Rico within the Cabezas de San Juan nature reserve, Laguna Grande is the most accessible bioluminescent lagoon in America.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Kayak Tours from $65.78
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6KGXXcV4pQ5Xn04iDN0gfFXdcBM7xrAPLE61effG2pPG5BLxYVLLtVzqox7Dy1aE6KbaCCdjtwdPBLskB6RVl3sXOM88Wtk0SBgFXKCFYIKBrc_XwSVE74_y_18T64FdA1xsXM6Uk0VeCRXAuIWx8eOKwo4Dbg2JfwnMXprQRRKSsaKeQ5tCsWOjbp7UAT3TOz4neZb3vDF8tQz5svOwGm0fEU0ViWjkRJTHlqRQVpqokHwL5SJ9X7pp6b6uMbxVZck5tVtHMnpY"
                alt="Kayaking through the mangrove channel into Laguna Grande Fajardo"
                fill
                priority
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
