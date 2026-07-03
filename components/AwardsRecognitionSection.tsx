"use client";

import Image from "next/image";

const AwardsRecognitionSection = () => {
  const awards = [
    {
      name: "Amazon Web Services",
      image: "/amazon-1.webp",
    },
    {
      name: "ISO Certification",
      image: "/aws-advanced-tier.webp",
    },
    {
      name: "BusinessFirms Verified",
      image: "/businessfirms.webp",
    },

    {
      name: "GoodFirms",
      image: "/goodfirms-1.webp",
    },
    {
      name: "Web Development",
      image: "/web-dev-us.webp",
    },
    {
      name: "Excellence in Customer Service",
      image: "/amazon-selling-partner-source.webp",
    },
    {
      name: "Global Awards",
      image: "/amazon-ads.webp",
    },
    {
      name: "Artificial Developers",
      image: "/artifical.webp",
    },
    // {
    //   name: "The EdTech Awards",
    //   image: "/Awardsimg/edtech-awards-1.webp",
    // },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium border border-red-200 mb-4">
            AWARDS & RECOGNITION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Committed to{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Excellence
            </span>
          </h2>
        </div>

        {/* Awards Grid - Images Only */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 hover:border-blue-400 hover:shadow-lg transition- flex items-center justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:h-40 sm:h-20 flex items-center justify-center">
                <Image
                  src={award.image}
                  alt={award.name}
                  width={200}
                  height={150}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                  quality={85}
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
