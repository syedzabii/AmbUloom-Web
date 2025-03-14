"use client"; // Required for client-side interactivity (e.g., useState, onSubmit)

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { apiClient } from "@/services/api-client";

export default function AdmissionForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    email: "",
    gender: "",
    parentName: "",
    country: "",
    city: "",
    phoneNumber: "",
    education: "",
    studentPhoto: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, studentPhoto: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (key === "studentPhoto" && value instanceof File) {
            formDataToSend.append(key, value, value.name);
          } else {
            formDataToSend.append(key, value.toString());
          }
        }
      });

      const response = await apiClient.post("/student/new", formDataToSend);

      if (response.status === 201) {
        // Save the student's name to localStorage
        localStorage.setItem("studentName", formData.studentName);

        toast.success("Student registered successfully!");
        if (formData.age > 17) {
          router.push("/success");
        } else {
          router.push("/success-kids");
        }
        // Redirect to the success page
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register student. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#D9E2EC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            AMBAA UL ULOOM
          </h1>
          <h2 className="text-2xl font-semibold text-center text-[#4A6DA7] mb-6">
            Admission Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Parent Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                required
              />
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Education
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
              />
            </div>

            {/* Student Photo */}
            <div>
              <label className="block text-sm font-medium text-[#4A6DA7] mb-1">
                Student Photo
              </label>
              <input
                type="file"
                name="studentPhoto"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-[#CBD2D9] rounded-lg focus:ring-2 focus:ring-[#4A6DA7] focus:border-transparent"
                accept="image/*"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#4A6DA7] text-white px-6 py-3 rounded-lg hover:bg-[#2E4A7D] transition-colors focus:ring-2 focus:ring-[#4A6DA7] focus:ring-offset-2"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
