
;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Users,
  TrendingUp,
  Star,
  MessageCircle,
  Calendar,
  Target,
  BarChart3,
  Zap,
  Award,
  DollarSign,
  Smartphone as Mobile,
  Monitor as Desktop,
  Database as Storage,
  Cloud as CloudIcon,
  Zap as Lightning,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function InfluencerMarketingApp() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Creator Discovery",
      description:
        "Find the perfect influencers across all social media platforms with advanced filtering and AI-powered matching.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Campaign Management",
      description:
        "Create, track, and manage influencer campaigns with real-time analytics and performance insights.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Analytics & ROI",
      description:
        "Comprehensive analytics dashboard with ROI tracking, engagement metrics, and campaign performance.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Communication Hub",
      description:
        "Built-in messaging system for seamless collaboration between brands and influencers.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Content Scheduling",
      description:
        "Schedule and coordinate content across multiple platforms with automated posting.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Performance Tracking",
      description:
        "Track influencer performance, engagement rates, and audience demographics in real-time.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Increased Reach",
      description: "Tap into influencer audiences to expand your brand reach exponentially.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Targeted Marketing",
      description: "Reach your exact target audience through carefully selected influencers.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Measurable Results",
      description: "Track campaign performance with detailed analytics and ROI metrics.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Authentic Engagement",
      description: "Build genuine connections with audiences through trusted influencers.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Quick Setup",
      description:
        "Launch campaigns quickly with our streamlined influencer discovery and management tools.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Brand Credibility",
      description: "Enhance brand credibility through partnerships with respected influencers.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const techStack = [
    { name: "React Native", category: "Mobile", icon: Mobile },
    { name: "Flutter", category: "Mobile", icon: Mobile },
    { name: "React.js", category: "Web", icon: Desktop },
    { name: "Next.js", category: "Web", icon: Desktop },
    { name: "Node.js", category: "Backend", icon: Desktop },
    { name: "Python", category: "Backend", icon: Desktop },
    { name: "MongoDB", category: "Database", icon: Storage },
    { name: "PostgreSQL", category: "Database", icon: Storage },
    { name: "AWS", category: "Cloud", icon: CloudIcon },
    { name: "Firebase", category: "Cloud", icon: CloudIcon },
    { name: "TensorFlow", category: "AI/ML", icon: Lightning },
    { name: "OpenAI API", category: "AI/ML", icon: Lightning },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Influencer Marketing Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Connect Brands with
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Top Creators
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                The ultimate platform for brands to discover, collaborate with, and manage
                influencer marketing campaigns. Connect with authentic creators and drive real
                results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-3 rounded-xl font-semibold"
                  >
                    View Portfolios
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$2.5B+</div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Social Media Command Center */}
            <div className="relative">
              {/* Main Command Center */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-6 backdrop-blur-sm border border-slate-600/30 mb-6 shadow-2xl">
                {/* Command Center Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">Social Command Center</h3>
                      <p className="text-violet-400 text-sm">Multi-Platform Control</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
                    <span className="text-violet-400 text-sm font-medium">Connected</span>
                  </div>
                </div>

                {/* Platform Status Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-4 border border-pink-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-pink-400 font-bold text-xl">Instagram</div>
                      <div className="w-6 h-6 bg-pink-500/30 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">2.5M Reach</div>
                    <div className="text-pink-400 text-xs mt-1">8.2% Engagement</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-4 border border-red-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-red-400 font-bold text-xl">YouTube</div>
                      <div className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">1.8M Views</div>
                    <div className="text-red-400 text-xs mt-1">12.5% CTR</div>
                  </div>
                </div>

                {/* Live Content Feed */}
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-4 mb-6 border border-slate-600/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">Live Content Feed</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Feed Items */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SJ</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">New Post Live</div>
                        <div className="text-gray-400 text-xs">@sarahjohnson • 2 min ago</div>
                      </div>
                      <div className="text-pink-400 text-xs font-semibold">1.2K likes</div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">MC</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">Live Stream Active</div>
                        <div className="text-gray-400 text-xs">@mikechen • Live now</div>
                      </div>
                      <div className="text-red-400 text-xs font-semibold">2.1K watching</div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">ED</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">Story Update</div>
                        <div className="text-gray-400 text-xs">@emmadavis • 5 min ago</div>
                      </div>
                      <div className="text-blue-400 text-xs font-semibold">856 views</div>
                    </div>
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">Real-time Metrics</h4>
                    <div className="text-violet-400 text-xs">Live</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-violet-400 font-bold text-lg">2.4M</div>
                      <div className="text-gray-400 text-xs">Total Reach</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-emerald-400 font-bold text-lg">6.5%</div>
                      <div className="text-gray-400 text-xs">Engagement</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-blue-400 font-bold text-lg">$89K</div>
                      <div className="text-gray-400 text-xs">Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Schedule Post
                    </div>
                  </button>
                  <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      View Analytics
                    </div>
                  </button>
                </div>
              </div>

              {/* Floating Social Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 py-2 text-sm font-semibold">
              Key Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need for Successful Influencer Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools needed to discover, connect with,
              and manage influencer marketing campaigns effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Influencer Marketing Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of our comprehensive influencer marketing solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Campaign Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Campaign Types We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From product launches to brand awareness, we support all types of influencer marketing
              campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Launch</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch new products with strategic influencer partnerships and coordinated content
                campaigns.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Awareness</h3>
              <p className="text-gray-600 leading-relaxed">
                Increase brand visibility and reach new audiences through authentic influencer
                partnerships.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales & Conversions</h3>
              <p className="text-gray-600 leading-relaxed">
                Drive sales and conversions with performance-based influencer marketing campaigns.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Build engaged communities around your brand with long-term influencer relationships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands already using our platform to connect with top creators and
            drive real results.
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
}
