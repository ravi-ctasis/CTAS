
;
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Users,
  Award,
  ShoppingCart,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Database,
  Cloud,
  Code,
  Server,
  Activity,
  Package,
  Settings,
  Phone,
  Search,

} from "lucide-react";
import Link from "next/link";

const Productionstocktracking = () => {

  const projectData = {
    title: "Smart Production & Inventory Tracking Platform",
    category: "Production Automation",
    industry: "Manufacturing Industry",
    description:
      "A centralized solution that manages every stage, from PI creation to outgoing shipments, while maintaining full audit history.",
    longDescription:
      "Managing Performa Invoices (PIs), product sizes, packaging, pallets, and production manually is time-consuming and error-prone. Lack of visibility across PI confirmation, production orders, and shipping creates operational delays. Without automation, stock calculations, shipment planning, and history tracking quickly become unmanageable at scale. That’s why we designed an intelligent PI-to-Production system — a centralized solution that manages every stage, from PI creation to outgoing shipments, while maintaining full audit history.",
    image: "/image.webp",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "PDF Generation",
      "Role-Based Auth",
      "Real-time Tracking",
      "Audit Logging",
      "Workflow Automation",
    ],
    link: "#",
    featured: true,
    stats: {
      views: "15k",
      likes: "1.8k",
      clients: "50+",
      revenue: "$1.2M+",
      efficiency: "85%",
      accuracy: "99%",
    },
    year: "2025",
    duration: "8 months",
    teamSize: "12",
    budget: "$280k",
    challenges: [
      "Manual errors during PI and production processing",
      "Limited visibility into current stock levels",
      "Unauthorized actions and untracked changes",
      "Risk of accidental deletion or modification of records",
      "Ensuring audit readiness and regulatory compliance",
    ],
    solutions: [
      "Automated calculations for boxes, pallets, and totals to reduce manual errors",
      "Real-time stock updates with dynamic status tracking",
      "Role-based permissions with actions restricted to authorized users",
      "Enforced reverse workflow and automatic history logging",
      "Immutable audit trails with timestamps, user actions, and version control",
    ],

    results: [
      "Efficiency: Cuts down manual tracking and paperwork",
      "Accuracy: Prevents errors in box counts, pallet calculations, and production tracking",
      "Control: Role-based workflows enforce discipline and avoid unauthorized actions",
      "Scalability: Handles large product catalogs, multiple sizes, and complex pallet rules",
      "Compliance: Retains complete historical records for audit, exports, and financial accuracy",
      "For Operations Teams: Centralized visibility across PI, production, and shipments",
      "For Businesses: Reduced errors, faster processing, scalable system",
      "For Customers: Accurate deliveries and on-time shipments",
      "For Management: Actionable insights, compliance-ready audit trail, and better decision-making",
    ],
    features: [
      {
        title: "System Setup",
        description:
          "A scalable and flexible architecture built using Angular, Node.js, and MongoDB, optimized for performance and real-time operations.",
        icon: Database,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Authentication & Roles",
        description:
          "Implements secure login, password management, and role-based access control to ensure authorized actions and data protection.",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Masters",
        description:
          "Provides centralized management of products, sizes, designs, packaging, pallets, consignees, currencies, banks, HS codes, and suppliers for streamlined operations.",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
      },

      {
        title: "PI Management",
        description:
          "Manage Performa Invoices efficiently: create, update, clone, confirm, cancel, and generate PDFs with automated calculations for totals, boxes, pallets, and timelines.",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
      },

      {
        title: "Production Flow",
        description:
          "Streamline production from confirmed PIs: manage partial and full orders, track progress in real-time, and mark shipments efficiently.",
        icon: Users,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Stock & History Tracking",
        description:
          "Logs all actions to maintain accurate, real-time stock levels with complete traceability and audit-ready history.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },

    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "Angular", icon: Code, description: "Modern UI framework" },
          {
            name: "TypeScript",
            icon: Code,
            description: "Type-safe development",
          },
          {
            name: "Tailwind CSS",
            icon: Code,
            description: "Utility-first styling",
          },
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "Express.js", icon: Server, description: "Web framework" },
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "Cloud & DevOps",
        technologies: [
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
          { name: "Docker", icon: Package, description: "Containerization" },
          { name: "Kubernetes", icon: Settings, description: "Orchestration" },
        ],
      },
      {
        category: "Data & Analytics",
        technologies: [
          { name: "Elasticsearch", icon: Search, description: "Search engine" },
          { name: "RabbitMQ", icon: Activity, description: "Message broker" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-15">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Production Automation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Smart Production &
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Inventory Tracking Platform
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.revenue}
                  </div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.efficiency}
                  </div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/production-stock-tracking.webp"
                  alt="Intelligent Production & Stock Tracking System"
                  width={500}
                  height={400}
                  className="object-cover relative z-10 w-full h-auto"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Need for an Automated PI-to-Production Flow
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {projectData.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Critical Challenges
                    </h3>
                    <ul className="space-y-3">
                      {projectData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Our Solutions
                    </h3>
                    <ul className="space-y-3">
                      {projectData.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Key Differentiators & Client Value
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectData.results.slice(0, 5).map((result, index) => (
                    <Card
                      key={index}
                      className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {result.split(":")[0]}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {result.split(":")[1]?.trim() || result}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

            </div>

            <div className="space-y-3">
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">
                        {projectData.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold text-gray-900">
                        {projectData.teamSize} members
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <div className="font-semibold text-green-600">
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.views}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Clients</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.clients}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functionality & Intelligence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What the System Actually Does
            </h2>
            <p className="text-lg text-gray-600">
              Our system brings clarity, automation, and control into the
              production workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projectData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {index + 1}. {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Technology Stack */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max hexa-w-3xl mx-auto">
              Built with cutting-edge technologies to ensure scalability,
              performance, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.techStack.map((category, index) => (
              <Card
                key={index}
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {tech.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {tech.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Production Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our Intelligent Production & Stock Tracking
            System can transform your operations and ensure growth readiness.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />

    </div>
  );
};

export default Productionstocktracking;
