"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

  useEffect(() => {
    setIsMounted(true);
    const name = localStorage.getItem("studentName") || "Student";
    setStudentName(name);
    
    // Generate particle data only on client side
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA931",
      "#7477BF",
      "#98D8C8",
      "#F06595",
      "#845EC2",
      "#D65DB1",
      "#FFC75F",
    ];
    
    const particleData: ParticleData[] = Array.from({ length: 30 }).map((_, i) => ({
      width: 10 + Math.random() * 20,
      height: 10 + Math.random() * 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: colors[i % 10],
      x: Math.sin(i) * 150 + Math.random() * 50,
      y: Math.cos(i) * 150 + Math.random() * 50,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      repeatDelay: Math.random() * 2,
    }));
    
    setParticles(particleData);
  }, []);

  // Enhanced particle animations
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (particle: ParticleData) => ({
      opacity: [0, 1, 0],
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

  // Staggered text reveal
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  // Check mark animation
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full relative"
      >
        {/* Animated background particles */}
        {isMounted && particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            custom={particle}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              background: particle.background,
            }}
          />
        ))}

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden z-10 relative"
        >
          {/* Success check animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600"></div>
          <div className="p-8 sm:p-10">
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.5,
                }}
                className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center"
              >
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
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
            </div>

            {/* Animated text reveal */}
            <div className="mb-6 text-center overflow-hidden">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
              >
                Welcome, {studentName}!
              </motion.h1>
            </div>

            {/* Staggered text reveal */}
            <div className="space-y-6">
              {[
                "Your registration with AMBAA UL ULOOM has been successfully processed.",
                "You will be added to a group shortly, and your class timings and instructor will be assigned soon.",
                "We're excited to have you join our community!",
              ].map((text, i) => (
                <motion.p
                  key={`text-${i}`}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg text-gray-700 text-center"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Contact info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-100"
            >
              <h3 className="text-sm font-medium text-emerald-800 mb-3 uppercase tracking-wider">
                Contact Information
              </h3>
              <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-emerald-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 918383838</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-emerald-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@ambuloom.com</span>
                </div>
              </div>
            </motion.div>

            {/* Button with hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 flex justify-center"
            >
              <motion.button
                onClick={() => router.push("/")}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Return to Home
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
