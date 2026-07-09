"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageHero,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  DotCarousel,
} from "@/components/page-design";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-10 sm:py-12 lg:py-14 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">{children}</div>
  </section>
);

const solutions = [
  {
    title: "Dating App",
    description: "Modern dating platform with AI-powered matching and real-time communication",
    features: ["AI Matching", "Video Calls", "Safety Features", "Location-Based"],
    icon: "💕",
    href: "/solutions/dating-app",
  },
  {
    title: "E-commerce",
    description:
      "Complete online shopping platform with payment processing and inventory management",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"],
    icon: "🛒",
    href: "/solutions/e-commerce",
  },
  {
    title: "Fitness App",
    description: "Comprehensive fitness tracking and workout planning application",
    features: ["Workout Plans", "Progress Tracking", "Social Features", "Nutrition"],
    icon: "💪",
    href: "/solutions/fitness-app",
  },
  {
    title: "Food Delivery App",
    description: "Food ordering and delivery platform with real-time tracking",
    features: ["Restaurant Integration", "Real-time Tracking", "Payment Processing", "Reviews"],
    icon: "🍕",
    href: "/solutions/food-delivery-app",
  },
  {
    title: "Voice Chat App",
    description: "Real-time voice communication platform with group chat capabilities",
    features: ["Voice Calls", "Group Chats", "Screen Sharing", "Recording"],
    icon: "🎤",
    href: "/solutions/voice-chat-app",
  },
  {
    title: "Handyman Services App",
    description: "Home service marketplace connecting customers with skilled professionals",
    features: ["Service Booking", "Professional Profiles", "Real-time Tracking", "Reviews"],
    icon: "🔧",
    href: "/solutions/handyman-services-app",
  },
  {
    title: "Doctor Appointment App",
    description: "Healthcare booking system with telemedicine and appointment management",
    features: ["Appointment Booking", "Video Consultations", "Medical Records", "HIPAA Compliant"],
    icon: "🏥",
    href: "/solutions/doctor-appointment-app",
  },
  {
    title: "Property Finder App",
    description: "Real estate discovery platform with advanced search and virtual tours",
    features: ["Property Search", "Virtual Tours", "Market Analysis", "Agent Connect"],
    icon: "🏠",
    href: "/solutions/property-finder-app",
  },
  {
    title: "Parcel Delivery App",
    description: "Smart courier platform with real-time tracking and logistics management",
    features: ["Live Tracking", "Fleet Management", "Express Delivery", "Driver Network"],
    icon: "📦",
    href: "/solutions/parcel-delivery-app",
  },
  {
    title: "Hotel Booking App",
    description:
      "Comprehensive travel accommodation platform with instant booking and real-time availability",
    features: ["Instant Booking", "Price Comparison", "Reviews & Ratings", "Multi-language"],
    icon: "🏨",
    href: "/solutions/hotel-booking-app",
  },
  {
    title: "Sports Tracking App",
    description: "Complete sports tracking and social fitness platform with development solutions",
    features: ["Activity Tracking", "Social Features", "Development Process", "Multi-platform"],
    icon: "🏃‍♂️",
    href: "/solutions/sports-tracking-app",
  },
  {
    title: "Mobile Wallet App",
    description: "Secure digital payment solution with instant transfers and QR payments",
    features: ["Secure Payments", "Instant Transfers", "QR Payments", "Analytics"],
    icon: "💳",
    href: "/solutions/mobile-wallet-app",
  },
  {
    title: "NFT Marketplace",
    description:
      "Digital asset trading platform with secure wallet integration and real-time analytics",
    features: [
      "Secure Trading",
      "Multi-Chain Support",
      "Real-time Analytics",
      "Community Features",
    ],
    icon: "🎨",
    href: "/solutions/nft-marketplace",
  },
  {
    title: "Influencer Marketing App",
    description:
      "Creator collaboration platform for brands to discover and manage influencer campaigns",
    features: ["Creator Discovery", "Campaign Management", "Analytics & ROI", "Multi-platform"],
    icon: "📱",
    href: "/solutions/influencer-marketing-app",
  },
  {
    title: "Restaurant App",
    description: "Complete restaurant management and ordering platform",
    features: ["Online Ordering", "Table Management", "Menu Management", "Delivery Integration"],
    icon: "🍽️",
    href: "/solutions/restaurant-app",
  },
  {
    title: "Ticket Booking App",
    description: "Event and ticket booking platform with real-time availability",
    features: ["Event Discovery", "Seat Selection", "Payment Processing", "QR Tickets"],
    icon: "🎫",
    href: "/solutions/ticket-booking-app",
  },
  {
    title: "Travel App",
    description: "Comprehensive travel planning and booking platform",
    features: ["Flight Booking", "Hotel Reservations", "Itinerary Management", "Travel Guides"],
    icon: "✈️",
    href: "/solutions/travel-app",
  },
  {
    title: "Social Networking App",
    description: "Social media platform with advanced features and connectivity",
    features: ["User Profiles", "Content Sharing", "Messaging", "Social Feed"],
    icon: "👥",
    href: "/solutions/social-networking-app",
  },
  {
    title: "Taxi Booking",
    description: "Ride-hailing and taxi booking platform with real-time tracking",
    features: ["Driver Matching", "Live Tracking", "Payment Processing", "Rating System"],
    icon: "🚕",
    href: "/solutions/taxi-booking",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Custom App Development Solutions",
      description:
        "Comprehensive range of mobile app solutions designed to transform your business.",
      url: "https://www.ctasis.com/solutions",
      numberOfItems: solutions.length,
      itemListElement: solutions.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://www.ctasis.com${s.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
      ],
    },
  ],
};

const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="space-y-2">
    {features.map((feature) => (
      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
        {feature}
      </li>
    ))}
  </ul>
);

const ExploreLink = ({ href }: { href: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
    style={{ backgroundColor: CYAN }}
  >
    Explore Solution
    <ArrowRight className="w-4 h-4" />
  </Link>
);

const SolutionsPage = () => {
  const featured = solutions.slice(0, 3);
  const scrollRow = solutions.slice(3, 8);
  const zigzagRow = solutions.slice(8, 14);
  const gridRow = solutions.slice(14);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Our Solutions"
          badge="Mobile & Digital Solutions"
          title="Our"
          highlight="Solutions"
          description="Discover our comprehensive range of mobile app solutions designed to transform your business."
        />

        {/* Featured bento — asymmetric 3-up */}
        <SectionWrap>
          <SectionHeader
            badge="Featured Solutions"
            title="Start with"
            highlight="Proven Platforms"
            description={`Browse ${solutions.length} purpose-built app solutions — from dating and e-commerce to healthcare, travel, and beyond.`}
          />
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
            <motion.article
              {...fadeUp}
              className="lg:col-span-7 rounded-[1.75rem] border border-slate-200/80 bg-white p-8 sm:p-10 hover:shadow-xl transition-all flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-5xl mb-6 block" aria-hidden="true">
                  {featured[0].icon}
                </span>
                <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-3`}>
                  {featured[0].title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6 max-w-xl">{featured[0].description}</p>
                <FeatureList features={featured[0].features} />
              </div>
              <div className="mt-8">
                <ExploreLink href={featured[0].href} />
              </div>
            </motion.article>
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              {featured.slice(1).map((solution, i) => (
                <motion.article
                  key={solution.title}
                  {...fadeUp}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="flex-1 rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-all"
                >
                  <span className="text-3xl mb-3 block" aria-hidden="true">
                    {solution.icon}
                  </span>
                  <h2 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                    {solution.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{solution.description}</p>
                  <FeatureList features={solution.features} />
                  <div className="mt-5">
                    <ExploreLink href={solution.href} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Horizontal scroll showcase */}
        <SectionWrap alt>
          <SectionHeader
            badge="On-Demand & Communication"
            title="Connect Users"
            highlight="In Real Time"
            description="Voice, food delivery, and home services — platforms built for instant engagement and seamless transactions."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {scrollRow.map((solution, i) => (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-6 hover:border-[#13345A]/20 hover:shadow-md transition-all flex flex-col"
                >
                  <span className="text-4xl mb-4" aria-hidden="true">
                    {solution.icon}
                  </span>
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 flex-1">{solution.description}</p>
                  <FeatureList features={solution.features} />
                  <div className="mt-5">
                    <ExploreLink href={solution.href} />
                  </div>
                </motion.article>
              ))}
        </DotCarousel>
        </SectionWrap>

        {/* Zigzag alternating rows */}
        <SectionWrap>
          <SectionHeader
            badge="Healthcare, Travel & Commerce"
            title="Industry-Ready"
            highlight="App Solutions"
            description="From HIPAA-compliant healthcare booking to hotel reservations and digital wallets — each solution ships with domain-specific features."
          />
          <div className="space-y-10 sm:space-y-14">
            {zigzagRow.map((solution, index) => (
              <motion.article
                key={solution.title}
                {...fadeUp}
                transition={{ delay: index * 0.04 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-5xl mb-4 block" aria-hidden="true">
                    {solution.icon}
                  </span>
                  <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-3`}>
                    {solution.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-5">{solution.description}</p>
                  <ExploreLink href={solution.href} />
                </div>
                <div
                  className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  aria-label={`${solution.title} features`}
                >
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-12 inline-flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
            See how we apply these solutions across{" "}
            <Link href="/industries" className="font-semibold hover:underline" style={{ color: NAVY }}>
              industries
            </Link>{" "}
            and view our{" "}
            <Link href="/case-studies" className="font-semibold hover:underline" style={{ color: NAVY }}>
              case studies
            </Link>
            .
          </motion.p>
        </SectionWrap>

        {/* Compact grid — remaining solutions */}
        <SectionWrap alt>
          <SectionHeader
            badge="Social & Lifestyle"
            title="More Ways to"
            highlight="Build & Grow"
            description="Restaurant management, event ticketing, travel planning, social networking, and ride-hailing — all ready to customize."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {gridRow.map((solution, i) => (
              <motion.article
                key={solution.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group rounded-[1.25rem] border border-slate-200/80 bg-white p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <span className="text-3xl mb-3" aria-hidden="true">
                  {solution.icon}
                </span>
                <h3 className={`${fraunces.className} text-base font-medium text-slate-900 mb-2 group-hover:text-[#13345A] transition-colors`}>
                  {solution.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 flex-1 line-clamp-3">{solution.description}</p>
                <ul className="space-y-1 mb-4">
                  {solution.features.map((f) => (
                    <li key={f} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
                  style={{ color: NAVY }}
                >
                  Explore Solution
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.article>
            ))}
          </div>
          <motion.div
            {...fadeUp}
            className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500"
          >
            <Layers className="w-4 h-4" style={{ color: CYAN }} />
            {solutions.length} solutions · Explore our{" "}
            <Link href="/services" className="font-semibold hover:underline" style={{ color: NAVY }}>
              services
            </Link>{" "}
            for custom development
          </motion.div>
        </SectionWrap>
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default SolutionsPage;
