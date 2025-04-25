"use client"; // Required for client-side interactivity

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 text-primary-500 bg-clip-text text-transparent">
            Terms
          </h1>
        </motion.div>

        {/* Class Timings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Class Timings
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>First Batch (Morning):</strong> 6:15 AM to 7:15 AM
            </p>
            <p>
              <strong>Second Batch (Evening):</strong> 7:15 PM to 8:15 PM
            </p>
            <p>
              <strong>Third Batch (Night Class):</strong> 9:15 PM to 11:15 PM
            </p>
            <p>
              <strong>Every Wednesday:</strong> Namaz Chart + Deeniyat Class +
              Sabaq Updates
              <br />
              <span className="ml-4">Class Timings: 10:30 PM to 11:00 PM</span>
            </p>
            <p>
              <strong>Every Saturday:</strong> Seminar Class
              <br />
              <span className="ml-4">Class Timings: 10:30 PM to 11:00 PM</span>
            </p>
          </div>
        </motion.div>

        {/* Important Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Important Links
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              1){" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.addinsoft.hifzquran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Hifz Quran App
              </a>
            </p>
            <p>
              2){" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.creativeapps.nooraniqaidawithaudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Noorani Qaida App
              </a>
            </p>
            <p>
              3){" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.akmal.dailydeeds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Namaz Chart Attendance App
              </a>
            </p>
          </div>
        </motion.div>

        {/* Attendance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Attendance Notice
          </h2>
          <p className="text-gray-700">
            <strong>ATTENDANCE IS COMPULSORY</strong> for all classes and
            activities.
          </p>
        </motion.div>
        {/* <Link
          href="/register"
          className="inline-flex items-center mt-2 justify-center px-8 py-3 text-body-md font-medium text-white 
                           bg-secondary hover:bg-secondary-dark rounded-xl shadow-button hover:shadow-button-hover 
                           transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Go back
          <ArrowLeft className="ml-2 h-5 w-5" />
        </Link> */}
        <button
          onClick={() => router.back()}
          className="w-full bg-[#4A6DA7] text-white px-6 py-3 rounded-lg hover:bg-[#2E4A7D] transition-colors focus:ring-2 focus:ring-[#4A6DA7] focus:ring-offset-2"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
