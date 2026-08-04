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

function UpcomingMissionsSection() {
  return (
    <section className="bg-[color:var(--section-teal)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              2026 mission calendar
            </span>
            <h2 className="mt-5 text-[2.25rem] leading-[1.02] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Upcoming Medical &amp; <span className="tone-muted">Surgical Missions</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              Join us in prayer, partnership, and practical support as our teams
              prepare to serve communities across Africa.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {missionsByCountry.map(({ country, missions }, index) => (
                <article
                  key={country}
                  className={`rounded-[16px] border p-6 sm:p-7 ${index === 0 ? "sm:col-span-2 bg-[color:var(--brand-primary)] border-[color:var(--brand-primary)]" : "border-[color:var(--line)] bg-[color:var(--paper)]"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[color:var(--brand-secondary)]" : "bg-[color:var(--brand-accent)]"}`} />
                    <h3 className={`text-xl ${index === 0 ? "text-white" : "!text-[color:var(--ink)]"}`}>
                      {country}
                    </h3>
                  </div>
                  <ul className={`mt-5 space-y-3 text-sm leading-relaxed ${index === 0 ? "text-white/85" : "text-[color:var(--muted)]"}`}>
                    {missions.map((mission) => (
                      <li key={mission} className="flex gap-3">
                        <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${index === 0 ? "bg-[color:var(--brand-secondary)]" : "bg-[color:var(--brand-primary)]"}`} />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingMissionsSection;
