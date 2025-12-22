"use client";
import React from "react";
import Image from "next/image";

function Banner({
  title = "Page Title",
  subtitle = "Your subtitle goes here",
  backgroundImage = "/img/page-title-10.jpg",
  align = "center", // "left", "center", "right"
}) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/75 to-[#0a1628]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0086bf]/20 via-transparent to-[#ebbe4d]/20" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#0086bf]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#ebbe4d]/20 blur-3xl animate-pulse delay-1000" />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex min-h-[320px] md:min-h-[380px] flex-col justify-center px-6 md:px-12 lg:px-20 py-20 ${alignmentClasses[align]}`}
      >
        {/* Decorative line */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] rounded-full" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ebbe4d]" />
        </div>

        {/* Title with gradient accent */}
        <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          <span className="relative">
            {title}
            {/* Underline accent */}
            <span className="absolute -bottom-2 left-0 h-1 w-16 md:w-24 bg-gradient-to-r from-[#0086bf] to-[#ebbe4d] rounded-full" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>

        {/* Bottom decorative element */}
        {/* <div className="mt-8 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="h-1 w-1 rounded-full bg-white/50" />
          <span className="h-1 w-1 rounded-full bg-[#0086bf]" />
          <span className="h-1 w-1 rounded-full bg-[#ebbe4d]" />
        </div> */}
      </div>
    </section>
  );
}

export default Banner;
