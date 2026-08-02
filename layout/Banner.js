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
    <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className={`flex max-w-3xl flex-col ${alignClass}`}>
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
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
