"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { apiClient } from "@/services/api-client";
import Image from "next/image";

export default function AdmissionForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, studentPhoto: file }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPreviewImage(null);
    setFormData((prev) => ({ ...prev, studentPhoto: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      for (const [key, value] of Object.entries(formData)) {
        if (value !== null && value !== undefined) {
          if (key === "studentPhoto" && value instanceof File) {
            formDataToSend.append("studentPhoto", value, value.name);
          } else {
            formDataToSend.append(key, value.toString());
          }
        }
      }

      const response = await apiClient.post("/student/new", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        localStorage.setItem("studentName", formData.studentName);
        toast.success("Student registered successfully!");
        router.push(parseInt(formData.age) > 17 ? "/success" : "/success-kids");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register student. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-[#e6e0d4]">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-serif text-[#34495e] font-bold">
              AMBAA UL ULOOM
            </h1>
            <h2 className="text-xl font-serif text-[#34495e] mt-2 italic">
              Admission Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Student Name */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Parent Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-serif text-[#34495e] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-serif text-[#34495e] mb-1">
                Education / Profession
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full p-2 border-b border-[#34495e] bg-transparent focus:outline-none"
              />
            </div>

            {/* Student Photo */}
            <div className="pt-2">
              <label className="block text-sm font-serif text-[#34495e] mb-2">
                Student Photo
              </label>
              {previewImage ? (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={previewImage}
                      alt="Preview"
                      width={80}
                      height={80}
                      className="rounded-full h-20 w-20 object-cover border border-[#e6e0d4]"
                    />
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="absolute -top-2 -right-2 bg-[#34495e] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                  <span className="text-sm text-[#34495e]">Photo selected</span>
                </div>
              ) : (
                <div className="border border-dashed border-[#e6e0d4] rounded-lg p-4 text-center">
                  <input
                    type="file"
                    name="studentPhoto"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer block text-sm text-[#34495e]"
                  >
                    Click to upload photo
                  </label>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#34495e] text-white py-2 rounded hover:bg-[#2c3e50] transition-colors font-serif"
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
