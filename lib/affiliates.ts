/**
 * GetYourGuide-only affiliate link builder.
 *
 * The site links to one booking platform only — every
 * outbound booking link on the site is a GetYourGuide activity link in
 * this format, carrying the owner's partner ID:
 *
 *   https://www.getyourguide.com/activity/-t######?partner_id=AIPSESV
 *
 * All affiliate links must render with the compliance attributes in
 * AFFILIATE_REL and target="_blank".
 */
export const GYG_PARTNER_ID = "AIPSESV";

export function buildAffiliateUrl(productId: string): string {
  return `https://www.getyourguide.com/activity/-${productId}?partner_id=${GYG_PARTNER_ID}`;
}

export const AFFILIATE_REL = "sponsored nofollow noopener";
