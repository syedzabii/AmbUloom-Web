"use client";

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Who can join your online Quran classes?",
      answer: "Our classes are open to everyone — kids, adults, and seniors! Whether you're a beginner or want to advance your Quranic knowledge, we have a course for you."
    },
    {
      id: 2,
      question: "What courses do you offer?",
      answer: (
        <div>
          We offer a wide range of Quranic courses including:
          <ul className="list-disc pl-5 mt-3 space-y-2 text-text-muted">
            <li>Noorani Qaida</li>
            <li>Nazirah Quran</li>
            <li>Tajweed (basic to advanced)</li>
            <li>Hifz-ul-Quran (memorization)</li>
            <li>Tafseer & Quran Translation</li>
            <li>Quranic Arabic</li>
            <li>Qirat and more!</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      question: "Are the classes live or pre-recorded?",
      answer: "All our classes are conducted live, one-on-one or in small groups — ensuring personalized attention and interaction with the teacher."
    },
    {
      id: 4,
      question: "Can I choose the timing of the classes?",
      answer: "Yes! We offer flexible scheduling to suit your time zone and availability — including weekends and evenings."
    },
    {
      id: 5,
      question: "Do you have female teachers for sisters and children?",
      answer: "Absolutely! We have qualified and experienced female teachers for sisters and children upon request."
    },
    {
      id: 6,
      question: "What language are the classes conducted in?",
      answer: "We teach in English, Urdu, and Arabic, depending on the student's preference."
    },
    {
      id: 7,
      question: "How do I join the classes?",
      answer: "It's simple! You just need a smartphone, tablet, or computer with a stable internet connection. We'll guide you step-by-step during registration."
    },
    {
      id: 8,
      question: "Is there a free trial class available?",
      answer: "Yes! We offer a free trial class so you can experience our teaching style before enrolling."
    },
    {
      id: 9,
      question: "What is the monthly fee for your classes?",
      answer: "Our pricing is affordable and varies depending on the course and class duration. Contact us directly for detailed fee plans."
    },
    {
      id: 10,
      question: "How do I enroll?",
      answer: "You can register by messaging us on WhatsApp, filling out our online form, or calling our support team — we're here to help!"
    }
  ];

  return (
    <section className="py-24 bg-background relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Support & Info
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            Find answers to common questions about our platform and classes.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === faq.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={faq.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-gold/50 shadow-glow-sm' : 'border-black/5 hover:border-gold/30'}`}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-6 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className={`font-semibold text-lg font-display transition-colors ${isOpen ? 'text-gold' : 'text-primary group-hover:text-primary-light'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${isOpen ? 'bg-gold/10 border-gold/30 text-gold' : 'bg-primary/5 border-transparent text-primary group-hover:bg-primary/10'}`}
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-black/5 mt-2">
                        <div className="text-text-muted leading-relaxed pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}