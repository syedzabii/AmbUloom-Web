"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Mail, 
  Star,
  BookOpen,
  Heart,
  Globe,
  Sparkles
} from "lucide-react";

interface Teacher {
  id: number;
  name: string;
  title: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  bio: string;
  specialFeatures?: string[];
  email?: string;
  isFounder?: boolean;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Muhammad Izzur Rahman",
    title: "Founder & CEO",
    qualifications: ["Hafiz-ul-Qur'an", "Expert Teacher", "Visionary Educator"],
    experience: "5 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Son of Hazrat Maulana Mufti Muhammad Atheeq ur Rahman Saheb (رحمه الله). Founder of AMBAA UL ULOOM, working to spread Qur'anic knowledge globally.",
    specialFeatures: ["Founder", "Leadership"],
    email: "ambaaululoom@gmail.com",
    isFounder: true
  },
  {
    id: 2,
    name: "Syed Ismail Zabihullah Saheb",
    title: "Qur'an Teacher",
    qualifications: ["Dedicated Qur'an Instructor"],
    experience: "Experienced",
    languages: ["Urdu", "English"],
    bio: "Helps manage class coordination and student support. Friendly, approachable, and loved by students for his guidance and sincerity.",
    specialFeatures: ["Student Support", "Coordination"]
  },
  {
    id: 3,
    name: "Hazrat Hafiz Muhammad Altamash",
    title: "Head of Kids Department",
    qualifications: ["Hafiz", "Kids Specialist"],
    experience: "4 Years of Experience",
    languages: ["Urdu", "Tamil", "Basic English"],
    bio: "Expert in nurturing young children in their early Qur'anic journey. Specializes in making learning fun and engaging for kids.",
    specialFeatures: ["Kids Specialist", "Early Education"]
  },
  {
    id: 4,
    name: "Hazrat Hafiz Qaari Tayyab Saheb",
    title: "Senior Qur'an & Tajweed Teacher",
    qualifications: ["Hafiz", "Qaari", "Tajweed Expert"],
    experience: "3 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Strong in Tajweed and Qira'at. Provides comprehensive guidance in proper Qur'anic recitation.",
    specialFeatures: ["Tajweed Expert", "Qira'at"]
  },
  {
    id: 5,
    name: "Hazrat Maulana Hafiz Qaari Muhammad Ubadah Saheb",
    title: "Qur'an & Advanced Tajweed Teacher",
    qualifications: ["Aalim", "Hafiz", "Qaari", "Advanced Tajweed"],
    experience: "3 Years of Experience",
    languages: ["Urdu", "English", "Tamil"],
    bio: "Aalim & Hafiz with mastery in Tajweed and Qira'at. Provides advanced level instruction in Qur'anic sciences.",
    specialFeatures: ["Aalim", "Advanced Tajweed", "Multi-lingual"]
  },
  {
    id: 6,
    name: "Hazrat Maulana Hafiz Huzaifa Saheb",
    title: "Senior Qur'an Teacher",
    qualifications: ["Maulana", "Hafiz", "Hifz Coach"],
    experience: "3 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Expert in Hifz coaching and spiritual motivation. Inspires students to connect deeply with the Qur'an.",
    specialFeatures: ["Hifz Coach", "Spiritual Motivation"]
  },
  {
    id: 7,
    name: "Hazrat Maulana Hafiz Qaari Mudassir Saheb Qasmi",
    title: "Senior Tajweed & Hifz Teacher",
    qualifications: ["Maulana", "Hafiz", "Qaari", "Darul Uloom Graduate"],
    experience: "5 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Graduate of Darul Uloom Qasmi. Disciplined, structured, and deeply knowledgeable in Islamic sciences.",
    specialFeatures: ["Darul Uloom Graduate", "Structured Teaching"]
  },
  {
    id: 8,
    name: "Hazrat Hafiz Muhammad Rumman Saheb",
    title: "Tajweed Expert & Qur'an Teacher",
    qualifications: ["Hafiz", "Tajweed Expert"],
    experience: "3 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Focuses on perfecting pronunciation and Tajweed fluency. Ensures students master the art of beautiful recitation.",
    specialFeatures: ["Pronunciation Expert", "Tajweed Mastery"]
  },
  {
    id: 9,
    name: "Hazrat Hafiz Usman Saheb",
    title: "Qur'an Teacher",
    qualifications: ["Hafiz", "Nazira Specialist"],
    experience: "2 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Effective with Nazira and beginner-level Hifz. Patient and encouraging approach for new learners.",
    specialFeatures: ["Nazira Specialist", "Beginner Friendly"]
  },
  {
    id: 10,
    name: "Hazrat Hafiz Arshad Saheb",
    title: "Qur'an & Hifz Teacher",
    qualifications: ["Hafiz", "Hifz Specialist"],
    experience: "4 Years of Experience",
    languages: ["Urdu", "English"],
    bio: "Structured Hifz revision and Tajweed guidance. Helps students maintain and perfect their memorization.",
    specialFeatures: ["Hifz Revision", "Structured Learning"]
  },
  {
    id: 11,
    name: "Hazrat Hafiz Abdullah Saheb",
    title: "Deeniyath Teacher",
    qualifications: ["Hafiz", "Islamic Character Building"],
    experience: "Experienced",
    languages: ["Urdu", "English"],
    bio: "Teaches Akhlaaq, Duas, and Islamic character building. Known for storytelling and practical guidance.",
    specialFeatures: ["Character Building", "Storytelling", "Practical Guidance"]
  },
  {
    id: 12,
    name: "Hazrat Hafiz Abu Baker Saheb",
    title: "Qur'an Teacher (Professional English Medium)",
    qualifications: ["Hafiz", "Professional English"],
    experience: "Experienced",
    languages: ["Professional English"],
    bio: "Fluent in professional English. Perfect for international and English-speaking students.",
    specialFeatures: ["Professional English", "International Students"]
  },
  {
    id: 13,
    name: "Hazrat Hafiz Ayan Irshad Saheb",
    title: "Qur'an & Tajweed Teacher",
    qualifications: ["Hafiz", "Tajweed Expert"],
    experience: "Experienced",
    languages: ["Malayalam", "English"],
    bio: "Tajweed Expert. Can teach in Malayalam and English. Clear, effective, and ideal for students from Kerala and South India.",
    specialFeatures: ["Malayalam Specialist", "South India Focus"]
  }
];

const languages = ["Urdu", "English", "Tamil", "Malayalam"];

export default function TeachersPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredTeachers = activeFilter
    ? teachers.filter((teacher) =>
        teacher.languages.includes(activeFilter) || 
        teacher.qualifications.some(q => q.toLowerCase().includes(activeFilter.toLowerCase()))
      )
    : teachers;

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
                         {/* <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
               <Sparkles className="w-5 h-5 text-primary mr-2" />
               <span className="text-body-sm font-medium text-primary">Our Esteemed Staff</span>
             </div> */}
             
             <h1 className="text-4xl py-4 lg:text-5xl font-bold text-primary mb-6 leading-tight">
               Meet Our
               <span className="block text-secondary">
                 Expert Teachers
               </span>
             </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              At <strong>AMBAA UL ULOOM</strong>, we are proud of our team of <strong>Ulama, Huffaz, Quraa, and expert teachers</strong> who guide students with love, sincerity, and discipline. With fluency in multiple languages and strong spiritual backgrounds, our teachers are the heart of our mission.
            </p>

                         {/* Language Coverage */}
             <div className="bg-white rounded-2xl p-6 border border-primary/20 shadow-xl">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2" />
                Languages Covered by Our Staff
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    🗣 {language}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105
                      ${
                        !activeFilter
                          ? "bg-secondary text-white shadow-lg"
                          : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40"
                      }`}
          >
            All Teachers
          </button>

          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setActiveFilter(language)}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105
                        ${
                          activeFilter === language
                            ? "bg-secondary text-white shadow-lg"
                            : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40"
                        }`}
            >
              {language}
            </button>
          ))}
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
                             className={`group relative bg-white rounded-3xl shadow-xl border border-primary/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                 teacher.isFounder ? 'ring-2 ring-secondary/30' : ''
               }`}
            >
              {/* Founder Badge */}
              {teacher.isFounder && (
                <div className="absolute top-4 right-4 z-10">
                                   <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                   ✨ Founder
                 </div>
                </div>
              )}

                             {/* Header */}
               <div className="bg-primary/5 p-6 border-b border-primary/10">
                 <div className="flex items-center justify-center mb-4">
                   <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                     <GraduationCap className="w-10 h-10 text-white" />
                   </div>
                 </div>
                
                <h3 className="text-xl font-bold text-primary text-center mb-2">
                  {teacher.name}
                </h3>
                
                <p className="text-secondary font-semibold text-center mb-3">
                  {teacher.title}
                </p>

                {/* Qualifications */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {teacher.qualifications.map((qual) => (
                    <span
                      key={qual}
                      className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                    >
                      <Award className="w-3 h-3 mr-1" />
                      {qual}
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <div className="flex items-center justify-center text-sm text-text-secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  {teacher.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Languages */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.languages.map((lang) => (
                      <span
                        key={lang}
                        className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                      >
                        🗣 {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {teacher.bio}
                </p>

                {/* Special Features */}
                {teacher.specialFeatures && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-lg text-xs font-medium"
                        >
                          <Heart className="w-3 h-3 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Email */}
                {teacher.email && (
                  <div className="flex items-center justify-center pt-4 border-t border-primary/10">
                    <a
                      href={`mailto:${teacher.email}`}
                      className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredTeachers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
                         <div className="bg-white rounded-3xl p-8 border border-primary/20 shadow-xl max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-primary mb-2">No Teachers Found</h3>
              <p className="text-text-secondary mb-6">
                No teachers found with the selected criteria.
              </p>
              <button
                onClick={() => setActiveFilter(null)}
                                 className="px-6 py-3 bg-secondary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Teachers
              </button>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
