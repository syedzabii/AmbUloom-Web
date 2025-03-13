// app/book-a-call/page.tsx
import React from "react";
import Link from "next/link";
import { CheckCircle, Phone, Calendar, BookOpen } from "lucide-react";

const BookACallPage = () => {
  return (
    <div className="min-h-screen bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-jakarta text-display-xl font-bold text-primary-dark mb-6">
            Book a Free 30-Minute Call
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Start your Quran learning journey today! Follow these simple steps
            to book a call with one of our expert tutors.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Contact Us */}
          <StepCard
            icon={<Phone className="w-8 h-8 text-primary" />}
            step="Step 1"
            title="Contact Us"
            description="Fill out the form below to let us know your preferences and availability."
          >
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg 
                          transition-all duration-200 shadow-button hover:shadow-button-hover
                          transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </StepCard>

          {/* Step 2: Free 30-Minute Call */}
          <StepCard
            icon={<Calendar className="w-8 h-8 text-primary" />}
            step="Step 2"
            title="Free 30-Minute Call"
            description="Schedule a free 30-minute call with your selected tutor to discuss your goals and preferences."
          >
            <div className="mt-6">
              <Link
                href="/schedule-call"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg 
                          transition-all duration-200 shadow-button hover:shadow-button-hover
                          transform hover:-translate-y-0.5 block text-center"
              >
                Schedule Call
              </Link>
            </div>
          </StepCard>

          {/* Step 3: Start Learning */}
          <StepCard
            icon={<BookOpen className="w-8 h-8 text-primary" />}
            step="Step 3"
            title="Start Learning!"
            description="Continue your Quran learning journey with your selected tutor by choosing a classroom plan."
          >
            <div className="mt-6">
              <Link
                href="/plans"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg 
                          transition-all duration-200 shadow-button hover:shadow-button-hover
                          transform hover:-translate-y-0.5 block text-center"
              >
                View Plans
              </Link>
            </div>
          </StepCard>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="font-jakarta text-display-lg font-bold text-primary-dark mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Join thousands of students who have transformed their lives through
            Quran learning. Book your free call today!
          </p>
          <Link
            href="/book-call"
            className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl 
                      transition-all duration-200 shadow-button hover:shadow-button-hover
                      transform hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
};

// StepCard Component
const StepCard = ({ icon, step, title, description, children }: any) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-200">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-full mb-6">
        {icon}
      </div>
      <span className="text-body-sm font-medium text-primary">{step}</span>
      <h3 className="font-jakarta text-display-sm font-bold text-primary-dark mb-4">
        {title}
      </h3>
      <p className="text-body-md text-text-secondary mb-6">{description}</p>
      {children}
    </div>
  );
};

export default BookACallPage;
