"use client";

import React, { useMemo, useState } from "react";
import Banner from "@/layout/Banner";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function page() {
  const CONTACT = useMemo(
    () => ({
      org: "Doctors on Mission International",
      addressLines: [
        "P.O. Box 421315, Mbarara–Isingiro Road",
        "Mbarara City, South-Western Region, Uganda",
      ],
      phones: ["+256 782 524 317", "+256 784 808 738"],
      whatsapp: "+256 782 524 317",
      email: "info@doctorsonmissionint.org",
      mapQuery: "Mbarara-Isingiro Road, Mbarara, Uganda",
    }),
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Your email is required.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Please write a short message.";
    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (status.state !== "idle") setStatus({ state: "idle", msg: "" });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (hasErrors) {
      setStatus({
        state: "error",
        msg: "Please fix the highlighted fields and try again.",
      });
      return;
    }
    setStatus({ state: "sending", msg: "Sending your message…" });
    await new Promise((r) => setTimeout(r, 700));
    setStatus({
      state: "success",
      msg: "Message sent! We'll get back to you as soon as possible.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  const inquiryCards = [
    {
      title: "General Inquiries",
      desc: "For questions about our organization, ongoing missions, donation options, or general information.",
      tint: "bg-[color:var(--brand-primary)]",
      textOn: "text-white",
      sub: "text-white/85",
    },
    {
      title: "Partnership Opportunities",
      desc: "If you represent an organization, foundation, church or business interested in partnering with DOMI.",
      tint: "bg-[color:var(--brand-secondary)]",
      textOn: "text-[color:var(--ink)]",
      sub: "text-[color:var(--ink-soft)]",
    },
  ];

  const reachCards = [
    {
      Icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`,
      note: "The fastest way to reach our team and ask questions.",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: CONTACT.phones[1],
      href: `tel:${CONTACT.phones[1].replace(/\s/g, "")}`,
      note: "Speak with us about missions, volunteering and support.",
    },
    {
      Icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      note: "Send your enquiry and any details in your own time.",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Mbarara City, Uganda",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT.mapQuery
      )}`,
      note: "Where our outreach and mission planning begins.",
    },
  ];

  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/people/Doctors-on-Mission-International/61573255932279/#", Icon: FaFacebookF },
    { label: "X", href: "https://x.com/DoctorsMission/status/2074434034881400981", Icon: FaXTwitter },
    { label: "YouTube", href: "https://www.youtube.com/@doctorsonmissioninternational", Icon: FaYoutube },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/doctors-on-mission-international/?originalSubdomain=ug", Icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com/doctors_on_mission_int/", Icon: FaInstagram },
  ];

  const fieldClass =
    "w-full rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 text-sm !text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12";

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Contact Us"
        title="Let's start a conversation"
        subtitle="Reach out for medical mission inquiries, volunteering, donations, or partnership opportunities."
        backgroundImage="/img/partnerships.jpg"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Inquiry cards (kept) */}
        <div className="grid gap-5 md:grid-cols-2">
          {inquiryCards.map((c) => (
            <div
              key={c.title}
              className={`relative overflow-hidden rounded-[16px] ${c.tint} p-8 text-center sm:p-10`}
            >
              <h2 className={`text-2xl tracking-[-0.02em] ${c.textOn}`}>
                {c.title}
              </h2>
              <p className={`mx-auto mt-3 max-w-sm text-[0.92rem] leading-relaxed ${c.sub}`}>
                {c.desc}
              </p>
              <a
                href="#inquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Contact Us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Make an inquiry — reference form, appended after the cards */}
      <section id="inquiry" className="bg-[color:var(--section-teal)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Form */}
          <div>
            <h2 className="text-[2rem] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
              Make an inquiry
            </h2>

            {status.state !== "idle" && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-[12px] border px-4 py-3 text-sm ${
                  status.state === "success"
                    ? "border-[color:var(--brand-accent)]/40 bg-[color:var(--brand-accent)]/10 text-[color:var(--brand-primary-700)]"
                    : status.state === "sending"
                    ? "border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--muted)]"
                    : "border-rose-300 bg-rose-50 text-rose-700"
                }`}
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]">
                    Full name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                  {errors.name && status.state === "error" && (
                    <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+256 700 000 000"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    className={fieldClass}
                  />
                  {errors.email && status.state === "error" && (
                    <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="What is this about?"
                    className={fieldClass}
                  />
                  {errors.subject && status.state === "error" && (
                    <p className="mt-1 text-xs text-rose-600">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]">
                  Tell us more
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Share any details that will help us respond well."
                  className={`${fieldClass} resize-y`}
                />
                {errors.message && status.state === "error" && (
                  <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)] disabled:opacity-70"
                >
                  Send inquiry <Send className="h-4 w-4" />
                </button>
              </div>

              <p className="text-xs text-[color:var(--muted)]">
                We read every message and reply personally, not with an automated
                response.
              </p>
            </form>
          </div>

          {/* Reach us directly */}
          <div>
            <h2 className="text-[2rem] tracking-[-0.03em] !text-[color:var(--ink)] sm:text-4xl">
              Reach us directly
            </h2>
            <div className="mt-8 space-y-4">
              {reachCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-[16px] bg-[color:var(--paper)] p-6 shadow-[0_18px_50px_-40px_rgba(28,26,22,0.5)] transition hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-sm !text-[color:var(--ink)]">{c.label}</p>
                    <p className="mt-0.5 font-semibold text-[color:var(--brand-primary-700)]">
                      {c.value}
                    </p>
                    <p className="mt-3 text-[0.85rem] leading-relaxed text-[color:var(--muted)]">
                      {c.note}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[color:var(--brand-secondary)]/25 text-[color:var(--brand-primary-700)]">
                    <c.Icon className="h-5 w-5" />
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6" aria-labelledby="social-links-heading">
              <p
                id="social-links-heading"
                className="text-sm font-medium text-[color:var(--ink)]"
              >
                Follow Doctors On Mission
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-600)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[16px] border border-[color:var(--line)]">
          <iframe
            title="Doctors on Mission location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              CONTACT.mapQuery
            )}&output=embed`}
            className="h-[320px] w-full sm:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-8 text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} {CONTACT.org}. All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default page;
