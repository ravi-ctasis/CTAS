"use client";
import { useState, useEffect } from "react";
import { Star, Quote, Users } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Dynamics",
      rating: 5,
      text: "The AI solutions developed by Ctas have revolutionized our customer service. We've seen a 250% improvement in response times and customer satisfaction has never been higher.",
      avatar: "MC",
      industry: "Technology",
      projectType: "AI Solutions",
      featured: true,
      metrics: { improvement: "250%", timeline: "3 months" },
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director",
      company: "Global Finance Solutions",
      rating: 5,
      text: "Their cybersecurity implementation is top-notch. We haven't had a single security incident since partnering with Ctas. Their 24/7 monitoring gives us complete peace of mind.",
      avatar: "ER",
      industry: "Finance",
      projectType: "Cybersecurity",
      featured: true,
      metrics: { security: "100%", monitoring: "24/7" },
    },
    {
      name: "David Park",
      role: "Founder",
      company: "StartupLab",
      rating: 5,
      text: "From concept to deployment, Ctas guided us through every step. Their agile development approach helped us launch 3 months ahead of schedule with outstanding results.",
      avatar: "DP",
      industry: "Startup",
      projectType: "Full Stack Development",
      featured: false,
      metrics: { ahead: "3 months", satisfaction: "98%" },
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "HealthTech Innovations",
      rating: 5,
      text: "Ctas delivered a comprehensive healthcare platform that exceeded our expectations. The system handles 50,000+ patients seamlessly with zero downtime.",
      avatar: "SJ",
      industry: "Healthcare",
      projectType: "Healthcare Platform",
      featured: true,
      metrics: { users: "50k+", uptime: "100%" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200/8 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-200/8 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* Header - Compact */}
        <div className="text-center space-y-2 mb-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium border border-purple-200">
            <Users className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            What Our{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Clients Say
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mt-1">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about their
            experience working with Ctas Info Services LLP.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-4">
          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            {/* Featured Badge */}
            {currentClient.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </div>
            )}

            {/* Quote Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Industry & Project Type */}
            <div className="flex flex-wrap justify-center gap-1 mb-2 sm:mb-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                {currentClient.industry}
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full border border-pink-200">
                {currentClient.projectType}
              </span>
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-2 sm:mb-3">
              {[...Array(currentClient.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-900 leading-snug mb-2 sm:mb-3 font-medium max-w-2xl mx-auto">
              &quot;{currentClient.text}&quot;
            </blockquote>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-3">
              {Object.entries(currentClient.metrics).map(([key, value], idx) => (
                <div key={idx} className="text-center">
                  <div className="text-base sm:text-lg font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base shadow-lg">
                {currentClient.avatar}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
                  {currentClient.name}
                </span>
                <span className="text-xs sm:text-sm text-purple-600 font-medium leading-tight">
                  {currentClient.role}
                </span>
                <span className="text-xs text-gray-400 leading-tight">{currentClient.company}</span>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Navigation Buttons */}

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1} by ${testimonials[index].name}`}
                aria-current={index === currentTestimonial ? "true" : undefined}
                className={`min-w-[44px] min-h-[44px] w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 flex items-center justify-center ${
                  index === currentTestimonial
                    ? "bg-purple-600 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
