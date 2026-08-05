import {
  MapPin,
  CalendarDays,
  Stethoscope,
  Scissors,
  HeartPulse,
  Baby,
  ShieldPlus,
  Gauge,
  GraduationCap,
  Activity,
  Users,
  ClipboardCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Banner from "@/layout/Banner";

const overview = [
  { icon: MapPin, label: "Coverage", value: "Eight regions in Uganda" },
  { icon: CalendarDays, label: "Duration", value: "Monthly outreach cycle" },
];

const impactNumbers = [
  { icon: Stethoscope, value: "1,500–2,000", label: "Medical consultations" },
  { icon: Scissors, value: "60–100", label: "Minor surgical procedures" },
  { icon: Activity, value: "15–30", label: "Major surgical procedures" },
  { icon: ShieldPlus, value: "200", label: "Cervical cancer screening" },
  { icon: HeartPulse, value: "250", label: "Breast cancer screening" },
  { icon: Baby, value: "300", label: "Child health assessments" },
  { icon: Gauge, value: "500", label: "Hypertension & diabetes screening" },
  { icon: GraduationCap, value: "1,000+", label: "Health education participants" },
];

const timeline = [
  {
    week: "Week 1",
    title: "Planning and Community Mobilization",
    items: [
      "Coordination meetings with DHOs",
      "Facility engagement",
      "Site selection",
      "Community mobilization",
      "Home visits",
      "Patient registration",
      "Logistics preparation",
      "Team briefing",
    ],
  },
  {
    week: "Week 2",
    title: "Community Medical Camp",
    items: [
      "Registration and triage",
      "General medical services",
      "Pediatric care",
      "Obstetric services",
      "Mental health services",
      "HIV/TB services",
      "Diagnostics",
      "Pharmacy",
      "Health education",
    ],
  },
  {
    week: "Week 3",
    title: "Mobile Surgical Camp",
    items: [
      "Minor surgeries",
      "Hernia",
      "Hydrocele",
      "Circumcision",
      "Lipoma",
      "Cysts",
      "Wounds",
      "Abscesses",
      "Pre-operative assessment",
      "Post-operative care",
      "Referrals",
    ],
  },
  {
    week: "Week 4",
    title: "Follow-up and Health System Strengthening",
    items: [
      "Home visits",
      "Wound reviews",
      "Telemedicine follow-up",
      "Data analysis",
      "Monthly review meetings",
    ],
  },
];

const kpis = [
  { icon: Users, value: "1,500–2,000", label: "Patients consulted" },
  { icon: Activity, value: "75–130", label: "Surgical procedures" },
  { icon: HeartPulse, value: "200", label: "Women screened" },
  { icon: Gauge, value: "500", label: "Adults screened" },
  { icon: Baby, value: "300", label: "Children assessed" },
  { icon: ClipboardCheck, value: "95%+", label: "Post-operative follow-up" },
];

export default function HealthReachProgramPage() {
  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Missions • Health Reach"
        title="Health Reach"
        subtitle="Community Integrated Mobile Medical and Surgical Care Network"
        backgroundImage="/img/upcoming-programs.jpg"
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Monthly Outreach Programme
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Integrated care that{" "}
              <span className="tone-muted">reaches every community</span>
            </h2>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-[color:var(--muted)]">
              A monthly outreach programme delivering integrated medical and
              surgical services to underserved communities across Uganda —
              bringing prevention, diagnosis, treatment, referral and follow-up
              directly to the people who need it most.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {overview.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--section-teal)] p-6"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[color:var(--paper)] text-[color:var(--brand-primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-medium !text-[color:var(--ink)]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Goal */}
      <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-8 lg:px-10">
        <div
          className="overflow-hidden rounded-[20px] px-6 py-14 text-center sm:px-12 lg:px-20"
          style={{ background: "var(--brand-primary)" }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white">
            Programme Goal
          </span>
          <p className="mx-auto mt-6 max-w-4xl text-[1.4rem] font-normal leading-[1.4] tracking-[-0.02em] text-white sm:text-[1.7rem]">
            To provide equitable, integrated, and sustainable medical and
            surgical services to underserved communities while strengthening
            local health systems through prevention, early diagnosis, treatment,
            referral, and follow-up.
          </p>
        </div>
      </section>

      {/* Monthly Impact Numbers */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Monthly Impact
          </span>
          <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
            What one outreach cycle{" "}
            <span className="tone-muted">delivers</span>
          </h2>
          <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
            Every month, the Health Reach programme brings measurable, integrated
            care to communities across eight regions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactNumbers.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-[16px] border border-[color:var(--line)] bg-[#faf9f6] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-accent)]/12 text-[color:var(--brand-primary)]">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-3xl font-medium tracking-[-0.03em] !text-[color:var(--ink)]">
                {value}
              </p>
              <p className="mt-2 text-[0.9rem] leading-snug text-[color:var(--muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Programme Timeline */}
      <section className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Monthly Timeline
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
              A four-week <span className="tone-muted">outreach cycle</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Each cycle moves from planning and mobilisation through medical and
              surgical camps to follow-up and health-system strengthening.
            </p>
          </div>

          <div className="relative mt-12">
            <span
              aria-hidden
              className="absolute left-4 top-3 bottom-3 w-px bg-[color:var(--line)] sm:left-5"
            />
            <ol className="space-y-6">
              {timeline.map((step, i) => (
                <li key={step.week} className="relative pl-12 sm:pl-16">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-semibold text-white ring-4 ring-[color:var(--section-teal)] sm:h-10 sm:w-10">
                    {i + 1}
                  </span>
                  <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6 sm:p-7">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary-700)]">
                      {step.week}
                    </p>
                    <h3 className="mt-2 text-xl !text-[color:var(--ink)] sm:text-2xl">
                      {step.title}
                    </h3>
                    <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-accent)]" />
                          <span className="text-[0.92rem] leading-snug text-[color:var(--ink-soft)]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Key Performance Indicators
          </span>
          <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
            Measuring what <span className="tone-muted">matters</span>
          </h2>
          <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
            Clear targets keep every outreach accountable to the communities we
            serve.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "var(--brand-secondary)" }}
              />
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-secondary)]/20 text-[color:var(--brand-primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-3xl font-medium tracking-[-0.03em] !text-[color:var(--ink)]">
                  {value}
                </p>
              </div>
              <p className="mt-4 text-[0.95rem] font-medium !text-[color:var(--ink)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[18px] border border-[color:var(--line)] bg-[color:var(--section-teal)] px-6 py-9 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl !text-[color:var(--ink)]">
              Partner with Health Reach
            </h3>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
              Support a monthly outreach cycle, volunteer your clinical skills, or
              help us reach the next community.
            </p>
          </div>
          <div className="flex flex-none flex-wrap justify-center gap-3">
            <a href="/support" className="btn btn-primary">
              Support this programme
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/voluteer" className="btn btn-outline">
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
