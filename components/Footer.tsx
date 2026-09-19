"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

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
    <footer className="bg-primary-dark text-white relative overflow-hidden border-t-4 border-gold">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5 pattern-islamic pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-white">
              AMBAA UL ULOOM
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              A premium online madrasa bridging traditional scholarship with modern learning. Learn Quran online with expert teachers anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-6">
            <h4 className="text-lg font-semibold font-display text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/courses">Our Courses</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/register">Student Registration</FooterLink>
              <FooterLink href="/register-teacher">Teach With Us</FooterLink>
              <FooterLink href="/#faq">FAQs</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={item} className="space-y-6">
            <h4 className="text-lg font-semibold font-display text-gold">Popular Courses</h4>
            <ul className="space-y-3">
              <FooterLink href="/courses">Noorani Qaida</FooterLink>
              <FooterLink href="/courses">Tajweed Mastery</FooterLink>
              <FooterLink href="/courses">Hifz-ul-Quran</FooterLink>
              <FooterLink href="/courses">Tafseer & Translation</FooterLink>
              <FooterLink href="/courses">Islamic Deeniyat</FooterLink>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-6">
            <h4 className="text-lg font-semibold font-display text-gold">Contact & Support</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <a href="mailto:ambaaululoom@gmail.com" className="hover:text-gold transition-colors">ambaaululoom@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <a href="tel:+918296331365" className="hover:text-gold transition-colors">+91 82963 31365</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>13, Bore Bank Rd, Byadarahalli, Benson Town, Bengaluru, Karnataka 560046</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/918296331365" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} AMBAA UL ULOOM. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span>Designed thoughtfully for global learners.</span>
             <Star className="w-3 h-3 text-gold fill-gold" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
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
        className="text-white/70 hover:text-gold transition-colors relative group inline-block"
      >
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}
