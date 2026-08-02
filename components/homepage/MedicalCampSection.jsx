import React from "react";
import { Play } from "lucide-react";

function MedicalCampSection() {
  const stats = [
    { value: "3 days", label: "Duration" },
    { value: "250+", label: "Patients" },
    { value: "18", label: "Volunteers" },
  ];

  return (
    <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-20">
        {/* Completed Medical Camp */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Panel */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[18px] bg-[color:var(--brand-primary)] p-8 sm:p-10">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                Featured recap
              </p>
              <h3 className="mt-3 text-3xl tracking-[-0.02em] text-white sm:text-[2.1rem]">
                Completed Medical Camp
              </h3>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/90">
                Relive the highlights from our recent outreach camp: stories,
                impact, and moments of hope brought to communities in need.
              </p>
            </div>

            <div className="relative mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4 fill-current text-[color:var(--brand-primary-700)]" />
                Watch camp highlights
              </a>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-medium text-white">{s.value}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="overflow-hidden rounded-[18px] border border-[color:var(--line)] bg-black">
            <div className="aspect-[4/3]">
              <iframe
                src="https://www.youtube.com/embed/vSJ0Ygk9FXc?si=nxzFHxl-LOwDIhdc"
                title="Completed Medical Camp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Eye Surgical Camp */}
        <div className="space-y-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Upcoming mission
            </span>
            <h3 className="mt-6 text-[2.25rem] leading-[1.02] tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl">
              Eye Surgical Camp,{" "}
              <span className="tone-muted">Buhweju Uganda</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              Preparation for the Eye Surgical Camp in Buhweju, Uganda where
              volunteer doctors and partners will restore sight and provide
              essential follow-up care.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[18px] border border-[color:var(--line)] bg-black">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Qqf2VYj4D_A?si=VX6rPMW0ho_0fG_q"
                  title="Eye Surgical Camp"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[0.72rem] font-medium text-[color:var(--ink)] backdrop-blur">
                  In preparation
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 text-[0.72rem] font-medium text-white backdrop-blur">
                  Buhweju, Uganda
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalCampSection;
