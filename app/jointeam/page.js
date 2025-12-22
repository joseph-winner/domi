"use client";

import React, { useMemo, useState } from "react";
import {
  HeartHandshake,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
  FileText,
  PhoneCall,
  Mail,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

function Field({ label, required, hint, children }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-3">
        <label className="text-sm font-semibold text-slate-50">
          {label} {required ? <span className="text-rose-400">*</span> : null}
        </label>
        {hint ? (
          <span className="text-xs text-slate-300 text-right">{hint}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "shadow-sm outline-none transition",
        "placeholder:text-slate-600",
        "focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100",
        "disabled:cursor-not-allowed disabled:bg-slate-100",
        props.className || "",
      ].join(" ")}
    />
  );
}

function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className={[
        "w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "shadow-sm outline-none transition",
        "focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100",
        "disabled:cursor-not-allowed disabled:bg-slate-100",
        props.className || "",
      ].join(" ")}
    >
      {children}
    </select>
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full min-h-[120px] resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "shadow-sm outline-none transition",
        "placeholder:text-slate-600",
        "focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100",
        "disabled:cursor-not-allowed disabled:bg-slate-100",
        props.className || "",
      ].join(" ")}
    />
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
      <Icon className="h-4 w-4" />
      {children}
    </span>
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
    () => [
      "1 Week",
      "2 Weeks",
      "3 Weeks",
      "4 Weeks",
      "6 Weeks",
      "8 Weeks",
      "12+ Weeks",
    ],
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
    // Personal
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    city: "",
    // Program
    preferredProgram: "",
    preferredDuration: "",
    startDate: "",
    endDate: "",
    addOnTour: "",
    tourBrief: "",
    travelingWithFriend: "",
    friendDetails: "",
    // Background
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

    // Simulate submit (replace with your API route / email service)
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

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-180px] h-[520px] w-[520px] rounded-full bg-teal-500/15 blur-3xl" />
      </div>

      {/* Header / Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: content */}
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill icon={Stethoscope}>Medical Missions</Pill>
                  <Pill icon={ShieldCheck}>Faith-Based Care</Pill>
                  <Pill icon={Sparkles}>Spirited to Care</Pill>
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Volunteer with Doctors On Mission International
                </h1>
                <p className="mt-3 max-w-xl text-white/75 leading-relaxed">
                  Doctors On Mission International is a volunteer-based
                  Christian medical missions organization serving communities in
                  resource-limited settings across Uganda and the region. Share
                  your skills, preferred dates, and a bit about your background,
                  and our team will match you to upcoming community outreaches
                  and guide you through next steps.
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-white">
                      <CalendarDays className="h-5 w-5 text-emerald-300" />
                      <span className="font-semibold">Flexible Dates</span>
                    </div>
                    <p className="mt-2 text-sm text-white/65">
                      Share dates that work for you so we can connect you to
                      suitable medical and surgical missions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="h-5 w-5 text-cyan-300" />
                      <span className="font-semibold">Solo or Team</span>
                    </div>
                    <p className="mt-2 text-sm text-white/65">
                      Serving alone, with a friend, or as a church or university
                      team — we’ll help you plan together.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="h-5 w-5 text-teal-300" />
                      <span className="font-semibold">Local Support</span>
                    </div>
                    <p className="mt-2 text-sm text-white/65">
                      On-ground coordination with local Christian medical teams
                      and community partners.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-emerald-300" />
                    info@doctorsonmissionint.org
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-cyan-300" />
                    +256 782 524 317 / +256 784 808 738
                  </span>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 via-cyan-500/10 to-teal-500/25" />
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
                  alt="Volunteers in a medical outreach"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <BadgeCheck className="h-5 w-5 text-emerald-300" />
                      Quick Note
                    </div>
                    <p className="mt-2 text-sm text-white/75">
                      If you’re medical/nursing, include your license details.
                      If you’re non-medical, describe your skills and how you
                      can support the mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb-ish mini steps */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "1. Personal Details",
                desc: "Who you are & how we reach you",
              },
              {
                title: "2. Program Preferences",
                desc: "Dates, duration, and add-ons",
              },
              {
                title: "3. Background & Message",
                desc: "Motivation, safety, emergency contact",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80"
              >
                <div className="font-semibold text-white">{s.title}</div>
                <div className="mt-1 text-sm text-white/65">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Volunteer Application
                    </h2>
                    <p className="mt-1 text-sm text-white/65">
                      Fields marked <span className="text-rose-400">*</span>{" "}
                      help us plan faster.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs text-white/70">
                    <FileText className="h-4 w-4 text-emerald-300" />
                    <span>Approx. 3–5 minutes</span>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-50">
                      <div className="font-semibold">Application received!</div>
                      <div className="mt-1 text-sm text-emerald-100/80">
                        We’ll get back to you using the contact details
                        provided.
                      </div>
                    </div>
                  ) : null}

                  <div className="grid gap-6">
                    {/* Section: Personal */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-white">
                        <HeartHandshake className="h-5 w-5 text-emerald-300" />
                        <h3 className="text-base font-bold">
                          Personal Details
                        </h3>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" required>
                          <Input
                            value={form.fullName}
                            onChange={(e) =>
                              setField("fullName", e.target.value)
                            }
                            placeholder="e.g., Jane Doe"
                            required
                          />
                        </Field>

                        <Field label="Email Address" required>
                          <Input
                            type="email"
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            placeholder="e.g., jane@example.com"
                            required
                          />
                        </Field>

                        <Field
                          label="Phone / WhatsApp"
                          required
                          hint="Include country code"
                        >
                          <Input
                            value={form.phone}
                            onChange={(e) => setField("phone", e.target.value)}
                            placeholder="e.g., +256 7XX XXX XXX"
                            required
                          />
                        </Field>

                        <Field label="Nationality" required>
                          <Input
                            value={form.nationality}
                            onChange={(e) =>
                              setField("nationality", e.target.value)
                            }
                            placeholder="e.g., Ugandan, Kenyan, American"
                            required
                          />
                        </Field>

                        <div className="sm:col-span-2">
                          <Field label="Current City / Country" required>
                            <Input
                              value={form.city}
                              onChange={(e) => setField("city", e.target.value)}
                              placeholder="e.g., Mbarara, Uganda"
                              required
                            />
                          </Field>
                        </div>
                      </div>
                    </div>

                    {/* Section: Program Preferences */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-white">
                        <CalendarDays className="h-5 w-5 text-cyan-300" />
                        <h3 className="text-base font-bold">
                          Program Preferences
                        </h3>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field label="Preferred Type of Program" required>
                          <div className="relative">
                            <Select
                              value={form.preferredProgram}
                              onChange={(e) =>
                                setField("preferredProgram", e.target.value)
                              }
                              required
                            >
                              <option value="">Select</option>
                              {programTypes.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </Select>
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                              ▾
                            </span>
                          </div>
                        </Field>

                        <Field
                          label="Preferred Program Duration (Weeks)"
                          required
                        >
                          <div className="relative">
                            <Select
                              value={form.preferredDuration}
                              onChange={(e) =>
                                setField("preferredDuration", e.target.value)
                              }
                              required
                            >
                              <option value="">Select</option>
                              {durations.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </Select>
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                              ▾
                            </span>
                          </div>
                        </Field>

                        <Field
                          label="Program Start Date"
                          required
                          hint={startHint || "Pick a date"}
                        >
                          <Input
                            type="date"
                            value={form.startDate}
                            onChange={(e) =>
                              setField("startDate", e.target.value)
                            }
                            required
                          />
                        </Field>

                        <Field
                          label="Program End Date"
                          required
                          hint={endHint || "Pick a date"}
                        >
                          <Input
                            type="date"
                            value={form.endDate}
                            onChange={(e) =>
                              setField("endDate", e.target.value)
                            }
                            required
                          />
                        </Field>

                        <div className="sm:col-span-2">
                          <Field
                            label="Would you like to book an add-on Tour/Safari?"
                            required
                          >
                            <div className="relative">
                              <Select
                                value={form.addOnTour}
                                onChange={(e) =>
                                  setField("addOnTour", e.target.value)
                                }
                                required
                              >
                                <option value="">Select</option>
                                {tours.map((t) => (
                                  <option key={t} value={t}>
                                    {t}
                                  </option>
                                ))}
                              </Select>
                              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                ▾
                              </span>
                            </div>
                          </Field>
                        </div>

                        {showTourBrief ? (
                          <div className="sm:col-span-2">
                            <Field
                              label="If yes, tell us the places you'd like to visit (tour/safari)"
                              hint="Optional details help us plan"
                            >
                              <Textarea
                                value={form.tourBrief}
                                onChange={(e) =>
                                  setField("tourBrief", e.target.value)
                                }
                                placeholder="e.g., Queen Elizabeth National Park, Lake Bunyonyi, Murchison Falls..."
                              />
                            </Field>
                          </div>
                        ) : null}

                        <Field
                          label="Are you traveling with a friend/relative?"
                          required
                        >
                          <div className="relative">
                            <Select
                              value={form.travelingWithFriend}
                              onChange={(e) =>
                                setField("travelingWithFriend", e.target.value)
                              }
                              required
                            >
                              <option value="">Select</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </Select>
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                              ▾
                            </span>
                          </div>
                        </Field>

                        <div className="sm:col-span-2">
                          <Field
                            label="If yes, provide their name(s), age(s), and total number"
                            hint="Only if applicable"
                          >
                            <Textarea
                              value={form.friendDetails}
                              onChange={(e) =>
                                setField("friendDetails", e.target.value)
                              }
                              placeholder="e.g., John Doe (32), Sarah Doe (29) — total 2 people"
                              disabled={!showFriendDetails}
                            />
                          </Field>
                        </div>
                      </div>
                    </div>

                    {/* Section: Background */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-white">
                        <ShieldCheck className="h-5 w-5 text-teal-300" />
                        <h3 className="text-base font-bold">
                          Background & Safety
                        </h3>
                      </div>

                      <div className="mt-5 grid gap-5">
                        <Field
                          label="What motivates you to serve with Doctors On Mission International in Uganda and the region?"
                          required
                        >
                          <Textarea
                            value={form.motivation}
                            onChange={(e) =>
                              setField("motivation", e.target.value)
                            }
                            placeholder="Share what inspires you—impact, learning, faith, community service, medical outreach, etc."
                            required
                          />
                        </Field>

                        <Field
                          label="Medical/Nursing License (if any)"
                          hint="Include license number + country"
                        >
                          <Textarea
                            value={form.license}
                            onChange={(e) =>
                              setField("license", e.target.value)
                            }
                            placeholder="e.g., Registered Nurse — License #XXXX — Country"
                          />
                        </Field>

                        <Field
                          label="Employment Background"
                          hint="Role, organization, years of experience"
                        >
                          <Textarea
                            value={form.employmentBackground}
                            onChange={(e) =>
                              setField("employmentBackground", e.target.value)
                            }
                            placeholder="e.g., Clinical Officer (3 years), Community Health Volunteer (2 years), Photographer/Media..."
                          />
                        </Field>

                        <Field
                          label="Current Medical Condition (if any)"
                          hint="Optional"
                        >
                          <Textarea
                            value={form.currentMedicalCondition}
                            onChange={(e) =>
                              setField(
                                "currentMedicalCondition",
                                e.target.value
                              )
                            }
                            placeholder="Any allergies, mobility considerations, dietary restrictions, etc."
                          />
                        </Field>

                        <Field
                          label="Emergency Contacts"
                          required
                          hint="Name, relationship, phone, email"
                        >
                          <Textarea
                            value={form.emergencyContacts}
                            onChange={(e) =>
                              setField("emergencyContacts", e.target.value)
                            }
                            placeholder="e.g., Mary Doe (Sister) — +256... — mary@email.com"
                            required
                          />
                        </Field>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="How did you learn about us?" required>
                            <div className="relative">
                              <Select
                                value={form.heardAboutUs}
                                onChange={(e) =>
                                  setField("heardAboutUs", e.target.value)
                                }
                                required
                              >
                                <option value="">Select</option>
                                {heardAbout.map((h) => (
                                  <option key={h} value={h}>
                                    {h}
                                  </option>
                                ))}
                              </Select>
                              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                ▾
                              </span>
                            </div>
                          </Field>

                          <Field
                            label="Any additional comments?"
                            hint="Optional"
                          >
                            <Input
                              value={form.message}
                              onChange={(e) =>
                                setField("message", e.target.value)
                              }
                              placeholder="Short note (optional)"
                            />
                          </Field>
                        </div>

                        <Field label="Comment or Message" hint="Optional">
                          <Textarea
                            value={form.message}
                            onChange={(e) =>
                              setField("message", e.target.value)
                            }
                            placeholder="Anything else you want us to know—skills, expectations, accessibility needs, or questions."
                          />
                        </Field>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-sm text-white/60">
                        By submitting, you confirm the information is accurate
                        to the best of your knowledge.
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className={[
                          "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold",
                          "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg",
                          "transition hover:opacity-95 active:scale-[0.99]",
                          "disabled:opacity-60 disabled:cursor-not-allowed",
                        ].join(" ")}
                      >
                        {submitting ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-slate-900/30 border-t-slate-900 animate-spin" />
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
              <div className="sticky top-6 space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-base font-bold text-white">
                      What to Expect
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-white/70">
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                        A confirmation email and, where needed, a quick call to
                        align your dates, role, and mission location.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        Guidance on packing, local transport, and accommodation
                        options in the communities we serve.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                        A draft program schedule and on-ground coordinator
                        contact shared before you travel.
                      </li>
                    </ul>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <MapPin className="h-5 w-5 text-emerald-300" />
                        Community Medical Missions
                      </div>
                      <p className="mt-2 text-sm text-white/65">
                        We coordinate mobile medical and surgical camps in rural
                        and peri-urban communities. Share your preferred dates
                        so we can match you with the right outreach.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-base font-bold text-white">
                      Need Help?
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      If you’re unsure which mission best fits your skills and
                      availability, send us a message and we’ll recommend the
                      most suitable option.
                    </p>

                    <div className="mt-4 space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-white/80">
                        <Mail className="h-4 w-4 text-cyan-300" />
                        info@doctorsonmissionint.org
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <PhoneCall className="h-4 w-4 text-emerald-300" />
                        +256 782 524 317 / +256 784 808 738
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-white/55">
                      <span className="font-semibold text-white/70">
                        Privacy:
                      </span>{" "}
                      Your information is used only for volunteer coordination
                      and safety planning.
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-teal-500/15 p-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Users className="h-5 w-5 text-white" />
                    Coming as a group?
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Mention the total number and we’ll advise on logistics,
                    scheduling, and any group documentation needed.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
