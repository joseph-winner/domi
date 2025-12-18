import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

function MissionsSection() {
  const cards = [
    {
      icon: FaBullseye,
      label: "Mission",
      pill: "Why we go",
      title: "Our Mission",
      text: "To enable free access to universal healthcare to all communities, bringing healing and bridging the gap to essential healthcare needs.",
    },
    {
      icon: FaEye,
      label: "Vision",
      pill: "What we see",
      title: "Our Vision",
      text: "Uniting Christian medical teams with skills and training to provide free, quality and compassionate care in low‑resource and conflict‑stricken communities.",
    },
    {
      icon: FaHeart,
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

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center justify-center rounded-full border border-[#10C0DE]/20 bg-[#10C0DE]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#045D42]">
            Our heartbeat
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
            What Guides Every Mission
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Behind every outreach is a clear mission, a hopeful vision and
            unshakable values that keep our hearts aligned with the people we
            serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group relative flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white px-7 py-10 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9FCFF] text-[#10C0DE]">
                    <Icon className="text-3xl" />
                  </div>
                </div>

                <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#045D42]/80">
                  {card.label}
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>

                {card.pill && (
                  <span className="mb-4 inline-flex items-center rounded-full bg-[#10C0DE]/5 px-3 py-1 text-[0.68rem] font-medium text-[#045D42] ring-1 ring-[#10C0DE]/20">
                    {card.pill}
                  </span>
                )}

                {card.text && (
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {card.text}
                  </p>
                )}

                {card.list && (
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-800 inline-block text-left">
                    {card.list.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10C0DE]/80" />
                        <span>{item}</span>
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
