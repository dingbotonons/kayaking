import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface BayLocationCard {
  name: string;
  badge: string;
  badgeBg: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaText: string;
}

const LOCATION_CARDS: BayLocationCard[] = [
  {
    name: "Mosquito Bay, Vieques",
    badge: "The brightest",
    badgeBg: "bg-gold text-ink",
    description: "The Guinness World Record holder. An island trip: ferry or fly to Vieques and stay the night.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm7Hgy0F8I85Mt1LBUPl2bzqO7ZfqoslE-c2HFZXpexwv3OEP6zlRxv00KkbGI0GlfzborJoYFCm5t4CBhS_9YpvVVL2IspqmvHcqmB4VlHaE0il54Ahzyh34bUnznhEJKm7RD_dGG31qLevsLKUVmrhXKK22729ZJn7HWCM9aF_D5cUbQJtOaiJSqubAstRdU2D9tWcZcSXBk3twS3j8IPSS5-9d0fXfaeipDcbIx61J8Kcgf1RKz52RmNCRJogDYBbIZXyO7PeGS",
    imageAlt: "A tranquil Caribbean night seascape at Mosquito Bay in Vieques Puerto Rico featuring vivid azure bioluminescent glow swirling around clear kayaks.",
    href: "/best-bioluminescent-kayaking-tours/",
    ctaText: "Explore Mosquito Bay",
  },
  {
    name: "Laguna Grande, Fajardo",
    badge: "The easiest",
    badgeBg: "bg-teal text-white",
    description: "A paddle through a mangrove channel into a glowing lagoon, about an hour from San Juan, with transport-included tours.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70kwPzJh2UBRjmTyBGU0flDw178lGeqf5oFVI-wAtP2fl-jOzeYuTX7-dANAfHLB62yFGzc50MQn0GWaObPRsUF3aWXbgMCbPQOj4156O5AhGGx2MfWzsn4ItPQ8wHVZu0hAKPAjPFEzjxPIWbdUous6h7UQGZegxL3d8K5aXOKssNS4XPH2d1iXI1L1xhaUSz94t3qUrGnaP8jE4xqz1VlmDEjduNSh0VqWr79t2dpUYhtZJF68SPrztTm6i-j6iLtn9WC56yaMq",
    imageAlt: "Kayakers paddling through a narrow mangrove canal under starlit skies heading toward Laguna Grande in Fajardo Puerto Rico.",
    href: "/best-bioluminescent-kayaking-tours/",
    ctaText: "Explore Laguna Grande",
  },
  {
    name: "La Parguera, Lajas",
    badge: "The one you can swim in",
    badgeBg: "bg-seafoam text-teal border border-teal/20",
    description: "Boat tours on the southwest coast — the only Puerto Rico bay where swimming in the glow is allowed.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIIhZdb4pe0VmXG78c71VHIMpY7dGuZIg1kGjN7fme_vR9yoAL8bF_VRxh49FASWnsCJvs3Ijgsf9p28QQ1lcAYyGo8YMNfnQsRXFc9KLeKOtNJb59qNp9XvEymH2-yjmmodD5DMgfkch-BhX83Bm_2J1Z5hZUly_US1Ir9ukiyDtmBHHErpWn2V5XrdPwcYpM6VH0bWv4anQtwxm8hj2QjnhZ0kMA_YJrY2yvE4ooXThcDY2tvU7BCSEhyyM21HNCRNvncRJ9gMu",
    imageAlt: "A swimmer floating in warm Caribbean night waters of La Parguera as bioluminescent microorganisms create soft blue halos.",
    href: "/best-bioluminescent-kayaking-tours/",
    ctaText: "Explore La Parguera",
  },
  {
    name: "Bio bay tours from San Juan",
    badge: "The no-car version",
    badgeBg: "bg-coral text-white",
    description: "Staying in San Juan without a car? These tours handle the driving — Fajardo evenings and Vieques day trips with transfers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeT1WnpbtSvCfn1qP0D1R295Rk-fK2P3wbEyIElBIfOqsMDkLiB1Wmzxls2UH7fA7VpeKjk2T4edjivnMKw8WupKYEAMoi7ZE2v59YcljYc9Y_0rFR93QrTr-CLmZc6VbxJEX8lcJUqjUPHFhbTrsrQvvR50d6GBCgVtJQEqJrI6lXjfEzgVBsqcRwc_frt3dHmv6B7ta9_-gzWEjYHZsrrzhP81zFzef54PzvPnZ5jdoHlYmySAmagkxzFUKf6ptMHJWvApd_B562",
    imageAlt: "A tour van driving eastward from San Juan along the Puerto Rico coast towards evening kayak departures.",
    href: "/best-bioluminescent-kayaking-tours/",
    ctaText: "View San Juan Tours",
  },
];

export function PuertoRicoThreeBaysSection() {
  return (
    <Section bg="seafoam" id="three-bays">
      <Container>
        <SectionHeader
          eyebrow="The Destinations"
          title="The three bays"
          intro="Explore individual guides and tours for Puerto Rico's world-famous glowing waters."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LOCATION_CARDS.map((card) => (
            <div
              key={card.name}
              className="bg-white rounded-[20px] overflow-hidden border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
            >
              <div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-xs ${card.badgeBg}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-teal mb-2 leading-snug">
                    {card.name}
                  </h3>
                  <p className="text-sm text-ink/80 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={card.href}
                  className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-150"
                >
                  {card.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
