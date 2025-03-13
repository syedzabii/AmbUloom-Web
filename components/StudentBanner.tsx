"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AnimatedNumber({ value }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const animatedValue = useSpring(0, {
    stiffness: 50, // Lower stiffness for slower animation
    damping: 20, // Higher damping for less oscillation
  });

  const displayValue = useTransform(animatedValue, (val) => Math.floor(val));

  useEffect(() => {
    if (inView) {
      animatedValue.set(value); // Animate to the target value when in view
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
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.2, // Delay before starting the animation
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
  return (
    <section className="bg-primary-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Students Enrolled */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.h3
              className="text-display-md font-bold text-primary-dark"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
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
            <motion.h3
              className="text-display-md font-bold text-primary-dark"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            >
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
            <motion.h3
              className="text-display-md font-bold text-primary-dark"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
            >
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
