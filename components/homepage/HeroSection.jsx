"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him, and by his wounds we are healed.",
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
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt="Slide Background"
            layout="fill"
            objectFit="cover"
            className={`brightness-[.35] transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            priority={index === current}
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex w-full flex-col items-center px-5 py-24 text-center md:px-10">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[0.65rem] uppercase tracking-[0.45em] backdrop-blur">
          <span className="text-[#FF126B] font-semibold">
            {content.tagline?.primary || "Spirited"}
          </span>
          <span className="text-white/80">
            {content.tagline?.secondary || "to Care"}
          </span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          {content.title || "Doctors On Mission"}{" "}
          <span className="text-[#A1CB4A]">
            {content.titleHighlight || "International"}
          </span>
        </h1>
        <p className="mt-4 max-w-3xl text-base text-gray-200 sm:text-lg">
          {content.subtitle ||
            "Extending hope-giving healthcare and faith-filled compassion to the overlooked corners of the globe."}
        </p>
        <div
          className="mt-8 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur"
          aria-live="polite"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Scripture focus
          </p>
          <div className="relative mt-3">
            {slides.map((slide, index) => (
              <p
                key={slide.verse}
                className={`text-lg text-gray-100 transition-opacity duration-700 ease-in-out ${
                  index === current
                    ? "relative opacity-100"
                    : "absolute inset-0 opacity-0"
                }`}
              >
                <span className="font-semibold text-white">{slide.verse}</span>{" "}
                - {slide.text}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-2xl bg-[#A1CB4A] px-8 py-3 text-base font-semibold text-black shadow-lg shadow-[#A1CB4A]/30 transition hover:translate-y-0.5 hover:bg-[#8FB438]"
          >
            About Us
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Our Missions
          </a>
        </div>
      </div>

      {/* Slide Indicators - dashed style */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3 px-6">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <button
              key={slide.verse}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`group relative flex items-center justify-center rounded-full px-1 py-2 transition-all duration-300 ${
                isActive ? "scale-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <span className="sr-only">{slide.verse}</span>
              <span
                className={`h-[3px] rounded-full border border-dashed transition-all duration-300 ${
                  isActive
                    ? "w-10 border-[#FF126B] bg-[#FF126B] shadow-[0_0_12px_rgba(255,18,107,0.6)]"
                    : "w-6 border-white/50 bg-white/30"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection;
