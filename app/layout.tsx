import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bioluminescentkayaking.us"),
  title: "Bioluminescent Kayaking USA: Tonight's Glow Forecast & Tours",
  description:
    "Compare 20+ glowing kayak tours in FL, PR, CA & WA. Check tonight's real-time 0–100 glow score, dark-sky moon calendar, and verified prices from $55.",
  alternates: {
    canonical: "https://bioluminescentkayaking.us/",
  },
  openGraph: {
    title: "Bioluminescent Kayaking USA: Tonight's Glow Forecast & Tours",
    description:
      "Compare 20+ glowing kayak tours in FL, PR, CA & WA. Check tonight's real-time 0–100 glow score, dark-sky moon calendar, and verified prices from $55.",
    url: "https://bioluminescentkayaking.us/",
    siteName: "BioluminescentKayaking.us",
    images: [
      {
        url: "https://bioluminescentkayaking.us/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Kayakers paddling through glowing water at dusk",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs-full.txt" />
        <link rel="alternate" type="text/markdown" href="/pricing.md" title="Pricing" />
      </head>
      <body
        className="min-h-full flex flex-col font-sans bg-white text-ink"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
