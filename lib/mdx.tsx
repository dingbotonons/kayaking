import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  ResearchNotice,
  KeyTakeaways,
  TakeawayItem,
  TableNote,
  FaqAccordion,
  FaqItem,
  Accordion,
  AccordionItem,
} from "@/components/guides/GuideMdxComponents";

export type GuideCluster = "understand-the-glow" | "pick-your-night" | "get-ready";
export type GuideStatus = "planned" | "published";

export interface GuideFrontmatter {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt?: string;
  cluster: GuideCluster;
  clusterLabel: string;
  readTime: string;
  wordCount?: number;
  author?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageNote?: string;
  schema?: string;
  ctaTours?: string[];
  relatedTourIds?: string[];
  status?: GuideStatus;
  datePublished?: string;
}

export interface GuideItem extends GuideFrontmatter {
  excerpt: string;
  status: GuideStatus;
  relatedTourIds: string[];
  content: string;
}

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

/** Custom MDX components conforming strictly to the UI design system in AGENTS.md */
export const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-serif text-2xl lg:text-3xl font-bold text-teal leading-snug mt-8 lg:mt-10 mb-3 first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-serif text-xl font-bold text-ink leading-snug mt-6 mb-2"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-bold text-ink mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base leading-7 text-ink/80 font-sans mb-4 last:mb-0"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    const classes =
      "font-semibold text-teal underline decoration-teal/40 underline-offset-2 transition-colors hover:decoration-teal";

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 space-y-1.5 mb-4 text-base text-ink/80 font-sans"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 space-y-1.5 mb-4 text-base text-ink/80 font-sans"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7 font-sans" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 rounded-[18px] bg-seafoam/40 border border-teal/15 p-4 sm:p-5 text-xs sm:text-sm text-ink/75 leading-relaxed font-sans shadow-xs"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-6 border-teal/15" {...props} />
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-ink" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-teal font-serif" {...props}>
      {children}
    </em>
  ),
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-hidden my-8 sm:my-10 rounded-[20px] border border-[#0B3D39]/30 shadow-md bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-sans border-collapse min-w-[620px]" {...props}>
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-[#0B3D39] text-white border-b-2 border-[#072d2a] [&_tr]:!bg-[#0B3D39] [&_tr]:!text-white [&_th]:!text-white [&_th]:!bg-[#0B3D39]" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="py-4 px-6 sm:py-5 sm:px-7 font-bold text-white text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap first:pl-7 sm:first:pl-8 last:pr-7 sm:last:pr-8 bg-[#0B3D39]" {...props}>
      {children}
    </th>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-teal/15 text-ink/85 [&_tr:nth-child(even)]:bg-[#f6faf8] [&_tr:hover]:bg-[#ebf5f3] [&_tr]:transition-colors" {...props}>
      {children}
    </tbody>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-5 px-6 sm:py-6 sm:px-7 text-xs sm:text-sm text-ink/85 leading-relaxed align-top first:pl-7 sm:first:pl-8 last:pr-7 sm:last:pr-8 first:font-semibold first:text-ink" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-teal/10 last:border-b-0" {...props}>
      {children}
    </tr>
  ),
  ResearchNotice,
  KeyTakeaways,
  TakeawayItem,
  TableNote,
  FaqAccordion,
  FaqItem,
  Accordion,
  AccordionItem,
};

/** Load all guides from MDX files */
export function getAllGuides(): GuideItem[] {
  if (!fs.existsSync(GUIDES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx")).sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(GUIDES_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    const frontmatter = data as GuideFrontmatter;
    const relatedTourIds = frontmatter.ctaTours || frontmatter.relatedTourIds || [];
    const status: GuideStatus = frontmatter.status || "planned";

    return {
      ...frontmatter,
      excerpt: frontmatter.metaDescription || frontmatter.excerpt || "",
      status,
      relatedTourIds,
      content,
    };
  });
}

/** Get a single guide by slug */
export function getGuideBySlug(slug: string): GuideItem | undefined {
  const guides = getAllGuides();
  return guides.find((g) => g.slug === slug);
}

/** Get only published guides */
export function getPublishedGuides(): GuideItem[] {
  return getAllGuides().filter((g) => g.status === "published");
}

/** URL for guide */
export function guideHref(guide: { slug: string }): string {
  return `/guides/${guide.slug}`;
}

/** Compile MDX source into a React component */
export async function renderGuideMdx(content: string) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
  return compiledContent;
}
