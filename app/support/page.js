import React from "react";
import {
  ArrowRight,
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
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f3b2?auto=format&fit=crop&w=1400&q=80",
    },
    {
      tag: "Previous Outreach",
      title: "Medical Camp at Rurama Health Centre II, Mitooma District",
      location: "Mitooma, Uganda",
      date: "2 Days • Community Medical Camp",
      excerpt:
        "Together with local partners, we conducted a community medical camp providing consultations, basic labs, treatment, and referrals. We served children, elderly, and families with limited access to care.",
      highlight: "“By His stripes, we were healed.” 1 Peter 2:24",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const missions = [
    "Kibuuku Christian Medical Mission at Bulangira Health Center III, Kibuuku District",
    "Nungamo Christian Medical Mission at Rwashamaire Health Center IV, Isingiro District",
    "Kajara County, Ntungamo District — South-western Uganda",
    "Kisoro Christian Medical Mission at Busanza Health Center IV, Kisoro District",
    "Ibanda Christian Medical Mission at Rukooko Health Center IV, Ibanda District",
  ];

  return (
    <div>
      <Banner
        title="Support a medical mission"
        subtitle="Our Programs at Doctors On Mission"
      />
      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50 text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* soft pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute left-1/2 top-10 h-40 w-[40rem] -translate-x-1/2 rounded-full bg-white/70 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-10 lg:pb-16 lg:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-sky-400/20 via-emerald-300/10 to-white/10 blur-md" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-[0_25px_70px_-45px_rgba(2,132,199,0.6)] backdrop-blur">
                    <img
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
                      alt="Clinician preparing for a medical mission"
                      className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[520px]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/90">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                          <Stethoscope className="h-4 w-4" />
                          Medical Missions
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                          <ShieldCheck className="h-4 w-4" />
                          Safe • Ethical • Compassionate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  Support a medical mission
                </div>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Support a medical mission in{" "}
                  <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                    Africa
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Doctors on Mission connects volunteer clinicians with local
                  health facilities to deliver life-restoring care in
                  underserved communities. We provide medical camps, surgical
                  outreaches, and follow-up care in partnership with hospitals
                  and local leaders.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
                  >
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
                  >
                    Donate to a Camp{" "}
                    <HandCoins className="h-4 w-4 text-emerald-600" />
                  </a>
                </div>

                {/* quick stats */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: Users,
                      label: "Volunteer Teams",
                      value: "Clinicians + Support",
                    },
                    {
                      icon: HeartHandshake,
                      label: "Local Partnerships",
                      value: "Hospitals • Leaders",
                    },
                    {
                      icon: MapPin,
                      label: "Outreach Locations",
                      value: "Across Uganda",
                    },
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/60 bg-white/60 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 p-2">
                          <s.icon className="h-5 w-5 text-slate-800" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {s.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {s.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  Patients are not charged during our outreach visits. Your
                  support covers medicines, supplies, transport, and logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUTREACHES */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Impact
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Previous Outreaches
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                A snapshot of recent camps and outreaches—each one powered by
                partnerships, volunteer service, and community trust.
              </p>
            </div>

            <a
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              View more stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {outreaches.map((o) => (
              <article
                key={o.title}
                className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.35)] backdrop-blur transition hover:bg-white"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                      {o.tag}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      <MapPin className="h-3.5 w-3.5" /> {o.location}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <CalendarDays className="h-3.5 w-3.5" /> {o.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {o.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {o.excerpt}
                  </p>

                  <div className="mt-5 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-emerald-50 p-4">
                    <p className="text-sm font-semibold text-slate-800">
                      {o.highlight}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <img
                    src={o.image}
                    alt={o.title}
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Watch Our Featured Video
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Medical Mission Highlights
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                A quick look at how outreaches are organized, the care
                delivered, and the people impacted.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_80px_-60px_rgba(15,23,42,0.35)]">
              <div className="relative aspect-video">
                {/* Replace the src with your actual featured video */}
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                  title="Doctors on Mission — Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* nice overlay label */}
                <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                  <PlayCircle className="h-4 w-4 text-sky-600" />
                  Featured mission video
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSIONS (DARK) */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-20">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300/90">
                DOMI
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Missions
              </h2>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">
                {missions.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-300" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">
                  Consider partnering with us today — support a camp today.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Mission partnership
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      0700 000 000
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Replace with official contact
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Donation / Bank details
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Centenary Bank, Mbarara Branch
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Account:{" "}
                      <span className="text-white/80">ECBRUCKA XXX</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                  >
                    Donate Now <HandCoins className="h-4 w-4" />
                  </a>
                  <a
                    href="/volunteer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Volunteer <HeartHandshake className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* extra action cards */}
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
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="inline-flex rounded-2xl bg-white/10 p-2">
                      <c.icon className="h-5 w-5 text-sky-200" />
                    </div>
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
              <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.65)]">
                <img
                  src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1400&q=80"
                  alt="Surgical team during a medical mission"
                  className="h-full min-h-[420px] w-full object-cover opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-xl rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">
                      Our Promise
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      We aim to deliver dignified care, strengthen local
                      capacity, and ensure follow-up pathways through trusted
                      health facilities—so impact continues long after the
                      outreach day.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                        Patient-first
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                        Partner-led
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                        Outcome-driven
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute right-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur">
                    <Stethoscope className="h-4 w-4 text-emerald-200" />
                    Doctors on Mission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
