import React from "react";

function Banner({
  title = "Page Title",
  subtitle = "Your subtitle goes here",
  eyebrow = "Doctors on Mission Int",
  // kept for backward compatibility with existing callers (no longer full-bleed)
  backgroundImage,
  align = "left",
}) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--surface)]">
      {/* Soft brand decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--brand-primary)]/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[color:var(--brand-secondary)]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className={`flex max-w-3xl flex-col ${alignClass}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M12 2l2.4 5.6L20 8.2l-4.2 3.9L17 18l-5-3-5 3 1.2-5.9L4 8.2l5.6-.6z" />
              </svg>
            </span>
            {eyebrow}
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.03] tracking-[-0.035em] text-[color:var(--ink)] sm:text-6xl lg:text-[4.5rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--muted)] sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
