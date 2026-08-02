import React from "react";
import Image from "next/image";

function Banner({
  title = "Page Title",
  subtitle = "",
  eyebrow = "Doctors on Mission Int",
  backgroundImage = "/img/who-we-are.jpg",
  align = "left",
  supportingText = "",
}) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlays for legibility + warmth */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />
      </div>

      {/* Content — generous whitespace, bottom-left composition */}
      <div className="mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-10 lg:min-h-[68vh] lg:pb-24">
        <div className={`flex max-w-3xl flex-col ${alignClass}`}>
          <span className="inline-flex items-center rounded-full bg-[color:var(--brand-secondary)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#3a2a06]">
            {eyebrow}
          </span>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.25rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {supportingText && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#eabf4e]">
              {supportingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
