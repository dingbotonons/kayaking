import { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { LaPargueraHero } from "@/components/la-parguera/LaPargueraHero";
import { LaPargueraTonightSection } from "@/components/la-parguera/LaPargueraTonightSection";
import { LaPargueraToursSection } from "@/components/la-parguera/LaPargueraToursSection";
import { LaPargueraSwimAndLogisticsSections } from "@/components/la-parguera/LaPargueraSwimAndLogisticsSections";
import { LaPargueraSeasonsAndFaqSections } from "@/components/la-parguera/LaPargueraSeasonsAndFaqSections";

export const metadata: Metadata = {
  title: "La Parguera Bio Bay: Swim in Glowing Water (Tours from $60)",
  description:
    "The ONLY bioluminescent bay in Puerto Rico where you can legally swim! Compare boat & water-bike tours from $60, swimming tips, and tonight's live glow score.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/puerto-rico/la-parguera",
  },
  openGraph: {
    title: "La Parguera Bio Bay: Swim in Glowing Water (Tours from $60)",
    description:
      "The ONLY bioluminescent bay in Puerto Rico where you can legally swim! Compare boat & water-bike tours from $60, swimming tips, and tonight's live glow score.",
    url: "https://bioluminescentkayaking.us/puerto-rico/la-parguera",
    siteName: "BioluminescentKayaking.us",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-rCdJg5Ci-c6_8YzZiLTdvINUj7ZWibR_G9Nnqf7TG7AA-_krLeNp9JMZB_bFEFTuwU7nSgIlcqO--DU8vLntCveoiQW7abh47SujyWVOgDl6LiZsqBx_gFE4ljdKmdCy7w77j6IYbftYVujlUIBAEPW4ZU_XOR7CWwxsvgmDo1Ld43oUXkbxk6VZ-Q9t0A0-kcxK8jNHrhT7kG8-WqiLIC-ocQR4gMmTY5Q9lmdCbz4JSXcKomcQ2SPCnQyN0CJyziBv5JHGO50u",
        width: 1200,
        height: 800,
        alt: "People in life vests floating in glowing water at La Parguera bioluminescent bay in Puerto Rico",
      },
    ],
  },
};

export default function LaPargueraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Puerto Rico",
            item: "https://bioluminescentkayaking.us/puerto-rico/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "La Parguera",
            item: "https://bioluminescentkayaking.us/puerto-rico/la-parguera/",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        name: "La Parguera Bioluminescent Bay",
        description:
          "Bioluminescent bay located in Lajas on Puerto Rico's southwest coast. The only bio bay in Puerto Rico where guided swimming inside the glowing dinoflagellates is permitted.",
        url: "https://bioluminescentkayaking.us/puerto-rico/la-parguera",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-rCdJg5Ci-c6_8YzZiLTdvINUj7ZWibR_G9Nnqf7TG7AA-_krLeNp9JMZB_bFEFTuwU7nSgIlcqO--DU8vLntCveoiQW7abh47SujyWVOgDl6LiZsqBx_gFE4ljdKmdCy7w77j6IYbftYVujlUIBAEPW4ZU_XOR7CWwxsvgmDo1Ld43oUXkbxk6VZ-Q9t0A0-kcxK8jNHrhT7kG8-WqiLIC-ocQR4gMmTY5Q9lmdCbz4JSXcKomcQ2SPCnQyN0CJyziBv5JHGO50u",
        isAccessibleForFree: false,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.9739,
          longitude: -67.0494,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lajas",
          addressRegion: "PR",
          addressCountry: "US",
        },
      },
      {
        "@type": "ItemList",
        name: "La Parguera Bioluminescent Bay Tours",
        description:
          "Guided night boat tours with swimming stops in La Parguera bioluminescent bay, Puerto Rico.",
        numberOfItems: 2,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "La Parguera Bioluminescent Bay Boat Tour",
            description: "The classic evening boat trip out to the bay from the La Parguera waterfront.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "La Parguera Bio Bay Swim Tour",
            description: "Guided boat trip built specifically around the nighttime swim stop among glowing dinoflagellates.",
          },
        ],
      },
    ],
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
          <LaPargueraHero />
          <LaPargueraTonightSection />
          <LaPargueraToursSection />
          <LaPargueraSwimAndLogisticsSections />
          <LaPargueraSeasonsAndFaqSections />
        </main>
        <Footer />
      </div>
    </>
  );
}

