import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacySections } from "@/components/privacy/PrivacySections";
import { PRIVACY_POLICY_DATA } from "@/src/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read our plain-English privacy policy: cookie usage, affiliate tracking parameters, analytics data collection, and our strict zero-data-selling guarantee.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read our plain-English privacy policy: cookie usage, affiliate tracking parameters, analytics data collection, and our strict zero-data-selling guarantee.",
    url: "https://bioluminescentkayaking.us/privacy-policy",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "How BioluminescentKayaking.us handles your data: analytics cookies, affiliate link clicks, and what we never collect.",
    url: "https://bioluminescentkayaking.us/privacy-policy",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bioluminescentkayaking.us/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://bioluminescentkayaking.us/privacy-policy/",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">
          <PrivacyHero intro={PRIVACY_POLICY_DATA.intro} />
          <PrivacySections
            sections={PRIVACY_POLICY_DATA.sections}
            lastUpdated={PRIVACY_POLICY_DATA.lastUpdated}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

