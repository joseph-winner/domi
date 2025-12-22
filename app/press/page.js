import React from "react";
import {
  Newspaper,
  Download,
  ArrowRight,
  ExternalLink,
  CalendarDays,
  MapPin,
  Mail,
  Search,
  Filter,
  FileText,
  Quote,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

function page() {
  // ✅ Replace these with your real data (or fetch from CMS)
  const pressRelease = {
    title: "Bring Healing to Northern Uganda — Help Save Lives Today",
    date: "April 5, 2025",
    location: "Gulu District, Uganda",
    orgs: ["Amigos Internacionales", "Doctors On Mission International"],
    excerpt:
      "A successful medical camp delivered critical healthcare services to underserved communities in Northern Uganda—supporting screenings, surgeries, lab diagnostics, and health education with local partners.",
    image: "/images/press/press-release-hero.jpg",
    ctaText: "Read More",
    ctaHref: "https://doctorsonmissionint.org/",
    highlights: [
      "Medical & vision screenings",
      "Laboratory services",
      "General surgeries",
      "Health education & prevention",
      "Community outreach & referrals",
    ],
  };

  const featuredNewsletter = {
    title: "Monthly Newsletter — March 2025",
    subtitle: "Medical Missions have huge success",
    image: "/images/press/newsletter-march-2025.jpg",
    downloadHref: "https://doctorsonmissionint.org/",
  };

  const otherNews = [
    {
      source: "AP News",
      title: "Across to qualify healthcare in a fundamental right...",
      excerpt:
        "A brief highlight about mission impact, community hope, and long-term commitment.",
      image: "/images/press/ap-news.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Article",
      date: "Mar 2025",
    },
    {
      source: "Parrots Media",
      title: "Successful medical camp transforms lives in Ogul Village, Gulu",
      excerpt:
        "New initiative launched to provide healthcare in remote areas of Uganda.",
      image: "/images/press/parrots-media.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Article",
      date: "Mar 2025",
    },
    {
      source: "Uganda Business Channel",
      title: "Amigos Internacionales and Doctors on Mission International...",
      excerpt:
        "Coverage on outreach impact and collaboration across communities.",
      image: "/images/press/uganda-business-channel.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Article",
      date: "Mar 2025",
    },
    {
      source: "EINPresswire",
      title: "Hope was blind, but now I see — Doctors on Mission...",
      excerpt:
        "A story about restoring sight and hope through outreach and surgery support.",
      image: "/images/press/ein-presswire.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Press",
      date: "Feb 2025",
    },
    {
      source: "Amigos Internacionales, Inc",
      title: "Healing in His Name",
      excerpt:
        "The Dr. John L. Nabu Medical Clinic brings hope to Ogul Village.",
      image: "/images/press/healing-in-his-name.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Story",
      date: "Jan 2025",
    },
    {
      source: "Amigos Internacionales, Inc",
      title: "UPDATE: From Darkness to Light — John Paul’s Story",
      excerpt:
        "A testimony of restored vision and renewed life after surgery support.",
      image: "/images/press/john-pauls-story.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Story",
      date: "Jan 2025",
    },
    {
      source: "Amigos Internacionales, Inc",
      title: "Joy’s Vision Restored",
      excerpt:
        "A powerful story of resilience, support, and healing from the heart of Uganda.",
      image: "/images/press/joy-vision-restored.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Story",
      date: "Dec 2024",
    },
  ];

  const mediaResources = [
    {
      title: "Brand Kit",
      desc: "Logos, colors, and usage guidelines for press and partners.",
      href: "https://doctorsonmissionint.org/",
      icon: Sparkles,
    },
    {
      title: "Press Photos",
      desc: "High-resolution photos for use in articles and media coverage.",
      href: "https://doctorsonmissionint.org/",
      icon: FileText,
    },
    {
      title: "Impact Fact Sheet",
      desc: "One-page overview of programs, mission focus, and outcomes.",
      href: "https://doctorsonmissionint.org/",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-56 right-[-120px] h-[460px] w-[460px] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-160px] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <Newspaper className="h-4 w-4 text-cyan-300" />
                Press & Media Center
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Press{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  releases
                </span>{" "}
                & updates
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                Find press releases, newsletters, featured coverage, media
                resources, and official contacts — all in one place.
              </p>
            </div>

            {/* Quick actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Download Newsletter <Download className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Media Contact{" "}
                <ArrowRight className="h-4 w-4 text-emerald-200" />
              </a>
            </div>
          </div>

          {/* Search / filter bar */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                <Search className="h-4 w-4 text-white/60" />
                <input
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  placeholder="Search press releases, newsletters, and articles..."
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white/80 hover:bg-slate-950/40">
                  <Filter className="h-4 w-4 text-cyan-200" />
                  Filter
                </button>
                <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white/80 hover:bg-slate-950/40">
                  Latest
                  <ArrowRight className="h-4 w-4 text-emerald-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured press release */}
      <section className="relative mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="lg:col-span-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative">
                <img
                  src={pressRelease.image}
                  alt={pressRelease.title}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Featured Press Release
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    {pressRelease.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/75">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <CalendarDays className="h-4 w-4 text-cyan-200" />
                      {pressRelease.date}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <MapPin className="h-4 w-4 text-emerald-200" />
                      {pressRelease.location}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm text-white/75">
                    {pressRelease.excerpt}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={pressRelease.ctaHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                    >
                      {pressRelease.ctaText} <ArrowRight className="h-4 w-4" />
                    </a>
                    <div className="flex flex-wrap gap-2">
                      {pressRelease.orgs.map((o) => (
                        <span
                          key={o}
                          className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-white/70"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Highlights */}
            <aside className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Mission highlights</p>
                  <div className="grid h-9 w-9 place-items-center rounded-2xl bg-emerald-500/15">
                    <Quote className="h-5 w-5 text-emerald-200" />
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {pressRelease.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span className="text-sm text-white/75">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold">
                  Need a quote or interview?
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Contact our media desk and we’ll respond promptly with
                  spokesperson availability.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/15"
                >
                  Media contact{" "}
                  <ArrowRight className="h-4 w-4 text-emerald-200" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Weekly / Monthly Newsletter
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Stay updated with our latest mission news and downloadable
                newsletters.
              </p>
            </div>
            <a
              href={featuredNewsletter.downloadHref}
              className="hidden items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:inline-flex"
            >
              Download <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="relative">
                  <img
                    src={featuredNewsletter.image}
                    alt={featuredNewsletter.title}
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <FileText className="h-4 w-4 text-emerald-200" />
                  Featured Newsletter
                </div>
                <h4 className="mt-4 text-xl font-semibold">
                  {featuredNewsletter.title}
                </h4>
                <p className="mt-2 text-sm text-white/70">
                  {featuredNewsletter.subtitle}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={featuredNewsletter.downloadHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Download newsletter <Download className="h-4 w-4" />
                  </a>
                  <a
                    href="https://doctorsonmissionint.org/"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                  >
                    Browse all newsletters{" "}
                    <ArrowRight className="h-4 w-4 text-cyan-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other News Grid */}
      <section className="relative mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Other news</h3>
              <p className="mt-2 text-sm text-white/70">
                Coverage from partners and media outlets—plus updates from the
                field.
              </p>
            </div>
            <a
              href="https://doctorsonmissionint.org/"
              className="hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 sm:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4 text-emerald-200" />
            </a>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherNews.map((n) => (
              <article
                key={n.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="relative">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
                      {n.source}
                    </span>
                    <span className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
                      {n.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{n.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <ExternalLink className="h-4 w-4 text-cyan-200" />
                      Link
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-semibold">{n.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{n.excerpt}</p>
                  <a
                    href={n.href}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-500/15 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/20"
                  >
                    Read full article <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="relative mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Media resources</h3>
                <p className="mt-2 text-sm text-white/70">
                  Download official assets for publications, partners, and
                  announcements.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-white/70">
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Official downloads
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediaResources.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  className="group rounded-3xl border border-white/10 bg-slate-950/30 p-6 transition hover:border-white/20 hover:bg-slate-950/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15">
                      <r.icon className="h-6 w-6 text-emerald-200" />
                    </div>
                    <Download className="h-5 w-5 text-white/50 transition group-hover:text-white/80" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold">{r.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{r.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mt-12 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold">Media contact</h3>
              <p className="mt-2 text-sm text-white/70">
                For interviews, press kits, quotes, or verification, contact our
                media desk.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15">
                      <Mail className="h-5 w-5 text-cyan-200" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-xs text-white/70">
                        info@doctorsonmissionint.org
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://doctorsonmissionint.org/"
                  className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 transition hover:bg-slate-950/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/15">
                      <Newspaper className="h-5 w-5 text-emerald-200" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Website</p>
                      <p className="text-xs text-white/70">
                        doctorsonmissionint.org
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="text-xs font-semibold text-white/80">
                  Help us respond quickly
                </p>
                <p className="mt-1 text-xs text-white/65">
                  When you email, please include your outlet name, deadline, and
                  what you need (for example: a quote, interview, photos, or
                  background facts).
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 p-8 backdrop-blur">
              <p className="text-sm font-semibold">Press statement-ready</p>
              <h4 className="mt-3 text-xl font-semibold">
                Get verified information quickly
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Use official downloads and link to our press updates to ensure
                accuracy in publications.
              </p>

              <a
                href="https://doctorsonmissionint.org/"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/15"
              >
                Visit press center{" "}
                <ArrowRight className="h-4 w-4 text-emerald-200" />
              </a>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="text-xs text-white/70">
                  Doctors on Mission International is a faith-driven medical
                  missions organization providing surgical, medical, and vision
                  care to underserved communities in Northern Uganda. Our
                  mission is to share Christ’s love by expanding access to
                  quality healthcare and equipping local partners to serve their
                  communities.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile sticky CTA */}
          <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
            <a
              href="#newsletter"
              className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25"
            >
              Download Newsletter <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
