"use client";

import React from "react";
import {
  HeartHandshake,
  Play,
  ShieldCheck,
  Stethoscope,
  Users,
  ArrowRight,
} from "lucide-react";

function FundraisingSection() {
  const videos = [
    {
      title: "Site visit, architectural planning, and technical team review",
      note: "See the vision on the ground in Gulu and how your support turns plans into care.",
      youtubeId: "wYSURsLg45U?si=l77yhtVE1RB5J52n",
      tag: "On-site progress",
      icon: Users,
    },
    {
      title: "Technical team review and assessment of the build",
      note: "A transparent look at milestones, needs, and the next steps in construction.",
      youtubeId: "mDI0Txjir8k?si=RH0kyiYF6no7s6ah",
      tag: "Engineering update",
      icon: ShieldCheck,
    },
    {
      title: "Community support and impact stories",
      note: "Hear from community members and partners about why this center matters.",
      youtubeId: "pCgwrY99J0I?si=pQ7OAGc9tHiF-07u",
      tag: "Community stories",
      icon: HeartHandshake,
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Accountable giving",
      desc: "Clear milestones, documented progress, and responsible use of funds.",
      tone: "text-[color:var(--brand-secondary)]",
    },
    {
      icon: Users,
      title: "Community-centered",
      desc: "Designed to serve real needs with local collaboration and long-term impact.",
      tone: "text-[color:var(--brand-accent)]",
    },
    {
      icon: Stethoscope,
      title: "Health services",
      desc: "Supporting care access, equipment, and future staffing readiness.",
      tone: "text-[color:var(--brand-primary)]",
    },
  ];

  return (
    <section className="bg-[color:var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.78rem] font-medium text-white/80 backdrop-blur">
              <Stethoscope className="h-3.5 w-3.5 text-[color:var(--brand-primary)]" />
              Fundraising for the Dr. John L. LaNoue Medical Center, Gulu
            </span>

            <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
              Healing in His Name
            </h2>
            <p className="mt-3 text-lg font-medium text-[color:var(--brand-primary)]">
              Help build a center of care for communities in need.
            </p>
            <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-white/70">
              Your gift supports construction, equipment, and essential services
              so families can access reliable care closer to home.
            </p>
          </div>

          {/* Progress card */}
          <div className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-white/85">
              Partner with us to build the Medical Center.
            </p>
            <p className="mt-1.5 text-[0.85rem] leading-relaxed text-white/60">
              Your gift today helps move construction, equipment, and care
              forward in Gulu.
            </p>
            <a
              href="/donate"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
            >
              Donate now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Media block */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Main video */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dyyWm4qm28k?si=sgkkB2IEaTlseHof"
                  title="Healing in His Name — The John L. LaNoue Medical Center"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-[0.8rem] text-white/85 backdrop-blur">
                <Play className="h-3.5 w-3.5 fill-current text-[color:var(--brand-primary)]" />
                Watch the story
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 bg-black/30 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    The John L. LaNoue Medical Center
                  </p>
                  <p className="mt-1 text-[0.85rem] text-white/70">
                    Building a place of care • Gulu, Uganda
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#updates"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                  >
                    See updates
                  </a>
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
                  >
                    Support the build <HeartHandshake className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Side card */}
          <aside className="lg:col-span-4">
            <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                  <img
                    src="/img/john.webp"
                    alt="Dr. John L. LaNoue"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="text-[0.8rem] text-white/70">Project lead</p>
                  <p className="text-lg font-medium">Dr. John L. LaNoue</p>
                  <p className="text-[0.8rem] text-white/60">
                    Medical Center • Gulu
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {pillars.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <item.icon className={`mt-0.5 h-5 w-5 flex-none ${item.tone}`} />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/donate"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)]"
              >
                Donate to the Medical Center <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-white/60">
                Prefer a custom amount?{" "}
                <a
                  href="/donate"
                  className="text-white underline decoration-white/30 underline-offset-4"
                >
                  Give here
                </a>
                .
              </p>
            </div>
          </aside>
        </div>

        {/* Video grid */}
        <div id="updates" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.8rem] text-white/70">Latest media</p>
              <h3 className="mt-1 text-2xl tracking-[-0.02em] text-white">
                Project updates & field videos
              </h3>
            </div>
            <a
              href="/donate"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 sm:inline-flex"
            >
              Keep it moving{" "}
              <HeartHandshake className="h-4 w-4 text-[color:var(--brand-primary)]" />
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => {
              const Icon = v.icon;
              return (
                <article
                  key={i}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/85 backdrop-blur">
                      <Icon className="h-3.5 w-3.5 text-[color:var(--brand-accent)]" />
                      {v.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-medium leading-snug text-white">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-[0.85rem] text-white/70">{v.note}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href="/donate"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
                      >
                        Donate <ArrowRight className="h-4 w-4" />
                      </a>
                      <span className="text-xs text-white/60">
                        Every gift counts
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundraisingSection;
