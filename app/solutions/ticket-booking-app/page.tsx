"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Ticket,
  Calendar,
  Star,
  Users,
  Zap,
  CheckCircle,
  Database,
  Cloud,
  Brain,
  Shield,
  Bell,
  Search,
  Smartphone,
  Monitor,
  TrendingUp,
  Plane,
  Hotel,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const TicketBookingAppPage = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const featuredEvents = [
    {
      title: "Taylor Swift Concert",
      venue: "Madison Square Garden",
      time: "Tonight 8:00 PM",
      price: "$89",
      rating: 4.8,
      image: "🎤",
    },
    {
      title: "NBA Finals Game 7",
      venue: "Staples Center",
      time: "Tomorrow 7:30 PM",
      price: "$150",
      rating: 4.9,
      image: "🏀",
    },
    {
      title: "Hamilton Musical",
      venue: "Broadway Theater",
      time: "This Weekend",
      price: "$120",
      rating: 4.7,
      image: "🎭",
    },
    {
      title: "Ed Sheeran Concert",
      venue: "Wembley Stadium",
      time: "Next Week",
      price: "$75",
      rating: 4.6,
      image: "🎸",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  const features = [
    {
      id: "event-booking",
      title: "Event Booking",
      description: "Book concerts, sports, theater, and entertainment events",
      icon: Ticket,
      color: "from-purple-500 to-pink-500",
      benefits: ["Concert tickets", "Sports events", "Theater shows"],
    },
    {
      id: "travel-booking",
      title: "Travel Booking",
      description: "Book flights, hotels, and transportation worldwide",
      icon: Plane,
      color: "from-blue-500 to-indigo-500",
      benefits: ["Flight booking", "Hotel reservations", "Transportation"],
    },
    {
      id: "real-time-search",
      title: "Real-time Search",
      description: "Instant search with live availability and pricing",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      benefits: ["Live availability", "Price comparison", "Instant booking"],
    },
    {
      id: "smart-recommendations",
      title: "Smart Recommendations",
      description: "AI-powered personalized recommendations",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      benefits: ["Personalized suggestions", "Trending events", "User preferences"],
    },
    {
      id: "secure-payments",
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade security",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      benefits: ["Multiple payment methods", "Secure transactions", "Payment protection"],
    },
    {
      id: "mobile-tickets",
      title: "Mobile Tickets",
      description: "Digital tickets with QR codes and NFC support",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Digital tickets", "QR code scanning", "NFC support"],
    },
    {
      id: "group-bookings",
      title: "Group Bookings",
      description: "Easy group reservations and bulk ticket purchases",
      icon: Users,
      color: "from-emerald-500 to-green-500",
      benefits: ["Group discounts", "Bulk booking", "Seat selection"],
    },
    {
      id: "loyalty-rewards",
      title: "Loyalty & Rewards",
      description: "Earn points and rewards on every booking",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      benefits: ["Loyalty points", "Reward programs", "Member benefits"],
    },
  ];

  const techStack = [
    { name: "React Native", category: "Mobile", icon: Smartphone },
    { name: "Flutter", category: "Mobile", icon: Smartphone },
    { name: "React.js", category: "Web", icon: Monitor },
    { name: "Next.js", category: "Web", icon: Monitor },
    { name: "Angular", category: "Web", icon: Monitor },
    { name: "Node.js", category: "Backend", icon: Monitor },
    { name: "Python", category: "Backend", icon: Monitor },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Firebase", category: "Cloud", icon: Cloud },
    { name: "TensorFlow", category: "AI/ML", icon: Brain },
    { name: "OpenAI API", category: "AI/ML", icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white py-15 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-30"></div>

          {/* Floating ticket icons */}
          <div
            className="absolute top-1/4 left-1/3 w-16 h-16 text-orange-400/30 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Ticket className="w-full h-full" />
          </div>
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 text-red-400/30 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <Plane className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/5 w-14 h-14 text-pink-400/30 animate-bounce"
            style={{ animationDelay: "2.5s" }}
          >
            <Calendar className="w-full h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-orange-400 to-red-400 text-slate-900 border-0 px-4 py-2 text-sm font-semibold">
                  🎫 Next-Gen Booking Platform
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  Build the Future of{" "}
                  <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text">
                    Ticket Booking Apps
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Create seamless event and travel booking applications that revolutionize ticket
                  sales with real-time availability, smart recommendations, and instant
                  confirmations.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Real-time Availability</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Instant Booking</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Smart Recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Web & Mobile Apps</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    View Portfolios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end lg:order-last">
              <div className="relative">
                {/* Ticket Booking App Mockup */}
                <div className="relative">
                  {/* Main Phone Screen */}
                  <div className="relative mx-auto w-72 sm:w-80 lg:w-96 h-1/2 sm:h-[600px] lg:h-[600px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>

                    {/* Booking App Interface */}
                    <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-10">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-3">
                            <Ticket className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-bold text-base">BookFlow</span>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Bell className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/80 text-sm font-medium">
                            What are you looking for?
                          </span>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Search className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3">
                          <div className="text-white font-semibold text-sm">
                            Concert • New York • Tonight
                          </div>
                        </div>
                      </div>

                      {/* Featured Event */}
                      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-5 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-white/80 text-sm font-medium">Featured Event</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-300 fill-current" />
                            <span className="text-white text-sm ml-1">
                              {featuredEvents[currentEventIndex].rating}
                            </span>
                          </div>
                        </div>

                        {/* Event Content with Slide Animation */}
                        <div className="transition-all duration-500 ease-in-out">
                          <div className="flex items-center mb-3">
                            <div className="text-3xl mr-3">
                              {featuredEvents[currentEventIndex].image}
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-bold text-lg mb-1">
                                {featuredEvents[currentEventIndex].title}
                              </div>
                              <div className="text-white/70 text-sm">
                                {featuredEvents[currentEventIndex].venue} •{" "}
                                {featuredEvents[currentEventIndex].time}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-white font-bold text-xl">
                              {featuredEvents[currentEventIndex].price}
                            </div>
                            <Button className="bg-white text-orange-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                              Book Now
                            </Button>
                          </div>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {featuredEvents.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentEventIndex ? "bg-white" : "bg-white/30"
                                }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-xl p-4 text-center">
                          <Plane className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                          <div className="text-white font-semibold text-sm">Flights</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl p-4 text-center">
                          <Hotel className="w-8 h-8 text-green-300 mx-auto mb-2" />
                          <div className="text-white font-semibold text-sm">Hotels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hidden sm:flex"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Ticket className="w-10 h-10 text-white" />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hidden sm:flex"
                  style={{ animationDelay: "1s" }}
                >
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute top-1/2 -right-16 w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse hidden lg:flex"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-0 px-4 py-2 text-sm font-semibold">
              ✨ Key Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Ticket Booking Apps Built with Ctas{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                Dominate the Market
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven approach combines cutting-edge technology with booking industry expertise
              to deliver apps that users love and businesses profit from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">99.9% Booking Success</h3>
                <p className="text-gray-600 mb-6">
                  Our ticket booking apps ensure successful transactions through real-time inventory
                  management and instant confirmations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Real-time inventory
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Instant confirmations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Payment protection
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI-Powered Recommendations
                </h3>
                <p className="text-gray-600 mb-6">
                  Intelligent algorithms provide personalized event and travel recommendations based
                  on user preferences and behavior.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Personalized suggestions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Trend analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    User behavior insights
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Generation</h3>
                <p className="text-gray-600 mb-6">
                  Multiple revenue streams including booking fees, premium features, and partnership
                  commissions to maximize profitability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Booking fees
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Premium features
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Partnership commissions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Tickets Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$10M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Booking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ticket booking app solution includes everything you need to create a seamless and
              efficient booking platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multi-Platform Booking Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build booking solutions across all platforms to reach your users wherever they are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Apps */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Mobile Applications
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Native and cross-platform mobile apps for iOS and Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    React Native & Flutter
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Native iOS & Android
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Offline functionality
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    Push notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Applications */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Web Applications</CardTitle>
                <CardDescription className="text-gray-600">
                  Responsive web apps accessible from any device
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    React.js & Next.js
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    Cross-browser compatibility
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    SEO optimized
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cross-Platform Sync */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Cross-Platform Sync
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Seamless data synchronization across all platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                    Real-time sync
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                    Cloud storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                    User preferences
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                    Booking history
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Ticket Booking App Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to maximize user satisfaction and business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Intuitive interface design with seamless booking flow and instant confirmations
                  for the best user experience.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Intuitive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Seamless booking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Instant confirmations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built with modern cloud technologies to handle growth from startup to enterprise
                  scale.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Cloud-native design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Auto-scaling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    High availability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Monetization Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Multiple revenue streams including booking fees, premium features, and partnership
                  commissions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Booking fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Partnership commissions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies to ensure performance, security, and user experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-white">
            Ready to Build Your Ticket Booking App & Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-white">
            Let&apos;s discuss how we can help you create booking solutions that transform
            experiences and drive business growth across all platforms.
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

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default TicketBookingAppPage;
