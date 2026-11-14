import { Bus, Ship, Car } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SanJuanComparisonTableSection() {
  const options = [
    {
      name: "Fajardo with transport",
      icon: Bus,
      evening: "Pickup late afternoon, back late evening",
      drive: "No",
      driveBadgeClass: "bg-seafoam text-teal font-bold",
      price: "$110",
    },
    {
      name: "La Parguera with transport",
      icon: Ship,
      evening: "A long day across the island, back late",
      drive: "No",
      driveBadgeClass: "bg-seafoam text-teal font-bold",
      price: "$199",
    },
    {
      name: "Drive yourself to Fajardo",
      icon: Car,
      evening: "Set your own times, back when you like",
      drive: "Yes — about 1 hour each way",
      driveBadgeClass: "bg-gray-100 text-ink/80 font-medium",
      price: "$65.78",
    },
  ];

  return (
    <Section bg="seafoam" id="comparison-table">
      <Container>
        <SectionHeader
          title="The three ways, compared"
          intro="A side-by-side breakdown of timing, driving logistics, and starting rates from San Juan. Prices checked on GetYourGuide, 12 Nov 2026."
          align="center"
        />

        {/* Comparison Table Container */}
        <div className="bg-white rounded-[20px] border border-teal/15 shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-seafoam/40 border-b border-teal/15">
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-teal">
                    Option
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-teal">
                    How the evening looks
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-teal">
                    Do you drive?
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-teal">
                    From
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 text-xs sm:text-sm text-ink/80">
                {options.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <tr key={opt.name} className="hover:bg-seafoam/20 transition-colors">
                      <td className="py-4 px-6 font-bold text-teal">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-seafoam flex items-center justify-center text-teal shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{opt.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-ink/85">{opt.evening}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs ${opt.driveBadgeClass}`}>
                          {opt.drive}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-serif text-lg font-bold text-teal">
                        {opt.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
