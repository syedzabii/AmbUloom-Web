"use client"; // Ensure this is a Client Component
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 pt-2 px-2 sm:px-4">
      <nav className="mx-auto max-w-7xl">
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-[#1A2E1A] via-[#2A442A] to-[#1A2E1A] text-white px-3 py-1.5 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between text-xs sm:text-sm font-medium border-b border-[#C8972A]/30 shadow-sm mb-1">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
            <span className="bg-[#C8972A] text-white font-bold text-[10px] sm:text-xs px-2 py-0.5 rounded-full uppercase tracking-wider">
              1-on-1 Classes
            </span>
            <span className="text-emerald-100 hidden md:inline">
              Personalized Live Quran & Tajweed Sessions
            </span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="text-amber-200">
              Hesitant to fill the form?
            </span>
          </div>

          <a
            href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs px-2.5 py-0.5 rounded-md font-semibold transition-all hover:scale-105 shrink-0 ml-2"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>Chat us on WhatsApp</span>
          </a>
        </div>

        <div className="backdrop-blur-md bg-white/85 border border-white/40 rounded-b-xl sm:rounded-b-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                {/* Small crest/logo mark */}
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#C8972A]/30 shadow-sm bg-white p-1">
                  <Image
                    src="/images/Ambaimage.png"
                    alt="Ambaa Ul Uloom Logo"
                    fill
                    className="object-contain scale-110"
                  />
                </div>
                <span className="text-lg sm:text-xl font-display font-bold text-[#1A2E1A] tracking-wide">
                  AMBAA UL ULOOM
                </span>
              </Link>
            </div>

            {/* Mobile Right Controls: WhatsApp Quick Button + Hamburger Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={toggleMenu}
                className="text-[#1A2E1A] hover:text-[#C8972A] transition-colors duration-200 p-1"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Navigation Links (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/teachers">Teachers</NavLink>
              <NavLink href="/register-teacher">Teach With Us</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
            </div>

            {/* CTA Buttons (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-lg 
                          font-medium transition-all duration-200 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat us on WhatsApp</span>
              </a>
              <Link
                href="/book-call"
                className="bg-[#C8972A] hover:bg-[#b58825] text-white px-5 py-2.5 rounded-lg 
                          font-medium transition-all duration-200 shadow-md hover:shadow-lg
                          transform hover:-translate-y-0.5 text-sm"
              >
                Book a Free Call
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 mt-2 bg-white rounded-b-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-medium">
                  ✨ 1-on-1 Live Online Quran Classes with Certified male & female tutors.
                </div>
                <MobileNavLink href="/courses" onClick={toggleMenu}>
                  Courses
                </MobileNavLink>
                <MobileNavLink href="/teachers" onClick={toggleMenu}>
                  Teachers
                </MobileNavLink>
                <MobileNavLink href="/register" onClick={toggleMenu}>
                  Register
                </MobileNavLink>
                <MobileNavLink href="/register-teacher" onClick={toggleMenu}>
                  Teach With Us
                </MobileNavLink>
                <MobileNavLink href="/blog" onClick={toggleMenu}>
                  Blog
                </MobileNavLink>
                <MobileNavLink href="/about-us" onClick={toggleMenu}>
                  About Us
                </MobileNavLink>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg 
                              transition-all duration-200 shadow-md text-center font-medium flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>Chat us on WhatsApp</span>
                  </a>
                  <Link
                    href="/book-call"
                    onClick={toggleMenu}
                    className="bg-[#C8972A] hover:bg-[#b58825] text-white px-6 py-3 rounded-lg 
                              transition-all duration-200 shadow-md text-center font-medium"
                  >
                    Book a Free Call
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

// NavLink component for consistent styling (Desktop)
const NavLink = ({ href, children }: any) => {
  return (
    <Link
      href={href}
      className="relative text-[#1A2E1A] font-medium py-2 group transition-colors duration-200 hover:text-[#1A2E1A]/80"
    >
      {children}
      {/* Subtle gold underline on hover */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8972A] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
    </Link>
  );
};

// MobileNavLink component for consistent styling (Mobile)
const MobileNavLink = ({ href, children, onClick }: any) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[#1A2E1A] hover:text-[#C8972A] transition-colors duration-200 font-medium text-lg border-b border-gray-50 pb-2"
    >
      {children}
    </Link>
  );
};

// WhatsApp SVG Icon component
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default Navbar;
