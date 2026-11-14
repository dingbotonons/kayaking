import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-teal text-white py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Col 1: Brand & Legal */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="BioluminescentKayaking.us logo"
                width={640}
                height={640}
                className="h-12 w-auto"
                unoptimized
              />
            </div>
            <p className="text-sm text-[#C8ECE7] mb-4 leading-relaxed">
              An independent guide to bioluminescent kayaking in the USA:
              tour comparisons, a nightly glow forecast and a moon
              calendar. We don&apos;t run tours.
            </p>
            <ul className="space-y-2 text-sm text-[#C8ECE7]">
              <li>
                <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/image-credits/" className="hover:text-white transition-colors">
                  Image Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              Destinations
            </h4>
            <ul className="space-y-2 text-sm text-[#C8ECE7]">
              <li>
                <Link href="/florida/" className="hover:text-white transition-colors">
                  Florida (Indian River Lagoon)
                </Link>
              </li>
              <li>
                <Link href="/florida/" className="hover:text-white transition-colors">
                  Cocoa Beach &amp; Titusville
                </Link>
              </li>
              <li>
                <Link href="/puerto-rico/" className="hover:text-white transition-colors">
                  Puerto Rico (Mosquito Bay)
                </Link>
              </li>
              <li>
                <Link href="/puerto-rico/" className="hover:text-white transition-colors">
                  Laguna Grande, Fajardo
                </Link>
              </li>
              <li>
                <Link href="/california/" className="hover:text-white transition-colors">
                  California (Tomales Bay)
                </Link>
              </li>
              <li>
                <Link href="/washington/" className="hover:text-white transition-colors">
                  Washington (San Juan Islands)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: How this site works */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">
              How this site works
            </h4>
            <ul className="space-y-2 text-sm text-[#C8ECE7]">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-rank-tours/" className="hover:text-white transition-colors">
                  How We Rate Tours
                </Link>
              </li>
              <li>
                <Link href="/glow-forecast-method/" className="hover:text-white transition-colors">
                  How our glow forecast works
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure/" className="hover:text-white transition-colors">
                  Why We Link to GetYourGuide
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-white transition-colors">
                  LLMS.TXT
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" className="hover:text-white transition-colors">
                  LLMS-FULL.TXT
                </a>
              </li>
              <li>
                <a href="/pricing.md" className="hover:text-white transition-colors">
                  PRICING.MD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Banner - Verbatim requirement */}
        <div className="py-4 px-6 rounded-[20px] bg-white/10 border border-white/20 text-center mb-8 backdrop-blur-xs">
          <p className="text-sm text-white leading-relaxed">
            <strong>Affiliate Disclosure:</strong> We compare tours from GetYourGuide and may earn a commission — it never changes the price you pay.
          </p>
        </div>

        {/* Copyright Bottom Bar — centred, no link row (owner audit 2026-11-13) */}
        <div className="pt-8 border-t border-white/20 text-center text-xs text-[#C8ECE7]">
          <p>
            © {currentYear} BioluminescentKayaking.us. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
