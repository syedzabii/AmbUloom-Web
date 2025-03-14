"use client"; // Ensure this is a Client Component
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-4 z-50 px-4">
      <nav className="mx-auto max-w-7xl">
        {/* Use a solid background on mobile and backdrop-blur on larger screens */}
        <div className="backdrop-blur-none md:backdrop-blur-md bg-background-primary md:bg-background-primary/40 rounded-2xl shadow-card">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-text-primary">
                  Amba ul Uloom
                </span>
              </Link>
            </div>

            {/* Hamburger Menu (Mobile Only) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-text-primary hover:text-primary transition-colors duration-200"
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
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/teachers">Teachers</NavLink>
              <NavLink href="/register">Contact</NavLink>
              <NavLink href="/blog">Blog</NavLink>
            </div>

            {/* CTA Button (Desktop Only) */}
            <div className="hidden md:block">
              <Link
                href="/book-call"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-xl 
                          transition-all duration-200 shadow-button hover:shadow-button-hover
                          transform hover:-translate-y-0.5"
              >
                Book a call
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4 px-6">
                <MobileNavLink href="/courses" onClick={toggleMenu}>
                  Courses
                </MobileNavLink>
                <MobileNavLink href="/teachers" onClick={toggleMenu}>
                  Teachers
                </MobileNavLink>
                <MobileNavLink href="/register" onClick={toggleMenu}>
                  Contact
                </MobileNavLink>
                <Link
                  href="/book-call"
                  className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-xl 
                            transition-all duration-200 shadow-button hover:shadow-button-hover
                            transform hover:-translate-y-0.5 text-center"
                >
                  Book a call
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
      className="text-text-primary hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
};

// MobileNavLink component for consistent styling (Mobile)
const MobileNavLink = ({ href, children, onClick }: any) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-text-primary hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;
