import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: "white" | "seafoam" | "cream" | "teal";
  variant?: "standard" | "hero" | "cta" | "compact";
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

/**
 * Standardized Section Primitive
 * Rule 2: Section rhythm. Every content section: py-16 lg:py-24.
 * Hero: pt-16 pb-20 lg:pt-24 lg:pb-28 max.
 * CTA: py-16.
 * Zero margin top/bottom on sections.
 */
export function Section({
  children,
  bg = "white",
  variant = "standard",
  className = "",
  id,
  as: Component = "section",
  ...props
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    seafoam: "bg-seafoam",
    cream: "bg-cream",
    teal: "bg-teal text-white",
  }[bg];

  const variantPadding = {
    standard: "py-16 lg:py-24",
    hero: "pt-16 pb-20 lg:pt-24 lg:pb-28",
    cta: "py-16",
    // Tighter rhythm for index-style pages (used by /guides/ and
    // /moon-phase-calendar/, at the owner's request 2026-11-13 — the
    // standard rhythm left big empty gaps between sections).
    compact: "py-10 lg:py-16",
  }[variant];

  return (
    <Component
      id={id}
      className={`w-full relative ${bgClasses} ${variantPadding} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

