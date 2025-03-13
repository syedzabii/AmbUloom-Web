"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold">Ambuloom</h3>
            <p className="text-gray-300">
              Learn Quran online with expert teachers anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Youtube size={20} />} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/courses">Our Courses</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/register">Contact</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold">Courses</h4>
            <ul className="space-y-2">
              <FooterLink href="/courses/noorani-qaida">
                Noorani Qaida
              </FooterLink>
              <FooterLink href="/courses/nazeera">Nazeera</FooterLink>
              <FooterLink href="/courses/hifz">Hifz</FooterLink>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@ambuloom.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: Your Address Here</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={item}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300"
        >
          <p>
            &copy; {new Date().getFullYear()} Ambuloom. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-secondary transition-colors">
      {icon}
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-secondary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
