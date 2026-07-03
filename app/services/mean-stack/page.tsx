
;
import React from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Zap,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Rocket,
  Server,
  Package,
  Lock,
  RefreshCw,
  Layers,
  Activity,
  Cloud,
  Cpu,
  HardDrive,
  Network,
  FileCode2,
  FileText,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface TechStack {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const techStack: TechStack[] = [
  {
    id: 1,
    name: "MongoDB",
    description: "NoSQL database for flexible, scalable data storage",
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    name: "Express.js",
    description: "Fast, unopinionated web framework for Node.js",
    icon: <Server className="w-8 h-8" />,
    color: "from-gray-500 to-gray-700",
  },
  {
    id: 3,
    name: "Angular",
    description: "Full-featured framework for building scalable applications",
    icon: <Globe className="w-8 h-8" />,
    color: "from-red-500 to-red-700",
  },
  {
    id: 4,
    name: "Node.js",
    description: "JavaScript runtime for server-side development",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-green-600 to-green-800",
  },
];

const features: Feature[] = [
  // Development Features
  {
    id: 1,
    title: "TypeScript Support",
    description: "Built-in TypeScript for type-safe development",
    icon: <FileText className="w-8 h-8" />,
    category: "Development",
  },
  {
    id: 2,
    title: "Component Architecture",
    description: "Modular, reusable components with dependency injection",
    icon: <Layers className="w-8 h-8" />,
    category: "Development",
  },
  {
    id: 3,
    title: "RESTful APIs",
    description: "Create scalable and maintainable API endpoints",
    icon: <Network className="w-8 h-8" />,
    category: "Development",
  },
  {
    id: 4,
    title: "Real-time Applications",
    description: "Build interactive apps with WebSocket and Socket.io",
    icon: <Activity className="w-8 h-8" />,
    category: "Development",
  },

  // Performance Features
  {
    id: 5,
    title: "Lazy Loading",
    description: "On-demand module loading for better performance",
    icon: <Zap className="w-8 h-8" />,
    category: "Performance",
  },
  {
    id: 6,
    title: "AOT Compilation",
    description: "Ahead-of-time compilation for faster rendering",
    icon: <Rocket className="w-8 h-8" />,
    category: "Performance",
  },
  {
    id: 7,
    title: "Tree Shaking",
    description: "Remove unused code for smaller bundle sizes",
    icon: <HardDrive className="w-8 h-8" />,
    category: "Performance",
  },
  {
    id: 8,
    title: "CDN Integration",
    description: "Global content delivery for faster loading",
    icon: <Cloud className="w-8 h-8" />,
    category: "Performance",
  },

  // Security Features
  {
    id: 9,
    title: "JWT Authentication",
    description: "Secure token-based authentication system",
    icon: <Lock className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 10,
    title: "Input Validation",
    description: "Comprehensive data validation and sanitization",
    icon: <Shield className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 11,
    title: "CORS Management",
    description: "Cross-origin resource sharing configuration",
    icon: <Globe className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 12,
    title: "Rate Limiting",
    description: "API rate limiting and DDoS protection",
    icon: <RefreshCw className="w-8 h-8" />,
    category: "Security",
  },

  // Enterprise Features
  {
    id: 13,
    title: "Enterprise Architecture",
    description: "Built for large-scale enterprise applications",
    icon: <Users className="w-8 h-8" />,
    category: "Enterprise",
  },
  {
    id: 14,
    title: "Testing Framework",
    description: "Built-in testing tools and utilities",
    icon: <CheckCircle className="w-8 h-8" />,
    category: "Enterprise",
  },
  {
    id: 15,
    title: "CLI Tools",
    description: "Powerful command-line interface for development",
    icon: <Code className="w-8 h-8" />,
    category: "Enterprise",
  },
  {
    id: 16,
    title: "Documentation",
    description: "Comprehensive documentation and guides",
    icon: <FileCode2 className="w-8 h-8" />,
    category: "Enterprise",
  },
];

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Enterprise Applications",
    description: "Large-scale business applications with complex requirements",
    icon: <Users className="w-8 h-8" />,
    benefits: [
      "Scalable architecture",
      "Enterprise security",
      "Performance optimization",
      "Maintenance support",
    ],
  },
  {
    id: 2,
    title: "E-commerce Platforms",
    description: "Full-featured online stores with advanced functionality",
    icon: <Package className="w-8 h-8" />,
    benefits: [
      "Product management",
      "Shopping cart system",
      "Payment integration",
      "Order processing",
    ],
  },
  {
    id: 3,
    title: "Content Management",
    description: "Dynamic CMS with rich content editing capabilities",
    icon: <FileCode2 className="w-8 h-8" />,
    benefits: ["Rich text editor", "Media management", "SEO optimization", "Multi-user access"],
  },
  {
    id: 4,
    title: "Dashboard Applications",
    description: "Data visualization and analytics dashboards",
    icon: <BarChart3 className="w-8 h-8" />,
    benefits: ["Real-time data", "Interactive charts", "Custom widgets", "Responsive design"],
  },
];

export default function MEANStackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-red-500/20 text-red-200 border-red-400/30 mb-6">
              <Code className="w-4 h-4 mr-2" />
              MEAN Stack
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Development
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build robust, scalable applications using MongoDB, Express.js, Angular, and Node.js.
              Enterprise-ready solutions with TypeScript support and comprehensive tooling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  Start Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The MEAN Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful technologies working together to create enterprise-grade applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tech.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h3>

                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features & Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features that make MEAN stack ideal for enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    {feature.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect For These Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MEAN stack excels in building enterprise-grade web applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {useCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MEAN Stack?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advantages that make MEAN stack the ideal choice for enterprise development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript First</h3>
              <p className="text-gray-600">Built-in TypeScript for type safety</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Ready</h3>
              <p className="text-gray-600">Built for large-scale applications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Easy to scale as business grows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">Industry-standard enterprise solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build with MEAN?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s create enterprise-grade applications using the MEAN stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
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
