import Link from "next/link";
import { GUIDE_GROUPS, guideHref, GuideItem } from "@/src/data/guides";
import { ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

function GuideCard({ guide }: { guide: GuideItem }) {
  const isPublished = guide.status === "published";
  const content = (
    <div
      className={`rounded-[20px] p-6 lg:p-8 flex flex-col justify-between h-full transition-all ${
        isPublished
          ? "bg-white border border-teal/15 shadow-sm hover:shadow-md group"
          : "bg-white/60 border border-dashed border-teal/25 shadow-xs opacity-90"
      }`}
    >
      <div>
        <div className="flex items-center justify-between text-xs text-ink/70 mb-4">
          <span className="inline-flex items-center px-2.5 h-7 rounded-full bg-seafoam text-teal font-semibold">
            {guide.clusterLabel}
          </span>
          <span className="text-ink/60 font-medium">{guide.readTime}</span>
        </div>

        <h3
          className={`font-serif text-xl font-bold mb-3 leading-snug ${
            isPublished
              ? "text-ink group-hover:text-teal transition-colors"
              : "text-ink/80"
          }`}
        >
          {guide.title}
        </h3>

        <p className="text-sm leading-relaxed text-ink/80 mb-6 font-sans">
          {guide.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-teal/10 flex items-center justify-between mt-auto">
        {isPublished ? (
          <span className="text-sm font-bold text-teal group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            <span>Read guide</span>
            <ArrowRight className="w-4 h-4 text-teal" />
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 h-7 rounded-full bg-cream text-amber-900 border border-gold/40 text-xs font-bold">
            In the works
          </span>
        )}
      </div>
    </div>
  );

  if (isPublished) {
    return (
      <Link href={guideHref(guide)} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}

export function GuidesContentSections() {
  // The "Get ready" group is intentionally NOT rendered on the hub
  // (owner audit 2026-11-13 — the hub was too long). Its guides stay
  // in src/data/guides.ts and their article routes still work when
  // published; only this hub display omits the block.
  const [understandGroup, pickGroup] = GUIDE_GROUPS;

  return (
    <>
      {/* SECTION 1: UNDERSTAND THE GLOW */}
      <Section bg="seafoam" variant="compact" id="understand-the-glow">
        <Container>
          <SectionHeader
            eyebrow="Biology &amp; Marine Glow"
            title={understandGroup.title}
            intro={understandGroup.description}
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {understandGroup.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 2: PICK YOUR NIGHT */}
      <Section bg="white" variant="compact" id="pick-your-night">
        <Container>
          <SectionHeader
            eyebrow="Astronomical Timing"
            title={pickGroup.title}
            intro={pickGroup.description}
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pickGroup.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

