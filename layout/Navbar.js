"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`w-full z-30 sticky top-0 transition-shadow duration-300 ${
        scrolled || !isTransparent ? "shadow-sm" : "shadow-none"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-xs sm:text-sm text-gray-600">
        <div>
          Tel:
          <a href="tel:+256782524317" className="ml-1 hover:text-[#0389C3]">
            +256 782 524 317
          </a>
          <span className="mx-1">|</span>
          <a href="tel:+256784808738" className="hover:text-[#0389C3]">
            +256 784 808 738
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">DOCTORS ON MISSION INT</span>
          <div className="flex gap-3 text-gray-600">
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`text-white px-4 py-3 relative transition-colors duration-300 ${
          isTransparent ? "bg-transparent" : "bg-[#0389C3]/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo at far left */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/logos/doctors-mission-logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                Doctors on Mission
              </span>
              <span className="text-sm font-semibold">
                International (DOMI)
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 font-semibold hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className={`transition-colors hover:text-[#EABF4E] ${
                    isActive("/") ? "text-[#EABF4E]" : ""
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-[#EABF4E] ${
                    isActive("/about") ||
                    isActive("/programs") ||
                    isActive("/gallery")
                      ? "text-[#EABF4E]"
                      : ""
                  }`}
                >
                  ABOUT <ChevronDown size={16} />
                </button>
                {aboutOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 w-40 z-20">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/programs">Programs</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/gallery">Gallery</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/voluteer"
                  className={`transition-colors hover:text-[#EABF4E] ${
                    isActive("/voluteer") ? "text-[#EABF4E]" : ""
                  }`}
                >
                  VOLUNTEER
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className={`transition-colors hover:text-[#EABF4E] ${
                    isActive("/support") ? "text-[#EABF4E]" : ""
                  }`}
                >
                  SUPPORT A MISSION
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setNewsOpen(true)}
                onMouseLeave={() => setNewsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-[#EABF4E] ${
                    isActive("/report") ||
                    isActive("/press") ||
                    isActive("/blog")
                      ? "text-[#EABF4E]"
                      : ""
                  }`}
                >
                  NEWS <ChevronDown size={16} />
                </button>
                {newsOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 w-40 z-20">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/report">Reports</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/press">Press Release</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors hover:text-[#EABF4E] ${
                    isActive("/contact") ? "text-[#EABF4E]" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Donate and Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setDonateOpen(true)}
              className="bg-[#EABF4E] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#d6a931] hidden md:inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            >
              <span className="text-lg">➜</span>
              <span>DONATE</span>
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0389C3] text-white mt-2 p-4 space-y-2">
            <Link
              href="/"
              className={`block py-1 ${
                isActive("/") ? "text-[#EABF4E] font-semibold" : ""
              }`}
            >
              HOME
            </Link>
            <div>
              <button
                className="flex items-center gap-1 w-full"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                ABOUT <ChevronDown size={16} />
              </button>
              {aboutOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link href="/about" className="block">
                    About Us
                  </Link>
                  <Link href="/programs" className="block">
                    Programs
                  </Link>
                  <Link href="/gallery" className="block">
                    Gallery
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/voluteer"
              className={`block py-1 ${
                isActive("/voluteer") ? "text-[#EABF4E] font-semibold" : ""
              }`}
            >
              VOLUNTEER
            </Link>
            <Link
              href="/support"
              className={`block py-1 ${
                isActive("/support") ? "text-[#EABF4E] font-semibold" : ""
              }`}
            >
              SUPPORT A MISSION
            </Link>
            <div>
              <button
                className="flex items-center gap-1 w-full"
                onClick={() => setNewsOpen(!newsOpen)}
              >
                NEWS <ChevronDown size={16} />
              </button>
              {newsOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link href="/report" className="block">
                    Reports
                  </Link>
                  <Link href="/press" className="block">
                    Press Release
                  </Link>
                  <Link href="/blog" className="block">
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`block py-1 ${
                isActive("/contact") ? "text-[#EABF4E] font-semibold" : ""
              }`}
            >
              CONTACT
            </Link>
            <button
              type="button"
              onClick={() => setDonateOpen(true)}
              className="inline-block mt-4 bg-[#EABF4E] text-white px-4 py-2 rounded-full shadow-md w-full text-center font-semibold tracking-wide"
            >
              ➜ DONATE
            </button>
          </div>
        )}
      </nav>
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  );
}

export default Navbar;
