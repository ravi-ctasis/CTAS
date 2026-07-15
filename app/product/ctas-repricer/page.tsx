import type { Metadata } from "next";
import {
  RefreshCcw,
  DollarSign,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  BarChart3,
  Target,
  Settings,
  Lock,
  Trophy,
  Star,
  User,
  MapPin,
  Package,
  ShoppingBag,
  ShoppingCart,
  Palette,
  Flag,
  Store,
  AlertTriangle,
  Box,
} from "lucide-react";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: {
    absolute: "Ctas Repricer: Amazon Buy Box Repricing Tool"
  },
  description: "Automate pricing, protect profits, and win more Buy Boxes with CTAS Repricer. AI-driven Amazon repricing platform for modern sellers.",
  keywords: [
    "Amazon repricer",
    "Buy Box optimization",
    "automated pricing",
    "Amazon seller tools",
    "CTAS Repricer",
    "price automation",
  ],
  alternates: {
    canonical: "/product/ctas-repricer",
  },
  openGraph: {
    title: "CTAS Repricer — AI-Powered Amazon Repricing Platform",
    description: "Automate pricing, protect profits, and win more Buy Boxes with CTAS Repricer. AI-driven Amazon repricing platform for modern sellers.",
    url: "/product/ctas-repricer",
    images: [
      {
        url: "/products/repricer-og.webp",
        width: 1200,
        height: 630,
        alt: "CTAS Repricer AI Pricing Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTAS Repricer — AI-Powered Amazon Repricing Platform",
    description: "Automate pricing, protect profits, and win more Buy Boxes with CTAS Repricer. AI-driven Amazon repricing platform for modern sellers.",
    images: ["/products/repricer-og.webp"],
  },
};

const features = [
  {
    title: "Smart Repricing Engine",
    description:
      "Automatically adjusts prices based on competitor movements, marketplace fees, sales velocity, and product demand",
    icon: Zap,
  },
  {
    title: "Buy Box Optimization",
    description:
      "Employs intelligent algorithms to increase Buy Box ownership through faster response times and dynamic rule execution",
    icon: Target,
  },
  {
    title: "Inventory-Aware Pricing",
    description:
      "Protects inventory health by adjusting pricing based on stock availability, inventory age, and seasonal demand",
    icon: Shield,
  },
  {
    title: "Multi-Marketplace Support",
    description:
      "Seamlessly manage operations across Amazon US, UK, Germany, France, Italy, Spain, Netherlands, Sweden, Poland, Belgium, Japan, Australia, UAE, and Saudi Arabia",
    icon: Globe,
  },
  {
    title: "Comprehensive Rule Engine",
    description:
      "Create unlimited custom strategies including pricing rules, competitor filters, and time-based campaigns",
    icon: Settings,
  },
  {
    title: "Actionable Analytics",
    description:
      "Monitor performance with real-time insights into revenue, sales growth, profit margins, competitor activity, and detailed repricing history",
    icon: BarChart3,
  },
];

const ruleTypes = [
  {
    title: "Pricing Rules",
    description: "Min/Max price thresholds, fixed/percentage margins, and target ROI",
    icon: DollarSign,
  },
  {
    title: "Competitor Filters",
    description: "Ignore specific seller types (Low Feedback, FBA vs. FBM, Out-of-Stock)",
    icon: Shield,
  },
  {
    title: "Time-Based Campaigns",
    description: "Set specialized pricing for business hours, weekends, or holiday periods",
    icon: Clock,
  },
];

const securityFeatures = [
  {
    title: "Enterprise-Level Authentication",
    description: "Role-based access control for secure team management",
    icon: Shield,
  },
  {
    title: "Comprehensive Audit Logs",
    description: "Track all pricing changes and user activities",
    icon: CheckCircle,
  },
  {
    title: "Encrypted Communications",
    description: "All data transfers are securely encrypted",
    icon: Lock,
  },
  {
    title: "Automated Backups",
    description: "Secure, automated data backups for peace of mind",
    icon: Lock,
  },
];

const process = [
  {
    step: "01",
    title: "Import",
    description: "Automatically sync your products from connected marketplaces",
  },
  {
    step: "02",
    title: "Monitor",
    description: "Track real-time competitor data and market shifts",
  },
  {
    step: "03",
    title: "Analyze",
    description: "The AI evaluates Buy Box status and current market trends",
  },
  {
    step: "04",
    title: "Execute",
    description: "Optimal prices are calculated and instantly pushed to Amazon",
  },
  {
    step: "05",
    title: "Repeat",
    description: "The engine operates 24/7, ensuring your prices stay competitive",
  },
];

const benefits = [
  {
    title: "Increase Sales Velocity",
    description: "React faster than your competition to capture more sales",
    icon: TrendingUp,
  },
  {
    title: "Protect Margins",
    description:
      "Built-in safeguards ensure you never sell below your defined cost or profit threshold",
    icon: Shield,
  },
  {
    title: "Reduce Manual Labor",
    description: "Eliminate the burden of manual price updates and complex spreadsheets",
    icon: Zap,
  },
  {
    title: "Built for Growth",
    description:
      "Whether you are an individual seller or a global aggregator, our architecture scales with your business",
    icon: Award,
  },
];

const marketplaces = [
  "Amazon US",
  "Amazon UK",
  "Amazon Germany",
  "Amazon France",
  "Amazon Italy",
  "Amazon Spain",
  "Amazon Netherlands",
  "Amazon Sweden",
  "Amazon Poland",
  "Amazon Belgium",
  "Amazon Japan",
  "Amazon Australia",
  "Amazon UAE",
  "Amazon Saudi Arabia",
];

// Data for the "One tool. Every platform you sell on." hub
const channelHubItems = [
  { label: "Amazon", icon: Package, color: "#F59E0B" },
  { label: "eBay", icon: ShoppingBag, color: "#3B82F6" },
  { label: "Walmart", icon: Store, color: "#22C55E" },
  { label: "Shopify", icon: ShoppingCart, color: "#8B5CF6" },
  { label: "Etsy", icon: Palette, color: "#EF4444" },
  { label: "Cdiscount", icon: Flag, color: "#0EA5E9" },
];

// Data for the "Repricer works for you, 24/7" AI engine hub
const aiEngineHubItems = [
  { label: "Ratings", icon: Star, color: "#F5B301" },
  { label: "Stock", icon: Package, color: "#22C55E" },
  { label: "Location", icon: MapPin, color: "#38BDF8" },
  { label: "Seller", icon: User, color: "#A78BFA" },
  { label: "Price", icon: DollarSign, color: "#F87171" },
  { label: "Speed", icon: Zap, color: "#FB923C" },
];

const liveAlerts = [
  {
    icon: AlertTriangle,
    title: "Buy Box Lost",
    detail: "ASIN B08XYZ $0.50 below min",
    time: "now",
    tone: "bg-red-50 border-red-200 text-red-600",
    dot: "bg-red-500",
  },
  {
    icon: Box,
    title: "Low Stock",
    detail: "Wireless Earbuds 3 units left",
    time: "2m ago",
    tone: "bg-amber-50 border-amber-200 text-amber-600",
    dot: "bg-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Opportunity",
    detail: "+$2.80 margin possible on SKU #4",
    time: "5m ago",
    tone: "bg-green-50 border-green-200 text-green-600",
    dot: "bg-green-500",
  },
  {
    icon: DollarSign,
    title: "Profit Up",
    detail: "Headphones margin ↑ 12% today",
    time: "8m ago",
    tone: "bg-purple-50 border-purple-200 text-purple-600",
    dot: "bg-purple-500",
  },
  {
    icon: Target,
    title: "Competitor Drop",
    detail: "Seller XY cut price by $4.20",
    time: "11m ago",
    tone: "bg-blue-50 border-blue-200 text-blue-600",
    dot: "bg-blue-500",
  },
];

export default function CTASRepricerPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />

      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
            { name: "CTAS Repricer", url: "https://www.ctasis.com/product/ctas-repricer" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1e4d80] py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 text-sm text-orange-300 font-medium mb-6">
                  <RefreshCcw className="w-4 h-4" />
                  AI-Powered Amazon Repricing
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                  CTAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Repricer</span>
                </h1>
                <p className="text-white/70 text-lg mb-4 leading-relaxed">
                  Automate Pricing. Protect Profits. Win More Buy Boxes.
                </p>
                <p className="text-white/60 text-base mb-8 leading-relaxed">
                  Intelligent, AI-driven platform designed for modern Amazon sellers, brands, and enterprises. Continuously monitor market conditions and automatically optimize your product prices to maximize profitability.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "15+", label: "Marketplaces", icon: Globe },
                    { number: "24/7", label: "Monitoring", icon: Clock },
                    { number: "AI", label: "Powered", icon: Zap },
                    { number: "Real-time", label: "Updates", icon: TrendingUp },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <stat.icon className="w-6 h-6 text-orange-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Animated competitor-pricing visual replacing the static hero image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-1">
                  <CompetitorRepricingAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Intelligent Pricing & Strategy Engine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced engine moves beyond basic rules, leveraging AI to analyze marketplace
                data and execute pricing strategies in real time
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One tool. Every platform you sell on. — multi-channel hub */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid lg:grid-cols-2">
              {/* revenue chart strip above the copy on large screens */}
              <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-12 py-16">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full w-fit mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Multi-Channel
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  One tool. Every platform you sell on.
                </h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Keep pricing consistent across Amazon, eBay, Walmart, Shopify, Etsy, Cdiscount,
                  and beyond. Our multi-channel sync engine keeps your strategy sharp everywhere,
                  automatically.
                </p>

                <RevenueSparkChart />
              </div>

              <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-slate-50 py-16 px-6 flex items-center justify-center">
                <HubDiagram
                  centerTitle="REPRICER"
                  centerSubtitle="CENTRAL HUB"
                  items={channelHubItems}
                  dark={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repricer works for you, 24/7 — dark AI engine hub */}
        <section className="bg-[#0B1220] py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 rounded-full w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Fully Automated
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Repricer works for you, 24/7, without lifting a finger.
              </h2>
              <p className="text-slate-400 max-w-md">
                Repricer monitors every competitor move across your entire catalogue and responds
                intelligently — weighting seller ratings, stock levels, location, fulfillment speed,
                and dozens more signals. Zero manual intervention required.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -top-4 right-0 sm:right-6 bg-[#111a2e] border border-blue-500/30 rounded-xl px-5 py-3 text-center shadow-lg z-20">
                <div className="text-xl font-bold text-blue-300">20B+</div>
                <div className="text-[11px] text-slate-400">price changes / month</div>
              </div>
              <HubDiagram
                centerTitle="REPRICER"
                centerSubtitle="AI ENGINE"
                items={aiEngineHubItems}
                dark={true}
              />
            </div>
          </div>
        </section>

        {/* Rule Engine Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Rule Engine</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Create unlimited, custom strategies for your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {ruleTypes.map((rule, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <rule.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{rule.title}</h3>
                  <p className="text-gray-600">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Never miss a profit opportunity again — live alerts + opportunity score */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-16">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Live Alerts</h3>
                    <div className="space-y-3">
                      {liveAlerts.map((alert, index) => (
                        <div
                          key={index}
                          className={`flex items-start justify-between gap-3 rounded-lg border px-3 py-2.5 ${alert.tone}`}
                        >
                          <div className="flex items-start gap-2">
                            <span
                              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${alert.dot}`}
                            />
                            <div>
                              <div className="text-sm font-bold text-gray-900">{alert.title}</div>
                              <div className="text-xs text-gray-500">{alert.detail}</div>
                            </div>
                          </div>
                          <span className="text-[11px] text-gray-400 whitespace-nowrap">
                            {alert.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Opportunity Score</h3>
                    <OpportunityGauge score={82} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 sm:px-12 py-16">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full w-fit mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Smart Alerts
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Never miss a profit opportunity again.
                </h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Repricer surfaces high-value opportunities and fires real-time alerts the moment
                  something critical happens — lost Buy Box, low stock, competitor price drop.
                  One-click actions let you respond instantly.
                </p>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:gap-2.5 transition-all duration-300"
                >
                  Explore Insights <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Marketplace Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Scalability</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage your entire global business from a single, unified dashboard
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {marketplaces.map((marketplace, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">{marketplace}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automated 5-step process for optimal pricing
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your data security is our priority
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Partner with CTAS Repricer?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Benefits that transform your Amazon business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Win More Buy Boxes?</h2>
            <p className="text-xl text-white/90 mb-12">
              Start automating your Amazon pricing with CTAS Repricer today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero visual: Competitor A/B/C -> Repricer -> Your Price (winning)  */
/* ------------------------------------------------------------------ */
function CompetitorRepricingAnimation() {
  const competitors = [
    { label: "COMPETITOR A", price: "$24.99", trend: "up", change: "2%" },
    { label: "COMPETITOR B", price: "$22.50", trend: "down", change: "1%" },
    { label: "COMPETITOR C", price: "$26.00", trend: "up", change: "3%" },
  ];

  return (
    <div className="bg-white rounded-xl p-8 sm:p-10 relative overflow-hidden">
      <style>{`
        @keyframes repricer-pulse-ring {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes repricer-dash {
          to { stroke-dashoffset: -24; }
        }
        .repricer-halo {
          animation: repricer-pulse-ring 2.6s ease-in-out infinite;
        }
        .repricer-flow-line {
          stroke-dasharray: 4 4;
          animation: repricer-dash 1.4s linear infinite;
        }
      `}</style>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
        {/* competitor cards */}
        <div className="flex flex-col gap-4">
          {competitors.map((c, i) => (
            <div key={i} className="bg-[#161c2e] rounded-xl px-4 py-3.5 relative">
              <span
                className={`absolute -top-2.5 -right-2.5 flex items-center gap-0.5 text-[11px] font-bold px-2 py-1 rounded-full text-white ${
                  c.trend === "up" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {c.trend === "up" ? "▲" : "▼"} {c.change}
              </span>
              <div className="text-[10px] font-semibold text-slate-400 tracking-wider">
                {c.label}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xl font-bold text-white font-mono">{c.price}</span>
                <MiniSpark color={c.trend === "up" ? "#f87171" : "#4ade80"} />
              </div>
            </div>
          ))}
        </div>

        {/* connecting lines + center node */}
        <div className="flex flex-col items-center justify-center relative w-20 sm:w-28">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 220"
            preserveAspectRatio="none"
          >
            <path
              d="M0,26 C40,26 40,110 50,110"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              className="repricer-flow-line"
            />
            <path
              d="M0,110 L50,110"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              className="repricer-flow-line"
            />
            <path
              d="M0,194 C40,194 40,110 50,110"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              className="repricer-flow-line"
            />
            <path
              d="M50,110 L100,110"
              fill="none"
              stroke="#86efac"
              strokeWidth="2"
              className="repricer-flow-line"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center">
            <span className="repricer-halo absolute w-24 h-24 rounded-full border-2 border-blue-200" />
            <div className="relative w-20 h-20 rounded-full bg-[#161c2e] flex flex-col items-center justify-center text-white">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-[10px] font-semibold mt-1">Repricer</span>
            </div>
          </div>
        </div>

        {/* your price winning card — two-tone */}
        <div className="rounded-xl overflow-hidden">
          <div className="bg-gradient-to-br from-green-600 to-green-700 px-4 py-4 text-white">
            <div className="text-[10px] font-semibold text-green-100 tracking-wider">
              YOUR PRICE
            </div>
            <div className="text-2xl font-bold font-mono">$23.49</div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-300 mt-1.5">
              <Trophy className="w-3.5 h-3.5" /> WINNING BUY BOX
            </div>
          </div>
          <div className="bg-[#161c2e] px-4 py-3 text-[10px]">
            <div className="font-semibold tracking-wider text-slate-400 mb-1">PRICING STRATEGY</div>
            <div className="text-white">
              <span className="text-yellow-300 font-semibold">Floor $19</span>{" "}
              <span className="text-slate-500">·</span>{" "}
              <span className="text-green-400 font-semibold">Ceiling $30</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom stat pills */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-3 justify-center text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" /> Real-time Monitoring
        </span>
        <span className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-500" /> AI Optimization
        </span>
        <span className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-500" /> Max Profit
        </span>
        <span className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-blue-500" /> Win Buy Box
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tiny inline trend squiggle used next to competitor prices          */
/* ------------------------------------------------------------------ */
function MiniSpark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 16" className="w-9 h-4">
      <polyline
        points="0,12 8,10 14,4 20,9 26,3 32,7 40,1"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable radial hub diagram (used by both hub sections)           */
/* ------------------------------------------------------------------ */
type HubItem = { label: string; icon: any; color: string };

function HubDiagram({
  centerTitle,
  centerSubtitle,
  items,
  dark,
}: {
  centerTitle: string;
  centerSubtitle: string;
  items: HubItem[];
  dark: boolean;
}) {
  // 6 positions evenly spaced around a circle, computed for a 320x320 box
  const positions = [
    { top: 24, left: 160 }, // top
    { top: 92, left: 269 }, // upper right
    { top: 222, left: 269 }, // lower right
    { top: 292, left: 160 }, // bottom
    { top: 222, left: 51 }, // lower left
    { top: 92, left: 51 }, // upper left
  ];

  return (
    <div className="relative w-[320px] h-[320px] max-w-full">
      <style>{`
        @keyframes hub-orbit-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes hub-core-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          70% { box-shadow: 0 0 0 20px rgba(59,130,246,0); }
        }
        .hub-dot { animation: hub-orbit-pulse 2s ease-in-out infinite; }
        .hub-core { animation: hub-core-glow 2.4s ease-out infinite; }
      `}</style>

      {/* dashed orbit ring */}
      <div
        className={`absolute rounded-full border ${
          dark ? "border-blue-500/30" : "border-blue-300"
        }`}
        style={{
          borderStyle: "dashed",
          width: 216,
          height: 216,
          top: 52,
          left: 52,
        }}
      />

      {/* connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
        {items.map((item, i) => {
          const p = positions[i];
          return (
            <line
              key={i}
              x1={160}
              y1={160}
              x2={p.left}
              y2={p.top}
              stroke={item.color}
              strokeWidth={1.5}
              strokeDasharray="3 4"
              opacity={0.6}
            />
          );
        })}
      </svg>

      {/* center node */}
      <div
        className={`hub-core absolute w-24 h-24 rounded-full flex flex-col items-center justify-center text-center z-10 ${
          dark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
        }`}
        style={{ top: 112, left: 112 }}
      >
        <span className="text-[11px] font-bold leading-tight">{centerTitle}</span>
        <span className="text-[9px] opacity-80 leading-tight">{centerSubtitle}</span>
      </div>

      {/* orbit nodes */}
      {items.map((item, i) => {
        const p = positions[i];
        return (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1 z-10"
            style={{ top: p.top, left: p.left, transform: "translate(-50%, -50%)" }}
          >
            <div
              className={`hub-dot w-14 h-14 rounded-full flex items-center justify-center border-2 ${
                dark ? "bg-[#111a2e]" : "bg-white"
              }`}
              style={{ borderColor: item.color }}
            >
              <item.icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            <span
              className={`text-[11px] font-semibold ${dark ? "text-white" : "text-gray-800"}`}
              style={dark ? { color: item.color } : undefined}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small revenue vs competitor sparkline chart                        */
/* ------------------------------------------------------------------ */
function RevenueSparkChart() {
  return (
    <div className="bg-green-50 rounded-xl p-5 border border-green-100">
      <svg viewBox="0 0 340 110" className="w-full h-auto">
        <line x1="0" y1="20" x2="340" y2="20" stroke="#d1fae5" strokeWidth="1" />
        <line x1="0" y1="70" x2="340" y2="70" stroke="#d1fae5" strokeWidth="1" />
        {/* your revenue - solid green rising line */}
        <polyline
          points="0,60 40,15 80,10 120,8 160,6 200,4 240,3 280,2 320,0"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
        />
        {/* competitor average - dashed blue flat line */}
        <polyline
          points="0,66 40,64 80,64 120,63 160,63 200,64 240,64 280,65 320,65"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
      <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1 px-0.5">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-4 text-xs">
        <span className="flex items-center gap-1.5 font-medium text-gray-700">
          <span className="w-2 h-2 rounded-full bg-green-600" /> Your Revenue
        </span>
        <span className="flex items-center gap-1.5 font-medium text-gray-700">
          <span className="w-3 h-0.5 border-t-2 border-dashed border-blue-500" /> Competitor Average
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Circular opportunity score gauge with trend sparkline              */
/* ------------------------------------------------------------------ */
function OpportunityGauge({ score }: { score: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
      <div className="relative w-32 h-32 mx-auto">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#fde68a" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#f97316"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{score}</span>
          <span className="text-[10px] text-gray-400">out of 100</span>
        </div>
      </div>
      <div className="text-[11px] font-bold text-orange-500 mt-2 tracking-wide">
        HIGH OPPORTUNITY
      </div>

      <svg viewBox="0 0 140 40" className="w-full h-auto mt-3">
        <polyline
          points="0,32 20,30 40,26 60,28 80,20 100,14 120,10 140,4"
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
        />
      </svg>
      <div className="text-[10px] text-gray-400 mt-1">Revenue opportunity trend · 5 days</div>
    </div>
  );
}
