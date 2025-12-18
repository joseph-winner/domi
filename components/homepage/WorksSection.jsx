import React from "react";

function WorksSection() {
  const items = [
    {
      title: "Our Partnerships",
      desc: `Partnering with Holy Innocent’s Children’s Hospital and Children’s Surgery International, Doctors on Mission International participated in a one-week children’s surgical camp aimed at providing life-saving surgical procedures to over 200 children in south western Uganda. We believe in free access to healthcare to all communities regardless of social status — and we continue championing universal health care in Uganda.`,
      cta: "Programs",
      href: "/programs",
      img: "/img/partnerships.jpg",
      pill: "Community",
    },
    {
      title: "Volunteers",
      desc: `Our volunteers build trust with patients and families from triage and counselling to follow-up care. We champion medical outreach in low-resource settings and work hand-in-hand with local teams to deliver compassionate, life-changing healthcare.`,
      cta: "Join Team",
      href: "/volunteer",
      img: "/img/volunteers.jpg",
      pill: "Get involved",
    },
    {
      title: "Trainings",
      desc: `Doctors on Mission International partnered with Hautement Smile Uganda to support training of health workers in Mbarara District. The goal: strengthen awareness of new treatment guidelines for childhood illnesses and improve quality of care across the region.`,
      cta: "Programs",
      href: "/programs",
      img: "/img/trainings.jpg",
      pill: "Capacity building",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute -bottom-40 right-[-8rem] h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute -bottom-44 left-[-10rem] h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-[0.55rem] text-amber-600 ring-1 ring-amber-500/30">
              ●
            </span>
            How we create impact
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            A closer look at our work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
            Stories from the field where partnerships, volunteers, and trainings
            come together to deliver compassionate, life-changing care for
            children and families.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative flex h-full flex-col rounded-3xl bg-gradient-to-b from-slate-900/5 via-white to-slate-900/5 p-[1px] shadow-[0_16px_45px_-28px_rgba(15,23,42,0.8)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-32px_rgba(15,23,42,0.9)]"
            >
              <article className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white">
                {/* image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-60">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

                  {/* pill */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-slate-900 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    {item.pill}
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-sm font-semibold text-amber-950 shadow-sm transition hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      <span className="px-3 py-2">{item.cta}</span>
                      <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-950/80">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h12" />
                          <path d="M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </a>

                    {/* subtle accent */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200/80 transition group-hover:bg-slate-900/10">
                      <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-500" />
                    </div>
                  </div>
                </div>

                {/* bottom accent line */}
                <div className="absolute inset-x-6 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-amber-500 via-emerald-500 to-sky-500 opacity-80" />
              </article>

              {/* glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-slate-900/5 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
