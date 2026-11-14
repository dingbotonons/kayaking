import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSections } from "@/components/contact/ContactSections";
import { CONTACT_DATA } from "@/src/data/contact";

export const metadata: Metadata = {
  title: "Contact BioluminescentKayaking.us: Questions & Partnerships",
  description:
    "Get in touch with editor Harsha Zoysa. Submit tour updates, water conditions, or editorial inquiries. For booking changes, contact GetYourGuide directly.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/contact/",
  },
  openGraph: {
    title: "Contact BioluminescentKayaking.us: Questions & Partnerships",
    description:
      "Get in touch with editor Harsha Zoysa. Submit tour updates, water conditions, or editorial inquiries. For booking changes, contact GetYourGuide directly.",
    url: "https://bioluminescentkayaking.us/contact/",
    siteName: "BioluminescentKayaking.us",
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "ContactPage"],
    name: "Contact Us",
    description:
      "Contact BioluminescentKayaking.us — corrections, questions and partnerships. For booking changes, contact GetYourGuide.",
    url: "https://bioluminescentkayaking.us/contact/",
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
          name: "Contact",
          item: "https://bioluminescentkayaking.us/contact/",
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
          <ContactHero intro={CONTACT_DATA.intro} />
          <ContactSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

