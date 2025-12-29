"use client";
import React, { useMemo, useState } from "react";

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
      desc: "Partnering with Holy Innocents Children’s Hospital and Children’s Surgery International, Doctors on Mission International participated in a one-week long children surgical camp where trained Ugandan surgeons performed over 200 surgical procedures to over 200 children in south western Uganda. We believe in two access to healthcare for all communities regardless of their social status. Doctors on mission will not stop championing universal health care in Uganda.",
      image: IMAGES.partnerships,
      cta: { label: "Programs", href: "#programs" },
    },
    {
      key: "volunteers",
      title: "Volunteers",
      desc: "One of our volunteers creating rapport with a patient who grew fear-struck at a recent concluded surgical camp at Holy Innocents Children’s Hospital, Mbarara – Uganda. Doctors on mission International champions medical outreaches to low-limited resource settings to provide life changing health care.",
      image: IMAGES.volunteers,
      cta: { label: "Join Team", href: "#volunteer" },
    },
    {
      key: "trainings",
      title: "Trainings",
      desc: "Doctors on Mission International partnered with humanitarian arm Uganda locality-based organization to provide support training of health workers working in Mbarara District. This was aimed at increasing awareness on new treatment guidelines to childhood illnesses, and advancement of care in the region. This meeting brought together doctors, nurses, midwives, laboratory technicians and radiologists among others.",
      image: IMAGES.trainings,
      cta: { label: "Programs", href: "#programs" },
    },
  ];

  const featured = {
    eyebrow: "OUR PROGRAMS",
    title: "Doctors on Mission Medical & Surgical Camp",
    desc: `Doctors on mission International in partnership with Mbarara District local government, Rurama Church of Uganda, Hahatiam & Stills Uganda and local organization Anglican and interfaith to conduct a medical / surgical camp at Rurama Health Center II, Kiyanga, Ruhinda North, Mitooma District where we saw close to 500 people. We provided free medical, surgical, dental, eye care and HIV testing & counseling. We also provided health education, vaccination, and health care.`,
    verse: "“…and by His stripes , we are healed” Isaiah 53:5",
    cta: { label: "Learn more", href: "#camp-details" },
    // 👉 Replace with your real YouTube ID
    youtubeId: "pCgwrY99J0I?si=O9CZ_k-FuWXs6OYN",
  };

  const highlights = [
    { label: "Medical Camps", value: "12+" },
    { label: "Patients Served", value: "5,000+" },
    { label: "Partners", value: "20+" },
    { label: "Volunteers", value: "150+" },
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
    {
      id: "g1",
      category: "Medical Camps",
      src: IMAGES.heroGallery1,
      title: "Community triage & registration",
    },
    {
      id: "g2",
      category: "Medical Camps",
      src: IMAGES.heroGallery2,
      title: "Consultations under tents",
    },
    {
      id: "g3",
      category: "Training",
      src: IMAGES.heroGallery3,
      title: "Capacity building sessions",
    },
    {
      id: "g4",
      category: "Outreach",
      src: "/programs/domi-4.jpg",
      title: "Patient education & counseling",
    },
    {
      id: "g5",
      category: "Surgical Camps",
      src: "/programs/domi-5.jpg",
      title: "Surgical support & follow-up",
    },
    {
      id: "g6",
      category: "Partnerships",
      src: "/programs/domi-6.jpg",
      title: "Team & partners group photo",
    },
    {
      id: "g7",
      category: "Medical Camps",
      src: "/programs/domi-7.jpg",
      title: "Clinic setup & supplies",
    },
    {
      id: "g8",
      category: "Outreach",
      src: "/programs/domi-8.jpg",
      title: "Community engagement",
    },
    {
      id: "g9",
      category: "Medical Camps",
      src: "/programs/domi-9.jpg",
      title: "Triage and vitals",
    },
  ];

  const videos = [
    {
      title: "Completed Medical Camp South Western Uganda",
      subtitle: "Click to watch",
      youtubeId: featured.youtubeId,
    },
    {
      title: "Ogul Medical Camp",
      subtitle: "Doctors on Mission • Highlights",
      youtubeId: "2S60glFtJtE?si=6SCa5ycNa6lFR6uc",
    },
    {
      title: "Medical camp highlights",
      subtitle: "Field moments & impact",
      youtubeId: "vxvxHN658OE?si=qlTq2K8OVp3f2isn",
    },
  ];

  const upcomingCamp = {
    title:
      "Upcoming medical camp 2025, ngaya Health Center III, Ogul-Coopil village, angaya parish, Unyama sub-county, Aswa county, Gulu district.",
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.22),rgba(255,255,255,0))]" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Programs & Impact
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Life-changing care through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-blue-700">
                Medical Camps, Training & Partnerships
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Explore our programs, see recent missions, and join us as we
              deliver compassionate, faith-driven healthcare to communities that
              need it most.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Explore Programs
              </a>
              <a
                href="#volunteer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Volunteer With Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <div className="text-2xl font-black text-slate-900">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-3 shadow-xl">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  IMAGES.heroGallery1,
                  IMAGES.heroGallery2,
                  IMAGES.heroGallery3,
                ].map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() =>
                      setLightbox({ src, title: `Program moment ${idx + 1}` })
                    }
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Doctors on Mission program photo ${idx + 1}`}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      Recent mission highlights
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      Photos, posters, and videos—organized for a modern, easy
                      browse.
                    </div>
                  </div>
                  <a
                    href="#gallery"
                    className="shrink-0 rounded-xl bg-sky-600 px-3 py-2 text-xs font-bold text-white hover:bg-sky-700"
                  >
                    View gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 CARDS */}
      <section
        id="programs"
        className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {programCards.map((c) => (
            <article
              key={c.key}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-45px_rgba(2,132,199,0.45)]"
            >
              <div className="relative">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {c.desc}
                </p>

                <div className="mt-5">
                  <a
                    href={c.cta.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
                  >
                    {c.cta.label}
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED CAMP + VIDEO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(70%_60%_at_30%_20%,rgba(14,165,233,0.6),transparent_60%),radial-gradient(50%_50%_at_80%_30%,rgba(20,184,166,0.5),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-extrabold tracking-widest text-sky-300">
                {featured.eyebrow}
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {featured.desc}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-yellow-300/95 p-4 text-slate-950">
                  <div className="text-sm font-black">{featured.verse}</div>
                  <a
                    href={featured.cta.href}
                    className="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-900"
                  >
                    {featured.cta.label} <span className="ml-2">→</span>
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold text-white">
                    What we delivered
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-200">
                    <li>• Free medical and surgical care</li>
                    <li>• Dental and eye services</li>
                    <li>• HIV testing & counseling</li>
                    <li>• Vaccination & health education</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                    title="Doctors on Mission - Featured Program Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-extrabold text-white">
                    Featured video
                  </div>
                  <div className="mt-1 text-xs text-slate-300">
                    Replace the YouTube ID in the code with your real video.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING CAMP */}
      <section
        id="camp-details"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              {upcomingCamp.title}
            </h3>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-55px_rgba(2,132,199,0.35)]">
              <div className="text-sm font-extrabold text-slate-900">
                {upcomingCamp.leftNoteTitle}
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                {upcomingCamp.services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={upcomingCamp.cta.href}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700"
                >
                  {upcomingCamp.cta.label}
                </a>
                <a
                  href="#videos"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
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
              className="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
              aria-label="Open upcoming camp poster"
            >
              <img
                src={upcomingCamp.image}
                alt="Upcoming medical camp poster"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                <div>
                  <div className="text-sm font-extrabold">
                    Tap to view poster
                  </div>
                  <div className="text-xs text-white/80">
                    Add your real poster image in /public/images/programs
                  </div>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  ↗
                </div>
              </div> */}
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-extrabold tracking-widest text-slate-500">
                PHOTOS
              </div>
              <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                Mission Gallery
              </h3>
              <p className="mt-2 text-sm text-slate-600">
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
                    "rounded-full px-4 py-2 text-xs font-extrabold transition",
                    active === c
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-[0_20px_60px_-55px_rgba(2,132,199,0.35)]"
                aria-label={`Open ${g.title}`}
              >
                <div className="relative">
                  <img
                    src={g.src}
                    alt={g.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur">
                      {g.category}
                    </div>
                    <div className="mt-2 text-sm font-extrabold text-white">
                      {g.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Poster + promo row (like your screenshot bottom area) */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-xs font-extrabold tracking-widest text-slate-500">
                  COMPLETED CAMPS
                </div>
                <div className="mt-2 text-xl font-black text-slate-900">
                  Ogul Medical Camp
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Doctors on Mission • Highlights
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {videos.slice(1, 3).map((v) => (
                    <div
                      key={v.title}
                      className="overflow-hidden rounded-2xl border border-slate-200"
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
                        <div className="text-sm font-extrabold text-slate-900">
                          {v.title}
                        </div>
                        <div className="mt-1 text-xs text-slate-600">
                          {v.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      src: IMAGES.eyeCampPoster,
                      title: "Eye surgical camp poster",
                    })
                  }
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-[0_20px_60px_-55px_rgba(2,132,199,0.35)]"
                  aria-label="Open eye surgical camp poster"
                >
                  <img
                    src={IMAGES.eyeCampPoster}
                    alt="Eye surgical camp poster"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="text-sm font-extrabold text-slate-900">
                      Eye surgical camp
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      At Butare Health Center III, Buvuma District.
                    </div>
                  </div>
                </button>

                <div
                  id="volunteer"
                  className="rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-6"
                >
                  <div className="text-xs font-extrabold tracking-widest text-slate-500">
                    VOLUNTEER
                  </div>
                  <div className="mt-2 text-xl font-black text-slate-900">
                    Serve with Doctors on Mission
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Join our team for medical camps, logistics, registration,
                    follow-ups, documentation, counseling and community
                    outreach.
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-600" />
                      Medical & non-medical roles
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-600" />
                      Flexible scheduling
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-600" />
                      Community impact
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                    >
                      Contact to volunteer
                    </a>
                    <a
                      href="#videos"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                    >
                      See what we do
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS STRIP */}
      <section
        id="videos"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-slate-500">
              VIDEOS
            </div>
            <h3 className="mt-1 text-2xl font-black text-slate-900">
              Watch mission moments
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Add your real YouTube IDs for each program video.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
          >
            Partner with us
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
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
                <div className="text-sm font-extrabold text-slate-900">
                  {v.title}
                </div>
                <div className="mt-1 text-xs text-slate-600">{v.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
              <div className="text-sm font-extrabold text-white">
                {lightbox.title}
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-xl bg-white/10 px-3 py-2 text-xs font-extrabold text-white hover:bg-white/15"
              >
                Close
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

      {/* FOOTER CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-black text-white">
                Ready to support a mission?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Volunteer, partner, or sponsor an upcoming camp—together we can
                deliver dignified care to more communities.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Contact us
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/10"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
