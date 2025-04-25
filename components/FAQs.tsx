import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Noorani Qaida</li>
            <li>Nazra Quran</li>
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
    <section className="py-16 bg-background-secondary font-jakarta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display-md font-bold text-primary-dark mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-text-secondary">
            About AMBAA UL ULOOM Online Quran Classes
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-primary-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className={`flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none transition-colors duration-200 ${
                  openFAQ === faq.id ? 'bg-primary-50' : 'bg-white hover:bg-primary-50/50'
                }`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="font-medium text-text-primary flex items-center">
                  <span className="text-secondary-DEFAULT mr-3 font-semibold">📌</span>
                  <span className={`${openFAQ === faq.id ? 'text-primary-DEFAULT font-semibold' : ''}`}>
                    {faq.question}
                  </span>
                </span>
                <div className={`rounded-full p-1 ${openFAQ === faq.id ? 'bg-primary-100 text-primary-DEFAULT' : 'text-text-tertiary'}`}>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div 
                  className="px-6 py-5 bg-white border-t border-primary-100"
                  style={{ boxShadow: 'inset 0 3px 6px -3px rgba(0,0,0,0.1)' }}
                >
                  <div className="text-text-secondary text-body-md leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}