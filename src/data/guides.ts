import {
  getAllGuides,
  getGuideBySlug as getGuideBySlugFromMdx,
  getPublishedGuides as getPublishedGuidesFromMdx,
  guideHref as guideHrefFromMdx,
  type GuideItem,
  type GuideStatus,
  type GuideCluster,
  type GuideFrontmatter,
} from "@/lib/mdx";

export type { GuideItem, GuideStatus, GuideCluster, GuideFrontmatter };

export interface GuideGroup {
  id: string;
  title: string;
  description: string;
  guides: GuideItem[];
}

/** Master catalog of all 10 guides, loaded dynamically from content/guides/*.mdx */
export const GUIDES: GuideItem[] = getAllGuides();

export function guideHref(guide: { slug: string }): string {
  return guideHrefFromMdx(guide);
}

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return getGuideBySlugFromMdx(slug);
}

export function getPublishedGuides(): GuideItem[] {
  return getPublishedGuidesFromMdx();
}

/** Grouped clusters for the /guides/ hub page */
export const GUIDE_GROUPS: GuideGroup[] = [
  {
    id: "understand-the-glow",
    title: "Understand the glow",
    description:
      "The biology, the chemistry, and how Florida and Puerto Rico differ.",
    guides: GUIDES.filter((g) => g.cluster === "understand-the-glow"),
  },
  {
    id: "pick-your-night",
    title: "Pick your night",
    description:
      "Seasons, moon phases, and how to read a forecast like a guide.",
    guides: GUIDES.filter((g) => g.cluster === "pick-your-night"),
  },
  {
    id: "get-ready",
    title: "Get ready for the water",
    description:
      "Gear, packing, families, and what to expect on your first night paddle.",
    guides: GUIDES.filter((g) => g.cluster === "get-ready"),
  },
];
