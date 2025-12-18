"use client";

import React, { useEffect, useRef } from "react";

const VIDEO_ID = "qi_KSgVtI4M";

function VideoSection() {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  // Helper to control the YouTube player via postMessage
  const sendPlayerCommand = (command) => {
    if (!iframeRef.current || typeof window === "undefined") return;
    try {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args: [],
        }),
        "*"
      );
    } catch {
      // Fail silently if player isn't ready yet
    }
  };

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section in view: play (muted, looping)
            sendPlayerCommand("playVideo");
          } else {
            // Section out of view: pause
            sendPlayerCommand("pauseVideo");
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8EC] to-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -top-40 -right-32 h-72 w-72 rounded-full bg-[#FF126B]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-[#A1CB4A]/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-[#FF126B]/30 bg-[#FF126B]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#C01055] backdrop-blur">
            Our Story
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Welcome to Doctors On Mission International
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Get to know who we are, what we do, and how we serve communities
            around the world through medical outreach and compassionate care.
          </p>
          <p className="mt-3 text-xs text-slate-600 sm:text-sm">
            Watch this short video to see our mission in action.
          </p>
        </div>

        <div className="relative w-full max-w-xl">
          <div className="group relative rounded-2xl bg-gradient-to-tr from-[#FF126B]/70 via-[#0086bf]/60 to-[#A1CB4A]/70 p-[2px] shadow-[0_20px_60px_rgba(15,23,42,0.9)] transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-2xl bg-black/90">
              <div className="aspect-video w-full">
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&mute=1&autoplay=0&controls=1&rel=0&modestbranding=1&loop=1&playlist=${VIDEO_ID}`}
                  title="Welcome to Doctors on Mission International"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                ></iframe>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
