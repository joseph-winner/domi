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

  const normalizeMission = useMemo(
    () => (item) => ({
      ...item,
      slug: item.slug || slugify(item.title),
      image: item.image || "/img/upcoming-programs.jpg",
      impact: item.impact || [],
      partners: item.partners || [],
    }),
    [],
  );

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
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
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
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
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
      </main>
    </div>
  );
}
