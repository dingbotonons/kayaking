import { ShieldAlert, Compass, CheckCircle2, Eye } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  CONTACT_DATA,
  CONTACT_EMAIL,
  getDisplayContactEmail,
} from "@/src/data/contact";

export function ContactSections() {
  const displayEmail = getDisplayContactEmail();
  const isEmailConfigured = true;

  return (
    <>
      {/* SECTION 1: BEFORE YOU WRITE */}
      <Section bg="seafoam" id="before-you-write">
        <Container size="readable">
          <SectionHeader title="Before you write" align="left" />

          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-4 text-base leading-7 text-ink/80 font-sans">
                {CONTACT_DATA.beforeYouWrite.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: SEND US A MESSAGE */}
      <Section bg="white" id="send-us-a-message">
        <Container>
          <SectionHeader title="Send us a message" align="left" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-4">
              <div className="bg-seafoam/50 rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-ink leading-snug mb-3">
                  Prefer email?
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  Write to us at{" "}
                  {isEmailConfigured ? (
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-bold text-teal underline underline-offset-4 hover:text-ink transition-colors break-all"
                    >
                      {displayEmail}
                    </a>
                  ) : (
                    <span className="font-bold text-teal break-words">
                      {displayEmail}
                    </span>
                  )}
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: WHAT TO CONTACT US ABOUT */}
      <Section bg="seafoam" id="what-to-contact-us-about">
        <Container>
          <SectionHeader title="What to contact us about" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CONTACT_DATA.whatToContactAbout.map((item, idx) => {
              const Icon =
                idx === 0 ? CheckCircle2 : idx === 1 ? Compass : Eye;
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-ink/80 font-sans">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

