"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Star, Users } from "lucide-react";

const courses = [
  {
    title: "Noorani Qaida",
    level: "Beginner",
    duration: "3-6 Months",
    students: "1.2k+",
    rating: "4.9",
    description: "The fundamental course for beginners to learn the correct pronunciation of Arabic alphabets.",
    color: "bg-[#0D2B1A]" // primary
  },
  {
    title: "Nazeera (Reading)",
    level: "Intermediate",
    duration: "1-2 Years",
    students: "850+",
    rating: "4.8",
    description: "Learn to read the Holy Quran with correct accent and basic Tajweed rules.",
    color: "bg-[#164529]" // primary-light
  },
  {
    title: "Tajweed & Qirat",
    level: "Advanced",
    duration: "Flexible",
    students: "620+",
    rating: "5.0",
    description: "Master the advanced rules of recitation and beautify your voice with proper articulation.",
    color: "bg-[#C8972A]" // gold
  },
  {
    title: "Hifz (Memorization)",
    level: "All Levels",
    duration: "2-4 Years",
    students: "450+",
    rating: "4.9",
    description: "A structured program to memorize the entire Quran with regular revision schedules.",
    color: "bg-white",
    textClass: "text-primary"
  },
  {
    title: "Tafseer",
    level: "Advanced",
    duration: "1 Year",
    students: "320+",
    rating: "4.8",
    description: "Understand the deeper meanings, context, and wisdom behind the Quranic verses.",
    color: "bg-white",
    textClass: "text-primary"
  },
  {
    title: "Deeniyat",
    level: "Beginner",
    duration: "6 Months",
    students: "900+",
    rating: "4.7",
    description: "Essential Islamic knowledge covering basic beliefs, prayers, and daily supplications.",
    color: "bg-white",
    textClass: "text-primary"
  }
];

export default function CoursesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[#F2F2Ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              Our Curriculum
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display"
            >
              Structured Learning Paths
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/courses" className="inline-flex items-center text-primary font-semibold hover:text-gold transition-colors group">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => {
            const isDark = course.color !== "bg-white";
            const textColor = isDark ? "text-white" : "text-primary";
            const mutedTextColor = isDark ? "text-white/70" : "text-text-muted";
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`rounded-3xl p-6 ${course.color} ${!isDark && 'border border-black/5'} shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group relative overflow-hidden`}
              >
                {/* Background Pattern for Dark Cards */}
                {isDark && (
                  <div className="absolute inset-0 opacity-10 pattern-islamic mix-blend-overlay pointer-events-none"></div>
                )}

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/20 text-white' : 'bg-gold/10 text-gold'}`}>
                    {course.level}
                  </span>
                  <div className={`flex items-center gap-1 text-sm font-medium ${textColor}`}>
                    <Star className={`w-4 h-4 ${isDark ? 'fill-white text-white' : 'fill-gold text-gold'}`} />
                    {course.rating}
                  </div>
                </div>

                <div className="relative z-10 mb-6 flex-grow">
                  <h3 className={`text-2xl font-bold font-display mb-3 ${textColor}`}>
                    {course.title}
                  </h3>
                  <p className={`text-sm ${mutedTextColor} line-clamp-3`}>
                    {course.description}
                  </p>
                </div>

                <div className={`relative z-10 flex items-center justify-between pt-6 border-t ${isDark ? 'border-white/20' : 'border-black/5'} mt-auto`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${mutedTextColor}`}>
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${mutedTextColor}`}>
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>
                  <Link href="/register" className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white text-primary' : 'bg-primary text-white'} group-hover:scale-110 transition-transform`}>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
