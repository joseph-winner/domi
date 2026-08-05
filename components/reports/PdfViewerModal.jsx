"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

/**
 * Near-fullscreen PDF viewer used across the site (Reports library,
 * programme pages). Loads the real PDF only when opened so pages stay light
 * on mobile. Closes on Escape or backdrop click and locks body scroll.
 */
function PdfViewerModal({ open, onClose, report }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !report) return null;

  const url = report.fileUrl;

  return (
    <div className="fixed inset-0 z-[90] flex items-stretch justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-[91] m-2 flex w-full flex-col overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] shadow-2xl sm:m-4 lg:m-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-4 py-3 sm:px-5 sm:py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold !text-[color:var(--ink)] sm:text-base">
              {report.title}
            </p>
            {report.subtitle && (
              <p className="truncate text-xs text-[color:var(--muted)]">
                {report.subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-none items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-semibold text-[color:var(--ink-soft)] transition hover:border-[color:var(--brand-primary)] sm:inline-flex"
            >
              <ExternalLink className="h-4 w-4" />
              Open in new tab
            </a>
            <a href={url} download className="btn btn-primary btn-sm">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close viewer"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] p-2 text-[color:var(--ink-soft)] transition hover:bg-[color:var(--section-teal)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Document */}
        <div className="relative flex-1 bg-[color:var(--section-teal)]">
          <iframe
            title={report.title}
            src={`${url}#view=FitH`}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default PdfViewerModal;
