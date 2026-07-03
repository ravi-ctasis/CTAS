"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Youtube,
} from "lucide-react";

const solutions = [
  { name: "Marketplace Integration", href: "/services/marketplace" },
  { name: "Amazon SP-API", href: "/services/amazon-sp-api-integration" },
  { name: "E-Commerce Workflow Automation", href: "/services/ecommerce-workflow-automation" },
  { name: "AI & ML Solutions", href: "/services/ai-ml" },
  { name: "E-Commerce Solutions", href: "/services/e-commerce-solutions" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "Cloud & DevOps", href: "/services/devops" },
  { name: "Custom Software", href: "/services/custom-software" },
];

const marketplaces = [
  { name: "Amazon", href: "/services/amazon-sp-api-integration" },
  { name: "Bol.com", href: "/services/marketplace" },
  { name: "Allegro", href: "/services/marketplace" },
  { name: "Shopify", href: "/services/e-commerce-solutions" },
  { name: "WooCommerce", href: "/services/e-commerce-solutions" },
  { name: "Magento", href: "/services/e-commerce-solutions" },
  { name: "eBay", href: "/services/marketplace" },
  { name: "Walmart", href: "/services/marketplace" },
  { name: "TikTok Shop", href: "/services/marketplace" },
  { name: "Etsy", href: "/services/marketplace" },
];

const company = [
  { name: "About CTAS", href: "/about-us" },
  { name: "Our Story", href: "/our-story" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Life at CTAS", href: "/life-at-ctas" },
  { name: "Portfolios", href: "/portfolios" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ctas-info-services-llp",
    label: "LinkedIn — CTAS Info Services",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/people/Ctas-Info-Service/61566714244013/",
    label: "Facebook — CTAS Info Services",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ctasinfoservice/",
    label: "Instagram — CTAS Info Services",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
    label: "Twitter — CTAS Info Services",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/",
    label: "YouTube — CTAS Info Services",
  },
];

const technologies = [
  "Node.js", "React", "Angular", "Next.js",
  "Python", "C#", "MongoDB", "PostgreSQL",
  "AWS", "Azure", "Docker", "Kubernetes",
  "Redis", "REST APIs", "GraphQL", "AI / LLMs",
];

const FooterSection = () => {
  return (
    <footer
      className="bg-[#0B1120] text-white"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Main footer content ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-14 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 lg:gap-12">

          {/* Brand column — 2 cols */}
          <div className="xl:col-span-2 space-y-7">
            <Link href="/" aria-label="CTAS Info Services — Home">
              <Image
                src="/ctas-logo-footer.webp"
                alt="CTAS Info Services LLP — Marketplace Integration & Technology Solutions"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
                sizes="140px"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              CTAS helps businesses automate commerce using Marketplace Integrations, ERP
              Connectivity, Warehouse Automation, AI Solutions and Enterprise Software.
              Based in Ahmedabad, India — serving clients across 18+ countries.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "500+", l: "Projects" },
                { v: "35+", l: "Integrations" },
                { v: "18+", l: "Countries" },
                { v: "24×7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl font-bold text-white">{s.v}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 flex items-center justify-center transition-all duration-200"
                >
                  <s.icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Review platforms */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="https://clutch.co/profile/ctas-info-services-llp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CTAS on Clutch — Verified Reviews"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-colors"
              >
                <Image
                  src="/clutch-co.svg"
                  alt="Clutch verified reviews"
                  width={64}
                  height={24}
                  className="h-5 w-auto object-contain"
                  sizes="64px"
                />
              </Link>
              <Link
                href="https://www.upwork.com/agencies/1411310467085111296/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CTAS on Upwork"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-colors"
              >
                <Image
                  src="/download-removebg-preview.webp"
                  alt="Upwork agency profile"
                  width={64}
                  height={24}
                  className="h-5 w-auto object-contain"
                  sizes="64px"
                />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplaces */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Marketplaces</h3>
            <ul className="space-y-3">
              {marketplaces.map((m) => (
                <li key={m.name}>
                  <Link
                    href={m.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Contact</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
                  <a
                    href="mailto:info@ctasis.com"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    itemProp="email"
                  >
                    info@ctasis.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                  <a
                    href="tel:+917948993409"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    itemProp="telephone"
                  >
                    +91 79489 93409
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Office</div>
                  <address
                    className="text-sm text-slate-400 not-italic leading-relaxed"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">A-865/866, Money Plant High Street, Jagatpur Road, near BSNL Office, Gota</span>,{" "}
                    <span itemProp="addressLocality">Ahmedabad</span>,{" "}
                    <span itemProp="addressRegion">Gujarat</span>{" "}
                    <span itemProp="postalCode">382470</span>,{" "}
                    <span itemProp="addressCountry">India</span>
                  </address>
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-white">24/7 Support</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Mon–Fri 9AM–6PM IST. Emergency support round the clock.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Technology bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            <span className="text-xs text-slate-600 uppercase tracking-widest flex-shrink-0">
              Technologies
            </span>
            {technologies.map((tech) => (
              <span key={tech} className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform logos scrolling bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Amazon", "Bol.com", "Allegro", "Shopify", "WooCommerce",
              "Magento", "eBay", "Walmart", "TikTok Shop", "Etsy", "Rakuten",
            ].map((p) => (
              <span
                key={p}
                className="text-xs font-medium text-slate-500 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full hover:text-slate-300 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Ctas Info Services LLP. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Sitemap", href: "/sitemap.xml" },
              ].map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {l.name}
                </Link>
              ))}

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll back to top"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 ml-2"
              >
                <ArrowUp className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
