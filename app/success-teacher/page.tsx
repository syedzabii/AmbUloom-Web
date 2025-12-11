"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Clock, Phone, Mail } from "lucide-react";

export default function TeacherSuccessPage() {
  const [teacherName, setTeacherName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const name = localStorage?.getItem?.("teacherName") || "Teacher";
    setTeacherName(name);
  }, []);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary/5 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        {/* Main content card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header with icon */}
          <div className="bg-gradient-to-r from-secondary to-accent-blue px-8 py-6">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-4"
            >
              <h1 className="text-2xl font-bold text-white">
                Welcome, {teacherName}!
              </h1>
              <p className="text-blue-100 mt-1">
                Application submitted successfully
              </p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            {/* Success message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-8"
            >
                             <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <p className="text-text-secondary leading-relaxed">
                Thank you for your interest in joining AMBAA UL ULOOM. Our team will review your application within 2-3 business days and send you an email notification.
              </p>
            </motion.div>

            {/* Next steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
                             <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                 What's Next?
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="text-center">
                   <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                     <Award className="w-5 h-5 text-secondary" />
                   </div>
                   <h4 className="font-medium text-primary text-sm">Review</h4>
                   <p className="text-xs text-text-secondary">Qualification assessment</p>
                 </div>
                 <div className="text-center">
                   <div className="w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                     <Users className="w-5 h-5 text-accent-blue" />
                   </div>
                   <h4 className="font-medium text-primary text-sm">Interview</h4>
                   <p className="text-xs text-text-secondary">Brief discussion</p>
                 </div>
                 <div className="text-center">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                     <Clock className="w-5 h-5 text-primary" />
                   </div>
                   <h4 className="font-medium text-primary text-sm">Onboarding</h4>
                   <p className="text-xs text-text-secondary">Training & setup</p>
                 </div>
              </div>
            </motion.div>

            {/* Contact info */}
                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.0 }}
               className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 mb-6 border border-primary/20"
             >
               <h4 className="text-sm font-semibold text-primary mb-3 text-center">
                 Contact Us
               </h4>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-secondary">
                 <div className="flex items-center">
                   <Phone className="w-4 h-4 text-secondary mr-2" />
                   <span>+91 918383838</span>
                 </div>
                 <div className="flex items-center">
                   <Mail className="w-4 h-4 text-secondary mr-2" />
                   <span>teachers@ambuloom.com</span>
                 </div>
               </div>
             </motion.div>

            {/* Return button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center"
            >
                             <motion.button
                 onClick={handleReturnHome}
                 className="px-6 py-3 bg-gradient-to-r from-secondary to-accent-blue text-white rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                 whileTap={{ scale: 0.98 }}
               >
                 Return to Home
               </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}