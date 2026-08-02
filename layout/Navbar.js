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
  const [donateOpen, setDonateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

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
    { label: "Support a Mission", href: "/support" },
    { label: "Missions", href: "/missions" },
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

  const linkBase = overlay
    ? "text-white/80 hover:text-white"
    : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]";
  const linkActive = overlay ? "text-white" : "text-[color:var(--ink)]";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-40 transition-colors duration-300 ${
        overlay
          ? "bg-transparent"
          : "border-b border-[color:var(--line)] bg-[color:var(--paper)]/85 backdrop-blur-xl"
      }`}
    >
      {/* Top contact strip */}
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
            <a href="tel:+256782524317" className="transition hover:text-[color:var(--brand-accent)]">
              +256 782 524 317
            </a>
            <span className="opacity-40">/</span>
            <a href="tel:+256784808738" className="transition hover:text-[color:var(--brand-accent)]">
              +256 784 808 738
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="uppercase tracking-[0.22em]">
              Doctors on Mission International
            </span>
            <div className="flex items-center gap-3.5">
              <a href="#" aria-label="Twitter" className="transition hover:text-[color:var(--brand-accent)]">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="transition hover:text-[color:var(--brand-accent)]">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-[color:var(--brand-accent)]">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
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
                overlay ? "text-white/65" : "text-[color:var(--muted)]"
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

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-[0.82rem] lg:flex">
          {navLinks.map((item) =>
            item.dropdown ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.setOpen(true)}
                onMouseLeave={() => item.setOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    item.match.some((m) => isActive(m)) ? linkActive : linkBase
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {item.open && (
                  <ul className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-4">
                    <div className="overflow-hidden rounded-[14px] border border-[color:var(--line)] bg-[color:var(--paper)] p-1.5 shadow-[0_20px_50px_-30px_rgba(28,26,22,0.5)]">
                      {item.dropdown.map((d) => (
                        <li key={d.href}>
                          <Link
                            href={d.href}
                            className="block rounded-[10px] px-3.5 py-2.5 text-[0.82rem] text-[color:var(--ink-soft)] transition hover:bg-[color:var(--surface)] hover:text-[color:var(--ink)]"
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
                  className={`transition-colors ${
                    isActive(item.href) ? linkActive : linkBase
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDonateOpen(true)}
            className={`hidden rounded-full px-6 py-2.5 text-[0.82rem] font-semibold transition hover:-translate-y-0.5 md:inline-flex ${
              overlay
                ? "bg-[color:var(--paper)] text-[color:var(--ink)]"
                : "bg-[color:var(--brand-primary)] text-white hover:bg-[color:var(--brand-primary-600)]"
            }`}
          >
            Donate
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

      {/* Mobile menu */}
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
                      ? "font-semibold text-[color:var(--ink)]"
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
              className="mt-3 w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
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
