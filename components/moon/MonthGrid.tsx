import { MonthCalendarData } from "@/lib/moon";
import { MoonPhaseIcon } from "./MoonIcons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface MonthGridProps {
  calendar: MonthCalendarData;
  bg?: "white" | "seafoam";
}

export function MonthGrid({ calendar, bg = "white" }: MonthGridProps) {
  const headingId = `heading-${calendar.monthName.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Section bg={bg} variant="compact" aria-labelledby={headingId}>
      <Container>
        <div className="custom-card bg-white border border-border-soft p-3 sm:p-6 md:p-8 rounded-[20px] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border-soft">
            <div>
              <h2
                id={headingId}
                className="font-serif text-2xl sm:text-3xl font-bold text-teal"
              >
                {calendar.monthName}
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 font-sans">
                {calendar.recommendedWindowText}
              </p>
            </div>

            {/* Legend Quick Key */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full ring-2 ring-gold bg-[#173440] inline-block" />
                <span className="text-ink">Darkest night window</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 inline-block" />
                <span className="text-gray-500">Washed out</span>
              </div>
            </div>
          </div>

          {/* Weekday headers: Mon - Sun */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3 text-center mb-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3">
            {calendar.days.map((d, index) => {
              if (!d.isCurrentMonth) {
                return (
                  <div
                    key={`pad-${index}`}
                    className="aspect-square rounded-lg sm:rounded-xl bg-gray-50/50"
                  />
                );
              }

              const illuminationPct = Math.round(
                ((1 - Math.cos(2 * Math.PI * d.phaseValue)) / 2) * 100
              );

              return (
                <div
                  key={`day-${d.dayNumber}`}
                  title={`Day ${d.dayNumber}: ${d.phaseCategory} (${illuminationPct}% illuminated)${d.isDarkWindow ? " · Peak dark-sky paddle window" : ""}`}
                  className={`aspect-square rounded-[10px] sm:rounded-[16px] p-1 sm:p-2 flex flex-col justify-between items-center transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xs cursor-default ${d.isDarkWindow
                    ? "border-2 border-gold bg-cream/70 shadow-xs"
                    : d.isFullMoonDay
                      ? "bg-gray-100/70 border border-gray-200 text-gray-400"
                      : "bg-white border border-border-soft hover:border-teal/40"
                    }`}
                >
                  <span className="text-[10px] sm:text-xs font-bold text-ink self-start leading-none">
                    {d.dayNumber}
                  </span>

                  <MoonPhaseIcon category={d.phaseCategory} />

                  <span className="text-[8px] sm:text-[10px] text-ink-muted leading-none">
                    {illuminationPct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
