import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import teamLeaderImg from "@/public/img/team-leader.jpg";

function MessageSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#EABF4E]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#053759]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EABF4E]" />
            Leadership Message
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#053759]">
            Message from our Team Leader
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-600">
            A personal word from the heart of our mission, sharing the realities
            on the ground and the hope we carry into every community we serve.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          {/* Image Block */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative h-full w-full max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/15 ring-1 ring-slate-900/10">
              <Image
                src={teamLeaderImg}
                alt="Dr Mulyamboga Paul - Team Leader"
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EABF4E]">
                    Team Leader
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Dr Mulyamboga Paul
                  </p>
                  <p className="mt-0.5 text-xs text-slate-200/80">
                    Doctors on Mission International
                  </p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EABF4E] text-[#053759] shadow-md">
                  <FaQuoteLeft className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="lg:col-span-3 flex">
            <div className="relative flex-1 rounded-3xl bg-white/80 p-8 md:p-10 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 backdrop-blur">
              <FaQuoteLeft className="pointer-events-none absolute -top-10 left-8 h-16 w-16 text-[#EABF4E]/40 select-none" />
              <div className="space-y-4 text-[0.9rem] leading-relaxed text-slate-700">
                <p>
                  <strong className="font-semibold text-[#053759]">
                    Greeting from Doctor's on Mission International
                  </strong>{" "}
                  a volunteer-based, non-for-profit organization with an aim of
                  being a pillar of medical missions in resource-limited
                  settings. We champion community-based healthcare provision
                  through tailor-made community programs.
                </p>
                <p>
                  <strong className="font-semibold text-[#053759]">
                    Limited access to healthcare services:
                  </strong>{" "}
                  Uganda's healthcare system is still struggling to provide
                  access to basic healthcare services, especially in rural
                  areas.
                </p>
                <p>
                  <strong className="font-semibold text-[#053759]">
                    High disease burden:
                  </strong>{" "}
                  Uganda has a high prevalence of infectious diseases such as
                  malaria, HIV/AIDS, and tuberculosis, which puts a strain on
                  the healthcare system.
                </p>
                <p>
                  <strong className="font-semibold text-[#053759]">
                    Inadequate healthcare financing:
                  </strong>{" "}
                  Uganda's healthcare system is underfunded, with inadequate
                  resources allocated to health, leading to a shortage of
                  medical personnel, equipment, and medicines.
                </p>
                <p>
                  <strong className="font-semibold text-[#053759]">
                    Poor health infrastructure:
                  </strong>{" "}
                  The country's health infrastructure is inadequate, with a
                  shortage of hospitals, health centers, and medical equipment,
                  making it difficult to provide quality healthcare services.
                  Doctors on Mission International aims at bridging the gap of
                  healthcare in rural settings through Christian-based medical
                  missions. I encourage you to partner with us in making this
                  possible. May God richly bless you as you consider donating to
                  support this work in Africa.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
                <div>
                  <p className="text-sm font-semibold text-[#053759]">
                    Dr Mulyamboga Paul
                  </p>
                  <p className="text-xs text-slate-500">
                    Team Leader, Doctors on Mission International
                  </p>
                </div>
                <div className="flex gap-2 text-[0.7rem] font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Impact-driven mission
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                    Community health
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
