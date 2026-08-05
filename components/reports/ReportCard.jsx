"use client";

import { Eye, Download, FileText, MapPin } from "lucide-react";

/**
 * Category → accent colour. Kept to the DOMI palette (navy / teal / gold)
 * and used only as a light accent so cards stay on clean light surfaces.
 */
const ACCENTS = {
  "Annual Report": "var(--brand-primary)",
  "Surgical Mission": "var(--brand-accent)",
  "Medical Camp": "var(--brand-secondary)",
  Screening: "var(--brand-accent)",
  "Emergency Response": "var(--brand-primary)",
  "Concept Note": "var(--brand-secondary)",
};

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/90 px-2.5 py-1 text-[0.7rem] font-medium text-[color:var(--ink-soft)] backdrop-blur">
      {children}
    </span>
  );
}

/**
 * A designed "report cover" — represents the PDF without downloading it, so the
 * library loads instantly and stays consistent on mobile. The real document
 * opens in the fullscreen viewer on "View report".
 */
function DocCover({ report }) {
  const accent = ACCENTS[report.category] || "var(--brand-primary)";
  return (
    <div className="relative m-2.5 h-52 overflow-hidden rounded-[12px] bg-[color:var(--section-teal)]">
      {/* Shared report cover image */}
      <img
        src="/img/cover-image.png"
        alt={`${report.title} cover`}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      {/* Scrim so badges stay legible on any cover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      {/* Accent wash */}
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: accent }}
      />
      {/* Meta badges */}
      <div className="absolute left-3 top-4 z-10">
        <Badge>{report.category}</Badge>
      </div>
      <div className="absolute right-3 top-4 z-10">
        <Badge>{report.year}</Badge>
      </div>

      {/* PDF chip */}
      <div
        className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1"
        style={{ background: accent }}
      >
        <FileText className="h-3 w-3 text-white" />
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white">
          PDF
        </span>
      </div>

      {report.location && (
        <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-medium text-[color:var(--ink-soft)] backdrop-blur">
          <MapPin className="h-3 w-3" />
          {report.location}
        </div>
      )}
    </div>
  );
}

function ReportCard({ report, onView }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_-45px_rgba(12,34,51,0.5)]">
      <DocCover report={report} />

      <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
        <h3 className="text-lg leading-snug tracking-[-0.02em] !text-[color:var(--ink)]">
          {report.title}
        </h3>
        {report.description && (
          <p className="mt-2 line-clamp-3 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
            {report.description}
          </p>
        )}

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button
            type="button"
            onClick={() => onView(report)}
            className="btn btn-outline btn-sm"
          >
            <Eye className="h-4 w-4" />
            View report
          </button>
          <a href={report.fileUrl} download className="btn btn-primary btn-sm">
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </article>
  );
}

export default ReportCard;
