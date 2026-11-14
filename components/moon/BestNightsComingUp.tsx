import { getMonthCalendarData, type MonthCalendarData } from "@/lib/moon";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// All values on these cards are derived from lib/moon.ts — the same
// computed calendar data the month grids below render — so the summary
// cards can never drift from the grids.
function darkWindowText(cal: MonthCalendarData): string {
  const dark = cal.days.filter((d) => d.isCurrentMonth && d.isDarkWindow);
  const monthShort = cal.monthName.split(" ")[0];
  if (dark.length === 0) return monthShort;
  return `${dark[0].dayNumber}–${dark[dark.length - 1].dayNumber} ${monthShort}`;
}

function fullMoonText(cals: MonthCalendarData[]): string {
  const parts: string[] = [];
  for (const cal of cals) {
    const monthShort = cal.monthName.split(" ")[0].slice(0, 3);
    for (const d of cal.days) {
      if (d.isCurrentMonth && d.isFullMoonDay) {
        parts.push(`${d.dayNumber} ${monthShort}`);
      }
    }
  }
  return parts.join(" & ");
}

export function BestNightsComingUp() {
  const november = getMonthCalendarData(2026, 10);
  const december = getMonthCalendarData(2026, 11);

  return (
    <Section bg="seafoam" variant="compact" aria-labelledby="best-nights-heading">
      <Container>
        <SectionHeader
          titleId="best-nights-heading"
          title="Best nights coming up"
          intro="Next 60-day highlights across dark moon windows."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Darkest nights this month */}
          <div className="custom-card p-6 border-2 border-gold relative overflow-hidden group hover:-translate-y-0.5 transition-all duration-200 bg-white rounded-[20px] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  November window
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gold text-ink text-xs font-bold">
                  Dark nights
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-teal mb-1">
                Darkest nights this month
              </h3>

              <div className="font-serif text-3xl font-bold text-teal my-3">
                {darkWindowText(november)}
              </div>

              <p className="text-sm text-ink-muted leading-relaxed mb-4 font-sans">
                Peak dark window surrounding the upcoming new moon cycle.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-ink-muted pt-4 border-t border-border-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-[#173440] inline-block" />
              <span>{november.newMoonDateText}</span>
            </div>
          </div>

          {/* Card 2: Next new moon */}
          <div className="custom-card p-6 border border-teal/10 group hover:-translate-y-0.5 transition-all duration-200 bg-white rounded-[20px] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-teal uppercase tracking-wider">
                  December window
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-seafoam text-teal text-xs font-bold">
                  Next cycle
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-teal mb-1">
                Next new moon
              </h3>

              <div className="font-serif text-3xl font-bold text-teal my-3">
                {darkWindowText(december)}
              </div>

              <p className="text-sm text-ink-muted leading-relaxed mb-4 font-sans">
                Excellent late autumn and early winter paddle conditions.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-ink-muted pt-4 border-t border-border-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-[#173440] inline-block" />
              <span>{december.newMoonDateText}</span>
            </div>
          </div>

          {/* Card 3: Full moons to avoid */}
          <div className="custom-card p-6 border border-teal/10 group hover:-translate-y-0.5 transition-all duration-200 bg-white rounded-[20px] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Bright skies
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold">
                  Avoid / check moonset
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-teal mb-1">
                Full moons to avoid
              </h3>

              <div className="font-serif text-2xl font-bold text-ink my-3">
                {fullMoonText([november, december])}
              </div>

              <p className="text-sm text-ink-muted leading-relaxed mb-4 font-sans">
                Direct moonlight will flood the surface, diminishing glow unless you paddle after moonset.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-4 border-t border-border-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
              <span>Full illumination across water</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
