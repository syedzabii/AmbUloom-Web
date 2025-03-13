"use client";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mohammed Hassan",
    location: "London, UK",
    text: "I've tried many online platforms, but the Tajweed lessons here are exceptional. The teachers ensure perfect pronunciation.",
    rating: 5,
    course: "Nazeera",
    avatar: "M",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    location: "Dubai, UAE",
    text: "The Noorani Qaida course helped me start my Quran learning journey. The teachers are patient and the lessons are well-structured.",
    rating: 5,
    course: "Noorani Qaida",
    avatar: "S",
  },
  {
    id: 3,
    name: "Aisha Patel",
    location: "Toronto, Canada",
    text: "The Hifz program is comprehensive and the mentors are very supportive. I've memorized 5 Juz in just 6 months!",
    rating: 5,
    course: "Hifz",
    avatar: "A",
  },
  {
    id: 4,
    name: "Omar Khan",
    location: "New York, USA",
    text: "I struggled with Tajweed before, but the structured lessons here made it so easy to learn. Highly recommended!",
    rating: 5,
    course: "Tajweed",
    avatar: "O",
  },
  {
    id: 5,
    name: "Fatima Siddiqui",
    location: "Sydney, Australia",
    text: "Alhamdulillah! The Quran recitation classes have improved my fluency and confidence. The teachers are amazing.",
    rating: 5,
    course: "Quran Recitation",
    avatar: "F",
  },
  {
    id: 6,
    name: "Yusuf Ali",
    location: "Doha, Qatar",
    text: "The one-on-one learning sessions are perfect for personalized guidance. The tutors are very knowledgeable and kind.",
    rating: 5,
    course: "One-on-One Quran Classes",
    avatar: "Y",
  },
  {
    id: 7,
    name: "Zainab Bukhari",
    location: "Karachi, Pakistan",
    text: "The Islamic studies course helped me deepen my understanding of my faith. The interactive approach makes learning engaging!",
    rating: 5,
    course: "Islamic Studies",
    avatar: "Z",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col relative">
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 bg-primary rounded-full p-2 text-white shadow-md">
        <Quote size={20} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 italic mb-6 flex-grow">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-lg font-bold text-white">
          {testimonial.avatar}
        </div>

        <div>
          {/* Name and Location */}
          <h4 className="font-semibold text-primary-dark">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500 mb-1">{testimonial.location}</p>

          {/* Course Tag */}
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary">
            {testimonial.course}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get visible items based on screen size
  const getVisibleItems = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };

  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      // Reset active index if it's out of bounds after resize
      setActiveIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - getVisibleItems());
        return prev > maxIndex ? 0 : prev;
      });
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides based on visible items
  const totalSlides = Math.max(1, testimonials.length - visibleItems + 1);

  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, visibleItems]);

  // Handle navigation
  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      return (prevIndex + 1) % totalSlides;
    });
    resetInterval();
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1;
    });
    resetInterval();
  };

  const goToTestimonial = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setActiveIndex(index);
      resetInterval();
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrev();
    }
  };

  // Get visible testimonials based on active index
  const getVisibleTestimonials = () => {
    return testimonials.slice(
      activeIndex,
      Math.min(activeIndex + visibleItems, testimonials.length)
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50 overflow-hidden relative">
      {/* Background Pattern */}
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

        {/* Testimonials Carousel */}
        <div className="relative mt-12">
          {/* Navigation arrows - only show if there's more than one slide */}
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
          <div
            ref={scrollRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleItems)
                }%)`,
                transition: "transform 500ms ease-out",
                width: `${(testimonials.length * 100) / visibleItems}%`,
                display: "grid",
                gridTemplateColumns: `repeat(${testimonials.length}, minmax(0, 1fr))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-3 md:p-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicator dots - only show if there's more than one slide */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${
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
