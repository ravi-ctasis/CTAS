"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Mail, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { PageShell, fraunces, CYAN, CYAN_LIGHT } from "@/components/page-design";

const quickLinks = [
  { label: "Our Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
];

export default function NotFoundContent() {
  return (
    <PageShell>
      <Navigation />
      <main>
        {/* Hero — split with decorative 404 */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-20 sm:py-28 lg:py-32 min-h-[70vh] flex items-center"
          aria-label="Page Not Found"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(36,155,202,0.2) 0%, transparent 70%)" }}
            animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <p
                  className={`${fraunces.className} text-[7rem] sm:text-[9rem] lg:text-[10rem] font-medium leading-none mb-2`}
                  style={{ color: CYAN_LIGHT }}
                  aria-hidden="true"
                >
                  404
                </p>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] mb-5`}>
                  Page Not Found
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                  The page you&apos;re looking for seems to have vanished into the digital void.
                  Let&apos;s get you back on track!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                    style={{ backgroundColor: CYAN }}
                  >
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10"
              >
                <div className="flex items-center gap-2 text-[#A9B7C2] text-sm font-medium mb-6">
                  <Search className="w-4 h-4" style={{ color: CYAN_LIGHT }} />
                  Popular destinations
                </div>
                <nav aria-label="Quick links">
                  <ul className="space-y-3">
                    {quickLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/[0.06] border border-white/10 text-[#F2F6F9] text-sm font-medium hover:bg-white/[0.1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                        >
                          {link.label}
                          <span className="text-[#93A3AF]">→</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <p className="mt-6 text-xs text-[#7A8B97] leading-relaxed">
                  Or explore our{" "}
                  <Link href="/portfolios" className="underline hover:text-white transition-colors" style={{ color: CYAN_LIGHT }}>
                    portfolio
                  </Link>{" "}
                  and{" "}
                  <Link href="/industries" className="underline hover:text-white transition-colors" style={{ color: CYAN_LIGHT }}>
                    industries
                  </Link>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </PageShell>
  );
}
