export interface TermsSection {
  id: string;
  title: string;
  body: string;
}

export interface TermsData {
  intro: string;
  sections: TermsSection[];
}

export const TERMS_DATA: TermsData = {
  intro:
    "By using BioluminescentKayaking.us you accept these terms. They are written in plain English on purpose.",
  sections: [
    {
      id: "what-this-site-is",
      title: "What this site is",
      body: "An independent guide to bioluminescent kayaking in the USA. We research locations, compare tours offered by the booking platform GetYourGuide, and publish a glow forecast. We are not a tour operator and we are not part of GetYourGuide.",
    },
    {
      id: "prices-and-availability",
      title: "Prices and availability",
      body: "Prices, schedules and availability shown here come from the booking platforms and are checked and date-stamped as described in How We Rank Tours. They can change at any time. The price that applies to your booking is the price shown on the booking platform when you check out.",
    },
    {
      id: "bookings",
      title: "Bookings",
      body: "When you book through a link on this site, your contract is with the booking platform and the tour operator — including their cancellation, refund and weather policies. We can't change, cancel or refund a booking; contact the platform named in your booking confirmation.",
    },
    {
      id: "the-glow-forecast",
      title: "The glow forecast",
      body: "Our glow forecast and moon calendar are planning estimates built from moon, weather and seasonal data. Bioluminescence is a natural phenomenon: brightness varies and no score or date can guarantee a glowing tour. Decisions about whether a tour runs belong to the operator.",
    },
    {
      id: "content-and-photos",
      title: "Content and photos",
      body: "The text and design of this site belong to BioluminescentKayaking.us or its licensors. You may share links freely; please don't republish our articles or photos without permission.",
    },
    {
      id: "liability",
      title: "Liability",
      body: "We work to keep information accurate, but we can't guarantee that every detail is complete or current, and we aren't liable for decisions made from it — including travel and booking decisions — to the extent the law allows. Nothing in these terms limits liability that cannot legally be limited.",
    },
    {
      id: "changes-to-these-terms",
      title: "Changes to these terms",
      body: "If these terms change, the new version will be posted on this page.",
    },
  ],
};

