import Image from "next/image";
import { AUTHOR } from "@/src/data/author";

/**
 * Reusable author byline: small circular photo + name + LinkedIn link.
 * Used on the About page author section and in the guide article
 * template, so every published guide carries the byline automatically.
 */
export function AuthorByline() {
  return (
    <div className="flex items-center gap-4">
      {/*
        unoptimized is deliberate: on the production host the Next.js
        image optimizer returns HTTP 500 for LOCAL files (verified
        2026-11-13: /_next/image?url=%2Fimages%2Fharsha-zoysa.jpg&w=96
        and &w=256 both 500, while the static file itself serves 200
        and remote lh3 images optimize fine). The photo is a 36 KB
        400x400 JPEG shown at 80px, so serving it direct costs nothing
        and removes the fragile dependency that broke this image.
      */}
      <Image
        src={AUTHOR.photo}
        alt={AUTHOR.photoAlt}
        width={80}
        height={80}
        unoptimized
        className="w-20 h-20 rounded-full object-cover border border-teal/15 shrink-0"
      />
      <div>
        <p className="font-serif text-xl font-bold text-teal leading-snug">
          {AUTHOR.name}
        </p>
        <p className="text-sm text-ink/70 font-sans">{AUTHOR.role}</p>
        <a
          href={AUTHOR.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-teal hover:text-coral transition-colors"
        >
          {AUTHOR.linkedinLabel}
        </a>
      </div>
    </div>
  );
}
