<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UI Design System & Consistency Ruleset

All pages and components in BioluminescentKayaking.us MUST strictly abide by the following design system rules:

### 1. 8-Point Spacing Scale
- All margins, paddings, and gaps must follow the 8-point grid using standard Tailwind spacing units: `2 (8px)`, `4 (16px)`, `6 (24px)`, `8 (32px)`, `10 (40px)`, `12 (48px)`, `16 (64px)`, `20 (80px)`, `24 (96px)`.
- Never use arbitrary spacing values (e.g., `py-[70px]`, `mt-[37px]`, `gap-[18px]`).

### 2. Section Rhythm
- **Content sections:** Default to `py-16 lg:py-24` via `<Section bg="...">`.
- **Hero sections:** Standardized to `pt-16 pb-20 lg:pt-24 lg:pb-28` via `<Section variant="hero">`.
- **CTA Bands:** Standardized to `py-16` via `<Section variant="cta">`.
- Section vertical margins are strictly `my-0`.
- The vertical gap between a section header and its content grid must be `mb-10 lg:mb-12` (built into `<SectionHeader />`).

### 3. Container Widths
- The site uses ONE primary container: `<Container>` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Long-form narrative and FAQ sections use `<Container size="readable">` (`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`).
- Focused single-column CTA banners use `<Container size="narrow">` (`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8`).

### 4. Grid & Column Consistency
- Standard desktop card grid uses 3 columns (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) or 4 columns for location chips/compact items (`lg:grid-cols-4`).
- Standard gutters are `gap-6 lg:gap-8`.
- Tour and location cards in grids must always stretch equally using `h-full flex flex-col justify-between`, pinning bottom action rows/CTAs to the card bottom.

### 5. Type Scale & Hierarchy
- **Page Titles (H1):** `font-serif text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight`.
- **Section Headings (H2):** `font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug`.
- **Card Titles (H3):** `font-serif text-xl font-bold text-ink leading-snug`.
- **Sub-headings (H4):** `text-base font-bold text-ink`.
- **Body text:** `text-base leading-7 text-ink/80 font-sans`.
- **Intro text under H2:** `mt-4 max-w-2xl text-ink/80 text-base leading-7`.
- **Small print & meta:** `text-xs text-ink/60` or `text-sm text-ink/70`.

### 6. Section Header Anatomy
- Section headers follow a strict anatomy via `<SectionHeader />`:
  1. Optional eyebrow: `text-xs font-bold tracking-widest uppercase text-teal mb-3`.
  2. H2 heading: `font-serif text-3xl lg:text-4xl font-bold text-teal`.
  3. Optional intro text: `mt-4 max-w-2xl text-ink/80 text-base leading-7`.
- Consistent alignment per template: centered for FAQs and CTA bands; left-aligned for location, tour, and data grids.

### 7. Component Sizing & Styling
- **Cards:** All content cards use `rounded-[20px] p-6 lg:p-8` with `border border-teal/15 shadow-sm` or `.custom-card`.
- **Buttons:** Primary buttons use `h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm`. Secondary/outline buttons use `h-12 px-6 rounded-full font-bold text-sm border`. Compact card-level action links use `h-10 px-4 rounded-full text-xs font-bold`.
- **Badges/Chips:** Fixed height `h-7 px-3 rounded-full text-xs font-bold inline-flex items-center`.
- **Icons:** Inline text icons are `w-4 h-4` or `w-5 h-5`; feature card icons are `w-6 h-6` inside a `w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center`.

### 8. Background Color Rhythm
- Content sections alternate strictly between `bg-white` and `bg-seafoam` (`#EAF6F3`).
- Never place two `seafoam` sections consecutively.
- Cream (`#FFF9F0`) is reserved for badges, moon indicators, or card accents — never full-bleed section backgrounds.
- High-impact CTA bands use `teal` gradients (`bg-gradient-to-r from-teal to-[#164e63]`).

### 9. Media & Image Aspect Ratios
- **Hero imagery:** `aspect-[16/9]` (with desktop strip support up to `aspect-[24/8]`).
- **Tour cards:** `aspect-[16/10]` with `object-cover rounded-[20px]`.
- **Location cards:** `aspect-[4/3]` with `object-cover rounded-[20px]`.
- All images must use Next.js `<Image />` with `fill`, explicit responsive `sizes`, and descriptive alt text.

### 10. Breakpoints & Responsive Behavior
- Standard Tailwind breakpoints: `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`.
- Fluid scaling from mobile single-column to desktop 3/4-column grids without arbitrary breakpoint thresholds.
