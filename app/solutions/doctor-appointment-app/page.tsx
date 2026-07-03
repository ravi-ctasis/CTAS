
;
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Stethoscope,
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
  Calendar,
  CheckCircle,
  Heart,
  Activity,
  Microscope,
  Brain,
  Baby,
  Eye,
  Bone,
  Syringe,
  FileText,
  Bell,
  Video,
  UserCheck,
  Star,
  Lock,
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
            <Stethoscope className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
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

const DoctorAppointmentAppPage = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Appointment Booking",
      description:
        "Intelligent scheduling system with real-time availability, automated reminders, and conflict detection.",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Doctor Verification",
      description:
        "Comprehensive verification system including medical licenses, certifications, and background checks.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Telemedicine Integration",
      description:
        "Built-in video consultation platform with screen sharing, file sharing, and secure communication.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Health Records",
      description:
        "Secure patient records management with HIPAA compliance and easy access for authorized personnel.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description:
        "Automated reminders for appointments, medication schedules, and follow-up consultations.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Patient Reviews",
      description:
        "Comprehensive rating system for doctors and clinics to help patients make informed decisions.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description:
        "End-to-end encryption and security measures to ensure patient data protection and privacy.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Analytics",
      description:
        "Advanced analytics dashboard for healthcare providers to track patient outcomes and practice efficiency.",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
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
      name: "PostgreSQL",
      description: "Reliable relational database for healthcare data",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "AWS",
      description: "HIPAA-compliant cloud infrastructure",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "WebRTC",
      description: "Real-time video communication for telemedicine",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Patients",
      items: [
        "Easy appointment booking and management",
        "Access to verified healthcare providers",
        "Secure telemedicine consultations",
        "Digital health records access",
        "Automated appointment reminders",
        "Transparent pricing and reviews",
      ],
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "For Doctors",
      items: [
        "Streamlined patient management",
        "Digital health records integration",
        "Telemedicine consultation tools",
        "Automated scheduling system",
        "Patient communication platform",
        "Practice analytics and insights",
      ],
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "For Healthcare",
      items: [
        "Improved patient outcomes",
        "Reduced administrative burden",
        "Better resource utilization",
        "Enhanced patient engagement",
        "Compliance and security",
        "Data-driven insights",
      ],
    },
  ];

  const specialties = [
    { name: "Cardiology", icon: <Heart className="w-6 h-6" /> },
    { name: "Dermatology", icon: <Activity className="w-6 h-6" /> },
    { name: "Neurology", icon: <Brain className="w-6 h-6" /> },
    { name: "Pediatrics", icon: <Baby className="w-6 h-6" /> },
    { name: "Ophthalmology", icon: <Eye className="w-6 h-6" /> },
    { name: "Dentistry", icon: <Activity className="w-6 h-6" /> },
    { name: "Orthopedics", icon: <Bone className="w-6 h-6" /> },
    { name: "Psychiatry", icon: <Brain className="w-6 h-6" /> },
    { name: "Gynecology", icon: <Heart className="w-6 h-6" /> },
    { name: "Oncology", icon: <Microscope className="w-6 h-6" /> },
    { name: "Emergency Medicine", icon: <Syringe className="w-6 h-6" /> },
    { name: "General Practice", icon: <Stethoscope className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute top-20 left-20 text-purple-400/20 animate-float">
          <Stethoscope className="w-16 h-16" />
        </div>
        <div className="absolute top-40 right-32 text-blue-400/20 animate-float-delayed">
          <Heart className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 left-32 text-emerald-400/20 animate-float">
          <Activity className="w-14 h-14" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Animated Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-8 animate-pulse">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-ping"></div>
                  <span className="text-purple-200 text-sm font-medium">Healthcare Innovation</span>
                </div>

                {/* Main Title */}
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-none">
                  <span className="block text-white mb-2">Doctor</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Appointment
                  </span>
                  <span className="block text-white text-4xl sm:text-5xl lg:text-6xl mt-4">
                    Platform
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl sm:text-2xl mb-10 text-gray-300 leading-relaxed max-w-2xl lg:max-w-none">
                  Next-generation healthcare booking system with AI-powered scheduling,
                  <span className="text-purple-300 font-semibold"> telemedicine integration</span>,
                  and advanced patient management.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
                  {[
                    {
                      text: "AI Scheduling",
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      text: "Telemedicine",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      text: "HIPAA Secure",
                      color: "from-emerald-500 to-emerald-600",
                    },
                    { text: "24/7 Access", color: "from-pink-500 to-pink-600" },
                  ].map((pill, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${pill.color} rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-200`}
                    >
                      {pill.text}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link href="/portfolios">
                    <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="relative z-10 flex items-center">
                        <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                        view Portfolios
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button
                      variant="outline"
                      className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-400 hover:text-slate-900 px-10 py-5 text-lg font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25"
                    >
                      <span className="flex items-center">
                        Get Free Quote
                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Healthcare Booking System Interface */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Main Healthcare Booking Container */}
                  <div className="relative mx-auto w-[450px] h-[650px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-6 shadow-2xl border border-blue-200 overflow-hidden">
                    {/* Healthcare System Header */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                            <Activity className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-500"></div>
                      </div>
                      <div className="mt-4">
                        <div className="text-blue-800 font-bold text-xl mb-2">
                          Healthcare Booking System
                        </div>
                        <div className="text-blue-600 text-sm font-medium">
                          Smart Appointment Management
                        </div>
                        <div className="flex items-center justify-center mt-2 space-x-3">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-600 text-xs font-medium">Live</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                            <span className="text-blue-600 text-xs font-medium">Secure</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                            <span className="text-purple-600 text-xs font-medium">HIPAA</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Access Dashboard */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-3 border border-emerald-200 hover:scale-105 transition-transform cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-emerald-700 text-xs font-bold">Book Appointment</div>
                          <Calendar className="w-4 h-4 text-emerald-600 group-hover:animate-bounce" />
                        </div>
                        <div className="text-emerald-800 text-sm font-bold mb-1">Quick Book</div>
                        <div className="text-emerald-600 text-xs">Find available slots</div>
                        <div className="mt-1 text-emerald-500 text-xs">12 slots today</div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-3 border border-blue-200 hover:scale-105 transition-transform cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-blue-700 text-xs font-bold">Video Consult</div>
                          <Video className="w-4 h-4 text-blue-600 group-hover:animate-bounce" />
                        </div>
                        <div className="text-blue-800 text-sm font-bold mb-1">Telemedicine</div>
                        <div className="text-blue-600 text-xs">Connect instantly</div>
                        <div className="mt-1 text-blue-500 text-xs">8 doctors online</div>
                      </div>
                    </div>

                    {/* Patient Dashboard */}
                    <div className="bg-white rounded-xl p-4 mb-5 border border-blue-100 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-blue-800 font-bold text-base">Patient Dashboard</div>
                        <div className="text-blue-500 text-xs">Welcome back, John</div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div className="text-center">
                          <div className="text-blue-600 text-lg font-bold mb-1">3</div>
                          <div className="text-blue-500 text-xs">Upcoming</div>
                        </div>
                        <div className="text-center">
                          <div className="text-emerald-600 text-lg font-bold mb-1">12</div>
                          <div className="text-emerald-500 text-xs">Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-600 text-lg font-bold mb-1">4.9★</div>
                          <div className="text-purple-500 text-xs">Rating</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-blue-800 font-semibold text-xs">
                              Next Appointment
                            </div>
                            <div className="text-blue-600 text-xs">
                              Dr. Sarah Johnson - Cardiology
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-blue-800 font-bold text-xs">Dec 15, 2:00 PM</div>
                            <div className="text-blue-500 text-xs">In 2 days</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-2 rounded-lg text-xs font-bold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>Book Now</span>
                        </div>
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-2 rounded-lg text-xs font-bold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg">
                        <div className="flex items-center space-x-1">
                          <Video className="w-3 h-3" />
                          <span>Consult</span>
                        </div>
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-lg text-xs font-bold hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg">
                        <div className="flex items-center space-x-1">
                          <FileText className="w-3 h-3" />
                          <span>Records</span>
                        </div>
                      </Button>
                    </div>

                    {/* Healthcare Indicators */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-blue-200">
                      <div className="text-center">
                        <div className="text-blue-600 text-xs font-medium">Emergency</div>
                        <div className="text-red-600 font-bold text-sm">24/7</div>
                        <div className="text-blue-600 text-xs">Available</div>
                      </div>
                    </div>

                    {/* Floating Healthcare Elements */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-lg animate-float"></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-float-delayed"></div>
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-md animate-pulse"></div>
                    <div className="absolute bottom-1/2 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-md animate-pulse delay-1000"></div>

                    {/* Healthcare Status Bar */}
                    <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-xs font-medium">Live</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-blue-600 text-xs font-medium">Secure</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                        <span className="text-purple-600 text-xs font-medium">HIPAA</span>
                      </div>
                    </div>
                  </div>

                  {/* Background Healthcare Effects */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -left-8 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-float"></div>
                  <div className="absolute bottom-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-float-delayed"></div>
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
              <div className="text-4xl font-bold text-emerald-600">1000+</div>
              <div className="text-gray-600">Verified Doctors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600">50K+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600">25+</div>
              <div className="text-gray-600">Medical Specialties</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600">4.9★</div>
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
              Advanced Features for Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything needed for modern healthcare management
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
              Benefits for All Healthcare Stakeholders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for patients, doctors, and healthcare systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Medical Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Covering all major medical fields and specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500"
              >
                <div className="flex items-center">
                  <div className="text-emerald-500 mr-3">{specialty.icon}</div>
                  <span className="font-semibold text-gray-800">{specialty.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              HIPAA-Compliant Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with security-first technologies for healthcare applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <TechStack key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HIPAA-compliant security measures to protect patient data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "End-to-End Encryption",
                desc: "All data encrypted in transit and at rest",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "HIPAA Compliance",
                desc: "Full compliance with healthcare regulations",
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Access Control",
                desc: "Role-based permissions and authentication",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Audit Trails",
                desc: "Complete audit logs for compliance",
              },
            ].map((security, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{security.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{security.title}</h3>
                <p className="text-gray-600 text-sm">{security.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Healthcare Access?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8">
            Join the healthcare revolution with a secure, efficient, and patient-friendly
            appointment booking platform.
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

export default DoctorAppointmentAppPage;
