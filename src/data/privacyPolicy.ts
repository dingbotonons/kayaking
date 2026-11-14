export interface PrivacyPolicySection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface PrivacyPolicyData {
  lastUpdated: string;
  intro: string;
  sections: PrivacyPolicySection[];
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
  lastUpdated: "November 12, 2026",
  intro:
    "BioluminescentKayaking.us is a guide and comparison site. We don't run tours, we don't take bookings, and we don't have user accounts — which keeps the data we handle small. This page explains what that data is.",
  sections: [
    {
      id: "what-we-collect",
      title: "What we collect",
      paragraphs: [
        "Analytics data. We use Google Analytics to understand which pages people read and which tour links they click. This gives us aggregated information such as pages visited, approximate location (country/region), device type and time on page.",
        "Messages you send us. If you email us, we receive your email address and whatever you write.",
        "That's it. We never see or store payment details — bookings and payments happen entirely on GetYourGuide.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "This site sets analytics cookies through Google Analytics. When you click a tour link and continue to GetYourGuide, that site sets its own cookies — including the affiliate cookie that credits us with the referral — under their own privacy policies. You can block or clear cookies in your browser settings at any time; the site will still work.",
      ],
    },
    {
      id: "how-we-use-it",
      title: "How we use it",
      paragraphs: [
        "To see which guides and locations readers find useful, to keep prices and information accurate, and to measure which tours readers choose. We do not use it to build profiles of individual visitors.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing",
      paragraphs: [
        "We do not sell personal information. Analytics data is processed by Google as our analytics provider. Anything you book is handled by GetYourGuide under its policies, not ours.",
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      paragraphs: [
        "You can opt out of Google Analytics across all sites with Google's opt-out browser add-on, block cookies in your browser, and email us to ask what (if anything) we hold from your messages — and to have it deleted.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "This site is written for adult travellers planning trips and is not directed at children under 13.",
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to this policy",
      paragraphs: [
        "If this policy changes, the new version will be posted on this page.",
      ],
    },
  ],
};

