import { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

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

  const visibleFAQs = showAllFAQs ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about AMBAA UL ULOOM Online Quran Classes
          </p>
        </div>
        
        <div className="space-y-4">
          {visibleFAQs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md border-l-4 border-emerald-500 transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="font-medium text-gray-800 flex items-center">
                  <span className="text-emerald-600 mr-3">
                    {openFAQ === faq.id ? 
                      <Minus className="h-5 w-5" /> : 
                      <Plus className="h-5 w-5" />
                    }
                  </span>
                  <span className={`${openFAQ === faq.id ? 'text-emerald-700 font-semibold' : ''}`}>
                    {faq.question}
                  </span>
                </span>
              </button>
              
              {openFAQ === faq.id && (
                <div 
                  className="px-6 py-5 bg-white border-t border-gray-100"
                >
                  <div className="text-gray-600 leading-relaxed pl-8">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!showAllFAQs && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllFAQs(true)}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-300 flex items-center mx-auto"
              >
                <span>Show More Questions</span>
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
          
          {showAllFAQs && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllFAQs(false)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-300 flex items-center mx-auto"
              >
                <span>Show Less</span>
                <ChevronUp className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}