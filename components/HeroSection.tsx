"use client";

import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { heroSlides } from "@/data/heroSlides";

const ORBIT_SIZE = 500;
const ORBIT_CENTER = ORBIT_SIZE / 2;
const ORBIT_RADIUS = 190;
const ICON_SIZE = 76;
const ORBIT_SLOTS = 6;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = heroSlides;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4800);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isHovered]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-[#060D1F] overflow-hidden"
      aria-label="Hero section — CTAS Info Services"
      itemScope
      itemType="https://schema.org/Organization"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <h1 className="sr-only" itemProp="name">
        Ctas Info Services — Amazon SP-API Integration, AI Automation &amp; E-Commerce Solutions
      </h1>

      {/* ── Background layers ── */}
      {/* Noise/grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M60 0 L0 0 0 60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      {/* Gradient glows keyed to active slide */}
      <div
        key={`glow-${currentSlide}`}
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)` }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 sm:py-20 lg:py-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* ── LEFT: Content ── */}
          <div className="space-y-7">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span itemProp="name">Ahmedabad&apos;s Leading Tech Experts Since 2019</span>
            </div>

            {/* Slide headline */}
            <div
              key={currentSlide}
              className="animate-in fade-in slide-in-from-bottom-3 duration-600"
              role="tabpanel"
              aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-black text-white leading-[1.1] tracking-tight mb-4">
                {slide.title.includes(" – ") ? (
                  <>
                    <span className="block text-white/90">{slide.title.split(" – ")[0]}</span>
                    <span className={`block text-transparent bg-gradient-to-r ${slide.gradient} bg-clip-text`}>
                      {slide.title.split(" – ")[1]}
                    </span>
                  </>
                ) : (
                  <span className={`text-transparent bg-gradient-to-r ${slide.gradient} bg-clip-text`}>
                    {slide.title}
                  </span>
                )}
              </h2>

              <p className={`text-sm sm:text-base font-semibold text-transparent bg-gradient-to-r ${slide.gradient} bg-clip-text mb-4 tracking-wide`}>
                {slide.subtitle}
              </p>

              <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-xl">
                {slide.description}
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2">
              {slide.features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/6 border border-white/10 rounded-full text-white/70 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="tel:+917948993409"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 active:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/30"
                aria-label="Book a free strategy consultation call"
              >
                <ArrowRight className="w-4 h-4" />
                Book a Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/8 text-white border border-white/15 text-sm font-semibold rounded-xl hover:bg-white/12 hover:border-white/25 transition-colors duration-200"
                aria-label="Explore CTAS case studies and success stories"
              >
                <Play className="w-3.5 h-3.5" />
                Explore Case Studies
              </Link>
            </div>

            {/* Micro-trust row */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-white/35 text-xs">
              <span>ISO Certified</span>
              <span className="w-px h-3 bg-white/20" />
              <span>AWS Partner</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Clutch Top Developer</span>
              <span className="w-px h-3 bg-white/20" />
              <span>18+ Countries</span>
            </div>
          </div>

          {/* ── RIGHT: Orbit diagram ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="relative"
              style={{ width: ORBIT_SIZE, height: ORBIT_SIZE }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: 20,
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 0 60px rgba(59,130,246,0.08) inset",
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: 70,
                  border: "1px dashed rgba(255,255,255,0.08)",
                }}
              />

              {/* SVG lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
                viewBox={`0 0 ${ORBIT_SIZE} ${ORBIT_SIZE}`}
                aria-hidden="true"
              >
                {Array.from({ length: ORBIT_SLOTS }, (_, i) => {
                  const angle = (i * (360 / ORBIT_SLOTS) * Math.PI) / 180;
                  const x = ORBIT_CENTER + Math.cos(angle) * ORBIT_RADIUS;
                  const y = ORBIT_CENTER + Math.sin(angle) * ORBIT_RADIUS;
                  return (
                    <line
                      key={i}
                      x1={ORBIT_CENTER}
                      y1={ORBIT_CENTER}
                      x2={x}
                      y2={y}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  );
                })}
              </svg>

              {/* Orbit dots */}
              {Array.from({ length: ORBIT_SLOTS }, (_, i) => {
                const deg = i * (360 / ORBIT_SLOTS);
                return (
                  <div
                    key={`dot-${i}`}
                    className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
                    style={{ transform: `rotate(${deg}deg) translateX(${ORBIT_RADIUS}px)` }}
                  >
                    <div className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/40" />
                  </div>
                );
              })}

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className={`w-[100px] h-[100px] rounded-[28px] bg-gradient-to-br ${slide.gradient} shadow-2xl flex items-center justify-center transition-all duration-700 ease-out`}
                  style={{ boxShadow: "0 0 50px rgba(59,130,246,0.3), 0 20px 40px rgba(0,0,0,0.4)" }}
                >
                  <slide.icon className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                {/* Pulse */}
                <div
                  className="absolute w-[100px] h-[100px] rounded-[28px] border border-blue-400/30 animate-ping"
                  style={{ animationDuration: "2.5s" }}
                />
              </div>

              {/* Tech icons on orbit */}
              {slide.techStack?.slice(0, ORBIT_SLOTS).map((tech, i) => {
                const deg = i * (360 / ORBIT_SLOTS);
                return (
                  <div
                    key={`${currentSlide}-${i}`}
                    className="absolute top-1/2 left-1/2 w-0 h-0 z-[2]"
                    style={{ transform: `rotate(${deg}deg) translateX(${ORBIT_RADIUS}px)` }}
                  >
                    <div
                      className="bg-[#111827] border border-white/10 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-1.5 overflow-hidden hover:border-white/25 hover:scale-110 transition-all duration-300"
                      style={{
                        width: ICON_SIZE,
                        height: ICON_SIZE,
                        transform: `translate(-50%, -50%) rotate(-${deg}deg)`,
                      }}
                    >
                      <Image
                        src={tech.image}
                        alt={tech.label}
                        width={44}
                        height={44}
                        className="w-9 h-9 object-contain"
                        priority={i < 3}
                        sizes="44px"
                      />
                    </div>
                    {/* Label below icon */}
                    <div
                      className="absolute text-[9px] font-medium text-white/40 whitespace-nowrap"
                      style={{
                        top: "calc(50% + 44px)",
                        left: "50%",
                        transform: `translateX(-50%) rotate(-${deg}deg)`,
                      }}
                    >
                      {tech.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Slide dots ── */}
        <div
          className="flex items-center justify-center gap-2 pb-12"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === currentSlide}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-blue-500" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: "35+", l: "Marketplace APIs" },
              { v: "1.5M+", l: "Orders Synced" },
              { v: "18+", l: "Countries Served" },
              { v: "99.9%", l: "API Reliability" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">{s.v}</div>
                <div className="text-xs text-white/35 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
