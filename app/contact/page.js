"use client";

import React, { useMemo, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  BadgeCheck,
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

  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | error | success | sending

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

    // Replace with your backend / API route / Formspree, etc.
    await new Promise((r) => setTimeout(r, 700));

    setStatus({
      state: "success",
      msg: "Message sent! We’ll get back to you as soon as possible.",
    });

    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <main className="relative min-h-screen bg-slate-50">
      {/* Decorative background (medical colors) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-200/70 via-emerald-200/60 to-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-28 right-[-6rem] h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/60 to-cyan-200/60 blur-3xl" />
        <div className="absolute top-40 left-[-6rem] h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/60 to-cyan-200/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(2,132,199,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Contact • Support • Partnerships
          </span>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact Us
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Reach out for medical mission inquiries, volunteering, donations, or
            partnership opportunities.
          </p>
        </div>

        {/* Contact cards (Address / Phone / Email) */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-600 text-white shadow-sm">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {CONTACT.addressLines[0]}
                    <br />
                    {CONTACT.addressLines[1]}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    {CONTACT.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="block text-slate-700 hover:text-emerald-700"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-600 text-white shadow-sm">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email Address
                  </h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 block text-sm text-slate-700 hover:text-cyan-700"
                  >
                    {CONTACT.email}
                  </a>
                  <p className="mt-1 text-xs text-slate-500">
                    {CONTACT.website}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form + scripture */}
        <section className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Drop us a line
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    We’ll respond as soon as possible (typically within 24–48
                    hours).
                  </p>
                </div>
                <span className="hidden items-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-xs font-medium text-white sm:inline-flex">
                  <Clock className="h-4 w-4" />
                  24–48 hrs
                </span>
              </div>

              {status.state !== "idle" && (
                <div
                  className={[
                    "mt-5 rounded-2xl border px-4 py-3 text-sm",
                    status.state === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : status.state === "sending"
                      ? "border-sky-200 bg-sky-50 text-sky-800"
                      : "border-rose-200 bg-rose-50 text-rose-800",
                  ].join(" ")}
                >
                  {status.msg}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
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
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="What is this about?"
                    error={errors.subject}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-800">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    placeholder="Write your message…"
                    className={[
                      "w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition",
                      errors.message
                        ? "border-rose-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                        : "border-slate-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100",
                    ].join(" ")}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-rose-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    Tip: Include your location and preferred contact method for
                    faster follow-up.
                  </p>

                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send className="h-4 w-4" />
                    Submit a Message
                  </button>
                </div>
              </form>
            </div>

            {/* Scripture block */}
            <div className="mt-6 rounded-3xl border border-white/60 bg-white/75 p-6 shadow-sm backdrop-blur sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-slate-900">
                {CONTACT.scripture.ref}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                “{CONTACT.scripture.text}”
              </p>
            </div>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 space-y-5">
              <div className="rounded-3xl border border-white/60 bg-white/75 p-6 shadow-sm backdrop-blur sm:p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  Find us
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Visit our office or open directions to our location in
                  Mbarara.
                </p>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">Address</p>
                      <p className="text-slate-600">
                        {CONTACT.addressLines.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-slate-700 hover:text-cyan-700"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={CONTACT.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm backdrop-blur">
            <iframe
              title="Doctors on Mission location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                CONTACT.mapQuery
              )}&output=embed`}
              className="h-[320px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} {CONTACT.org}. All rights reserved.
        </div>
      </div>
    </main>
  );
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        {...props}
        className={[
          "w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition",
          error
            ? "border-rose-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
            : "border-slate-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100",
        ].join(" ")}
        aria-invalid={Boolean(error)}
      />
      {error && (
        <p className="mt-1 text-xs font-medium text-rose-700">{error}</p>
      )}
    </div>
  );
}

export default page;
