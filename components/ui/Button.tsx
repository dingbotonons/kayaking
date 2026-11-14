import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Standardized Button Component
 * Rule 7: Buttons: h-12 px-6 rounded-full (minimum touch target 44px).
 * One style for primary (coral bg with white text), secondary (teal or seafoam), outline.
 */
export function Button({
  variant = "primary",
  href,
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center h-12 px-6 rounded-full font-bold text-sm tracking-wide transition-all duration-200 active:scale-95 shrink-0";

  const variantClasses = {
    primary: "bg-coral hover:bg-coral-hover text-white shadow-sm",
    secondary: "bg-seafoam hover:bg-seafoam-border text-teal border border-seafoam-border",
    outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
  }[variant];

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "seafoam" | "gold" | "cream" | "teal";
  className?: string;
}

/**
 * Standardized Badge / Chip Component
 * Rule 7: Chips/badges: one height (h-7) site-wide.
 */
export function Badge({
  children,
  variant = "seafoam",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    seafoam: "bg-seafoam text-teal border border-teal/15",
    gold: "bg-gold text-ink font-bold",
    cream: "bg-cream text-teal border border-gold/30",
    teal: "bg-teal text-white",
  }[variant];

  return (
    <span
      className={`inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}

