
;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  ShoppingCart,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Database,
  Headphones,
  Rocket,
  Code,
  Server,
  Cloud,
  CreditCard,
  HardDrive,
} from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">
                  Trusted by 500+ Businesses
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white mb-2">Build Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  E-Commerce Empire
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-lg lg:max-w-none leading-relaxed">
                Transform your business with cutting-edge e-commerce solutions. We build scalable,
                secure, and high-performing online stores that drive sales and customer engagement
                across all platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Professional Dashboard */}
            <div className="relative hidden lg:block ">
              <div className="relative flex justify-center">
                {/* Laptop Base */}
                <div className="w-[480px] h-72 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl shadow-2xl transform rotate-3">
                  {/* Laptop Screen */}
                  <div className="absolute -top-2 -left-2 w-full h-full bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden">
                    {/* Top Navigation Bar */}
                    <div className="bg-white border-b border-slate-100 px-4 py-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-slate-800 font-semibold text-sm">Projectify</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                          <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                          <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="p-4 space-y-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          {
                            label: "Revenue",
                            value: "$45.2K",
                            color: "from-green-500 to-green-600",
                          },
                          {
                            label: "Orders",
                            value: "1,234",
                            color: "from-blue-500 to-blue-600",
                          },
                          {
                            label: "Growth",
                            value: "+23%",
                            color: "from-purple-500 to-purple-600",
                          },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className={`bg-gradient-to-r ${stat.color} rounded-lg p-3 text-white text-center`}
                          >
                            <div className="text-lg font-bold">{stat.value}</div>
                            <div className="text-xs opacity-90">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Recent Orders Table */}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-800 text-sm">Recent Orders</h3>
                          <button className="text-blue-600 text-xs font-medium">View All</button>
                        </div>
                        <div className="space-y-2">
                          {[
                            {
                              id: "#1234",
                              customer: "John Doe",
                              amount: "$299.99",
                              status: "Delivered",
                            },
                            {
                              id: "#1235",
                              customer: "Jane Smith",
                              amount: "$199.99",
                              status: "Processing",
                            },
                            {
                              id: "#1236",
                              customer: "Mike Johnson",
                              amount: "$399.99",
                              status: "Shipped",
                            },
                          ].map((order, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-xs text-gray-600">{order.id}</span>
                                <span className="text-xs text-gray-800 font-medium">
                                  {order.customer}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-800 font-medium">
                                  {order.amount}
                                </span>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full ${order.status === "Delivered"
                                      ? "bg-green-100 text-green-700"
                                      : order.status === "Processing"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-blue-100 text-blue-700"
                                    }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                          Add Product
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                          View Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-gray-700">Analytics</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-gray-700">Global</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-16 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-gray-700">Secure</span>
                  </div>
                </div>

                {/* Performance Badge */}
                <div className="absolute top-1/2 -right-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 shadow-lg">
                  <div className="text-center text-white text-xs">
                    <div className="font-bold text-lg">99.9%</div>
                    <div>Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "E-Commerce Projects",
                icon: ShoppingCart,
              },
              { number: "50M+", label: "Products Managed", icon: Database },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "24/7", label: "Support Available", icon: Headphones },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete E-Commerce Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end e-commerce development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Multi-Platform Stores",
                description: "Build stores for Shopify, WooCommerce, Magento, and custom platforms",
                features: ["Responsive Design", "Mobile-First", "Cross-Browser"],
              },
              {
                icon: Globe,
                title: "Global Marketplace Integration",
                description: "Connect with Amazon, eBay, Walmart, and regional marketplaces",
                features: ["API Integration", "Inventory Sync", "Order Management"],
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "PCI DSS, GDPR, and industry-standard security protocols",
                features: ["SSL Certificates", "Fraud Protection", "Data Encryption"],
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast loading speeds and SEO optimization",
                features: ["CDN Integration", "Image Optimization", "Caching"],
              },
              {
                icon: Users,
                title: "Customer Experience",
                description: "Intuitive navigation and personalized shopping journeys",
                features: ["User Analytics", "A/B Testing", "Personalization"],
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description: "Comprehensive reporting and business intelligence tools",
                features: ["Sales Analytics", "Customer Behavior", "ROI Tracking"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4 text-base">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Powerful E-Commerce Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the advanced capabilities that make our e-commerce solutions stand out from
              the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Multi-Platform Integration",
                description:
                  "Seamlessly connect Shopify, WooCommerce, Magento, and custom platforms with unified inventory and order management.",
                features: [
                  "API Integration",
                  "Real-time Sync",
                  "Centralized Control",
                  "Cross-Platform Analytics",
                ],
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "Bank-level security with PCI DSS compliance, fraud detection, and advanced encryption protocols.",
                features: [
                  "SSL Certificates",
                  "Fraud Protection",
                  "GDPR Compliance",
                  "Secure Payments",
                ],
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Lightning-fast loading speeds with CDN integration, image optimization, and advanced caching.",
                features: [
                  "CDN Integration",
                  "Image Optimization",
                  "Lazy Loading",
                  "Performance Monitoring",
                ],
              },
              {
                icon: Users,
                title: "Customer Experience",
                description:
                  "Personalized shopping journeys with AI-powered recommendations and intelligent search.",
                features: [
                  "AI Recommendations",
                  "Smart Search",
                  "Personalization",
                  "User Analytics",
                ],
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Comprehensive business intelligence with real-time reporting and predictive insights.",
                features: [
                  "Real-time Analytics",
                  "Predictive Insights",
                  "Custom Reports",
                  "ROI Tracking",
                ],
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Multi-language, multi-currency support with localized payment methods and shipping.",
                features: ["Multi-language", "Multi-currency", "Local Payments", "Global Shipping"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900 mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-6 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                Built for Scale & Performance
              </h3>
              <div className="space-y-4">
                {[
                  "Handle millions of products with lightning-fast search",
                  "Process thousands of orders per minute",
                  "99.9% uptime guarantee with global CDN",
                  "Auto-scaling infrastructure for peak traffic",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Ready to Scale?</h4>
                  <p className="text-blue-100 mb-6">
                    Our e-commerce solutions are designed to grow with your business, from startup
                    to enterprise.
                  </p>
                  <Link href="/contact-us">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-slate-600">Projects Delivered</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-xs text-slate-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built with modern tech stack for scalability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "React/Next.js",
                category: "Frontend",
                icon: Code,
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Node.js/Express",
                category: "Backend",
                icon: Server,
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "MongoDB/PostgreSQL",
                category: "Database",
                icon: Database,
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "AWS/Azure",
                category: "Cloud",
                icon: Cloud,
                color: "from-orange-500 to-red-500",
              },
              {
                name: "Shopify API",
                category: "E-Commerce",
                icon: ShoppingCart,
                color: "from-blue-600 to-indigo-600",
              },
              {
                name: "Stripe/PayPal",
                category: "Payments",
                icon: CreditCard,
                color: "from-green-600 to-teal-600",
              },

              {
                name: "Docker/Kubernetes",
                category: "DevOps",
                icon: HardDrive,
                color: "from-blue-600 to-purple-600",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-3">{tech.name}</div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 font-medium px-3 py-1"
                >
                  {tech.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Launch Your E-Commerce Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution that drives results
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
