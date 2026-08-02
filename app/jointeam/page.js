"use client";

import React, { useMemo, useState } from "react";
import Banner from "@/layout/Banner";
import {
  HeartHandshake,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Users,
  FileText,
  PhoneCall,
  Mail,
  BadgeCheck,
  Check,
} from "lucide-react";

function Field({ label, required, hint, children }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-3">
        <label className="text-sm font-semibold text-[color:var(--ink)]">
          {label}{" "}
          {required ? (
            <span className="text-rose-500">*</span>
          ) : null}
        </label>
        {hint ? (
          <span className="text-right text-xs text-[color:var(--muted)]">
            {hint}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

const fieldClass = [
  "w-full rounded-[10px] border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 text-sm text-[color:var(--ink)]",
  "outline-none transition placeholder:text-[color:var(--muted)]",
  "focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12",
  "disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

function Input(props) {
  return <input {...props} className={`${fieldClass} ${props.className || ""}`} />;
}

function Select({ children, ...props }) {
  return (
    <select {...props} className={`${fieldClass} appearance-none ${props.className || ""}`}>
      {children}
    </select>
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`${fieldClass} min-h-[120px] resize-y ${props.className || ""}`}
    />
  );
}

export default function page() {
  const programTypes = useMemo(
    () => [
      "Medical Camp (General)",
      "Dental Outreach",
      "Surgical Mission Support",
      "Public Health / Community Education",
      "Clinical Shadowing",
      "Non-Medical Support (Admin/Media/Logistics)",
    ],
    []
  );

  const durations = useMemo(
    () => ["1 Week", "2 Weeks", "3 Weeks", "4 Weeks", "6 Weeks", "8 Weeks", "12+ Weeks"],
    []
  );

  const tours = useMemo(
    () => ["No", "Yes (Day Trip)", "Yes (Weekend Safari)", "Yes (Custom Tour)"],
    []
  );

  const heardAbout = useMemo(
    () => [
      "Website",
      "Instagram",
      "Facebook",
      "X (Twitter)",
      "Friend/Referral",
      "Church/Community",
      "University/School",
      "Other",
    ],
    []
  );

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    city: "",
    preferredProgram: "",
    preferredDuration: "",
    startDate: "",
    endDate: "",
    addOnTour: "",
    tourBrief: "",
    travelingWithFriend: "",
    friendDetails: "",
    motivation: "",
    license: "",
    employmentBackground: "",
    currentMedicalCondition: "",
    emergencyContacts: "",
    heardAboutUs: "",
    message: "",
  });

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function formatDateHint(dateStr) {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return "";
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.log("Volunteer Application:", form);
    setSubmitting(false);
    setSubmitted(true);
  }

  const startHint = formatDateHint(form.startDate);
  const endHint = formatDateHint(form.endDate);
  const showTourBrief = form.addOnTour && form.addOnTour !== "No";
  const showFriendDetails = form.travelingWithFriend === "Yes";

  const perks = [
    {
      icon: CalendarDays,
      title: "Flexible Dates",
      desc: "Share dates that work for you so we can connect you to suitable medical and surgical missions.",
    },
    {
      icon: Users,
      title: "Solo or Team",
      desc: "Serving alone, with a friend, or as a church or university team, we'll help you plan together.",
    },
    {
      icon: MapPin,
      title: "Local Support",
      desc: "On-ground coordination with local Christian medical teams and community partners.",
    },
  ];

  const steps = [
    { title: "01 · Personal Details", desc: "Who you are & how we reach you" },
    { title: "02 · Program Preferences", desc: "Dates, duration, and add-ons" },
    { title: "03 · Background & Message", desc: "Motivation, safety, emergency contact" },
  ];

  return (
    <main className="bg-[color:var(--paper)]">
      <Banner
        eyebrow="Join Our Team"
        title="Volunteer with Doctors on Mission"
        subtitle="Share your skills, preferred dates and a bit about your background, and our team will match you to upcoming community outreaches."
      />

      {/* Intro split */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-[1rem] leading-relaxed text-[color:var(--muted)]">
              Doctors on Mission International is a volunteer-based Christian
              medical missions organization serving communities in
              resource-limited settings across Uganda and the region. Share your
              skills, preferred dates and a bit about your background, and our
              team will match you to upcoming community outreaches and guide you
              through next steps.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-[color:var(--ink)]">
                    {p.title}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[color:var(--muted)]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                info@doctorsonmissionint.org
              </span>
              <span className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                +256 782 524 317 / +256 784 808 738
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[16px] border border-[color:var(--line)]">
              <img
                src="/img/volunteers.jpg"
                alt="Volunteers in a medical outreach"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[12px] bg-[color:var(--paper)]/95 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]">
                  <BadgeCheck className="h-5 w-5 text-[color:var(--brand-primary-700)]" />
                  Quick note
                </div>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-[color:var(--muted)]">
                  If you&rsquo;re medical/nursing, include your license details.
                  If non-medical, describe your skills and how you can support the
                  mission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step indicator */}
        <div className="mt-10 grid gap-4 border-t border-[color:var(--line)] pt-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title}>
              <div className="text-sm font-semibold text-[color:var(--ink)]">
                {s.title}
              </div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-[color:var(--surface)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)]">
              <div className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] px-6 py-5">
                <div>
                  <h2 className="text-xl tracking-[-0.02em] text-[color:var(--ink)]">
                    Volunteer Application
                  </h2>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Fields marked <span className="text-rose-500">*</span> help us
                    plan faster.
                  </p>
                </div>
                <div className="hidden items-center gap-2 text-xs text-[color:var(--muted)] sm:flex">
                  <FileText className="h-4 w-4" />
                  <span>Approx. 3&ndash;5 minutes</span>
                </div>
              </div>

              <form onSubmit={onSubmit} className="p-6 sm:p-8">
                {submitted ? (
                  <div className="mb-6 rounded-[12px] border border-[color:var(--brand-accent)]/40 bg-[color:var(--brand-accent)]/10 p-4">
                    <div className="font-semibold text-[color:var(--ink)]">
                      Application received!
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--muted)]">
                      We&rsquo;ll get back to you using the contact details
                      provided.
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-6">
                  {/* Personal */}
                  <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[color:var(--ink)]">
                      <HeartHandshake className="h-5 w-5 text-[color:var(--brand-primary-700)]" />
                      <h3 className="text-base font-semibold">Personal Details</h3>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" required>
                        <Input value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} placeholder="e.g., Jane Doe" required />
                      </Field>
                      <Field label="Email Address" required>
                        <Input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="e.g., jane@example.com" required />
                      </Field>
                      <Field label="Phone / WhatsApp" required hint="Include country code">
                        <Input value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="e.g., +256 7XX XXX XXX" required />
                      </Field>
                      <Field label="Nationality" required>
                        <Input value={form.nationality} onChange={(e) => setField("nationality", e.target.value)} placeholder="e.g., Ugandan, Kenyan, American" required />
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="Current City / Country" required>
                          <Input value={form.city} onChange={(e) => setField("city", e.target.value)} placeholder="e.g., Mbarara, Uganda" required />
                        </Field>
                      </div>
                    </div>
                  </div>

                  {/* Program */}
                  <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[color:var(--ink)]">
                      <CalendarDays className="h-5 w-5 text-[color:var(--brand-primary-700)]" />
                      <h3 className="text-base font-semibold">Program Preferences</h3>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <Field label="Preferred Type of Program" required>
                        <Select value={form.preferredProgram} onChange={(e) => setField("preferredProgram", e.target.value)} required>
                          <option value="">Select</option>
                          {programTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
                        </Select>
                      </Field>
                      <Field label="Preferred Program Duration (Weeks)" required>
                        <Select value={form.preferredDuration} onChange={(e) => setField("preferredDuration", e.target.value)} required>
                          <option value="">Select</option>
                          {durations.map((d) => (<option key={d} value={d}>{d}</option>))}
                        </Select>
                      </Field>
                      <Field label="Program Start Date" required hint={startHint || "Pick a date"}>
                        <Input type="date" value={form.startDate} onChange={(e) => setField("startDate", e.target.value)} required />
                      </Field>
                      <Field label="Program End Date" required hint={endHint || "Pick a date"}>
                        <Input type="date" value={form.endDate} onChange={(e) => setField("endDate", e.target.value)} required />
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="Would you like to book an add-on Tour/Safari?" required>
                          <Select value={form.addOnTour} onChange={(e) => setField("addOnTour", e.target.value)} required>
                            <option value="">Select</option>
                            {tours.map((t) => (<option key={t} value={t}>{t}</option>))}
                          </Select>
                        </Field>
                      </div>
                      {showTourBrief ? (
                        <div className="sm:col-span-2">
                          <Field label="If yes, tell us the places you'd like to visit (tour/safari)" hint="Optional details help us plan">
                            <Textarea value={form.tourBrief} onChange={(e) => setField("tourBrief", e.target.value)} placeholder="e.g., Queen Elizabeth National Park, Lake Bunyonyi, Murchison Falls..." />
                          </Field>
                        </div>
                      ) : null}
                      <Field label="Are you traveling with a friend/relative?" required>
                        <Select value={form.travelingWithFriend} onChange={(e) => setField("travelingWithFriend", e.target.value)} required>
                          <option value="">Select</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                        </Select>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="If yes, provide their name(s), age(s), and total number" hint="Only if applicable">
                          <Textarea value={form.friendDetails} onChange={(e) => setField("friendDetails", e.target.value)} placeholder="e.g., John Doe (32), Sarah Doe (29) — total 2 people" disabled={!showFriendDetails} />
                        </Field>
                      </div>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[color:var(--ink)]">
                      <ShieldCheck className="h-5 w-5 text-[color:var(--brand-primary-700)]" />
                      <h3 className="text-base font-semibold">Background & Safety</h3>
                    </div>
                    <div className="mt-5 grid gap-5">
                      <Field label="What motivates you to serve with Doctors On Mission International in Uganda and the region?" required>
                        <Textarea value={form.motivation} onChange={(e) => setField("motivation", e.target.value)} placeholder="Share what inspires you—impact, learning, faith, community service, medical outreach, etc." required />
                      </Field>
                      <Field label="Medical/Nursing License (if any)" hint="Include license number + country">
                        <Textarea value={form.license} onChange={(e) => setField("license", e.target.value)} placeholder="e.g., Registered Nurse — License #XXXX — Country" />
                      </Field>
                      <Field label="Employment Background" hint="Role, organization, years of experience">
                        <Textarea value={form.employmentBackground} onChange={(e) => setField("employmentBackground", e.target.value)} placeholder="e.g., Clinical Officer (3 years), Community Health Volunteer (2 years), Photographer/Media..." />
                      </Field>
                      <Field label="Current Medical Condition (if any)" hint="Optional">
                        <Textarea value={form.currentMedicalCondition} onChange={(e) => setField("currentMedicalCondition", e.target.value)} placeholder="Any allergies, mobility considerations, dietary restrictions, etc." />
                      </Field>
                      <Field label="Emergency Contacts" required hint="Name, relationship, phone, email">
                        <Textarea value={form.emergencyContacts} onChange={(e) => setField("emergencyContacts", e.target.value)} placeholder="e.g., Mary Doe (Sister) — +256... — mary@email.com" required />
                      </Field>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="How did you learn about us?" required>
                          <Select value={form.heardAboutUs} onChange={(e) => setField("heardAboutUs", e.target.value)} required>
                            <option value="">Select</option>
                            {heardAbout.map((h) => (<option key={h} value={h}>{h}</option>))}
                          </Select>
                        </Field>
                        <Field label="Any additional comments?" hint="Optional">
                          <Input value={form.message} onChange={(e) => setField("message", e.target.value)} placeholder="Short note (optional)" />
                        </Field>
                      </div>
                      <Field label="Comment or Message" hint="Optional">
                        <Textarea value={form.message} onChange={(e) => setField("message", e.target.value)} placeholder="Anything else you want us to know—skills, expectations, accessibility needs, or questions." />
                      </Field>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="text-sm text-[color:var(--muted)]">
                      By submitting, you confirm the information is accurate to the
                      best of your knowledge.
                    </div>
                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg">
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <BadgeCheck className="h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
                <h3 className="text-base font-semibold text-[color:var(--ink)]">
                  What to Expect
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                  {[
                    "A confirmation email and, where needed, a quick call to align your dates, role, and mission location.",
                    "Guidance on packing, local transport, and accommodation options in the communities we serve.",
                    "A draft program schedule and on-ground coordinator contact shared before you travel.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary-700)]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[12px] border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]">
                    <MapPin className="h-5 w-5 text-[color:var(--brand-primary-700)]" />
                    Community Medical Missions
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    We coordinate mobile medical and surgical camps in rural and
                    peri-urban communities. Share your preferred dates so we can
                    match you with the right outreach.
                  </p>
                </div>
              </div>

              <div className="rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
                <h3 className="text-base font-semibold text-[color:var(--ink)]">
                  Need Help?
                </h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  If you&rsquo;re unsure which mission best fits your skills and
                  availability, send us a message and we&rsquo;ll recommend the
                  most suitable option.
                </p>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--ink-soft)]">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                    info@doctorsonmissionint.org
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-[color:var(--brand-primary-700)]" />
                    +256 782 524 317 / +256 784 808 738
                  </div>
                </div>
                <div className="mt-6 text-xs text-[color:var(--muted)]">
                  <span className="font-semibold text-[color:var(--ink-soft)]">
                    Privacy:
                  </span>{" "}
                  Your information is used only for volunteer coordination and
                  safety planning.
                </div>
              </div>

              <div className="rounded-[16px] bg-[color:var(--brand-primary)] p-6 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Users className="h-5 w-5" />
                  Coming as a group?
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Mention the total number and we&rsquo;ll advise on logistics,
                  scheduling, and any group documentation needed.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
