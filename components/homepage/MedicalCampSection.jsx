import React from "react";

function MedicalCampSection() {
  return (
    <section className="relative px-4 py-20 sm:py-24 bg-gradient-to-b from-sky-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center opacity-50">
        <div className="h-64 w-64 rounded-full bg-[#10C0DE]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* Completed Medical Camp Card */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text card */}
          <div className="relative w-full">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#10C0DE]/40 via-[#EABF4E]/40 to-[#053759]/40 blur opacity-60" />

            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#10C0DE] via-[#05b3ce] to-[#0786a0] p-8 sm:p-10 shadow-xl shadow-sky-900/20">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                  Featured recap
                </p>
                <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-white">
                  Completed Medical Camp
                </h3>
                <p className="mb-6 text-sm md:text-base text-cyan-50/95">
                  Relive the highlights from our recent outreach camp—stories,
                  impact, and moments of hope brought to communities in need.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0c90ac] shadow-md shadow-sky-900/10 ring-1 ring-white/60 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10C0DE]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10C0DE]/10 text-[#0c90ac]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M8.5 6.75v10.5a.75.75 0 0 0 1.133.624l8-5.25a.75.75 0 0 0 0-1.248l-8-5.25A.75.75 0 0 0 8.5 6.75Z" />
                    </svg>
                  </span>
                  <span>Watch camp highlights</span>
                </a>

                <div className="grid grid-cols-3 gap-3 text-xs text-cyan-50/80">
                  <div>
                    <p className="font-semibold text-white">3 days</p>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                      Duration
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">250+</p>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                      Patients
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">18</p>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                      Volunteers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video preview */}
          <div className="relative w-full">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#EABF4E]/30 blur-2xl" />

            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/90 shadow-[0_22px_55px_rgba(15,23,42,0.75)] ring-1 ring-slate-700/60 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.9)]">
              <div className="relative bg-black/90">
                <div className="aspect-[4/3]">
                  <iframe
                    src="https://www.youtube.com/embed/vSJ0Ygk9FXc?si=nxzFHxl-LOwDIhdc"
                    title="Completed Medical Camp"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>

                {/* Soft vignette */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Eye Surgical Camp Section */}
        <div className="space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700/70">
              Upcoming mission
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#053759]">
              Eye Surgical Camp, Buhweju Uganda
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              Preparation for the Eye Surgical Camp in Buhweju, Uganda where
              volunteer doctors and partners will restore sight and provide
              essential follow-up care.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute right-0 -top-10 rounded-full border border-dashed border-sky-200 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sky-700 bg-white/80 backdrop-blur">
              In preparation
            </div>

            <div className="group rounded-[1.85rem] bg-slate-950/90 p-1 shadow-[0_20px_55px_rgba(15,23,42,0.7)] ring-1 ring-sky-100/15 backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
              <div className="relative overflow-hidden rounded-[1.55rem] bg-black/90">
                <div className="aspect-[4/3]">
                  <iframe
                    src="https://www.youtube.com/embed/Qqf2VYj4D_A?si=VX6rPMW0ho_0fG_q"
                    title="Eye Surgical Camp"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>

                {/* Soft vignette and overlay */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between text-xs text-slate-100/80">
                  <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur-md">
                    Preview of upcoming camp
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur-md border border-white/15">
                    Buhweju, Uganda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalCampSection;
