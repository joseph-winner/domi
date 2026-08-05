"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import DonateModal from "@/components/DonateModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [missionsOpen, setMissionsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Every page now opens with a full-bleed image header, so the nav floats
  // over an image at the top and sits on a solid bar once scrolled.
  const overlay = !scrolled;

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Programs", href: "/programs" },
        { label: "Gallery", href: "/gallery" },
      ],
      open: aboutOpen,
      setOpen: setAboutOpen,
      match: ["/about", "/programs", "/gallery"],
    },
    { label: "Volunteer", href: "/voluteer" },
    { label: "Support", href: "/support" },
    {
      label: "Missions",
      dropdown: [
        { label: "All Missions", href: "/missions" },
        { label: "Bethel Cleft Program", href: "/missions/bethel-cleft-program" },
        { label: "Health Reach Program", href: "/missions/health-reach-program" },
      ],
      open: missionsOpen,
      setOpen: setMissionsOpen,
      match: ["/missions"],
    },
    {
      label: "News",
      dropdown: [
        { label: "Reports", href: "/report" },
        { label: "Press Release", href: "/press" },
        { label: "Blog", href: "/blog" },
      ],
      open: newsOpen,
      setOpen: setNewsOpen,
      match: ["/report", "/press", "/blog"],
    },
    { label: "Contact", href: "/contact" },
  ];

  // Pill link styles (inside the floating cream capsule)
  const pillItem =
    "rounded-full px-4 py-2 text-[0.82rem] font-medium transition-colors";
  const pillActive = "bg-[color:var(--brand-primary)] text-white";
  const pillIdle =
    "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        overlay
          ? "bg-transparent"
          : "border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur-xl"
      }`}
    >
      {/* Top contact strip — commented out per request (kept for future use)
      <div
        className={`hidden border-b text-[0.72rem] transition-colors md:block ${
          overlay
            ? "border-white/15 text-white/65"
            : "border-[color:var(--line)] text-[color:var(--muted)]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <a href="tel:+256782524317">+256 782 524 317</a>
            <span className="opacity-40">/</span>
            <a href="tel:+256784808738">+256 784 808 738</a>
          </div>
          <div className="flex items-center gap-5">
            <span className="uppercase tracking-[0.22em]">Doctors on Mission International</span>
            <div className="flex items-center gap-3.5">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Main bar */}
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/doctors-mission-logo.svg"
            alt="Doctors on Mission International"
            width={42}
            height={42}
            className="rounded"
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span
              className={`text-[0.6rem] uppercase tracking-[0.24em] ${
                overlay ? "text-white/70" : "text-[color:var(--muted)]"
              }`}
            >
              Doctors on Mission
            </span>
            <span
              className={`mt-1 text-[0.95rem] font-semibold tracking-tight ${
                overlay ? "text-white" : "text-[color:var(--ink)]"
              }`}
            >
              International
            </span>
          </div>
        </Link>

        {/* Centered floating pill nav */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-[color:var(--line)]/70 bg-[color:var(--paper)]/85 p-1.5 shadow-[0_12px_40px_-24px_rgba(28,26,22,0.55)] backdrop-blur-xl">
            {navLinks.map((item) =>
              item.dropdown ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.setOpen(true)}
                  onMouseLeave={() => item.setOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 ${pillItem} ${
                      item.match.some((m) => isActive(m)) ? pillActive : pillIdle
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                  {item.open && (
                    <ul className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-1.5 shadow-xl shadow-black/5">
                        {item.dropdown.map((d) => (
                          <li key={d.href}>
                            <Link
                              href={d.href}
                              className="block rounded-[10px] px-3.5 py-2.5 text-[0.82rem] text-[color:var(--ink-soft)] transition hover:bg-[color:var(--section-teal)] hover:text-[color:var(--ink)]"
                            >
                              {d.label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${pillItem} ${
                      isActive(item.href) ? pillActive : pillIdle
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+256782524317"
            aria-label="Call us"
            className={`hidden h-11 w-11 items-center justify-center rounded-full border transition md:inline-flex ${
              overlay
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--brand-primary)]"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setDonateOpen(true)}
            className="hidden items-center gap-2 rounded-full bg-[#eabf4e] px-6 py-2.5 text-[0.82rem] font-semibold text-[#053759] transition hover:-translate-y-0.5 hover:brightness-105 md:inline-flex"
          >
            Donate
            <span aria-hidden>→</span>
          </button>
          <button
            className={`lg:hidden ${overlay ? "text-white" : "text-[color:var(--ink)]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (unchanged behaviour) */}
      {menuOpen && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--paper)] px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1 text-[0.9rem]">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between py-2.5 text-[color:var(--ink-soft)]"
                    onClick={() => item.setOpen(!item.open)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        item.open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {item.open && (
                    <div className="mb-1 ml-3 flex flex-col gap-1 border-l border-[color:var(--line)] pl-4">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          onClick={() => setMenuOpen(false)}
                          className="py-2 text-[color:var(--muted)] hover:text-[color:var(--ink)]"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 ${
                    isActive(item.href)
                      ? "font-semibold text-[color:var(--brand-primary-700)]"
                      : "text-[color:var(--ink-soft)]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              type="button"
              onClick={() => {
                setDonateOpen(true);
                setMenuOpen(false);
              }}
              className="mt-3 w-full rounded-full bg-[#eabf4e] px-5 py-3 text-center text-sm font-semibold text-[#053759]"
            >
              Donate
            </button>
          </div>
        </div>
      )}

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  );
}

export default Navbar;
