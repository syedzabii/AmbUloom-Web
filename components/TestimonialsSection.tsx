"use client";

import { testimonials } from "@/types/constants";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

// Simplified TestimonialCard component
const TestimonialCard = ({ testimonial }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col relative">
    <div className="absolute -top-3 -left-3 bg-primary rounded-full p-2 text-white shadow-md">
      <Quote size={20} />
    </div>

    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>

    <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>

    <div className="flex items-center gap-3 mt-auto">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-lg font-bold text-white">
        {testimonial.avatar}
      </div>
      <div>
        <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
        <p className="text-xs text-gray-500 mb-1">{testimonial.location}</p>
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary">
          {testimonial.course}
        </span>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Handle responsive display
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(1);
      else if (width < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasTestimonials = testimonials && testimonials.length > 0;
  const totalSlides = hasTestimonials
    ? Math.max(1, testimonials.length - visibleItems - 1)
    : 0;
  const slideWidthPercentage = hasTestimonials ? 100 / visibleItems : 100;

  const goToNext = () => {
    if (!hasTestimonials) return;
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    if (!hasTestimonials) return;
    setActiveIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    if (!hasTestimonials || index < 0 || index >= totalSlides) return;
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary-dark mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover how our courses have transformed the Quran learning journey
            for students worldwide
          </p>
        </div>

        {/* Testimonials or Empty State */}
        {!hasTestimonials ? (
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <h3 className="text-xl font-semibold text-primary-dark mb-3">
                No Testimonials Yet
              </h3>
              <p className="text-gray-600">
                Be the first to share your experience with our courses!
              </p>
            </div>
          </div>
        ) : (
          <div className="relative mt-12">
            {/* Navigation arrows */}
            {totalSlides > 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 z-10">
                  <button
                    onClick={goToPrev}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 z-10">
                  <button
                    onClick={goToNext}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </>
            )}

            {/* Testimonials slider */}
            <div className="overflow-hidden">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${
                    activeIndex * slideWidthPercentage
                  }%)`,
                  transition: "transform 500ms ease-out",
                  width: `${testimonials.length * slideWidthPercentage}%`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-3 md:p-4"
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator dots */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join Our Students Today
          </button>
        </div>
      </div>
    </section>
  );
}
