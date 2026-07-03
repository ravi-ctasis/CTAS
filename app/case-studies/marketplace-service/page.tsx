
;
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Rocket, Check, Briefcase, Settings } from "lucide-react";
import Link from "next/link";

const FashionMarketplaceCaseStudy = () => {
  // Update only the projectData object with the new content:

  const projectData = {
    title: "Marketplace Development Services",
    subtitle:
      "Build powerful, scalable multi-vendor platforms where buyers & sellers connect seamlessly",
    description:
      "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features. Whether you're planning a product marketplace, a service provider platform, or a hybrid model, Ctasis delivers end-to-end development, design, and support to help your marketplace grow reliably.",
    longDescription:
      "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features. Whether you're planning a product marketplace, a service provider platform, or a hybrid model, Ctasis delivers end-to-end development, design, and support to help your marketplace grow reliably.",
    category: "Marketplace Development",
    industry: "Multi-Vendor Platforms",
    duration: "3-6 months",
    teamSize: "8-15",
    budget: "Custom",
    status: "Ongoing Service",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Payment Gateways"],
    platforms: ["Web", "Mobile", "API"],
    stats: {
      platforms: "Web & Mobile",
      orders: "Unlimited",
      marketplaces: "Multi-Vendor",
      efficiency: "99%",
      accuracy: "Real-time",
      reduction: "Automated",
    },
    challenges: [
      "Building scalable architecture for multiple vendors",
      "Implementing secure payment processing",
      "Creating intuitive user experience for buyers and sellers",
      "Ensuring real-time inventory synchronization",
    ],
    solutions: [
      "Multi-Vendor Architecture: Built scalable backend to support unlimited vendors with individual dashboards",
      "Secure Payment Integration: Implemented multiple payment gateways with fraud prevention and commission management",
      "Responsive Design: Created mobile-first UI/UX that works seamlessly across all devices",
      "Real-Time Sync: Developed live inventory and order tracking system",
    ],
    projectHighlights: [
      "Multi-Vendor Enablement: Sellers sign up, manage inventories, services, pricing, orders, and shipments under one dashboard",
      "Browse, Search & Filter: Advanced filters (category, price, rating), quick product/service discovery",
      "Secure Checkout & Payments: Multiple payment gateway support, commissions, fraud prevention",
      "Order & Booking Management: Real-time order tracking, scheduling, service appointment workflows",
      "Vendor Dashboard & Analytics: Vendor performance, sales reports, payouts",
    ],
    goals: [
      "Build an all-in-one marketplace platform with support for different content types",
      "Provide seamless user experience for buyers, sellers, and admins",
      "Enable real-time inventory and order management",
      "Ensure secure transactions with fraud prevention",
      "Create scalable architecture for future growth",
    ],
    strategy: [
      "Discovery & Planning: We start by understanding your marketplace vision, target audience, competitors & business model",
      "Wireframe & Design: UX/UI prototypes, buyer & seller flows, admin panels — clean, intuitive, strong branding",
      "Development & Integrations: Backend + front end, API integrations (shipping, payment, inventory), microservices if needed",
      "Quality Assurance & Testing: Functional testing, mobile responsiveness, performance & security audits",
      "Launch & Post-Launch Support: Deployment, monitoring, periodic updates, scaling, customer support",
    ],
    outcomes: [
      "Years of experience delivering custom marketplace platforms",
      "Full control: you own your data / code",
      "Agile & client-focused — regular feedback & adaptation",
      "Secure, scalable, reliable architectures",
      "Transparent pricing & timely delivery",
    ],
    client: {
      name: "Various Industries",
      industry: "Multi-Sector",
      size: "Startup to Enterprise",
      location: "Global",
      description:
        "We serve clients across various industries including Fashion & Apparel, Home & Living Goods, Food & Grocery, Health & Beauty, Services (Salon, Repair, Consultation), and B2B & Wholesale Marketplaces.",
      requirements: [
        "Build robust marketplace platform with multi-vendor support",
        "Implement secure payment processing and commission management",
        "Create responsive design for web and mobile platforms",
        "Add real-time analytics and reporting capabilities",
      ],
      testimonial: {
        quote:
          "Ctasis delivered an exceptional marketplace platform that exceeded our expectations. The multi-vendor system works flawlessly, and our vendors love the intuitive dashboard.",
        author: "Sarah Johnson",
        position: "CEO, Fashion Marketplace",
        avatar: "/marketplace-service/avatar.jpg",
      },
    },
    proposedSolution: {
      description:
        "We provide end-to-end marketplace development services including custom platform development, vendor onboarding systems, secure payment integration, real-time analytics, and ongoing support. Our solutions are built to scale and adapt to your business needs.",
      whyChoose: [
        "Proven track record with successful marketplace launches",
        "Full-stack development expertise with modern technologies",
        "Comprehensive support from planning to post-launch",
        "Scalable architecture designed for growth",
      ],
    },
    benefits: [
      "Complete marketplace solution from concept to launch. Expert team with marketplace development experience. Ongoing support and maintenance. Scalable architecture for future growth. Custom features tailored to your business needs.",
    ],
    keyFeatures: [
      {
        title: "Multi-Vendor Enablement",
        description:
          "Sellers sign up, manage inventories, services, pricing, orders, and shipments under one dashboard",
      },
      {
        title: "Browse, Search & Filter",
        description: "Advanced filters (category, price, rating), quick product/service discovery",
      },
      {
        title: "Secure Checkout & Payments",
        description: "Multiple payment gateway support, commissions, fraud prevention",
      },
      {
        title: "Order & Booking Management",
        description: "Real-time order tracking, scheduling, service appointment workflows",
      },
      {
        title: "Vendor Dashboard & Analytics",
        description: "Vendor performance, sales reports, payouts",
      },
      {
        title: "Responsive UI / Cross-Platform",
        description: "Web + mobile-friendly experience, clean designs, fast loading",
      },
      {
        title: "Multilingual & Multi-Currency Support",
        description: "Ready for global market expansion",
      },
      {
        title: "Scalable Backend & Integrations",
        description: "Integrate with inventory systems, CRM, shipping & third-party service APIs",
      },
      {
        title: "Notifications & Alerts",
        description: "Email / push / SMS for order updates, cancellations, low stock etc",
      },
      {
        title: "Security & Compliance",
        description: "Data protection, access controls, encryption, PCI / GDPR readiness",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Dark Blue/Purple Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
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
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Title on the left */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-1 lg:min-w-[350px]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Client Info */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
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
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

                  <div className="space-y-6">
                    {projectData.client.requirements.map((req, index) => (
                      <div key={index} className="relative flex items-start gap-4">
                        {/* Timeline Dot */}
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-green-500 flex-shrink-0 z-10">
                          <span className="text-green-500 font-bold text-sm">{index + 1}</span>
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
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

                  <h4 className="text-xl font-bold text-green-600 mb-4">
                    Why We Choose This Solution?
                  </h4>
                  <div className="space-y-4">
                    {projectData.proposedSolution.whyChoose.map((reason, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    src="/marketplace-service.webp"
                    alt="Amazon Order Automation Platform Dashboard"
                    width={1000}
                    height={1000}
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-lg ">
            <div className="grid md:grid-cols-3 gap-6">
              {projectData.keyFeatures.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
      {/* CTA Section */}
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
