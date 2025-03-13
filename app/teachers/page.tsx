"use client";
import { useState } from "react";
import Link from "next/link";

type TeacherSpecialty =
  | "Aalim"
  | "Aalima"
  | "Hafiz"
  | "Hafiza"
  | "Tajweed Expert"
  | "Islamic Studies";

interface Teacher {
  id: number;
  name: string;
  gender: "male" | "female";
  specialty: TeacherSpecialty[];
  experience: number;
  bio: string;
  image: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ustadh Ahmad Ali",
    gender: "male",
    specialty: ["Aalim", "Hafiz"],
    experience: 12,
    bio: "Ustadh Ahmad has dedicated his life to Quran memorization and teaching. He completed his Hifz at the age of 14 and went on to obtain an Alimiyyah degree from Al-Azhar University.",
    image: "/teachers/male-teacher-1.jpg",
  },
  {
    id: 2,
    name: "Ustadha Fatima Khan",
    gender: "female",
    specialty: ["Aalima", "Tajweed Expert"],
    experience: 10,
    bio: "Ustadha Fatima specializes in Tajweed and Quranic recitation. She has ijazah in Hafs recitation and has trained hundreds of students in proper Quranic pronunciation.",
    image: "/teachers/female-teacher-1.jpg",
  },
  {
    id: 3,
    name: "Shaykh Mohammed Hassan",
    gender: "male",
    specialty: ["Aalim", "Islamic Studies"],
    experience: 15,
    bio: "Shaykh Mohammed has extensive knowledge in Islamic jurisprudence and contemporary fiqh issues. He obtained his degree from Islamic University of Madinah.",
    image: "/teachers/male-teacher-2.jpg",
  },
  {
    id: 4,
    name: "Ustadh Ibrahim Yusuf",
    gender: "male",
    specialty: ["Hafiz", "Tajweed Expert"],
    experience: 8,
    bio: "Ustadh Ibrahim is known for his beautiful recitation and expertise in the science of Tajweed. He has memorized the Quran with multiple chains of narration.",
    image: "/teachers/male-teacher-3.jpg",
  },
  {
    id: 5,
    name: "Ustadha Aisha Rahman",
    gender: "female",
    specialty: ["Aalima", "Hafiza"],
    experience: 11,
    bio: "Ustadha Aisha combines her knowledge of Islamic studies with her complete memorization of the Quran. She specializes in teaching women and children.",
    image: "/teachers/female-teacher-2.jpg",
  },
  {
    id: 6,
    name: "Mufti Ismail Ahmad",
    gender: "male",
    specialty: ["Aalim", "Islamic Studies"],
    experience: 20,
    bio: "Mufti Ismail has dedicated decades to Islamic scholarship and education. He is specialized in giving fatwa and teaching advanced Islamic sciences.",
    image: "/teachers/male-teacher-4.jpg",
  },
];

export default function TeachersPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredTeachers = activeFilter
    ? teachers.filter((teacher) =>
        teacher.specialty.includes(activeFilter as TeacherSpecialty)
      )
    : teachers;

  const specialties = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.specialty))
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Our Teachers
          </h1>
          <p className="text-lg text-gray-600">
            Learn from qualified and experienced instructors dedicated to
            providing the best Quranic education
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${
                        !activeFilter
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
          >
            All
          </button>

          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setActiveFilter(specialty)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${
                          activeFilter === specialty
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gray-200 relative">
                {/* Placeholder for teacher image */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-50 text-primary">
                  {teacher.gender === "male" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-primary-dark mb-2">
                  {teacher.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {teacher.specialty.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {teacher.experience} years of teaching experience
                </p>

                <p className="text-gray-600 mb-6 line-clamp-3">{teacher.bio}</p>

                <Link
                  href={`/teachers/${teacher.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  View Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No teachers found with the selected specialty.
            </p>
            <button
              onClick={() => setActiveFilter(null)}
              className="mt-4 px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark"
            >
              View All Teachers
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
