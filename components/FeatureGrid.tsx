"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Video, Heart, Globe2, BookOpenCheck } from "lucide-react";

const features = [
  {
    title: "Flexible Schedule",
    description: "Learn at your own pace with 24/7 availability. Book classes that fit your daily routine without compromise.",
    icon: Clock,
    colSpan: "md:col-span-2 lg:col-span-1",
    bgColor: "bg-primary/5",
  },
  {
    title: "Expert Certified Teachers",
    description: "Our instructors are carefully vetted, Ijazah-certified scholars dedicated to traditional and authentic learning.",
    icon: BookOpenCheck,
    colSpan: "md:col-span-2 lg:col-span-2",
    bgColor: "bg-primary text-white",
    iconColor: "text-gold",
    textColor: "text-white/80"
  },
  {
    title: "Live Interactive Classes",
    description: "1-on-1 personalized sessions ensuring focused attention and precise Tajweed correction.",
    icon: Video,
    colSpan: "md:col-span-2 lg:col-span-2",
    bgColor: "bg-white",
  },
  {
    title: "Safe Environment",
    description: "A secure, monitored platform prioritizing the safety and comfort of younger students.",
    icon: ShieldCheck,
    colSpan: "md:col-span-1 lg:col-span-1",
    bgColor: "bg-gold/10",
  },
  {
    title: "Female Teachers",
    description: "Dedicated qualified female instructors available for sisters and children.",
    icon: Heart,
    colSpan: "md:col-span-1 lg:col-span-1",
    bgColor: "bg-primary/5",
  },
  {
    title: "Native Language Support",
    description: "Instructors fluent in English, Urdu, Arabic, and more to bridge the communication gap.",
    icon: Globe2,
    colSpan: "md:col-span-2 lg:col-span-2",
    bgColor: "bg-white",
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display"
          >
            A Premium Foundation for<br />Sacred Knowledge
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            We combine the structure of a traditional madrasa with the flexibility of a modern platform to provide an unparalleled learning experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Check specifically for the dark background class, carefully excluding /5 opacity variants
            const isDark = feature.bgColor === 'bg-primary text-white';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative group overflow-hidden rounded-3xl p-8 border border-black/5 hover:border-gold/30 hover:shadow-glow transition-all duration-300 ${feature.colSpan} ${feature.bgColor} flex flex-col justify-between`}
              >
                {/* Decorative Pattern overlay on dark cards */}
                {isDark && (
                  <div className="absolute inset-0 opacity-10 pattern-islamic mix-blend-overlay"></div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 
                  ${isDark ? 'bg-white/10' : 'bg-white shadow-sm border border-black/5 group-hover:border-gold/20'} 
                  transition-colors`}
                >
                  <Icon className={`w-7 h-7 ${feature.iconColor || (isDark ? 'text-white' : 'text-primary')}`} />
                </div>
                
                <div className="relative z-10 mt-auto pt-6">
                  <h3 className={`text-xl font-bold mb-2 font-display ${isDark ? 'text-white' : 'text-primary'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${feature.textColor || (isDark ? 'text-white/80' : 'text-text-muted')} leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/0 group-hover:ring-gold/20 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
