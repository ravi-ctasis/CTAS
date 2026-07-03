
;
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Rocket, Check, Briefcase, Settings } from "lucide-react";
import Link from "next/link";

const FashionMarketplaceCaseStudy = () => {
  // Update the projectData object with content without icons:

  const projectData = {
    title: "Fashion Marketplace Web App",
    subtitle: "Multi-Vendor E-commerce Web Platform for Clothing & Footwear",
    description:
      "A comprehensive fashion marketplace web platform that connects vendors with customers, offering a seamless shopping experience with advanced features like AR try-on, real-time tracking, and secure payments using modern e-commerce development technologies.",
    longDescription:
      "The fashion industry is rapidly embracing digital transformation. Our client wanted to launch a multi-vendor fashion marketplace web platform where multiple sellers could list and sell their apparel and accessories directly to customers. The goal was to build a secure, scalable, and visually stunning web application that delivers a seamless shopping experience for end-users while empowering vendors with a robust management panel using advanced e-commerce development techniques.",
    category: "E-commerce & Marketplace Development",
    industry: "Fashion & Retail",
    duration: "6 months",
    teamSize: "15",
    budget: "$50,000",
    status: "Completed",
    technologies: ["Next.js", "Node.js", "MySQL", "AWS"],
    platforms: ["Web", "Responsive Design"],
    stats: {
      platforms: "Web & Mobile Responsive",
      vendors: "50+",
      products: "1000+",
      users: "5000+",
      rating: "4.8",
      visitors: "10K+",
    },
    challenges: [
      "Multi-vendor platform complexity development",
      "Real-time inventory synchronization implementation",
      "Cross-browser compatibility development",
      "Secure payment integration implementation",
      "User experience optimization development",
    ],
    solutions: [
      "Next.js for server-side rendering and SEO optimization development",
      "Node.js + Express for scalable REST APIs implementation",
      "MySQL database for secure data management development",
      "Modular architecture for easy future upgrades implementation",
    ],
    projectHighlights: [
      "Multi-Vendor Marketplace – Enable multiple fashion sellers to register, list, and manage their products development",
      "Modern UI/UX – Responsive and mobile-friendly design with a clean shopping interface implementation",
      "Smart Product Filters – Category, price, color, size, and brand-based filtering development",
      "Secure Payment Gateway – Integrated with multiple payment options for easy checkout implementation",
      "Real-Time Order Tracking – Customers can track orders end-to-end development",
      "Push Notifications – For order updates, new arrivals, and offers implementation",
    ],
    goals: [
      "Build a visually appealing and user-friendly fashion marketplace website development",
      "Ensure secure and fast transactions for buyers implementation",
      "Provide vendors with easy-to-use dashboards to manage inventory and orders development",
      "Increase user engagement with personalized recommendations and discount campaigns implementation",
    ],
    strategy: [
      "Developed using Next.js for server-side rendering and SEO optimization implementation",
      "Created REST APIs with Node.js + Express for scalability development",
      "Used MySQL database for secure product, order, and user data management implementation",
      "Designed a modular architecture for easy future upgrades development",
    ],
    outcomes: [
      "Successful Launch – The platform went live in record time",
      "25% Increase in Conversions – Thanks to smooth checkout and UX",
      "High Vendor Adoption – Vendors onboarded quickly with minimal training",
      "Scalable Architecture – Can handle growing product and user base",
    ],
    client: {
      name: "Fashion Forward Kuwait",
      industry: "Fashion & E-commerce",
      size: "Mid-size",
      location: "Kuwait",
      description:
        "Our client is a fashion retail startup targeting the GCC market. They wanted to bridge the gap between fashion vendors and customers with a single platform for browsing, ordering, and paying online. Their requirement was clear: speed, security, and scalability.",
      requirements: [
        "Develop an e-commerce web platform for vendors and buyers",
        "Allow vendors to showcase their products and access feature banners for promotion",
        "Provide an extensive range of product listings and secure payment for buyers",
        "Add a backend panel for Admin to manage vendors and buyers and generate reports",
      ],
      testimonial: {
        quote:
          "The web platform has revolutionized how we connect with our customers. The multi-vendor approach and real-time tracking features have significantly improved our business operations.",
        author: "Ahmed Al-Rashid",
        position: "CEO, Fashion Forward Kuwait",
        avatar: "/fashion-marketplace-web/avatar.jpg",
      },
    },
    proposedSolution: {
      description:
        "Developed a web-first solution with an optimized product listing experience. Built a dedicated vendor panel for sellers to add products, manage pricing, and fulfill orders. Integrated a secure payment gateway supporting multiple currencies. Added real-time analytics for admins to track orders, revenue, and user growth.",
      whyChoose: [
        "Next.js ensures server-side rendering and SEO optimization for better search visibility",
        "Node.js + Express provides scalable REST APIs for handling high traffic",
        "MySQL database ensures secure and reliable data storage for all platform operations",
        "Modular architecture allows for easy future upgrades and feature additions",
      ],
    },
    benefits: [
      "This solution allowed the client to: Launch a profitable marketplace within months, Provide a smooth customer experience with easy checkout, Gain insights from real-time sales analytics, Onboard vendors faster, boosting product variety",
    ],
    keyFeatures: [
      {
        title: "User Registration & Login",
        description: "User Registration & Login with social login support",
      },
      {
        title: "Advanced Search & Filters",
        description: "Advanced Search & Filters",
      },
      {
        title: "Personalized Recommendations",
        description: "Personalized Recommendations",
      },
      {
        title: "Shopping Cart & Wishlist",
        description: "Shopping Cart & Wishlist",
      },
      {
        title: "Multiple Payment Gateways",
        description: "Multiple Payment Gateways",
      },
      {
        title: "Order Tracking & Notifications",
        description: "Order Tracking & Notifications",
      },
      {
        title: "Vendor Management Panel",
        description: "Vendor Management Panel",
      },
      {
        title: "Admin Dashboard with Analytics",
        description: "Admin Dashboard with Analytics",
      },
      {
        title: "Multi-language & Multi-currency Support",
        description: "Multi-language & Multi-currency Support",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Dark Blue/Purple Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            {projectData.title}
          </h1>

          {/* Technology & Platform Badges */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-3 font-semibold">TECHNOLOGY</div>
              <div className="flex flex-wrap justify-center gap-2">
                {projectData.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-300 mb-3 font-semibold">PLATFORM</div>
              <div className="flex flex-wrap justify-center gap-2">
                {projectData.platforms.map((platform, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections - White Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{projectData.client.description}</p>
        </section>

        {/* Project Highlights Section - Enhanced Design (Title Left, Content Right) */}
        <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  Project Highlights
                </h2>
                <p className="text-gray-600 text-sm">Key features and achievements</p>
              </div>
            </div>

            {/* Content on the right */}
            <div className="flex-1 order-2 lg:order-2">
              <div className="grid gap-4">
                {projectData.projectHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-base leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section - Enhanced Design */}
        <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  Goals
                </h2>
                <p className="text-gray-600 text-sm">Strategic objectives</p>
              </div>
            </div>

            {/* Content on the right */}
            <div className="flex-1 order-2 lg:order-2">
              <div className="grid gap-4">
                {projectData.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-base leading-relaxed font-medium">
                        {goal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section - Enhanced Design */}
        <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  Strategy
                </h2>
                <p className="text-gray-600 text-sm">Implementation approach</p>
              </div>
            </div>

            {/* Content on the right */}
            <div className="flex-1 order-2 lg:order-2">
              <div className="grid gap-4">
                {projectData.strategy.map((strategy, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-base leading-relaxed font-medium">
                        {strategy}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section - Enhanced Design */}
        <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  Outcomes
                </h2>
                <p className="text-gray-600 text-sm">Achieved results</p>
              </div>
            </div>

            {/* Content on the right */}
            <div className="flex-1 order-2 lg:order-2">
              <div className="grid gap-4">
                {projectData.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-base leading-relaxed font-medium">
                        {outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Client Section - Timeline Design */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Client</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Client Info */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-white flex-nowrap shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {projectData.client.name}
                      </h3>
                      <p className="text-gray-600">{projectData.client.industry}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{projectData.client.description}</p>
                </div>
              </div>

              {/* Client Requirements - Timeline Style */}
              <div className="space-y-6">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-pink-500"></div>

                  <div className="space-y-6">
                    {projectData.client.requirements.map((req, index) => (
                      <div key={index} className="relative flex items-start gap-4">
                        {/* Timeline Dot */}
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-red-500 flex-shrink-0 z-10">
                          <span className="text-red-500 font-bold text-sm">{index + 1}</span>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                          <p className="text-gray-700 leading-relaxed font-medium">{req}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proposed Solution Section - Ultra Simple Design */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proposed Solution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Content Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {projectData.proposedSolution.description}
                  </p>

                  <h4 className="text-xl font-bold text-red-600 mb-4">
                    Why We Choose This Solution?
                  </h4>
                  <div className="space-y-4">
                    {projectData.proposedSolution.whyChoose.map((reason, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="space-y-6">
                <div>
                  <Image
                    src="/fashion-marketplace-web-img.webp"
                    alt="Fashion Marketplace Web"
                    width={500}
                    height={400}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit of This Solution Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefit of This Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{projectData.benefits[0]}</p>
        </section>

        {/* Key Features Section - Simple Design */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-lg ">
            <div className="grid md:grid-cols-3 gap-6">
              {projectData.keyFeatures.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-20 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">You Have A Vision. We Have A Way!</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Please send us information about your project. One of our project managers shall
            evaluate your project requirements and give you a formal proposal. Detailed information
            will help us evaluate your project accurately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/portfolios"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              view portfolio
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default FashionMarketplaceCaseStudy;
