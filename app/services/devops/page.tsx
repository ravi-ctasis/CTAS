
;
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Shield,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Cloud,
  Search,
  Settings,
  TrendingUp,
  Activity,
  DollarSign,
  Hexagon,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const devopsServices = [
    {
      title: "CI/CD Pipeline",
      description: "Automated continuous integration and deployment pipelines for faster delivery",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Automated Testing",
        "Build Automation",
        "Deployment Automation",
        "Rollback Capabilities",
      ],
    },
    {
      title: "Infrastructure as Code",
      description: "Manage infrastructure through code for consistency and scalability",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      features: [
        "Terraform Configuration",
        "CloudFormation",
        "Infrastructure Versioning",
        "Environment Management",
      ],
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker solutions for scalable container management",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      features: ["Kubernetes Clusters", "Docker Containers", "Service Mesh", "Auto Scaling"],
    },
    {
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring and logging solutions for better visibility",
      icon: Activity,
      color: "from-orange-500 to-red-500",
      features: [
        "Application Monitoring",
        "Infrastructure Monitoring",
        "Log Aggregation",
        "Alert Management",
      ],
    },
    {
      title: "Security & Compliance",
      description: "DevSecOps practices with security integrated into the pipeline",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      features: ["Security Scanning", "Compliance Checks", "Access Control", "Audit Logging"],
    },
    {
      title: "Performance Optimization",
      description: "Optimize application and infrastructure performance",
      icon: Zap,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Performance Testing",
        "Load Balancing",
        "Caching Strategies",
        "Resource Optimization",
      ],
    },
  ];

  const devopsFeatures = [
    {
      icon: Zap,
      title: "Faster Deployment",
      description: "Automated pipelines reduce deployment time by 80%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Security integrated into every stage of development",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Improved Reliability",
      description: "Automated testing and monitoring ensure stability",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and alerting",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Better collaboration between development and operations",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Automated resource management reduces costs",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyzing current processes and creating DevOps strategy",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Tool Selection",
      description: "Choosing the right DevOps tools and technologies",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Pipeline Setup",
      description: "Building CI/CD pipelines and automation workflows",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Testing pipelines and validating automation processes",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Monitoring & Support",
      description: "Setting up monitoring and providing ongoing support",
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const technologies = [
    {
      name: "Jenkins",
      icon: Server,
      color: "from-red-500 to-pink-500",
      level: "Expert",
    },
    {
      name: "GitLab CI",
      icon: Code,
      color: "from-orange-500 to-red-500",
      level: "Expert",
    },
    {
      name: "GitHub Actions",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      level: "Expert",
    },
    {
      name: "Docker",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      level: "Expert",
    },
    {
      name: "Kubernetes",
      icon: Hexagon,
      color: "from-blue-600 to-blue-700",
      level: "Expert",
    },
    {
      name: "Terraform",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      level: "Expert",
    },
    {
      name: "Ansible",
      icon: Code,
      color: "from-red-500 to-orange-500",
      level: "Advanced",
    },
    {
      name: "Prometheus",
      icon: Activity,
      color: "from-orange-500 to-red-500",
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Our DevOps Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Continuous{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                  Integration & Deployment
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We streamline your development process with automated CI/CD pipelines,
                infrastructure as code, and comprehensive monitoring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                    View Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { number: "80%", label: "Faster Deployment", icon: Zap },
                { number: "99.9%", label: "Uptime SLA", icon: Clock },
                { number: "50+", label: "Pipelines Built", icon: Code },
                { number: "24/7", label: "Monitoring", icon: Activity },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-cyan-300" />
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
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Our Services</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  DevOps Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer end-to-end DevOps services to streamline your development process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {devopsServices.map((service, index) => (
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
                          <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Key Benefits
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our{" "}
                <span className="text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                  DevOps Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your development process with modern DevOps practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {devopsFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
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

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                DevOps{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Implementation Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven 5-step process ensures successful DevOps implementation.
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

        {/* Technologies Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  DevOps Tools
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge DevOps tools and technologies to deliver robust solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Let&apos;s discuss your DevOps strategy and create automated pipelines that accelerate
              your development process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
};

export default Services;
