"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { CalendarDays, MapPin, ArrowLeft, Users } from "lucide-react";
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
    [],
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

    if (slug) {
      loadMission();
    }
  }, [normalizeMission, slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl font-bold text-slate-900">Mission not found</h1>
        <p className="mt-2 text-slate-600">
          The mission you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/missions"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to missions
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Banner
        title={mission.title}
        subtitle={`${mission.location} • ${mission.date}`}
        backgroundImage={mission.image}
        align="left"
      />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
        <section className="mx-auto max-w-none px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href="/missions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all missions
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.35)] backdrop-blur sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                  <MapPin className="h-3.5 w-3.5" /> {mission.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                  <CalendarDays className="h-3.5 w-3.5" /> {mission.date}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                {mission.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {mission.overview}
              </p>

              {mission.descriptionImages.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Mission moments
                  </h2>
                  <div className="mt-3 grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-3">
                    {mission.descriptionImages.map((url, index) => (
                      <button
                        key={`${url}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(url)}
                        className={`group relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-[0_20px_50px_-40px_rgba(2,132,199,0.45)] backdrop-blur ${
                          index === 0 && mission.descriptionImages.length > 2
                            ? "col-span-2 row-span-2"
                            : ""
                        }`}
                      >
                        <img
                          src={url}
                          alt={`${mission.title} image ${index + 1}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-slate-900">Impact</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {mission.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.35)] backdrop-blur">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.35)] backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Users className="h-4 w-4" /> Partners
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {mission.partners.map((partner) => (
                    <li key={partner}>• {partner}</li>
                  ))}
                </ul>
              </div>

              {getYoutubeEmbedUrl(mission.videoUrl) && (
                <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.35)] backdrop-blur">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Mission video
                  </h2>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-[0_20px_50px_-40px_rgba(2,132,199,0.45)]">
                    <div className="relative w-full overflow-hidden pt-[56.25%]">
                      <iframe
                        src={getYoutubeEmbedUrl(mission.videoUrl)}
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

        <section className="border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-none px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Support this mission
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Help us reach more communities
                </h3>
                <p className="mt-3 text-slate-600">
                  Your support covers medicines, supplies, transport, and
                  volunteer logistics for upcoming outreach camps.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  Support a mission
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-6">
            <button
              type="button"
              onClick={() => setActiveImage("")}
              className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white"
            >
              Close
            </button>
            <img
              src={activeImage}
              alt="Mission full view"
              className="max-h-[85vh] w-auto max-w-[92vw] rounded-3xl object-contain shadow-2xl"
            />
          </div>
        )}
      </main>
    </div>
  );
}
