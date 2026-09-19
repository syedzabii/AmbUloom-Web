"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Award, Calendar, CheckCircle, ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-islamic mix-blend-overlay"></div>
        {/* Soft Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8"
          >
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold tracking-wide uppercase">Our Heritage & Vision</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            About AMBAA UL ULOOM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/80 font-body leading-relaxed"
          >
            Illuminating lives with the timeless wisdom of the Qur'an—transforming hearts and minds one ayah at a time.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed font-body">
                <p>
                  AMBAA UL ULOOM was founded in 2021 by Muhammed Izzur Rahman alongside two friends—Syed Ismail Zabiulla and Muhammed Waseem. 
                  This humble beginning took root under the loving care and spiritual patronage of our father, <span className="font-semibold text-primary">Hazrath Maulana Mufti Muhammed Atheeq ur Rahman Saheb (رحمه الله)</span>—the esteemed Founder and Principal of <span className="font-semibold text-primary">Madrasa al-Kulliya Tus Sawoodiya</span>.
                </p>
                <p>
                  What began as a small initiative has now blossomed into a global community of learners, united by their love for the Qur'an and dedication to authentic Islamic knowledge.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-black/5 shadow-2xl flex items-center justify-center bg-[#F5F0E8]"
            >
              <div className="absolute inset-0 z-0 opacity-5 pattern-islamic animate-drift"></div>
              <div className="relative w-64 h-64 z-10 drop-shadow-2xl">
                 <Image src="/images/ambaimage.png" alt="Ambaa Ul Uloom Heritage" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-background border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Globe className="h-10 w-10 text-gold mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Growth & Global Reach</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
               <div className="text-5xl font-display font-bold text-gold mb-4">350+</div>
               <h3 className="text-xl font-bold text-primary mb-2">Students Worldwide</h3>
               <p className="text-text-muted">A dedicated global community of learners dedicated to the Holy Quran.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
               <div className="text-2xl font-display font-bold text-primary mb-4 mt-4">Global Presence</div>
               <p className="text-text-muted">Currently active across India, Qatar, UAE (Dubai, Sharjah), Oman, Canada, and expanding further.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
               <div className="text-2xl font-display font-bold text-primary mb-4 mt-4">Diverse Community</div>
               <p className="text-text-muted">Supporting students of all ages including professionals, entrepreneurs, kids, and families.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-6 border-l-4 border-gold shadow-sm flex items-start gap-4 max-w-4xl mx-auto"
          >
            <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
            <p className="text-text-primary">
              <strong className="text-primary font-bold">Special Consideration:</strong> We provide separate female batches led by qualified female teachers to ensure an appropriate and comfortable Islamic learning environment for sisters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty & Curriculum */}
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BookOpen className="h-10 w-10 text-gold mb-4 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Expert Faculty & Comprehensive Curriculum</h2>
            <p className="text-lg text-text-muted">
              Our team consists of 13 dedicated teachers, each an expert in their respective field of Islamic knowledge, deeply rooted in authentic scholarship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-3xl p-10 border border-black/5 hover:border-gold/30 transition-colors group"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">1</span>
                Qur'anic Studies
              </h3>
              <ul className="space-y-4">
                {[
                  "Qaida (Foundational Learning)",
                  "Naazirah (Proper Recitation)",
                  "Hifz (Memorization)",
                  "Tafseer (Qur'anic Exegesis)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted group-hover:text-text-primary transition-colors">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-3xl p-10 border border-black/5 hover:border-gold/30 transition-colors group"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">2</span>
                Islamic Studies
              </h3>
              <ul className="space-y-4">
                {[
                  "Arabic Language Classes",
                  "Personality Development & Life Skills",
                  "Islamic Principles & Basic Fiqh",
                  "Daily Sunnahs & Ādāb (Etiquettes)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted group-hover:text-text-primary transition-colors">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Platform & Student Support */}
      <section className="py-24 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-5 pattern-islamic mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Digital Platform & Support</h2>
            <p className="text-lg text-white/70">
              We've developed a custom website and mobile app that creates a seamless learning experience available 24/7, allowing you to learn anytime, anywhere.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "For Students",
                desc: "Access syllabi, lesson recordings, and interactive exercises at your fingertips.",
                icon: BookOpen
              },
              {
                title: "For Parents",
                desc: "Monitor attendance, monthly reports, and track robust exam results seamlessly.",
                icon: Users
              },
              {
                title: "For Teachers",
                desc: "Update attendance and submit performance reports in real time efficiently.",
                icon: Award
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6 border border-gold/30">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <Award className="h-10 w-10 text-gold mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Community Engagement</h2>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 bg-background p-8 rounded-3xl border border-black/5 hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gold/20 shadow-sm flex items-center justify-center shrink-0">
                  <Calendar className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary mb-3 group-hover:text-gold transition-colors">Weekly Saturday Seminars</h3>
                  <p className="text-text-muted leading-relaxed">Each week, a rotating student leads a seminar on a chosen Islamic topic, helping develop confidence, public speaking skills, and deeper knowledge within the community.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-background p-8 rounded-3xl border border-black/5 hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gold/20 shadow-sm flex items-center justify-center shrink-0">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary mb-3 group-hover:text-gold transition-colors">Recognition & Certification</h3>
                  <p className="text-text-muted leading-relaxed">We offer monthly "Best Seminar" awards and formal certification for successful completion of Qaida, Qur'an, Hifz, and Dua-Masā'il exams, inspiring continued excellence.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessible Education",
                desc: "We believe Islamic knowledge should be available to all. We maintain affordable fees to remove financial barriers to learning.",
                icon: BookOpen
              },
              {
                title: "Global Impact",
                desc: "We are committed to spreading authentic Islamic knowledge across all ages, backgrounds, and cultures worldwide.",
                icon: Globe
              },
              {
                title: "Excellence & Integrity",
                desc: "We uphold the highest standards of scholarship under our scholars' guidance, ensuring authentic knowledge is preserved.",
                icon: Award
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-black/5 text-center shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-background border border-gold/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-gold" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-4">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pattern-islamic"></div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">Join Our Growing Family</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              By the grace of Allah, AMBAA UL ULOOM continues to illuminate lives with the timeless wisdom of the Qur'an. Embark on your journey of knowledge today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={() => {router.push('/register')}} 
                className="bg-gold hover:bg-[#b58825] text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
              <Link 
                href="/book-call" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                 <PlayCircle className="w-5 h-5" /> Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}