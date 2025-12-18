"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import DonateModal from "@/components/DonateModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-sm text-gray-600">
        <div>Tel: +256 782 524 317 | +256 784 808 738</div>
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
      <nav className="bg-[#0389C3] text-white px-4 py-3 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo at far left */}
          <div className="flex items-center gap-4">
            <Image
              src="/logos/doctors-mission-logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-md"
            />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 font-semibold hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a href="#">HOME</a>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1">
                  ABOUT <ChevronDown size={16} />
                </button>
                {aboutOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 w-40 z-20">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Who We Are</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">VOLUNTEER</a>
              </li>
              <li>
                <a href="#">SUPPORT A MISSION</a>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setNewsOpen(true)}
                onMouseLeave={() => setNewsOpen(false)}
              >
                <button className="flex items-center gap-1">
                  NEWS <ChevronDown size={16} />
                </button>
                {newsOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 w-40 z-20">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Reports</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Press</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">CONTACT</a>
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
            <a href="#" className="block">
              HOME
            </a>
            <div>
              <button
                className="flex items-center gap-1 w-full"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                ABOUT <ChevronDown size={16} />
              </button>
              {aboutOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <a href="#" className="block">
                    Who We Are
                  </a>
                  <a href="#" className="block">
                    Our Team
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="block">
              VOLUNTEER
            </a>
            <a href="#" className="block">
              SUPPORT A MISSION
            </a>
            <div>
              <button
                className="flex items-center gap-1 w-full"
                onClick={() => setNewsOpen(!newsOpen)}
              >
                NEWS <ChevronDown size={16} />
              </button>
              {newsOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <a href="#" className="block">
                    Reports
                  </a>
                  <a href="#" className="block">
                    Press
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="block">
              CONTACT
            </a>
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
