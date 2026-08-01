import React from "react";
import { ArrowRight } from "lucide-react";

function ProgramsSection() {
  const PROGRAM_VIDEO =
    "https://www.youtube.com/embed/pCgwrY99J0I?si=pQ7OAGc9tHiF-07u";
  const INTERVIEW_VIDEO =
    "https://www.youtube.com/embed/mD-TQ4MvZOU?si=NNKJHdNjFQy1_DIB";

  const highlights = [
    { label: "Medical & Surgical Outreach", value: "Community-based care" },
    { label: "Services", value: "Medical • Dental • Eye • HIV counseling" },
    { label: "Impact", value: "Serving hundreds in a single camp" },
    {
      label: "Approach",
      value: "Health education • Vaccination • Follow-up care",
    },
  ];

  const anchors = [
    {
      id: "donate",
      title: "Donate",
      desc: "Help fund medical supplies, transport, and community outreach.",
    },
    {
      id: "contact",
      title: "Partner",
      desc: "Churches, clinics, NGOs, and local leaders are welcome.",
    },
    {
      id: "volunteer-anchor",
      title: "Volunteer",
      desc: "Join medical, logistics, and community support teams on the ground.",
    },
  ];

  return (
    <section id="programs" className="w-full">
      {/* Featured program (dark) */}
      <div className="bg-[color:var(--ink)] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            {/* Left content */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.78rem] font-medium text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                Our Programs
              </span>

              <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl">
                Doctors on Mission{" "}
                <span className="text-white/70">Medical &amp; Surgical Camp</span>
              </h2>

              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Doctors on Mission International partners with local leaders,
                churches, and organizations to deliver compassionate, practical
                healthcare where access is limited or unavailable.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/70">
                Our camps often include free medical reviews, minor procedures,
                dental and eye care, HIV testing &amp; counselling, health
                education, vaccination, and referrals for ongoing care where
                needed.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs font-medium text-white/55">
                      {h.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote + CTA */}
              <div className="mt-8 rounded-[1.5rem] bg-[color:var(--brand-secondary)] p-6 text-[color:var(--ink)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium leading-snug">
                      &ldquo;&hellip;and by His stripes, we are healed&rdquo;
                    </p>
                    <p className="mt-1 text-sm font-semibold opacity-80">
                      Isaiah 53:5
                    </p>
                    <a
                      href="#program-details"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 opacity-90 hover:opacity-100"
                    >
                      Explore full program details
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <a
                    href="#program-details"
                    className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[color:var(--ink)] text-white transition hover:-translate-y-0.5"
                    aria-label="Explore program details"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right video */}
            <div className="lg:col-span-7">
              <div className="h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-[color:var(--brand-primary)]/70" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Program Highlight
                      </p>
                      <p className="text-xs text-white/60">
                        Watch a short recap from the field
                      </p>
                    </div>
                  </div>
                  <span className="hidden rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 sm:inline-flex">
                    YouTube
                  </span>
                </div>

                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={PROGRAM_VIDEO}
                    title="Doctors on Mission - Program Video"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/60">
                    Help make the next camp possible by partnering,
                    volunteering, or donating.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#donate"
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
                    >
                      Support this program
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
                    >
                      Partner with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interview (light) */}
      <div className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
              Doctors on Mission International
            </span>
            <h3 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
              Program interview
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              Hear directly from the team about our collaborations and how each
              medical camp is planned, delivered, and sustained in communities
              across Uganda.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)]">
            <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-4">
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                Featured Interview
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                Watch
              </span>
            </div>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={INTERVIEW_VIDEO}
                title="Doctors on Mission - Interview"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[color:var(--muted)]">
                This interview highlights our partnerships, impact, and the faith
                that undergirds every outreach.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  id="program-details"
                  href="#contact"
                  className="rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Request program details
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--surface)]"
                >
                  Back to programs
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {anchors.map((a) => (
              <div
                key={a.title}
                id={a.id}
                className="rounded-2xl border border-[color:var(--line)] p-5"
              >
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  {a.title}
                </p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
