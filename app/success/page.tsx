"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Home,
  BookOpen
} from "lucide-react";

interface ParticleData {
  width: number;
  height: number;
  left: string;
  top: string;
  background: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  repeatDelay: number;
}

export default function SuccessPage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const phoneNumber = "+91 82963 31365";
  const rawPhoneNumber = "918296331365";

  useEffect(() => {
    setIsMounted(true);
    const name = localStorage.getItem("studentName") || "Student";
    setStudentName(name);

    const colors = [
      "#C8972A",
      "#164529",
      "#22c55e",
      "#10b981",
      "#3b82f6",
    ];

    const particleData: ParticleData[] = Array.from({ length: 24 }).map((_, i) => ({
      width: 8 + Math.random() * 16,
      height: 8 + Math.random() * 16,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: colors[i % colors.length],
      x: Math.sin(i) * 120 + Math.random() * 40,
      y: Math.cos(i) * 120 + Math.random() * 40,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      repeatDelay: Math.random() * 2,
    }));

    setParticles(particleData);
  }, []);

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber.replace(/\s/g, '')}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! My name is ${studentName !== "Student" ? studentName : "a new student"}. I just registered on AMBAA UL ULOOM and would like to confirm my admission and class timing.`;
    const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (particle: ParticleData) => ({
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0],
      x: particle.x,
      y: particle.y,
      rotate: [0, 360],
      transition: {
        duration: particle.duration,
        delay: particle.delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: particle.repeatDelay,
      },
    }),
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const nextSteps = [
    {
      title: "Immediate Review",
      description: "Our admin team will review your submitted registration details.",
    },
    {
      title: "Teacher Assignment",
      description: "You'll be paired with a qualified instructor matching your schedule.",
    },
    {
      title: "WhatsApp Group Onboarding",
      description: "You will be added to your official WhatsApp group for class updates.",
    },
    {
      title: "First Class Session",
      description: "Begin your interactive 1-on-1 Quran learning session smoothly!",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {isMounted &&
        particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            custom={particle}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full pointer-events-none z-0 opacity-60"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              background: particle.background,
            }}
          />
        ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full relative z-10 my-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-primary/20 overflow-hidden">
          {/* Top Banner / Header */}
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

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-gold/20 text-gold-light border border-gold/30 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold" />
                Registration Successful
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-2">
                Welcome, {studentName}!
              </h1>
              <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto">
                Thank you for choosing AMBAA UL ULOOM. Your registration has been received successfully!
              </p>
            </motion.div>
          </div>

          {/* Main Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Direct Contact Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-primary-50 rounded-2xl p-6 sm:p-8 border border-primary/15 text-center shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                Connect With Us Directly
              </h2>
              <p className="text-text-secondary text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Click below to call us or send a message on WhatsApp to confirm your class schedule and finalize your onboarding.
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

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                What Happens Next?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nextSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-xl border border-primary/10 shadow-sm hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start">
                      <div className="w-7 h-7 rounded-full bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
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
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
