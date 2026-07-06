"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CreditCard,
  Gift,
  Leaf,
  TrendingUp,
  UserCheck,
  Users,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import styles from "@/app/life-at-ctas/marquee.module.css";
import {
  PageShell,
  PageHero,
  PageCTA,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
} from "@/components/page-design";

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

const perks = [
  { label: "5 Days a Week", icon: Calendar },
  { label: "Employee First", icon: UserCheck },
  { label: "Rewards & Benefits", icon: Gift },
  { label: "Fun Connect", icon: PartyPopper },
  { label: "Allowances", icon: CreditCard },
  { label: "Growth Opportunities", icon: TrendingUp },
  { label: "Referral Program", icon: Users },
  { label: "Positive Environment", icon: Leaf },
];

const cultureCards = [
  {
    title: "Creative Coding",
    desc: "At Ctasian, we nurture a culture that encourages innovation, allowing creativity to flourish. We blend art with technology and put ideas into vibrant digital experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Diversity",
    desc: "Celebrating a wide array of backgrounds and viewpoints, we recognize that diversity is key to our shared success.",
    icon: "🌈",
  },
  {
    title: "Seamless Execution",
    desc: "We prioritize efficiency and clarity, ensuring that every project flows smoothly from concept to completion.",
    icon: "⚡",
  },
  {
    title: "Proven Processes",
    desc: "We rely on established methodologies that enhance reliability, quality, and speed of delivery.",
    icon: "✅",
  },
];

const partnerLogos = [
  "/amazonwebservices.svg",
  "/digitalocean-icon.svg",
  "/decathlon-logo.svg",
  "/amazon-web.svg",
  "/tiktokshop.svg",
  "/vercel-icon-svgrepo-com.svg",
  "/walmart-logo.svg",
  "/stripe.svg",
  "/Shiprocket.svg",
  "/shopify-logo.svg",
  "/Razorpay_logo.svg",
  "/payment-square.svg",
  "/paypal.svg",
  "/paytm.svg",
  "/payu-icon.svg",
  "/amazon-ads.webp",
  "/amazon-logo.svg",
];

const rowimgs = [
  `${baseURL}/life-at-ctas-slide-1.webp`,
  `${baseURL}/life-at-ctas-slide-2.webp`,
  `${baseURL}/life-at-ctas-slide-3.webp`,
  `${baseURL}/life-at-ctas-slide-4.webp`,
  `${baseURL}/life-at-ctas-slide-6.webp`,
  `${baseURL}/life-at-ctas-slide-7.webp`,
  `${baseURL}/life-at-ctas-slide-8.webp`,
  `${baseURL}/life-at-ctas-slide-10.webp`,
  `${baseURL}/life-at-ctas-slide-11.webp`,
  `${baseURL}/life-at-ctas-slide-9.webp`,
  `${baseURL}/life-at-ctas-slide-12.webp`,
  `${baseURL}/life-at-ctas-slide-14.webp`,
];

const videos = [
  { video: `${baseURL}/life-video-5.mp4`, thumb: `${baseURL}/thumbnail-5.webp` },
  { video: `${baseURL}/life-video-7.mp4`, thumb: `${baseURL}/thumbnail-7.webp` },
  { video: `${baseURL}/life-video-8.mp4`, thumb: `${baseURL}/thumbnail-8.webp` },
  { video: `${baseURL}/life-video-6.mp4`, thumb: `${baseURL}/thumbnail-1.webp` },
  { video: `${baseURL}/life-video-2.mp4`, thumb: `${baseURL}/thumbnail-2.webp` },
  { video: `${baseURL}/life-video-3.mp4`, thumb: `${baseURL}/thumbnail-3.webp` },
  { video: `${baseURL}/life-video-4.mp4`, thumb: `${baseURL}/thumbnail-4.webp` },
  { video: `${baseURL}/life-video-1.mp4`, thumb: `${baseURL}/thumbnail-6.webp` },
];

const PerkCard = ({ icon: Icon, label, index }: { icon: LucideIcon; label: string; index: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group relative h-full"
  >
    <div className="relative h-full p-5 bg-white border border-slate-200/80 rounded-2xl hover:border-[#13345A]/20 hover:shadow-lg transition-all duration-300 text-center">
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${CYAN}18` }}
      >
        <Icon className="w-5 h-5" style={{ color: NAVY }} />
      </div>
      <div className="text-sm font-medium text-slate-700 leading-snug">{label}</div>
    </div>
  </motion.div>
);

const LifeAtCtasPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === null ? 0 : prev > 0 ? prev - 1 : videos.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === null ? 0 : prev < videos.length - 1 ? prev + 1 : 0));
  };

  return (
    <PageShell>
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Life at CTAS"
          badge="Life & Culture"
          title="Life & Culture at"
          highlight="CTAS"
          description="#CreativeAtWork #WorkLifeBalance — where innovation meets collaboration, and every Ctasian thrives."
        />

        <section className="py-10 sm:py-12 bg-[#F6F8FA]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm"
            >
              <Image
                src="/life-at-ctas-banner.jpg"
                alt="Team at CTAS"
                width={1200}
                height={500}
                className="w-full h-auto"
                priority
              />
            </motion.div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full text-[#08141F] transition-all"
                style={{ backgroundColor: CYAN }}
              >
                Explore Careers
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-slate-700 border border-slate-200 text-sm font-semibold rounded-full hover:border-[#13345A]/30 transition-all"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center mb-8">
            <SectionHeader
              badge="Celebrations"
              title="We Take Pride in Our Work and"
              highlight="Joy in Our Play"
              description="Celebrations are an integral part of our culture."
            />
          </div>
          <div className="relative overflow-hidden w-full">
            <div className={`flex gap-4 whitespace-nowrap ${styles.marqueeRight}`}>
              {rowimgs.concat(rowimgs).map((img, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 overflow-hidden rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
                >
                  <Image
                    src={img}
                    alt={`Celebration ${i}`}
                    width={500}
                    height={400}
                    className="w-auto h-auto max-h-[280px] md:max-h-[320px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader
              badge="Perks"
              title="Perks of Being a"
              highlight="Ctasian"
              description="We invest in our people with benefits that support growth, balance, and wellbeing."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {perks.map((perk, i) => (
                <PerkCard key={perk.label} icon={perk.icon} label={perk.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <Image
                src={`${baseURL}/life-at-ctas-slide-1.webp`}
                alt="Workspace"
                width={600}
                height={480}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-6">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Our Culture</span>
                <span className={`ml-2 ${fraunces.className} text-xl font-medium italic`} style={{ color: CYAN }}>
                  Ctasian
                </span>
              </motion.div>
              <div className="space-y-4">
                {cultureCards.map((c, i) => (
                  <motion.div
                    key={c.title}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl bg-[#F6F8FA] border border-slate-200/80 p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200/80 flex-shrink-0">
                        <span className="text-lg">{c.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-1">{c.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader
              badge="Recognition"
              title="Recognized As a Leading"
              highlight="Software Development Company"
              description="Trusted by global brands and technology partners worldwide."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="rounded-2xl overflow-hidden border border-slate-200/80">
                <Image
                  src={`${baseURL}/life-at-ctas-slide-12.webp`}
                  alt="Recognition"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-5">Trusted Technology Partners</h3>
                <div className="flex flex-wrap items-center gap-5">
                  {partnerLogos.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${src.split("/").pop()?.split(".")[0].replace(/[-_]/g, " ")} logo`}
                      width={100}
                      height={48}
                      className="h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader
              badge="Behind the Scenes"
              title="Insta Life"
              highlight="@Ctasian"
              description="Peek into our daily life, celebrations, and team moments."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {videos.map((item, i) => (
                <motion.button
                  key={i}
                  type="button"
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="relative cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 aspect-[9/16] hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Play video ${i + 1}`}
                >
                  <Image src={item.thumb} alt={`Video Thumbnail ${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full h-full sm:h-[90vh] sm:max-w-[90vw] md:max-w-[1200px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={activeIndex}
                autoPlay
                muted
                loop
                controls
                playsInline
                crossOrigin="anonymous"
                className="w-full h-full object-contain bg-black"
              >
                <source src={videos[activeIndex].video} type="video/mp4" />
              </video>
              <button
                type="button"
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/75 transition cursor-pointer"
                onClick={() => setActiveIndex(null)}
                aria-label="Close video"
              >
                ×
              </button>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 w-11 h-11 rounded-full flex items-center justify-center hover:bg-black/75 transition cursor-pointer"
                aria-label="Previous video"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 w-11 h-11 rounded-full flex items-center justify-center hover:bg-black/75 transition cursor-pointer"
                aria-label="Next video"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <PageCTA
          title="The Perfect Place to Create, Collaborate, and Grow"
          description="Have an idea to do something that can make an impact? We'd love to hear from you."
          primaryLabel="Share Your Idea"
          secondaryHref="/careers"
          secondaryLabel="Explore Careers"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default LifeAtCtasPage;
