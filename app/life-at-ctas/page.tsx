"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";
import styles from "./marquee.module.css";
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
} from "lucide-react";
import { PartyPopper } from "lucide-react";
import Image from "next/image";

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";


export default function LifeCulture() {
  // const purposeItems = [
  //   {
  //     title: "Envision",
  //     desc: "Creative thinkers collaborate to shape bold ideas into reality.",
  //     color: "bg-orange-100 text-orange-600",
  //     img: "/education.webp",
  //   },
  //   {
  //     title: "Leverage",
  //     desc: "We maximize resources, processes, and platforms for dynamic results.",
  //     color: "bg-blue-100 text-blue-600",
  //     img: "/dashboard.webp",
  //   },
  //   {
  //     title: "Elevate",
  //     desc: "We continuously raise the bar to deliver measurable impact.",
  //     color: "bg-emerald-100 text-emerald-600",
  //     img: "/analytics-dashboard.webp",
  //   },
  // ];
  const perks = [
    {
      label: "5 Days a Week",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Employee First",
      icon: UserCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Rewards & Benefits",
      icon: Gift,
      color: "bg-rose-50 text-rose-600",
    },
    {
      label: "Fun Connect",
      icon: PartyPopper,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Allowances",
      icon: CreditCard,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Growth Opportunities",
      icon: TrendingUp,
      color: "bg-teal-50 text-teal-600",
    },
    {
      label: "Referral Program",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Positive Environment",
      icon: Leaf,
      color: "bg-lime-50 text-lime-600",
    },
  ];
  const likeImgCards = [
    {
      title: "Creative Coding",
      desc: "At Ctasian, we nurture a culture that encourages innovation, allowing creativity to flourish. We blend art with technology and put ideas into vibrant digital experiences.",
      color: "bg-rose-100/60",
      icon: "🎨",
    },
    {
      title: "Digital Diversity",
      desc: "Celebrating a wide array of backgrounds and viewpoints, we recognize that diversity is key to our shared success.",
      color: "bg-emerald-100/60",
      icon: "🌈",
    },
    {
      title: "Seamless Execution",
      desc: "We prioritize efficiency and clarity, ensuring that every project flows smoothly from concept to completion.",
      color: "bg-cyan-100/60",
      icon: "⚡",
    },
    {
      title: "Proven Processes",
      desc: "We rely on established methodologies that enhance reliability, quality, and speed of delivery.",
      color: "bg-orange-100/60",
      icon: "✅",
    },
  ];
  // const recognitionLogos = [
  //   "/clutch-co.svg",
  //   "/businessfirms.webp",
  //   "/crunchbase_logo.webp",
  //   "/cloudflare.svg",
  //   "/amazon-ads.svg",
  // ];

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

  // const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0; // fallback
      return prev > 0 ? prev - 1 : videos.length - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0; // fallback
      return prev < videos.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <div className="bg-[#fff9f5] text-gray-800">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Animated background icons for hero */}
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute -top-4 left-6 text-6xl opacity-10 animate-float">✨</span>
            <span className="absolute top-10 -right-2 text-5xl opacity-10 animate-float animation-delay-2000">
              🎉
            </span>
            <span className="absolute bottom-4 right-1/3 text-7xl opacity-5 animate-float animation-delay-4000">
              💫
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Life & Culture at <span className="text-orange-500">CTAS</span>
            </h1>
            <p className="text-base md:text-lg mt-3 text-gray-600">
              #CreativeAtWork #WorkLifeBalance
            </p>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-gradient-to-br from-white to-orange-50">
            {/* <img
              src={`${baseURL}/life-at-ctas-slide-1.webp`}
              alt="Team Group"
              className="w-full"
            /> */}
            <Image
              src={`/life-at-ctas-banner.jpg`}
              alt="Team Group"
              width={1200}
              height={500}
              className="w-full"
              priority
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/careers"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-5 py-2 text-sm md:text-base font-medium shadow hover:bg-orange-600 transition"
            >
              Explore Careers
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-800 px-5 py-2 text-sm md:text-base font-medium shadow ring-1 ring-black/5 hover:ring-black/10 transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Celebrations */}
      <section className="py-16">
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            We take pride in our work and joy in our play.
          </h2>
          <p className="mt-2 text-gray-600">Celebrations are an integral part of our culture.</p>

          {/* Row 1: scrolls right */}
          <div className="mt-8">
            <div className="relative overflow-hidden w-full">
              <div className={`flex gap-4 whitespace-nowrap ${styles.marqueeRight}`}>
                {rowimgs.concat(rowimgs).map((img, i) => (
                  <div
                    key={`r1-${i}`}
                    className="flex-shrink-0 overflow-hidden rounded-xl bg-transparent border border-gray-100 shadow hover:shadow-md hover:scale-105 transition-transform duration-300 flex justify-between items-center"
                  >
                    <Image
                      src={img}
                      alt={`Celebration ${i}`}
                      width={500}
                      height={400}
                      className="w-auto h-auto max-h-[280px] md:max-h-[320px] object-contain"
                    />
                    {/* <div className="relative  max-h-[300px] min-h-[295px] flex justify-between">
                      <picture>
                        <source
                          srcSet="https://lifeatctas.s3.ap-south-1.amazonaws.com/life-at-ctas-slide-13.webp"
                          type="image/webp"
                        />
                        <img
                          src={img}
                          alt="Slide"
                          style={{
                            objectFit: 'contain',
                            width: 'auto',
                            minWidth: '300px',
                            minHeight: '300px'
                          }}
                        />
                      </picture>

                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: scrolls left */}
          {/* <div className="mt-6">
            <div className="relative overflow-hidden">
              <div className={`flex gap-4 ${styles.marqueeLeft}`}>
                {rowimgs.concat(rowimgs).map((img, i) => (
                  <div
                    key={`r2-${i}`}
                    className="min-w-[220px] md:min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-white border border-gray-100 shadow hover:shadow-md hover:scale-[1.02] transition"
                  >
                    <img
                      src={`/imgs/${img}`}
                      alt={`Celebration ${i}`}
                      className="w-auto h-auto max-h-[200px] md:max-h-[240px] object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* <a
            href="#"
            className="inline-flex mt-10 items-center justify-center rounded-full bg-orange-500 text-white px-5 py-2 text-sm md:text-base font-medium shadow hover:bg-orange-600 transition"
          >
            View all
            <ArrowRight />
          </a> */}
        </div>
      </section>

      {/* Driven by Purpose */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-10">
            Driven by Purpose
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {purposeItems.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-200/40 via-white to-orange-100/40 blur-sm opacity-0 group-hover:opacity-100 transition" />
                <Card className="relative rounded-2xl shadow-md border border-gray-100 overflow-hidden group-hover:shadow-lg group-hover:-translate-y-0.5 transition">
                  <div className="bg-rose-50/70 px-4 pt-4 pb-0 border-b border-rose-100">
                    <div className="mx-auto h-[140px] flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-h-[120px] object-contain"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Perks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Perks of being a Ctasian</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {perks.map((perk, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-100/30 via-transparent to-white blur-[2px] opacity-0 group-hover:opacity-100 transition" />
                <div className="relative h-full p-5 bg-white border border-gray-100 rounded-xl shadow hover:shadow-md transition">
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${perk.color} ring-1 ring-black/5`}
                  >
                    <span className="text-lg">
                      <perk.icon />
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 leading-snug">{perk.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* img + Result Cards */}
      <section className="py-6 md:py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src={`${baseURL}/life-at-ctas-slide-1.webp`}
              alt="Workspace"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-500">Result</span>
              <span className="ml-2 font-extrabold text-orange-500">Ctasian</span>
            </div>
            <div className="space-y-5">
              {likeImgCards.map((c, i) => (
                <div key={i} className={`rounded-2xl ${c.color} p-5 md:p-6 ring-1 ring-black/5`}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5">
                      <span className="text-lg">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">{c.title}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-base">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Ctasian Recognized As The{" "}
            <span className="text-orange-500">Best Software Development Company</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <CardContent className="p-0">
              <div className="flex flex-wrap items-center justify-start gap-6">
                {/* {recognitionLogos.map((src, i) => ( */}
                <Image
                  // key={i}
                  src={`${baseURL}/life-at-ctas-slide-12.webp`}
                  alt="logo"
                  width={600}
                  height={400}
                  className=" h-auto rounded-2xl"
                />
                {/* ))} */}
              </div>
            </CardContent>
            <Card className="rounded-2xl shadow-md border border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Trusted Technology Partners</h3>
                <div className="flex flex-wrap items-center justify-start gap-6">
                  {partnerLogos.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${src.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')} logo`}
                      width={100}
                      height={100}
                      className="h-12 object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insta Life */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Insta Life <span className="text-orange-500">@Ctasian</span>
          </h2>

          {/* Grid Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {videos.map((item, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-90 md:h-90"
                onClick={() => setActiveIndex(i)}
              >
                <Image
                  src={item.thumb}
                  alt={`Video Thumbnail ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="text-white text-4xl">▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-100 h-full sm:h-[90vh] sm:max-w-[90vw] md:max-w-[1200px] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-gray-800"
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

              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition cursor-pointer"
                onClick={() => setActiveIndex(null)}
              >
                ×
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 transition cursor-pointer"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 transition cursor-pointer"
              >
                <ArrowRight />
              </button>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 text-white text-left max-w-md">
                <p className="font-bold">@ctas</p>
                <p className="text-sm">ctas</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-xl">
            {/* Animated background icons */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute -top-6 -left-6 text-6xl opacity-20 animate-float">✨</span>
              <span className="absolute top-10 right-8 text-5xl opacity-20 animate-float animation-delay-2000">
                🎯
              </span>
              <span className="absolute bottom-[-12px] left-1/3 text-7xl opacity-10 animate-float animation-delay-4000">
                🚀
              </span>
            </div>
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                    The Perfect Place to Create, Collaborate, and Grow
                  </h2>
                  <p className="mt-2 md:mt-3 text-white/90 max-w-2xl">
                    Have an idea to do something that can make an impact?
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-2 text-sm md:text-base font-medium shadow hover:bg-gray-100 transition whitespace-nowrap"
                  >
                    Share Your Idea
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let’s Talk Business</h2>
          <form className="grid md:grid-cols-2 gap-4 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-gray-300"
            /><section class="container my-90"> <div class="branding-cta-section"> <div class="cta-content"> <h2 class="cta-title">We’re made for each other.</h2> <span>Have an idea to do something that can make an impact?</span> </div> <a href="inquiry.html" class="secondry-btn hover-black">Share Your Idea<i class="c-icon-arrow-right"></i></a> </div> </section>
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Describe your project"
              rows={4}
              className="p-3 rounded-lg border border-gray-300 md:col-span-2"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 md:col-span-2">
              Send
            </Button>
          </form>
        </div>
      </section> */}
      <FooterSection />
    </div>
  );
}
