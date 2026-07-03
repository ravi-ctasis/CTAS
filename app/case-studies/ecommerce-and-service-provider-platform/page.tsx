
;
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Rocket, Check, Briefcase, Settings } from "lucide-react";
import Link from "next/link";

const FashionMarketplaceCaseStudy = () => {
  // Define all screenshots for slide functionality
  // const screenshots = [
  //   {
  //     src: "/DatingAppscrollimg1.webp",
  //     title: "Fashion Marketplace - Home Screen",
  //     description:
  //       "Modern home interface showcasing featured collections and trending items",
  //   },
  //   {
  //     src: "/DatingAppscrollimg2.webp",
  //     title: "Product Discovery - Fashion Marketplace",
  //     description:
  //       "Advanced filtering and search capabilities for fashion items",
  //   },
  //   {
  //     src: "/DatingAppscrollimg3.webp",
  //     title: "Virtual Try-On - Fashion Marketplace",
  //     description: "AR-powered virtual try-on experience for customers",
  //   },
  // ];

  // Update only the projectData object with the new content:

  const projectData = {
    title: "E-Commerce and Service Provider Platform",
    subtitle: "Integrated Multi-Vendor Marketplace with Service Booking",
    description:
      "A comprehensive e-commerce and service provider platform that allows users to purchase products, book services, and manage their orders in one place with seamless integration and secure payments using modern marketplace development technologies.",
    longDescription:
      "Our client wanted to build an integrated e-commerce and service provider platform that allows users to purchase products, book services, and manage their orders in one place. The goal was to create a seamless experience where users could shop online, schedule service appointments, and make secure payments — all from a single platform. We were tasked with designing a scalable solution that can support thousands of vendors and service providers, handle high traffic, and offer a smooth user experience across devices using advanced marketplace development techniques.",
    category: "E-commerce & Services Development",
    industry: "Retail & Service Aggregation",
    duration: "10 months",
    teamSize: "20",
    budget: "$100,000",
    status: "Completed",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    platforms: ["Web", "Mobile Responsive"],
    stats: {
      platforms: "Web & Mobile Responsive",
      vendors: "500+",
      products: "5000+",
      services: "200+",
      users: "10000+",
      rating: "4.7",
      transactions: "50K+",
    },
    challenges: [
      "Complex multi-vendor system integration development",
      "Real-time service booking and scheduling implementation",
      "Unified cart and checkout system development",
      "Secure payment gateway integration implementation",
      "High traffic and scalability requirements development",
    ],
    solutions: [
      "Next.js + Tailwind CSS for responsive and fast front-end development",
      "Node.js + Express for scalable REST APIs and real-time features implementation",
      "MongoDB database for flexible product and service data management development",
      "WebSockets for real-time notifications and updates implementation",
    ],
    projectHighlights: [
      "Multi-Vendor Marketplace – Support for multiple sellers to list products and services development",
      "Service Booking Engine – Users can schedule appointments with available service providers implementation",
      "Integrated Cart & Checkout – Combine product orders and service bookings in one transaction development",
      "Secure Payment Gateway – Multi-method payment support with real-time confirmation implementation",
      "Push Notifications – Instant updates on order status and service reminders development",
      "Admin & Vendor Dashboards – Centralized management for products, orders, and schedules implementation",
    ],
    goals: [
      "Build a unified platform for products and services development",
      "Deliver a smooth shopping and booking experience with minimal steps implementation",
      "Provide vendor onboarding and management tools for easy scaling development",
      "Ensure secure payments and fraud prevention mechanisms implementation",
      "Support mobile-first design to reach a wider audience development",
    ],
    strategy: [
      "Designed modern UI/UX using Figma for a clean, user-friendly flow development",
      "Developed the backend using Node.js + Express for scalable APIs implementation",
      "Used Next.js + Tailwind CSS for a responsive and fast front-end development",
      "Integrated real-time notifications using WebSockets implementation",
      "Set up role-based access control for users, vendors, and admins development",
      "Added analytics dashboards for vendors to monitor sales and bookings implementation",
    ],
    outcomes: [
      "Seamless User Experience – Users could shop and book services in a single flow",
      "Revenue Growth – Client saw a 35% increase in transactions in the first quarter after launch",
      "Fast Performance – Optimized platform handled high traffic with minimal downtime",
      "Secure & Compliant – PCI-DSS compliant payment solution ensured safe transactions",
    ],
    client: {
      name: "RetailService Pro",
      industry: "Retail & Service Aggregation",
      size: "Mid-size",
      location: "United States",
      description:
        "The client is a growing retail and service aggregator aiming to combine e-commerce and on-demand services into one unified platform. They wanted a custom solution to reduce dependency on third-party tools and create a branded user experience.",
      requirements: [
        "Develop a comprehensive e-commerce and service booking platform",
        "Allow vendors to list products and service providers to manage schedules",
        "Provide users with unified shopping and booking experience",
        "Add admin dashboard for platform management and analytics",
      ],
      testimonial: {
        quote:
          "The integrated platform has transformed how we serve our customers. The seamless shopping and service booking experience has significantly improved user satisfaction and business growth.",
        author: "Michael Chen",
        position: "CEO, RetailService Pro",
        avatar: "/ecommerce-and-service-provider-platform/avatar.jpg",
      },
    },
    proposedSolution: {
      description:
        "Built a scalable multi-vendor system to support unlimited sellers and service providers. Developed smart scheduling and availability management for service bookings. Integrated multi-payment gateways for global coverage. Added centralized reporting dashboard for business insights. Ensured SEO-friendly architecture for better search engine visibility.",
      whyChoose: [
        "Next.js + Tailwind CSS ensures responsive and fast front-end development for optimal user experience",
        "Node.js + Express provides scalable backend with real-time features for high traffic handling",
        "MongoDB database ensures flexible and reliable data storage for products, services, and user data",
        "WebSockets integration enables real-time notifications and updates for better user engagement",
      ],
    },
    benefits: [
      "The platform helped: Customers – Shop, book, and pay in a single app with full order transparency, Vendors & Providers – Easily manage inventory, schedules, and earnings, Admin Team – Monitor platform health, revenue, and vendor performance in real-time",
    ],
    keyFeatures: [
      {
        title: "Multi-Vendor Product Listings",
        description: "Multi-Vendor Product Listings",
      },
      {
        title: "Service Provider Profiles & Booking System",
        description: "Service Provider Profiles & Booking System",
      },
      {
        title: "Unified Cart & Single Checkout",
        description: "Unified Cart & Single Checkout",
      },
      {
        title: "Real-Time Order Tracking",
        description: "Real-Time Order Tracking",
      },
      {
        title: "Secure Payment Gateway Integration",
        description: "Secure Payment Gateway Integration",
      },
      {
        title: "Admin & Vendor Dashboards",
        description: "Admin & Vendor Dashboards",
      },
      {
        title: "Analytics & Reporting",
        description: "Analytics & Reporting",
      },
      {
        title: "Customer Reviews & Ratings",
        description: "Customer Reviews & Ratings",
      },
      {
        title: "Push Notifications & Alerts",
        description: "Push Notifications & Alerts",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
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

              <div className="space-y-6">
                <Image
                  src="/e-commerce-service-provider.webp"
                  alt="Ecommerce and Service Provider Platform"
                  width={1000}
                  height={1000}
                  className=" w-full h-full object-cover rounded-2xl"
                />
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
