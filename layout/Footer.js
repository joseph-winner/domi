import React from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

function Footer({
  bgImage = "/img/footer-bg.jpg", // change to your actual image
  logoSrc = "/logos/doctors-mission-logo.svg", // change to your actual logo
}) {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Missions", href: "/missions" },
  ];

  const workWithUs = [
    { label: "Join Our Team", href: "/join" },
    { label: "Contact Us", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ];

  const socials = [
    { label: "X / Twitter", href: "https://twitter.com", Icon: Twitter },
    { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      {/* Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.18),_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Top */}
          <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                  <img
                    src={logoSrc}
                    alt="Doctors On Mission International logo"
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight">
                    Doctors On Mission{" "}
                    <span className="text-amber-300">International</span>
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Compassionate care. Sustainable impact.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm text-white/80">
                  Partner with us to bring medical outreach, health education,
                  and hope to communities across Uganda and beyond.
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Donate Now <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition group-hover:bg-amber-300" />
                      <span className="transition group-hover:translate-x-0.5">
                        {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold">Work With Us</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {workWithUs.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition group-hover:bg-amber-300" />
                      <span className="transition group-hover:translate-x-0.5">
                        {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reach out */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-semibold">Reach Out</h3>

              <div className="mt-4 space-y-4 text-sm text-white/75">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="font-semibold text-white/90">Mail:</p>
                  <a
                    href="mailto:info@doctorsonmissionint.org"
                    className="mt-2 flex items-center gap-2 hover:text-white break-all"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-amber-300" />
                    <span className="break-all">
                      info@doctorsonmissionint.org
                    </span>
                  </a>

                  <p className="mt-4 font-semibold text-white/90">Address:</p>
                  <p className="mt-2 flex gap-2 leading-relaxed">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    <span>
                      P.O.box 421315, Mbarara–Isingiro road, Mbarara City,
                      South-western region, Uganda
                    </span>
                  </p>
                </div>

                {/* Socials (mobile-friendly here too) */}
                <div className="flex items-center gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4 text-white/80 transition group-hover:text-amber-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Doctors On Mission International{" "}
              <span className="text-white/40">|</span> Powered by{" "}
              <a
                href="https://joshtecs.com"
                className="font-medium text-amber-300 hover:text-amber-200"
              >
                joshtecs solutions
              </a>
            </p>

            <div className="flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-amber-300/90" />
                  <span className="hidden md:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
