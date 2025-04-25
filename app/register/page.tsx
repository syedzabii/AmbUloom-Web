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

const courses = [
  {
    id: "noorani",
    title: "Noorani Qaida",
    description: "Master the fundamentals",
    icon: BookOpen,
  },
  {
    id: "nazeera",
    title: "Nazeera",
    description: "Learn Tajweed rules",
    icon: Users,
  },
  {
    id: "hifz",
    title: "Hifz",
    description: "Memorize the Quran",
    icon: GraduationCap,
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

      // if (response.ok) {
      //   router.push("/verification");
      // } else {
      //   console.error("Failed to register");
      // }
    } catch (error) {
      console.error("Error:", error);
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
        router.push("/test"); // Redirect to the test page
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
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="max-w-md mx-auto">
              <h1 className="font-jakarta text-display-md text-primary-dark mb-2">
                Start Your Journey
              </h1>
              <p className="text-body-lg text-text-secondary mb-8">
                Fill this form and we will reach out to you.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-dark">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-dark">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none 
                             focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-dark">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      min="5"
                      max="100"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-dark">
                      Gender
                    </label>
                    <select
                      name="gender"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-primary-dark">
                    Choose Your Course
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => setSelectedCourse(course.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left
                                  ${
                                    selectedCourse === course.id
                                      ? "border-primary bg-primary-50"
                                      : "border-gray-200 hover:border-primary/50"
                                  }`}
                      >
                        <course.icon
                          className={`w-6 h-6 mb-2 
                                              ${
                                                selectedCourse === course.id
                                                  ? "text-primary"
                                                  : "text-gray-400"
                                              }`}
                        />
                        <div className="text-sm font-medium text-primary-dark">
                          {course.title}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {course.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Remarks Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-dark">
                    Remarks
                  </label>
                  <textarea
                    name="remarks"
                    placeholder="(Optional) Please enter if you have any query, example: What are the timings?"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none 
                             focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    rows={4}
                  />
                </div>

                {/* Terms & Conditions */}
                {/* <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    id="terms"
                    className="w-4 h-4 rounded border-gray-300 text-primary 
                             focus:ring-primary/20"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-text-secondary"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms & Conditions
                    </Link>
                  </label>
                </div> */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium
                           py-3 rounded-xl transition-all duration-200 shadow-button 
                           hover:shadow-button-hover transform hover:-translate-y-0.5
                           flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enrolling you...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Started</span>
                      <ChevronsRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-text-secondary">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* Animation Section */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative w-96 h-96">
                {/* Animated circles */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 
                                bg-primary rounded-full shadow-lg"
                  />
                  <div
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 
                                bg-secondary rounded-full shadow-lg"
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 
                                bg-accent-blue rounded-full shadow-lg"
                  />
                  <div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 
                                bg-accent-yellow rounded-full shadow-lg"
                  />
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="bg-white w-32 h-32 rounded-2xl shadow-xl 
                                flex items-center justify-center transform 
                                animate-float"
                  >
                    <Check className="w-16 h-16 text-secondary" />
                  </div>
                </div>

                {/* Floating elements */}
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`absolute w-16 h-16 bg-white rounded-xl shadow-lg
                              flex items-center justify-center transform
                              animate-float-delayed-${index + 1}`}
                    style={{
                      top: `${25 + index * 30}%`,
                      left: index % 2 === 0 ? "10%" : "80%",
                    }}
                  >
                    <course.icon className="w-8 h-8 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
