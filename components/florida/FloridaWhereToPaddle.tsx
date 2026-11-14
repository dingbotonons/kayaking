import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface FloridaLocation {
  name: string;
  tagline: string;
  verdict: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  href: string;
}

const LOCATIONS: FloridaLocation[] = [
  {
    name: "Cocoa Beach",
    tagline: "The famous one",
    verdict: "Best for clear kayaks and quick beach town access",
    description: "Launches run right out of the Banana River and Thousand Islands canals. Close to oceanfront hotels, easy after dinner, and known for guided clear-kayak tours.",
    highlights: ["Clear kayaks widely available", "Closest to Orlando beach resorts", "Banana River mangrove trails"],
    image: "/images/cocoa_beach.webp",
    imageAlt: "Kayakers paddling through a mangrove tunnel in Cocoa Beach, Florida",
    href: "/best-bioluminescent-kayaking-tours/",
  },
  {
    name: "Titusville & Merritt Island",
    tagline: "The lagoon side",
    verdict: "Darker skies and direct refuge access",
    description: "Launching into Haulover Canal and the Mosquito Lagoon. Away from city streetlights, inside Merritt Island National Wildlife Refuge, this is where you get the darkest skies in Central Florida.",
    highlights: ["Merritt Island National Wildlife Refuge", "Darker skies for brighter contrast", "Manatees & dolphins frequent the canal"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2fZw2_v9kHqUhoopapW7BvyNvE_E-onGpCmtDQsXgoAv2k4MY-xUHxCFJ9vZ18WDRBNVSJnPqOsvID6u6SwX9aNwAlxheTmyyMdpV2VnoMmm9I03mPHgueihw4DmEHOwx2SL4WLuvq2ZIyjF7_18nLAQ6Rq3fUVVOBhbfxWm831nwzjUorM5d-Mn_3f-NWtQBDPYeAF2oOqEUteXIkWJkmeFRnCHGQGTKJXikZMo2sIfI6yfGEDcDXElrEiiw0i9TaUf_qkW-SZx",
    imageAlt: "Wild protected waterways and mangrove islands in Merritt Island National Wildlife Refuge near Titusville",
    href: "/best-bioluminescent-kayaking-tours/",
  },
  {
    name: "Near Orlando",
    tagline: "The day-trip version",
    verdict: "45–60 minute drive from Disney and Universal",
    description: "Orlando itself has no glowing water, but Titusville and Cocoa Beach sit just an hour east along FL-528 or SR-50. Many travelers do an evening paddle and drive right back to Orlando resorts.",
    highlights: ["45 to 60 minute easy highway drive", "Perfect post-theme-park evening trip", "Rental car or rideshare accessible"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkA18hVmCaxWldXtFGHmzrFpf1dE9jBL75iP3trbIzOgKIT1KOH80ruoUj6AZgSePZNVBN-UlrHeG1G9nE8c9WGJPtkSRaZpW2sdP3E4UFQgS85Ywdv6XRtaJSi3waOpbBOLPOT9Uak1BKi0FSpa1fWjE_oeZW6oj8uB3MpULIlxUOTCMMljxvPfP2U4_RaCjbeOhy2slNu_y7pjZ9YaPzOIOH4qLayZTz5av0YXn3sI27DPY9fJ5J9WfXB_I-3Lizlfx3N8ZQZ-G",
    imageAlt: "Nighttime kayaking under starlit Florida skies within an easy drive of Orlando",
    href: "/best-bioluminescent-kayaking-tours/",
  },
];

export function FloridaWhereToPaddle() {
  return (
    <Section bg="white" id="where-to-paddle">
      <Container>
        <SectionHeader
          eyebrow="Launch Regions"
          title="Where to paddle in Florida"
          intro="Three primary base areas for accessing the glowing waters of the Indian River Lagoon system."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-[20px] overflow-hidden border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
            >
              <div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={loc.image}
                    alt={loc.imageAlt}
                    fill
                    unoptimized={loc.image.startsWith("/")}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-teal text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {loc.tagline}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-teal mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-bold text-coral uppercase tracking-wider mb-3">
                    {loc.verdict}
                  </p>
                  <p className="text-sm text-ink/80 leading-relaxed mb-4 font-sans">
                    {loc.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-border-soft">
                    {loc.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-ink/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={loc.href}
                  className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-150"
                >
                  View Tours in {loc.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
