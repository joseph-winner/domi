// "use client";

import React from "react";
import { Mail, MapPin, ArrowRight, Twitter, Facebook, Linkedin } from "lucide-react";

function Footer({ logoSrc = "/logos/doctors-mission-logo.svg" }) {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Missions", href: "/missions" },
  ];

  const workWithUs = [
    { label: "Join Our Team", href: "/jointeam" },
    { label: "Contact Us", href: "/contact" },
    { label: "Support a Mission", href: "/support" },
  ];

  const socials = [
    { label: "X / Twitter", href: "https://twitter.com", Icon: Twitter },
    { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  ];

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Doctors On Mission International logo"
                className="h-11 w-11 object-contain"
              />
              <p className="text-lg font-medium tracking-tight text-[color:var(--ink)]">
                Doctors On Mission{" "}
                <span className="text-[color:var(--brand-primary-700)]">
                  International
                </span>
              </p>
            </div>

            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-[color:var(--muted)]">
              Partner with us to bring medical outreach, health education and
              hope to communities across Uganda and beyond. Compassionate care,
              sustainable impact.
            </p>

            {/* Newsletter */}
         {/* <form
  className="mt-7 flex max-w-md items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] p-1.5"
>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-1 items-center gap-2 pl-3">
                <Mail className="h-4 w-4 text-[color:var(--muted)]" />
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent py-2 text-sm text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[color:var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-primary-600)]"
              >
                Subscribe
              </button>
            </form> */}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/support"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-5 py-2.5 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--brand-primary)]"
              >
                Become a Partner
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[color:var(--ink)]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[color:var(--muted)] transition hover:text-[color:var(--brand-primary-700)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work With Us */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[color:var(--ink)]">
              Work With Us
            </h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {workWithUs.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[color:var(--muted)] transition hover:text-[color:var(--brand-primary-700)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[color:var(--ink)]">
              Reach Out
            </h3>
            <div className="mt-5 space-y-4 text-[0.9rem] text-[color:var(--muted)]">
              <a
                href="mailto:info@doctorsonmissionint.org"
                className="flex items-start gap-2.5 transition hover:text-[color:var(--brand-primary-700)]"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-primary-700)]" />
                <span className="break-all">info@doctorsonmissionint.org</span>
              </a>
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-primary-700)]" />
                <span>
                  P.O.box 421315, Mbarara&ndash;Isingiro road, Mbarara City,
                  South-western region, Uganda
                </span>
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink-soft)] transition hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary-700)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-[color:var(--line)] py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.82rem] text-[color:var(--muted)]">
            © {new Date().getFullYear()} Doctors On Mission International
            {"  |  "}Powered by{" "}
            <a
              href="https://joshtecs.com"
              className="font-medium text-[color:var(--brand-primary-700)] hover:underline"
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
                className="text-[color:var(--muted)] transition hover:text-[color:var(--brand-primary-700)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
