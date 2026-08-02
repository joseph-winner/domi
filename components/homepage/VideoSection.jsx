"use client";

import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "qi_KSgVtI4M";

function VideoSection() {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  const sendPlayerCommand = (command) => {
    if (!iframeRef.current || typeof window === "undefined") return;
    try {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
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
            sendPlayerCommand("playVideo");
          } else {
            sendPlayerCommand("pauseVideo");
          }
        });
      },
      { root: null, threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[color:var(--paper)] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[20px] bg-[color:var(--brand-primary)] px-6 py-12 sm:px-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[0.78rem] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--paper)]" />
                Our Story
              </span>
              <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.6rem]">
                Welcome to Doctors On Mission International
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-white/90">
                Get to know who we are, what we do, and how we serve communities
                around the world through medical outreach and compassionate
                care.
              </p>
              <p className="mt-3 text-[0.9rem] text-white/80">
                Watch this short video to see our mission in action.
              </p>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="overflow-hidden rounded-[14px] bg-black shadow-2xl shadow-black/30 ring-1 ring-white/20">
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
              </div>
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-4 py-2 text-[0.8rem] font-semibold text-[color:var(--ink)] shadow-lg">
                <Play className="h-3.5 w-3.5 fill-current text-[color:var(--brand-primary-700)]" />
                Watch our story
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
