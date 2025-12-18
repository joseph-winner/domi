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

  // Brand colors from logo SVG
  const brandPrimary = "#FF126B"; // st1
  const brandGreen = "#A1CB4A"; // st2
  const brandBlue = "#10C0DE"; // st3
  const brandGold = "#EABF4E"; // st4
  const brandDeep = "#053759"; // st8

  return (
    <section
      className="relative"
      style={{ backgroundColor: brandDeep, color: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <Stethoscope className="h-4 w-4" style={{ color: brandBlue }} />
              Fundraising for the Dr. John L. LaNoue Medical Center Gulu
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Healing in His Name
            </h2>
            <p
              className="mt-2 text-xl font-semibold"
              style={{ color: brandPrimary }}
            >
              Help build a center of care for communities in need.
            </p>

            <p className="mt-3 text-base text-white/70 sm:text-lg">
              Your gift supports construction, equipment, and essential services
              so families can access reliable care closer to home.
            </p>
          </div>

          {/* Progress Card */}
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white/80">
                  Partner with us to build the Medical Center.
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Your gift today helps move construction, equipment, and care
                  forward in Gulu.
                </p>
              </div>

              <a
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                style={{ backgroundColor: brandPrimary }}
              >
                Donate now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero media block */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Main video */}
          <div className="lg:col-span-8">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative aspect-video w-full">
                {/* Replace with your YouTube embed/video */}
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dyyWm4qm28k?si=sgkkB2IEaTlseHof"
                  title="Healing in His Name — The John L. LaNoue Medical Center"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Overlay label */}
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Play className="h-4 w-4" style={{ color: brandBlue }} />
                Watch the story
              </div>

              {/* Bottom CTA strip */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex flex-col gap-4 border-t border-white/10 bg-slate-950/80 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      The John L. LaNoue Medical Center
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Building a place of care • Gulu, Uganda
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#updates"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                    >
                      See updates
                    </a>
                    <a
                      href="/donate"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2 text-sm font-semibold text-slate-900 transition hover:opacity-95"
                      style={{ backgroundColor: brandPrimary }}
                    >
                      Support the build <HeartHandshake className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side card */}
          <aside className="lg:col-span-4">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                    {/* Replace with the actual doctor image */}
                    <img
                      src="/img/john.webp"
                      alt="Dr. John L. LaNoue"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* <div className="absolute inset-0 flex items-center justify-center text-xs text-white/60">
                      Photo
                    </div> */}
                  </div>

                  <div>
                    <p className="text-sm text-white/70">Project lead</p>
                    <p className="text-lg font-semibold">Dr. John L. LaNoue</p>
                    <p className="text-sm text-white/60">
                      Medical Center • Gulu
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Accountable giving",
                      desc: "Clear milestones, documented progress, and responsible use of funds.",
                      color: brandGold,
                    },
                    {
                      icon: Users,
                      title: "Community-centered",
                      desc: "Designed to serve real needs with local collaboration and long-term impact.",
                      color: brandGreen,
                    },
                    {
                      icon: Stethoscope,
                      title: "Health services",
                      desc: "Supporting care access, equipment, and future staffing readiness.",
                      color: brandBlue,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <item.icon
                        className="mt-0.5 h-5 w-5"
                        style={{ color: item.color }}
                      />
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm text-white/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="/donate"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                    style={{ backgroundColor: brandPrimary }}
                  >
                    Donate to the Medical Center{" "}
                    <ArrowRight className="h-4 w-4" />
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
              </div>
            </div>
          </aside>
        </div>

        {/* Video grid */}
        <div id="updates" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-white/70">Latest media</p>
              <h3 className="mt-1 text-2xl font-semibold">
                Project updates & field videos
              </h3>
            </div>
            <a
              href="/donate"
              className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 sm:inline-flex"
            >
              Keep it moving{" "}
              <HeartHandshake
                className="h-4 w-4"
                style={{ color: brandBlue }}
              />
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => {
              const Icon = v.icon;
              return (
                <article
                  key={i}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                      <Icon
                        className="h-3.5 w-3.5"
                        style={{ color: brandGreen }}
                      />
                      {v.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-semibold leading-snug">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/70">{v.note}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href="/donate"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-slate-900 transition hover:opacity-95"
                        style={{ backgroundColor: brandPrimary }}
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
