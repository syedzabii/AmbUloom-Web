"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StudentBanner from "../components/StudentBanner";
import BenefitsSection from "../components/BenefitsSection"; 
import FAQs from "../components/FAQs";

export default function Home() {
  return (
    <div className="min-h-screen mt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-jakarta text-display-lg lg:text-display-xl font-bold text-primary-dark">
                Learn Quran Online
                <span className="block text-secondary mt-2">
                  Anytime, Anywhere
                </span>
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary max-w-2xl font-inter">
                Join our online Quran learning platform with expert teachers.
                Start your journey with Noorani Qaida, Nazeera, or Hifz courses.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-3 text-body-md font-medium text-white 
                           bg-secondary hover:bg-secondary-dark rounded-xl shadow-button hover:shadow-button-hover 
                           transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Sign up as Student
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-3 text-body-md font-medium 
                           text-primary-dark bg-white border-2 border-primary hover:bg-primary-50 
                           rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Sign up as Teacher
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image 
                src="/images/Ambaimage.png" 
                alt="Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Banner Section */}
      <StudentBanner />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Course Path Section */}
      {/* <CoursePath /> */}
      <FAQs/>
    </div>
  );
}
