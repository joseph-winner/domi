import React from "react";
import {
  FaStethoscope,
  FaClinicMedical,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaAmbulance,
  FaBookMedical,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

function ServiceSection() {
  const services = [
    {
      Icon: FaStethoscope,
      title: "Medical Missions",
      desc: "Community-based medical and surgical outreach bringing free care to where it is needed most.",
    },
    {
      Icon: FaClinicMedical,
      title: "Satellite Health Facilities",
      desc: "Standing up care points in resource-limited settings so communities can reach services closer to home.",
    },
    {
      Icon: FaChalkboardTeacher,
      title: "Training",
      desc: "Strengthening local health workers with updated guidelines and hands-on capacity building.",
    },
    {
      Icon: FaHandsHelping,
      title: "Christian Outreach Missions",
      desc: "Serving communities with compassion and faith at the heart of every visit.",
    },
    {
      Icon: FaAmbulance,
      title: "Emergency Humanitarian Relief",
      desc: "Rapid, practical support for communities facing crisis and displacement.",
    },
    {
      Icon: FaBookMedical,
      title: "Research Studies & Assessments",
      desc: "Evidence-led assessments that shape better, more responsive community health programs.",
    },
  ];

  const tones = [
    "bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]",
    "bg-[color:var(--brand-secondary)]/18 text-[#a07d1e]",
    "bg-[color:var(--brand-accent)]/18 text-[#5f7d1f]",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            What we do
          </span>
          <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            Ways we bring care to communities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            From medical missions to training and humanitarian relief, every
            service is built to deliver free, compassionate and reliable care.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group flex h-full flex-col rounded-[1.5rem] border border-[color:var(--line)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(20,33,31,0.5)]"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[i % 3]}`}
              >
                <s.Icon className="text-xl" />
              </span>
              <h3 className="mt-6 text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
