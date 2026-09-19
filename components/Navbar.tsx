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
    <header className="fixed w-full top-4 z-50 px-4">
      <nav className="mx-auto max-w-7xl">
        <div className="backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                {/* Small crest/logo mark */}
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C8972A]/30 shadow-sm bg-white p-1">
                  <Image
                    src="/images/ambaimage.png"
                    alt="Ambaa Ul Uloom Logo"
                    fill
                    className="object-contain scale-110"
                  />
                </div>
                <span className="text-xl font-display font-bold text-[#1A2E1A] tracking-wide">
                  AMBAA UL ULOOM
                </span>
              </Link>
            </div>

            {/* Hamburger Menu (Mobile Only) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#1A2E1A] hover:text-[#C8972A] transition-colors duration-200"
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

            {/* CTA Button (Desktop Only) */}
            <div className="hidden md:block">
              <Link
                href="/book-call"
                className="bg-[#C8972A] hover:bg-[#b58825] text-white px-5 py-2.5 rounded-lg 
                          font-medium transition-all duration-200 shadow-md hover:shadow-lg
                          transform hover:-translate-y-0.5"
              >
                Book a Free Call
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 mt-2 bg-white rounded-b-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col space-y-4 px-6 py-6">
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
                <Link
                  href="/book-call"
                  onClick={toggleMenu}
                  className="bg-[#C8972A] hover:bg-[#b58825] text-white px-6 py-3 rounded-lg 
                            transition-all duration-200 shadow-md text-center font-medium mt-4"
                >
                  Book a Free Call
                </Link>
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

export default Navbar;
