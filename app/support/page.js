import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Stethoscope,
  MapPin,
  CalendarDays,
  PlayCircle,
  ShieldCheck,
  Users,
  HandCoins,
} from "lucide-react";
import Banner from "@/layout/Banner";
import FAQAccordion from "@/components/FAQAccordion";

function page() {
  const outreaches = [
    {
      tag: "Previous Outreach",
      title: "Surgical Camp at Holy Innocents Childrens Hospital",
      location: "Mbarara, Uganda",
      date: "7 Days • Paediatric Surgical Camp",
      excerpt:
        "In partnership with Holy Innocents Childrens Hospital, we hosted a week-long paediatric surgical camp with local and visiting clinicians. Our focus was safe surgery, compassionate care, and restoring hope for children and families.",
      highlight: "“He took our illnesses and bore our diseases.” Isaiah 53:4",
      image: "/img/upcoming-programs-1.jpg",
    },
    {
      tag: "Previous Outreach",
      title: "Medical Camp at Rurama Health Centre II, Mitooma District",
      location: "Mitooma, Uganda",
      date: "2 Days • Community Medical Camp",
      excerpt:
        "Together with local partners, we conducted a community medical camp providing consultations, basic labs, treatment, and referrals. We served children, elderly, and families with limited access to care.",
      highlight: "“By His stripes, we were healed.” 1 Peter 2:24",
      image: "/img/upcoming-programs -2.jpg",
    },
  ];

  const missions = [
    "Kibuuku Christian Medical Mission at Bulangira Health Center III, Kibuuku District",
    "Nungamo Christian Medical Mission at Rwashamaire Health Center IV, Isingiro District",
    "Kajara County, Ntungamo District — South-western Uganda",
    "Kisoro Christian Medical Mission at Busanza Health Center IV, Kisoro District",
    "Ibanda Christian Medical Mission at Rukooko Health Center IV, Ibanda District",
  ];

  const quickStats = [
    { icon: Users, label: "Volunteer Teams", value: "Clinicians + Support" },
    {
      icon: HeartHandshake,
      label: "Local Partnerships",
      value: "Hospitals • Leaders",
    },
    { icon: MapPin, label: "Outreach Locations", value: "Across Uganda" },
  ];

  const impact = [
    { value: "+500", label: "Lives touched through outreach" },
    { value: "250+", label: "Patients served in a single camp" },
    { value: "5+", label: "Christian medical missions" },
    { value: "2023", label: "Serving communities since" },
  ];

  return (
    <div>
      <Banner
        eyebrow="Support a Mission"
        title="Support a medical mission"
        subtitle="Connecting volunteer clinicians with local health facilities to deliver life-restoring care across Uganda."
      />

      <main className="bg-[color:var(--paper)] !text-[color:var(--ink)]">
        {/* Intro */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[18px] border border-[color:var(--line)]">
                <img
                  src="/img/support-1.jpg"
                  alt="Clinician preparing for a medical mission"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-white">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                      <Stethoscope className="h-4 w-4" /> Medical Missions
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                      <ShieldCheck className="h-4 w-4" /> Safe, ethical,
                      Compassionate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Support a medical mission
              </span>
              <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
                Care that reaches the last mile
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--muted)]">
                Doctors on Mission connects volunteer clinicians with local
                health facilities to deliver life-restoring care in underserved
                communities. We provide medical camps, surgical outreaches, and
                follow-up care in partnership with hospitals and local leaders.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)]"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#give"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold !text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)]"
                >
                  Donate to a Camp <HandCoins className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {quickStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--section-teal)] p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                      {s.label}
                    </p>
                    <p className="mt-1 text-sm font-medium !text-[color:var(--ink)]">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-[color:var(--muted)]">
                Patients are not charged during our outreach visits. Your support
                covers medicines, supplies, transport, and logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Impact band (Our Impacts ref) */}
        <section className="px-5 pb-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Our Impact
              </span>
              <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
                Your support, made visible
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-[18px] bg-[color:var(--brand-secondary)] px-6 py-12 sm:px-10">
              <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />
              <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {impact.map((s) => (
                  <div key={s.label}>
                    <p className="text-4xl font-medium tracking-[-0.03em] !text-[color:var(--ink)] sm:text-5xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-snug text-[color:var(--ink-soft)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Previous outreaches */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Impact
              </span>
              <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
                Previous Outreaches
              </h2>
              <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
                A snapshot of recent camps and outreaches, each one powered by
                partnerships, volunteer service, and community trust.
              </p>
            </div>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary-700)] hover:underline"
            >
              View more stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {outreaches.map((o) => (
              <article
                key={o.title}
                className="group overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(20,33,31,0.5)]"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[color:var(--brand-primary)]/10 px-3 py-1 text-xs font-medium text-[color:var(--brand-primary-700)]">
                      {o.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--section-teal)] px-3 py-1 text-xs font-medium text-[color:var(--ink-soft)]">
                      <MapPin className="h-3.5 w-3.5" /> {o.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--section-teal)] px-3 py-1 text-xs font-medium text-[color:var(--ink-soft)]">
                      <CalendarDays className="h-3.5 w-3.5" /> {o.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl tracking-[-0.02em] !text-[color:var(--ink)]">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                    {o.excerpt}
                  </p>
                  <div className="mt-5 rounded-2xl border border-[color:var(--line)] bg-[color:var(--section-teal)] p-4">
                    <p className="text-sm font-medium text-[color:var(--ink-soft)]">
                      {o.highlight}
                    </p>
                  </div>
                </div>
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Featured video */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Watch our featured video
            </span>
            <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
              Medical Mission Highlights
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              A quick look at how outreaches are organized, the care delivered,
              and the people impacted.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[18px] border border-[color:var(--line)] bg-black">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/vxvxHN658OE?si=qlTq2K8OVp3f2isn"
                title="Doctors on Mission — Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold !text-[color:var(--ink)] backdrop-blur">
                <PlayCircle className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                Featured mission video
              </div>
            </div>
          </div>
        </section>

        {/* Missions (dark) */}
        <section id="give" className="bg-[color:var(--ink)] text-white">
          <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.78rem] font-medium text-white/80">
                DOMI
              </span>
              <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl">
                Missions
              </h2>

              <ul className="mt-6 space-y-3 text-[0.92rem] leading-relaxed text-white/80">
                {missions.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--brand-accent)]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[16px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">
                  Consider partnering with us today, support a camp today.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Mission partnership
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      +256 782 524 317
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      +256 784 808 738
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Donation / Bank details
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Centenary Bank, Mbarara Branch
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Account: <span className="text-white/80">3100107255</span>
                      <br />
                      SWIFT: <span className="text-white/80">CERBUGKA XXX</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-accent)] px-6 py-3 text-sm font-semibold text-[#06232f] transition hover:-translate-y-0.5 hover:brightness-105"
                  >
                    Donate Now <HandCoins className="h-4 w-4" />
                  </a>
                  <a
                    href="/voluteer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Volunteer <HeartHandshake className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: HandCoins,
                    title: "Sponsor Supplies",
                    desc: "Support medicines, consumables, and equipment for outreach days.",
                  },
                  {
                    icon: Users,
                    title: "Join the Team",
                    desc: "Clinicians, logisticians, and community volunteers are welcome.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Partner with Us",
                    desc: "Hospitals, churches, and orgs can co-host outreach programs.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-[14px] border border-white/10 bg-white/5 p-5"
                  >
                    <span className="inline-flex rounded-xl bg-white/10 p-2">
                      <c.icon className="h-5 w-5 text-[color:var(--brand-accent)]" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-white">
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/65">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full overflow-hidden rounded-[18px] border border-white/10">
                <img
                  src="/img/upcoming-programs.jpg"
                  alt="Surgical team during a medical mission"
                  className="h-full min-h-[420px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-xl rounded-[14px] border border-white/10 bg-black/40 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand-accent)]">
                      Our Promise
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/80">
                      We aim to deliver dignified care, strengthen local
                      capacity, and ensure follow-up pathways through trusted
                      health facilities, so impact continues long after the
                      outreach day.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Patient-first", "Partner-led", "Outcome-driven"].map(
                        (t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute right-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
                    <Stethoscope className="h-4 w-4 text-[color:var(--brand-accent)]" />
                    Doctors on Mission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion
          intro="Answers to common questions about supporting a mission, donations and how your gift is used."
        />
      </main>
    </div>
  );
}

export default page;
