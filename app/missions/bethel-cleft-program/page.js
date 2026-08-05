"use client";

import { useState } from "react";
import {
  Check,
  Utensils,
  Activity,
  TrendingDown,
  MessageCircle,
  Users,
  HeartHandshake,
  Stethoscope,
  Ear,
  Baby,
  Church,
  ArrowUpRight,
} from "lucide-react";
import Banner from "@/layout/Banner";
import ReportCard from "@/components/reports/ReportCard";
import PdfViewerModal from "@/components/reports/PdfViewerModal";
import { bethelReport } from "@/components/reports/reports-data";

const challenges = [
  { icon: Utensils, label: "Feeding difficulties" },
  { icon: TrendingDown, label: "Malnutrition" },
  { icon: Activity, label: "Delayed growth" },
  { icon: MessageCircle, label: "Speech challenges" },
  { icon: Users, label: "Social stigma" },
  { icon: Stethoscope, label: "Limited access to specialised surgical care" },
];

const interventions = [
  "Free cleft repair surgeries",
  "Comprehensive medical care",
  "Nutritional support",
  "Structured follow-up care",
];

const team = [
  { icon: Stethoscope, label: "Plastic surgeons" },
  { icon: Ear, label: "ENT specialists" },
  { icon: HeartHandshake, label: "Medical professionals" },
  { icon: Users, label: "Volunteers" },
  { icon: Church, label: "Community leaders" },
  { icon: Baby, label: "Health workers" },
];

const mobilization = [
  "Village Health Teams",
  "Local leaders",
  "Churches",
  "Partner organisations",
];

export default function BethelCleftProgramPage() {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Missions • Bethel Cleft Program"
        title="Bethel Smile Project"
        subtitle="Restoring smiles. Restoring hope. Bringing healing to children with cleft conditions."
        backgroundImage="/img/3daymedcamp.jpg"
      />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              A humanitarian medical initiative
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
              Transforming lives, <span className="tone-muted">one smile at a time</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              The Bethel Smile Project is a humanitarian medical initiative by
              Doctors on Mission International in partnership with Amigos
              Internacionales, dedicated to restoring hope and transforming the
              lives of children born with cleft lip and cleft palate conditions
              in Uganda.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[16px] lg:h-[26rem]">
            <img
              src="/img/about-5.jpg"
              alt="Paediatric care during a Doctors on Mission surgical camp"
              className="h-64 w-full object-cover sm:h-80 lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              The Challenge
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
              A significant, <span className="tone-muted">often hidden burden</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Cleft lip and palate remain a significant health challenge,
              especially among vulnerable communities where children experience:
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[color:var(--brand-accent)]/12 text-[color:var(--brand-primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="pt-1 text-[0.98rem] font-medium leading-snug !text-[color:var(--ink)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-[1rem] leading-relaxed text-[color:var(--muted)]">
            Cultural misconceptions and financial barriers often delay access to
            treatment, leaving children and families to carry this burden far
            longer than they should.
          </p>
        </div>
      </section>

      {/* Our Intervention */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Our Intervention
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
              Specialised medical &amp;{" "}
              <span className="tone-muted">surgical missions</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Through specialised medical and surgical missions, the Bethel Smile
              Project provides:
            </p>
            <ul className="mt-6 space-y-3">
              {interventions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[1rem] leading-relaxed !text-[color:var(--ink)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[18px] border border-[color:var(--line)] bg-[color:var(--section-teal)] p-7 sm:p-9">
            <h3 className="text-xl !text-[color:var(--ink)]">
              A collaborative effort
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
              Every mission brings together a dedicated team working side by side
              with the communities we serve.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {team.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[color:var(--brand-secondary)]/20 text-[color:var(--brand-primary)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.9rem] font-medium !text-[color:var(--ink)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Communities */}
      <section className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Target Communities
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
              Reaching children where{" "}
              <span className="tone-muted">the need is greatest</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[color:var(--muted)]">
              The project focuses on children under five years with congenital
              cleft lip and palate anomalies, particularly in underserved
              communities in Northern Uganda.
            </p>
          </div>
          <div className="rounded-[18px] border border-[color:var(--line)] bg-[color:var(--paper)] p-7 sm:p-9">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Community mobilisation happens through
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {mobilization.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[12px] bg-[color:var(--section-teal)] px-4 py-3"
                >
                  <span className="mt-0 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.92rem] font-medium !text-[color:var(--ink)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact / Mission */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div
          className="overflow-hidden rounded-[20px] px-6 py-14 text-center sm:px-12 lg:px-16"
          style={{ background: "var(--brand-primary)" }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white">
            More than surgery
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-[1.8rem] font-normal leading-[1.2] tracking-[-0.03em] text-white sm:text-4xl">
            Beyond surgery, the Bethel Smile Project seeks to restore dignity,
            reduce stigma, support families, and demonstrate God&rsquo;s love
            through compassionate healthcare.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg font-medium text-[color:var(--brand-secondary)]">
            &ldquo;Serving the least, restoring hope, and bringing healing to
            communities.&rdquo;
          </p>
        </div>
      </section>

      {/* Programme document */}
      <section className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Programme Document
            </span>
            <h2 className="mt-6 text-[2.25rem] leading-[1.04] tracking-[-0.035em] !text-[color:var(--ink)] sm:text-4xl">
              Read the <span className="tone-muted">concept note</span>
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Explore the full Bethel Smile Project concept note — our approach,
              partnerships, target communities and the impact we aim to achieve.
              Preview it in full screen or download the PDF.
            </p>
            <a href="/report" className="btn btn-outline mt-8">
              View all reports
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <ReportCard report={bethelReport} onView={setActiveReport} />
          </div>
        </div>
      </section>

      <PdfViewerModal
        open={!!activeReport}
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </main>
  );
}
