"use client";
import React, { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Search,
  Star,
  Eye,
  Calendar,
  Award,
  Code,
  Globe,
  ShoppingCart,
  Heart,
  Building,
  CreditCard,
  GraduationCap,
  Stethoscope,
  Car,
  Gamepad2,
  Utensils,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Rocket,
} from "lucide-react";
import Link from "next/link";


const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedOutcome, setSelectedOutcome] = useState("All");
  const [viewMode] = useState<"grid" | "list">("grid");


  const [sortBy, setSortBy] = useState("featured");

  const caseStudies = useMemo(
    () => [
      {
        id: 1,
        title: "E-Commerce & Multi-Vendor Marketplace Development | Ctas",
        subtitle:
          "Integrated platform for products and services in one place with advanced e-Commerce features",
        category: "e-Commerce Development",
        industry: "Retail",
        outcome: "Market Expansion",
        description:
          "Integrated e-commerce and service provider platform that allows users to purchase products, book services, and manage their orders in one seamless experience using modern marketplace development technologies.",
        longDescription:
          "Built a comprehensive platform that combines e-commerce with service booking capabilities using advanced development techniques. Users can shop for products and schedule service appointments from a single platform with unified cart and checkout implementation.",
        image: "/e-commerce-service-provider.webp",
        client: "ServiceHub Inc",
        href: "/case-studies/ecommerce-and-service-provider-platform",
        duration: "18 months",
        teamSize: "25",
        budget: "$2.5M",
        featured: true,
        stats: {
          views: 25000,
          likes: 3200,
          shares: 1800,
          revenueIncrease: "300%",
          userGrowth: "450%",
          conversionRate: "85%",
        },
        year: "2024",
        challenges: [
          "Unified cart and checkout system development",
          "Service scheduling complexity implementation",
          "Multi-vendor management development",
        ],
        solutions: [
          "Integrated booking engine implementation",
          "Real-time availability sync development",
          "Centralized vendor dashboard implementation",
        ],
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Payment Gateways"],
        testimonial: {
          quote:
            "The platform has revolutionized our business model. Customers love the convenience of shopping and booking services in one place.",
          author: "Lisa Rodriguez",
          position: "Head of Digital Operations",
          avatar: "/logo.webp",
        },
      },
      {
        id: 2,
        title: "Amazon Order Automation Platform - AI-Powered e-Commerce Management System",
        subtitle:
          "Automated order management & inventory synchronization with Amazon SP-API integration",
        category: "Amazon Automation & e-Commerce Solutions",
        industry: "e-Commerce",
        outcome: "Operational Efficiency",
        description:
          "Comprehensive Amazon automation platform that streamlines order processing, inventory management, and multi-marketplace synchronization with real-time updates using Amazon SP-API development.",
        longDescription:
          "Developed a fully automated order management system using Amazon SP-API to handle thousands of orders per day with real-time syncing, error-free operations, and seamless integration with warehouse software using advanced automation development techniques.",
        image: "/amazon-order-automation .webp",
        client: "Multi-Marketplace Amazon Seller",
        duration: "6 months",
        teamSize: "12",
        budget: "$75,000",
        stats: {
          views: 19000,
          likes: 2400,
          shares: 1200,
          efficiency: "90%",
          accuracy: "99%",
          reduction: "70%",
        },
        year: "2024",
        challenges: [
          "Handling large order volumes without server downtime development",
          "Dealing with frequent Amazon API rate limits implementation",
          "Maintaining data consistency across multiple sales channels development",
        ],
        solutions: [
          "API-First Development with Amazon SP-API integration implementation",
          "Scalable microservice-based backend architecture development",
          "Real-time inventory synchronization system implementation",
        ],
        technologies: ["Amazon SP-API", "Node.js", "MongoDB", "AWS"],
        testimonial: {
          quote:
            "The automation platform has transformed our operations. We've seen a 90% reduction in processing time and 70% fewer order cancellations.",
          author: "Sarah Johnson",
          position: "Operations Director",
          avatar: "/logo.webp",
        },
        href: "/case-studies/amazon-order-automation-platform",
      },
      {
        id: 3,
        title: "Marketplace Development Services - Multi-Vendor Platform Solutions",
        subtitle:
          "Build powerful, scalable multi-vendor platforms where buyers & sellers connect seamlessly with advanced marketplace development",
        category: "Marketplace Solutions Development",
        industry: "Technology",
        outcome: "Market Expansion",
        description:
          "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features with end-to-end development and support using modern marketplace development technologies.",
        longDescription:
          "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features using advanced development techniques. Whether you're planning a product marketplace, a service provider platform, or a hybrid model, Ctasis delivers end-to-end development, design, and support to help your marketplace grow reliably.",
        image: "/marketplace-service.webp",
        client: "Various Industries",
        href: "/case-studies/fashion-marketplace-web",
        duration: "3-6 months",
        teamSize: "8-15",
        budget: "Custom",
        featured: true,
        stats: {
          views: 18500,
          likes: 2400,
          shares: 1200,
          platforms: "Web & Mobile",
          orders: "Unlimited",
          marketplaces: "Multi-Vendor",
        },
        year: "2024",
        challenges: [
          "Building scalable architecture for multiple vendors development",
          "Implementing secure payment processing implementation",
          "Creating intuitive user experience for buyers and sellers development",
        ],
        solutions: [
          "Multi-Vendor Architecture with individual dashboards implementation",
          "Secure Payment Integration with fraud prevention development",
          "Responsive Design with mobile-first approach implementation",
        ],
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Payment Gateways"],
        testimonial: {
          quote:
            "Ctasis delivered an exceptional marketplace platform that exceeded our expectations. The multi-vendor system works flawlessly.",
          author: "Sarah Johnson",
          position: "CEO, Fashion Marketplace",
          avatar: "/logo.webp",
        },
      },
      {
        id: 4,
        title: "Custom E-Learning Platform - AI-Powered Medical Diagnosis System",
        subtitle:
          "Personalized learning at scale with AI-driven education for millions of students worldwide",
        category: "Education Technology",
        industry: "Education",
        outcome: "Efficiency Improvement",
        description:
          "AI-powered diagnostic system that reduced diagnosis time by 80% and improved accuracy by 95% with real-time medical image analysis.",
        longDescription:
          "Developed an advanced AI diagnostic system that analyzes medical images and patient data to provide accurate diagnoses. The system integrates with existing hospital infrastructure and provides real-time insights to healthcare professionals.",
        image: "/custom-e-learning.webp",
        client: "Metro Health Systems",
        duration: "24 months",
        teamSize: "18",
        budget: "$3.2M",
        featured: false,
        stats: {
          views: 22000,
          likes: 2900,
          shares: 1500,
          diagnosisTime: "80%",
          accuracy: "95%",
          patientSatisfaction: "92%",
        },
        year: "2024",
        challenges: [
          "HIPAA compliance requirements",
          "Integration with legacy systems",
          "AI model accuracy validation",
        ],
        solutions: [
          "End-to-end encryption",
          "API-first architecture",
          "Continuous learning algorithms",
        ],
        technologies: ["Python", "TensorFlow", "React Native", "PostgreSQL", "AWS"],
        testimonial: {
          quote:
            "This AI system has transformed how we approach patient care. It's like having an expert consultant available 24/7.",
          author: "Dr. Michael Chen",
          position: "Chief Medical Officer",
          avatar: "/logo.webp",
        },
        href: "/case-studies/custom-elearning-platform",
      },
      {
        id: 5,
        title: "Fashion Marketplace Web App",
        subtitle: "Revolutionizing digital fashion retail with a multi-vendor platform",
        category: "e-Commerce",
        industry: "Fashion & Retail",
        outcome: "User Experience",
        description:
          "A next-generation fashion marketplace web application that connects multiple vendors with shoppers, offering seamless browsing, payments, and personalized recommendations.",
        longDescription:
          "We built a comprehensive multi-vendor fashion marketplace that allows brands, designers, and independent sellers to showcase their products on a single platform. The app features secure digital payments, AI-powered product recommendations, biometric login, and real-time order tracking to deliver an innovative and user-friendly shopping experience.",
        image: "/fashion-marketplace-web-img.webp",
        client: "NextGen Fashion Group",
        duration: "14 months",
        teamSize: "20",
        budget: "$2.4M",
        featured: true,
        stats: {
          "views": 22000,
          "likes": 2800,
          "shares": 1350,
          "appRating": "4.9",
          "userAdoption": "82%",
          "transactionSecurity": "99.8%"
        },
        year: "2023",
        challenges: [
          "Seamless multi-vendor integration",
          "High-traffic performance optimization",
          "Cross-platform design consistency"
        ],
        solutions: [
          "Scalable cloud infrastructure",
          "AI-driven recommendation engine",
          "Biometric authentication and digital wallet integration"
        ],
        technologies: [
          "Next.js",
          "React Native",
          "Node.js",
          "Firebase",
          "AWS"
        ],
        testimonial: {
          "quote":
            "This marketplace app has redefined our digital presence. Customers love the smooth interface, secure payments, and personalized shopping experience.",
          "author": "Sophia Martinez",
          "position": "Chief Digital Officer",
          "avatar": "/client-logo.webp"
        },
        href: "/case-studies/fashion-marketplace-web",
      }

    ],
    []
  );

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || study.category === selectedCategory;
      const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
      const matchesOutcome = selectedOutcome === "All" || study.outcome === selectedOutcome;

      return matchesSearch && matchesCategory && matchesIndustry && matchesOutcome;
    });
  }, [caseStudies, searchTerm, selectedCategory, selectedIndustry, selectedOutcome]);

  const sortedCaseStudies = useMemo(() => {
    const sorted = [...filteredCaseStudies];
    switch (sortBy) {
      case "featured":
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case "newest":
        return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      case "popular":
        return sorted.sort((a, b) => b.stats.views - a.stats.views);
      case "budget":
        return sorted.sort(
          (a, b) =>
            parseInt(b.budget.replace(/[^0-9]/g, "")) - parseInt(a.budget.replace(/[^0-9]/g, ""))
        );
      default:
        return sorted;
    }
  }, [filteredCaseStudies, sortBy]);

  const getIndustryIcon = (industry: string) => {
    const icons: { [key: string]: any } = {
      Retail: ShoppingCart,
      Healthcare: Stethoscope,
      Finance: CreditCard,
      Education: GraduationCap,
      "Real Estate": Building,
      "Food & Beverage": Utensils,
      Gaming: Gamepad2,
      Automotive: Car,
      Travel: Globe,
      Health: Heart,
      Technology: Code,
      Fashion: ShoppingCart,
    };
    return icons[industry] || Globe;
  };

  const getOutcomeIcon = (outcome: string) => {
    const icons: { [key: string]: any } = {
      "Revenue Growth": TrendingUp,
      "Efficiency Improvement": Zap,
      "User Experience": Heart,
      "Learning Outcomes": BookOpen,
      "Operational Efficiency": Target,
      "Market Expansion": Rocket,
    };
    return icons[outcome] || CheckCircle;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-violet-600/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold border border-indigo-200 mb-8 shadow-lg">
              <Award className="w-5 h-5 mr-2 animate-bounce" />
              Case Studies
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Success{" "}
              <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text animate-pulse">
                Stories
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text">
                That Inspire
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Discover how we&apos;ve helped businesses transform, innovate, and achieve remarkable
              results through cutting-edge technology solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <span className="text-base font-semibold text-gray-700">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Target className="w-5 h-5 text-purple-500" />
                <span className="text-base font-semibold text-gray-700">95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="w-5 h-5 text-violet-600" />
                <span className="text-base font-semibold text-gray-700">80% Efficiency Gain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search case studies, industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center space-x-4 flex-wrap gap-2">


              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="budget">Highest Budget</option>
              </select>

              {/* <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button> */}
            </div>
          </div>

          {/* Filter Options */}
          {/* Removed showFilters && */}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Highlights Project Cards */}
          {viewMode === "grid" &&
            sortedCaseStudies.filter((study) => study.featured).length > 0 && (
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Case Studies</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {sortedCaseStudies
                    .filter((study) => study.featured)
                    .slice(0, 0)
                    .map((study, index) => (
                      <Card
                        key={`highlight-${study.id}`}
                        className="group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white via-gray-50/50 to-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-indigo-300/60 rounded-3xl hover:bg-gradient-to-br hover:from-white hover:via-indigo-50/30 hover:to-purple-50/30 transform-gpu"
                        style={{
                          animationDelay: `${index * 200}ms`,
                          boxShadow: "0 25px 50px rgba(99, 102, 241, 0.15)",
                          transform: `rotateY(${index % 2 === 0 ? "3deg" : "-3deg"})`,
                        }}
                      >
                        {/* Premium Badge */}
                        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg animate-pulse">
                          <Award className="w-3 h-3 animate-bounce" />
                          <span className="font-extrabold">PREMIUM</span>
                          <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                        </div>

                        {/* Success Metrics Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/50 shadow-lg">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span>Top Success</span>
                            </div>
                          </div>
                        </div>

                        {/* Case Study Image */}
                        <div className="relative overflow-hidden h-64">
                          {/* Decorative Corner Elements */}
                          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-500/40 to-transparent rounded-br-3xl z-10"></div>
                          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/40 to-transparent rounded-bl-3xl z-10"></div>

                          {/* Floating Elements */}
                          <div
                            className="absolute top-4 left-4 w-4 h-4 bg-indigo-400/70 rounded-full animate-bounce"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute top-8 right-6 w-3 h-3 bg-purple-400/70 rounded-full animate-bounce"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          <div
                            className="absolute bottom-6 left-6 w-3.5 h-3.5 bg-violet-400/70 rounded-full animate-bounce"
                            style={{ animationDelay: "1.5s" }}
                          ></div>

                          <Image
                            src={study.image}
                            alt={study.title}
                            height={800}
                            width={600}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                          {/* Enhanced Animated Overlay Pattern */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-transparent to-purple-500/15"></div>
                            <div
                              className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                              }}
                            ></div>
                            {/* Floating Particles */}
                            <div className="absolute inset-0 overflow-hidden">
                              <div
                                className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping"
                                style={{ animationDelay: "0s" }}
                              ></div>
                              <div
                                className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping"
                                style={{ animationDelay: "0.5s" }}
                              ></div>
                              <div
                                className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping"
                                style={{ animationDelay: "1s" }}
                              ></div>
                            </div>
                          </div>

                          {/* Industry Badge */}
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 group-hover:bg-white/30 transition-colors">
                              {React.createElement(getIndustryIcon(study.industry), {
                                className: "w-3 h-3 mr-1",
                              })}
                              {study.industry}
                            </Badge>
                          </div>

                          {/* Stats Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center space-x-2">
                              <Eye className="w-4 h-4" />
                              <span className="font-medium">{study.stats.views}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{study.year}</span>
                            </div>
                          </div>
                        </div>

                        {/* Case Study Content */}
                        <div className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                              {study.title}
                            </h3>
                          </div>

                          <p className="text-gray-600 mb-3 text-base font-medium">
                            {study.subtitle}
                          </p>

                          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            {study.longDescription}
                          </p>

                          {/* Outcome Badge */}
                          <div className="flex items-center space-x-2 mb-6">
                            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 text-sm px-4 py-2">
                              {React.createElement(getOutcomeIcon(study.outcome), {
                                className: "w-4 h-4 mr-2",
                              })}
                              {study.outcome}
                            </Badge>
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3 mb-6">
                            {study.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 group/tech px-3 py-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover/tech:scale-150 transition-transform"></div>
                                  <span>{tech}</span>
                                </div>
                              </Badge>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between ">
                            <Link href={study.href || "#"}>
                              <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white font-bold transition-all duration-300 hover:shadow-xl cursor-pointer rounded-xl relative overflow-hidden group"
                              >
                                <span className="relative z-10">Read Full Case Study</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </Button>
                            </Link>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-2 bg-white/50 px-3 py-2 rounded-full group hover:bg-indigo-50 transition-colors">
                                <Eye className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                                <span className="font-medium group-hover:text-indigo-700 transition-colors">
                                  {study.stats.views}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 bg-white/50 px-3 py-2 rounded-full group hover:bg-yellow-50 transition-colors">
                                <Star className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                                <span className="font-medium group-hover:text-yellow-700 transition-colors">
                                  {study.stats.likes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </Card>
                    ))}
                </div>
              </div>
            )}

          {/* Case Studies Cards - Show all cards in simple grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedCaseStudies.map((study, index) => {
              return (
                <Card
                  key={study.id}
                  className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br from-white via-gray-50/30 to-white/90 backdrop-blur-sm border border-gray-200/80 hover:border-indigo-400/60 rounded-2xl flex flex-col hover:bg-gradient-to-br hover:from-white hover:via-indigo-50/40 hover:to-purple-50/30 transform-gpu"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    boxShadow: study.featured
                      ? "0 25px 60px rgba(99, 102, 241, 0.25)"
                      : "0 8px 30px rgba(0, 0, 0, 0.12)",
                    height: "500px",
                    minHeight: "500px",
                  }}
                >
                  {/* Case Study Image - Fixed responsive design */}
                  <div className="relative overflow-hidden h-full sm:h-48 md:h-96 lg:h-full">
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-indigo-500/30 to-transparent rounded-xl z-10"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-500/30 to-transparent rounded-xl z-10"></div>

                    {/* Floating Elements */}
                    <div
                      className="absolute top-2 left-2 w-2 h-2 bg-indigo-400/70 rounded-full animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute top-4 right-3 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-bounce"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-3 left-3 w-2 h-2 bg-violet-400/70 rounded-full animate-bounce"
                      style={{ animationDelay: "1.5s" }}
                    ></div>

                    <Image
                      src={study.image}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority={index < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Case Study Content */}
                  <div className="p-4 sm:p-5 flex flex-col h-full">
                    {/* Content Section - Takes available space */}
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                        {study.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{study.subtitle}</p>

                      {/* Description */}
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{study.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {study.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button Section - Always at the bottom */}
                    <div className="mt-auto pt-4">
                      <Link href={study.href || "#"} className="block w-full">
                        <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white font-semibold transition-all duration-300 hover:shadow-xl rounded-lg relative overflow-hidden group py-3 px-4 cursor-pointer">
                          <span className="relative z-10 flex items-center justify-center">
                            Read Full Case Study
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {sortedCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedIndustry("All");
                  setSelectedOutcome("All");
                  setSearchTerm("");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results and create your own
            success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudiesPage;
