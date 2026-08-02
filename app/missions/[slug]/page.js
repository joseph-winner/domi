"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { CalendarDays, MapPin, ArrowLeft, Users, Check } from "lucide-react";
import Banner from "@/layout/Banner";
import slugify from "@/lib/slugify";
import { missions as fallbackMissions } from "@/lib/missions-data";
import { getMissionItems } from "@/lib/firestore";

export default function MissionDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const [loading, setLoading] = useState(true);
  const [mission, setMission] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const normalizeMission = useMemo(
    () => (item) => ({
      ...item,
      slug: item.slug || slugify(item.title),
      image: item.image || "/img/upcoming-programs.jpg",
      impact: item.impact || [],
      partners: item.partners || [],
      descriptionImages: item.descriptionImages || [],
      videoUrl: item.videoUrl || "",
    }),
    []
  );

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace("www.", "");
      let videoId = "";
      if (host === "youtu.be") {
        videoId = parsed.pathname.split("/").filter(Boolean)[0] || "";
      } else if (host === "youtube.com") {
        if (parsed.pathname.startsWith("/watch")) {
          videoId = parsed.searchParams.get("v") || "";
        } else if (parsed.pathname.startsWith("/embed/")) {
          videoId = parsed.pathname.split("/")[2] || "";
        } else if (parsed.pathname.startsWith("/shorts/")) {
          videoId = parsed.pathname.split("/")[2] || "";
        }
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    const loadMission = async () => {
      const items = await getMissionItems();
      const source = items.length ? items : fallbackMissions;
      const normalized = source.map(normalizeMission);
      const found = normalized.find((item) => item.slug === slug);
      setMission(found || null);
      setLoading(false);
    };
    if (slug) loadMission();
  }, [normalizeMission, slug]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[color:var(--line)] border-t-[color:var(--brand-primary)]" />
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
          Mission not found
        </h1>
        <p className="mt-2 text-[color:var(--muted)]">
          The mission you are looking for does not exist or has been moved.
        </p>
        <Link href="/missions" className="btn btn-primary mt-6">
          <ArrowLeft className="h-4 w-4" /> Back to missions
        </Link>
      </div>
    );
  }

  const embed = getYoutubeEmbedUrl(mission.videoUrl);

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Mission"
        title={mission.title}
        subtitle={`${mission.location} • ${mission.date}`}
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <Link
          href="/missions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary-700)] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all missions
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-[0.82rem] text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {mission.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> {mission.date}
              </span>
            </div>

            <h2 className="mt-4 text-[2rem] leading-[1.04] tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl">
              {mission.title}
            </h2>
            {mission.overview && (
              <p className="mt-5 text-[1rem] leading-relaxed text-[color:var(--muted)]">
                {mission.overview}
              </p>
            )}

            {mission.descriptionImages.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                  Mission moments
                </h3>
                <div className="mt-4 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-3">
                  {mission.descriptionImages.map((url, index) => (
                    <button
                      key={`${url}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(url)}
                      className={`group relative overflow-hidden rounded-[12px] bg-[color:var(--surface)] ${
                        index === 0 && mission.descriptionImages.length > 2
                          ? "col-span-2 row-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={url}
                        alt={`${mission.title} image ${index + 1}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {mission.impact.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                  Impact
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {mission.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.92rem] text-[color:var(--ink-soft)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[14px] border border-[color:var(--line)]">
              <img
                src={mission.image}
                alt={mission.title}
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>

            {mission.partners.length > 0 && (
              <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  <Users className="h-4 w-4" /> Partners
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-soft)]">
                  {mission.partners.map((partner) => (
                    <li key={partner} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[color:var(--brand-primary)]" />
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {embed && (
              <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Mission video
                </h3>
                <div className="mt-3 overflow-hidden rounded-[12px] border border-[color:var(--line)]">
                  <div className="relative w-full overflow-hidden pt-[56.25%]">
                    <iframe
                      src={embed}
                      title={`${mission.title} video`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--ink)] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              Support this mission
            </span>
            <h3 className="mt-6 text-[2rem] leading-[1.04] tracking-[-0.035em] text-white sm:text-4xl">
              Help us reach more communities
            </h3>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/70">
              Your support covers medicines, supplies, transport and volunteer
              logistics for upcoming outreach camps.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link href="/support" className="btn btn-accent">
              Support a mission
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActiveImage("")}
        >
          <button
            type="button"
            onClick={() => setActiveImage("")}
            className="absolute right-5 top-5 rounded-full bg-[color:var(--paper)] px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5"
          >
            Close
          </button>
          <img
            src={activeImage}
            alt="Mission full view"
            className="max-h-[85vh] w-auto max-w-[92vw] rounded-[14px] object-contain"
          />
        </div>
      )}
    </main>
  );
}
