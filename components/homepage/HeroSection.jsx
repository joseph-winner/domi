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
    "Extending hope-giving healthcare and faith-filled compassion to the overlooked corners of the globe.",
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

  return (
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

      {/* Content — bottom-left composition (Natural ref) */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-20 md:pb-24 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow — tagline */}
          <div className="hero-rise hero-rise-1 mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.35em] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
            <span className="font-medium text-white">
              {content.tagline?.primary || "Spirited"}
            </span>
            <span className="text-white/70">
              {content.tagline?.secondary || "to Care"}
            </span>
          </div>

          {/* Intro paragraph — small, light, above heading */}
          <p className="hero-rise hero-rise-2 mb-5 max-w-xl text-[0.95rem] font-light leading-relaxed text-white/85 sm:text-base">
            {content.subtitle ||
              "Extending hope-giving healthcare and faith-filled compassion to the overlooked corners of the globe."}
          </p>

          {/* Giant thin heading */}
          <h1 className="hero-rise hero-rise-3 text-[2.75rem] font-normal leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {content.title || "Doctors On Mission"}{" "}
            <span className="font-medium text-[color:var(--brand-primary)]">
              {content.titleHighlight || "International"}
            </span>
          </h1>

          {/* Actions */}
          <div className="hero-rise hero-rise-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[color:var(--ink)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              About Us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10"
            >
              Our Missions
            </a>
          </div>

          {/* Scripture focus — retained CMS content, refined as a quiet line */}
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
                  {" — "}
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
                        ? "w-10 bg-[color:var(--brand-primary)]"
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
  );
}

export default HeroSection;
