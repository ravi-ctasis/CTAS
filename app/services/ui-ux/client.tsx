"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Palette,
  Eye,
  Users,
  Smartphone,
  Target,
  Rocket,
  Heart,
  Layers,
  Grid,
  Type,
  Zap,
  Code,
  Award,
  Star,
  Search,
  BarChart3,
  Clock,
  TrendingUp,
} from "lucide-react";

const uiuxServices = [
  {
    title: "User Research & Analysis",
    description: "Comprehensive user research to understand your target audience and their needs",
    icon: Users,
    image: "/service-banners/ui-ux.webp",
    features: [
      "User Personas",
      "User Journey Mapping",
      "Competitive Analysis",
      "Usability Testing",
      "Behavioral Analytics",
      "Survey & Interviews",
    ],
  },
  {
    title: "Information Architecture",
    description: "Organizing and structuring content for optimal user experience and navigation",
    icon: Grid,
    features: [
      "Site Structure",
      "Navigation Design",
      "Content Strategy",
      "Taxonomy Design",
      "Wireframing",
      "User Flow Mapping",
    ],
  },
  {
    title: "UI Design",
    description: "Creating beautiful and functional user interfaces that delight users",
    icon: Palette,
    features: [
      "Visual Design",
      "Component Design",
      "Style Guides",
      "Design Systems",
      "Prototyping",
      "Design Handoff",
    ],
  },
  {
    title: "UX Design",
    description: "Designing seamless user experiences that delight users and drive engagement",
    icon: Eye,
    features: [
      "User Experience Strategy",
      "Interaction Design",
      "Usability Design",
      "Accessibility Design",
      "User Testing",
      "Experience Optimization",
    ],
  },
  {
    title: "Mobile App Design",
    description: "Native and cross-platform mobile app design with platform-specific guidelines",
    icon: Smartphone,
    features: [
      "Mobile UI/UX",
      "App Prototyping",
      "Touch Interactions",
      "Platform Guidelines",
      "Responsive Design",
      "App Store Optimization",
    ],
  },
  {
    title: "Design Systems",
    description: "Comprehensive design systems for consistent experiences across all touchpoints",
    icon: Layers,
    features: [
      "Component Libraries",
      "Design Tokens",
      "Style Guidelines",
      "Documentation",
      "Design Governance",
      "Scalable Design",
    ],
  },
];

const designTools = [
  { name: "Figma", icon: Palette, level: "Expert" },
  { name: "Adobe XD", icon: Eye, level: "Expert" },
  { name: "Sketch", icon: Grid, level: "Expert" },
  { name: "InVision", icon: Layers, level: "Advanced" },
  { name: "Adobe Photoshop", icon: Palette, level: "Expert" },
  { name: "Adobe Illustrator", icon: Type, level: "Expert" },
  { name: "Principle", icon: Zap, level: "Advanced" },
  { name: "Framer", icon: Code, level: "Advanced" },
  { name: "Maze", icon: Search, level: "Expert" },
  { name: "Hotjar", icon: BarChart3, level: "Expert" },
];

const designProcess = [
  {
    step: "01",
    title: "Discovery & Research",
    description:
      "Understanding your business goals, target audience, and conducting comprehensive user research to inform design decisions",
    icon: Target,
  },
  {
    step: "02",
    title: "Information Architecture",
    description:
      "Organizing content structure, creating user flows, and designing navigation systems for optimal user experience",
    icon: Grid,
  },
  {
    step: "03",
    title: "Wireframing & Prototyping",
    description:
      "Creating low-fidelity wireframes and interactive prototypes to visualize user journeys and test design concepts",
    icon: Palette,
  },
  {
    step: "04",
    title: "UI Design & Visual Design",
    description:
      "Creating high-fidelity designs with visual elements, typography, and interactive components that align with brand identity",
    icon: Eye,
  },
  {
    step: "05",
    title: "User Testing & Iteration",
    description:
      "Conducting usability testing with real users, gathering feedback, and iterating on designs to improve user experience",
    icon: Users,
  },
  {
    step: "06",
    title: "Design Handoff & Implementation",
    description:
      "Preparing design specifications, creating design systems, and collaborating with developers for seamless implementation",
    icon: Rocket,
  },
];

const benefits = [
  {
    title: "Enhanced User Experience",
    description:
      "Create intuitive and engaging user experiences that increase user satisfaction and drive business success",
    icon: Users,
  },
  {
    title: "Brand Differentiation",
    description:
      "Stand out from competitors with unique, memorable designs that reflect your brand identity and values",
    icon: Palette,
  },
  {
    title: "Increased Conversions",
    description:
      "Optimize user flows and interfaces to guide users toward desired actions and improve conversion rates",
    icon: TrendingUp,
  },
  {
    title: "Accessibility & Inclusion",
    description:
      "Ensure your designs are accessible to all users, including those with disabilities, for broader reach",
    icon: Heart,
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce development costs and time-to-market with well-planned designs and clear specifications",
    icon: Clock,
  },
  {
    title: "Scalable Design Systems",
    description:
      "Create maintainable design systems that grow with your business and ensure consistency across platforms",
    icon: Layers,
  },
];

const topicalGuide = [
  {
    id: "research",
    title: "User Research & Analysis",
    content:
      "Essential steps to conduct comprehensive user research and understand your target audience",
    points: [
      "Define research objectives and questions",
      "Identify target user segments and personas",
      "Conduct user interviews and surveys",
      "Analyze user behavior and preferences",
      "Create user journey maps",
      "Validate assumptions with data",
    ],
  },
  {
    id: "architecture",
    title: "Information Architecture & Structure",
    content:
      "Organizing content and creating intuitive navigation systems for optimal user experience",
    points: [
      "Audit existing content and structure",
      "Create content hierarchy and taxonomy",
      "Design navigation systems",
      "Plan user flows and pathways",
      "Wireframe key pages and interactions",
      "Test information architecture",
    ],
  },
  {
    id: "design",
    title: "UI/UX Design & Prototyping",
    content:
      "Creating beautiful, functional interfaces and interactive prototypes that delight users",
    points: [
      "Develop visual design concepts",
      "Create high-fidelity mockups",
      "Build interactive prototypes",
      "Design responsive layouts",
      "Implement accessibility features",
      "Create design specifications",
    ],
  },
  {
    id: "testing",
    title: "User Testing & Validation",
    content:
      "Testing designs with real users to validate assumptions and improve user experience",
    points: [
      "Plan usability testing sessions",
      "Recruit representative users",
      "Conduct moderated and unmoderated tests",
      "Analyze user feedback and behavior",
      "Iterate based on findings",
      "Document insights and recommendations",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "UI/UX Design Services",
      description:
        "UI/UX research, product design, and design systems from Ctas to craft intuitive, high-performing digital products.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "UI/UX Design",
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "UI/UX Design",
          item: "https://www.ctasis.com/services/ui-ux",
        },
      ],
    },
  ],
};

export default function UIUXPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "UI/UX Design Services",
        structuredData,
        hero: {
          badge: "UI/UX Design Services",
          title: "Creative",
          highlight: "UI/UX Design",
          description:
            "We create exceptional user experiences through research-driven design. From user research to interactive prototypes, we focus on user-centered design principles to deliver intuitive and engaging interfaces.",
          stats: [
            { number: "35+", label: "Designs Created", icon: Palette },
            { number: "20+", label: "Happy Clients", icon: Users },
            { number: "16+", label: "Years of Excellence", icon: Award },
            { number: "4.9", label: "Client Rating", icon: Star },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "bento",
            header: {
              badge: "Our Services",
              title: "UI/UX Design",
              highlight: "Services",
              description:
                "End-to-end design services from research and architecture to visual design and design systems.",
            },
            items: uiuxServices,
            columns: 3,
          },
          {
            type: "tech-grid",
            variant: "scroll",
            header: {
              badge: "Design Tools",
              title: "Modern",
              highlight: "Design Tools",
              description:
                "We use industry-leading design tools and technologies to create exceptional user experiences and seamless workflows.",
            },
            items: designTools,
          },
          {
            type: "process",
            variant: "horizontal",
            header: {
              badge: "Our Process",
              title: "UI/UX Design",
              highlight: "Process",
              description:
                "Our proven 6-step UI/UX design process ensures we create user-centered experiences through research, design, and testing that meet your business objectives.",
            },
            steps: designProcess,
          },
          {
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose UI/UX Design?",
              title: "Benefits of",
              highlight: "Professional UI/UX Design",
              description:
                "Discover how professional UI/UX design can transform your digital presence and drive business growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "UI/UX Design",
              description:
                "Everything you need to know about UI/UX design, from research to implementation.",
            },
            tabs: topicalGuide,
            defaultTab: "research",
          },
        ],
        cta: {
          title: "Ready to Transform Your User Experience?",
          description:
            "Let's collaborate to create stunning, user-centered designs that enhance your brand and drive business success.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
