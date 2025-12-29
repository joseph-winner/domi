"use client";

import React, { useMemo, useState } from "react";

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
    <span className="inline-flex items-center rounded-full border border-sky-200/60 bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SkeletonCover() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-300/40 blur-2xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-emerald-300/30 blur-2xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#0ea5e9_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        PDF Report
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-4 w-2/3 rounded bg-slate-900/10" />
        <div className="mt-2 h-3 w-1/2 rounded bg-slate-900/10" />
      </div>
    </div>
  );
}

function ReportModal({ open, onClose, report }) {
  if (!open || !report) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-[81] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              {report.title}
            </p>
            <p className="truncate text-xs text-slate-600">{report.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={report.downloadUrl}
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
              download
            >
              <Icon name="download" className="h-4 w-4" />
              Download
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="Close"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="h-[70vh] bg-slate-50">
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-cyan-50 to-slate-50" />
        <div className="absolute -top-24 right-[-80px] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-24 left-[-80px] h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(circle_at_1px_1px,#0ea5e9_1px,transparent_0)] [background-size:20px_20px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Doctors on Mission • Reports Library
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Mission & Annual Reports
                <span className="block bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Transparency. Impact. Outcomes.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Explore our published mission reports and annual impact
                summaries. Download PDFs, filter by year or category, and
                preview reports before saving.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#reports"
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  <Icon name="file" className="h-5 w-5" />
                  Browse Reports
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Request a Report
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  Quick Stats
                </p>
                <span className="text-xs text-slate-500">Updated library</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-gradient-to-b from-sky-50 to-white p-4 text-center">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {REPORTS.length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Reports
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-cyan-50 to-white p-4 text-center">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {Array.from(new Set(REPORTS.map((r) => r.year))).length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Years
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-emerald-50 to-white p-4 text-center">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {Array.from(new Set(REPORTS.map((r) => r.category))).length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Categories
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Icon name="eye" className="h-5 w-5" />
                  <p className="text-sm font-semibold">Preview in-browser</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Use <span className="font-semibold">View</span> to preview a
                  report (PDF). Use{" "}
                  <span className="font-semibold">Download</span> to save it
                  instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section
        id="reports"
        className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8"
      >
        <div className="-mt-8 rounded-3xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <Icon name="search" className="h-5 w-5 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search reports by title, location, or tag..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Icon name="filter" className="h-5 w-5 text-slate-500" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <span className="text-xs font-semibold text-slate-500">
                  Year
                </span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-xs text-slate-600">
                Showing{" "}
                <span className="font-semibold text-slate-900">
                  {filtered.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900">
                  {REPORTS.length}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    active
                      ? "bg-sky-600 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex-1 p-4">
                {/* Cover */}
                <div className="relative">
                  {r.cover ? (
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100">
                      <img
                        src={r.cover}
                        alt={`${r.title} cover`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          // fallback if the image isn't available
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/0 to-transparent" />
                      <div className="absolute left-3 top-3">
                        <Badge>{r.category}</Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                        <Badge>{r.year}</Badge>
                        <Badge>{r.location}</Badge>
                      </div>
                    </div>
                  ) : (
                    <SkeletonCover />
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                    {r.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">
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

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveReport(r)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                    >
                      <Icon name="eye" className="h-4 w-4" />
                      View
                    </button>
                    <a
                      href={r.downloadUrl}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                    >
                      <Icon name="download" className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 opacity-70" />
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Icon name="file" className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900">
              No reports found
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Try changing your filters or search using simpler keywords.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setYear("All");
              }}
              className="mt-4 inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-white to-emerald-50" />
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl" />
            <div className="absolute -left-14 -bottom-14 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Need a report not listed here?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Reach out and we’ll share the right document, updates, or
                  supporting materials.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Contact Us
                </a>
                <a
                  href="#reports"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Back to Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ReportModal
        open={!!activeReport}
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </div>
  );
}

export default page;
