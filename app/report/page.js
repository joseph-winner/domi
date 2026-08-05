"use client";

import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, FileText } from "lucide-react";
import Banner from "@/layout/Banner";
import ReportCard from "@/components/reports/ReportCard";
import PdfViewerModal from "@/components/reports/PdfViewerModal";
import { reports, reportCategories } from "@/components/reports/reports-data";

function ReportsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [activeReport, setActiveReport] = useState(null);

  const years = useMemo(() => {
    const ys = Array.from(new Set(reports.map((r) => r.year))).sort(
      (a, b) => b - a
    );
    return ["All", ...ys];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      const matchesQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        (r.description || "").toLowerCase().includes(q) ||
        (r.location || "").toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      const matchesCategory = category === "All" || r.category === category;
      const matchesYear = year === "All" || String(r.year) === String(year);
      return matchesQ && matchesCategory && matchesYear;
    });
  }, [query, category, year]);

  const stats = [
    { value: reports.length, label: "Reports" },
    {
      value: Array.from(new Set(reports.map((r) => r.year))).length,
      label: "Years covered",
    },
    {
      value: Array.from(new Set(reports.map((r) => r.category))).length,
      label: "Categories",
    },
  ];

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Reports Library"
        title="Mission & Annual Reports"
        subtitle="Transparency, impact and outcomes. Preview any report in full screen or download the PDF to keep."
        backgroundImage="/img/who-we-are.jpg"
      />

      <section
        id="reports"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
      >
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--section-teal)] p-5 text-center"
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
              <Search className="h-5 w-5 text-[color:var(--muted)]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search reports by title, location, or category..."
                className="w-full bg-transparent text-sm !text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-2.5">
                <SlidersHorizontal className="h-5 w-5 text-[color:var(--muted)]" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[color:var(--ink-soft)] focus:outline-none"
                >
                  {reportCategories.map((c) => (
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
            {reportCategories.map((c) => {
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
                {reports.length}
              </span>
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ReportCard key={r.id} report={r} onView={setActiveReport} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-[14px] border border-dashed border-[color:var(--line)] p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
              <FileText className="h-6 w-6" />
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

      <PdfViewerModal
        open={!!activeReport}
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </main>
  );
}

export default ReportsPage;
