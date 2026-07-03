"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Monitor,
  Globe,
  ShoppingCart,
  Target,
  Zap,
  Rocket,
  Shield,
  Search,
  Layers,
  Users,
  Award,
  Clock,
  CheckCircle,
  Square,
  TrendingUp,
  Settings,
  Circle,
  Triangle,
  Hexagon,
  Braces,
} from "lucide-react";
import Link from "next/link";

const WebDesign = () => {
  const [activeTab, setActiveTab] = useState("planning");

  const designTypes = [
    {
      title: "Custom Web Design",
      description:
        "Tailored web designs that perfectly match your brand identity and business goals",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Custom Layouts",
        "Brand Integration",
        "Responsive Design",
        "Performance Optimization",
      ],
      platforms: ["Desktop", "Tablet", "Mobile", "Smart TV"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Adobe XD"],
    },
    {
      title: "Static Website Design",
      description:
        "Fast, lightweight static websites perfect for portfolios, landing pages, and simple business sites",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: ["Fast Loading", "SEO Optimized", "Easy Maintenance", "Cost Effective"],
      platforms: ["Web Browsers", "Mobile", "Tablet", "Desktop"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Jekyll", "Hugo"],
    },
    {
      title: "Dynamic Website Design",
      description:
        "Interactive websites with dynamic content, user management, and advanced functionality",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      features: [
        "Interactive Elements",
        "Content Management",
        "User Authentication",
        "Database Integration",
      ],
      platforms: ["Web", "Mobile", "Tablet", "Desktop"],
      technologies: ["React", "Vue.js", "Angular", "Node.js", "MongoDB"],
    },
    {
      title: "E-commerce Website Design",
      description:
        "Complete online store designs with shopping cart, payment processing, and inventory management",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      features: ["Product Catalogs", "Shopping Cart", "Payment Integration", "Order Management"],
      platforms: ["Web", "Mobile", "Tablet", "Desktop"],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
    },
    {
      title: "Landing Page Design",
      description:
        "High-converting landing pages designed to capture leads and drive specific actions",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      features: ["Conversion Focused", "A/B Testing", "Lead Capture", "Mobile Optimized"],
      platforms: ["Web", "Mobile", "Tablet", "Desktop"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Analytics", "Heatmaps"],
    },
    {
      title: "Template Design",
      description:
        "Professional website templates that can be customized for different business needs",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Template Customization",
        "Theme Development",
        "Component Libraries",
        "Easy Updates",
      ],
      platforms: ["Web", "Mobile", "Tablet", "Desktop"],
      technologies: ["WordPress", "Drupal", "Joomla", "Bootstrap", "Tailwind CSS"],
    },
  ];

  const technologies = [
    {
      title: "Design Tools",
      description: "Professional design software and prototyping tools",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      techs: [
        {
          name: "Figma",
          icon: Palette,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Adobe XD",
          icon: Monitor,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Sketch",
          icon: Palette,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "InVision",
          icon: Circle,
          color: "from-pink-500 to-purple-500",
          level: "Advanced",
        },
        {
          name: "Principle",
          icon: Triangle,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "Framer",
          icon: Square,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Front-end Technologies",
      description: "Modern web technologies for responsive and interactive designs",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      techs: [
        {
          name: "HTML5",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "CSS3",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "JavaScript",
          icon: Code,
          color: "from-yellow-500 to-orange-500",
          level: "Expert",
        },
        {
          name: "React",
          icon: Braces,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "Vue.js",
          icon: Circle,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "Angular",
          icon: Hexagon,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "CSS Frameworks",
      description: "Modern CSS frameworks for rapid and consistent design development",
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      techs: [
        {
          name: "Tailwind CSS",
          icon: Palette,
          color: "from-cyan-500 to-blue-500",
          level: "Expert",
        },
        {
          name: "Bootstrap",
          icon: Square,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Material UI",
          icon: Circle,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "Chakra UI",
          icon: Triangle,
          color: "from-teal-500 to-cyan-500",
          level: "Advanced",
        },
        {
          name: "Ant Design",
          icon: Square,
          color: "from-blue-500 to-purple-500",
          level: "Advanced",
        },
        {
          name: "Bulma",
          icon: Circle,
          color: "from-cyan-500 to-blue-500",
          level: "Advanced",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business goals, target audience, and design requirements",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Creating design strategy, wireframes, and project roadmap",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Creating visual designs, mockups, and interactive prototypes",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Development & Testing",
      description: "Building the website and testing across all devices and browsers",
      icon: Code,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Launch & Optimization",
      description: "Deploying the website and optimizing for performance and SEO",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Modern Aesthetics",
      description: "Contemporary design trends and visual appeal",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "User Experience",
      description: "Intuitive navigation and user-friendly interfaces",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and smooth interactions",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Accessibility",
      description: "WCAG compliant and inclusive design practices",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const benefits = [
    {
      title: "Boost Your Online Presence",
      description:
        "A professionally designed website can increase your online visibility by up to 60% and help you stand out from competitors",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Brand Recognition",
        "Professional Image",
        "Competitive Advantage",
        "Market Positioning",
      ],
    },
    {
      title: "Enhance User Experience",
      description:
        "Create intuitive, user-friendly interfaces that keep visitors engaged and encourage them to take action",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Easy Navigation", "Fast Loading", "Mobile Optimization", "Accessibility"],
    },
    {
      title: "Increase Conversion Rates",
      description:
        "Well-designed websites can increase conversion rates by up to 200% through strategic design and user experience optimization",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      features: [
        "Call-to-Action Optimization",
        "Landing Page Design",
        "User Flow Design",
        "Conversion Tracking",
      ],
    },
    {
      title: "Improve SEO Performance",
      description:
        "Search engine optimized designs help improve your website's ranking and drive more organic traffic",
      icon: Search,
      color: "from-orange-500 to-red-500",
      features: [
        "SEO-Friendly Structure",
        "Fast Loading Speed",
        "Mobile-First Design",
        "Schema Markup",
      ],
    },
    {
      title: "Build Trust & Credibility",
      description:
        "Professional web design builds trust with your audience and establishes credibility for your brand",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Professional Appearance",
        "Security Indicators",
        "Testimonials Display",
        "Contact Information",
      ],
    },
    {
      title: "Scalable & Maintainable",
      description:
        "Future-proof designs that can grow with your business and are easy to maintain and update",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      features: ["Modular Design", "Easy Updates", "Scalable Architecture", "Content Management"],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "Planning & Strategy",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Web Design Planning & Strategy",
        description: "Essential steps to plan and strategize your web design project",
        points: [
          "Define your website's purpose and target audience",
          "Conduct competitor analysis and market research",
          "Plan your website's structure and navigation",
          "Define your brand identity and visual style",
          "Create a detailed project timeline and budget",
          "Select the right design team or agency",
        ],
        tips: [
          "Start with clear goals and objectives",
          "Consider user needs and pain points",
          "Plan for mobile-first design approach",
          "Set realistic timelines and expectations",
        ],
      },
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "User Interface & Experience Design",
        description: "Creating intuitive and engaging user experiences for your website",
        points: [
          "Design user-friendly interfaces and navigation",
          "Create wireframes and interactive prototypes",
          "Implement modern design principles and trends",
          "Ensure accessibility and inclusive design",
          "Optimize for different screen sizes and devices",
          "Design for conversion and user engagement",
        ],
        tips: [
          "Focus on user experience first",
          "Keep the design simple and intuitive",
          "Test designs with real users",
          "Follow web design best practices",
        ],
      },
    },
    {
      id: "development",
      title: "Development Process",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Web Development Process",
        description: "The technical development process from design to deployment",
        points: [
          "Choose the right technology stack and frameworks",
          "Set up development environment and tools",
          "Implement responsive design and functionality",
          "Integrate third-party services and APIs",
          "Ensure code quality and best practices",
          "Implement security measures and performance optimization",
        ],
        tips: [
          "Use modern development frameworks",
          "Follow coding standards and best practices",
          "Implement proper error handling",
          "Plan for regular updates and maintenance",
        ],
      },
    },
    {
      id: "testing",
      title: "Testing & QA",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
      content: {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing to ensure your website works perfectly",
        points: [
          "Perform functional testing on all features",
          "Conduct cross-browser compatibility testing",
          "Test on multiple devices and screen sizes",
          "Perform performance and speed testing",
          "Security testing and vulnerability assessment",
          "User acceptance testing (UAT)",
        ],
        tips: [
          "Test early and test often",
          "Use automated testing tools",
          "Gather user feedback during testing",
          "Fix issues before launch",
        ],
      },
    },
    {
      id: "deployment",
      title: "Deployment & Launch",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      content: {
        title: "Website Deployment & Launch",
        description: "Successfully launching your website and making it live",
        points: [
          "Set up hosting and domain configuration",
          "Configure SSL certificates and security",
          "Implement analytics and tracking tools",
          "Perform final testing and quality checks",
          "Plan marketing and promotional strategies",
          "Monitor website performance and user feedback",
        ],
        tips: [
          "Choose reliable hosting providers",
          "Plan your launch marketing strategy",
          "Monitor website performance closely",
          "Be prepared for post-launch support",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Maintenance & Updates",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      content: {
        title: "Ongoing Maintenance & Updates",
        description: "Keeping your website updated and maintaining its performance",
        points: [
          "Regular content updates and management",
          "Security updates and patches",
          "Performance monitoring and optimization",
          "Analytics review and insights",
          "Handle user support and feedback",
          "Plan for website scaling and growth",
        ],
        tips: [
          "Plan for regular updates and maintenance",
          "Monitor website performance and analytics",
          "Listen to user feedback and suggestions",
          "Stay updated with web standards and trends",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900  overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Web Design Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Modern{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Web Design
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We create stunning, user-friendly websites that look great on every device. We
                design with purpose, focusing on user experience and conversion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { number: "10+", label: "Websites Built", icon: Globe },
                { number: "5+", label: "Happy Clients", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award },
                { number: "24/7", label: "Support", icon: Clock },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm lg:text-base text-white/90">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {designTypes.map((design, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${design.color} rounded-3xl flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <design.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {design.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {design.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                        Key Features:
                      </h4>
                      {design.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Web Design{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge design tools and technologies to build robust and scalable web
                experiences.
              </p>
            </div>

            <div className="space-y-8">
              {technologies.map((category, categoryIndex) => (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl mb-4 shadow-lg`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Technologies Grid */}
                  <div
                    className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 shadow-lg`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                      {category.techs.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          {/* Tech Icon */}
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <tech.icon className="w-6 h-6 text-white" />
                          </div>

                          {/* Tech Name */}
                          <h4 className="text-sm font-bold text-gray-900 text-center mb-2">
                            {tech.name}
                          </h4>

                          {/* Skill Level Badge */}
                          <div className="flex justify-center">
                            <Badge
                              className={`text-xs px-2 py-1 ${tech.level === "Expert"
                                  ? "bg-green-100 text-green-700 border-green-200"
                                  : "bg-blue-100 text-blue-700 border-blue-200"
                                }`}
                            >
                              {tech.level}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {categoryIndex < technologies.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Design{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven web design process ensures quality, transparency, and timely delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white text-center"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-300 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Key{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional web solutions with cutting-edge features and technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Why Choose Web Design?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
                  Professional Web Design
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how professional web design can transform your business and drive growth.
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Top Border Gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  ></div>

                  <CardContent className="relative p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <benefit.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-start group-hover:text-gray-800 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-start text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topical Guide Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Complete Guide
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Topical Guide for{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
                  Web Design
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about web design, from planning to deployment.
              </p>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Vertical Tabs */}
              <div className="lg:w-80">
                <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-8">
                  <div className="space-y-3">
                    {topicalGuide.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl font-semibold transition-all duration-300 text-left ${activeTab === tab.id
                            ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === tab.id ? "bg-white/20" : `bg-gradient-to-r ${tab.color}`
                            }`}
                        >
                          <tab.icon
                            className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-white"
                              }`}
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{tab.title}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                {topicalGuide.map((tab) => (
                  <div
                    key={tab.id}
                    className={`transition-all duration-500 ${activeTab === tab.id ? "block" : "hidden"
                      }`}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{tab.content.title}</h3>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {tab.content.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Key Points */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                          Key Points
                        </h4>
                        <div className="space-y-4">
                          {tab.content.points.map((point, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <span className="text-white text-sm font-bold">{index + 1}</span>
                              </div>
                              <p className="text-gray-700 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pro Tips */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                          Pro Tips
                        </h4>
                        <div className="space-y-4">
                          {tab.content.tips.map((tip, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-l-4 border-purple-500"
                            >
                              <div className="flex items-start">
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                  <span className="text-white text-sm font-bold">{index + 1}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-medium">{tip}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Design Your Website?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let&apos;s create a stunning website that drives results.
            </p>
            <div className="flex justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-green-600 hover:bg-white/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default WebDesign;
