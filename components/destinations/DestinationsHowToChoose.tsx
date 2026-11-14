import Link from "next/link";
import { ArrowRight, Compass, Moon, Sparkles } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HOW_TO_CHOOSE_CARDS } from "@/src/data/destinations";

export function DestinationsHowToChoose() {
  return (
    <Section bg="white" id="how-to-choose">
      <Container>
        <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 lg:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-3">
              Planning Advice
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight leading-snug mb-4">
              How to choose
            </h2>
            <p className="text-[#C8ECE7] text-base leading-7 font-sans">
              Pick the right trip for your timeline, travel style, and comfort
              level on the water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {HOW_TO_CHOOSE_CARDS.map((card, idx) => {
              const Icon = idx === 0 ? Sparkles : idx === 1 ? Compass : Moon;
              return (
                <article
                  key={card.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-[20px] p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-white/15 text-gold flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-base leading-7 font-sans">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/best-bioluminescent-kayaking-tours/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors"
            >
              <span>Compare the best tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/glow-forecast/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm bg-white text-teal hover:bg-seafoam shadow-sm transition-colors"
            >
              <span>See tonight&apos;s glow forecast</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
