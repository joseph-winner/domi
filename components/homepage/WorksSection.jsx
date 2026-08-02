import React from "react";
import { ArrowUpRight } from "lucide-react";

function WorksSection() {
  const items = [
    {
      title: "Our Partnerships",
      desc: "Partnering with Holy Innocent's Children's Hospital and Children's Surgery International, we ran a one-week children's surgical camp providing life-saving procedures to over 200 children in south western Uganda.",
      cta: "See programs",
      href: "/programs",
      img: "/img/partnerships.jpg",
    },
    {
      title: "Volunteers",
      desc: "Our volunteers build trust with patients and families, from triage and counselling to follow-up care, working hand-in-hand with local teams to deliver compassionate, life-changing healthcare.",
      cta: "Join the team",
      href: "/voluteer",
      img: "/img/volunteers.jpg",
    },
    {
      title: "Trainings",
      desc: "With Hautement Smile Uganda we supported training of health workers in Mbarara District, strengthening awareness of new treatment guidelines for childhood illnesses across the region.",
      cta: "See programs",
      href: "/programs",
      img: "/img/trainings.jpg",
    },
  ];

  return (
    <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            How we create impact
          </span>
          <h2 className="mt-6 text-[2.25rem] leading-[1.02] tracking-[-0.035em] text-[color:var(--ink)] sm:text-5xl">
            A closer look{" "}
            <span className="tone-muted">at our work</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--muted)]">
            Stories from the field where partnerships, volunteers and trainings
            come together to deliver compassionate, life-changing care for
            children and families.
          </p>
        </div>

        {/* Editorial image + caption grid */}
        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-[12px] bg-[color:var(--surface)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[color:var(--muted)]">
                {item.desc}
              </p>
              <a
                href={item.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary-700)]"
              >
                {item.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
