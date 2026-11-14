/**
 * FAQPage JSON-LD built from the exact Q&A array a FAQ section
 * renders (blueprint §8: include FAQPage even though Google limits
 * FAQ rich results — it feeds AI answers). Single source of truth:
 * the component passes the same array it displays, so schema can
 * never drift from the visible page.
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (faqs.length === 0) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
