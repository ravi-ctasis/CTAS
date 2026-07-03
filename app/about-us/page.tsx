import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  HandHeart,
  Shield,
  Star,
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  Globe,
  Building,
  Brain,
  ShoppingCart,
  Database,
  Cloud,
  Smartphone,
  Phone,
  Truck,
  GraduationCap,
  Utensils,
  Home,
  CreditCard,
  Activity,
  Store,
  Package,
} from "lucide-react";
import Link from "next/link";
;

const About = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Delivered",
      icon: Target,
      description: "Across Retail, Healthcare & Finance",
    },
    {
      number: "20+",
      label: "Certified Developers",
      icon: Users,
      description: "AI, Python, TypeScript & C#",
    },
    {
      number: "15+",
      label: "Marketplaces",
      icon: ShoppingCart,
      description: "Amazon, eBay, Walmart & More",
    },
    {
      number: "2019",
      label: "Founded",
      icon: Building,
      description:
        "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470",
    },
  ];

  const coreValues = [
    {
      icon: Star,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in every project, ensuring exceptional results that exceed expectations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore cutting-edge technologies and creative solutions to stay ahead of industry trends.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HandHeart,
      title: "Collaboration",
      description:
        "We believe in working together with our clients and team members to achieve shared success and growth.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and ethical practices in all our business relationships and deliverables.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: "AI-First Approach",
      description:
        "We leverage artificial intelligence and machine learning to create intelligent, scalable solutions.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We serve clients worldwide with our expertise in international marketplace integrations and global solutions.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const services = [
    {
      icon: ShoppingCart,
      title: "Marketplace Integration",
      description:
        "Amazon SP API, eBay, Walmart, TikTok Shop, Shopify, and 15+ global platforms",
      features: [
        "Multi-Platform Support",
        "AI-Powered Automation",
        "Real-time Sync",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "MERN Stack, MEAN Stack, WordPress, Laravel, and modern frameworks",
      features: ["Frontend & Backend", "CMS Development", "API Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native iOS/Android and cross-platform solutions with React Native, Flutter",
      features: ["Native Apps", "Cross-Platform", "UI/UX Design"],
    },
    {
      icon: Database,
      title: "E-Commerce Solutions",
      description:
        "WooCommerce, Shopify, Magento with secure payment gateways and AI recommendations",
      features: [
        "Platform Development",
        "Payment Integration",
        "AI Recommendations",
      ],
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "OpenAI integration, AI agents, RAG systems, and intelligent automation",
      features: ["OpenAI", "AI Agents"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description:
        "Azure, AWS, Docker, Kubernetes with automated testing and CI/CD pipelines",
      features: ["Cloud Deployment", "DevOps Automation", "24/7 Monitoring"],
    },
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and technical requirements through comprehensive discovery sessions.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Business Analysis",
        "Requirements Gathering",
        "Technical Planning",
        "Project Timeline",
      ],
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our design team creates intuitive user interfaces and interactive prototypes that align with your brand and user experience goals.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: [
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Brand Integration",
      ],
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Our certified developers build your solution using modern technologies, ensuring scalability, security, and performance.",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      features: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Database Design",
      ],
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices and browsers.",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      features: [
        "Functional Testing",
        "Performance Testing",
        "Security Testing",
        "Cross-browser Testing",
      ],
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description:
        "We deploy your solution to production with proper monitoring, backup systems, and performance optimization.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cloud Deployment",
        "Performance Optimization",
        "Monitoring Setup",
        "Launch Support",
      ],
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description:
        "We provide ongoing support, maintenance, and updates to ensure your solution continues to perform at its best.",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      features: [
        "24/7 Support",
        "Regular Updates",
        "Performance Monitoring",
        "Security Patches",
      ],
    },
  ];

  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description:
        "End-to-end online store development with AI-powered recommendation engines and marketplace integrations",
      href: "/industries/retail",
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description:
        "HIPAA-compliant portals, telemedicine apps, predictive analytics, and patient management systems",
      href: "/industries/healthcare",
    },
    {
      icon: CreditCard,
      title: "Banking & Finance",
      description:
        "Secure banking portals with PCI DSS compliance, fintech solutions, and payment processing",
      href: "/industries/banking-finance",
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description:
        "Route optimization, fleet tracking, IoT sensor integrations, and supply chain management",
      href: "/industries/transportation",
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description:
        "Interactive LMS platforms with AI-driven personalized learning and student management systems",
      href: "/industries/education",
    },
    {
      icon: Building,
      title: "Enterprise & Corporate",
      description:
        "Scalable architectures, enterprise-grade security solutions, and business process automation",
      href: "/industries/enterprise",
    },

    {
      icon: Utensils,
      title: "Food & Beverage",
      description:
        "Restaurant management systems, food delivery platforms, and inventory management solutions",
      href: "/industries/food-beverage",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Property management platforms, virtual tours, market analysis tools, and agent portals",
      href: "/industries/real-estate",
    },
    {
      icon: Activity,
      title: "Wellness & Fitness",
      description:
        "Health tracking apps, fitness platforms, wellness management systems, and IoT integrations",
      href: "/industries/wellness",
    },
  ];

  const marketplaces = [
    {
      icon: Store,
      title: "Amazon",
      description:
        "Complete Amazon SP-API integration with FBA/FBM management, order processing, and analytics",
      features: [
        "SP-API Integration",
        "FBA/FBM Management",
        "Order Automation",
        "Analytics Dashboard",
      ],
      href: "/services/amazon-services",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: ShoppingCart,
      title: "eBay",
      description:
        "eBay API integration with listing management, order processing, and inventory synchronization",
      features: [
        "eBay API",
        "Listing Management",
        "Order Processing",
        "Inventory Sync",
      ],
      href: "/services/marketplace",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Package,
      title: "Walmart",
      description:
        "Walmart Marketplace integration with product management and order fulfillment automation",
      features: [
        "Walmart API",
        "Product Management",
        "Order Fulfillment",
        "Performance Analytics",
      ],
      href: "/services/marketplace",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Shopify",
      description:
        "Shopify store development with custom themes, apps, and third-party integrations",
      features: [
        "Custom Themes",
        "App Development",
        "API Integration",
        "Payment Gateways",
      ],
      href: "/services/e-commerce-solutions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "TikTok Shop",
      description:
        "TikTok Shop integration with social commerce features and influencer marketing tools",
      features: [
        "TikTok API",
        "Social Commerce",
        "Influencer Tools",
        "Analytics",
      ],
      href: "/services/marketplace",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Store,
      title: "Etsy",
      description:
        "Etsy marketplace integration with handmade product management and seller tools",
      features: ["Etsy API", "Product Management", "Seller Tools", "Analytics"],
      href: "/services/marketplace",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                About Ctas Info Services LLP
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                India&apos;s Pioneering{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Technology Firm
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Ctas Info Services LLP is one of India&apos;s pioneering
                technology firms, specializing in web, mobile, and e-commerce
                development since 2019. Our team of 20+ certified professionals
                has delivered over 100+ projects across retail, logistics,
                education, healthcare, and financial services—combining deep
                domain expertise with innovative AI integrations to drive
                measurable growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm lg:text-base text-white/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/70">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                  Our Story
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Transforming Businesses Through{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Technology Innovation
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2019, Ctas Info Services LLP has been at the forefront
                  of digital transformation, helping businesses harness the
                  power of cutting-edge technology to achieve unprecedented
                  growth and efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      100+ Projects Delivered Successfully
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      20+ Certified Technology Experts
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      15+ Global Marketplace Integrations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      AI-Powered Solutions & Automation
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Team Size
                      </h3>
                      <p className="text-gray-600">20+ Professionals</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Success Rate
                      </h3>
                      <p className="text-gray-600">98% Client Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Global Reach
                      </h3>
                      <p className="text-gray-600">15+ Countries</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Experience
                      </h3>
                      <p className="text-gray-600">7+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Our Values
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Core Values That{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Drive Our Success
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in building strong relationships based on trust,
                innovation, and excellence. Our values guide every decision we
                make and every solution we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Services
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Technology Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer end-to-end technology solutions that help businesses
                grow, scale, and succeed in the digital age.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Development Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven, systematic approach to deliver high-quality
                web solutions that meet your business objectives and exceed user
                expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {developmentProcess.map((process, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white relative overflow-hidden"
                >
                  <CardContent className="p-6 lg:p-8">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">
                          {process.step}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <process.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {process.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {process.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Industries
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industries We{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Specialize In
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our deep domain expertise across multiple industries enables us
                to deliver tailored solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace Integrations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Marketplace Expertise
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Global{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Marketplace Integration
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in integrating with major global marketplaces,
                helping businesses expand their reach and automate their
                operations across multiple platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {marketplaces.map((marketplace, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${marketplace.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <marketplace.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {marketplace.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {marketplace.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {marketplace.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Overview */}
        {/* <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Our Team
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Expert Team
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse team of certified professionals brings together
                expertise in technology, design, and business strategy to
                deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-blue-100 text-blue-700 border-blue-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss how our AI-enhanced expertise and e-commerce
              mastery can drive your growth. Our experts are ready to provide
              personalized solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button> */}
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default About;
