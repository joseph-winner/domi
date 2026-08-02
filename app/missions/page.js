"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
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
    []
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
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Our Missions"
        title="Our Missions"
        subtitle="Explore the communities we serve and the outreach camps we host across Uganda."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-[color:var(--line)] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Mission Sites
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.02] tracking-[-0.035em] text-[color:var(--ink)] sm:text-5xl">
              Where we go{" "}
              <span className="tone-muted">and who we serve</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Each mission is built with local partnerships, volunteer clinicians
              and community-centered care. Select a mission to learn more about
              the outreach and its impact.
            </p>
          </div>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[color:var(--brand-primary-700)] hover:underline"
          >
            Support a mission <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-[color:var(--line)] border-t-[color:var(--brand-primary)]" />
          </div>
        ) : (
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.id || mission.slug}
                href={`/missions/${mission.slug}`}
                className="group"
              >
                <div className="overflow-hidden rounded-[12px] bg-[color:var(--surface)]">
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-4 text-[0.78rem] text-[color:var(--muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {mission.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {mission.date}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl leading-snug tracking-[-0.02em] text-[color:var(--ink)]">
                    {mission.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                    {mission.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary-700)]">
                    View mission
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Join the next mission — dark editorial band */}
      <section className="bg-[color:var(--ink)] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              Get Involved
            </span>
            <h3 className="mt-6 text-[2rem] leading-[1.04] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem]">
              Join the next mission team{" "}
              <span className="text-white/45">and serve with us</span>
            </h3>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/70">
              We mobilize medical, surgical and community outreach teams to serve
              communities with limited access to care. If you want to volunteer
              or support logistics, we would love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link href="/voluteer" className="btn btn-accent">
              Volunteer with us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
