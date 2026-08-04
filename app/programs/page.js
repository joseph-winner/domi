"use client";
import React, { useMemo, useState } from "react";
import Banner from "@/layout/Banner";
import { ArrowUpRight, ArrowRight, Play, Check, X } from "lucide-react";

function Page() {
  const IMAGES = {
    partnerships: "/img/partnerships.jpg",
    volunteers: "/img/volunteers.jpg",
    trainings: "/img/trainings.jpg",
    heroGallery1: "/programs/domi-1.jpg",
    heroGallery2: "/programs/domi-2.jpg",
    heroGallery3: "/programs/domi-3.jpg",
    upcomingPoster: "/img/3daymedcamp.jpg",
    eyeCampPoster: "/programs/eye-surgical-camp.jpg",
  };

  const programCards = [
    {
      key: "partnerships",
      title: "Our Partnerships",
      desc: "Partnering with Holy Innocents Children's Hospital and Children's Surgery International, Doctors on Mission International participated in a one-week children's surgical camp where trained Ugandan surgeons performed over 200 surgical procedures for children in south western Uganda. We believe in access to healthcare for all communities regardless of social status, and will not stop championing universal health care in Uganda.",
      image: IMAGES.partnerships,
      cta: { label: "Programs", href: "#programs" },
    },
    {
      key: "volunteers",
      title: "Volunteers",
      desc: "One of our volunteers creating rapport with a patient at a recently concluded surgical camp at Holy Innocents Children's Hospital, Mbarara, Uganda. Doctors on Mission International champions medical outreaches to low-resource settings to provide life-changing health care.",
      image: IMAGES.volunteers,
      cta: { label: "Join Team", href: "#volunteer" },
    },
    {
      key: "trainings",
      title: "Trainings",
      desc: "Doctors on Mission International partnered with a locally-based organization to provide support training of health workers in Mbarara District, aimed at increasing awareness on new treatment guidelines for childhood illnesses. The meeting brought together doctors, nurses, midwives, laboratory technicians and radiologists.",
      image: IMAGES.trainings,
      cta: { label: "Programs", href: "#programs" },
    },
  ];

  const featured = {
    eyebrow: "Our Programs",
    title: "Doctors on Mission Medical & Surgical Camp",
    desc: `Doctors on Mission International, in partnership with Mbarara District local government, Rurama Church of Uganda and local partners, conducted a medical and surgical camp at Rurama Health Center II, Ruhinda North, Mitooma District, where we saw close to 500 people. We provided free medical, surgical, dental, eye care and HIV testing & counseling, plus health education and vaccination.`,
    verse: "“…and by His stripes, we are healed” Isaiah 53:5",
    cta: { label: "Learn more", href: "#camp-details" },
    youtubeId: "pCgwrY99J0I?si=O9CZ_k-FuWXs6OYN",
  };

  const highlights = [
    { label: "Medical & Surgical Missions", value: "100+" },
    { label: "Patients Served", value: "50,000+" },
    { label: "Surgical Procedures", value: "500+" },
    { label: "Satellite Hospitals", value: "10" },
  ];

  const categories = [
    "All",
    "Medical Camps",
    "Surgical Camps",
    "Training",
    "Outreach",
    "Partnerships",
  ];

  const gallery = [
    { id: "g1", category: "Medical Camps", src: IMAGES.heroGallery1, title: "Community triage & registration" },
    { id: "g2", category: "Medical Camps", src: IMAGES.heroGallery2, title: "Consultations under tents" },
    { id: "g3", category: "Training", src: IMAGES.heroGallery3, title: "Capacity building sessions" },
    { id: "g4", category: "Outreach", src: "/programs/domi-4.jpg", title: "Patient education & counseling" },
    { id: "g5", category: "Surgical Camps", src: "/programs/domi-5.jpg", title: "Surgical support & follow-up" },
    { id: "g6", category: "Partnerships", src: "/programs/domi-6.jpg", title: "Team & partners group photo" },
    { id: "g7", category: "Medical Camps", src: "/programs/domi-7.jpg", title: "Clinic setup & supplies" },
    { id: "g8", category: "Outreach", src: "/programs/domi-8.jpg", title: "Community engagement" },
    { id: "g9", category: "Medical Camps", src: "/programs/domi-9.jpg", title: "Triage and vitals" },
  ];

  const videos = [
    { title: "Completed Medical Camp South Western Uganda", subtitle: "Click to watch", youtubeId: featured.youtubeId },
    { title: "Ogul Medical Camp", subtitle: "Doctors on Mission • Highlights", youtubeId: "2S60glFtJtE?si=6SCa5ycNa6lFR6uc" },
    { title: "Medical camp highlights", subtitle: "Field moments & impact", youtubeId: "vxvxHN658OE?si=qlTq2K8OVp3f2isn" },
  ];

  const upcomingCamp = {
    title:
      "Upcoming medical camp 2025, Ngaya Health Center III, Ogul-Coopil village, Angaya parish, Unyama sub-county, Aswa county, Gulu district.",
    leftNoteTitle: "Services include",
    services: [
      "Free medical consultations",
      "Free surgical consultations",
      "Dental care",
      "Eye care services",
      "HIV testing & counseling",
      "Blood donation services",
      "Health education & screening",
      "Referrals & follow-ups",
    ],
    image: IMAGES.upcomingPoster,
    cta: { label: "Become a volunteer", href: "#volunteer" },
  };

  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filteredGallery = useMemo(() => {
    if (active === "All") return gallery;
    return gallery.filter((g) => g.category === active);
  }, [active]);

  const eyebrowPill =
    "inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]";

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Programs & Impact"
        title="Life-changing care through medical camps, training and partnerships"
        subtitle="Explore our programs, see recent missions, and join us as we deliver compassionate, faith-driven healthcare to communities that need it most."
      />

      {/* Intro: stats + gallery preview */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-3">
              <a href="#programs" className="btn btn-primary">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#volunteer" className="btn btn-outline">
                Volunteer With Us
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-[16px] bg-[color:var(--brand-primary)] sm:grid-cols-4">
              {highlights.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-r border-white/10 p-5 last:border-r-0 sm:border-b-0"
                >
                  <div className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.78rem] font-medium text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--section-teal)] p-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {[IMAGES.heroGallery1, IMAGES.heroGallery2, IMAGES.heroGallery3].map(
                  (src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() =>
                        setLightbox({ src, title: `Program moment ${idx + 1}` })
                      }
                      className="group relative overflow-hidden rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)]"
                      aria-label={`Open image ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`Doctors on Mission program photo ${idx + 1}`}
                        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  )
                )}
              </div>
              <div className="mt-3 flex items-start justify-between gap-3 rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] p-4">
                <div>
                  <div className="text-sm font-semibold !text-[color:var(--ink)]">
                    Recent mission highlights
                  </div>
                  <div className="mt-1 text-xs text-[color:var(--muted)]">
                    Photos, posters and videos, organized for an easy browse.
                  </div>
                </div>
                <a href="#gallery" className="btn btn-primary btn-sm shrink-0">
                  View gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 program cards */}
      <section id="programs" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {programCards.map((c) => (
            <article
              key={c.key}
              className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.5)]"
            >
              <div className="relative m-2.5 overflow-hidden rounded-[12px]">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-1">
                <h3 className="text-xl tracking-[-0.02em] !text-[color:var(--ink)]">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                  {c.desc}
                </p>
                <a
                  href={c.cta.href}
                  className="group/btn mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2.5 text-sm font-medium !text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
                >
                  {c.cta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured camp + video (dark) */}
      <section className="bg-[color:var(--ink)] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                {featured.eyebrow}
              </span>
              <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                {featured.desc}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[12px] bg-[color:var(--brand-secondary)] p-5 !text-[color:var(--ink)]">
                  <div className="text-sm font-medium">{featured.verse}</div>
                  <a href={featured.cta.href} className="btn btn-dark btn-sm mt-4">
                    {featured.cta.label} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">
                    What we delivered
                  </div>
                  <ul className="mt-3 space-y-2 text-xs text-white/75">
                    {[
                      "Free medical and surgical care",
                      "Dental and eye services",
                      "HIV testing & counseling",
                      "Vaccination & health education",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[color:var(--brand-accent)]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[16px] border border-white/10 bg-white/5">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                    title="Doctors on Mission - Featured Program Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-2 p-4">
                  <Play className="h-4 w-4 fill-current text-[color:var(--brand-accent)]" />
                  <span className="text-sm font-medium text-white">
                    Featured video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming camp */}
      <section
        id="camp-details"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className={eyebrowPill}>Upcoming Mission</span>
            <h3 className="mt-5 text-[1.7rem] leading-[1.1] tracking-[-0.02em] !text-[color:var(--ink)] sm:text-3xl">
              {upcomingCamp.title}
            </h3>

            <div className="mt-6 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--section-teal)] p-6">
              <div className="text-sm font-semibold !text-[color:var(--ink)]">
                {upcomingCamp.leftNoteTitle}
              </div>
              <ul className="mt-3 grid gap-2.5 text-sm text-[color:var(--ink-soft)] sm:grid-cols-2">
                {upcomingCamp.services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={upcomingCamp.cta.href} className="btn btn-primary">
                  {upcomingCamp.cta.label}
                </a>
                <a href="#videos" className="btn btn-outline">
                  Watch highlights
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: upcomingCamp.image,
                  title: "Upcoming medical camp poster",
                })
              }
              className="group relative w-full overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--section-teal)]"
              aria-label="Open upcoming camp poster"
            >
              <img
                src={upcomingCamp.image}
                alt="Upcoming medical camp poster"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className={eyebrowPill}>Photos</span>
              <h3 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
                Mission Gallery
              </h3>
              <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
                Filter photos by program type. Click any image to preview.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={[
                    "rounded-full px-4 py-2 text-xs font-medium transition",
                    active === c
                      ? "bg-[color:var(--brand-primary)] text-white"
                      : "border border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink-soft)] hover:border-[color:var(--brand-primary)]",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setLightbox({ src: g.src, title: g.title })}
                className="group relative overflow-hidden rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] text-left"
                aria-label={`Open ${g.title}`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium !text-[color:var(--ink)] backdrop-blur">
                    {g.category}
                  </span>
                  <div className="mt-2 text-sm font-medium text-white">
                    {g.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Completed camps + volunteer */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
                <span className={eyebrowPill}>Completed Camps</span>
                <div className="mt-4 text-xl tracking-[-0.02em] !text-[color:var(--ink)]">
                  Ogul Medical Camp
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  Doctors on Mission • Highlights
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {videos.slice(1, 3).map((v) => (
                    <div
                      key={v.title}
                      className="overflow-hidden rounded-[12px] border border-[color:var(--line)]"
                    >
                      <div className="aspect-video w-full">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium !text-[color:var(--ink)]">
                          {v.title}
                        </div>
                        <div className="mt-1 text-xs text-[color:var(--muted)]">
                          {v.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid h-full gap-6 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      src: IMAGES.eyeCampPoster,
                      title: "Eye surgical camp poster",
                    })
                  }
                  className="group overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] text-left"
                  aria-label="Open eye surgical camp poster"
                >
                  <img
                    src={IMAGES.eyeCampPoster}
                    alt="Eye surgical camp poster"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="text-sm font-medium !text-[color:var(--ink)]">
                      Eye surgical camp
                    </div>
                    <div className="mt-1 text-xs text-[color:var(--muted)]">
                      At Butare Health Center III, Buvuma District.
                    </div>
                  </div>
                </button>

                <div
                  id="volunteer"
                  className="rounded-[14px] bg-[color:var(--brand-primary)] p-6 text-white"
                >
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                    Volunteer
                  </span>
                  <div className="mt-4 text-xl tracking-[-0.02em] text-white">
                    Serve with Doctors on Mission
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Join our team for medical camps, logistics, registration,
                    follow-ups, documentation, counseling and community outreach.
                  </p>
                  <div className="mt-5 space-y-2 text-sm text-white/85">
                    {[
                      "Medical & non-medical roles",
                      "Flexible scheduling",
                      "Community impact",
                    ].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[color:var(--brand-accent)]" />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/contact" className="btn btn-accent">
                      Contact to volunteer
                    </a>
                    <a href="#videos" className="btn btn-ghost">
                      See what we do
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos strip */}
      <section id="videos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className={eyebrowPill}>Videos</span>
            <h3 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
              Watch mission moments
            </h3>
            <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
              Highlights and field moments from recent Doctors on Mission camps.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Partner with us
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)]"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="text-sm font-medium !text-[color:var(--ink)]">
                  {v.title}
                </div>
                <div className="mt-1 text-xs text-[color:var(--muted)]">
                  {v.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[14px] border border-white/10 bg-[color:var(--ink)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
              <div className="text-sm font-medium text-white">
                {lightbox.title}
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto bg-black">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="bg-[color:var(--paper)] px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[18px] bg-[color:var(--brand-primary)] p-8 text-white lg:grid-cols-12 lg:items-center lg:p-10">
            <div className="lg:col-span-8">
              <h3 className="text-2xl tracking-[-0.02em] text-white sm:text-3xl">
                Ready to support a mission?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Volunteer, partner, or sponsor an upcoming camp. Together we can
                deliver dignified care to more communities.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="btn btn-accent">
                  Contact us
                </a>
                <a href="#programs" className="btn btn-ghost">
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
