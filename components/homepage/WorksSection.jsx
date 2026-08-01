import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

function WorksSection() {
  const items = [
    {
      title: "Our Partnerships",
      desc: `Partnering with Holy Innocent's Children's Hospital and Children's Surgery International, Doctors on Mission International participated in a one-week children's surgical camp aimed at providing life-saving surgical procedures to over 200 children in south western Uganda. We believe in free access to healthcare to all communities regardless of social status, and we continue championing universal health care in Uganda.`,
      cta: "Programs",
      href: "/programs",
      img: "/img/partnerships.jpg",
      pill: "Community",
    },
    {
      title: "Volunteers",
      desc: `Our volunteers build trust with patients and families from triage and counselling to follow-up care. We champion medical outreach in low-resource settings and work hand-in-hand with local teams to deliver compassionate, life-changing healthcare.`,
      cta: "Join Team",
      href: "/voluteer",
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
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            How we create impact
          </span>
          <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            A closer look at our work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            Stories from the field where partnerships, volunteers and trainings
            come together to deliver compassionate, life-changing care for
            children and families.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(20,33,31,0.55)]"
            >
              <div className="relative m-2.5 overflow-hidden rounded-[1.15rem]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[0.72rem] font-medium text-[color:var(--ink)] shadow-sm backdrop-blur">
                  {item.pill}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                <h3 className="text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                  {item.desc}
                </p>

                <a
                  href={item.href}
                  className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
