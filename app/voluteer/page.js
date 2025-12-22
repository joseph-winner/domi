"use client";
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Globe2,
  HeartHandshake,
  Hospital,
  MapPin,
  PhoneCall,
  Plane,
  ShieldPlus,
  Star,
  Users,
  Wallet,
  Download,
  ChevronDown,
  FileText,
} from "lucide-react";

function VolunteerPage() {
  const brand = {
    primary: "text-[#0389C3]",
    primaryBg: "bg-[#0389C3]",
    primaryBgHover: "hover:bg-[#027aa8]",
    secondaryBg: "bg-[#EABF4E]",
    secondaryBgHover: "hover:bg-[#d6a931]",
    ring: "focus:ring-[#0389C3]/40",
    gradient:
      "bg-gradient-to-br from-[#E0F4FF] via-white to-[#F8FBFF] text-slate-900",
  };

  const quickStats = useMemo(
    () => [
      { icon: CalendarDays, label: "Availability", value: "All year round" },
      { icon: MapPin, label: "Locations", value: "Across Uganda" },
      { icon: Users, label: "Age", value: "18+ (families welcome)" },
      { icon: Globe2, label: "Language", value: "English" },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      "Taking rounds and maintaining files",
      "Assisting caregivers/nurses in daily work",
      "Shadowing and clinical exposure (where permitted)",
      "Assisting patient movement (with staff guidance)",
      "Vaccinations & health talks (based on skill level)",
      "Routine checks like BP, pulse, temperature (as assigned)",
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        icon: Hospital,
        title: "General Medicine",
        desc: "Primary care support & triage workflows.",
      },
      {
        icon: ShieldPlus,
        title: "Obstetrics & Midwifery",
        desc: "Maternal health support (placement-based).",
      },
      {
        icon: HeartHandshake,
        title: "Community Outreach",
        desc: "Health education, camps, and mobile clinics.",
      },
      {
        icon: ClipboardList,
        title: "Medical Records",
        desc: "Filing, documentation, and patient follow-ups.",
      },
      {
        icon: BadgeCheck,
        title: "Nursing Support",
        desc: "Ward support tasks guided by supervising staff.",
      },
      {
        icon: Users,
        title: "Patient Experience",
        desc: "Compassionate care and cultural connection.",
      },
    ],
    []
  );

  const locationBlocks = useMemo(
    () => [
      {
        title: "Project Location",
        body: "Your placement will be in a hospital/clinic within Uganda depending on your skills and availability. Trips typically begin in Kampala, then you’ll travel to your program site. You’ll experience the warmth of local communities, meaningful volunteer work, and a new perspective on healthcare in resource-limited settings.",
      },
      {
        title: "Arrival & Airport Pickup",
        body: "After you’ve confirmed your placement, book your flight to Entebbe International Airport (EBB). A DOMI partner representative can arrange pickup and guide you to your accommodation and orientation.",
      },
      {
        title: "Orientation",
        body: "Orientation and placement will be done on arrival. You’ll receive a program briefing, expectations, and practical guidance for your first days. Our team will help you settle in and prepare for your work schedule.",
      },
    ],
    []
  );

  const projectDetails = useMemo(
    () => [
      "Your exact role depends on your level of medical training and the facility’s needs. Many volunteers start with observation and gradually support practical tasks under supervision.",
      "Programs are designed for medical professionals, medical students, and allied health volunteers who want hands-on exposure and community impact.",
      "Placements may include community health centers, clinics, outpatient departments, and mobile outreach camps.",
      "Working days are typically Monday to Friday; some programs may include Saturday sessions depending on the facility schedule.",
    ],
    []
  );

  const logisticsAccordions = useMemo(
    () => [
      {
        k: "Medical licenses for practitioners",
        v: "All qualified medical practitioners will need to have proper documentation. Local facility requirements may vary depending on scope of practice.",
      },
      {
        k: "Medical donations from abroad",
        v: "If you are bringing medical donations, check the recommended process and local requirements for charitable items.",
      },
      {
        k: "Group volunteer trips",
        v: "We can organize group trips for schools, teams, or faith-based communities. Tell us your dates and goals and we’ll tailor the experience.",
      },
      {
        k: "Long-term volunteer work",
        v: "Longer placements can be arranged for interns and professionals. We’ll guide you through logistics, housing, and placement coordination.",
      },
      {
        k: "Volunteer accommodation",
        v: "Accommodation is arranged in a volunteer house/hostel or homestay depending on availability. Rooms may be shared, and facilities are kept clean and secure.",
      },
      {
        k: "Age requirement",
        v: "Programs are generally for 18+ volunteers. Family and group participation may be possible depending on placement type and supervision requirements.",
      },
      {
        k: "Visas",
        v: "Most participants obtain a visa on arrival or via the Uganda e-visa system (requirements can change). We’ll advise you on the latest steps when you apply.",
      },
      {
        k: "Weekends & free time",
        v: "On weekends, you can explore Uganda—local culture, nature, and community events. Many volunteers use weekends for safaris or city tours.",
      },
    ],
    []
  );

  const quickFacts = useMemo(
    () => [
      ["Availability", "Project open all year round"],
      ["Duration", "Minimum 1 week commitment"],
      ["Age limits", "Minimum 18yrs (solo travellers)"],
      ["Families", "Families are welcome"],
      ["Dates", "Flexible start and end dates"],
      ["Arrival date", "One day before the start date"],
      ["Airport arrival", "Pickup, meet & greet by partner representative"],
      ["Working days", "Monday–Saturday (varies by placement)"],
      ["Weekends", "Travel / sightseeing not included in program cost"],
      ["Accommodation", "Host family / volunteer house"],
      ["Meals", "Breakfast, lunch and dinner daily"],
      ["Support", "Pre-departure guide + in-country staff support"],
      [
        "Locations",
        "Kampala, Jinja, Wakiso, Masaka, Mbarara, Kibuye, Ntungamo, & more",
      ],
      ["Language", "English"],
    ],
    []
  );

  const pricing = useMemo(
    () => [
      {
        badge: "Daily",
        price: "$300",
        note: "Minimum period 3 days",
        accent: "ring-[#0389C3]/30",
        cta: "Apply Now",
        popular: false,
        includes: [
          "Project orientation",
          "Accommodation",
          "3 meals a day",
          "In-country transport logistics",
          "Airport pickup & drop-off",
          "In-country support",
        ],
      },
      {
        badge: "Weekly",
        price: "$2000",
        note: "Most flexible",
        accent: "ring-[#EABF4E]/40",
        cta: "Apply Now",
        popular: true,
        includes: [
          "Project orientation",
          "Accommodation",
          "3 meals a day",
          "In-country transport logistics",
          "Airport pickup & drop-off",
          "In-country support",
        ],
      },
      {
        badge: "3 Weeks",
        price: "$5500",
        note: "Most popular",
        accent: "ring-[#0389C3]/30",
        cta: "Apply Now",
        popular: false,
        includes: [
          "Project orientation",
          "Accommodation",
          "3 meals a day",
          "In-country transport logistics",
          "Airport pickup & drop-off",
          "In-country support",
        ],
      },
    ],
    []
  );

  const excludes = useMemo(
    () => ["Flights", "Visa fees", "Personal expenses"],
    []
  );

  const downloads = useMemo(
    () => [
      {
        title: "Medical Mission Program",
        meta: "PDF",
        icon: FileText,
        href: "/downloads/medical-mission-program.pdf",
      },
      {
        title: "Volunteer Application Form",
        meta: "PDF",
        icon: FileText,
        href: "/downloads/volunteer-application-form.pdf",
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* TOP NOTICE */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              Volunteer for Africa Medical Missions Program
            </span>{" "}
            • “For the earth will be filled with the knowledge of the glory of
            the LORD, as the waters cover the sea.”{" "}
            <span className="font-semibold text-slate-900">Habakkuk 2:14</span>
          </p>
        </div>
      </div>

      {/* HERO */}
      <section className={`relative overflow-hidden ${brand.gradient}`}>
        {/* BG IMAGE */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/img/volunteer/hero.jpg"
            alt="Volunteer medical mission in Uganda"
            className="h-full w-full object-cover"
          />
        </div>

        {/* BLOBS */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0389C3]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-[#EABF4E]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EABF4E]/30 bg-[#EABF4E]/10 px-4 py-2 text-xs text-slate-800">
                <Star className="h-4 w-4 text-[#EABF4E]" />
                Doctors on Mission International (DOMI) • Uganda Placements
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Volunteer. Serve.{" "}
                <span className="text-[#0389C3]">Heal with purpose.</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Join a practical, faith-driven medical mission program in
                Uganda—support clinics, learn in real settings, and give back to
                communities with limited resources.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#apply"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl ${brand.primaryBg} px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0389C3]/25 ${brand.primaryBgHover} focus:outline-none focus:ring-4 ${brand.ring}`}
                >
                  Apply for the program <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#downloads"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Download resources <Download className="h-4 w-4" />
                </a>

                <a
                  href="tel:+256782524317"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  +256 782 524317
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {quickStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[#0389C3]/30 bg-[#0389C3]/5 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-[#0389C3]" />
                      <p className="text-xs text-slate-700">{s.label}</p>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#0389C3]/25 via-white/10 to-[#EABF4E]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-[#0389C3]/20 bg-white/5 p-3 shadow-2xl shadow-black/30">
                <img
                  src="/img/volunteer/poster.jpg"
                  alt="Volunteers program poster"
                  className="h-[520px] w-full rounded-2xl object-cover"
                />
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-900/80 p-4">
                    <p className="text-xs text-slate-200">Discover more</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      https://doctorsonmissionint.org
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-900/80 p-4">
                    <p className="text-xs text-slate-200">Core promise</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Serve communities. Build skills. Grow faith.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb-like */}
          <div className="mt-10 text-xs text-slate-600">
            <span className="text-slate-800">About</span> /{" "}
            <span className="text-slate-800">Programs</span> /{" "}
            <span className="text-slate-800">Volunteer</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Introduction
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                The Volunteer for Africa Medical Missions program offers skilled
                and motivated volunteers the chance to experience a new culture
                while serving in medical placements across Uganda. You’ll
                support clinical workflows, participate in community outreach,
                and learn how healthcare teams deliver care in resource-limited
                settings.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  icon={HeartHandshake}
                  title="Serve & give back"
                  desc="Support real communities through supervised medical missions and outreach."
                />
                <FeatureCard
                  icon={Hospital}
                  title="Clinical exposure"
                  desc="Learn inside clinics and community health programs (placement dependent)."
                />
                <FeatureCard
                  icon={Users}
                  title="Work with local teams"
                  desc="Collaborate respectfully with Ugandan healthcare staff and community leaders."
                />
                <FeatureCard
                  icon={Globe2}
                  title="Cultural experience"
                  desc="Build friendships, understand context, and grow through service."
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0389C3]/20">
                  <BadgeCheck className="h-5 w-5 text-[#0389C3]" />
                </div>
                <div>
                  <p className="text-xs text-slate-600">Program by</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Doctors on Mission International (DOMI)
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>
                  Founded in 2023, DOMI mobilizes Christian medical teams to
                  provide care in low-resource settings while serving God and
                  bringing healing to communities.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-600">
                  Need help choosing a package?
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Talk to a Program Specialist
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="tel:+256782524317"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    <PhoneCall className="h-4 w-4" /> Call
                  </a>
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0389C3] px-3 py-2 text-xs font-semibold text-white hover:bg-[#027aa8]"
                  >
                    Apply <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-600">
                Tip: Put your preferred dates and medical background in the
                application for faster placement matching.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS + IMAGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#0389C3]/30 bg-[#0389C3]/5 p-7">
              <p className="text-xs font-semibold text-[#EABF4E]">
                Project Highlights
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                What you may be involved in
              </h3>
              <ul className="mt-5 space-y-3">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-slate-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#EABF4E]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-600">Program focus</p>
                <p className="mt-1 text-sm text-slate-700">
                  DOMI improves health outcomes for children and adults through
                  medical placements, village health talks, mobile clinics, and
                  health outreach programs.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
              <img
                src="/img/volunteer/group.jpg"
                alt="Volunteer group in Uganda"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-slate-900/70 p-4 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-300">
                      Community & placement
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Serve alongside local teams
                    </p>
                  </div>
                  <a
                    href="#cost"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    View costs <Wallet className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border border-[#0389C3]/15 bg-[#0389C3]/5 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#0389C3]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0389C3]/20">
                    <s.icon className="h-5 w-5 text-[#0389C3]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {s.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + ARRIVAL */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-[#EABF4E]">
                Travel & placement
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Project location & arrival
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                We help you plan the practical steps: where you’ll serve, how
                you arrive, and how you start strong.
              </p>

              <div className="mt-7 space-y-4">
                {locationBlocks.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-3xl border border-[#0389C3]/20 bg-[#0389C3]/5 p-6"
                  >
                    <h3 className="text-sm font-semibold text-slate-900">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
              <img
                src="/img/volunteer/location.jpg"
                alt="Uganda placement location"
                className="h-full min-h-[520px] w-full rounded-2xl object-cover"
              />
              <div className="absolute left-5 top-5 rounded-2xl border border-[#0389C3]/30 bg-slate-900/80 px-4 py-3 text-xs text-slate-100 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-[#0389C3]" />
                  Arrive via Entebbe (EBB) • Start in Kampala • Travel to
                  placement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-[#EABF4E]">
                Project details
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                What your experience can look like
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {projectDetails.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoChip
                  icon={CalendarDays}
                  title="Working days"
                  value="Mon–Fri (often), placement dependent"
                />
                <InfoChip
                  icon={Users}
                  title="Supervision"
                  value="Guided by local staff & program coordinators"
                />
                <InfoChip
                  icon={ClipboardList}
                  title="Best for"
                  value="Students, nurses, practitioners, allied health"
                />
                <InfoChip
                  icon={MapPin}
                  title="Setting"
                  value="Clinics, hospitals, outreach & mobile camps"
                />
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
                <p className="text-xs font-semibold text-slate-600">
                  Who we are
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img
                      src="/img/volunteer/team.jpg"
                      alt="DOMI team"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Doctors on Mission International
                    </p>
                    <p className="text-xs text-slate-400">
                      Serving communities through missions & outreach
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  We mobilize medical missions, connect volunteers to
                  placements, and support community health initiatives in
                  Uganda.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs text-slate-600">Contact</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  +256 782 524317
                </p>
                <p className="mt-2 text-xs text-slate-600">Website</p>
                <p className="text-sm font-semibold text-slate-900">
                  doctorsonmissionint.org
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* LOGISTICS (Accordion) */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#EABF4E]">
            Important information
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Requirements & logistics
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            These details help you prepare well. Some specifics depend on your
            placement and the time of travel.
          </p>

          <Accordion items={logisticsAccordions} />
        </div>
      </section>

      {/* QUICK FACTS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#EABF4E]">
            Project quick facts
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            At a glance
          </h2>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#0389C3]/20 bg-[#0389C3]/5">
            <div className="grid grid-cols-1 divide-y divide-[#0389C3]/10">
              {quickFacts.map(([k, v]) => (
                <div
                  key={k}
                  className="grid gap-2 p-5 sm:grid-cols-3 sm:items-center"
                >
                  <p className="text-sm font-semibold text-slate-900">{k}</p>
                  <p className="sm:col-span-2 text-sm text-slate-700">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-[#EABF4E]/20 bg-gradient-to-br from-[#0389C3]/15 via-white/5 to-[#EABF4E]/10 p-8 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="text-4xl font-extrabold text-slate-900">“</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                In a nutshell
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                Volunteering in Uganda with Doctors on Mission International is
                affordable, low cost and budget friendly. You’ll serve
                communities, gain meaningful clinical exposure, and build
                unforgettable relationships while learning in a new context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section id="cost" className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#EABF4E]">Program cost</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Choose a package
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.badge}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/30 ring-1 ${p.accent}`}
              >
                {p.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#EABF4E]/20 px-3 py-1 text-xs font-semibold text-[#EABF4E]">
                    Most popular
                  </div>
                )}

                <p className="text-xs font-semibold text-slate-600">
                  {p.badge.toUpperCase()}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-4xl font-extrabold text-[#0389C3]">
                    {p.price}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-700">{p.note}</p>

                <ul className="mt-6 space-y-3">
                  {p.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#EABF4E]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl ${brand.primaryBg} px-4 py-3 text-sm font-semibold text-white ${brand.primaryBgHover}`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-slate-900">
                Program fee excludes
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {excludes.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-slate-600">
                Exclusions can vary by placement and personal travel choices.
              </p>
            </div>

            <div
              id="apply"
              className="rounded-3xl border border-[#EABF4E]/20 bg-gradient-to-br from-[#0389C3]/15 via-white/5 to-[#EABF4E]/10 p-7"
            >
              <p className="text-sm font-semibold text-white">
                Application & placement booking
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                To secure your placement, complete the volunteer registration
                and submit required documents. Our team will follow up to match
                you with a suitable site and confirm your start date.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://doctorsonmissionint.org"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0389C3] px-4 py-3 text-sm font-semibold text-white hover:bg-[#027aa8]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+256782524317"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Call to apply <PhoneCall className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-600">Tip</p>
                <p className="mt-1 text-sm text-slate-700">
                  Include your profession, level of training, preferred dates,
                  and any certifications to speed up placement.
                </p>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div
            id="downloads"
            className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold text-[#EABF4E]">
                  Download resources
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Files you may need
                </h3>
              </div>
              <p className="text-xs text-slate-600">
                Add these PDFs to your website’s /public/downloads folder.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {downloads.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  className="group flex items-center justify-between rounded-2xl border border-[#0389C3]/20 bg-[#0389C3]/5 p-5 hover:bg-[#0389C3]/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0389C3]/15">
                      <d.icon className="h-5 w-5 text-[#0389C3]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {d.title}
                      </p>
                      <p className="text-xs text-slate-600">{d.meta}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
                    Download <Download className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>

            {/* Payment info (optional block like your screenshot) */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Payments</p>
              <p className="mt-2 text-sm text-slate-700">
                Payment instructions and account details can be shared after
                your application is received and your placement is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Ready to serve in Uganda?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Apply now and our team will guide you through placement, travel,
                and orientation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className={`inline-flex items-center justify-center gap-2 rounded-xl ${brand.primaryBg} px-5 py-3 text-sm font-semibold text-white ${brand.primaryBgHover}`}
              >
                Apply now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+256782524317"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0389C3] bg-transparent px-5 py-3 text-sm font-semibold text-[#0389C3] hover:bg-[#0389C3]/5"
              >
                <PhoneCall className="h-4 w-4" />
                Call +256 782 524317
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Doctors on Mission International • All
            rights reserved
          </p>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- UI Bits ----------------------------- */

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-0.5 hover:bg-slate-50">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0389C3]/20">
          <Icon className="h-5 w-5 text-[#0389C3]" />
        </div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{desc}</p>
    </div>
  );
}

function InfoChip({ icon: Icon, title, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0389C3]/15">
          <Icon className="h-5 w-5 text-[#0389C3]" />
        </div>
        <div>
          <p className="text-xs text-slate-600">{title}</p>
          <p className="text-sm font-semibold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {items.map((it, idx) => {
        const open = idx === openIdx;
        return (
          <div key={it.k} className="border-b border-slate-200 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-slate-900">
                {it.k}
              </span>
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-100 transition ${
                  open ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4 text-slate-700" />
              </span>
            </button>
            <div className={`px-6 pb-6 ${open ? "block" : "hidden"}`}>
              <p className="text-sm leading-relaxed text-slate-700">{it.v}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VolunteerPage;
