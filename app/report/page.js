"use client";

import React, { useMemo, useState } from "react";
import Banner from "@/layout/Banner";

const REPORTS = [
  {
    id: "buhweju-eye-mission",
    title: "Buhweju Eye Surgical Mission",
    subtitle: "1-week Eye Surgical Camp • Butare Health Center III, Buhweju",
    year: 2025,
    location: "Buhweju, Uganda",
    category: "Mission Report",
    dateRange: "1 Week",
    cover: "/reports/buhweju-eye-report.png",
    downloadUrl:
      "/files/BUHWEJU EYE SURGICAL MISSION - Doctors on Mission International.pdf",
    tags: ["Eye Care", "Surgery", "Community Outreach"],
  },
  {
    id: "annual-2023",
    title: "Annual Report 2023",
    subtitle: "Impact highlights, outreach, and outcomes across programs",
    year: 2023,
    location: "Uganda",
    category: "Annual Report",
    dateRange: "Jan – Dec 2023",
    cover: "/reports/annual-report-2023.png",
    downloadUrl: "/reports/annual-report-2023.pdf",
    tags: ["Impact", "Programs", "Transparency"],
  },
  {
    id: "gulu-medical-camp",
    title: "Gulu Medical Camp Report",
    subtitle: "Ogul Village • Angaya Parish, Gulu District",
    year: 2025,
    location: "Gulu, Uganda",
    category: "Medical Camp",
    dateRange: "28th – 30th March 2025",
    cover: "/reports/gulu-medical-camp-report.png",
    downloadUrl: "/files/Gulu Medical Camp Report.pdf",
    tags: ["Screening", "Treatment", "Referrals"],
  },
  {
    id: "gulu-mission-deck",
    title: "Doctors on Mission • Gulu Mission",
    subtitle: "Ogul Medical Mission, Gulu District",
    year: 2025,
    location: "Gulu, Uganda",
    category: "Mission Deck",
    dateRange: "28th – 30th March 2025",
    cover: "/reports/gulu-mission-deck.png",
    downloadUrl: "/files/Gulu Medical Camp Report.pdf",
    tags: ["Outreach", "Mission", "Community Health"],
  },
  {
    id: "annual-2024",
    title: "Annual Report 2024",
    subtitle: "A year of measurable impact — stories, numbers, and growth",
    year: 2024,
    location: "Uganda",
    category: "Annual Report",
    dateRange: "Jan – Dec 2024",
    cover: "/reports/annual-report-2024.png",
    downloadUrl: "/files/domi-annual-report-2024.pdf",
    tags: ["Impact", "Financials", "Milestones"],
  },
];

const CATEGORIES = [
  "All",
  "Annual Report",
  "Mission Report",
  "Medical Camp",
  "Mission Deck",
];

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (name === "download")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    );
  if (name === "eye")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    );
  if (name === "filter")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M22 3H2l8 9v7l4 2v-9l8-9z" />
      </svg>
    );
  if (name === "search")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    );
  if (name === "file")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M8 9h2" />
      </svg>
    );
  if (name === "x")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    );
  return null;
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/90 px-2.5 py-1 text-xs font-medium text-[color:var(--ink-soft)] backdrop-blur">
      {children}
    </span>
  );
}

function ReportModal({ open, onClose, report }) {
  if (!open || !report) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-[81] w-full max-w-5xl overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold !text-[color:var(--ink)]">
              {report.title}
            </p>
            <p className="truncate text-xs text-[color:var(--muted)]">
              {report.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={report.downloadUrl}
              className="btn btn-primary btn-sm"
              download
            >
              <Icon name="download" className="h-4 w-4" />
              Download
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] p-2 text-[color:var(--ink-soft)] transition hover:bg-[color:var(--section-teal)]"
              aria-label="Close"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="h-[70vh] bg-[color:var(--section-teal)]">
          <iframe
            title={report.title}
            src={report.downloadUrl}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

function page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [activeReport, setActiveReport] = useState(null);

  const years = useMemo(() => {
    const ys = Array.from(new Set(REPORTS.map((r) => r.year))).sort(
      (a, b) => b - a
    );
    return ["All", ...ys];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REPORTS.filter((r) => {
      const matchesQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = category === "All" || r.category === category;
      const matchesYear = year === "All" || String(r.year) === String(year);
      return matchesQ && matchesCategory && matchesYear;
    });
  }, [query, category, year]);

  const stats = [
    { value: REPORTS.length, label: "Reports" },
    {
      value: Array.from(new Set(REPORTS.map((r) => r.year))).length,
      label: "Years",
    },
    {
      value: Array.from(new Set(REPORTS.map((r) => r.category))).length,
      label: "Categories",
    },
  ];

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Reports Library"
        title="Mission & Annual Reports"
        subtitle="Transparency, impact and outcomes. Download PDFs, filter by year or category, and preview reports before saving."
      />

      <section
        id="reports"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
      >
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--section-teal)] p-5 text-center"
            >
              <p className="text-3xl font-medium tracking-[-0.03em] !text-[color:var(--ink)]">
                {s.value}
              </p>
              <p className="mt-1 text-[0.82rem] text-[color:var(--muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-8 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--section-teal)] px-4 py-2.5">
              <Icon name="search" className="h-5 w-5 text-[color:var(--muted)]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search reports by title, location, or tag..."
                className="w-full bg-transparent text-sm !text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-2.5">
                <Icon
                  name="filter"
                  className="h-5 w-5 text-[color:var(--muted)]"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[color:var(--ink-soft)] focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-2.5">
                <span className="text-xs font-semibold text-[color:var(--muted)]">
                  Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[color:var(--ink-soft)] focus:outline-none"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    "rounded-full px-3.5 py-1.5 text-xs font-medium transition",
                    active
                      ? "bg-[color:var(--brand-primary)] text-white"
                      : "border border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink-soft)] hover:border-[color:var(--brand-primary)]",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
            <span className="ml-auto text-xs text-[color:var(--muted)]">
              Showing{" "}
              <span className="font-semibold !text-[color:var(--ink)]">
                {filtered.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold !text-[color:var(--ink)]">
                {REPORTS.length}
              </span>
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.5)]"
            >
              <div className="relative m-2.5 h-48 overflow-hidden rounded-[12px] bg-[color:var(--section-teal)]">
                <img
                  src={r.cover}
                  alt={`${r.title} cover`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge>{r.category}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  <Badge>{r.year}</Badge>
                  <Badge>{r.location}</Badge>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5">
                <h3 className="text-lg tracking-[-0.02em] !text-[color:var(--ink)]">
                  {r.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                  {r.subtitle}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>{r.dateRange}</Badge>
                  {r.tags.slice(0, 2).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                  {r.tags.length > 2 ? (
                    <Badge>+{r.tags.length - 2}</Badge>
                  ) : null}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveReport(r)}
                    className="btn btn-outline btn-sm"
                  >
                    <Icon name="eye" className="h-4 w-4" />
                    View
                  </button>
                  <a href={r.downloadUrl} download className="btn btn-primary btn-sm">
                    <Icon name="download" className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-[14px] border border-dashed border-[color:var(--line)] p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
              <Icon name="file" className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl tracking-[-0.02em] !text-[color:var(--ink)]">
              No reports found
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Try changing your filters or search using simpler keywords.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setYear("All");
              }}
              className="btn btn-primary mt-5"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--section-teal)] px-6 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg tracking-[-0.02em] !text-[color:var(--ink)]">
              Need a report not listed here?
            </p>
            <p className="mt-1.5 text-[0.9rem] text-[color:var(--muted)]">
              Reach out and we&rsquo;ll share the right document, updates, or
              supporting materials.
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#reports" className="btn btn-outline">
              Back to Reports
            </a>
          </div>
        </div>
      </section>

      <ReportModal
        open={!!activeReport}
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </main>
  );
}

export default page;
