import React from "react";

function ProgramsSection() {
  // Replace with your real YouTube embed links (share → embed → src)
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

  return (
    <section id="programs" className="w-full">
      {/* ====== TOP: Featured Program (Dark) ====== */}
      <div className="relative overflow-hidden bg-slate-950">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            {/* Left content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                OUR PROGRAMS
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Doctors on Mission{" "}
                <span className="text-white/80">
                  Medical &amp; Surgical Camp
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                Doctors on Mission International partners with local leaders,
                churches, and organizations to deliver compassionate, practical
                healthcare where access is limited or unavailable.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                Our camps often include free medical reviews, minor procedures,
                dental and eye care, HIV testing &amp; counselling, health
                education, vaccination, and referrals for ongoing care where
                needed.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <p className="text-xs font-semibold text-white/60">
                      {h.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote + CTA */}
              <div className="mt-8 rounded-3xl border border-amber-200/20 bg-gradient-to-br from-amber-200 to-amber-300 p-5 text-slate-900 shadow-[0_20px_60px_-25px_rgba(245,158,11,0.65)] sm:p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-base font-bold leading-snug sm:text-lg">
                      “…and by His stripes, we are healed”
                    </p>
                    <p className="mt-1 text-sm font-semibold opacity-90">
                      Isaiah 53:5
                    </p>

                    <a
                      href="#program-details"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 opacity-90 hover:opacity-100"
                    >
                      Explore full program details
                      <span aria-hidden>→</span>
                    </a>
                  </div>

                  <a
                    href="#program-details"
                    className="group relative inline-flex h-14 w-14 flex-none items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5"
                    aria-label="Explore program details"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h12" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right video */}
            <div className="lg:col-span-7">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
                {/* Top bar */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400/70 to-indigo-500/70" />
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

                {/* Responsive iframe */}
                <div className="relative w-full">
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
                </div>

                {/* Footer actions */}
                <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/60">
                    Help make the next camp possible by partnering,
                    volunteering, or donating.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#donate"
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5"
                    >
                      Support this program
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur transition hover:bg-white/10"
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

      {/* ====== BOTTOM: Interview (Light) ====== */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              DOCTORS ON MISSION INTERNATIONAL
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Program interview
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Hear directly from the team about our collaborations and how each
              medical camp is planned, delivered, and sustained in communities
              across Uganda.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_25px_70px_-45px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-semibold text-slate-900">
                Featured Interview
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                Watch
              </span>
            </div>

            <div className="relative w-full">
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
            </div>

            <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600">
                This interview highlights our partnerships, impact, and the
                faith that undergirds every outreach.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  id="program-details"
                  href="#contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Request program details
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Back to programs
                </a>
              </div>
            </div>
          </div>

          {/* Optional anchors for your page */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              id="donate"
              className="rounded-2xl border border-slate-200 p-5"
            >
              <p className="text-sm font-semibold text-slate-900">Donate</p>
              <p className="mt-1 text-sm text-slate-600">
                Help fund medical supplies, transport, and community outreach.
              </p>
            </div>
            <div
              id="contact"
              className="rounded-2xl border border-slate-200 p-5"
            >
              <p className="text-sm font-semibold text-slate-900">Partner</p>
              <p className="mt-1 text-sm text-slate-600">
                Churches, clinics, NGOs, and local leaders are welcome.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">Volunteer</p>
              <p className="mt-1 text-sm text-slate-600">
                Join medical, logistics, and community support teams on the
                ground.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
