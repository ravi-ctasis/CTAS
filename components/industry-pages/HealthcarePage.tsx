"use client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import { Button } from "@/components/ui/button";

import {
  CheckCircle,
  Clock,
  Database,
  Server,
  Network,
  Cloud,
  HardDrive,
  Monitor,
  Code,
  Monitor as MedicalMonitor,
  Database as MedicalData,
  Network as MedicalNetwork,
  ShieldCheck,
  Shield as MedicalShield,
  BarChart3 as MedicalAnalytics,
  Users as MedicalStaff,
  Building as Hospital,
  Heart as FileHeart,
  ArrowRight,
  Star,
  Award,
  Globe,
} from "lucide-react";

import { useMemo } from "react";
import Link from "next/link";

;

const Healthcare = () => {
  // Memoize data to prevent unnecessary re-renders
  const healthcareServices = useMemo(
    () => [
      {
        icon: MedicalShield,
        title: "HIPAA Compliant Systems",
        description:
          "Secure healthcare platforms with full HIPAA compliance, patient data protection, and audit trails.",
        features: ["HIPAA Compliance", "Data Encryption", "Audit Logging"],
        gradient: "from-emerald-600 to-teal-600",
      },
      {
        icon: MedicalMonitor,
        title: "Electronic Health Records",
        description:
          "Comprehensive EHR systems with patient management, medical history, and clinical decision support.",
        features: ["Patient Records", "Medical History", "Clinical Support"],
        gradient: "from-teal-600 to-cyan-600",
      },
      {
        icon: MedicalAnalytics,
        title: "Healthcare Analytics",
        description:
          "Advanced analytics for patient outcomes, treatment effectiveness, and healthcare performance metrics.",
        features: ["Patient Analytics", "Treatment Insights", "Performance Metrics"],
        gradient: "from-cyan-600 to-blue-600",
      },
      {
        icon: MedicalStaff,
        title: "Patient Management",
        description:
          "Complete patient lifecycle management with appointment scheduling and care coordination.",
        features: ["Appointment Scheduling", "Care Coordination", "Patient Portal"],
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        icon: MedicalData,
        title: "Medical Data Security",
        description:
          "Bank-grade security for medical data with encryption, access controls, and compliance monitoring.",
        features: ["Data Encryption", "Access Controls", "Compliance Monitoring"],
        gradient: "from-indigo-600 to-purple-600",
      },
      {
        icon: MedicalNetwork,
        title: "Telemedicine Platform",
        description:
          "Secure telemedicine solutions with video consultations, remote monitoring, and virtual care.",
        features: ["Video Consultations", "Remote Monitoring", "Virtual Care"],
        gradient: "from-purple-600 to-emerald-600",
      },
    ],
    []
  );

  const healthcareTechnologies = useMemo(
    () => [
      { name: "React", icon: Monitor, category: "Frontend" },
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: HardDrive, category: "Containerization" },
      { name: "HL7 FHIR", icon: MedicalData, category: "Healthcare" },
      { name: "DICOM", icon: MedicalMonitor, category: "Imaging" },
      { name: "Kubernetes", icon: Network, category: "Orchestration" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Angular", icon: Monitor, category: "Frontend" },
      { name: "Python", icon: Code, category: "Backend" },
    ],
    []
  );

  const healthcareStats = useMemo(
    () => [
      { label: "Healthcare Clients", value: "12+", icon: Hospital },
      { label: "Certifications", value: "10+", icon: Award },
      { label: "Global Offices", value: "10+", icon: Globe },
      { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Software Development",
    description: "HIPAA-compliant healthcare software including EHR systems, telemedicine platforms, and patient management solutions.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Healthcare Software Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Healthcare Technology Solutions"
          badge="HIPAA Compliant Healthcare"
          title="Next-Generation"
          highlight="Healthcare Technology"
          description="Revolutionizing healthcare with HIPAA-compliant systems, AI-powered diagnostics, and secure patient care platforms for the digital health era."
          stats={healthcareStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
          primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* Overview Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Healthcare Overview
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Modern
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  Healthcare Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end healthcare technology solutions designed to improve patient care, ensure
                data security, and enhance clinical outcomes with HIPAA compliance.
              </p>
            </div>

            {/* Overview Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Overview Item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <MedicalShield className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-3">
                        HIPAA Compliance
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Full HIPAA compliance with data encryption, access controls, and audit
                        trails to ensure patient privacy and regulatory compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <MedicalMonitor className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
                        Patient Care
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Comprehensive patient care management with electronic health records,
                        appointment scheduling, and clinical decision support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <MedicalAnalytics className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-3">
                        Clinical Intelligence
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        AI-powered clinical intelligence with predictive analytics, treatment
                        recommendations, and patient outcome analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Hospital className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-emerald-600 mb-1">200+</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Healthcare Clients
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <ShieldCheck className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-teal-600 mb-1">100%</div>
                        <div className="text-sm font-semibold text-gray-700">HIPAA Compliance</div>
                      </div>
                    </div>
                    <div className="h-2 bg-teal-200 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-600 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <FileHeart className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-cyan-600 mb-1">2M+</div>
                        <div className="text-sm font-semibold text-gray-700">Patient Records</div>
                      </div>
                    </div>
                    <div className="h-2 bg-cyan-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-blue-600 mb-1">99.9%</div>
                        <div className="text-sm font-semibold text-gray-700">Uptime Guarantee</div>
                      </div>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Healthcare Technology Solutions
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Comprehensive
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  Healthcare Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end healthcare solutions designed to improve patient care, ensure data
                security, and enhance clinical outcomes with full HIPAA compliance.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {healthcareServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white rounded-3xl border border-gray-200 hover:border-emerald-300 shadow-lg hover:shadow-emerald-100/50"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-3xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Key Features
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Healthcare Platform
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
                  Key Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful features that make our healthcare solutions the preferred
                choice for leading healthcare providers worldwide.
              </p>
            </div>

            {/* Key Features List Style */}
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <MedicalShield className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                        HIPAA Compliance
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Full HIPAA compliance with data encryption, access controls, and
                        comprehensive audit trails.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 lg:p-8 border border-emerald-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Data Encryption</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Access Controls</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Audit Trails</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Privacy Protection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <MedicalMonitor className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                        Patient Care Management
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Comprehensive patient care with electronic health records and clinical
                        decision support.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-teal-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">EHR Systems</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Appointment Scheduling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Clinical Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Patient Portal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <MedicalAnalytics className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                        Clinical Intelligence
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        AI-powered clinical intelligence with predictive analytics and treatment
                        recommendations.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-cyan-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Predictive Analytics</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">
                          Treatment Recommendations
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Outcome Analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Risk Assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Healthcare Technology
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and healthcare standards that power modern healthcare
                solutions.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {healthcareTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <PageCTA
          title="Ready to Transform Your Healthcare Operations?"
          description="Let's discuss how our HIPAA-compliant healthcare solutions can improve patient care and operational efficiency."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default Healthcare;
