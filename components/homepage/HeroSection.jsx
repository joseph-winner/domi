"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getHeroContent } from "@/lib/firestore";

const defaultSlides = [
  {
    image: "/img/main-slide1.jpg",
    verse: "Isaiah 53:5",
    text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him, and by his wounds we are healed.",
  },
  {
    image: "/img/main-slide-2.jpg",
    verse: "Matthew 25:40",
    text: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
  },
  {
    image: "/img/slider-3.jpg",
    verse: "Proverbs 19:17",
    text: "We aim to enable free access to universal healthcare to all communities while bringing healing to communities and bridging the gap to healthcare needs.",
  },
];

const defaultContent = {
  slides: defaultSlides,
  tagline: { primary: "Spirited", secondary: "to Care" },
  title: "Doctors On Mission",
  titleHighlight: "International",
  subtitle:
    "Since 2023, Doctors on Mission International has been transforming underserved communities through life-saving medical and surgical care, humanitarian outreach missions, specialist procedures, and compassionate service.",
};

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getHeroContent();
      if (data && data.slides && data.slides.length > 0) {
        setContent({ ...defaultContent, ...data });
      }
    };
    loadContent();
  }, []);

  const slides = content.slides || defaultSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const heroStats = [
    { value: "100+", label: "Medical & Surgical Missions" },
    { value: "50,000+", label: "Patients Served" },
    {
      value: "6",
      label:
        "Countries with Volunteer Presence (Uganda, Burundi, DRC, Nigeria, Ethiopia, Malawi)",
    },
    { value: "500+", label: "Surgical Procedures Performed" },
    { value: "10", label: "Satellite Hospitals Supporting Specialist Care" },
  ];
  const tagline = [content.tagline?.primary, content.tagline?.secondary]
    .filter(Boolean)
    .join(" ");

  return (
    <>
    <section className="relative min-h-[100svh] w-full overflow-hidden text-white">
      {/* Background slides */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Legibility gradients: darken top for nav, bottom-left for copy */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent" />
      </div>

      {/* Content â€” bottom-left composition (Natural ref) */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-20 md:pb-24 lg:px-10">
        <div className="max-w-3xl">
          {/* Giant thin heading */}
          <h1 className="hero-rise hero-rise-3 text-[2.75rem] font-normal leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {content.title || "Doctors On Mission"}{" "}
            <span className="font-medium text-[color:var(--brand-accent)]">
              {content.titleHighlight || "International"}
            </span>
          </h1>

          {/* Actions */}
          <div className="hero-rise hero-rise-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-secondary)] px-7 py-3.5 text-sm font-semibold text-[#3a2a06] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-105"
            >
              About Us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-accent)] px-7 py-3.5 text-sm font-semibold text-[#06232f] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Our Missions
            </a>
          </div>

          {/* Scripture focus â€” retained CMS content, refined as a quiet line */}
          <div
            className="hero-rise hero-rise-4 mt-10 max-w-2xl border-l border-white/25 pl-5"
            aria-live="polite"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/55">
              Scripture focus
            </p>
            <div className="relative mt-2 min-h-[3.5rem]">
              {slides.map((slide, index) => (
                <p
                  key={slide.verse}
                  className={`text-sm font-light leading-relaxed text-white/85 transition-opacity duration-700 ease-in-out sm:text-[0.95rem] ${
                    index === current
                      ? "relative opacity-100"
                      : "absolute inset-0 opacity-0"
                  }`}
                >
                  <span className="font-medium text-white">{slide.verse}</span>
                  {" â€” "}
                  {slide.text}
                </p>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-8 flex items-center gap-2.5">
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <button
                  key={slide.verse}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group py-2"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-10 bg-[color:var(--brand-accent)]"
                        : "w-5 bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Relocated intro â€” about + stats (reference composition) */}
    <section className="bg-[color:var(--paper)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[color:var(--brand-accent)]/15 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
              {tagline || "Our Mission"}
            </span>
            <h2 className="mt-6 text-[2rem] font-normal leading-[1.08] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              {content.subtitle ||
                "Extending hope-giving healthcare and faith-filled compassion to the underserved communities of the world."}
            </h2>
          </div>
          <a
            href="/about"
            className="group inline-flex flex-none items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            About us
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-[16px] bg-[#faf9f6] p-8"
            >
              <p className="text-5xl font-normal tracking-[-0.03em] !text-[color:var(--ink)]">
                {s.value}
              </p>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSection;

