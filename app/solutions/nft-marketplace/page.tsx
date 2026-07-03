
;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Wallet,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Database,
  BarChart3,
  Palette,
  Code,
  Server,
  Network,
  Smartphone as Mobile,
  Monitor as Desktop,
  Database as Storage,
  Network as NetworkIcon,
  Star,
  CheckCircle,
  Code as Blockchain,
  Server as Backend,
  Cloud as CloudIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function NFTMarketplace() {
  const keyHighlights = [
    {
      title: "Secure Wallet Integration",
      description: "Multi-chain wallet support with advanced security features",
      icon: Wallet,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Real-time Trading",
      description: "Instant buy/sell with real-time price updates and market data",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive market analysis and portfolio tracking tools",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Community Features",
      description: "Social trading, collections, and community engagement tools",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cross-Chain Support",
      description: "Trade NFTs across multiple blockchain networks seamlessly",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "AI-Powered Discovery",
      description: "Smart recommendations and trending NFT discovery",
      icon: Zap,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const features = [
    {
      title: "Multi-Chain Support",
      description: "Trade NFTs across Ethereum, Polygon, BSC, and other networks",
      icon: Network,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Contracts",
      description: "Custom smart contracts for minting, trading, and royalties",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Marketplace Analytics",
      description: "Real-time market data, trends, and portfolio analytics",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Creator Tools",
      description: "Advanced tools for artists and creators to mint and sell",
      icon: Palette,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Auction System",
      description: "Dutch and English auction formats with bidding mechanisms",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Gas Optimization",
      description: "Optimized transactions to minimize gas fees and costs",
      icon: Zap,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Royalty Management",
      description: "Automatic royalty distribution to creators on secondary sales",
      icon: Wallet,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Collection Management",
      description: "Organize and manage NFT collections with metadata",
      icon: Database,
      color: "from-pink-500 to-rose-500",
    },
  ];

  const platforms = [
    {
      name: "iOS App",
      icon: Smartphone,
      description: "Native iOS app with Apple Pay integration",
      features: ["Swift UI", "Core Data", "ARKit Support"],
    },
    {
      name: "Android App",
      icon: Smartphone,
      description: "Android app with Google Pay integration",
      features: ["Kotlin", "Jetpack Compose", "Material Design"],
    },
    {
      name: "Web Platform",
      icon: Monitor,
      description: "Responsive web application with PWA support",
      features: ["React.js", "Next.js", "Web3.js"],
    },
    {
      name: "Tablet App",
      icon: Tablet,
      description: "Optimized tablet experience for larger screens",
      features: ["Adaptive UI", "Touch Gestures", "Split View"],
    },
  ];

  const benefits = [
    {
      title: "Revenue Optimization",
      description: "Maximize profits with advanced trading features and analytics",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Exceptional User Experience",
      description: "Intuitive interface designed for both beginners and experts",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Scalable Architecture",
      description: "Built to handle millions of users and transactions",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with multi-layer protection",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Multi-Platform Support",
      description: "Seamless experience across all devices and platforms",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting tools",
      icon: BarChart3,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const techStack = [
    { name: "React Native", icon: Mobile, category: "Mobile" },
    { name: "Flutter", icon: Mobile, category: "Mobile" },
    { name: "Swift", icon: Mobile, category: "Mobile" },
    { name: "Kotlin", icon: Mobile, category: "Mobile" },
    { name: "React.js", icon: Desktop, category: "Web" },
    { name: "Next.js", icon: Desktop, category: "Web" },
    { name: "Vue.js", icon: Desktop, category: "Web" },
    { name: "Angular", icon: Desktop, category: "Web" },
    { name: "Node.js", icon: Backend, category: "Backend" },
    { name: "Python", icon: Backend, category: "Backend" },
    { name: "Solidity", icon: Blockchain, category: "Blockchain" },
    { name: "Web3.js", icon: Blockchain, category: "Blockchain" },
    { name: "Ethereum", icon: Blockchain, category: "Blockchain" },
    { name: "Polygon", icon: Blockchain, category: "Blockchain" },
    { name: "IPFS", icon: Storage, category: "Storage" },
    { name: "AWS S3", icon: Storage, category: "Storage" },
    { name: "Firebase", icon: CloudIcon, category: "Cloud" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Kubernetes", icon: Server, category: "DevOps" },
    { name: "GraphQL", icon: NetworkIcon, category: "API" },
    { name: "REST API", icon: NetworkIcon, category: "API" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                <Palette className="w-4 h-4 mr-2" />
                NFT Marketplace Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Digital Asset
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Trading Platform
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Build a secure, scalable NFT marketplace with advanced trading features, multi-chain
                support, and AI-powered discovery for the next generation of digital assets.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-xl font-semibold"
                  >
                    View Portfolios
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$2.5B+</div>
                  <div className="text-sm text-gray-400">Trading Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Unique NFT Trading Interface */}
            <div className="relative">
              {/* Main Trading Dashboard */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 backdrop-blur-sm border border-slate-600/30 mb-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">NFT Trader Pro</h3>
                      <p className="text-emerald-400 text-sm">Live Trading</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-sm font-medium">Online</span>
                  </div>
                </div>

                {/* Live Trading Chart */}
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-4 mb-6 border border-slate-600/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">Price Chart</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-br from-slate-600/30 to-slate-700/30 rounded-xl p-3 mb-3 border border-slate-500/20">
                    {/* Chart Grid Lines */}
                    <div className="relative h-full">
                      {/* Horizontal Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="w-full h-px bg-slate-500/20"></div>
                        <div className="w-full h-px bg-slate-500/20"></div>
                        <div className="w-full h-px bg-slate-500/20"></div>
                        <div className="w-full h-px bg-slate-500/20"></div>
                      </div>

                      {/* Price Chart Line */}
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 200 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,80 L20,70 L40,60 L60,50 L80,40 L100,30 L120,35 L140,25 L160,20 L180,15 L200,10"
                          stroke="url(#chartGradient)"
                          strokeWidth="2"
                          fill="none"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Chart Data Points */}
                      <div className="absolute top-2 left-2 text-emerald-400 text-xs font-semibold">
                        2.8 ETH
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-400 text-xs font-semibold">
                        2.5 ETH
                      </div>
                      <div className="absolute bottom-2 right-2 text-emerald-400 text-xs font-semibold">
                        2.2 ETH
                      </div>
                    </div>
                  </div>

                  {/* Price Info */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold text-lg">2.5 ETH</span>
                      <span className="text-emerald-400 text-sm">+12.5%</span>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-gray-400 text-xs">24h Change</div>
                  </div>
                </div>

                {/* Trading Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/20">
                    <div className="text-blue-400 font-bold text-xl">2.4K</div>
                    <div className="text-gray-400 text-xs">Floor Price</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-purple-400 font-bold text-xl">156</div>
                    <div className="text-gray-400 text-xs">Owners</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
                    Buy
                  </button>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
                    Sell
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
                    Bid
                  </button>
                </div>
              </div>

              {/* Floating Trading Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 px-4 py-2 text-sm font-semibold">
              Key Highlights
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why NFT Marketplaces Built with Ctas Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our NFT marketplace solutions ensure successful digital asset trading through advanced
              technology, security, and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-6`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced NFT Marketplace Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for modern NFT marketplaces with security,
              scalability, and user experience at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Platform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multi-Platform NFT Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy your NFT marketplace across all platforms with native performance and seamless
              user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
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
              Why Choose Our NFT Marketplace Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of our comprehensive NFT marketplace development approach.
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
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
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
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
            Ready to Build Your NFT Marketplace?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the digital asset revolution with our comprehensive NFT marketplace solution.
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
