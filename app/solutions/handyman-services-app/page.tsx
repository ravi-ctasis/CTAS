
;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Wrench,
  Star,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Server,
  Home,
  Calendar,
  MapPin,
  CreditCard,
  MessageSquare,
  CheckCircle,
  Truck,
} from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface TechStackProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
        <div className={`w-full h-full ${gradient} rounded-full blur-2xl`}></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div
          className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${gradient} text-white mb-6 shadow-lg border-2 border-white/20`}
        >
          {icon ? (
            <div className="text-white">{icon}</div>
          ) : (
            <Wrench className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
          <div className="text-white text-2xl">
            {icon || <Code className="w-8 h-8 text-white" />}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HandymanServicesAppPage = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Service Booking",
      description:
        "Easy-to-use booking system for customers to schedule handyman services with real-time availability.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location-Based Matching",
      description:
        "Smart algorithm to match customers with nearby qualified handymen based on location and service type.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Real-Time Scheduling",
      description:
        "Dynamic calendar system with instant booking confirmation and automated reminders.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-500",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description:
        "Multiple payment options with secure transaction processing and escrow protection.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "In-App Communication",
      description:
        "Built-in chat and call features for seamless communication between customers and handymen.",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating & Reviews",
      description:
        "Comprehensive review system to help customers choose the best handymen and maintain quality standards.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verification System",
      description:
        "Background checks, ID verification, and insurance validation for all registered handymen.",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Service Tracking",
      description:
        "Real-time tracking of handyman location and estimated arrival time for better customer experience.",
      gradient: "bg-gradient-to-br from-red-500 to-pink-500",
    },
  ];

  const techStack = [
    {
      icon: <MobileIcon className="w-8 h-8" />,
      name: "React Native",
      description: "Cross-platform mobile development for iOS and Android",
    },
    {
      icon: <WebIcon className="w-8 h-8" />,
      name: "Next.js",
      description: "Modern web framework for admin dashboard and web app",
    },
    {
      icon: <Server className="w-8 h-8" />,
      name: "Node.js",
      description: "Scalable backend server with Express.js framework",
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "MongoDB",
      description: "Flexible NoSQL database for dynamic data management",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "AWS",
      description: "Cloud infrastructure for scalability and reliability",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Socket.io",
      description: "Real-time communication and notifications",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Customers",
      items: [
        "Quick access to qualified handymen",
        "Transparent pricing and service details",
        "Real-time tracking and updates",
        "Secure payment processing",
        "Easy booking and rescheduling",
        "Quality assurance through reviews",
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "For Handymen",
      items: [
        "Increased job opportunities",
        "Flexible working hours",
        "Direct customer communication",
        "Secure payment collection",
        "Professional profile building",
        "Customer feedback and ratings",
      ],
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "For Homeowners",
      items: [
        "Reliable home maintenance services",
        "Emergency service availability",
        "Professional quality assurance",
        "Cost-effective solutions",
        "Scheduled maintenance plans",
        "Warranty and insurance coverage",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated Background Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                  <Wrench className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-sm font-medium text-blue-100">
                    Home Services Marketplace
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-white">Handyman</span>
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    Services App
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl lg:max-w-none">
                  Revolutionize home maintenance with our comprehensive marketplace platform.
                  <span className="text-white font-semibold">
                    {" "}
                    Connect homeowners with verified professionals
                  </span>
                  for reliable, convenient, and quality home services.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  <div className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-cyan-300 mr-2" />
                    <span className="text-blue-100 text-sm font-medium">
                      Verified Professionals
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-cyan-300 mr-2" />
                    <span className="text-blue-100 text-sm font-medium">Instant Booking</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-cyan-300 mr-2" />
                    <span className="text-blue-100 text-sm font-medium">Secure Payments</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact-us">
                    <Button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Start Free Consultation
                    </Button>
                  </Link>
                  <Link href="/portfolios">
                    <Button
                      variant="outline"
                      className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Portfolios
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative hidden lg:block">
                {/* Main App Mockup */}
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-600 rounded-[2.5rem] p-6 relative overflow-hidden">
                      {/* App Content Mockup */}
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Wrench className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-sm font-medium">Home Services</div>
                        </div>

                        {/* Search Bar */}
                        <div className="bg-white/20 rounded-full p-3 flex items-center">
                          <MapPin className="w-4 h-4 text-white mr-2" />
                          <span className="text-white text-sm">Find services near you...</span>
                        </div>

                        {/* Service Categories */}
                        <div className="grid grid-cols-2 gap-3">
                          {["Plumbing", "Electrical", "Cleaning", "Repair"].map((service, idx) => (
                            <div key={idx} className="bg-white/20 rounded-xl p-3 text-center">
                              <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                              <span className="text-white text-xs font-medium">{service}</span>
                            </div>
                          ))}
                        </div>

                        {/* Handyman Card */}
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-white font-semibold text-sm">John Smith</div>
                              <div className="text-blue-200 text-xs">Plumbing Expert</div>
                              <div className="flex items-center mt-1">
                                <Star className="w-3 h-3 text-cyan-300 fill-current" />
                                <span className="text-white text-xs ml-1">4.9 (127 reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <Shield className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Verified Handymen</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Home Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything needed to run a successful home
              services marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits for All Stakeholders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for customers, service providers, and homeowners alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <ul className="space-y-3 text-left">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies for performance, scalability, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <TechStack key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Covering all aspects of home maintenance and improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Plumbing Services",
              "Electrical Work",
              "Carpentry & Woodwork",
              "Painting & Decorating",
              "Cleaning Services",
              "Landscaping & Gardening",
              "HVAC Services",
              "Appliance Repair",
              "Roofing & Gutters",
              "Flooring Installation",
              "Window & Door Repair",
              "General Maintenance",
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500"
              >
                <div className="flex items-center">
                  <Wrench className="w-6 h-6 text-blue-500 mr-3" />
                  <span className="font-semibold text-gray-800">{service}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Your Handyman Services Platform?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8">
            Join the growing home services market with a professional, feature-rich platform that
            connects customers with skilled professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HandymanServicesAppPage;
