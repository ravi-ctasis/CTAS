
;
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

import {
  ChefHat,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  CreditCard,
  Target,
  TrendingUp,
  BarChart3,
  Smartphone,
  Monitor,
  Server,
  CheckCircle,
  Sparkles,
  Rocket,
  Menu,
  Package,
  Palette,
  Receipt,
  Truck,
} from "lucide-react";
import Link from "next/link";

const RestaurantAppPage = () => {
  const restaurantFeatures = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Kitchen Management",
      description: "Real-time order tracking & prep",
      color: "from-orange-400 to-red-500",
      metric: "40% faster service",
    },
    {
      icon: <Receipt className="w-12 h-12" />,
      title: "Smart POS System",
      description: "Integrated payment & inventory",
      color: "from-green-400 to-emerald-500",
      metric: "99.9% accuracy",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Engagement",
      description: "Loyalty programs & feedback",
      color: "from-blue-400 to-indigo-500",
      metric: "3x customer retention",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      description: "Real-time business insights",
      color: "from-purple-400 to-pink-500",
      metric: "25% revenue increase",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      items: [
        {
          name: "React Native",
          icon: <Code className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "TypeScript",
          icon: <Code className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "Tailwind CSS",
          icon: <Palette className="w-6 h-6" />,
          color: "bg-cyan-100 text-cyan-600",
        },
        {
          name: "Redux Toolkit",
          icon: <Database className="w-6 h-6" />,
          color: "bg-purple-100 text-purple-600",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <Server className="w-6 h-6" />,
          color: "bg-green-100 text-green-600",
        },
        {
          name: "Express.js",
          icon: <Server className="w-6 h-6" />,
          color: "bg-gray-100 text-gray-600",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        {
          name: "AWS",
          icon: <Cloud className="w-6 h-6" />,
          color: "bg-orange-100 text-orange-600",
        },
        {
          name: "Docker",
          icon: <Package className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "Kubernetes",
          icon: <Server className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "CI/CD",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-green-100 text-green-600",
        },
      ],
    },
    {
      category: "Restaurant Specific",
      items: [
        {
          name: "POS Integration",
          icon: <Receipt className="w-6 h-6" />,
          color: "bg-green-100 text-green-600",
        },
        {
          name: "Kitchen Display",
          icon: <Monitor className="w-6 h-6" />,
          color: "bg-orange-100 text-orange-600",
        },
        {
          name: "Inventory Management",
          icon: <Package className="w-6 h-6" />,
          color: "bg-purple-100 text-purple-600",
        },
        {
          name: "Loyalty System",
          icon: <Star className="w-6 h-6" />,
          color: "bg-yellow-100 text-yellow-600",
        },
      ],
    },
  ];

  const restaurantModules = [
    {
      title: "Order Management",
      icon: <Menu className="w-10 h-10" />,
      description: "Streamlined ordering process with real-time updates",
      features: [
        "Table reservations",
        "Online ordering",
        "Kitchen notifications",
        "Order tracking",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Kitchen Operations",
      icon: <ChefHat className="w-10 h-10" />,
      description: "Efficient kitchen workflow and staff management",
      features: ["Recipe management", "Prep lists", "Cooking timers", "Staff scheduling"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Customer Experience",
      icon: <Users className="w-10 h-10" />,
      description: "Enhanced dining experience and customer satisfaction",
      features: ["Digital menus", "Table service", "Feedback system", "Loyalty rewards"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Business Intelligence",
      icon: <BarChart3 className="w-10 h-10" />,
      description: "Data-driven insights for business growth",
      features: [
        "Sales analytics",
        "Inventory reports",
        "Customer insights",
        "Performance metrics",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const integrations = [
    {
      name: "Payment Gateways",
      icon: <CreditCard className="w-8 h-8" />,
      items: ["Stripe", "Square", "PayPal", "Apple Pay"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "POS Systems",
      icon: <Receipt className="w-8 h-8" />,
      items: ["Toast", "Square POS", "Lightspeed", "Shopify POS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Delivery Partners",
      icon: <Truck className="w-8 h-8" />,
      items: ["Uber Eats", "DoorDash", "Grubhub", "Postmates"],
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Marketing Tools",
      icon: <Target className="w-8 h-8" />,
      items: ["Mailchimp", "HubSpot", "Google Ads", "Facebook Ads"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Restaurant Tech Stack
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Restaurant App
                <span className="block text-cyan-300">Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-emerald-100 leading-relaxed">
                Transform your restaurant with our comprehensive digital platform. From kitchen
                management to customer engagement, we&apos;ve got everything covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    View Portfolios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Restaurant Visual */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Restaurant App Interface */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-white rounded-3xl shadow-2xl p-4 sm:p-6 transform rotate-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mr-2 sm:mr-3" />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-800">
                          Gourmet Delights
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">Restaurant Management</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                      <span className="text-emerald-700 text-xs sm:text-sm font-semibold">
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-600">24</div>
                      <div className="text-xs text-gray-500">Orders Today</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-teal-600">$1,247</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-600">4.8★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-emerald-50 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            Order #1247
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">Table 5 • 2 items</p>
                        </div>
                        <div className="text-right">
                          <div className="text-emerald-600 font-bold text-sm sm:text-base">$32</div>
                          <div className="text-xs text-gray-500">5 min ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            Order #1248
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">Delivery • 3 items</p>
                        </div>
                        <div className="text-right">
                          <div className="text-teal-600 font-bold text-sm sm:text-base">$45</div>
                          <div className="text-xs text-gray-500">3 min ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-50 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            Order #1249
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">Takeaway • 1 item</p>
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-600 font-bold text-sm sm:text-base">$18</div>
                          <div className="text-xs text-gray-500">1 min ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-yellow-400 p-2 sm:p-4 rounded-full shadow-lg sm:shadow-xl">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-500 p-2 sm:p-4 rounded-full shadow-lg sm:shadow-xl">
                  <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-6 sm:-left-8 bg-green-500 p-2 sm:p-4 rounded-full shadow-lg sm:shadow-xl">
                  <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 sm:-right-8 bg-purple-500 p-2 sm:p-4 rounded-full shadow-lg sm:shadow-xl">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Restaurant Management
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a modern, efficient restaurant operation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {restaurantFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div
                  className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {feature.description}
                </p>
                <div className="text-xs sm:text-sm font-semibold text-emerald-600">
                  {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Modules */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Restaurant-Specific Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized features designed specifically for restaurant operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {restaurantModules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and services effortlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${integration.color} mb-6`}
                >
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{integration.name}</h3>
                <div className="space-y-2">
                  {integration.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed specifically for restaurant success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast Setup</h3>
                  <p className="text-gray-600">
                    Get your restaurant up and running in under 24 hours with our streamlined
                    onboarding process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">
                    Bank-level security with end-to-end encryption and PCI DSS compliance for all
                    transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Support</h3>
                  <p className="text-gray-600">
                    24/7 customer support in multiple languages with dedicated account managers for
                    enterprise clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Real-time insights into sales, inventory, customer behavior, and operational
                    efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First Design</h3>
                  <p className="text-gray-600">
                    Optimized for mobile devices with offline capabilities and push notifications
                    for real-time updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Architecture</h3>
                  <p className="text-gray-600">
                    Built to grow with your business, supporting from single locations to
                    multi-chain operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Tech Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies for scalability, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {techStack.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  {category.category}
                  <div className="ml-3 w-6 sm:w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-center p-3 sm:p-4 rounded-xl ${item.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {item.icon}
                      <span className="ml-2 sm:ml-3 font-semibold text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Join thousands of restaurants that have modernized their operations with our
            comprehensive solution.
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

export default RestaurantAppPage;
