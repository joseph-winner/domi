"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const defaultItems = [
  {
    q: "How are donations used?",
    a: "Every gift directly funds medical supplies, transport, logistics and the running of free outreach camps. Patients are never charged during our missions.",
  },
  {
    q: "Can I choose a specific program to support?",
    a: "Yes. You can direct your gift toward a particular mission, surgical camp or the Medical Center build. Reach out and we will help you give with purpose.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Depending on your country of residence, contributions may be eligible for tax relief. Contact us for the documentation you need.",
  },
  {
    q: "How do I know my donation made an impact?",
    a: "We share field reports, photos and updates from every outreach so you can see the tangible difference your support makes.",
  },
  {
    q: "Can I volunteer instead of donating?",
    a: "Absolutely. Clinicians, logisticians and community volunteers are all welcome. Visit our volunteer page to express interest.",
  },
  {
    q: "Who can I contact for more information?",
    a: "Our team is one message away. Use the contact page or call us directly and we will respond within 24 to 48 hours.",
  },
];

export default function FAQAccordion({
  items = defaultItems,
  eyebrow = "Questions Answered",
  title = "Frequently asked questions",
  intro = "Answers to common questions about our mission and work, and a quick guide to our programs and processes.",
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left */}
        <div className="lg:col-span-5">
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[2rem] leading-[1.06] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            {intro}
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#eabf4e] px-6 py-3 text-sm font-semibold text-[#053759] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-white/15 overflow-hidden rounded-[14px] border border-[#053759]">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className="bg-[#053759]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[1.02rem] font-medium tracking-[-0.01em] text-white">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-transparent bg-[#eabf4e] text-[#053759]"
                          : "border-white/25 text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.92rem] leading-relaxed text-white/75">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
