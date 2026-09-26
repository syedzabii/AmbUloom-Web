"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  timeAgo: string;
  text: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Altaf Yousuf Khan",
    role: "Engineer / Adult Learner",
    timeAgo: "2 months ago",
    text: "As an engineer, I truly appreciate AMBAA UL ULOOM's structured teaching approach and professionalism. The one-to-one classes, qualified teachers, and focus on proper Tajweed have made learning the Quran easy and effective, even with a busy schedule. I highly recommend it to anyone looking for quality online Quran education.",
    initials: "AK",
    rating: 5,
  },
  {
    name: "Shoa Kh",
    role: "Arabic & Islamic Studies Student",
    timeAgo: "3 months ago",
    text: "I highly recommend this institution to anyone looking to learn Arabic and deepen their understanding of Islam. The teaching methods here are exceptional and highly effective, and the staff is incredibly friendly, creating a warm and welcoming environment.",
    initials: "SK",
    rating: 5,
  },
  {
    name: "Ummusuada",
    role: "Verified Parent",
    timeAgo: "3 months ago",
    text: "My son has been learning at AMBAA UL ULOOM, and we are very happy with his progress. The teachers are kind, patient, and highly qualified. The online classes are well organized, and I highly recommend this institute for online Quran learning.",
    initials: "US",
    rating: 5,
  },
  {
    name: "Mohammed Althamash",
    role: "Verified Student",
    timeAgo: "3 months ago",
    text: "⭐⭐⭐⭐⭐ Excellent Online Madrasa! AMBAA UL ULOOM is an excellent online madrasa with dedicated teachers, structured lessons, and an inspiring learning atmosphere.",
    initials: "MA",
    rating: 5,
  },
  {
    name: "Mureeha Misaad",
    role: "Verified Student",
    timeAgo: "3 months ago",
    text: "A trustworthy institute for learning the Quran with qualified teachers, flexible timings, and personalized 1-on-1 attention.",
    initials: "MM",
    rating: 5,
  },
  {
    name: "TAMEEM AADIL",
    role: "Verified Student",
    timeAgo: "2 months ago",
    text: "Highly specialized instructors... personalized attention and deep understanding of Quranic teachings.",
    initials: "TA",
    rating: 5,
  },
  {
    name: "Muslimology",
    role: "Verified Student",
    timeAgo: "3 months ago",
    text: "Best online madrasa, best teachers.. Exceptional 1-on-1 guidance and authentic learning environment.",
    initials: "MU",
    rating: 5,
  },
  {
    name: "Md Wasim",
    role: "Verified Student",
    timeAgo: "Recent",
    text: "Alhamdulillah! Experience was good learning Qur'an with dedicated and patient instructors.",
    initials: "MW",
    rating: 5,
  },
  {
    name: "Shaikh Azhan",
    role: "Verified Student",
    timeAgo: "Recent",
    text: "Nice place for online Quran learning with highly qualified scholars and convenient schedules.",
    initials: "SA",
    rating: 5,
  },
];

// Duplicate for seamless infinite marquee scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function SocialProof() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pattern-islamic mix-blend-overlay pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-primary-dark to-transparent opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-6 shadow-sm"
          >
            {/* Google G Icon SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white/90">
              5.0 Google Reviews • Real Student & Parent Feedback
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mb-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Trusted by Students & Parents Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg"
          >
            Read authentic reviews from professionals, parents, and students who study 1-on-1 with AMBAA UL ULOOM.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Carousel */}
      <div className="relative w-full overflow-hidden flex pb-10">
        {/* Fade gradients on side edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll-x gap-6 px-6">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gold/80 font-medium flex items-center gap-1 bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">
                    <CheckCircle2 className="w-3 h-3 text-gold" /> Google Review
                  </span>
                </div>

                <Quote className="w-7 h-7 text-gold/40 mb-3 group-hover:text-gold/70 transition-colors" />
                
                <p className="text-white/90 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10 mt-auto">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C8972A] to-[#966d1a] flex items-center justify-center font-display font-bold text-primary-dark text-base border-2 border-white/20 shrink-0 shadow-md">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-display m-0 flex items-center gap-1.5">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gold/80 m-0 font-medium">
                    {testimonial.role} • <span className="text-white/50">{testimonial.timeAgo}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Reach Trust Strip */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-widest mb-6 font-semibold">
            Empowering 1-on-1 Students Across the Globe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 opacity-70">
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇺🇸 USA</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇬🇧 UK</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇨🇦 Canada</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇦🇺 Australia</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇦🇪 UAE</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇮🇳 India</span>
            <span className="font-display text-lg sm:text-2xl font-bold hover:text-gold transition-colors">🇸🇦 Saudi Arabia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
