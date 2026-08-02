import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import teamLeaderImg from "@/public/img/team-leader.jpg";

function MessageSection() {
  const paragraphs = [
    {
      lead: "Greeting from Doctor's on Mission International",
      body: " a volunteer-based, non-for-profit organization with an aim of being a pillar of medical missions in resource-limited settings. We champion community-based healthcare provision through tailor-made community programs.",
    },
    {
      lead: "Limited access to healthcare services:",
      body: " Uganda's healthcare system is still struggling to provide access to basic healthcare services, especially in rural areas.",
    },
    {
      lead: "High disease burden:",
      body: " Uganda has a high prevalence of infectious diseases such as malaria, HIV/AIDS, and tuberculosis, which puts a strain on the healthcare system.",
    },
    {
      lead: "Inadequate healthcare financing:",
      body: " Uganda's healthcare system is underfunded, with inadequate resources allocated to health, leading to a shortage of medical personnel, equipment, and medicines.",
    },
    {
      lead: "Poor health infrastructure:",
      body: " The country's health infrastructure is inadequate, with a shortage of hospitals, health centers, and medical equipment, making it difficult to provide quality healthcare services. Doctors on Mission International aims at bridging the gap of healthcare in rural settings through Christian-based medical missions. I encourage you to partner with us in making this possible. May God richly bless you as you consider donating to support this work in Africa.",
    },
  ];

  return (
    <section className="bg-[color:var(--surface)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Leadership Message
          </span>
          <h2 className="mt-6 text-[2.25rem] leading-[1.02] tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            Message from{" "}
            <span className="tone-muted">our Team Leader</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            A personal word from the heart of our mission, sharing the realities
            on the ground and the hope we carry into every community we serve.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-5">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[16px] border border-[color:var(--line)]">
              <Image
                src={teamLeaderImg}
                alt="Dr Mulyamboga Paul - Team Leader"
                fill
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
                  Team Leader
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  Dr Mulyamboga Paul
                </p>
                <p className="mt-0.5 text-[0.8rem] text-white/75">
                  Doctors on Mission International
                </p>
              </div>
            </div>
          </div>

          {/* Letter */}
          <div className="lg:col-span-3">
            <div className="relative h-full rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 md:p-10">
              <Quote className="absolute right-8 top-8 h-12 w-12 fill-current text-[color:var(--brand-secondary)]/20" />
              <div className="space-y-4 text-[0.92rem] leading-relaxed text-[color:var(--muted)]">
                {paragraphs.map((p) => (
                  <p key={p.lead}>
                    <strong className="font-semibold text-[color:var(--ink)]">
                      {p.lead}
                    </strong>
                    {p.body}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--line)] pt-5">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--ink)]">
                    Dr Mulyamboga Paul
                  </p>
                  <p className="text-xs text-[color:var(--muted)]">
                    Team Leader, Doctors on Mission International
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[0.72rem] font-medium text-[color:var(--ink-soft)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--surface)] px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
                    Impact-driven mission
                  </span>
                  <span className="hidden items-center rounded-full bg-[color:var(--surface)] px-3 py-1 sm:inline-flex">
                    Community health
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

export default MessageSection;
