"use client";
import React, { useMemo, useState } from "react";
import Banner from "@/layout/Banner";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardList,
  Globe2,
  HeartHandshake,
  Hospital,
  MapPin,
  PhoneCall,
  Plane,
  ShieldPlus,
  Users,
  Wallet,
  Download,
  ChevronDown,
  FileText,
} from "lucide-react";

const eyebrowPill =
  "inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]";

function VolunteerPage() {
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
      { icon: Hospital, title: "General Medicine", desc: "Primary care support & triage workflows." },
      { icon: ShieldPlus, title: "Obstetrics & Midwifery", desc: "Maternal health support (placement-based)." },
      { icon: HeartHandshake, title: "Community Outreach", desc: "Health education, camps, and mobile clinics." },
      { icon: ClipboardList, title: "Medical Records", desc: "Filing, documentation, and patient follow-ups." },
      { icon: BadgeCheck, title: "Nursing Support", desc: "Ward support tasks guided by supervising staff." },
      { icon: Users, title: "Patient Experience", desc: "Compassionate care and cultural connection." },
    ],
    []
  );

  const locationBlocks = useMemo(
    () => [
      {
        title: "Project Location",
        body: "Your placement will be in a hospital/clinic within Uganda depending on your skills and availability. Trips typically begin in Kampala, then you'll travel to your program site. You'll experience the warmth of local communities, meaningful volunteer work, and a new perspective on healthcare in resource-limited settings.",
      },
      {
        title: "Arrival & Airport Pickup",
        body: "After you've confirmed your placement, book your flight to Entebbe International Airport (EBB). A DOMI partner representative can arrange pickup and guide you to your accommodation and orientation.",
      },
      {
        title: "Orientation",
        body: "Orientation and placement will be done on arrival. You'll receive a program briefing, expectations, and practical guidance for your first days. Our team will help you settle in and prepare for your work schedule.",
      },
    ],
    []
  );

  const projectDetails = useMemo(
    () => [
      "Your exact role depends on your level of medical training and the facility's needs. Many volunteers start with observation and gradually support practical tasks under supervision.",
      "Programs are designed for medical professionals, medical students, and allied health volunteers who want hands-on exposure and community impact.",
      "Placements may include community health centers, clinics, outpatient departments, and mobile outreach camps.",
      "Working days are typically Monday to Friday; some programs may include Saturday sessions depending on the facility schedule.",
    ],
    []
  );

  const logisticsAccordions = useMemo(
    () => [
      { k: "Medical licenses for practitioners", v: "All qualified medical practitioners will need to have proper documentation. Local facility requirements may vary depending on scope of practice." },
      { k: "Medical donations from abroad", v: "If you are bringing medical donations, check the recommended process and local requirements for charitable items." },
      { k: "Group volunteer trips", v: "We can organize group trips for schools, teams, or faith-based communities. Tell us your dates and goals and we'll tailor the experience." },
      { k: "Long-term volunteer work", v: "Longer placements can be arranged for interns and professionals. We'll guide you through logistics, housing, and placement coordination." },
      { k: "Volunteer accommodation", v: "Accommodation is arranged in a volunteer house/hostel or homestay depending on availability. Rooms may be shared, and facilities are kept clean and secure." },
      { k: "Age requirement", v: "Programs are generally for 18+ volunteers. Family and group participation may be possible depending on placement type and supervision requirements." },
      { k: "Visas", v: "Most participants obtain a visa on arrival or via the Uganda e-visa system (requirements can change). We'll advise you on the latest steps when you apply." },
      { k: "Weekends & free time", v: "On weekends, you can explore Uganda, local culture, nature, and community events. Many volunteers use weekends for safaris or city tours." },
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
      ["Locations", "Kampala, Jinja, Wakiso, Masaka, Mbarara, Kibuye, Ntungamo, & more"],
      ["Language", "English"],
    ],
    []
  );

  const pricing = useMemo(
    () => [
      { badge: "Daily", price: "$300", note: "Minimum period 3 days", popular: false, includes: ["Project orientation", "Accommodation", "3 meals a day", "In-country transport logistics", "Airport pickup & drop-off", "In-country support"] },
      { badge: "Weekly", price: "$2000", note: "Most flexible", popular: true, includes: ["Project orientation", "Accommodation", "3 meals a day", "In-country transport logistics", "Airport pickup & drop-off", "In-country support"] },
      { badge: "3 Weeks", price: "$5500", note: "Most popular", popular: false, includes: ["Project orientation", "Accommodation", "3 meals a day", "In-country transport logistics", "Airport pickup & drop-off", "In-country support"] },
    ],
    []
  );

  const excludes = useMemo(() => ["Flights", "Visa fees", "Personal expenses"], []);

  const downloads = useMemo(
    () => [
      { title: "Medical Mission Program", meta: "PDF", icon: FileText, href: "/downloads/medical-mission-program.pdf" },
      { title: "Volunteer Application Form", meta: "PDF", icon: FileText, href: "/downloads/volunteer-application-form.pdf" },
    ],
    []
  );

  return (
    <main className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      {/* Scripture strip */}
      <div className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8 lg:px-10">
          <p className="text-center text-xs text-[color:var(--muted)]">
            <span className="font-semibold text-[color:var(--ink)]">
              Volunteer for Africa Medical Missions Program
            </span>{" "}
            · &ldquo;For the earth will be filled with the knowledge of the glory
            of the LORD, as the waters cover the sea.&rdquo;{" "}
            <span className="font-semibold text-[color:var(--ink)]">
              Habakkuk 2:14
            </span>
          </p>
        </div>
      </div>

      <Banner
        eyebrow="Uganda Placements"
        title="Volunteer. Serve. Heal with purpose."
        subtitle="Join a practical, faith-driven medical mission program in Uganda, support clinics, learn in real settings, and give back to communities with limited resources."
      />

      {/* Hero content */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#apply" className="btn btn-primary">
                Apply for the program <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#downloads" className="btn btn-outline">
                Download resources <Download className="h-4 w-4" />
              </a>
              <a href="tel:+256782524317" className="btn btn-outline">
                <PhoneCall className="h-4 w-4" /> +256 782 524317
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-4"
                >
                  <div className="flex items-center gap-2">
                    <s.icon className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                    <p className="text-xs text-[color:var(--muted)]">{s.label}</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-3">
            <img
              src="/img/VOLUNTEERS AMMP.jpg"
              alt="Volunteers program poster"
              className="h-[480px] w-full rounded-[12px] object-cover"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[12px] bg-[color:var(--ink)] p-4 text-white">
                <p className="text-xs text-white/60">Discover more</p>
                <p className="mt-1 text-sm font-semibold">
                  doctorsonmissionint.org
                </p>
              </div>
              <div className="rounded-[12px] bg-[color:var(--ink)] p-4 text-white">
                <p className="text-xs text-white/60">Core promise</p>
                <p className="mt-1 text-sm font-semibold">
                  Serve. Build skills. Grow faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="bg-[color:var(--surface)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className={eyebrowPill}>Introduction</span>
            <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
              Serve in medical placements across Uganda
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              The Volunteer for Africa Medical Missions program offers skilled
              and motivated volunteers the chance to experience a new culture
              while serving in medical placements across Uganda. You&rsquo;ll
              support clinical workflows, participate in community outreach, and
              learn how healthcare teams deliver care in resource-limited
              settings.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={HeartHandshake} title="Serve & give back" desc="Support real communities through supervised medical missions and outreach." />
              <FeatureCard icon={Hospital} title="Clinical exposure" desc="Learn inside clinics and community health programs (placement dependent)." />
              <FeatureCard icon={Users} title="Work with local teams" desc="Collaborate respectfully with Ugandan healthcare staff and community leaders." />
              <FeatureCard icon={Globe2} title="Cultural experience" desc="Build friendships, understand context, and grow through service." />
            </div>
          </div>

          <aside className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-[color:var(--muted)]">Program by</p>
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  Doctors on Mission International
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--muted)]">
              Founded in 2023, DOMI mobilizes Christian medical teams to provide
              care in low-resource settings while serving God and bringing
              healing to communities.
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
              <p className="text-xs text-[color:var(--muted)]">
                Need help choosing a package?
              </p>
              <p className="mt-1 text-sm font-semibold text-[color:var(--ink)]">
                Talk to a Program Specialist
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="tel:+256782524317" className="btn btn-outline btn-sm">
                  <PhoneCall className="h-4 w-4" /> Call
                </a>
                <a href="#apply" className="btn btn-primary btn-sm">
                  Apply <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Highlights + image + services */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-7">
            <span className={eyebrowPill}>Project Highlights</span>
            <h3 className="mt-5 text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
              What you may be involved in
            </h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-4">
              <p className="text-xs text-[color:var(--muted)]">Program focus</p>
              <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
                DOMI improves health outcomes for children and adults through
                medical placements, village health talks, mobile clinics, and
                health outreach programs.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px] border border-[color:var(--line)]">
            <img
              src="/img/about-5.jpg"
              alt="Volunteer group in Uganda"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <div>
                <p className="text-xs text-[color:var(--muted)]">
                  Community & placement
                </p>
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  Serve alongside local teams
                </p>
              </div>
              <a href="#cost" className="btn btn-primary btn-sm">
                View costs <Wallet className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(12,34,51,0.5)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  {s.title}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Location + arrival */}
      <section className="bg-[color:var(--surface)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <span className={eyebrowPill}>Travel & placement</span>
            <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
              Project location & arrival
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              We help you plan the practical steps: where you&rsquo;ll serve, how
              you arrive, and how you start strong.
            </p>
            <div className="mt-7 space-y-4">
              {locationBlocks.map((b) => (
                <div
                  key={b.title}
                  className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
                >
                  <h3 className="text-sm font-semibold text-[color:var(--ink)]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px] border border-[color:var(--line)]">
            <img
              src="/img/about-bg.jpg"
              alt="Uganda placement location"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute left-5 top-5 max-w-xs rounded-2xl bg-white/95 px-4 py-3 text-xs text-[color:var(--ink-soft)] backdrop-blur">
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4 flex-none text-[color:var(--brand-primary-700)]" />
                Arrive via Entebbe (EBB) · Start in Kampala · Travel to placement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className={eyebrowPill}>Project details</span>
            <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
              What your experience can look like
            </h2>
            <div className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              {projectDetails.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoChip icon={CalendarDays} title="Working days" value="Mon–Fri (often), placement dependent" />
              <InfoChip icon={Users} title="Supervision" value="Guided by local staff & program coordinators" />
              <InfoChip icon={ClipboardList} title="Best for" value="Students, nurses, practitioners, allied health" />
              <InfoChip icon={MapPin} title="Setting" value="Clinics, hospitals, outreach & mobile camps" />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <p className="text-xs font-semibold text-[color:var(--muted)]">
                Who we are
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-[color:var(--line)]">
                  <img
                    src="/img/team-leader.jpg"
                    alt="DOMI team"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--ink)]">
                    Doctors on Mission International
                  </p>
                  <p className="text-xs text-[color:var(--muted)]">
                    Serving through missions & outreach
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                We mobilize medical missions, connect volunteers to placements,
                and support community health initiatives in Uganda.
              </p>
            </div>

            <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
              <p className="text-xs text-[color:var(--muted)]">Contact</p>
              <p className="mt-1 text-sm font-semibold text-[color:var(--ink)]">
                +256 782 524317
              </p>
              <p className="mt-2 text-xs text-[color:var(--muted)]">Website</p>
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                doctorsonmissionint.org
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Logistics accordion */}
      <section className="bg-[color:var(--surface)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <span className={eyebrowPill}>Important information</span>
          <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
            Requirements & logistics
          </h2>
          <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            These details help you prepare well. Some specifics depend on your
            placement and the time of travel.
          </p>
          <Accordion items={logisticsAccordions} />
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <span className={eyebrowPill}>Project quick facts</span>
        <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
          At a glance
        </h2>

        <div className="mt-8 overflow-hidden rounded-[14px] border border-[color:var(--line)]">
          <div className="divide-y divide-[color:var(--line)]">
            {quickFacts.map(([k, v], i) => (
              <div
                key={k}
                className={`grid gap-2 p-5 sm:grid-cols-3 sm:items-center ${
                  i % 2 ? "bg-[color:var(--surface)]" : "bg-[color:var(--paper)]"
                }`}
              >
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  {k}
                </p>
                <p className="text-sm text-[color:var(--muted)] sm:col-span-2">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[16px] bg-[color:var(--brand-primary)] p-8 text-center sm:p-10">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl tracking-[-0.02em] text-white sm:text-3xl">
              In a nutshell
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-white/85">
              Volunteering in Uganda with Doctors on Mission International is
              affordable and budget friendly. You&rsquo;ll serve communities,
              gain meaningful clinical exposure, and build unforgettable
              relationships while learning in a new context.
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section id="cost" className="bg-[color:var(--surface)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <span className={eyebrowPill}>Program cost</span>
          <h2 className="mt-5 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
            Choose a package
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.badge}
                className={`relative flex flex-col rounded-[14px] border bg-[color:var(--paper)] p-7 ${
                  p.popular
                    ? "border-[color:var(--brand-primary)] shadow-[0_24px_60px_-40px_rgba(5,55,89,0.6)]"
                    : "border-[color:var(--line)]"
                }`}
              >
                {p.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[color:var(--brand-secondary)]/20 px-3 py-1 text-xs font-semibold text-[#a07d1e]">
                    Most popular
                  </div>
                )}
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {p.badge}
                </p>
                <p className="mt-3 text-4xl font-medium tracking-[-0.03em] text-[color:var(--brand-primary-700)]">
                  {p.price}
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{p.note}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="#apply" className="btn btn-primary mt-7 w-full">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-7">
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                Program fee excludes
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                {excludes.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--muted)]" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[color:var(--muted)]">
                Exclusions can vary by placement and personal travel choices.
              </p>
            </div>

            <div id="apply" className="rounded-[14px] bg-[color:var(--ink)] p-7 text-white">
              <p className="text-sm font-semibold">
                Application & placement booking
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                To secure your placement, complete the volunteer registration and
                submit required documents. Our team will follow up to match you
                with a suitable site and confirm your start date.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://doctorsonmissionint.org"
                  className="btn btn-accent w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="tel:+256782524317" className="btn btn-ghost w-full">
                  Call to apply <PhoneCall className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Tip</p>
                <p className="mt-1 text-sm text-white/80">
                  Include your profession, level of training, preferred dates,
                  and any certifications to speed up placement.
                </p>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div id="downloads" className="mt-12 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className={eyebrowPill}>Download resources</span>
                <h3 className="mt-4 text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                  Files you may need
                </h3>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {downloads.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  className="group flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition hover:border-[color:var(--brand-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--ink)]">
                        {d.title}
                      </p>
                      <p className="text-xs text-[color:var(--muted)]">
                        {d.meta}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--brand-primary-700)]">
                    Download <Download className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                Payments
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Payment instructions and account details can be shared after your
                application is received and your placement is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foot CTA */}
      <section className="border-t border-[color:var(--line)] bg-[color:var(--paper)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg tracking-[-0.02em] text-[color:var(--ink)]">
                Ready to serve in Uganda?
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Apply now and our team will guide you through placement, travel,
                and orientation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="btn btn-primary">
                Apply now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+256782524317" className="btn btn-outline">
                <PhoneCall className="h-4 w-4" /> Call +256 782 524317
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-[color:var(--muted)]">
            © {new Date().getFullYear()} Doctors on Mission International · All
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
    <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(12,34,51,0.5)]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
          <Icon className="h-5 w-5" />
        </span>
        <p className="text-sm font-semibold text-[color:var(--ink)]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
        {desc}
      </p>
    </div>
  );
}

function InfoChip({ icon: Icon, title, value }) {
  return (
    <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-[color:var(--muted)]">{title}</p>
          <p className="text-sm font-semibold text-[color:var(--ink)]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mt-8 overflow-hidden rounded-[14px] border border-[color:var(--line)]">
      {items.map((it, idx) => {
        const open = idx === openIdx;
        return (
          <div
            key={it.k}
            className={`border-b border-[color:var(--line)] last:border-b-0 ${
              open ? "bg-[color:var(--paper)]" : "bg-[color:var(--surface)]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : idx)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[1.02rem] font-medium tracking-[-0.01em] text-[color:var(--ink)]">
                {it.k}
              </span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border transition ${
                  open
                    ? "rotate-180 border-transparent bg-[color:var(--brand-primary)] text-white"
                    : "border-[color:var(--line)] text-[color:var(--ink-soft)]"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-[color:var(--muted)]">
                  {it.v}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VolunteerPage;
