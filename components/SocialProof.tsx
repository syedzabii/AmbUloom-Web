"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "United Kingdom",
    text: "The patience and dedication of the teachers here is unparalleled. My children look forward to their Quran classes every single day. Truly a blessing for our family.",
    initials: "SA"
  },
  {
    name: "Tariq Mahmood",
    location: "United States",
    text: "I started learning Tajweed as an adult, and the structured approach made it so accessible. The interactive portal and flexible scheduling allow me to balance work and learning.",
    initials: "TM"
  },
  {
    name: "Fatima Ali",
    location: "Canada",
    text: "Having a female teacher who understands the nuances of Tajweed has been incredible. The safety and professionalism of the platform gives me complete peace of mind.",
    initials: "FA"
  },
  // {
  //   name: "Omar Farooq",
  //   location: "Australia",
  //   text: "We tried local weekend madrasas but the 1-on-1 attention here changed everything. My son's Hifz progress has doubled in just three months.",
  //   initials: "OF"
  // },
  // {
  //   name: "Omar Farooq",
  //   location: "Australia",
  //   text: "We tried local weekend madrasas but the 1-on-1 attention here changed everything. My son's Hifz progress has doubled in just three months.",
  //   initials: "OF"
  // }
];

// Double the array for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function SocialProof() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pattern-islamic mix-blend-overlay pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-primary-dark to-transparent opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-6"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-gold">4.9/5 Average Rating</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mb-6 text-white"
          >
            Trusted by Families Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Hear from our global community of learners who have transformed their relationship with the Quran.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full overflow-hidden flex pb-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll-x gap-6 px-6">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold/50 mb-6" />
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-display font-bold text-primary-dark text-lg border-2 border-primary-dark shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base m-0 font-display">{testimonial.name}</h4>
                  <p className="text-xs text-gold/80 m-0">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="mt-20 border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-6 font-medium">Empowering students across the globe</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Representing global reach textually or with icons since flags demand images */}
            <span className="font-display text-xl md:text-2xl font-semibold opacity-80 hover:opacity-100 transition-opacity">USA</span>
            <span className="font-display text-xl md:text-2xl font-semibold opacity-80 hover:opacity-100 transition-opacity">UK</span>
            <span className="font-display text-xl md:text-2xl font-semibold opacity-80 hover:opacity-100 transition-opacity">Canada</span>
            <span className="font-display text-xl md:text-2xl font-semibold opacity-80 hover:opacity-100 transition-opacity">Australia</span>
            <span className="font-display text-xl md:text-2xl font-semibold opacity-80 hover:opacity-100 transition-opacity">UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
