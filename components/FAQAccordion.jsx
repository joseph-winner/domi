"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight, HelpCircle } from "lucide-react";

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
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <HelpCircle className="h-3 w-3" />
            </span>
            {eyebrow}
          </span>
          <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
            {intro}
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-[color:var(--line)] overflow-hidden rounded-[1.5rem] border border-[color:var(--line)]">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={isOpen ? "bg-white" : "bg-[color:var(--surface)]"}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[1.02rem] font-medium tracking-[-0.01em] text-[color:var(--ink)]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-transparent bg-[color:var(--brand-primary)] text-white"
                          : "border-[color:var(--line)] text-[color:var(--ink-soft)]"
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
                      <p className="px-6 pb-6 text-[0.92rem] leading-relaxed text-[color:var(--muted)]">
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
