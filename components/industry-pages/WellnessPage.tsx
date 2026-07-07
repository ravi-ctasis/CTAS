"use client";
import React, { useMemo } from "react";
import Navigation from "@/components/Navigation";
import {
  Activity,
  Apple,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Heart,
  Layers,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Users,
  Watch,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Container,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import Link from "next/link";

export default function WellnessHealthPage() {
  const wellnessTechnologies = useMemo(
    () => [
      // Frontend
      { name: "React Native", icon: Zap, category: "Mobile" },
      { name: "Flutter", icon: Rocket, category: "Mobile" },
      { name: "Swift", icon: Star, category: "iOS" },
      { name: "Kotlin", icon: Target, category: "Android" },
      { name: "TypeScript", icon: Code, category: "Frontend" },

      // Backend / Runtime
      { name: "Node.js", icon: Cpu, category: "Backend" },
      { name: "Python", icon: Brain, category: "Backend" },
      { name: "Django", icon: Server, category: "Backend" },
      { name: "FastAPI", icon: Zap, category: "Backend" },
      { name: "Firebase", icon: Cloud, category: "Backend" },

      // Databases
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "MongoDB", icon: HardDrive, category: "Database" },
      { name: "SQLite", icon: Layers, category: "Local" },

      // Cloud & Infra
      { name: "AWS", icon: Globe, category: "Cloud" },
      { name: "Google Cloud", icon: Cloud, category: "Cloud" },
      { name: "Apple HealthKit", icon: Apple, category: "Health" },
      { name: "Google Fit", icon: Activity, category: "Health" },
      { name: "Docker", icon: Container, category: "Containerization" },

      // Health & Fitness APIs
      { name: "Strava API", icon: TrendingUp, category: "Fitness" },
      { name: "Fitbit API", icon: Watch, category: "Fitness" },
      { name: "MyFitnessPal API", icon: Heart, category: "Nutrition" },
      { name: "Garmin API", icon: Target, category: "Fitness" },

      // Security & Privacy
      { name: "OAuth 2.0", icon: Shield, category: "Security" },
      { name: "JWT", icon: Lock, category: "Security" },
      { name: "HIPAA", icon: CheckCircle, category: "Compliance" },
      { name: "GDPR", icon: Award, category: "Compliance" },

      // AI & Analytics
      { name: "TensorFlow", icon: Brain, category: "AI/ML" },
      { name: "Core ML", icon: Zap, category: "AI/ML" },
      { name: "Health Analytics", icon: BarChart3, category: "Analytics" },
      { name: "Predictive Models", icon: TrendingUp, category: "AI/ML" },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wellness & Health App Development",
    description: "Digital health and wellness application development with AI, IoT, and wearable device integration.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Health & Wellness App Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Wellness & Health Tech Solutions"
          badge="Next-Gen Health Tech"
          title="Revolutionize"
          highlight="Digital Health"
          description="Create cutting-edge health applications that leverage AI, IoT, and cloud technologies to deliver personalized healthcare experiences that transform lives."
          stats={[{ number: "200+", label: "Apps Delivered", icon: Rocket }, { number: "2M+", label: "Active Users", icon: Users }, { number: "50+", label: "Health Metrics", icon: TrendingUp }, { number: "99.9%", label: "Uptime", icon: CheckCircle }]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* KEY FEATURES SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold mb-6 shadow-lg">
                Core Capabilities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Health Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the essential features that make our health and fitness applications stand
                out in the competitive digital health market.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Main Features */}
              <div className="space-y-8">
                {[
                  {
                    icon: Rocket,
                    title: "Multi-Platform Development",
                    description:
                      "Native iOS and Android apps with seamless cross-platform synchronization and responsive web interfaces.",
                    highlight: "Cross-Platform Sync",
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description:
                      "Bank-level encryption, HIPAA compliance, and secure user authentication for healthcare applications.",
                    highlight: "HIPAA Compliant",
                  },
                  {
                    icon: BarChart3,
                    title: "Advanced Analytics",
                    description:
                      "Real-time health metrics, customizable dashboards, and predictive health insights powered by AI.",
                    highlight: "AI-Powered Insights",
                  },
                  {
                    icon: Target,
                    title: "Device Integration",
                    description:
                      "Seamless integration with fitness trackers, smartwatches, and health monitoring devices.",
                    highlight: "Wearable Support",
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold rounded-full">
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column - Feature Stats & Benefits */}
              <div className="space-y-8">
                <div className="w-full h-auto rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Digital Health Solutions
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive wellness and healthcare technology platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-2xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Health Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with intuitive design to create
                powerful health and fitness applications that users love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Cross-Platform Apps",
                  description:
                    "Native iOS and Android apps with seamless web synchronization and wearable device integration.",
                  features: ["iOS & Android Native", "Wearable Integration", "Web Dashboard"],
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: BarChart3,
                  title: "Health Analytics",
                  description:
                    "Advanced analytics and insights with customizable dashboards and progress visualization.",
                  features: ["Real-time Metrics", "Custom Dashboards", "Progress Reports"],
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Target,
                  title: "Device Integration",
                  description:
                    "Seamless integration with fitness trackers, smartwatches, and health monitoring devices.",
                  features: ["Apple Watch", "Fitbit Integration", "Garmin Connect"],
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: Shield,
                  title: "Privacy & Security",
                  description:
                    "HIPAA-compliant data handling with end-to-end encryption and secure user authentication.",
                  features: ["HIPAA Compliance", "Data Encryption", "Secure Authentication"],
                  gradient: "from-red-500 to-orange-600",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Insights",
                  description:
                    "Machine learning algorithms that provide personalized recommendations and predictive health insights.",
                  features: ["Smart Recommendations", "Predictive Analytics", "Personalized Plans"],
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: Users,
                  title: "Social Features",
                  description:
                    "Community features, challenges, and social sharing to boost motivation and engagement.",
                  features: ["Community Challenges", "Social Sharing", "Friend Connections"],
                  gradient: "from-indigo-500 to-purple-600",
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                  >
                    {/* Background gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon with gradient background */}
                    <div
                      className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-16 h-16 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Features list with improved styling */}
                    <ul className="space-y-3">
                      {feature.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`}
                          ></div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect indicator */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-2xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Health App Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From fitness enthusiasts to healthcare providers, our platform serves diverse health
                needs across multiple industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Fitness Applications",
                  description:
                    "Workout tracking, exercise libraries, and personalized training programs for all fitness levels.",
                  features: ["Workout Plans", "Exercise Library", "Progress Tracking"],
                },
                {
                  icon: Heart,
                  title: "Nutrition Platforms",
                  description:
                    "Meal planning, calorie tracking, and dietary recommendations for healthy eating habits.",
                  features: ["Meal Planning", "Calorie Tracking", "Dietary Guidance"],
                },
                {
                  icon: Brain,
                  title: "Mental Wellness",
                  description:
                    "Meditation, stress management, and mental health tools for holistic wellness.",
                  features: ["Meditation Guides", "Stress Relief", "Sleep Support"],
                },
                {
                  icon: Shield,
                  title: "Healthcare Solutions",
                  description:
                    "Patient monitoring, health records, and telemedicine solutions for healthcare providers.",
                  features: ["Patient Monitoring", "Health Records", "Telemedicine"],
                },
                {
                  icon: Users,
                  title: "Senior Health",
                  description:
                    "Age-appropriate fitness programs, health monitoring, and social engagement features.",
                  features: ["Senior Fitness", "Health Monitoring", "Social Features"],
                },
                {
                  icon: Star,
                  title: "Family Wellness",
                  description:
                    "Family health tracking, child health monitoring, and shared wellness goals.",
                  features: ["Family Dashboard", "Child Health", "Shared Goals"],
                },
              ].map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group hover:scale-105"
                  >
                    <div className="text-4xl mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-center">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Health Technology
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern health and fitness
                applications.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {wellnessTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <PageCTA
          title="Ready to Build Your Health App?"
          description="Join the digital health revolution with our comprehensive platform. Let's create an application that transforms lives and promotes better health."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
