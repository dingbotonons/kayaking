// Live contact email, supplied by the site owner on 2026-11-13.
export const CONTACT_EMAIL = "hello@bioluminescentkayaking.us";

export const CONTACT_TOPICS = [
  "A correction or price error",
  "A question about a location",
  "Tour operator or partnership",
  "Something else",
] as const;

export function getDisplayContactEmail(): string {
  return CONTACT_EMAIL;
}

export const CONTACT_DATA = {
  intro:
    "Questions, corrections, or something we should know about a bay? We read every message.",
  beforeYouWrite: [
    "Booking changes, cancellations and refunds: we can't access bookings — we don't take them. Contact GetYourGuide from your booking confirmation; they can help in minutes.",
    "Tour running late, meeting point questions, weather calls on the night: that's your operator — their number is in your confirmation too.",
  ],
  whatToContactAbout: [
    {
      id: "corrections",
      title: "Corrections",
      description:
        "A price, season or fact that looks wrong — we check and fix fast, and corrections are credited on the page.",
    },
    {
      id: "operators-partners",
      title: "Operators & partners",
      description:
        "You run glow tours somewhere we cover, or want your listing checked.",
    },
    {
      id: "everything-else",
      title: "Everything else",
      description: "Reader questions about choosing a bay or a night.",
    },
  ],
};

