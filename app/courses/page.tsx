// app/courses/page.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, Users, Monitor, GraduationCap } from "lucide-react";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-jakarta text-display-xl font-bold text-primary-dark mb-6">
            Explore Our Courses
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Tailored courses for students of all ages, female students with
            female teachers, and busy professionals. Start your Quran learning
            journey today!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course for Kids */}
          <CourseCard
            icon={<BookOpen className="w-8 h-8 text-primary" />}
            title="Quran for Kids"
            description="Engaging and interactive Quran lessons designed for children aged 5-12. Focus on Noorani Qaida, Tajweed, and memorization."
            link="/courses/kids"
          />

          {/* Course for Teens */}
          <CourseCard
            icon={<GraduationCap className="w-8 h-8 text-primary" />}
            title="Quran for Teens"
            description="Structured courses for teenagers to deepen their understanding of the Quran, Tajweed, and Islamic studies."
            link="/courses/teens"
          />

          {/* Course for Adults */}
          <CourseCard
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Quran for Adults"
            description="Comprehensive courses for adults to learn Quran recitation, Tajweed, and Tafsir at their own pace."
            link="/courses/adults"
          />

          {/* Course for Females with Female Teachers */}
          <CourseCard
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Female-Only Classes"
            description="Exclusive classes for female students taught by qualified female teachers. Learn in a comfortable and supportive environment."
            link="/courses/female-only"
          />

          {/* Course for Software Professionals */}
          <CourseCard
            icon={<Monitor className="w-8 h-8 text-primary" />}
            title="Quran for Professionals"
            description="Flexible Quran courses designed for busy professionals. Learn at your convenience with customized schedules."
            link="/courses/professionals"
          />

          {/* Course for Hifz Program */}
          <CourseCard
            icon={<BookOpen className="w-8 h-8 text-primary" />}
            title="Hifz Program"
            description="Structured Hifz program to help students memorize the Quran with proper Tajweed and understanding."
            link="/courses/hifz"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="font-jakarta text-display-lg font-bold text-primary-dark mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Join thousands of students who have transformed their lives through
            Quran learning. Enroll today!
          </p>
          <Link
            href="/register"
            className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl 
                      transition-all duration-200 shadow-button hover:shadow-button-hover
                      transform hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// CourseCard Component
const CourseCard = ({ icon, title, description, link }: any) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-200">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="font-jakarta text-display-sm font-bold text-primary-dark mb-4">
        {title}
      </h3>
      <p className="text-body-md text-text-secondary mb-6">{description}</p>
      <Link
        href={link}
        className="text-primary hover:text-primary-dark font-medium transition-colors duration-200"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default CoursesPage;
