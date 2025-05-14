"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import mascot from "../../public/images/mascot.png";
import Image from "next/image";

export default function SuccessPage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("studentName") || "Student";
    setStudentName(name);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const confettiVariants = {
    initial: { y: "-10%", opacity: 0 },
    animate: {
      y: "110%",
      opacity: [1, 1, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        delay: Math.random() * 5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-sky-100 to-rose-100 flex items-center justify-center px-4 py-10 relative overflow-hidden font-sans">
      {/* Confetti */}
      {/* {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          variants={confettiVariants}
          initial="initial"
          animate="animate"
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#fbbf24"][
              i % 4
            ],
          }}
        />
      ))} */}

      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl text-center border-2 border-sky-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Celebration Emoji */}
        <motion.div variants={itemVariants} className="text-5xl mb-4">
          🎉✨
        </motion.div>

        {/* Name intro */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-sky-700 mb-2"
        >
          Welcome aboard, {studentName}!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-md text-gray-700 mb-6"
        >
          You're now officially part of
          <span className="text-purple-600 font-semibold">
            {" "}
            Ambaa ul Uloom!
          </span>{" "}
          We're so hyped to have you!
        </motion.p>

        {/* Cute mascot */}
        <motion.div variants={itemVariants} className="mx-auto mb-6">
          <Image
            src={mascot}
            alt="Mascot"
            width={180}
            height={180}
            className="rounded-lg border-4 border-sky-200 mx-auto"
          />
        </motion.div>

        {/* Info block */}
        <motion.div
          variants={itemVariants}
          className="bg-sky-50 p-4 rounded-lg border border-sky-200 mb-4 text-sm text-sky-800"
        >
          Your teacher will reach out soon to place you in your class. Keep an
          eye on your inbox and stay excited!
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="text-sm text-gray-600 mb-6"
        >
          Need help? Ask your grown-ups to reach out:
          <br />
          📞 <strong>+91 918383838</strong> <br />
          📧 <strong>info@ambuloom.com</strong>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={() => router.push("/")}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-sky-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Return Home 🏡
        </motion.button>
      </motion.div>
    </div>
  );
}
