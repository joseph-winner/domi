import React from "react";
import Banner from "@/layout/Banner";
import {
  Newspaper,
  Download,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  CalendarDays,
  MapPin,
  Mail,
  Search,
  Filter,
  FileText,
  Sparkles,
  BadgeCheck,
  Check,
} from "lucide-react";

function page() {
  const pressRelease = {
    title: "Bring Healing to Northern Uganda — Help Save Lives Today",
    date: "April 5, 2025",
    location: "Gulu District, Uganda",
    orgs: ["Amigos Internacionales", "Doctors On Mission International"],
    excerpt:
      "A successful medical camp delivered critical healthcare services to underserved communities in Northern Uganda, supporting screenings, surgeries, lab diagnostics, and health education with local partners.",
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
      title: "UPDATE: From Darkness to Light — John Paul's Story",
      excerpt:
        "A testimony of restored vision and renewed life after surgery support.",
      image: "/images/press/john-pauls-story.jpg",
      href: "https://doctorsonmissionint.org/",
      type: "Story",
      date: "Jan 2025",
    },
    {
      source: "Amigos Internacionales, Inc",
      title: "Joy's Vision Restored",
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
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Press & Media Center"
        title="Press releases & updates"
        subtitle="Find press releases, newsletters, featured coverage, media resources, and official contacts, all in one place."
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* Quick actions + search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2.5">
            <Search className="h-4 w-4 text-[color:var(--muted)]" />
            <input
              className="w-full bg-transparent text-sm text-[color:var(--ink)] placeholder:text-[color:var(--muted)] outline-none"
              placeholder="Search press releases, newsletters, and articles..."
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-2.5 text-sm text-[color:var(--ink-soft)] hover:border-[color:var(--brand-primary)]">
              <Filter className="h-4 w-4" /> Filter
            </button>
            <a href="#newsletter" className="btn btn-primary">
              Download Newsletter <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Featured press release */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] lg:col-span-8">
            <div className="relative">
              <img
                src={pressRelease.image}
                alt={pressRelease.title}
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[color:var(--ink)] backdrop-blur">
                Featured Press Release
              </div>
              <div className="absolute inset-x-5 bottom-5 text-white">
                <h2 className="text-2xl tracking-[-0.02em] text-white sm:text-3xl">
                  {pressRelease.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/80">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                    <CalendarDays className="h-4 w-4" /> {pressRelease.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                    <MapPin className="h-4 w-4" /> {pressRelease.location}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm text-white/80">
                  {pressRelease.excerpt}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={pressRelease.ctaHref} className="btn btn-accent">
                    {pressRelease.ctaText} <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {pressRelease.orgs.map((o) => (
                      <span
                        key={o}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                Mission highlights
              </p>
              <ul className="mt-5 space-y-3">
                {pressRelease.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-[color:var(--ink-soft)]">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-[16px] bg-[color:var(--brand-primary)] p-6 text-white">
              <p className="text-sm font-semibold">Need a quote or interview?</p>
              <p className="mt-2 text-sm text-white/75">
                Contact our media desk and we&rsquo;ll respond promptly with
                spokesperson availability.
              </p>
              <a href="#contact" className="btn btn-accent mt-4 w-full">
                Media contact <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>

        {/* Newsletter */}
        <section id="newsletter" className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Newsletter
              </span>
              <h3 className="mt-4 text-2xl tracking-[-0.02em] text-[color:var(--ink)] sm:text-3xl">
                Weekly / Monthly Newsletter
              </h3>
              <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
                Stay updated with our latest mission news and downloadable
                newsletters.
              </p>
            </div>
            <a
              href={featuredNewsletter.downloadHref}
              className="btn btn-primary hidden sm:inline-flex"
            >
              Download <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] lg:grid-cols-12">
            <div className="lg:col-span-7">
              <img
                src={featuredNewsletter.image}
                alt={featuredNewsletter.title}
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <div className="p-6 sm:p-8 lg:col-span-5">
              <span className="inline-flex items-center rounded-full bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--ink-soft)]">
                Featured Newsletter
              </span>
              <h4 className="mt-4 text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                {featuredNewsletter.title}
              </h4>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {featuredNewsletter.subtitle}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={featuredNewsletter.downloadHref}
                  className="btn btn-primary w-full"
                >
                  Download newsletter <Download className="h-4 w-4" />
                </a>
                <a
                  href="https://doctorsonmissionint.org/"
                  className="btn btn-outline w-full"
                >
                  Browse all newsletters <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other news */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                In the media
              </span>
              <h3 className="mt-4 text-2xl tracking-[-0.02em] text-[color:var(--ink)] sm:text-3xl">
                Other news
              </h3>
              <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
                Coverage from partners and media outlets, plus updates from the
                field.
              </p>
            </div>
            <a
              href="https://doctorsonmissionint.org/"
              className="btn btn-outline hidden sm:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherNews.map((n) => (
              <article
                key={n.title}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.5)]"
              >
                <div className="relative m-2.5 overflow-hidden rounded-[12px]">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[color:var(--ink)] backdrop-blur">
                      {n.source}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[color:var(--brand-primary-700)] backdrop-blur">
                      {n.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
                  <div className="flex items-center justify-between text-xs text-[color:var(--muted)]">
                    <span>{n.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <ExternalLink className="h-3.5 w-3.5" /> Link
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-medium leading-snug text-[color:var(--ink)]">
                    {n.title}
                  </h4>
                  <p className="mt-2 flex-1 text-sm text-[color:var(--muted)]">
                    {n.excerpt}
                  </p>
                  <a
                    href={n.href}
                    className="group/btn mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-medium text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white"
                  >
                    Read full article
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Media resources */}
        <section className="mt-16">
          <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
                  Media resources
                </h3>
                <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
                  Download official assets for publications, partners, and
                  announcements.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediaResources.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  className="group rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition hover:-translate-y-1 hover:border-[color:var(--brand-primary)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                      <r.icon className="h-6 w-6" />
                    </span>
                    <Download className="h-5 w-5 text-[color:var(--muted)] transition group-hover:text-[color:var(--brand-primary-700)]" />
                  </div>
                  <h4 className="mt-4 text-base font-medium text-[color:var(--ink)]">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {r.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 lg:col-span-7">
              <h3 className="text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
                Media contact
              </h3>
              <p className="mt-2 text-[0.95rem] text-[color:var(--muted)]">
                For interviews, press kits, quotes, or verification, contact our
                media desk.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--ink)]">
                        Email
                      </p>
                      <p className="text-xs text-[color:var(--muted)]">
                        info@doctorsonmissionint.org
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://doctorsonmissionint.org/"
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition hover:border-[color:var(--brand-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-secondary)]/18 text-[#a07d1e]">
                      <Newspaper className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--ink)]">
                        Website
                      </p>
                      <p className="text-xs text-[color:var(--muted)]">
                        doctorsonmissionint.org
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <p className="text-xs font-semibold text-[color:var(--ink)]">
                  Help us respond quickly
                </p>
                <p className="mt-1 text-xs text-[color:var(--muted)]">
                  When you email, please include your outlet name, deadline, and
                  what you need (for example: a quote, interview, photos, or
                  background facts).
                </p>
              </div>
            </div>

            <div className="rounded-[16px] bg-[color:var(--ink)] p-8 text-white lg:col-span-5">
              <p className="text-sm font-semibold text-[color:var(--brand-accent)]">
                Press statement-ready
              </p>
              <h4 className="mt-3 text-xl tracking-[-0.02em] text-white">
                Get verified information quickly
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Use official downloads and link to our press updates to ensure
                accuracy in publications.
              </p>
              <a
                href="https://doctorsonmissionint.org/"
                className="btn btn-accent mt-5 w-full"
              >
                Visit press center <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs leading-relaxed text-white/70">
                  Doctors on Mission International is a faith-driven medical
                  missions organization providing surgical, medical, and vision
                  care to underserved communities in Northern Uganda. Our mission
                  is to share Christ&rsquo;s love by expanding access to quality
                  healthcare and equipping local partners to serve their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;
