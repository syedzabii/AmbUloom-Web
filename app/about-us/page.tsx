"use client"
import React from 'react';
import { Globe, Book, Users, Award, Calendar, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
    const router = useRouter();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AMBAA UL ULOOM</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Illuminating lives with the timeless wisdom of the Qur'an—transforming hearts and minds one ayah at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8">Our Story</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              AMBAA UL ULOOM was founded in 2021 by Muhammed Izzur Rahman alongside two friends—Syed Ismail Zabih Ullah and Muhammed Waseem. This humble beginning took root under the loving care and spiritual patronage of our father, Hazrath Maulana Mufti Muhammed Atheeq ur Rahman Saheb (رحمه الله)—the esteemed Founder and Principal of Madrasa al-Kulliya Tus Sawoodiya.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              What began as a small initiative has now blossomed into a global community of learners, united by their love for the Qur'an and dedication to authentic Islamic knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-emerald-800">Our Growth & Global Reach</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">350+</div>
                  <p className="text-gray-700">Students worldwide</p>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-emerald-800 mb-2">Global Presence</div>
                  <p className="text-gray-700">India, Qatar, UAE (Dubai, Sharjah), Oman, Canada, and beyond</p>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-emerald-800 mb-2">Diverse Community</div>
                  <p className="text-gray-700">Students of all ages including professionals, entrepreneurs, and families</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                <p className="text-emerald-800">
                  <strong>Special consideration:</strong> We provide separate female batches led by qualified female teachers to ensure an appropriate Islamic learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Book className="h-8 w-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-emerald-800">Expert Faculty & Comprehensive Curriculum</h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">
              Our team consists of 13 dedicated teachers, each an expert in their respective field of Islamic knowledge.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Qur'anic Studies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Qaida (Foundational Learning)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Naazirah (Proper Recitation)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hifz (Memorization)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tafseer (Qur'anic Exegesis)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">Islamic Studies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Arabic Language Classes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personality Development & Life Skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Islamic Principles & Basic Fiqh</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Daily Sunnahs & Ādāb (Etiquettes)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platform */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Calendar className="h-8 w-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-emerald-800">Digital Platform & Student Support</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-700 text-lg mb-6">
                We've developed a custom website and mobile app that creates a seamless learning experience available 24/7, allowing you to learn anytime, anywhere.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">For Students</h3>
                  <p className="text-gray-600">Access syllabi, lesson recordings, and interactive exercises</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">For Parents</h3>
                  <p className="text-gray-600">Monitor attendance, monthly reports, and exam results</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">For Teachers</h3>
                  <p className="text-gray-600">Update attendance and submit performance reports in real time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-emerald-800">Community Engagement & Recognition</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex bg-emerald-50 p-6 rounded-lg">
                <div className="mr-6 flex-shrink-0">
                  <Calendar className="h-12 w-12 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Weekly Saturday Seminars</h3>
                  <p className="text-gray-700">Each week, a rotating student leads a seminar on a chosen Islamic topic, helping develop confidence, public speaking skills, and deeper knowledge.</p>
                </div>
              </div>
              
              <div className="flex bg-emerald-50 p-6 rounded-lg">
                <div className="mr-6 flex-shrink-0">
                  <Award className="h-12 w-12 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Recognition & Certification</h3>
                  <p className="text-gray-700">We offer monthly "Best Seminar" awards and formal certification for successful completion of Qaida, Qur'an, Hifz, and Dua-Masā'il exams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accessible Education</h3>
                <p className="text-emerald-100">
                  We believe Islamic knowledge should be available to all. We maintain affordable fees to remove financial barriers to learning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                <p className="text-emerald-100">
                  We are committed to spreading authentic Islamic knowledge across all ages, backgrounds, and cultures worldwide.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence & Integrity</h3>
                <p className="text-emerald-100">
                  We uphold the highest standards of scholarship under our scholars' guidance, ensuring authentic knowledge is preserved and shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">Join Our Growing Family</h2>
            <p className="text-gray-700 text-lg mb-8">
              By the grace of Allah, AMBAA UL ULOOM continues to illuminate lives with the timeless wisdom of the Qur'an. Embark on your journey of knowledge today.
            </p>
            <button onClick={() => {router.push('/register')}} className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-md">
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}