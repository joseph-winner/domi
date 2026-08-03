import React from "react";
import Image from "next/image";
import { ArrowUpRight, HeartHandshake, MapPin } from "lucide-react";

function AboutSection() {
  const stats = [
    {
      value: "2023",
      label: "Founded",
      note: "Established to unite Christian medical teams delivering hope and healing in underserved communities.",
    },
    {
      value: "+500",
      label: "Lives Touched",
      note: "Through free surgeries, outreach clinics and medical missions across low-resource settings.",
    },
  ];

  return (
    <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + stat cells + CTA */}
        <div>
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Who We Are
          </span>

          <h2 className="mt-6 text-[2.25rem] leading-[1.02] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            Uniting medical teams{" "}
            <span className="tone-muted">to serve humanity</span>
          </h2>

          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            Doctor&rsquo;s on Mission International is a volunteer-based
            non-for-profit organization uniting like-minded Christian medical
            teams with the aim of serving humanity through freely accessible,
            acceptable and reliable medical and surgical care. Our goal is to
            reduce the burden on medical care within communities while serving
            God and bringing healing to those in need.
          </p>

          {/* Stat cells — divided card (Medical Resources ref) */}
          <div className="mt-9 grid max-w-lg grid-cols-2 overflow-hidden rounded-2xl border border-[color:var(--line)]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 ${
                  i === 0 ? "border-r border-[color:var(--line)]" : ""
                }`}
              >
                <p className="text-[0.78rem] font-medium uppercase tracking-wide text-[color:var(--muted)]">
                  {s.label}
                </p>
                <p className="mt-1.5 text-4xl font-light tracking-[-0.03em] !text-[color:var(--ink)]">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-[color:var(--muted)]">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand-primary)]/25 transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)]"
          >
            Read More
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right: image + floating card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[18px] border border-[color:var(--line)]">
            <Image
              src="/img/who-we-are.jpg"
              alt="Doctors on Mission International team serving a community"
              width={820}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Floating fact card */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-white/95 p-4 shadow-xl shadow-black/5 backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight !text-[color:var(--ink)]">
                Faith-driven, volunteer-based
              </p>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-[color:var(--muted)]">
                Serving from Mbarara City across South-Western Uganda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
