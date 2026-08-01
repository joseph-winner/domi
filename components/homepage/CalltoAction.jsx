import React from "react";
import { Heart, Users, ArrowUpRight } from "lucide-react";

function CalltoAction() {
  const options = [
    {
      Icon: Heart,
      href: "#support-child",
      title: "Support a child's surgery",
      desc: "Help fund critical surgeries so children can receive the life-saving care they deserve.",
      cta: "Learn more",
    },
    {
      Icon: Users,
      href: "#kibuku-mission",
      title: "Kibuku Medical Mission",
      desc: "Support our on-the-ground medical outreach bringing care to under-served communities in Kibuku.",
      cta: "Get involved",
    },
  ];

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[color:var(--brand-primary)] px-6 py-14 sm:px-12 lg:py-16">
          {/* subtle grid + glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                Make an impact today
              </p>
              <h2 className="mt-4 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                Your support changes lives
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/85">
                Choose how you would like to get involved and help provide
                life-changing care for children and communities.
              </p>
            </div>

            {/* Option cards */}
            <div className="mx-auto mt-11 grid max-w-3xl gap-5 sm:grid-cols-2">
              {options.map((o) => (
                <a
                  key={o.title}
                  href={o.href}
                  className="group flex flex-col rounded-[1.4rem] bg-white/95 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]">
                    <o.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg tracking-[-0.02em] text-[color:var(--ink)]">
                    {o.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                    {o.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary-700)]">
                    {o.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction;
