import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface DriveOption {
  name: string;
  driveTime: string;
  bestFor: string;
  isFastest?: boolean;
}

const OPTIONS: DriveOption[] = [
  {
    name: "Cocoa Beach",
    driveTime: "About 1 hour",
    bestFor: "Clear kayaks, beach stay, the famous version",
  },
  {
    name: "Titusville & Merritt Island",
    driveTime: "About 45–55 minutes",
    bestFor: "Closest glow, wildest setting, Space Center pairing",
    isFastest: true,
  },
  {
    name: "Stay in Orlando, tour pickup",
    driveTime: "No driving",
    bestFor: "No rental car — a few tours run Orlando pickups; check the booking sites for your date.",
  },
];

export function OrlandoOptionsSection() {
  return (
    <Section bg="seafoam" id="options">
      <Container>
        <SectionHeader
          eyebrow="Drive Time Comparison"
          title="Your three options"
          intro="How to reach the bioluminescent waters from your Orlando hotel or resort."
          align="center"
        />

        {/* Options Table */}
        <div className="bg-white rounded-[20px] border border-teal/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-seafoam/70 border-b border-teal/10 text-xs sm:text-sm font-bold text-teal">
                  <th className="py-4 px-6">Departure Option</th>
                  <th className="py-4 px-6">Drive from Orlando</th>
                  <th className="py-4 px-6">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 text-xs sm:text-sm text-ink/80">
                {OPTIONS.map((opt) => (
                  <tr key={opt.name} className="hover:bg-seafoam/20 transition-colors">
                    <td className="py-4 px-6 font-bold text-teal flex items-center gap-2">
                      <span>{opt.name}</span>
                      {opt.isFastest && (
                        <span className="text-[10px] bg-teal text-white px-2 py-0.5 rounded-full font-bold">
                          Fastest
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 font-semibold text-ink">{opt.driveTime}</td>
                    <td className="py-4 px-6">{opt.bestFor}</td>
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
