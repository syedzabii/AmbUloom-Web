// components/BenefitsSection.js
"use client"
import { Calendar, Users, Video, Globe, UserRound, Shield } from "lucide-react";
import { useState } from "react";

export default function BenefitsSection() {
  // Array to check if images exist
  const benefitsData = [
    {
      title: "Flexible Schedule",
      description: "Learn at your own pace with flexible class timings.",
      // imagePath: "images/image1.png",
      icon: <Calendar className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Expert Teachers",
      description: "Learn from certified and experienced Quran teachers.",
      // imagePath: "images/image2.png",
      icon: <Users className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Interactive Classes",
      description: "Engage in live, interactive sessions with teachers.",
      // imagePath: "images/image3.png",
      icon: <Video className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Learn in Your Native Language",
      description: "Study Quran online with translations in your native language.",
      // imagePath: "images/image4.png", 
      icon: <Globe className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Qualified Female Teachers",
      description: "Learn from skilled female instructors in a comfortable environment.",
      // imagePath: "images/image5.png",
      icon: <UserRound className="w-12 h-12 text-teal-600" />
    },
    {
      title: "Safe Learning Environment",
      description: "Enjoy a secure and child-friendly online classroom experience.",
      // imagePath: "images/image6.png",
      icon: <Shield className="w-12 h-12 text-teal-600" />
    }
  ];

  // Remove image error handling since we're not using images
  // const [imageErrors, setImageErrors] = useState({});
  
  // const handleImageError = (index) => {
  //   setImageErrors(prev => ({
  //     ...prev,
  //     [index]: true
  //   }));
  // };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefitsData.slice(0, 3).map((benefit, index) => (
            <div className="text-center" key={index}>
              <div className="flex justify-center mb-4 h-24">
                {/* {!imageErrors[index] ? (
                  <img 
                    src={benefit.imagePath} 
                    alt={benefit.title} 
                    className="rounded-lg w-24 h-24 object-cover"
                    onError={() => handleImageError(index)}
                  />
                ) : ( */}
                  <div className="flex items-center justify-center">
                    {benefit.icon}
                  </div>
                {/* )} */}
              </div>
              <h3 className="text-xl font-bold text-primary-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.slice(3, 6).map((benefit, index) => (
            <div className="text-center" key={index + 3}>
              <div className="flex justify-center mb-4 h-24">
                {/* {!imageErrors[index + 3] ? (
                  <img 
                    src={benefit.imagePath} 
                    alt={benefit.title} 
                    className="rounded-lg w-24 h-24 object-cover"
                    onError={() => handleImageError(index + 3)}
                  />
                ) : ( */}
                  <div className="flex items-center justify-center">
                    {benefit.icon}
                  </div>
                {/* )} */}
              </div>
              <h3 className="text-xl font-bold text-primary-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}