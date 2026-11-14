import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LocationPageContent } from "@/src/data/region-pages";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

/** Location FAQ + closing CTA band — mirrors CocoaBeachFaqSection. */
export function LocationFaqSection({ page }: { page: LocationPageContent }) {
  return (
    <>
      <Section bg="seafoam" id="faqs">
        <Container size="readable">
      <FaqJsonLd faqs={page.faqs} />
          <SectionHeader
            eyebrow="Clear Answers"
            title="Frequently asked questions"
            intro={`Everything you need to know before paddling ${page.name} at night.`}
            align="center"
          />

          <div className="space-y-4">
            {page.faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group bg-white rounded-[20px] p-6 border border-teal/10 open:border-teal/20 shadow-sm transition-colors"
              >
                <summary className="font-serif text-xl font-bold text-teal cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <span className="text-teal text-xl font-bold ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white" variant="cta">
        <Container size="narrow">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 border border-teal/10 shadow-sm text-center space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              {page.ctaTitle}
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              {page.ctaBody}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                {page.toursSlug ? `Browse ${page.name} Tours` : "How Booking Works"}
              </a>
              <Link
                href="/glow-forecast/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Check Tonight&apos;s Glow
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
