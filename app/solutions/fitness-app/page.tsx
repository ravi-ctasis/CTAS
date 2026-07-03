
;
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Dumbbell,
  Heart,
  Monitor,
  Smartphone,
  Users,
  Zap,
  Target,
  Award,
  CheckCircle,
  Star,
  Play,
  Download,
  Database,
  Cloud,
  Brain,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const FitnessAppPage = () => {
  const features = [
    {
      id: "workout-tracking",
      title: "Workout Tracking",
      description: "Track your workouts, sets, reps, and progress over time",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Progress monitoring", "Performance analytics", "Goal setting"],
    },
    {
      id: "nutrition-planning",
      title: "Nutrition Planning",
      description: "Plan meals, track macros, and maintain healthy eating habits",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      benefits: ["Macro tracking", "Meal planning", "Calorie counting"],
    },
    {
      id: "social-features",
      title: "Social Features",
      description: "Connect with friends, join challenges, and share achievements",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      benefits: ["Friend challenges", "Community support", "Achievement sharing"],
    },
    {
      id: "personal-training",
      title: "Personal Training",
      description: "AI-powered workout recommendations and form guidance",
      icon: Target,
      color: "from-orange-500 to-red-500",
      benefits: ["AI recommendations", "Form guidance", "Personalized plans"],
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white py-15 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-30"></div>

          {/* Floating fitness icons */}
          <div
            className="absolute top-1/4 left-1/3 w-16 h-16 text-green-400/30 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Dumbbell className="w-full h-full" />
          </div>
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 text-emerald-400/30 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <Heart className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/5 w-14 h-14 text-teal-400/30 animate-bounce"
            style={{ animationDelay: "2.5s" }}
          >
            <Activity className="w-full h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-slate-900 border-0 px-4 py-2 text-sm font-semibold">
                  🚀 Next-Gen Fitness Technology
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  Build the Future of{" "}
                  <span className="text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text">
                    Fitness Apps & Websites
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Create engaging fitness applications and websites that transform user behavior,
                  track real-time progress, and build sustainable healthy habits through AI-powered
                  insights and gamified experiences across all platforms.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">AI-Powered Workouts</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Real-time Analytics</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Cross-Platform Sync</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Web & Mobile Apps</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link href="/portfolios">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Play className="w-5 h-5 mr-2" />
                    Portfolio
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get Free Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end lg:order-last">
              <div className="relative">
                {/* Main app mockup */}
                <div className="relative mx-auto w-64 sm:w-72 lg:w-80 h-80 sm:h-88 lg:h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-4 sm:p-6 shadow-2xl">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/30 rounded-full"></div>

                  {/* App content simulation */}
                  <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-sm sm:text-base">2,847</div>
                        <div className="text-white/70 text-xs">calories</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <div className="text-center text-white/80 text-xs sm:text-sm">
                        Daily Goal: 75%
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-base">12</div>
                        <div className="text-white/70 text-xs">workouts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-base">8.2</div>
                        <div className="text-white/70 text-xs">avg rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-base">156</div>
                        <div className="text-white/70 text-xs">streak</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hidden sm:flex"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hidden sm:flex"
                  style={{ animationDelay: "1s" }}
                >
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-0 px-4 py-2 text-sm font-semibold">
              Key Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Fitness Apps Built with Ctas{" "}
              <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                Dominate the Market
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven approach combines cutting-edge technology with fitness industry expertise
              to deliver apps that users love and businesses profit from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">95% User Retention</h3>
                <p className="text-gray-600 mb-6">
                  Our fitness apps maintain exceptional user engagement through personalized
                  experiences, gamification, and social features that keep users coming back.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Personalized workout plans
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Progress tracking & analytics
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Social challenges & leaderboards
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Insights</h3>
                <p className="text-gray-600 mb-6">
                  Leverage machine learning algorithms to provide intelligent workout
                  recommendations, form analysis, and predictive health insights.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Smart workout suggestions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Real-time form feedback
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Predictive health analytics
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Generation</h3>
                <p className="text-gray-600 mb-6">
                  Multiple monetization strategies including premium subscriptions, in-app
                  purchases, and affiliate partnerships to maximize profitability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Subscription tiers
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Premium features
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Affiliate partnerships
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
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
              Powerful Features for Modern Fitness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fitness app solution includes everything you need to create an engaging and
              effective fitness platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multi-Platform Fitness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build fitness solutions across all platforms to reach your users wherever they are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Apps */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    React Native & Flutter
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Native iOS & Android
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Offline functionality
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Push notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Applications */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    React.js & Next.js
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cross-browser compatibility
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    SEO optimized
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cross-Platform Sync */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Real-time sync
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Cloud storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    User preferences
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    Progress tracking
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
              Why Choose Our Fitness App Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to maximize user engagement and business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">User Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced gamification, social features, and personalized content keep users
                  motivated and engaged.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Gamified challenges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Social interactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Progress tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
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

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Monetization Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Multiple revenue streams including subscriptions, in-app purchases, and premium
                  features.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Subscription plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Premium features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    In-app purchases
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
              Built with modern technologies to ensure scalability, performance, and user experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-green-600" />
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
            Ready to Build Your Fitness App & Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-white/80">
            Let&apos;s discuss how we can help you create fitness solutions that transform lives and
            drive business growth across all platforms.
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

export default FitnessAppPage;
