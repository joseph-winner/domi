"use client";

import React, { useMemo, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  HeartHandshake,
  MessageSquare,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

function page() {
  const CONTACT = useMemo(
    () => ({
      org: "Doctors on Mission International",
      addressLines: [
        "P.O. Box 421315, Mbarara–Isingiro Road",
        "Mbarara City, South-Western Region, Uganda",
      ],
      phones: ["+256 782 524 317", "+256 784 808 738"],
      email: "info@doctorsonmissionint.org",
      website: "www.doctorsonmissionint.org",
      scripture: {
        ref: "Mark 1:34",
        text: "…and Jesus healed many who had various diseases. He also drove out many demons, but he would not let the demons speak because they knew who he was.",
      },
      mapQuery: "Mbarara-Isingiro Road, Mbarara, Uganda",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Mbarara-Isingiro+Road,+Mbarara,+Uganda",
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

  const reasons = [
    {
      Icon: HeartHandshake,
      title: "Personalized Support",
      desc: "Whether you are a donor, volunteer or partner, our team helps you every step of the way.",
    },
    {
      Icon: MessageSquare,
      title: "Clear Communication",
      desc: "We respond promptly, typically within 24–48 hours, with the answers you need.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
              <Mail className="h-3 w-3" />
            </span>
            Contact Us
          </span>
          <h1 className="mt-6 max-w-3xl text-[2.5rem] leading-[1.03] tracking-[-0.035em] text-[color:var(--ink)] sm:text-6xl">
            Let&rsquo;s start a conversation
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--muted)] sm:text-lg">
            Reach out for medical mission inquiries, volunteering, donations, or
            partnership opportunities.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Inquiry cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {inquiryCards.map((c) => (
            <div
              key={c.title}
              className={`relative overflow-hidden rounded-[1.75rem] ${c.tint} p-8 text-center sm:p-10`}
            >
              <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-[26rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
              <div className="relative">
                <h2 className={`text-2xl tracking-[-0.02em] ${c.textOn}`}>
                  {c.title}
                </h2>
                <p className={`mx-auto mt-3 max-w-sm text-[0.92rem] leading-relaxed ${c.sub}`}>
                  {c.desc}
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Contact Us <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why reach out + form */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[color:var(--ink-soft)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-white">
                <HeartHandshake className="h-3 w-3" />
              </span>
              Contact Us
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--ink)] sm:text-4xl">
              Why reach out to us?
            </h2>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-[color:var(--muted)]">
              We are dedicated to offering personalized guidance and support for
              any questions you may have. Whether you are a donor, volunteer or
              partner, our team is here to assist you every step of the way.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/12 text-[color:var(--brand-primary-700)]">
                    <r.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg tracking-[-0.02em] text-[color:var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-[color:var(--muted)]">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-9 space-y-4 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-[color:var(--brand-primary-700)]" />
                <p className="text-[0.9rem] leading-relaxed text-[color:var(--ink-soft)]">
                  {CONTACT.addressLines.join(", ")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-[color:var(--brand-primary-700)]" />
                <div className="text-[0.9rem] text-[color:var(--ink-soft)]">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-[color:var(--brand-primary-700)]"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-none text-[color:var(--brand-primary-700)]" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[0.9rem] text-[color:var(--ink-soft)] hover:text-[color:var(--brand-primary-700)]"
                >
                  {CONTACT.email}
                </a>
              </div>
              <a
                href={CONTACT.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary-700)] hover:underline"
              >
                <ExternalLink className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>

            {/* Scripture */}
            <div className="mt-6 rounded-[1.5rem] border border-[color:var(--line)] p-6">
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                {CONTACT.scripture.ref}
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[color:var(--muted)]">
                &ldquo;{CONTACT.scripture.text}&rdquo;
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-9">
              <h2 className="text-2xl tracking-[-0.02em] text-[color:var(--ink)]">
                Let&rsquo;s Chat
              </h2>
              <p className="mt-1.5 text-[0.92rem] text-[color:var(--muted)]">
                Want to learn more about us, we are ready to help.
              </p>

              {status.state !== "idle" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={[
                    "mt-5 rounded-2xl border px-4 py-3 text-sm",
                    status.state === "success"
                      ? "border-[color:var(--brand-accent)]/40 bg-[color:var(--brand-accent)]/10 text-[#4f6a1a]"
                      : status.state === "sending"
                      ? "border-[color:var(--brand-primary)]/30 bg-[color:var(--brand-primary)]/8 text-[color:var(--brand-primary-700)]"
                      : "border-rose-200 bg-rose-50 text-rose-700",
                  ].join(" ")}
                >
                  {status.msg}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Your Full Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    error={errors.name}
                  />
                  <Field
                    label="Your Email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    error={errors.email}
                    type="email"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+256 ..."
                    error={errors.phone}
                  />
                  <Field
                    label="Your Subject"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Your subject"
                    error={errors.subject}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[color:var(--ink-soft)]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    placeholder="Write your message…"
                    className={[
                      "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)]",
                      errors.message
                        ? "border-rose-300 focus:ring-4 focus:ring-rose-100"
                        : "border-[color:var(--line)] focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12",
                    ].join(" ")}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-rose-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-[color:var(--line)]">
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

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[color:var(--ink-soft)]">
        {label}
      </label>
      <input
        {...props}
        className={[
          "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)]",
          error
            ? "border-rose-300 focus:ring-4 focus:ring-rose-100"
            : "border-[color:var(--line)] focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12",
        ].join(" ")}
        aria-invalid={Boolean(error)}
      />
      {error && (
        <p className="mt-1 text-xs font-medium text-rose-600">{error}</p>
      )}
    </div>
  );
}

export default page;
