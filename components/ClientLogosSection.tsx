import { useState, useEffect } from "react";

const ClientLogosSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Premium client logos (using text for demo - replace with actual logos)
  const clientLogos = [
    { name: "Microsoft", industry: "Technology" },
    { name: "Apple", industry: "Technology" },
    { name: "Google", industry: "Technology" },
    { name: "Amazon", industry: "E-commerce" },
    { name: "Tesla", industry: "Automotive" },
    { name: "Netflix", industry: "Entertainment" },
    { name: "Spotify", industry: "Music" },
    { name: "Adobe", industry: "Software" },
    { name: "IBM", industry: "Technology" },
    { name: "Oracle", industry: "Database" },
    { name: "Salesforce", industry: "CRM" },
    { name: "Meta", industry: "Social Media" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 6));
    }, 3000);
    return () => clearInterval(timer);
  }, [clientLogos.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-white overflow-hidden">
      <div className="max-w-[1584px] mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-brand-blue">2000+</span> Companies Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the world&apos;s leading companies that trust Ctas Info Services LLP for their
            digital transformation journey
          </p>
        </div>

        {/* Animated Logo Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.slice(currentSlide * 6, currentSlide * 6 + 6).map((client, index) => (
              <div
                key={`${client.name}-${currentSlide}`}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-brand-blue rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
                <div className="absolute inset-0 bg-brand-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: Math.ceil(clientLogos.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-brand-blue scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-blue mb-2">2K+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">900+</div>
            <div className="text-gray-600 font-medium">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-blue mb-2">200+</div>
            <div className="text-gray-600 font-medium">Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">7</div>
            <div className="text-gray-600 font-medium">Office Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
