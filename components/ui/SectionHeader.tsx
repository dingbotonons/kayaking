import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  titleId?: string;
  className?: string;
  badge?: React.ReactNode;
}

/**
 * Standardized SectionHeader Anatomy
 * Rule 6: Eyebrow (uppercase, text-xs font-bold tracking-widest text-teal) -> H2 (text-3xl lg:text-4xl leading-snug font-serif text-teal) -> optional intro paragraph (mt-4 max-w-2xl text-ink/80 text-base leading-7).
 * Rule 2: Gap between section header block and content is mb-10 lg:mb-12 everywhere.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  description,
  align = "center",
  titleId,
  className = "",
  badge,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const subtitle = intro ?? description;

  return (
    <div
      className={`mb-10 lg:mb-12 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {badge ? (
        <div className="mb-4 inline-flex">{badge}</div>
      ) : eyebrow ? (
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-teal">
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2
        id={titleId}
        className="font-serif text-3xl lg:text-4xl leading-snug font-bold text-teal tracking-tight"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-7 text-ink/80 font-sans ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

