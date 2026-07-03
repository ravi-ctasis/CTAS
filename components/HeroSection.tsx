"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { heroSlides } from "@/data/heroSlides";

const ORBIT_SIZE = 480;
const ORBIT_CENTER = ORBIT_SIZE / 2;
const ORBIT_RADIUS = 180;
const ICON_SIZE = 72;
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
      const interval = setInterval(nextSlide, 4500);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isHovered]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative bg-gradient-to-br from-white via-blue-50/50 to-slate-50 overflow-hidden border-b border-slate-100"
      aria-label="Hero section — CTAS Info Services"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <h1 className="sr-only" itemProp="name">
        Ctas Info Services — Amazon SP-API Integration, AI Solutions & E-Commerce Automation
      </h1>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 0 L48 48 L0 48' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-20 lg:py-24 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* ── Left: Text Content ── */}
          <div className="space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span itemProp="name">Ahmedabad&apos;s Leading Tech Experts Since 2019</span>
            </div>

            {/* Slide content — single active slide to prevent overlap */}
            <div role="tabpanel" aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}>
              <div key={currentSlide} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-slate-900 leading-tight tracking-tight mb-3">
                  {currentSlideData.title.includes(" – ") ? (
                    <>
                      <span className="block">{currentSlideData.title.split(" – ")[0]}</span>
                      <span className={`block text-transparent bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text`}>
                        {currentSlideData.title.split(" – ")[1]}
                      </span>
                    </>
                  ) : currentSlideData.title.includes(" with ") ? (
                    <>
                      <span className="block">{currentSlideData.title.split(" with ")[0]}</span>
                      <span className={`block text-transparent bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text`}>
                        with {currentSlideData.title.split(" with ")[1]}
                      </span>
                    </>
                  ) : (
                    <span className={`block text-transparent bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text`}>
                      {currentSlideData.title}
                    </span>
                  )}
                </h2>

                <p className={`text-base sm:text-lg font-semibold text-transparent bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text mb-4`}>
                  {currentSlideData.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>
              </div>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {currentSlideData.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 text-xs sm:text-sm font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="tel:+917948993409"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                aria-label="Book a free strategy consultation call"
              >
                <ArrowRight className="w-4 h-4" />
                Book a Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-semibold rounded-xl hover:border-blue-300 transition-colors duration-200"
                aria-label="Explore CTAS case studies and success stories"
              >
                Explore Case Studies
              </Link>
            </div>

          </div>

          {/* ── Right: Tech Orbit ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-[480px] h-[480px]">
              {/* Slow-rotating decorative rings — aligned to ORBIT_RADIUS */}
              <div className="absolute inset-[60px] rounded-full border border-blue-200/50 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-[20px] rounded-full border border-slate-200/60 animate-spin-slow-reverse pointer-events-none" />

              {/* Orbit anchor dots — same radius & angles as icons */}
              {Array.from({ length: ORBIT_SLOTS }, (_, i) => i * (360 / ORBIT_SLOTS)).map((deg) => (
                <div
                  key={`dot-${deg}`}
                  className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
                  style={{ transform: `rotate(${deg}deg) translateX(${ORBIT_RADIUS}px)` }}
                >
                  <div className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/60" />
                </div>
              ))}

              {/* Connection lines — endpoints match icon centers exactly */}
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
                      stroke="#bfdbfe"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      className="animate-dash"
                    />
                  );
                })}
              </svg>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${currentSlideData.gradient} shadow-xl shadow-blue-600/10 flex items-center justify-center transition-all duration-700 ease-out`}
                >
                  <currentSlideData.icon className="w-12 h-12 text-white drop-shadow-lg transition-transform duration-700" />
                </div>
              </div>

              {/* Tech stack — polar placement, centered on each dot */}
              {currentSlideData.techStack?.slice(0, ORBIT_SLOTS).map((tech, i) => {
                const deg = i * (360 / ORBIT_SLOTS);
                return (
                  <div
                    key={`${currentSlide}-${i}`}
                    className="absolute top-1/2 left-1/2 w-0 h-0 z-[2]"
                    style={{ transform: `rotate(${deg}deg) translateX(${ORBIT_RADIUS}px)` }}
                  >
                    <div
                      className="bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden transition-all duration-700 ease-out hover:scale-110 hover:shadow-xl hover:border-blue-200"
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
                        className="w-10 h-10 object-contain"
                        priority={i < 3}
                        sizes="44px"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Slide indicator dots — full-width center ── */}
        <div
          className="flex items-center justify-center gap-2 pb-10"
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
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
