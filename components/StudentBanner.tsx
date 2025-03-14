"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AnimatedNumber({ value }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Lower threshold so it triggers earlier
  });

  const animatedValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
  });

  const displayValue = useTransform(animatedValue, (val) => Math.floor(val));

  useEffect(() => {
    if (inView) {
      animatedValue.set(value);
    }
  }, [inView, value, animatedValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {inView && "+"}
    </motion.span>
  );
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function StudentBanner() {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold to trigger earlier
    rootMargin: "0px 0px -10% 0px", // Negative bottom margin to trigger before fully in view
  });

  return (
    <section className="bg-primary-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
        >
          {/* Students Enrolled */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h3 className="text-display-md font-bold text-primary-dark">
              <AnimatedNumber value={110} />
            </motion.h3>
            <p className="text-body-md text-text-secondary mt-2">
              Students Enrolled
            </p>
          </motion.div>

          {/* Expert Teachers */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h3 className="text-display-md font-bold text-primary-dark">
              <AnimatedNumber value={4} />
            </motion.h3>
            <p className="text-body-md text-text-secondary mt-2">
              Expert Teachers
            </p>
          </motion.div>

          {/* Global Students */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h3 className="text-display-md font-bold text-primary-dark">
              Global
            </motion.h3>
            <p className="text-body-md text-text-secondary mt-2">
              Students Across the Globe
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
