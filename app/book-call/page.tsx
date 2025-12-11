"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Users, 
  BookOpen, 
  Award,
  Heart,
  Star,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const BookCallPage = () => {
  const phoneNumber = "+91 82963 31365";
  
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning about your Quran courses. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const courseHighlights = [
    {
      title: "Noorani Qaida",
      description: "Foundation course for beginners",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Tajweed",
      description: "Advanced Quran recitation",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Hifz-ul-Quran",
      description: "Complete Quran memorization",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Tafseer",
      description: "Quranic understanding & translation",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <span className="text-body-sm font-medium text-primary">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Ready to Start Your
              <span className="block text-secondary">
                Quranic Journey?
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Contact us directly to discuss your Quran learning goals, course options, and get personalized guidance from our expert teachers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-primary/20 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-secondary px-8 py-6">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-white">
                Contact Us Directly
              </h2>
              <p className="text-blue-100 mt-1">
                Speak with our expert teachers today
              </p>
            </div>
          </div>

          {/* Contact Options */}
          <div className="p-8">
            {/* Phone Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Call Us Now
                </h3>
                <p className="text-text-secondary mb-6">
                  Click the number below to call us directly from your phone
                </p>
                
                <button
                  onClick={handlePhoneClick}
                  className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {phoneNumber}
                </button>
                
                <p className="text-sm text-text-secondary mt-3">
                  Available: Monday - Sunday, 9:00 AM - 9:00 PM IST
                </p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Or Message Us on WhatsApp
                </h3>
                <p className="text-text-secondary mb-6">
                  Send us a message for quick responses and course information
                </p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Us
                </button>
              </div>
            </motion.div>

            {/* What to Discuss */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-primary/5 rounded-2xl p-6 border border-primary/20"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                What to Discuss During Your Call
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Your current Quran knowledge level</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Preferred learning schedule</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Course recommendations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Fee structure & payment options</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Teacher preferences</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Free trial class scheduling</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl p-8 border border-primary/20 shadow-xl">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Explore Our Courses
            </h2>
            <p className="text-text-secondary text-center mb-8">
              Get familiar with our course offerings before your call. This will help you ask better questions and make informed decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseHighlights.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-secondary">
                      {course.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{course.title}</h3>
                  <p className="text-sm text-text-secondary">{course.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/courses"
                className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-2xl font-semibold hover:bg-primary/20 transition-all duration-300"
              >
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl p-8 border border-primary/20 shadow-xl">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Why Choose AMBAA UL ULOOM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Expert Teachers</h3>
                <p className="text-sm text-text-secondary">13 qualified teachers with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Global Community</h3>
                <p className="text-sm text-text-secondary">350+ students from around the world</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Flexible Learning</h3>
                <p className="text-sm text-text-secondary">Learn at your own pace and schedule</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BookCallPage;
