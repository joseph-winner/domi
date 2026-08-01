import React from "react";
import { Target, Eye, HeartHandshake, Check } from "lucide-react";

function MissionsSection() {
  const cards = [
    {
      icon: Target,
      tone: "primary",
      label: "Mission",
      pill: "Why we go",
      title: "Our Mission",
      text: "To enable free access to universal healthcare to all communities, bringing healing and bridging the gap to essential healthcare needs.",
    },
    {
      icon: Eye,
      tone: "secondary",
      label: "Vision",
      pill: "What we see",
      title: "Our Vision",
      text: "Uniting Christian medical teams with skills and training to provide free, quality and compassionate care in low-resource and conflict-stricken communities.",
    },
    {
      icon: HeartHandshake,
      tone: "accent",
      label: "Values",
      pill: "How we serve",
      title: "Core Values",
      text: "The posture that shapes every clinic, conversation and community we step into.",
      list: [
        "Faith",
        "Love",
        "Voluntarism",
        "Integrity",
        "Team work",
        "Result oriented",
      ],
    },
  ];

  const toneMap = {
    primary: "bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]",
    secondary: "bg-[color:var(--brand-secondary)]/18 text-[#a07d1e]",
    accent: "bg-[color:var(--brand-accent)]/18 text-[#5f7d1f]",
  };

  return (
    <section className="bg-[color:var(--surface)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <HeartHandshake className="h-3 w-3" />
            </span>
            Our heartbeat
          </span>
          <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            What guides every mission
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            Behind every outreach is a clear mission, a hopeful vision and
            unshakable values that keep our hearts aligned with the people we
            serve.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group flex h-full flex-col rounded-[1.5rem] border border-[color:var(--line)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(20,33,31,0.5)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneMap[card.tone]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>

                <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {card.label}
                </p>
                <h3 className="mt-1.5 text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
                  {card.title}
                </h3>

                {card.pill && (
                  <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[color:var(--surface)] px-3 py-1 text-[0.7rem] font-medium text-[color:var(--ink-soft)]">
                    {card.pill}
                  </span>
                )}

                <p className="mt-4 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                  {card.text}
                </p>

                {card.list && (
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {card.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[0.88rem] text-[color:var(--ink-soft)]"
                      >
                        <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionsSection;
