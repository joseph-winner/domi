import React from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

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
    { label: "Facebook", href: "https://www.facebook.com/people/Doctors-on-Mission-International/61573255932279/#", Icon: FaFacebookF },
    { label: "X", href: "https://x.com/DoctorsMission/status/2074434034881400981", Icon: FaXTwitter },
    { label: "YouTube", href: "https://www.youtube.com/@doctorsonmissioninternational", Icon: FaYoutube },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/doctors-on-mission-international/?originalSubdomain=ug", Icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com/doctors_on_mission_int/", Icon: FaInstagram },
  ];

  return (
    <footer className="bg-[color:var(--brand-primary)] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Doctors On Mission International logo"
                className="h-11 w-11 object-contain"
              />
              <p className="text-lg font-semibold tracking-tight text-white">
                Doctors On Mission{" "}
                <span className="text-[color:var(--brand-secondary)]">
                  International
                </span>
              </p>
            </div>

            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Partner with us to bring medical outreach, health education and
              hope to communities across Uganda and beyond. Compassionate care,
              sustainable impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/support"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-secondary)] px-5 py-2.5 text-sm font-semibold text-[#3a2a06] transition hover:-translate-y-0.5"
              >
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Become a Partner
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 transition hover:text-[color:var(--brand-secondary)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work With Us */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Work With Us</h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {workWithUs.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 transition hover:text-[color:var(--brand-secondary)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Reach Out</h3>
            <div className="mt-5 space-y-4 text-[0.9rem] text-white/70">
              <a
                href="mailto:info@doctorsonmissionint.org"
                className="flex items-start gap-2.5 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-secondary)]" />
                <span className="break-all">info@doctorsonmissionint.org</span>
              </a>
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-secondary)]" />
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
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-[color:var(--brand-secondary)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.82rem] text-white/60">
            © {new Date().getFullYear()} Doctors On Mission International
            {"  |  "}Powered by{" "}
            <a
              href="https://grayhost.dev"
              className="font-medium text-[color:var(--brand-secondary)] hover:underline"
            >
             Grayhost Innovations
            </a>
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition hover:text-[color:var(--brand-secondary)]"
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
