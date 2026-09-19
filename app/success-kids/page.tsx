"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import mascot from "../../public/images/mascot.png";
import Image from "next/image";
import { Phone, MessageCircle, Clock, Home, BookOpen, Sparkles, Star, Award, Heart, Rocket } from "lucide-react";
import confetti from "canvas-confetti";

interface FloatingItem {
  id: number;
  emoji: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function SuccessKidsPage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [floatingItems, setFloatingItems] = useState<FloatingItem[]>([]);

  const phoneNumber = "+91 82963 31365";
  const rawPhoneNumber = "918296331365";

  useEffect(() => {
    setIsMounted(true);
    const name = localStorage.getItem("studentName") || "Little Learner";
    setStudentName(name);

    // Fire celebratory confetti for kids in website gold & emerald colors
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#C8972A", "#164529", "#0D2B1A", "#D4A946", "#10B981"],
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#C8972A", "#164529", "#10B981"],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#C8972A", "#164529", "#10B981"],
        });
      }, 500);

      return () => clearTimeout(timer);
    } catch (e) {
      console.log("Confetti trigger:", e);
    }

    // Generate floating decorative items
    const items: FloatingItem[] = [
      { id: 1, emoji: "⭐", x: -20, y: -30, duration: 3.5, delay: 0 },
      { id: 2, emoji: "🌙", x: 25, y: -20, duration: 4.2, delay: 0.5 },
      { id: 3, emoji: "✨", x: -35, y: 40, duration: 3.8, delay: 1.0 },
      { id: 4, emoji: "🎈", x: 30, y: 50, duration: 4.5, delay: 0.3 },
      { id: 5, emoji: "🏆", x: -15, y: 90, duration: 3.2, delay: 0.8 },
      { id: 6, emoji: "🌟", x: 20, y: 100, duration: 4.0, delay: 1.2 },
    ];
    setFloatingItems(items);
  }, []);

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber.replace(/\s/g, "")}`, "_self");
  };

  const handleWhatsAppClick = () => {
    const message = `Assalamu Alaikum! My child (${studentName}) has registered for AMBAA UL ULOOM Kids Quran classes. We would like to confirm the timing and start our free trial class!`;
    const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 140, damping: 14 },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Animated Emojis */}
      {isMounted &&
        floatingItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 0 }}
            animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            className="absolute text-3xl sm:text-4xl pointer-events-none select-none z-0 opacity-70"
            style={{
              top: `${20 + (item.id * 12) % 65}%`,
              left: item.id % 2 === 0 ? `${8 + item.id * 7}%` : `${75 + (item.id * 3) % 18}%`,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}

      <motion.div
        className="max-w-3xl w-full relative z-10 my-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-primary/20 overflow-hidden">
          {/* Top Header Banner matching website theme */}
          <div className="bg-gradient-to-r from-primary via-[#113a23] to-secondary px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pattern-islamic pointer-events-none" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                delay: 0.2,
              }}
              className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30 shadow-inner"
            >
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24">
                <motion.path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  variants={checkmarkVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 bg-gold/20 text-gold-light border border-gold/30 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold animate-spin" style={{ animationDuration: "4s" }} />
                Kids Admission Registered!
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-2">
                Mubarak, {studentName}! 🎉
              </h1>
              <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto">
                You are now officially a part of AMBAA UL ULOOM Kids Quran Classes!
              </p>
            </motion.div>
          </div>

          {/* Main Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Animated Mascot Showcase */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto max-w-[210px] text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-primary-50 p-4 rounded-3xl border border-primary/20 shadow-sm"
              >
                <Image
                  src={mascot}
                  alt="Mascot"
                  width={160}
                  height={160}
                  className="rounded-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </motion.div>

              {/* Gold Star Badge */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1"
              >
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>Super Star</span>
              </motion.div>
            </motion.div>

            {/* 3 Step Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-primary-50 rounded-2xl border border-primary/15 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-gold flex items-center justify-center mb-2 shadow-sm">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-bold text-primary">1. Noorani Qaida</span>
                <span className="text-xs text-text-secondary mt-0.5">Master Quranic basics</span>
              </div>

              <div className="p-4 bg-primary-50 rounded-2xl border border-primary/15 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-secondary text-gold flex items-center justify-center mb-2 shadow-sm">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-bold text-primary">2. Tajweed Recitation</span>
                <span className="text-xs text-text-secondary mt-0.5">Beautiful pronunciation</span>
              </div>

              <div className="p-4 bg-primary-50 rounded-2xl border border-primary/15 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-gold flex items-center justify-center mb-2 shadow-sm">
                  <Rocket className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-bold text-primary">3. Earn Rewards</span>
                <span className="text-xs text-text-secondary mt-0.5">Badges & Certificates</span>
              </div>
            </motion.div>

            {/* Parents Callout Box */}
            <motion.div
              variants={itemVariants}
              className="bg-primary-50 rounded-2xl p-6 sm:p-8 border border-primary/15 text-center shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold mr-2 fill-gold" />
                Parents & Guardians: Finalize Class Schedule
              </h2>
              <p className="text-text-secondary text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Call us or reach out on WhatsApp to confirm your preferred class timing and begin your child's free trial class!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Phone Button */}
                <button
                  onClick={handlePhoneClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Phone className="w-6 h-6 mr-3 text-gold" />
                  Call {phoneNumber}
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Us
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-text-secondary mt-5">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Available Daily: 9:00 AM – 9:00 PM IST</span>
              </div>
            </motion.div>

            {/* Navigation Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-primary/10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary/10 text-primary rounded-xl font-semibold hover:bg-primary/20 transition-all text-sm"
              >
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-secondary border border-secondary/30 rounded-xl font-semibold hover:bg-secondary/5 transition-all text-sm"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Explore Our Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


