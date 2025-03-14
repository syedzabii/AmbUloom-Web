"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("studentName") || "Student";
    setStudentName(name);
  }, []);

  // Balloon animation
  const balloonVariants = {
    initial: { y: 100, opacity: 0, scale: 0.5 },
    animate: (i: number) => ({
      y: -20,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 0.2 * i,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 1,
      },
    }),
  };

  // Star burst animation
  const starVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1.2, 1],
      rotate: [-180, 0],
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        times: [0, 0.8, 1],
      },
    }),
  };

  // Letters bounce animation
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  // Welcome message text for letter animation
  const welcomeText = `Welcome, ${studentName}! 🎉`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-10 text-center relative">
        {/* Floating balloons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`balloon-${i}`}
            custom={i}
            variants={balloonVariants}
            initial="initial"
            animate="animate"
            className={`absolute w-12 h-16 rounded-full ${
              [
                "bg-red-400",
                "bg-blue-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-purple-400",
              ][i % 5]
            }`}
            style={{
              left: `${15 + i * 18}%`,
              top: `-5%`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div className="w-1 h-6 bg-gray-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4"></div>
          </motion.div>
        ))}

        {/* Star burst effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              custom={i}
              variants={starVariants}
              initial="initial"
              animate="animate"
              className={`absolute w-8 h-8 ${
                ["bg-yellow-300", "bg-pink-300", "bg-blue-300", "bg-green-300"][
                  i % 4
                ]
              }`}
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Letter-by-letter animation for welcome message */}
        <div className="mb-6 pt-8">
          <div className="flex justify-center flex-wrap">
            {welcomeText.split("").map((letter, i) => (
              <motion.span
                key={`letter-${i}`}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className="text-4xl sm:text-5xl font-bold text-purple-600 inline-block mx-0.5"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content with bouncy reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-dashed border-purple-200"
        >
          <p className="text-lg text-gray-700 mb-6">
            Thank you for registering with{" "}
            <strong className="text-purple-600">AMBAA UL ULOOM</strong>. You
            will be added to a group shortly, and your class timings and teacher
            will be allotted to you soon.
          </p>
          <p className="text-md text-gray-600 mb-8">
            In case of any queries, feel free to contact us at:
            <br />
            <strong>Phone:</strong> +91 918383838
            <br />
            <strong>Email:</strong> info@ambuloom.com
          </p>

          {/* Animated button */}
          <motion.button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Return to Home
          </motion.button>
        </motion.div>

        {/* Confetti animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              initial={{
                top: "-10%",
                left: `${Math.random() * 100}%`,
                opacity: 1,
              }}
              animate={{
                top: "100%",
                left: `${Math.random() * 100}%`,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
              className={`absolute w-3 h-3 ${
                [
                  "bg-red-400",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-yellow-400",
                  "bg-purple-400",
                  "bg-pink-400",
                ][i % 6]
              }`}
              style={{
                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
