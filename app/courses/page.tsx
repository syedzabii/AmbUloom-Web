"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Monitor, 
  GraduationCap, 
  Globe,
  Award,
  Clock,
  Heart,
  Star,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  isPopular?: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Noorani Qaida",
    subtitle: "Foundation Course",
    description: "Master the fundamentals of Arabic alphabets, pronunciation, and basic reading skills. Perfect starting point for Quranic learning.",
    duration: "3-6 months",
    level: "Beginner",
    features: [
      "Arabic alphabet recognition",
      "Proper pronunciation (Makharij)",
      "Basic reading skills",
      "Letter combinations",
      "Vowel marks (Harakat)",
      "Interactive learning methods"
    ],
    icon: <BookOpen className="w-8 h-8" />,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 2,
    title: "Nazra Quran",
    subtitle: "Quran Recitation",
    description: "Learn to read the Holy Quran with proper pronunciation and fluency. Develop beautiful recitation skills.",
    duration: "6-12 months",
    level: "Beginner to Intermediate",
    features: [
      "Complete Quran reading",
      "Proper pronunciation",
      "Reading fluency",
      "Verse-by-verse practice",
      "Recitation techniques",
      "Regular assessments"
    ],
    icon: <GraduationCap className="w-8 h-8" />,
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: 3,
    title: "Tajweed",
    subtitle: "Advanced Recitation",
    description: "Master the science of Tajweed - the rules of beautiful Quran recitation. Perfect your pronunciation and melody.",
    duration: "6-12 months",
    level: "Intermediate to Advanced",
    features: [
      "Tajweed rules (Ahkam)",
      "Proper pronunciation",
      "Melody and rhythm",
      "Advanced recitation",
      "Practical exercises",
      "Expert guidance"
    ],
    icon: <Award className="w-8 h-8" />,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    isPopular: true
  },
  {
    id: 4,
    title: "Hifz-ul-Quran",
    subtitle: "Quran Memorization",
    description: "Complete Quran memorization program with proper Tajweed and understanding. Structured approach for successful Hifz.",
    duration: "2-5 years",
    level: "Advanced",
    features: [
      "Complete Quran memorization",
      "Proper Tajweed",
      "Regular revision",
      "Memorization techniques",
      "Progress tracking",
      "Certification upon completion"
    ],
    icon: <Heart className="w-8 h-8" />,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10"
  },
  {
    id: 5,
    title: "Tafseer & Translation",
    subtitle: "Quranic Understanding",
    description: "Deep dive into Quranic meanings, interpretations, and translations. Understand the wisdom and guidance of the Quran.",
    duration: "1-2 years",
    level: "Intermediate to Advanced",
    features: [
      "Verse-by-verse explanation",
      "Historical context",
      "Practical applications",
      "Islamic principles",
      "Contemporary relevance",
      "Interactive discussions"
    ],
    icon: <Globe className="w-8 h-8" />,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 6,
    title: "Quranic Arabic",
    subtitle: "Language Mastery",
    description: "Learn classical Arabic to understand the Quran directly. Master grammar, vocabulary, and linguistic nuances.",
    duration: "1-2 years",
    level: "Intermediate",
    features: [
      "Classical Arabic grammar",
      "Quranic vocabulary",
      "Linguistic analysis",
      "Translation skills",
      "Grammar exercises",
      "Practical applications"
    ],
    icon: <Users className="w-8 h-8" />,
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: 7,
    title: "Qirat",
    subtitle: "Recitation Styles",
    description: "Learn different styles of Quran recitation (Qirat). Master various authentic recitation methods.",
    duration: "1-2 years",
    level: "Advanced",
    features: [
      "Multiple Qirat styles",
      "Authentic methods",
      "Recitation variations",
      "Expert training",
      "Performance skills",
      "Certification"
    ],
    icon: <Star className="w-8 h-8" />,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10"
  },
  {
    id: 8,
    title: "Islamic Studies",
    subtitle: "Comprehensive Learning",
    description: "Complete Islamic education including Fiqh, Hadith, Islamic history, and character development.",
    duration: "1-3 years",
    level: "All Levels",
    features: [
      "Islamic principles",
      "Basic Fiqh",
      "Daily Sunnahs",
      "Character building",
      "Life skills",
      "Practical guidance"
    ],
    icon: <Monitor className="w-8 h-8" />,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10"
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-body-sm font-medium text-primary">Comprehensive Quranic Education</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Explore Our
              <span className="block text-secondary">
                Quranic Courses
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              From foundational Noorani Qaida to advanced Hifz and Tafseer, we offer comprehensive Quranic education 
              tailored for students of all ages and levels. Learn with expert teachers in a supportive environment.
            </p>

            {/* Course Stats */}
            <div className="bg-white rounded-2xl p-6 border border-primary/20 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-text-secondary">Specialized Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">13</div>
                  <div className="text-text-secondary">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-blue mb-2">350+</div>
                  <div className="text-text-secondary">Students Worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative bg-white rounded-3xl shadow-xl border border-primary/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                course.isPopular ? 'ring-2 ring-secondary/30' : ''
              }`}
            >
              {/* Popular Badge */}
              {course.isPopular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`${course.bgColor} p-6 border-b border-primary/10`}>
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 ${course.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                    <div className={course.color}>
                      {course.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary text-center mb-2">
                  {course.title}
                </h3>
                
                <p className="text-secondary font-semibold text-center mb-3">
                  {course.subtitle}
                </p>

                {/* Course Info */}
                <div className="flex justify-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {course.level}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    What You'll Learn
                  </h4>
                  <div className="space-y-2">
                    {course.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-xs text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {course.features.length > 4 && (
                      <div className="text-xs text-secondary font-medium">
                        +{course.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center pt-4 border-t border-primary/10">
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium text-sm transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl p-8 border border-primary/20 shadow-xl">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Special Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Kids Program</h3>
                <p className="text-sm text-text-secondary">Specialized courses for children aged 5-12</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Female Classes</h3>
                <p className="text-sm text-text-secondary">Separate batches with qualified female teachers</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Professional Classes</h3>
                <p className="text-sm text-text-secondary">Flexible schedules for working professionals</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-semibold text-primary mb-2">International Students</h3>
                <p className="text-sm text-text-secondary">Classes in English, Urdu, Tamil, Malayalam</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 border border-primary/20 shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Start Your Quranic Journey?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join our global community of 350+ students and transform your life through authentic Quranic education. 
              Start with a free trial class today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-secondary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enroll Now
              </Link>
              <Link
                href="/book-call"
                className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-2xl font-semibold hover:border-primary/40 transition-all duration-300"
              >
                Free Trial Class
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CoursesPage;
