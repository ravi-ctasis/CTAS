
;
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Rocket, Check, Briefcase, Settings } from "lucide-react";
import Link from "next/link";

const ELearningPlatform = () => {
  // Update the projectData object with the new content:

  const projectData = {
    title: "Custom eLearning Platform",
    subtitle: "Comprehensive Online Learning Management System",
    description:
      "A comprehensive e-learning platform that provides educational institutions and organizations with tools to create, manage, and deliver online courses with advanced features like video streaming, assessments, and progress tracking.",
    longDescription:
      "With the increasing demand for remote learning and corporate training, our client needed a custom eLearning platform that supports both individual learners and enterprises. They wanted a scalable, interactive, and secure solution that provides a smooth learning experience, supports video streaming, quizzes, certifications, and admin reporting dashboards. Our objective was to build a platform that delivers engaging education experiences while allowing administrators to manage content, track learners, and measure performance.",
    category: "E-learning & Education",
    industry: "Education & Training",
    duration: "8 months",
    teamSize: "18",
    budget: "$75,000",
    status: "Completed",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    platforms: ["Web", "Responsive Design"],
    stats: {
      platforms: "Web & Mobile Responsive",
      courses: "200+",
      students: "5000+",
      instructors: "100+",
      rating: "4.9",
      completion: "85%",
    },
    challenges: [
      "Complex course management system development",
      "Real-time video streaming and playback implementation",
      "Cross-browser compatibility for multimedia content delivery",
      "Secure assessment and grading system development",
      "User progress tracking and analytics implementation",
    ],
    solutions: [
      "React for responsive web development and interactive UI implementation",
      "Node.js + Express for scalable REST APIs and real-time features development",
      "MongoDB database for flexible course and user data management implementation",
      "AWS CloudFront for optimized video content delivery development",
    ],
    projectHighlights: [
      "Custom LMS Development – Tailor-made learning management system with flexible course creation implementation",
      "Video-Based Learning – Integrated secure streaming for on-demand and live sessions development",
      "Interactive Assessments – Quizzes, assignments, and instant grading system implementation",
      "Analytics & Reports – Track learner progress, course completion, and performance insights development",
      "Certification Generation – Automatic digital certificates after course completion implementation",
      "Multi-Platform Access – Web & mobile-friendly responsive design development",
    ],
    goals: [
      "Build an all-in-one eLearning platform with support for different content types development",
      "Provide seamless user experience for students, teachers, and admins implementation",
      "Enable gamification and progress tracking for increased engagement development",
      "Ensure secure content delivery with DRM and role-based access control implementation",
    ],
    strategy: [
      "Designed intuitive UI/UX for learners and instructors using Figma development",
      "Developed backend using Node.js + Express with JWT-based authentication implementation",
      "Used React/Next.js for building a responsive and fast front-end development",
      "Integrated video hosting and streaming APIs (e.g., Vimeo/Cloudflare Stream) implementation",
      "Implemented role-based access control (RBAC) for different user types development",
      "Built a reporting dashboard using Chart.js for data visualization implementation",
    ],
    outcomes: [
      "Increased Engagement by 40% – Gamified learning improved participation",
      "Scalable Platform – Able to onboard 10,000+ learners without downtime",
      "Reduced Admin Workload – Automated certificate generation and reporting",
      "Global Reach – Supported multiple languages and time zones",
    ],
    client: {
      name: "EduTech Solutions",
      industry: "Education Technology",
      size: "Mid-size",
      location: "United States",
      description:
        "Our client is an education technology provider who wanted a solution to host and manage corporate training programs, student learning modules, and online workshops under one platform. Their focus was on usability, analytics, and security to meet both B2C and B2B needs.",
      requirements: [
        "Develop a comprehensive e-learning web platform for educators and students",
        "Allow instructors to create and manage courses with multimedia content",
        "Provide students with access to courses, assessments, and progress tracking",
        "Add an admin dashboard for platform management and analytics",
      ],
      testimonial: {
        quote:
          "The e-learning platform has transformed how we deliver education. The comprehensive course management tools and student engagement features have significantly improved learning outcomes.",
        author: "Dr. Sarah Johnson",
        position: "CEO, EduTech Solutions",
        avatar: "/custom-elearning-platform/avatar.jpg",
      },
    },
    proposedSolution: {
      description:
        "Built a cloud-hosted LMS platform with a scalable architecture. Added interactive learning tools like discussion forums, leaderboards, and quizzes. Integrated secure payment gateway for course purchases and subscriptions. Built a centralized admin dashboard for reporting and analytics. Ensured GDPR compliance and secure data storage.",
      whyChoose: [
        "React/Next.js ensures responsive and fast front-end development for optimal user experience",
        "Node.js + Express provides scalable backend with JWT-based authentication for security",
        "MongoDB database ensures flexible and reliable data storage for courses, users, and progress tracking",
        "Cloud hosting with GDPR compliance ensures secure data storage and global accessibility",
      ],
    },
    benefits: [
      "The platform helped: Students – Learn anytime, anywhere with an engaging interface, Instructors – Easily upload and manage courses, quizzes, and assignments, Organizations – Deliver structured training programs with measurable outcomes, Admins – Monitor performance through detailed reports and analytics",
    ],
    keyFeatures: [
      {
        title: "User Registration & Role-Based Login",
        description: "User Registration & Role-Based Login",
      },
      {
        title: "Course Catalog with Filters",
        description: "Course Catalog with Filters",
      },
      {
        title: "Video Streaming & Live Class Support",
        description: "Video Streaming & Live Class Support",
      },
      {
        title: "Gamification (Badges, Points, Leaderboards)",
        description: "Gamification (Badges, Points, Leaderboards)",
      },
      {
        title: "Quizzes & Instant Feedback",
        description: "Quizzes & Instant Feedback",
      },
      {
        title: "Progress Tracking Dashboard",
        description: "Progress Tracking Dashboard",
      },
      {
        title: "Automated Certificates",
        description: "Automated Certificates",
      },
      {
        title: "Admin & Instructor Analytics Panel",
        description: "Admin & Instructor Analytics Panel",
      },
      {
        title: "Secure Payments & Subscriptions",
        description: "Secure Payments & Subscriptions",
      },
      {
        title: "Multi-language Support",
        description: "Multi-language Support",
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
                <div>
                  <Image
                    src="/custom-e-learning.webp"
                    alt="E-Learning Platform"
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

export default ELearningPlatform;
