"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Cpu,
  Database,
  Code,
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Rocket,
  Eye,
  Cog,
  Cloud,
  Monitor,
  Search,
  MessageCircle,
  FileCode2,
  Package,
  Lock,
  RefreshCw,
  Layers,
  Activity,
  PieChart,
  AlertTriangle,
  Settings,
  GitBranch,
  GitCompare,
  Download,
} from "lucide-react";
import Link from "next/link";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface Technology {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
}

interface KeyFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const keyFeatures: KeyFeature[] = [
  // Core AI/ML Features
  {
    id: 1,
    title: "Advanced Machine Learning",
    description: "State-of-the-art ML algorithms for classification, regression, and clustering",
    icon: <Brain className="w-8 h-8" />,
    category: "Core AI/ML",
  },
  {
    id: 2,
    title: "Deep Neural Networks",
    description: "Complex neural architectures for image, text, and audio processing",
    icon: <Layers className="w-8 h-8" />,
    category: "Core AI/ML",
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Advanced text analysis, sentiment detection, and language understanding",
    icon: <MessageCircle className="w-8 h-8" />,
    category: "Core AI/ML",
  },
  {
    id: 4,
    title: "Computer Vision",
    description: "Image recognition, object detection, and video analysis capabilities",
    icon: <Eye className="w-8 h-8" />,
    category: "Core AI/ML",
  },

  // Data & Analytics Features
  {
    id: 5,
    title: "Big Data Processing",
    description: "Handle massive datasets with distributed computing and parallel processing",
    icon: <Database className="w-8 h-8" />,
    category: "Data & Analytics",
  },
  {
    id: 6,
    title: "Real-time Analytics",
    description: "Live data streaming and instant insights for decision making",
    icon: <Activity className="w-8 h-8" />,
    category: "Data & Analytics",
  },
  {
    id: 7,
    title: "Predictive Modeling",
    description: "Forecast future trends and behaviors using historical data patterns",
    icon: <TrendingUp className="w-8 h-8" />,
    category: "Data & Analytics",
  },
  {
    id: 8,
    title: "Statistical Analysis",
    description: "Comprehensive statistical methods and hypothesis testing",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Data & Analytics",
  },

  // Infrastructure & Deployment
  {
    id: 9,
    title: "Cloud-Native Architecture",
    description: "Scalable cloud infrastructure for AI/ML workloads",
    icon: <Cloud className="w-8 h-8" />,
    category: "Infrastructure",
  },
  {
    id: 10,
    title: "Auto-scaling Systems",
    description: "Automatic resource allocation based on demand and workload",
    icon: <RefreshCw className="w-8 h-8" />,
    category: "Infrastructure",
  },
  {
    id: 11,
    title: "Model Versioning",
    description: "Track and manage different versions of AI/ML models",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Infrastructure",
  },
  {
    id: 12,
    title: "API Integration",
    description: "RESTful APIs and microservices for seamless integration",
    icon: <Code className="w-8 h-8" />,
    category: "Infrastructure",
  },

  // Security & Compliance
  {
    id: 13,
    title: "Data Encryption",
    description: "End-to-end encryption for sensitive data protection",
    icon: <Lock className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 14,
    title: "Privacy Compliance",
    description: "GDPR, HIPAA, and other regulatory compliance features",
    icon: <Shield className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 15,
    title: "Access Control",
    description: "Role-based permissions and secure authentication",
    icon: <Users className="w-8 h-8" />,
    category: "Security",
  },
  {
    id: 16,
    title: "Audit Logging",
    description: "Comprehensive logging for compliance and security monitoring",
    icon: <FileCode2 className="w-8 h-8" />,
    category: "Security",
  },

  // Monitoring & Optimization
  {
    id: 17,
    title: "Performance Monitoring",
    description: "Real-time monitoring of model performance and system health",
    icon: <Monitor className="w-8 h-8" />,
    category: "Monitoring",
  },
  {
    id: 18,
    title: "Model Optimization",
    description: "Continuous improvement and fine-tuning of AI models",
    icon: <Settings className="w-8 h-8" />,
    category: "Monitoring",
  },
  {
    id: 19,
    title: "Alert Systems",
    description: "Proactive alerts for anomalies and performance issues",
    icon: <AlertTriangle className="w-8 h-8" />,
    category: "Monitoring",
  },
  {
    id: 20,
    title: "A/B Testing",
    description: "Compare different model versions and strategies",
    icon: <GitCompare className="w-8 h-8" />,
    category: "Monitoring",
  },

  // Business Intelligence
  {
    id: 21,
    title: "Interactive Dashboards",
    description: "Customizable dashboards for data visualization and insights",
    icon: <PieChart className="w-8 h-8" />,
    category: "Business Intelligence",
  },
  {
    id: 22,
    title: "Custom Reports",
    description: "Automated report generation and scheduling",
    icon: <FileCode2 className="w-8 h-8" />,
    category: "Business Intelligence",
  },
  {
    id: 23,
    title: "Data Export",
    description: "Multiple export formats for analysis and sharing",
    icon: <Download className="w-8 h-8" />,
    category: "Business Intelligence",
  },
  {
    id: 24,
    title: "Collaboration Tools",
    description: "Team collaboration features for data analysis and insights",
    icon: <Users className="w-8 h-8" />,
    category: "Business Intelligence",
  },
];

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "Machine Learning Models",
    description: "Custom ML models for predictive analytics, classification, and regression tasks",
    icon: <Brain className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, sentiment analysis, and chatbots",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Computer Vision",
    description: "Image and video recognition, object detection, and facial recognition systems",
    icon: <Eye className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Deep Learning",
    description: "Neural networks and deep learning architectures for complex problem solving",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "AI Automation",
    description: "Intelligent process automation and workflow optimization",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
  },
];

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Healthcare & Medical",
    description: "AI-powered diagnosis, medical image analysis, and patient care optimization",
    icon: <Shield className="w-8 h-8" />,
    benefits: [
      "Medical image recognition",
      "Patient data analysis",
      "Drug discovery support",
      "Predictive diagnostics",
    ],
  },
  {
    id: 2,
    title: "Finance & Banking",
    description: "Fraud detection, risk assessment, and algorithmic trading solutions",
    icon: <BarChart3 className="w-8 h-8" />,
    benefits: [
      "Fraud detection systems",
      "Credit risk assessment",
      "Algorithmic trading",
      "Customer behavior analysis",
    ],
  },
  {
    id: 3,
    title: "E-commerce & Retail",
    description: "Personalized recommendations, inventory optimization, and demand forecasting",
    icon: <Package className="w-8 h-8" />,
    benefits: [
      "Product recommendations",
      "Inventory optimization",
      "Demand forecasting",
      "Customer segmentation",
    ],
  },
  {
    id: 4,
    title: "Manufacturing & Industry",
    description: "Predictive maintenance, quality control, and supply chain optimization",
    icon: <Cog className="w-8 h-8" />,
    benefits: [
      "Predictive maintenance",
      "Quality control systems",
      "Supply chain optimization",
      "Process automation",
    ],
  },
];

const technologies: Technology[] = [
  {
    id: 1,
    name: "TensorFlow",
    category: "Deep Learning",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    id: 2,
    name: "PyTorch",
    category: "Deep Learning",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: 3,
    name: "Scikit-learn",
    category: "Machine Learning",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: 4,
    name: "OpenCV",
    category: "Computer Vision",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    id: 5,
    name: "NLTK",
    category: "NLP",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    id: 6,
    name: "Pandas",
    category: "Data Processing",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: 7,
    name: "NumPy",
    category: "Data Processing",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 8,
    name: "Keras",
    category: "Deep Learning",
    icon: <Brain className="w-6 h-6" />,
  },
];

export default function AIMLSolutionsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeFeatureCategory, setActiveFeatureCategory] = useState("all");

  const filteredTechnologies =
    activeTab === "all"
      ? technologies
      : technologies.filter((tech) =>
        tech.category.toLowerCase().includes(activeTab.toLowerCase())
      );

  const filteredFeatures =
    activeFeatureCategory === "all"
      ? keyFeatures
      : keyFeatures.filter((feature) => feature.category === activeFeatureCategory);

  const featureCategories = [
    "all",
    "Core AI/ML",
    "Data & Analytics",
    "Infrastructure",
    "Security",
    "Monitoring",
    "Business Intelligence",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI/ML Solutions
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                with AI/ML
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence and machine learning to drive
              innovation, optimize operations, and unlock new opportunities for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  Get Started
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

      {/* Key Features Section - EXPANDED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the extensive range of AI/ML capabilities that power our solutions
            </p>
          </div>

          {/* Feature Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {featureCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFeatureCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFeatureCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category === "all" ? "All Features" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AI/ML Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI/ML solutions deliver measurable results and competitive advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Efficiency</h3>
              <p className="text-gray-600">Automate repetitive tasks and optimize workflows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Decisions</h3>
              <p className="text-gray-600">Data-driven insights for strategic planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced CX</h3>
              <p className="text-gray-600">Personalized experiences and recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Stay ahead with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI/ML Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI/ML solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI/ML is transforming different industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for building robust AI/ML solutions
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "all",
              "deep learning",
              "machine learning",
              "nlp",
              "computer vision",
              "data processing",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300 group border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI/ML Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful AI/ML solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand requirements and analyze data sources",
                icon: <Search className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Data Preparation",
                description: "Clean, preprocess, and prepare data for modeling",
                icon: <Database className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Model Development",
                description: "Build, train, and validate AI/ML models",
                icon: <Code className="w-8 h-8" />,
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy models and monitor performance",
                icon: <Rocket className="w-8 h-8" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness AI/ML?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI/ML can transform your business and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
