"use client";
import { useMemo } from "react";
import {
  Gamepad2,
  Monitor,
  Smartphone,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Code,
  Palette,
  Database,
  Cloud,
  ArrowRight,
  Play,
  BarChart3,
  Building,
  Package,
  Target,
  Wrench,
} from "lucide-react";
import Navigation from "../../../components/Navigation";
import FooterSection from "../../../components/FooterSection";
import { Button } from "react-scroll";

export default function GamingPage() {
  const heroData = useMemo(
    () => ({
      title: "Interactive Gaming Solutions",
      subtitle: "Revolutionizing the Gaming Industry with Cutting-Edge Technology",
      description:
        "We create immersive, interactive gaming experiences that engage players and drive business growth. From mobile games to VR experiences, our solutions push the boundaries of what's possible in gaming.",
      stats: [
        { label: "Games Developed", value: "200+", icon: Gamepad2 },
        { label: "Active Players", value: "10M+", icon: Users },
        { label: "Revenue Growth", value: "300%", icon: TrendingUp },
        { label: "Platforms", value: "15+", icon: Globe },
      ],
    }),
    []
  );

  const keyFeaturesData = useMemo(
    () => ({
      title: "Why Choose Our Gaming Platform?",
      subtitle: "Advanced features that set us apart in the gaming industry",
      features: [
        {
          icon: Zap,
          title: "Real-time Multiplayer",
          description: "Seamless multiplayer experiences with low latency and high performance",
          highlight: "50ms latency",
        },
        {
          icon: Shield,
          title: "Anti-cheat Protection",
          description: "Advanced security measures to ensure fair gameplay",
          highlight: "99.9% accuracy",
        },
        {
          icon: Cloud,
          title: "Cloud Gaming",
          description: "Stream games instantly without downloads or installations",
          highlight: "4K streaming",
        },
        {
          icon: Palette,
          title: "Custom Graphics",
          description: "Stunning visuals with customizable art styles and themes",
          highlight: "Unreal Engine 5",
        },
      ],
    }),
    []
  );

  const featuresData = useMemo(
    () => ({
      title: "Comprehensive Gaming Solutions",
      subtitle: "End-to-end gaming development and management platform",
      features: [
        {
          icon: Monitor,
          title: "PC Gaming",
          description: "High-performance PC games with advanced graphics and physics",
          gradient: "from-blue-500 to-purple-600",
          features: [
            "DirectX 12 Support",
            "Ray Tracing",
            "4K Resolution",
            "VR Ready",
            "Mod Support",
          ],
        },
        {
          icon: Smartphone,
          title: "Mobile Gaming",
          description: "Engaging mobile games optimized for all devices",
          gradient: "from-green-500 to-blue-600",
          features: [
            "Cross-platform",
            "Touch Controls",
            "Offline Mode",
            "Push Notifications",
            "Social Features",
          ],
        },
        {
          icon: Gamepad2,
          title: "Console Gaming",
          description: "Next-gen console games with cutting-edge technology",
          gradient: "from-purple-500 to-pink-600",
          features: ["4K HDR", "60 FPS", "Ray Tracing", "DualSense Support", "Cloud Saves"],
        },
        {
          icon: Users,
          title: "Multiplayer Gaming",
          description: "Massive multiplayer experiences with global connectivity",
          gradient: "from-orange-500 to-red-600",
          features: [
            "1000+ Players",
            "Global Servers",
            "Matchmaking",
            "Voice Chat",
            "Leaderboards",
          ],
        },
      ],
    }),
    []
  );

  const useCasesData = useMemo(
    () => ({
      title: "Gaming Use Cases",
      subtitle: "Versatile solutions for every gaming need",
      useCases: [
        {
          icon: Building,
          title: "Game Studios",
          description: "Complete game development solutions for indie and AAA studios",
          features: [
            "Game Engine Integration",
            "Asset Management",
            "Version Control",
            "Testing Tools",
            "Deployment Pipeline",
          ],
        },
        {
          icon: Users,
          title: "Esports Platforms",
          description: "Professional esports infrastructure and tournament management",
          features: [
            "Tournament Brackets",
            "Live Streaming",
            "Prize Management",
            "Player Profiles",
            "Analytics",
          ],
        },
        {
          icon: Package,
          title: "Gaming Marketplaces",
          description: "Digital distribution platforms for games and content",
          features: [
            "Payment Processing",
            "DRM Protection",
            "Content Moderation",
            "Review System",
            "Recommendations",
          ],
        },
        {
          icon: BarChart3,
          title: "Gaming Analytics",
          description: "Comprehensive analytics and player behavior insights",
          features: [
            "Player Metrics",
            "Revenue Analytics",
            "Engagement Tracking",
            "A/B Testing",
            "Predictive Modeling",
          ],
        },
      ],
    }),
    []
  );

  const technologyData = useMemo(
    () => ({
      title: "Technology Stack",
      subtitle: "Built with cutting-edge technologies for optimal performance",
      technologies: [
        { name: "Unity", category: "Game Engine", icon: Code },
        { name: "Unreal Engine", category: "Game Engine", icon: Palette },
        { name: "Node.js", category: "Backend", icon: Code },
        { name: "MongoDB", category: "Database", icon: Database },
        { name: "AWS", category: "Cloud", icon: Cloud },
        { name: "WebGL", category: "Graphics", icon: Monitor },
        { name: "WebRTC", category: "Real-time", icon: Globe },
      ],
    }),
    []
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
        {/* HERO SECTION */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Geometric Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-indigo-400/30 transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-slate-400/30 transform -rotate-12 animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-6 shadow-lg">
                🎮 Gaming Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-slate-300 bg-clip-text text-transparent">
                  {heroData.title}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
                {heroData.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Gaming
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Discover Gaming Solutions
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroData.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-slate-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-6 right-6">
            <button className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce">
              <Gamepad2 className="w-8 h-8" />
            </button>
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-slate-200 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-bold mb-6 shadow-lg">
                ✨ Key Features
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{keyFeaturesData.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{keyFeaturesData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeaturesData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-purple-100 overflow-hidden group"
                  >
                    <div className="relative mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-semibold rounded-full">
                      {feature.highlight}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-slate-200 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-bold mb-6 shadow-lg">
                <Target className="w-4 h-4 mr-2" />
                Features
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{featuresData.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{featuresData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuresData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-100 overflow-hidden group"
                  >
                    <div
                      className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}
                          ></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100 to-slate-100 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-bold mb-6 shadow-lg">
                Use Cases
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{useCasesData.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{useCasesData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCasesData.useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-purple-100 overflow-hidden group"
                  >
                    <div className="relative mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, j) => (
                        <li key={j} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-slate-200 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-bold mb-6 shadow-lg">
                <Wrench className="w-4 h-4 mr-2" />
                Technology
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{technologyData.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{technologyData.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologyData.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.category}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            // viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Gaming Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join the ranks of successful gaming businesses built by Ctas. Get started with a
                free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  to="contact-us"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 text-lg"
                >
                  Start Free Consultation
                </Button>
                <Button
                  to="contact-us"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
