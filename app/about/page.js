import Banner from "@/layout/Banner";
import React from "react";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Heart,
  Eye,
  Star,
  Users,
  ArrowUpRight,
  Stethoscope,
  Globe,
  HandHeart,
  Quote,
  Play,
  Check,
} from "lucide-react";

function AboutPage() {
  const stats = [
    { Icon: Stethoscope, value: "50+", label: "Medical Volunteers" },
    { Icon: Globe, value: "10+", label: "Communities Served" },
    { Icon: HandHeart, value: "5000+", label: "Lives Impacted" },
    { Icon: Heart, value: "20+", label: "Medical Camps" },
  ];

  const foundation = [
    {
      Icon: Heart,
      tone: "primary",
      title: "Our Mission",
      body: "To enable free access to universal healthcare to all communities while bringing healing to communities and bridging the gap to healthcare needs.",
    },
    {
      Icon: Eye,
      tone: "secondary",
      title: "Our Vision",
      body: "Uniting Christian medical teams with skills and training to provide free, quality, accessible and acceptable medical care to low-resource and conflict-stricken communities with lifesaving healthcare.",
    },
    {
      Icon: Star,
      tone: "accent",
      title: "Core Values",
      values: [
        "Faith",
        "Love",
        "Volunteerism",
        "Integrity",
        "Teamwork",
        "Results-Oriented",
      ],
    },
  ];

  const leaderPoints = [
    {
      title: "Limited access to healthcare services",
      desc: "Uganda's healthcare system is still struggling to provide access to basic healthcare services, especially in rural areas.",
    },
    {
      title: "High disease burden",
      desc: "Uganda has a high prevalence of infectious diseases such as malaria, HIV/AIDS, and tuberculosis.",
    },
    {
      title: "Inadequate healthcare financing",
      desc: "Uganda's healthcare system is underfunded with inadequate resources allocated to health.",
    },
    {
      title: "Poor health infrastructure",
      desc: "The country's health infrastructure is inadequate, with a shortage of hospitals and medical equipment.",
    },
  ];

  const work = [
    {
      img: "/img/partnerships.jpg",
      pill: "Collaborations",
      title: "Our Partnerships",
      desc: "Partnering with Holy Innocents Children's Hospital and Children's Surgery International, Doctors on Mission International participated in a week-long children's surgical camp aimed at providing life-saving surgical procedures to over 200 children in southwestern Uganda.",
      cta: "View Programs",
      href: "/programs",
    },
    {
      img: "/img/volunteers.jpg",
      pill: "Join Our Team",
      title: "Volunteers",
      desc: "One of our volunteers building rapport with a patient awaiting surgery at a recently concluded surgical camp at Holy Innocents Children's Hospital, Mbarara, Uganda. Doctors on Mission International champions medical outreach to resource-limited settings to provide life-changing healthcare.",
      cta: "Join Team",
      href: "/voluteer",
    },
    {
      img: "/img/trainings.jpg",
      pill: "Education",
      title: "Trainings",
      desc: "Doctors on Mission International partnered with Hautement Smile Uganda, a locally-based organization, to provide training support for health workers in Mbarara District, aimed at increasing awareness of new treatment guidelines for childhood illnesses.",
      cta: "View Programs",
      href: "/programs",
    },
  ];

  const partners = [
    {
      name: "Mempal Medical Services",
      tagline: "Your Health, Our Priority",
      desc: "Founded in September 2020, Mempal Medical Services was registered and launched as a community-based healthcare facility with the primary aim of providing healthcare services to communities in southwestern Uganda where Doctors on Mission primarily operates.",
    },
    {
      name: "Hautement Smile Uganda",
      tagline: "Haven's health is Our Heart",
      desc: "A volunteer-run, community-based organization operating in southwestern Uganda, Mbarara District, with the aim of increasing accessibility to women's healthcare services through community-based interventions.",
    },
    {
      name: "Holy Innocents Children's Hospital",
      tagline: "Centre of excellence in pediatric care",
      desc: "Holy Innocents Children's Hospital is a faith-based, non-partisan, church-owned hospital with the aim of being a center of excellence in pediatric care in Uganda.",
    },
  ];

  const tone = {
    primary:
      "bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]",
    secondary: "bg-[color:var(--brand-secondary)]/18 text-[#a07d1e]",
    accent: "bg-[color:var(--brand-accent)]/15 text-[#0b7e94]",
  };

  return (
    <>
      <Banner
        eyebrow="About Us"
        title="About Us"
        subtitle="Bringing healing to communities while serving God."
      />

      {/* Impact stats */}
      <section className="bg-[color:var(--paper)] px-5 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                  <s.Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.82rem] text-[color:var(--muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
                <HandHeart className="h-3 w-3" />
              </span>
              Our Story
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Who we are
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              <span className="font-semibold text-[color:var(--ink)]">
                Doctors on Mission International
              </span>{" "}
              is a volunteer-based non-profit organization uniting like-minded
              Christian medical teams with the aim of serving humanity with
              freely accessible, acceptable and reliable medical and surgical
              care, reducing the burden of healthcare on communities while
              serving God and bringing healing to those in need.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              Founded in{" "}
              <span className="font-semibold text-[color:var(--ink)]">2023</span>
              , Doctors on Mission International unites Christian medical teams to
              provide quality medical care to underserved communities while
              serving God and bringing healing to those in need.
            </p>

            <div className="mt-8 rounded-[14px] bg-[color:var(--brand-primary)] p-7 sm:p-8">
              <Quote className="h-8 w-8 fill-current text-white/25" />
              <p className="mt-3 text-lg font-light leading-relaxed text-white sm:text-xl">
                We aim to enable free access to universal healthcare to all
                communities while bringing healing and bridging the gap to
                healthcare needs.
              </p>
            </div>
          </div>

          {/* Image + floating cards */}
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[18px] border border-[color:var(--line)] md:h-[520px]">
              <Image
                src="/img/who-we-are.jpg"
                alt="Medical care for children"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-4 shadow-xl shadow-black/5 sm:-left-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-secondary)]/18 text-[#a07d1e]">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  Faith-Driven
                </p>
                <p className="text-xs text-[color:var(--muted)]">
                  Serving with love
                </p>
              </div>
            </div>

            {/* Mini impact chart (donation-chart ref echo) */}
            <div className="absolute -top-6 -right-2 w-44 rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-4 shadow-xl shadow-black/5 sm:-right-6">
              <p className="text-xs font-semibold text-[color:var(--ink)]">
                Lives reached
              </p>
              <p className="text-[0.68rem] text-[color:var(--muted)]">
                Growth since 2023
              </p>
              <div className="mt-3 flex items-end gap-1.5">
                {[40, 58, 76, 100].map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="w-full rounded-t bg-[color:var(--brand-primary)]"
                      style={{
                        height: `${h * 0.5}px`,
                        opacity: 0.5 + i * 0.16,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[0.6rem] text-[color:var(--muted)]">
                <span>2023</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-[color:var(--surface)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
              What Drives Us
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Our Foundation
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {foundation.map((c) => (
              <div
                key={c.title}
                className="flex h-full flex-col rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(12,34,51,0.5)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone[c.tone]}`}
                >
                  <c.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
                  {c.title}
                </h3>
                {c.body && (
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                    {c.body}
                  </p>
                )}
                {c.values && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.values.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--surface)] px-3 py-1.5 text-[0.8rem] font-medium text-[color:var(--ink-soft)]"
                      >
                        <Check
                          className="h-3 w-3 text-[color:var(--brand-primary-700)]"
                          strokeWidth={3}
                        />
                        {v}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Team Leader */}
      <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-secondary)] text-white">
                <Quote className="h-3 w-3 fill-current" />
              </span>
              Leadership
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Message from our Team Leader
            </h2>
          </div>

          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="relative h-full rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 md:p-10">
                <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
                  <span className="font-semibold text-[color:var(--ink)]">
                    Greetings from Doctors on Mission International
                  </span>{" "}
                  a volunteer-based non-profit organization with an aim of being
                  a pillar of medical missions in resource-limited settings. We
                  champion community-based healthcare provision through
                  tailor-made community programs.
                </p>

                <div className="mt-6 space-y-3">
                  {leaderPoints.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-4"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--brand-primary)]" />
                      <p className="text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                        <span className="font-semibold text-[color:var(--ink)]">
                          {item.title}:
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[0.92rem] leading-relaxed text-[color:var(--muted)]">
                  Doctors on Mission International aims to bridge the healthcare
                  gap in rural settings through Christian-based medical missions.
                  I encourage you to partner with us in making this vision a
                  reality. May God richly bless you as you consider donating to
                  support this transformative work in Africa.
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-[color:var(--line)] pt-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-lg font-semibold text-white">
                    PM
                  </span>
                  <div>
                    <p className="font-semibold text-[color:var(--ink)]">
                      Dr Mulyamboga Paul
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">
                      Team Leader, Doctors on Mission International
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[16px] border border-[color:var(--line)]">
                <Image
                  src="/img/team-leader.jpg"
                  alt="Dr Mulyamboga Paul - Team Leader"
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-white/95 p-3 backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                    <HandHeart className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.7rem] text-[color:var(--muted)]">
                      Committed to
                    </p>
                    <p className="text-sm font-semibold text-[color:var(--ink)]">
                      Christian Medical Missions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our work */}
      <section className="bg-[color:var(--surface)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
              Making an Impact
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Our work in the community
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {work.map((w) => (
              <article
                key={w.title}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.55)]"
              >
                <div className="relative m-2.5 overflow-hidden rounded-[12px]">
                  <img
                    src={w.img}
                    alt={w.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[0.72rem] font-medium text-[color:var(--ink)] backdrop-blur">
                    {w.pill}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                  <h3 className="text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                    {w.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                    {w.desc}
                  </p>
                  <a
                    href={w.href}
                    className="group/btn mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
                  >
                    {w.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video (dark) */}
      <section className="bg-[color:var(--ink)] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.78rem] font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
              Watch Our Story
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl">
              Gulu Medical Camp,{" "}
              <span className="text-[color:var(--brand-accent)]">
                Ogul Village
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/70">
              Get insights and inspiration from this featured video showcasing
              our impact.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[16px] border border-white/10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Guups3m-nhs?si=f7oE5HgSCg_LrnrD"
                title="Gulu Medical camp Ogul Village 2023"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[color:var(--ink)] backdrop-blur">
              <Play className="h-3.5 w-3.5 fill-current text-[color:var(--brand-primary-700)]" />
              Featured video
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
              Doctors on Mission International
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Our trusted partners
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-full flex-col rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(12,34,51,0.5)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                  <Stethoscope className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg tracking-[-0.02em] text-[color:var(--ink)]">
                  {p.name}
                </h3>
                <p className="mt-1 text-[0.78rem] font-medium text-[color:var(--brand-primary-700)]">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (static) */}
      <FAQAccordion intro="Answers to common questions about who we are, how we work and how you can be part of the mission." />

      {/* CTA */}
      <section className="bg-[color:var(--paper)] px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[20px] bg-[color:var(--brand-primary)] px-6 py-16 text-center sm:px-12">
            <div className="mx-auto max-w-2xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                Make a difference today
              </p>
              <h2 className="mt-4 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                Join us in transforming lives
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/85">
                Partner with Doctors on Mission International to bring hope and
                healing to communities in need. Your support can transform lives
                and create lasting change.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/support" className="btn btn-accent btn-lg">
                  <Heart className="h-4 w-4" /> Donate Now
                </a>
                <a href="/voluteer" className="btn btn-ghost btn-lg">
                  <Users className="h-4 w-4" /> Become a Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
