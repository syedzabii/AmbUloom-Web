// app/register-teacher/page.tsx
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
  Award,
  Clock,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiClient } from "@/services/api-client";

// Define form data interface for teachers
interface TeacherRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  qualification: string;
  experience: string;
  specializations: string[];
  languages: string[];
  availability: string;
  bio: string;
  termsAccepted: boolean;
}

const specializations = [
  {
    id: "noorani",
    title: "Noorani Qaida",
    description: "Teaching fundamentals",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "nazeera",
    title: "Nazeera",
    description: "Tajweed rules",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "hifz",
    title: "Hifz",
    description: "Quran memorization",
    icon: GraduationCap,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    id: "tajweed",
    title: "Advanced Tajweed",
    description: "Advanced recitation",
    icon: Award,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
];

const languages = [
  { id: "english", name: "English" },
  { id: "arabic", name: "Arabic" },
  { id: "urdu", name: "Urdu" },
  { id: "hindi", name: "Hindi" },
  { id: "bengali", name: "Bengali" },
  { id: "turkish", name: "Turkish" },
  { id: "malay", name: "Malay" },
  { id: "indonesian", name: "Indonesian" },
];

const experienceLevels = [
  { id: "beginner", name: "1-2 years" },
  { id: "intermediate", name: "3-5 years" },
  { id: "advanced", name: "6-10 years" },
  { id: "expert", name: "10+ years" },
];

export default function TeacherRegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSpecializationToggle = (specId: string) => {
    setSelectedSpecializations(prev => 
      prev.includes(specId) 
        ? prev.filter(id => id !== specId)
        : [...prev, specId]
    );
  };

  const handleLanguageToggle = (langId: string) => {
    setSelectedLanguages(prev => 
      prev.includes(langId) 
        ? prev.filter(id => id !== langId)
        : [...prev, langId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = formRef.current;
      if (!form) return;

      const formData: TeacherRegisterFormData = {
        firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
        lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        age: parseInt((form.elements.namedItem("age") as HTMLInputElement).value),
        gender: (form.elements.namedItem("gender") as HTMLSelectElement).value,
        qualification: (form.elements.namedItem("qualification") as HTMLInputElement).value,
        experience: (form.elements.namedItem("experience") as HTMLSelectElement).value,
        specializations: selectedSpecializations,
        languages: selectedLanguages,
        availability: (form.elements.namedItem("availability") as HTMLSelectElement).value,
        bio: (form.elements.namedItem("bio") as HTMLTextAreaElement).value,
        termsAccepted: true,
      };

      console.log("Teacher registration data:", formData);

      // Send form data to the backend API
      const response = await apiClient.post("/teacher/register", formData);

      if (response.status === 201) {
        // Handle successful registration
        console.log("Teacher registration successful:", response.data);
        
        // Store teacher name for the success page
        const teacherName = formData.firstName;
        localStorage.setItem("teacherName", teacherName);
        
        router.push("/success-teacher"); // Redirect to the teacher success page
      } else {
        // Handle unexpected response
        console.error("Unexpected response:", response);
        throw new Error("Registration failed");
      }
      
    } catch (error) {
      console.error("Teacher registration error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary/5 relative overflow-hidden">
      {/* Background Pattern - Adjusted for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-primary rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-32 sm:top-60 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 bg-secondary rounded-full blur-xl sm:blur-2xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-accent-blue rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 mt-16 sm:mt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Hero Section */}
          <div className="lg:sticky lg:top-8">
            <div className="text-center lg:text-left mb-6 lg:mb-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 sm:mb-6">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2" />
                <span className="text-xs sm:text-sm font-medium text-primary">Join Our Teaching Team</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Share Your
                <span className="block bg-gradient-to-r from-secondary to-accent-blue bg-clip-text text-transparent">
                  Knowledge & Wisdom
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mt-4 sm:mt-8">
                Become part of our esteemed teaching community. Inspire students worldwide 
                with your expertise in Islamic education and Quranic studies.
              </p>
            </div>

            {/* Mobile Stats - Visible on mobile, hidden on desktop */}
            <div className="grid grid-cols-3 gap-4 mb-8 lg:hidden">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Expert Teachers</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl font-bold text-secondary mb-1">1000+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Students Taught</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl font-bold text-accent-blue mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-text-secondary">Average Rating</div>
              </div>
            </div>

            {/* Animated Illustration - Desktop Only */}
            <div className="relative hidden lg:block mt-12">
              <div className="relative w-full h-80 flex items-center justify-center">
                {/* Central Element */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-secondary to-accent-blue rounded-3xl shadow-2xl flex items-center justify-center animate-pulse">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Orbiting Specialization Cards */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                  {specializations.map((spec, index) => (
                    <div
                      key={spec.id}
                      className="absolute"
                      style={{
                        top: `${40 + Math.sin((index * 90) * Math.PI / 180) * 25}%`,
                        left: `${40 + Math.cos((index * 90) * Math.PI / 180) * 25}%`,
                      }}
                    >
                      <div className={`w-16 h-16 ${spec.bgColor} rounded-2xl shadow-lg flex items-center justify-center border-2 border-white/20 backdrop-blur-sm`}>
                        <spec.icon className={`w-8 h-8 ${spec.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Background Decorative Dots */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-secondary/20 rounded-full animate-bounce"
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
                      className="absolute w-2 h-2 bg-accent-blue/20 rounded-full animate-bounce"
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

              {/* Desktop Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-display-md font-bold text-primary mb-1">50+</div>
                  <div className="text-body-sm text-text-secondary">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-display-md font-bold text-secondary mb-1">1000+</div>
                  <div className="text-body-sm text-text-secondary">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-display-md font-bold text-accent-blue mb-1">4.9★</div>
                  <div className="text-body-sm text-text-secondary">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">Teacher Application</h2>
                <p className="text-sm sm:text-base text-text-secondary">Complete your profile to join our teaching team</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      min="18"
                      max="100"
                      required
                      placeholder="Your age"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Gender
                    </label>
                    <select
                      name="gender"
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 text-text-primary text-sm sm:text-base"
                    >
                      <option value="" className="text-text-tertiary">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      required
                      placeholder="e.g., Hafiz, Qari, Islamic Studies Degree"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 placeholder:text-text-tertiary text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-primary">
                      Teaching Experience
                    </label>
                    <select
                      name="experience"
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                               transition-all duration-200 text-text-primary text-sm sm:text-base"
                    >
                      <option value="" className="text-text-tertiary">Select experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level.id} value={level.id}>{level.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Specializations */}
                <div className="space-y-3 sm:space-y-4">
                  <label className="block text-sm font-semibold text-primary">
                    Specializations (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {specializations.map((spec) => (
                      <button
                        key={spec.id}
                        type="button"
                        onClick={() => handleSpecializationToggle(spec.id)}
                        className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-left
                                  transform active:scale-95 sm:hover:scale-105 sm:hover:shadow-lg group
                                  ${
                                    selectedSpecializations.includes(spec.id)
                                      ? `${spec.bgColor} shadow-lg border-transparent`
                                      : "border-primary/10 bg-white/30 active:border-primary/50 sm:hover:border-primary/30"
                                  }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0
                                        ${selectedSpecializations.includes(spec.id) 
                                          ? `bg-gradient-to-r ${spec.color}` 
                                          : 'bg-primary/10 group-active:bg-primary/20 sm:group-hover:bg-primary/20'
                                        } transition-all duration-300`}>
                            <spec.icon
                              className={`w-5 sm:w-6 h-5 sm:h-6 ${
                                selectedSpecializations.includes(spec.id)
                                  ? "text-white"
                                  : "text-primary"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-bold text-primary mb-1 truncate">
                              {spec.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-text-secondary">
                              {spec.description}
                            </p>
                          </div>
                          {selectedSpecializations.includes(spec.id) && (
                            <div className="absolute top-2 right-2 flex-shrink-0">
                              <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-3 sm:space-y-4">
                  <label className="block text-sm font-semibold text-primary">
                    Languages You Can Teach In (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.id}
                        type="button"
                        onClick={() => handleLanguageToggle(lang.id)}
                        className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-300 text-center
                                  transform active:scale-95 sm:hover:scale-105 sm:hover:shadow-lg
                                  ${
                                    selectedLanguages.includes(lang.id)
                                      ? "bg-secondary/10 border-secondary shadow-lg"
                                      : "border-primary/10 bg-white/30 active:border-primary/50 sm:hover:border-primary/30"
                                  }`}
                      >
                        <span className={`text-xs sm:text-sm font-medium ${
                          selectedLanguages.includes(lang.id) ? "text-secondary" : "text-primary"
                        }`}>
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-primary">
                    Availability
                  </label>
                  <select
                    name="availability"
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                             transition-all duration-200 text-text-primary text-sm sm:text-base"
                  >
                    <option value="" className="text-text-tertiary">Select your availability</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="evenings">Evenings Only</option>
                    <option value="flexible">Flexible Schedule</option>
                  </select>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-primary">
                    Bio/Teaching Philosophy
                  </label>
                  <textarea
                    name="bio"
                    required
                    placeholder="Tell us about your teaching experience, philosophy, and what makes you unique as a teacher..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 border-2 border-primary/20 rounded-xl sm:rounded-2xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                             transition-all duration-200 placeholder:text-text-tertiary resize-none text-sm sm:text-base"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || selectedSpecializations.length === 0 || selectedLanguages.length === 0}
                  className="w-full bg-gradient-to-r from-secondary to-secondary-light 
                           hover:from-secondary-dark hover:to-secondary text-white font-bold
                           py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl 
                           hover:shadow-3xl transform active:scale-95 sm:hover:-translate-y-1
                           flex items-center justify-center space-x-3
                           disabled:opacity-50 disabled:cursor-not-allowed
                           disabled:transform-none disabled:shadow-lg text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 sm:w-6 h-5 sm:h-6 animate-spin" />
                      <span>Processing your application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ChevronsRight className="w-5 sm:w-6 h-5 sm:h-6" />
                    </>
                  )}
                </button>

                {/* Login Link */}
                <div className="text-center pt-4 border-t border-primary/10">
                  <p className="text-xs sm:text-sm text-text-secondary">
                    Already a teacher?{" "}
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