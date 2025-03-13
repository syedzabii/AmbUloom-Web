// app/components/CoursePath.tsx
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Noorani Qaida",
    description: "Master the fundamentals of Quran reading",
    icon: BookOpen,
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/10",
    link: "/courses/noorani",
  },
  {
    id: 2,
    title: "Nazeera",
    description: "Learn Quran reading with Tajweed rules",
    icon: Users,
    color: "from-secondary to-secondary-light",
    bgColor: "bg-secondary/10",
    link: "/courses/nazeera",
  },
  {
    id: 3,
    title: "Hifz",
    description: "Memorize the Holy Quran with expert guidance",
    icon: GraduationCap,
    color: "from-accent-blue to-blue-400",
    bgColor: "bg-accent-blue/10",
    link: "/courses/hifz",
  },
];

export default function CoursePath() {
  return (
    <div className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-jakarta text-display-lg text-primary-dark mb-16">
          Choose Your Learning Path
        </h2>

        {/* Progress Line - Positioned relatively to container */}
        <div
          className="absolute top-1/2 left-0 right-0 hidden lg:block z-0"
          style={{ top: "55%" }}
        >
          <div className="mx-auto max-w-5xl px-32">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent-blue rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <Link href={course.link} key={course.id} className="group">
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                            transform transition-all duration-300 hover:-translate-y-2 relative
                            border border-gray-100"
              >
                <div
                  className={`${course.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <course.icon
                    className={`w-8 h-8 text-${course.color.split("-")[1]}`}
                  />
                </div>

                <h3 className="font-jakarta text-display-xs text-primary-dark mb-4">
                  {course.title}
                </h3>

                <p className="text-body-md text-text-secondary mb-6">
                  {course.description}
                </p>

                <div className="flex items-center text-primary">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                  <span className="text-body-sm font-medium">
                    Start Learning
                  </span>
                </div>

                {/* Card indicator dot */}
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                                w-4 h-4 rounded-full bg-gradient-to-r ${course.color}
                                ring-4 ring-white`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
