import Image from "next/image";
import { MapPin } from "lucide-react";

const missionsByCountry = [
  {
    country: "Uganda",
    missions: [
      "Lamwo Medical Mission — 2026",
      "Bugiri Surgical Mission — September 2026",
      "Nwoya Medical Mission — September 2026",
      "Gulu Medical Mission — October 2026",
      "Kapchorwa Surgical Mission — November 2026",
      "Monthly Paediatric Surgical Outreaches — Arua, Rwamwanja, Isingiro, Gulu",
    ],
  },
  {
    country: "Burundi",
    missions: ["Gisuru Medical & Surgical Mission — October 2026"],
  },
  {
    country: "Malawi",
    missions: ["Malawi Medical & Surgical Mission — November 2026"],
  },
  {
    country: "Nigeria",
    missions: ["Kaduna Eye Surgical Camp — August–September 2026"],
  },
  {
    country: "Kenya",
    missions: ["Busia Medical & Surgical Mission — December 2026"],
  },
];

const totalMissions = missionsByCountry.reduce(
  (n, c) => n + c.missions.length,
  0
);

function UpcomingMissionsSection() {
  return (
    <section className="bg-[color:var(--section-teal)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
            2026 Mission Calendar
          </span>
          <h2 className="mt-5 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            Upcoming Medical &amp;{" "}
            <span className="tone-muted">Surgical Missions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            Join us in prayer, partnership and practical support as our teams
            prepare to serve communities across Africa.
          </p>
        </div>

        {/* Image left + mission cards right */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: image with overlaid stat */}
          <div className="relative overflow-hidden rounded-[16px] lg:sticky lg:top-24">
            <div className="relative min-h-[26rem] lg:min-h-[34rem]">
              <Image
                src="/img/upcoming-programs.jpg"
                alt="Doctors on Mission surgical outreach team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-8">
              <div>
                <p className="text-5xl font-semibold tracking-[-0.03em] text-white">
                  {totalMissions}+
                </p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Outreaches planned
                </p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-semibold tracking-[-0.03em] text-[color:var(--brand-secondary)]">
                  {missionsByCountry.length}
                </p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Countries
                </p>
              </div>
            </div>
          </div>

          {/* Right: country cards */}
          <div className="space-y-4">
            {missionsByCountry.map(({ country, missions }) => (
              <article
                key={country}
                className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(5,55,89,0.5)] sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[color:var(--brand-accent)]/12 text-[color:var(--brand-primary)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold !text-[color:var(--ink)]">
                    {country}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                  {missions.map((mission) => (
                    <li key={mission} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--brand-accent)]"
                      />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingMissionsSection;
