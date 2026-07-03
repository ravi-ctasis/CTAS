import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const solutions = [
  {
    title: "Dating App",
    description: "Modern dating platform with AI-powered matching and real-time communication",
    features: ["AI Matching", "Video Calls", "Safety Features", "Location-Based"],
    icon: "💕",
    href: "/solutions/dating-app",
  },
  {
    title: "E-commerce",
    description:
      "Complete online shopping platform with payment processing and inventory management",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"],
    icon: "🛒",
    href: "/solutions/e-commerce",
  },
  {
    title: "Fitness App",
    description: "Comprehensive fitness tracking and workout planning application",
    features: ["Workout Plans", "Progress Tracking", "Social Features", "Nutrition"],
    icon: "💪",
    href: "/solutions/fitness-app",
  },
  {
    title: "Food Delivery App",
    description: "Food ordering and delivery platform with real-time tracking",
    features: ["Restaurant Integration", "Real-time Tracking", "Payment Processing", "Reviews"],
    icon: "🍕",
    href: "/solutions/food-delivery-app",
  },
  {
    title: "Voice Chat App",
    description: "Real-time voice communication platform with group chat capabilities",
    features: ["Voice Calls", "Group Chats", "Screen Sharing", "Recording"],
    icon: "🎤",
    href: "/solutions/voice-chat-app",
  },
  {
    title: "Handyman Services App",
    description: "Home service marketplace connecting customers with skilled professionals",
    features: ["Service Booking", "Professional Profiles", "Real-time Tracking", "Reviews"],
    icon: "🔧",
    href: "/solutions/handyman-services-app",
  },
  {
    title: "Doctor Appointment App",
    description: "Healthcare booking system with telemedicine and appointment management",
    features: ["Appointment Booking", "Video Consultations", "Medical Records", "HIPAA Compliant"],
    icon: "🏥",
    href: "/solutions/doctor-appointment-app",
  },
  {
    title: "Property Finder App",
    description: "Real estate discovery platform with advanced search and virtual tours",
    features: ["Property Search", "Virtual Tours", "Market Analysis", "Agent Connect"],
    icon: "🏠",
    href: "/solutions/property-finder-app",
  },
  {
    title: "Parcel Delivery App",
    description: "Smart courier platform with real-time tracking and logistics management",
    features: ["Live Tracking", "Fleet Management", "Express Delivery", "Driver Network"],
    icon: "📦",
    href: "/solutions/parcel-delivery-app",
  },
  {
    title: "Hotel Booking App",
    description:
      "Comprehensive travel accommodation platform with instant booking and real-time availability",
    features: ["Instant Booking", "Price Comparison", "Reviews & Ratings", "Multi-language"],
    icon: "🏨",
    href: "/solutions/hotel-booking-app",
  },
  {
    title: "Sports Tracking App",
    description: "Complete sports tracking and social fitness platform with development solutions",
    features: ["Activity Tracking", "Social Features", "Development Process", "Multi-platform"],
    icon: "🏃‍♂️",
    href: "/solutions/sports-tracking-app",
  },
  {
    title: "Mobile Wallet App",
    description: "Secure digital payment solution with instant transfers and QR payments",
    features: ["Secure Payments", "Instant Transfers", "QR Payments", "Analytics"],
    icon: "💳",
    href: "/solutions/mobile-wallet-app",
  },
  {
    title: "NFT Marketplace",
    description:
      "Digital asset trading platform with secure wallet integration and real-time analytics",
    features: [
      "Secure Trading",
      "Multi-Chain Support",
      "Real-time Analytics",
      "Community Features",
    ],
    icon: "🎨",
    href: "/solutions/nft-marketplace",
  },
  {
    title: "Influencer Marketing App",
    description:
      "Creator collaboration platform for brands to discover and manage influencer campaigns",
    features: ["Creator Discovery", "Campaign Management", "Analytics & ROI", "Multi-platform"],
    icon: "📱",
    href: "/solutions/influencer-marketing-app",
  },
  {
    title: "Restaurant App",
    description: "Complete restaurant management and ordering platform",
    features: ["Online Ordering", "Table Management", "Menu Management", "Delivery Integration"],
    icon: "🍽️",
    href: "/solutions/restaurant-app",
  },
  {
    title: "Ticket Booking App",
    description: "Event and ticket booking platform with real-time availability",
    features: ["Event Discovery", "Seat Selection", "Payment Processing", "QR Tickets"],
    icon: "🎫",
    href: "/solutions/ticket-booking-app",
  },
  {
    title: "Travel App",
    description: "Comprehensive travel planning and booking platform",
    features: ["Flight Booking", "Hotel Reservations", "Itinerary Management", "Travel Guides"],
    icon: "✈️",
    href: "/solutions/travel-app",
  },
  {
    title: "Social Networking App",
    description: "Social media platform with advanced features and connectivity",
    features: ["User Profiles", "Content Sharing", "Messaging", "Social Feed"],
    icon: "👥",
    href: "/solutions/social-networking-app",
  },
  {
    title: "Taxi Booking",
    description: "Ride-hailing and taxi booking platform with real-time tracking",
    features: ["Driver Matching", "Live Tracking", "Payment Processing", "Rating System"],
    icon: "🚕",
    href: "/solutions/taxi-booking",
  },
];

const SolutionCard = ({ solution }: { solution: (typeof solutions)[0] }) => (
  <Card className="p-8 hover:shadow-lg transition-shadow group">
    <div className="text-4xl mb-4">{solution.icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
    <p className="text-gray-600 mb-6">{solution.description}</p>

    <div className="space-y-2 mb-6">
      {solution.features.map((feature, index) => (
        <div key={index} className="flex items-center text-sm text-gray-600">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          {feature}
        </div>
      ))}
    </div>

    <Link href={solution.href}>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:scale-105 transition-transform">
        <span>Explore Solution</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Link>
  </Card>
);

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our comprehensive range of mobile app solutions designed to transform your
            business
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default SolutionsPage;
