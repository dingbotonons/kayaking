"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SparklesIcon, MenuIcon, CloseIcon } from "./Icons";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/destinations/", label: "Destinations" },
  { href: "/glow-forecast/", label: "Glow Forecast" },
  { href: "/moon-phase-calendar/", label: "Moon Calendar" },
  { href: "/best-bioluminescent-kayaking-tours/", label: "Best Tours" },
  { href: "/guides/", label: "Guides" },
  { href: "/about/", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-border-soft">
      <Container className="flex items-center justify-between h-20">
        <Link
          href="/"
          aria-label="Bioluminescent Kayaking US — home"
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="BioluminescentKayaking.us logo"
            width={640}
            height={640}
            className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-102"
            unoptimized
            priority
          />
          <span className="font-serif font-bold text-xs sm:text-sm text-ink tracking-tight group-hover:text-teal transition-colors">
            Bioluminescent Kayaking 🇺🇸
          </span>
        </Link>

        {/* Desktop Navigation Links & Action Button */}
        <div className="flex items-center gap-8 ml-auto">
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-muted hover:text-teal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Trailing Action Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/glow-forecast/"
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold h-12 px-6 rounded-full transition-all duration-150 active:scale-95 shadow-sm text-sm group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Tonight&apos;s Glow</span>
            </Link>
          </div>

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-teal hover:bg-seafoam border border-seafoam-border transition-colors focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-soft px-4 sm:px-6 py-6 shadow-md animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-ink hover:text-teal transition-colors py-2 border-b border-seafoam/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-teal text-xs">→</span>
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/glow-forecast/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold h-12 px-6 rounded-full shadow-sm text-sm transition-all"
              >
                <SparklesIcon className="w-4 h-4" />
                See Tonight&apos;s Glow
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
