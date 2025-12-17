// app/register/page.tsx
"use client";

import { useState, useRef } from "react";
import {
  BookOpen,
  Check,
  ChevronsRight,
  Users,
  GraduationCap,
  Loader2,
  Sparkles,
  Star,
  Heart,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiClient } from "@/services/api-client";

// Define form data interface
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  course: string;
  remarks?: string;
  termsAccepted: boolean;
}



// Pre-calculated positions for orbiting course cards to avoid hydration mismatches
const coursePositions = [
  { top: "40%", left: "65%" },   // index 0: 0 degrees
  { top: "61.65%", left: "27.5%" }, // index 1: 120 degrees
  { top: "18.35%", left: "27.5%" }, // index 2: 240 degrees
];

const courses = [
  {
    id: "noorani",
    title: "Noorani Qaida",
    description: "Master the fundamentals",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "nazeera",
    title: "Nazeera",
    description: "Learn Tajweed rules",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "hifz",
    title: "Hifz",
    description: "Memorize the Quran",
    icon: GraduationCap,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
];



export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const setCookie = async () => {
    try {
      const response = await fetch("/api/register", { method: "POST" });
      
      if (!response.ok) {
        console.error("Failed to set cookie:", response.statusText);
        return;
      }
      
      // Read the response to ensure the request completes
      await response.json();
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = formRef.current;
      if (!form) return;

      const formData: RegisterFormData = {
        firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
          .value,
        lastName: (form.elements.namedItem("lastName") as HTMLInputElement)
          .value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        age: parseInt(
          (form.elements.namedItem("age") as HTMLInputElement).value
        ),
        gender: (form.elements.namedItem("gender") as HTMLSelectElement).value,
        course: selectedCourse,
        remarks: (form.elements.namedItem("remarks") as HTMLTextAreaElement)
          .value,
        termsAccepted: true,
      };

      console.log("Form submission data:", formData);

      // Send form data to the backend API
      const response = await apiClient.post("/applicant/register", formData);

      if (response.status === 201) {
        // Handle successful registration
        console.log("Registration successful:", response.data);
        await setCookie(); // Set cookie if needed
        // Store student name for success page
        localStorage.setItem("studentName", `${formData.firstName} ${formData.lastName}`);
        // Redirect based on age (same logic as admission form)
        router.push(formData.age > 17 ? "/success" : "/success-kids");
      } else {
        // Handle unexpected response
        console.error("Unexpected response:", response);
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (show error message, etc.)
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Hero Section */}
          <div className="lg:sticky lg:top-8">
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-primary mr-2" />
                <span className="text-body-sm font-medium text-primary">Start Your Journey Today</span>
              </div>
              
              <h1 className="title-hero text-primary mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-secondary to-accent-blue bg-clip-text text-transparent">
                  Spiritual Learning
                </span>
              </h1>


              {/* Stats */}
             
            </div>

            {/* Animated Illustration */}
            <div className="relative hidden lg:block mt-12">
              <div className="relative w-full h-80 flex items-center justify-center">
                {/* Central Element */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-2xl flex items-center justify-center animate-pulse">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Orbiting Course Cards */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  {courses.map((course, index) => (
                    <div
                      key={course.id}
                      className="absolute"
                      style={{
                        top: coursePositions[index].top,
                        left: coursePositions[index].left,
                      }}
                    >
                      <div className={`w-16 h-16 ${course.bgColor} rounded-2xl shadow-lg flex items-center justify-center border-2 border-white/20 backdrop-blur-sm`}>
                        <course.icon className={`w-8 h-8 ${course.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Background Decorative Dots */}
                <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce"
                    style={{
                      top: `${20 + (i * 15)}%`,
                      left: `${10 + (i * 12)}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i + 6}
                    className="absolute w-2 h-2 bg-secondary/20 rounded-full animate-bounce"
                    style={{
                      top: `${30 + (i * 12)}%`,
                      right: `${15 + (i * 10)}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
              </div>

            <div className="grid grid-cols-3 gap-6 mt-40">
                <div className="text-center">
                  <div className="text-display-md font-bold text-primary mb-1">1000+</div>
                  <div className="text-body-sm text-text-secondary">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-display-md font-bold text-secondary mb-1">50+</div>
                  <div className="text-body-sm text-text-secondary">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-display-md font-bold text-accent-blue mb-1">24/7</div>
                  <div className="text-body-sm text-text-secondary">Support</div>
                </div>
              </div>
            </div>

              <p className="text-body-xl text-text-secondary max-w-2xl mt-8">
                Join thousands of students in their journey to master Islamic knowledge. 
                Choose your path and begin learning with expert guidance.
              </p>
      </div>

          {/* Form Section */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-display-lg text-primary mb-2">Join Our Community</h2>
                <p className="text-body-md text-text-secondary">Fill out the form below to begin your learning journey</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-body-sm font-semibold text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                             transition-all duration-200 placeholder:text-text-tertiary"
                  />
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      min="5"
                      max="100"
                      required
                      placeholder="Your age"
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary">
                      Gender
                    </label>
                    <select
                      name="gender"
                      required
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 text-text-primary"
                    >
                      <option value="" className="text-text-tertiary">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-4">
                  <label className="text-body-sm font-semibold text-primary">
                    Choose Your Learning Path
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => setSelectedCourse(course.id)}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left
                                  transform hover:scale-105 hover:shadow-lg group
                                  ${
                                    selectedCourse === course.id
                                      ? `${course.bgColor} shadow-lg scale-105`
                                      : "border-primary/10 bg-white/30 hover:border-primary/30"
                                  }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                                        ${selectedCourse === course.id 
                                          ? `bg-gradient-to-r ${course.color}` 
                                          : 'bg-primary/10 group-hover:bg-primary/20'
                                        } transition-all duration-300`}>
                            <course.icon
                              className={`w-8 h-8 ${
                                selectedCourse === course.id
                                  ? "text-white"
                                  : "text-primary"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-body-lg font-bold text-primary mb-1">
                              {course.title}
                            </h3>
                            <p className="text-body-sm text-text-secondary">
                              {course.description}
                            </p>
                          </div>
                          {selectedCourse === course.id && (
                            <div className="absolute top-4 right-4">
                              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Remarks Field */}
                <div className="space-y-2">
                  <label className="text-body-sm font-semibold text-primary">
                    Additional Notes
                  </label>
                  <textarea
                    name="remarks"
                    placeholder="Any questions or special requirements? (Optional)"
                    className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                             transition-all duration-200 placeholder:text-text-tertiary resize-none"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !selectedCourse}
                  className="w-full bg-gradient-to-r from-secondary to-secondary-light 
                           hover:from-secondary-dark hover:to-secondary text-white font-bold
                           py-5 rounded-2xl transition-all duration-300 shadow-2xl 
                           hover:shadow-3xl transform hover:-translate-y-1
                           flex items-center justify-center space-x-3
                           disabled:opacity-50 disabled:cursor-not-allowed
                           disabled:transform-none disabled:shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span className="text-body-lg">Processing your enrollment...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-body-lg">Begin Your Journey</span>
                      <ChevronsRight className="w-6 h-6" />
                    </>
                  )}
                </button>

                {/* Login Link */}
                <div className="text-center pt-4 border-t border-primary/10">
                  <p className="text-body-sm text-text-secondary">
                    Already part of our community?{" "}
                    <Link 
                      href="/login" 
                      className="text-primary hover:text-primary-dark font-medium hover:underline transition-colors"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}