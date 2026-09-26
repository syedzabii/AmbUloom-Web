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
  email?: string;
  phone: string;
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

      const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
      const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
      const rawGender = (form.elements.namedItem("gender") as HTMLSelectElement).value;
      const gender = rawGender ? rawGender.charAt(0).toUpperCase() + rawGender.slice(1) : "Male";
      const emailVal = (form.elements.namedItem("email") as HTMLInputElement).value;
      const phoneVal = (form.elements.namedItem("phone") as HTMLInputElement).value;
      const ageVal = parseInt((form.elements.namedItem("age") as HTMLInputElement).value);
      const remarksVal = (form.elements.namedItem("remarks") as HTMLTextAreaElement)?.value || "";
      const selectedCourseTitle = courses.find((c) => c.id === selectedCourse)?.title || selectedCourse;

      const studentPayload = {
        studentName: `${firstName} ${lastName}`.trim(),
        email: emailVal || undefined,
        phoneNumber: phoneVal,
        age: ageVal,
        gender: gender,
        education: selectedCourseTitle + (remarksVal ? ` (${remarksVal})` : ""),
        parentName: `${firstName}'s Guardian`,
        city: "Online",
        country: "Global",
      };

      // Send form data to the updated student registration endpoint
      const response = await apiClient.post("/student/register", studentPayload);

      if (response.status === 201 || response.status === 200) {
        // Handle successful registration
        await setCookie(); // Set cookie if needed
        // Store student name for success page
        localStorage.setItem("studentName", `${firstName} ${lastName}`.trim());
        // Redirect based on age
        router.push(ageVal > 17 ? "/success" : "/success-kids");
      } else {
        // Handle unexpected response
        console.error("Unexpected response:", response);
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
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

            {/* Clean Feature Showcase Card */}
            <div className="hidden lg:block mt-8">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-primary/15 shadow-xl space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b border-primary/10">
                  <div className="w-14 h-14 bg-primary text-gold rounded-2xl flex items-center justify-center shadow-md">
                    <BookOpen className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary font-display">Why Learn With Us?</h3>
                    <p className="text-xs text-text-secondary">Structured online Quranic education</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mt-0.5 flex-shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">1-on-1 Personalized Classes</h4>
                      <p className="text-xs text-text-secondary">Individual attention tailored to your pace and learning goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mt-0.5 flex-shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Qualified Male & Female Teachers</h4>
                      <p className="text-xs text-text-secondary">Experienced Huffaz and Ulama with fluent multilingual instruction.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mt-0.5 flex-shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Flexible Schedule & Free Trial</h4>
                      <p className="text-xs text-text-secondary">Choose class times that fit your daily routine from anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-6 mt-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-primary/15 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-display">400+</div>
                  <div className="text-xs text-text-secondary">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary font-display">10+</div>
                  <div className="text-xs text-text-secondary">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-blue font-display">5+</div>
                  <div className="text-xs text-text-secondary">Countries</div>
                </div>
              </div>
            </div>

            <p className="text-body-lg text-text-secondary max-w-2xl mt-6">
              Join students worldwide in mastering Quranic recitation, Tajweed, and Islamic studies with expert guidance.
            </p>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* WhatsApp Quick Option for Hesitant Visitors */}
              <div className="mb-6 p-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-bold flex items-center justify-center sm:justify-start gap-1.5">
                    <span>💬 Hesitant to fill out the form?</span>
                  </h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    Skip the form & chat with us directly on WhatsApp for 1-on-1 class details!
                  </p>
                </div>
                <a
                  href="https://wa.me/918296331365?text=Hi%2C%20I%20am%20interested%20in%201-on-1%20Quran%20classes.%20Can%20you%20help%20me%20get%20started%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-[#128C7E] hover:bg-emerald-50 text-xs font-bold rounded-xl shadow transition-all duration-200 shrink-0 flex items-center gap-2 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat us on WhatsApp</span>
                </a>
              </div>

              {/* Teacher Application Banner */}
              <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block">Are you a Quran Teacher?</span>
                  <h4 className="text-sm font-bold text-primary">Join Our Global Teaching Staff</h4>
                </div>
                <Link
                  href="/register-teacher"
                  className="px-4 py-2 bg-secondary text-white hover:bg-secondary-dark text-xs font-bold rounded-xl shadow transition-all duration-200 shrink-0 transform hover:scale-105"
                >
                  Apply as a Teacher →
                </Link>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-display-lg text-primary mb-2">Register for 1-on-1 Classes</h2>
                <p className="text-body-md text-text-secondary">Fill out the form below or chat on WhatsApp to begin your personalized learning journey</p>
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

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary flex items-center justify-between">
                      <span>Email Address</span>
                      <span className="text-xs font-normal text-text-secondary bg-primary/10 px-2 py-0.5 rounded-full">Optional</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com (optional)"
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-semibold text-primary">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 bg-white/50 border-2 border-primary/20 rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary"
                    />
                  </div>
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
                                  ${selectedCourse === course.id
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
                              className={`w-8 h-8 ${selectedCourse === course.id
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

                {/* Login Link - Removed until login page is implemented */}
                {/* <div className="text-center pt-4 border-t border-primary/10">
                  <p className="text-body-sm text-text-secondary">
                    Already part of our community?{" "}
                    <Link 
                      href="/login" 
                      className="text-primary hover:text-primary-dark font-medium hover:underline transition-colors"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}