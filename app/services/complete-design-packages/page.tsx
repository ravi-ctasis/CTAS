import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import {
  Palette,
  Type,
  FileText,
  Layers,
  CheckCircle,
  Sparkles,
  Target,
  Users,
  Rocket,
  Award,
  Star,
  Globe,
  FileImage,
  FileCode,
  ChevronDown,
  Zap,
  Shield,
  Search,
  Settings,
  TrendingUp,
  BarChart,
  Monitor,
  Code,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Complete Brand Identity Design Packages | CTAS Info Services",
  description: "Comprehensive brand identity packages including logo design, brand guidelines, and visual systems. Scalable solutions for startups and enterprises.",
  keywords: ["brand identity design", "logo design packages", "rebranding services", "brand guidelines", "startup branding", "corporate identity"],
  openGraph: {
    title: "Complete Brand Identity Design Packages | CTAS Info Services",
    description: "Transform your business with professional brand identity design from CTAS.",
    images: ["/services/branding-hero.jpg"],
  },
};

const CompleteDesignPackages = () => {

  const packageTypes = [
    {
      title: "Starter Brand Package",
      description:
        "Essential brand identity package perfect for startups and small businesses looking to establish their visual presence",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Primary Logo Design",
        "Brand Color Palette",
        "Typography Selection",
        "Basic Brand Guidelines",
      ],
      platforms: ["Print", "Digital", "Social Media", "Web"],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Brand Guidelines"],
    },
    {
      title: "Professional Brand Package",
      description:
        "Comprehensive brand identity package with complete visual system and business applications",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      features: ["Complete Logo Suite", "Brand Guidelines", "Business Templates", "Digital Assets"],
      platforms: ["Print", "Digital", "Social Media", "Web", "Mobile"],
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines", "Template Library"],
    },
    {
      title: "Enterprise Brand Package",
      description:
        "Full-scale brand identity system with advanced applications and comprehensive brand management",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: [
        "Complete Brand System",
        "Advanced Applications",
        "Brand Management Tools",
        "Ongoing Support",
      ],
      platforms: ["All Platforms", "Global Applications", "Multi-Channel", "Enterprise"],
      technologies: ["Adobe Creative Suite", "Figma", "Brand Management", "Asset Management"],
    },
    {
      title: "Rebrand Package",
      description:
        "Complete brand transformation package for existing businesses looking to modernize their identity",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      features: [
        "Brand Analysis",
        "New Identity Design",
        "Migration Strategy",
        "Implementation Support",
      ],
      platforms: ["All Existing Platforms", "New Applications", "Multi-Channel", "Global"],
      technologies: [
        "Brand Analysis Tools",
        "Adobe Creative Suite",
        "Migration Planning",
        "Implementation Guide",
      ],
    },
    {
      title: "Startup Package",
      description:
        "Tailored brand identity package designed specifically for startups and new businesses",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Startup-Focused Design",
        "Scalable Identity",
        "Growth-Ready Assets",
        "Budget-Friendly",
      ],
      platforms: ["Digital First", "Social Media", "Web", "Future Scaling"],
      technologies: [
        "Modern Design Tools",
        "Scalable Templates",
        "Growth Planning",
        "Cost Optimization",
      ],
    },
    {
      title: "Luxury Brand Package",
      description:
        "Premium brand identity package for luxury brands requiring sophisticated and elegant design solutions",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Luxury Design Aesthetics",
        "Premium Materials",
        "Exclusive Applications",
        "Brand Prestige",
      ],
      platforms: ["Premium Print", "Luxury Digital", "High-End Applications", "Exclusive"],
      technologies: [
        "Premium Design Tools",
        "Luxury Materials",
        "Exclusive Templates",
        "Brand Prestige Tools",
      ],
    },
  ];

  const technologies = [
    {
      title: "Design Software",
      description: "Professional design tools and software for creating brand identities",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      techs: [
        {
          name: "Adobe Illustrator",
          icon: Palette,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Adobe Photoshop",
          icon: FileImage,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Figma",
          icon: Monitor,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Adobe InDesign",
          icon: FileText,
          color: "from-pink-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Sketch",
          icon: Palette,
          color: "from-orange-500 to-yellow-500",
          level: "Advanced",
        },
        {
          name: "Canva Pro",
          icon: Layers,
          color: "from-blue-500 to-purple-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Brand Tools",
      description: "Specialized tools for brand development and management",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      techs: [
        {
          name: "Brand Guidelines",
          icon: FileText,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "Color Systems",
          icon: Palette,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Typography Tools",
          icon: Type,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "Asset Management",
          icon: Layers,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Brand Templates",
          icon: FileCode,
          color: "from-teal-500 to-cyan-500",
          level: "Advanced",
        },
        {
          name: "Brand Analytics",
          icon: BarChart,
          color: "from-indigo-500 to-purple-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Output Formats",
      description: "Professional file formats and delivery methods for brand assets",
      icon: FileCode,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      techs: [
        {
          name: "Vector Files",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Raster Images",
          icon: FileImage,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "PDF Guidelines",
          icon: FileText,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Template Files",
          icon: Layers,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
        {
          name: "Web Assets",
          icon: Globe,
          color: "from-indigo-500 to-purple-500",
          level: "Advanced",
        },
        {
          name: "Print Files",
          icon: FileCode,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Comprehensive analysis of your business, target audience, competitors, and brand vision through detailed research and discovery sessions",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Developing a comprehensive brand strategy including positioning, messaging, visual direction, and implementation roadmap",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Design & Creation",
      description:
        "Creating multiple design concepts, refining based on feedback, and developing the complete brand identity system",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Refinement & Testing",
      description:
        "Iterative refinement process with client feedback, testing across applications, and ensuring brand consistency",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description:
        "Providing all final files, guidelines, templates, and ongoing support for successful brand implementation",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      title: "Professional Quality",
      description: "High-quality designs that meet industry standards and best practices",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Brand Consistency",
      description: "Cohesive visual identity across all touchpoints and applications",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Scalable Design",
      description: "Brand systems that grow with your business and adapt to new needs",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Modern Aesthetics",
      description:
        "Contemporary design trends and visual appeal that resonates with today's audience",
      icon: Star,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Comprehensive Guidelines",
      description: "Detailed brand guidelines ensuring consistent application across all platforms",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Ready-to-Use Assets",
      description: "Complete asset library ready for immediate implementation across all channels",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const benefits = [
    {
      title: "Build Brand Recognition",
      description:
        "A strong brand identity can increase brand recognition by up to 80% and help customers remember and choose your business over competitors",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Visual Recognition",
        "Brand Recall",
        "Market Differentiation",
        "Customer Loyalty",
      ],
    },
    {
      title: "Increase Business Value",
      description:
        "Professional brand identity can increase your business value by up to 23% and attract better partnerships and investment opportunities",
      icon: BarChart,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Business Valuation",
        "Investment Appeal",
        "Partnership Opportunities",
        "Market Position",
      ],
    },
    {
      title: "Boost Customer Trust",
      description:
        "Consistent, professional branding builds trust and credibility, leading to higher customer confidence and increased sales",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      features: ["Trust Building", "Credibility", "Professional Image", "Customer Confidence"],
    },
    {
      title: "Improve Marketing ROI",
      description:
        "Cohesive brand identity can improve marketing ROI by up to 30% through better recognition and consistent messaging",
      icon: Target,
      color: "from-orange-500 to-red-500",
      features: [
        "Marketing Efficiency",
        "Consistent Messaging",
        "Better Recognition",
        "Higher Conversion",
      ],
    },
    {
      title: "Attract Top Talent",
      description:
        "Strong brand identity helps attract and retain top talent by creating a professional, appealing company image",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Talent Attraction",
        "Employee Retention",
        "Company Culture",
        "Professional Appeal",
      ],
    },
    {
      title: "Future-Proof Your Brand",
      description:
        "Scalable brand systems ensure your identity can evolve and adapt as your business grows and market changes",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      features: ["Scalable Design", "Future Adaptability", "Growth Support", "Market Evolution"],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "Brand Planning",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Brand Identity Planning & Strategy",
        description: "Essential steps to plan and strategize your brand identity development",
        points: [
          "Define your brand vision, mission, and values",
          "Conduct market research and competitor analysis",
          "Identify your target audience and their preferences",
          "Develop brand positioning and messaging strategy",
          "Create a comprehensive brand architecture",
          "Plan brand implementation across all touchpoints",
        ],
        tips: [
          "Start with clear brand foundations",
          "Research your competition thoroughly",
          "Understand your audience deeply",
          "Plan for long-term brand evolution",
        ],
      },
    },
    {
      id: "design",
      title: "Visual Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Visual Identity Design Process",
        description: "Creating compelling visual elements that represent your brand effectively",
        points: [
          "Develop logo concepts and variations",
          "Create comprehensive color palette system",
          "Select and establish typography hierarchy",
          "Design visual elements and patterns",
          "Create brand applications and examples",
          "Develop brand guidelines and usage rules",
        ],
        tips: [
          "Focus on simplicity and memorability",
          "Ensure versatility across applications",
          "Test designs with your target audience",
          "Create comprehensive usage guidelines",
        ],
      },
    },
    {
      id: "development",
      title: "Brand Development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Brand System Development",
        description: "Building comprehensive brand systems and asset libraries",
        points: [
          "Create scalable design systems",
          "Develop brand asset libraries",
          "Build template systems for consistency",
          "Establish brand management processes",
          "Create implementation guidelines",
          "Develop brand training materials",
        ],
        tips: [
          "Build for scalability from the start",
          "Create comprehensive asset libraries",
          "Establish clear usage guidelines",
          "Plan for brand management and updates",
        ],
      },
    },
    {
      id: "testing",
      title: "Brand Testing",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
      content: {
        title: "Brand Testing & Validation",
        description: "Testing and validating your brand identity across applications",
        points: [
          "Test brand recognition and recall",
          "Validate brand messaging effectiveness",
          "Test brand applications across platforms",
          "Gather feedback from target audience",
          "Refine brand elements based on feedback",
          "Validate brand consistency and impact",
        ],
        tips: [
          "Test with real target audience members",
          "Gather both quantitative and qualitative feedback",
          "Test across different applications and contexts",
          "Iterate based on feedback and insights",
        ],
      },
    },
    {
      id: "implementation",
      title: "Brand Implementation",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      content: {
        title: "Brand Implementation & Launch",
        description: "Successfully implementing your brand identity across all touchpoints",
        points: [
          "Plan brand rollout strategy and timeline",
          "Update all existing brand applications",
          "Train team members on brand guidelines",
          "Launch brand across all channels",
          "Monitor brand implementation and consistency",
          "Gather feedback and make necessary adjustments",
        ],
        tips: [
          "Plan implementation carefully and systematically",
          "Ensure team training and buy-in",
          "Monitor implementation across all channels",
          "Be prepared to make adjustments based on feedback",
        ],
      },
    },
    {
      id: "management",
      title: "Brand Management",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      content: {
        title: "Ongoing Brand Management",
        description: "Managing and evolving your brand identity over time",
        points: [
          "Monitor brand performance and recognition",
          "Manage brand assets and guidelines",
          "Update brand applications as needed",
          "Evolve brand identity with business growth",
          "Train new team members on brand guidelines",
          "Plan for brand refresh and evolution",
        ],
        tips: [
          "Establish ongoing brand management processes",
          "Monitor brand performance regularly",
          "Plan for brand evolution and updates",
          "Maintain brand consistency across all touchpoints",
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "What's included in the Complete Design Package?",
      answer:
        "Our Complete Design Package includes a full logo suite (primary, secondary, and icon variations), comprehensive brand guidelines, color system, typography, business templates, and digital assets. Everything you need for a complete brand identity.",
    },
    {
      question: "How long does the complete design process take?",
      answer:
        "The complete design process typically takes 4-6 weeks from initial discovery to final delivery. This includes comprehensive research, strategy development, design creation, and final file preparation with multiple revision rounds.",
    },
    {
      question: "What file formats will I receive for my logo?",
      answer:
        "You'll receive your logo in multiple formats: SVG (vector for scalability), PNG (high-resolution for print), JPG (web-ready), AI/PSD (editable design files), and EPS (professional vector format). All files are optimized for different use cases.",
    },
    {
      question: "Can I request changes during the design process?",
      answer:
        "Absolutely! We include multiple revision rounds in our process. We work collaboratively with you throughout the design phase to ensure the final brand identity perfectly represents your vision and business goals.",
    },
    {
      question: "Do you provide ongoing support after delivery?",
      answer:
        "Yes! We provide 30 days of post-delivery support to help with implementation questions, brand application guidance, and ensure your brand is applied correctly across all platforms and touchpoints.",
    },
    {
      question: "What if I need additional brand assets or templates later?",
      answer:
        "We offer ongoing design services for additional brand assets, templates, or updates. Many clients choose to work with us for ongoing brand development, new applications, or brand evolution as their business grows.",
    },
  ];



  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Navigation />
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900  overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Complete Design Packages
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Complete{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Brand Identity
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Professional brand identity packages that include everything you need to establish a
                strong, cohesive brand presence. From logo design to comprehensive brand guidelines.
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
                { number: "10+", label: "Brands Created", icon: Palette },
                { number: "8+", label: "Happy Clients", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award },
                { number: "4.9", label: "Client Rating", icon: Star },
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

        {/* Package Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {packageTypes.map((pkg, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${pkg.color} rounded-3xl flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <pkg.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                        Key Features:
                      </h4>
                      {pkg.features.map((feature, i) => (
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
                Brand Design{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge design tools and technologies to create robust and scalable
                brand identities.
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
                Our proven brand design process ensures quality, transparency, and timely delivery.
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
                We deliver exceptional brand solutions with cutting-edge features and technologies.
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
                Why Choose Brand Design?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
                  Professional Brand Design
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how professional brand design can transform your business and drive growth.
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

        {/* Topical Guide Section - REFACTORED TO GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Complete Guide
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Brand Design{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
                  Guide
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about brand design, from strategy and planning to
                maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topicalGuide.map((tab) => (
                <div
                  key={tab.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${tab.color} text-white shadow-md`}
                    >
                      <tab.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tab.content.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                    {tab.content.description}
                  </p>

                  <div className="grid grid-cols-1 gap-8 flex-grow">
                    {/* Key Points */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                        Key Points
                      </h4>
                      <div className="space-y-3">
                        {tab.content.points.map((point, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <span className="text-white text-[10px] font-bold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 text-xs leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tips */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        Pro Tips
                      </h4>
                      <div className="space-y-3">
                        {tab.content.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 border-l-4 border-purple-500"
                          >
                            <p className="text-gray-700 text-xs font-medium leading-relaxed">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - REFACTORED TO DETAILS */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">FAQ</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our complete design packages and brand
                identity development process.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-300 group-open:rotate-180" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s create a stunning website that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-white text-green-600 hover:bg-white/90">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default CompleteDesignPackages;
