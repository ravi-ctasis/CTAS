"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
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
  Square,
  TrendingUp,
  Settings,
  Circle,
  Triangle,
  Hexagon,
  Braces,
} from "lucide-react";

const designTypes = [
  {
    title: "Custom Web Design",
    description:
      "Tailored web designs that perfectly match your brand identity and business goals",
    icon: Palette,
    features: [
      "Custom Layouts",
      "Brand Integration",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    title: "Static Website Design",
    description:
      "Fast, lightweight static websites perfect for portfolios, landing pages, and simple business sites",
    icon: Globe,
    features: ["Fast Loading", "SEO Optimized", "Easy Maintenance", "Cost Effective"],
  },
  {
    title: "Dynamic Website Design",
    description:
      "Interactive websites with dynamic content, user management, and advanced functionality",
    icon: Zap,
    features: [
      "Interactive Elements",
      "Content Management",
      "User Authentication",
      "Database Integration",
    ],
  },
  {
    title: "E-commerce Website Design",
    description:
      "Complete online store designs with shopping cart, payment processing, and inventory management",
    icon: ShoppingCart,
    features: ["Product Catalogs", "Shopping Cart", "Payment Integration", "Order Management"],
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting landing pages designed to capture leads and drive specific actions",
    icon: Target,
    features: ["Conversion Focused", "A/B Testing", "Lead Capture", "Mobile Optimized"],
  },
  {
    title: "Template Design",
    description:
      "Professional website templates that can be customized for different business needs",
    icon: Layers,
    features: [
      "Template Customization",
      "Theme Development",
      "Component Libraries",
      "Easy Updates",
    ],
  },
];

const techCategories = [
  {
    title: "Design Tools",
    description: "Professional design software and prototyping tools",
    icon: Palette,
    technologies: [
      { name: "Figma", icon: Palette, level: "Expert" },
      { name: "Adobe XD", icon: Monitor, level: "Expert" },
      { name: "Sketch", icon: Palette, level: "Advanced" },
      { name: "InVision", icon: Circle, level: "Advanced" },
      { name: "Principle", icon: Triangle, level: "Advanced" },
      { name: "Framer", icon: Square, level: "Advanced" },
    ],
  },
  {
    title: "Front-end Technologies",
    description: "Modern web technologies for responsive and interactive designs",
    icon: Code,
    technologies: [
      { name: "HTML5", icon: Code, level: "Expert" },
      { name: "CSS3", icon: Code, level: "Expert" },
      { name: "JavaScript", icon: Code, level: "Expert" },
      { name: "React", icon: Braces, level: "Expert" },
      { name: "Vue.js", icon: Circle, level: "Advanced" },
      { name: "Angular", icon: Hexagon, level: "Advanced" },
    ],
  },
  {
    title: "CSS Frameworks",
    description: "Modern CSS frameworks for rapid and consistent design development",
    icon: Layers,
    technologies: [
      { name: "Tailwind CSS", icon: Palette, level: "Expert" },
      { name: "Bootstrap", icon: Square, level: "Expert" },
      { name: "Material UI", icon: Circle, level: "Advanced" },
      { name: "Chakra UI", icon: Triangle, level: "Advanced" },
      { name: "Ant Design", icon: Square, level: "Advanced" },
      { name: "Bulma", icon: Circle, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "Understanding your business goals, target audience, and design requirements",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning & Strategy",
    description: "Creating design strategy, wireframes, and project roadmap",
    icon: Target,
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description: "Creating visual designs, mockups, and interactive prototypes",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development & Testing",
    description: "Building the website and testing across all devices and browsers",
    icon: Code,
  },
  {
    step: "05",
    title: "Launch & Optimization",
    description: "Deploying the website and optimizing for performance and SEO",
    icon: Rocket,
  },
];

const features = [
  {
    title: "Responsive Design",
    description: "Perfect display across all devices and screen sizes",
    icon: Monitor,
  },
  {
    title: "Modern Aesthetics",
    description: "Contemporary design trends and visual appeal",
    icon: Palette,
  },
  {
    title: "User Experience",
    description: "Intuitive navigation and user-friendly interfaces",
    icon: Users,
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and smooth interactions",
    icon: Zap,
  },
  {
    title: "Accessibility",
    description: "WCAG compliant and inclusive design practices",
    icon: Shield,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
    icon: Award,
  },
];

const benefits = [
  {
    title: "Boost Your Online Presence",
    description:
      "A professionally designed website can increase your online visibility by up to 60% and help you stand out from competitors",
    icon: TrendingUp,
  },
  {
    title: "Enhance User Experience",
    description:
      "Create intuitive, user-friendly interfaces that keep visitors engaged and encourage them to take action",
    icon: Users,
  },
  {
    title: "Increase Conversion Rates",
    description:
      "Well-designed websites can increase conversion rates by up to 200% through strategic design and user experience optimization",
    icon: Target,
  },
  {
    title: "Improve SEO Performance",
    description:
      "Search engine optimized designs help improve your website's ranking and drive more organic traffic",
    icon: Search,
  },
  {
    title: "Build Trust & Credibility",
    description:
      "Professional web design builds trust with your audience and establishes credibility for your brand",
    icon: Shield,
  },
  {
    title: "Scalable & Maintainable",
    description:
      "Future-proof designs that can grow with your business and are easy to maintain and update",
    icon: Settings,
  },
];

const topicalGuide = [
  {
    id: "planning",
    title: "Web Design Planning & Strategy",
    content: "Essential steps to plan and strategize your web design project",
    points: [
      "Define your website's purpose and target audience",
      "Conduct competitor analysis and market research",
      "Plan your website's structure and navigation",
      "Define your brand identity and visual style",
      "Create a detailed project timeline and budget",
      "Select the right design team or agency",
    ],
  },
  {
    id: "design",
    title: "User Interface & Experience Design",
    content: "Creating intuitive and engaging user experiences for your website",
    points: [
      "Design user-friendly interfaces and navigation",
      "Create wireframes and interactive prototypes",
      "Implement modern design principles and trends",
      "Ensure accessibility and inclusive design",
      "Optimize for different screen sizes and devices",
      "Design for conversion and user engagement",
    ],
  },
  {
    id: "development",
    title: "Web Development Process",
    content: "The technical development process from design to deployment",
    points: [
      "Choose the right technology stack and frameworks",
      "Set up development environment and tools",
      "Implement responsive design and functionality",
      "Integrate third-party services and APIs",
      "Ensure code quality and best practices",
      "Implement security measures and performance optimization",
    ],
  },
  {
    id: "testing",
    title: "Quality Assurance & Testing",
    content: "Comprehensive testing to ensure your website works perfectly",
    points: [
      "Perform functional testing on all features",
      "Conduct cross-browser compatibility testing",
      "Test on multiple devices and screen sizes",
      "Perform performance and speed testing",
      "Security testing and vulnerability assessment",
      "User acceptance testing (UAT)",
    ],
  },
  {
    id: "deployment",
    title: "Website Deployment & Launch",
    content: "Successfully launching your website and making it live",
    points: [
      "Set up hosting and domain configuration",
      "Configure SSL certificates and security",
      "Implement analytics and tracking tools",
      "Perform final testing and quality checks",
      "Plan marketing and promotional strategies",
      "Monitor website performance and user feedback",
    ],
  },
  {
    id: "maintenance",
    title: "Ongoing Maintenance & Updates",
    content: "Keeping your website updated and maintaining its performance",
    points: [
      "Regular content updates and management",
      "Security updates and patches",
      "Performance monitoring and optimization",
      "Analytics review and insights",
      "Handle user support and feedback",
      "Plan for website scaling and growth",
    ],
  },
];

export default function WebDesignPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Web Design Services",
        hero: {
          badge: "Web Design Services",
          title: "Modern",
          highlight: "Web Design",
          description:
            "We create stunning, user-friendly websites that look great on every device. We design with purpose, focusing on user experience and conversion.",
          stats: [
            { number: "10+", label: "Websites Built", icon: Globe },
            { number: "5+", label: "Happy Clients", icon: Users },
            { number: "5+", label: "Years Experience", icon: Award },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            header: {
              badge: "Design Types",
              title: "Web Design",
              highlight: "Solutions",
              description:
                "From custom websites to e-commerce and landing pages, we design for every business need.",
            },
            items: designTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Web Design",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge design tools and technologies to build robust and scalable web experiences.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            header: {
              badge: "Our Process",
              title: "Design",
              highlight: "Process",
              description:
                "Our proven web design process ensures quality, transparency, and timely delivery.",
            },
            steps: process,
          },
          {
            type: "cards",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional web solutions with cutting-edge features and technologies.",
            },
            items: features,
            columns: 3,
          },
          {
            type: "benefits",
            header: {
              badge: "Why Choose Web Design?",
              title: "Benefits of",
              highlight: "Professional Web Design",
              description:
                "Discover how professional web design can transform your business and drive growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "Web Design",
              description:
                "Everything you need to know about web design, from planning to deployment.",
            },
            tabs: topicalGuide,
            defaultTab: "planning",
          },
        ],
        cta: {
          title: "Ready to Design Your Website?",
          description: "Let's create a stunning website that drives results.",
          primaryLabel: "Get Started",
          primaryHref: "/contact-us",
        },
      }}
    />
  );
}
