"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Counter = ({ end, duration = 1.5 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
};

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-24 pb-20 flex items-center bg-[#F5F0E8] overflow-hidden">
      {/* Inline style for the background drift animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes drift {
          from { background-position: 0 0; }
          to { background-position: -40px 0; }
        }
      `}} />

      {/* SVG Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l2 18 18 2-18 2-2 18-2-18L0 20l18-2 2-18z' fill='%231A2E1A' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          animation: 'drift 20s linear infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mt-8 lg:mt-0">

          {/* Left Column: 55% */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[55%] flex flex-col order-2 lg:order-1 pt-8 lg:pt-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="self-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8972A] bg-[rgba(200,151,42,0.08)] mb-6 shadow-sm">
                <Star className="w-3.5 h-3.5 text-[#C8972A] fill-[#C8972A]" />
                <span className="text-sm font-semibold text-[#1A2E1A]">✨ 1-on-1 Live Online Quran Classes • 400+ Students</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="flex flex-col font-display font-bold text-[44px] sm:text-[48px] md:text-[64px] leading-[1.1] mb-6">
              <span className="text-[#1A2E1A]">Learn the Quran.</span>
              <span className="text-[#C8972A]">1-on-1 Personal Tutor.</span>
              <span className="block mt-6 w-[80px] h-[2px] bg-[#C8972A] rounded-full"></span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="font-body font-normal text-[17px] text-[#4A5568] max-w-[500px] mb-6 leading-relaxed">
              A premium online madrasa providing <strong className="text-[#1A2E1A] font-semibold">100% 1-on-1 personalized live sessions</strong> bridging traditional scholarship with modern learning. Dedicated certified male & female teachers for kids and adults.
            </motion.p>

            {/* 1-on-1 Quick Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              <span className="bg-white/80 border border-[#C8972A]/30 text-[#1A2E1A] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                🎯 1-on-1 Personal Attention
              </span>
              <span className="bg-white/80 border border-[#C8972A]/30 text-[#1A2E1A] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                🕒 Flexible Schedule (24/7)
              </span>
              <span className="bg-white/80 border border-[#C8972A]/30 text-[#1A2E1A] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                👩‍🏫 Male & Female Teachers
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-3 mb-16">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-row items-center justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto gap-2.5 text-base"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat us on WhatsApp</span>
                </a>

                <Link
                  href="/register"
                  className="inline-flex flex-row items-center justify-center px-6 py-3.5 bg-[#C8972A] hover:bg-[#b58825] text-white rounded-lg font-medium transition-colors w-full sm:w-auto group text-base shadow-sm"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/book-call"
                  className="inline-flex flex-row items-center justify-center px-6 py-3.5 bg-white border-[1.5px] border-[#1A2E1A] text-[#1A2E1A] hover:bg-[#1A2E1A]/5 rounded-lg font-medium transition-colors w-full sm:w-auto group text-base"
                >
                  <PlayCircle className="mr-2 w-4 h-4 text-[#1A2E1A] group-hover:scale-110 transition-transform" />
                  Book a Free Call
                </Link>
              </div>

              {/* Friendly message for form-hesitant visitors */}
              <p className="text-xs text-[#556375] font-medium flex items-center gap-1.5 pt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                Hesitant to fill the form? Simply click <strong>"Chat us on WhatsApp"</strong> to talk to us directly!
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex flex-row items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display font-bold text-[36px] text-[#C8972A] leading-none mb-1">
                  <Counter end={400} />+
                </span>
                <span className="font-body text-[13px] text-[#4A5568] font-medium">Students</span>
              </div>

              <div className="w-[1px] h-10 bg-[#C8972A]/30"></div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-[36px] text-[#C8972A] leading-none mb-1">
                  <Counter end={10} />+
                </span>
                <span className="font-body text-[13px] text-[#4A5568] font-medium">Teachers</span>
              </div>

              <div className="w-[1px] h-10 bg-[#C8972A]/30"></div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-[36px] text-[#C8972A] leading-none mb-1">
                  <Counter end={5} />+
                </span>
                <span className="font-body text-[13px] text-[#4A5568] font-medium">Countries</span>
              </div>
            </motion.div>
          </motion.div>


          {/* Right Column: 45% */}
          <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end order-1 lg:order-2">

            {/* Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[480px] bg-white rounded-2xl border border-[rgba(200,151,42,0.25)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center min-h-[380px]"
            >

              {/* Logo Crest / Image */}
              <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-gray-100 flex items-center justify-center z-10 bg-white" style={{ boxShadow: '0 0 40px rgba(13,43,26,0.15)' }}>
                {/* Normally we will use an Image tag but using logo here directly */}
                <Image
                  src="/images/logo_new_1.png"
                  alt="Islamic Crest Logo"
                  fill
                  className="object-contain p-6 scale-110"
                  priority
                />
              </div>

              {/* Floating Card 1 (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="absolute -top-4 -left-4 md:-top-6 md:-left-8 bg-white rounded-xl shadow-md p-3 px-4 w-[220px] flex items-center gap-3 z-20 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8972A]/10 flex items-center justify-center shrink-0 border border-[#C8972A]/20">
                  <span className="text-[#C8972A] font-accent text-lg">ق</span>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium mb-0.5 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span> Upcoming
                  </p>
                  <p className="text-[13px] font-bold text-[#1A2E1A] leading-tight mb-0.5">Live class in 10 mins</p>
                  <p className="text-[11px] text-gray-500 line-clamp-1">Tajweed · Ustadh Ahmad</p>
                </div>
              </motion.div>

              {/* Floating Card 2 (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-md p-3 px-4 w-[200px] flex flex-col gap-2 z-20 border border-gray-100"
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1A2E1A] flex items-center justify-center text-white text-[11px] border-2 border-white">S</div>
                  <div className="w-8 h-8 rounded-full bg-[#C8972A] flex items-center justify-center text-white text-[11px] border-2 border-white">Y</div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-[11px] font-medium border-2 border-white">+12</div>
                </div>
                <div>
                  <div className="flex items-center text-[#C8972A] text-[10px] mb-0.5 gap-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-[12px] font-bold text-[#1A2E1A]">Top Rated Teachers</p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
