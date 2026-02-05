"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Banner from "@/layout/Banner";
import slugify from "@/lib/slugify";
import { missions as fallbackMissions } from "@/lib/missions-data";
import { getMissionItems } from "@/lib/firestore";

export default function MissionsPage() {
  const [loading, setLoading] = useState(true);
  const [missions, setMissions] = useState([]);

  const normalizeMission = useMemo(
    () => (mission) => ({
      ...mission,
      slug: mission.slug || slugify(mission.title),
      image: mission.image || "/img/upcoming-programs.jpg",
      impact: mission.impact || [],
      partners: mission.partners || [],
    }),
    [],
  );

  useEffect(() => {
    const loadMissions = async () => {
      const items = await getMissionItems();
      const source = items.length ? items : fallbackMissions;
      setMissions(source.map(normalizeMission));
      setLoading(false);
    };

    loadMissions();
  }, [normalizeMission]);

  return (
    <div>
      <Banner
        title="Our Missions"
        subtitle="Explore the communities we serve and the outreach camps we host across Uganda."
      />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    Mission Sites
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    Where We Go
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    Each mission is built with local partnerships, volunteer
                    clinicians, and community‑centered care. Click a mission to
                    learn more about the outreach and impact.
                  </p>
                </div>

                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  Support a mission <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {missions.map((mission) => (
                  <Link
                    key={mission.id || mission.slug}
                    href={`/missions/${mission.slug}`}
                    className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 shadow-[0_25px_70px_-55px_rgba(2,132,199,0.4)] backdrop-blur transition hover:bg-white"
                  >
                    <div className="relative">
                      <img
                        src={mission.image}
                        alt={mission.title}
                        className="h-48 w-full object-cover sm:h-52"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                          <MapPin className="h-3.5 w-3.5" />
                          {mission.location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {mission.date}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-slate-900">
                        {mission.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {mission.excerpt}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                        View mission <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Get Involved
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Join the next mission team
                </h3>
                <p className="mt-3 text-slate-600">
                  We mobilize medical, surgical, and community outreach teams to
                  serve communities with limited access to care. If you want to
                  volunteer or support logistics, we would love to hear from
                  you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jointeam"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
                >
                  Volunteer with us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Contact our team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
