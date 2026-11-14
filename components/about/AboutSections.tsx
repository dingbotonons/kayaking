import Link from "next/link";
import { Compass, Moon, Eye, CheckCircle2, ShieldAlert } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AuthorByline } from "@/components/about/AuthorByline";
import { AUTHOR } from "@/src/data/author";

export function AboutSections() {
  return (
    <>
      {/* SECTION 1: What this site does */}
      <Section bg="seafoam">
        <Container>
          <SectionHeader title="What this site does" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3">
                  We compare the tours
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  Every bookable bioluminescent tour we can find on GetYourGuide, organised by bay and lagoon, with prices checked and date-stamped.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-teal/10 flex items-center gap-2 text-xs font-semibold text-teal">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <Link href="/how-we-rank-tours/" className="hover:underline">
                  How we compare tours
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3">
                  We forecast the glow
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  A nightly glow forecast for every location, combining the moon, the clouds, the wind and the season, so the night you book is one when the water is likely to glow.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-teal/10 flex items-center gap-2 text-xs font-semibold text-teal">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <Link href="/glow-forecast-method/" className="hover:underline">
                  Nightly lunar &amp; weather models
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3">
                  We show the bad nights too
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  When the forecast says Poor, it says so on the same page that sells the tours. A guide that only ever says book now is a brochure, not a guide.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-teal/10 flex items-center gap-2 text-xs font-semibold text-teal">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Unbiased clarity first</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: What we don't do */}
      <Section bg="white">
        <Container>
          <div className="bg-seafoam/40 rounded-[20px] p-6 lg:p-8 border border-teal/20 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-2 mb-3 text-teal">
                <ShieldAlert className="w-5 h-5 text-teal" />
                <h2 className="font-serif text-2xl font-bold">
                  What we don&apos;t do
                </h2>
              </div>
              <p className="text-base text-ink/85 leading-relaxed font-normal">
                We don&apos;t run tours, we don&apos;t take bookings, and we can&apos;t guarantee the glow — nobody honestly can. Bookings happen on GetYourGuide; we may earn a commission on them, at no extra cost to you. Read our full{" "}
                <Link href="/affiliate-disclosure/" className="text-teal font-semibold hover:underline">
                  affiliate disclosure
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Why the moon runs this site */}
      <Section bg="seafoam">
        <Container>
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider mb-3">
                  <Moon className="w-4 h-4 text-gold fill-gold/20" />
                  <span>Astronomical Priority</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-teal mb-4">
                  Why the moon runs this site
                </h2>
                <p className="text-base text-ink/80 leading-relaxed">
                  Most glow tours are booked by date and hope. But a great bay under a full moon can look dimmer than a modest bay at new moon. So the moon calendar and the forecast come first here, and the tours second. That order is the whole idea of the site.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-seafoam/40 rounded-[20px] p-5 border border-teal/20 w-full max-w-sm space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal">
                    Glow Contrast by Phase
                  </div>

                  {/* New Moon State */}
                  <div className="bg-ink text-white p-3.5 rounded-[16px] shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-gold border border-gold shrink-0" />
                      <div>
                        <div className="text-xs font-bold">New Moon Window</div>
                        <div className="text-[11px] text-[#C8ECE7]">Pitch-black sky</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gold bg-white/10 px-2 py-0.5 rounded-full">
                      Peak Glow
                    </span>
                  </div>

                  {/* Full Moon State */}
                  <div className="bg-white text-ink p-3.5 rounded-[16px] border border-border-soft flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-stone-200 border border-stone-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-ink">Full Moon Night</div>
                        <div className="text-[11px] text-ink-muted">Direct moonlight glare</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                      Dim Contrast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: About the author */}
      <Section bg="white">
        <Container>
          <SectionHeader title="About the author" align="left" />

          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm">
            <div className="mb-6">
              <AuthorByline />
            </div>
            <p className="text-base leading-7 text-ink/80 font-sans max-w-3xl">
              {AUTHOR.bio}
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Band: Start with tonight */}
      <Section variant="cta" bg="white">
        <Container size="readable">
          <div className="bg-gradient-to-r from-teal to-[#164e63] text-white rounded-[20px] p-8 lg:p-12 shadow-lg text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Start with tonight
            </h2>
            <p className="text-white/85 text-base max-w-md mx-auto mb-8">
              Check live glow conditions and lunar dark skies across every major US and Puerto Rico paddle location.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/glow-forecast/"
                className="w-full sm:w-auto bg-coral hover:bg-[#ff7b52] text-white text-sm font-bold h-12 px-6 rounded-full inline-flex items-center justify-center transition-colors shadow-md text-center"
              >
                See tonight&apos;s glow forecast
              </Link>
              <Link
                href="/moon-phase-calendar/"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold h-12 px-6 rounded-full inline-flex items-center justify-center transition-colors text-center"
              >
                Open the moon calendar
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
