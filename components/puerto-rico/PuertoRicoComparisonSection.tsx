import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ComparisonRow {
  bay: string;
  brightness: string;
  gettingThere: string;
  stayOver: { label: string; highlight: boolean };
  swim: { label: string; highlight: boolean };
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    bay: "Mosquito Bay, Vieques",
    brightness: "The brightest anywhere",
    gettingThere: "Ferry or short flight to Vieques",
    stayOver: { label: "Yes — overnight", highlight: true },
    swim: { label: "No", highlight: false },
  },
  {
    bay: "Laguna Grande, Fajardo",
    brightness: "Bright",
    gettingThere: "About 1 hour from San Juan, or tour transport",
    stayOver: { label: "No", highlight: false },
    swim: { label: "No", highlight: false },
  },
  {
    bay: "La Parguera, Lajas",
    brightness: "Gentle glow",
    gettingThere: "About 2 hours from San Juan, southwest coast",
    stayOver: { label: "No", highlight: false },
    swim: { label: "Yes", highlight: true },
  },
];

export function PuertoRicoComparisonSection() {
  return (
    <Section bg="white" id="comparison">
      <Container>
        <SectionHeader
          eyebrow="Decision Tool"
          title="Which bay is right for you?"
          intro="A quick comparison of brightness, logistics, and overnight requirements."
          align="center"
        />

        <div className="bg-white rounded-[20px] border border-teal/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-seafoam/70 border-b border-teal/10 text-xs sm:text-sm font-bold text-teal">
                  <th className="py-4 px-6">Bay &amp; Location</th>
                  <th className="py-4 px-6">Brightness</th>
                  <th className="py-4 px-6">Getting There from San Juan</th>
                  <th className="py-4 px-6">Stay Overnight?</th>
                  <th className="py-4 px-6">Can You Swim?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 text-xs sm:text-sm text-ink/80">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.bay} className="hover:bg-seafoam/20 transition-colors">
                    <td className="py-4 px-6 font-bold text-teal">{row.bay}</td>
                    <td className="py-4 px-6 font-semibold text-ink">{row.brightness}</td>
                    <td className="py-4 px-6">{row.gettingThere}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          row.stayOver.highlight
                            ? "bg-amber-100 text-amber-900 border border-gold/40"
                            : "bg-seafoam text-teal"
                        }`}
                      >
                        {row.stayOver.label}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          row.swim.highlight
                            ? "bg-emerald-100 text-emerald-900"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {row.swim.label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
