import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  Monitor,
  Server,
  Cloud,
  Palette,
  Search,
  Rocket,
  TrendingUp,
  Headphones,
  FileText,
  Building,
  Cpu,
  Layers,
  Network,
  Activity,
  Braces,
  Brackets,
  Square,
  Circle,
  Triangle,
  Hexagon,
} from "lucide-react";
import Link from "next/link";

;

// Add structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Web Development Services",
  description:
    "Expert web development services including custom websites, web applications, React, Next.js, Node.js solutions.",
  provider: {
    "@type": "Organization",
    name: "Ctas Info Services LLP",
    url: "https://www.ctasis.com",
    logo: "https://www.ctasis.com/assets/images/ctas-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917948993409",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  },
  serviceType: "Web Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Professional Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          description:
            "Professional custom web development services with tailored web applications",
          provider: {
            "@type": "Organization",
            name: "Ctas Info Services LLP",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "eCommerce Development",
          description:
            "Professional eCommerce development services with complete online store solutions including payment processing and inventory management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Web Applications",
          description:
            "Scalable web applications designed for large organizations and complex business processes",
        },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    description:
      "Professional web development services including custom websites, web applications, React, Next.js, Node.js solutions.",
    images: ["https://www.ctasis.com/assets/images/web-dev-twitter-card.jpg"],
    site: "@ctasinfoservices",
  },
};

const Services = () => {
  const techCategories = [
    {
      title: "Front-end",
      description: "Modern user interface frameworks and libraries",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      technologies: [
        {
          name: "React",
          icon: Braces,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Angular",
          icon: Circle,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Vue.js",
          icon: Triangle,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "TypeScript",
          icon: Brackets,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "Next.js",
          icon: Square,
          color: "from-black to-gray-800",
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: Palette,
          color: "from-cyan-500 to-blue-500",
          level: "Expert",
        },
        {
          name: "Preact ",
          icon: Layers,
          color: "from-cyan-500 to-blue-500",
          level: "Expert",
        },
        {
          name: "Remix js",
          icon: Braces,
          color: "from-cyan-500 to-blue-500",
          level: "Expert",
        },
        {
          name: "Django",
          icon: Circle,
          color: "from-cyan-500 to-blue-500",
          level: "Expert",
        },
      ],
    },
    {
      title: "Back-end",
      description: "Server-side technologies and frameworks",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      technologies: [
        {
          name: "Node.js",
          icon: Hexagon,
          color: "from-green-600 to-green-700",
          level: "Expert",
        },
        {
          name: "Python",
          icon: Cpu,
          color: "from-yellow-500 to-orange-500",
          level: "Advanced",
        },
        {
          name: "PHP",
          icon: Code,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Laravel",
          icon: Layers,
          color: "from-red-500 to-orange-500",
          level: "Advanced",
        },
        {
          name: "Flask",
          icon: Building,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
        {
          name: "Express.js",
          icon: Network,
          color: "from-gray-600 to-gray-800",
          level: "Expert",
        },
      ],
    },
    {
      title: "Web Server",
      description: "Cloud platforms and deployment solutions",
      icon: Cloud,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      technologies: [
        {
          name: "AWS",
          icon: Cloud,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Azure",
          icon: Cloud,
          color: "from-blue-500 to-blue-600",
          level: "Advanced",
        },
        {
          name: "Docker",
          icon: Server,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
        {
          name: "MySQL",
          icon: Database,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "MongoDB",
          icon: Database,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
        {
          name: "PostgreSQL",
          icon: Activity,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
      ],
    },
  ];

  const services = [
    {
      title: "Custom Web Development",
      description:
        "Professional custom web development services with tailored web applications built from scratch to meet your specific business requirements using modern technologies",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
    {
      title: "CMS-Based Websites",
      description:
        "Expert content management system development that gives you full control over your website content with professional CMS solutions",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      features: [
        "WordPress Development",
        "Drupal Solutions",
        "Joomla Development",
        "Content Management",
      ],
    },
    {
      title: "eCommerce Development",
      description:
        "Professional eCommerce development services with complete online store solutions including payment processing and inventory management",

      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
      features: [
        "Payment Gateways",
        "Inventory Management",
        "Order Processing",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Enterprise Web Applications",
      description:
        "Expert enterprise web application development with scalable web applications designed for large organizations and complex business processes",
      icon: Building,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Scalable Architecture",
        "Multi-user Systems",
        "Advanced Security",
        "Integration APIs",
      ],
    },
    {
      title: "PHP Web Development",
      description:
        "Professional PHP web development services with robust web applications built using PHP frameworks and modern development practices",
      icon: Server,
      color: "from-orange-500 to-red-500",
      features: [
        "Laravel Development",
        "CodeIgniter Solutions",
        "Custom PHP Applications",
        "API Development",
      ],
    },
    {
      title: "Python Development",
      description:
        "Expert Python web development with modern web applications and backend systems built using Python frameworks and best practices",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Django Development",
        "Flask Applications",
        "Data Processing",
        "Machine Learning Integration",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project plan",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with modern technologies and best practices",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across all devices and browsers",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment, monitoring, and ongoing maintenance support",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      title: "Responsive Design",
      description: "Websites that look perfect on all devices",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "SEO Optimized",
      description: "Built for search engine visibility and ranking",
      icon: Search,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast loading speeds and optimization",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and data protection",
      icon: Shield,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business needs",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: Headphones,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Our Website Development Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Professional{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Web Development Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We create cutting-edge web applications that drive business growth. From responsive
                websites to complex web platforms, we deliver solutions that exceed expectations.
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
                { number: "100+", label: "Websites Built", icon: Globe },
                { number: "50+", label: "Happy Clients", icon: Users },
                { number: "7+", label: "Years Experience", icon: Award },
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

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Our Professional Web Development Services
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Web Development Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer end-to-end professional web development services tailored to your business
                needs. Our expert developers deliver custom web solutions using modern technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section - Redesigned */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge technologies organized by development layers to build robust and
                scalable web applications.
              </p>
            </div>

            <div className="space-y-8">
              {techCategories.map((category, categoryIndex) => (
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
                      {category.technologies.map((tech, techIndex) => (
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

                          {/* Hover Effect - Glow */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {categoryIndex < techCategories.length - 1 && (
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Development{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery.
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
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a stunning website that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                  View Our Portfolio
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

export default Services;
