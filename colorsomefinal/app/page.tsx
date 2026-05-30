
"use client";

import React from 'react';
import { useEffect, useState } from "react";
import gsap from "gsap";
import Link from 'next/link';
import RevealText from '../components/RevealText';
import ScrollSequence from "../components/ScrollSequence";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContanctSection';
import ProductsSection from '@/components/ProductsSection';


export default function HomePage() {
  gsap.registerPlugin(ScrollTrigger);
  const [currentFrame, setCurrentFrame] =
    useState(1);

  useEffect(() => {
    const obj = {
      frame: 1,
    };

    gsap.to(obj, {
      frame: 240,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
  trigger: document.body,
  start: "top top",
  end: () =>
    document.body.scrollHeight -
    window.innerHeight -150,
  scrub: 0.5,
},
      onUpdate: () => {
        setCurrentFrame(Math.floor(obj.frame));
      },
    });
  }, []);

  const scrollToNextSection = (): void => {
    const nextSection = document.getElementById('architecture-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col">

      {/* 
        HERO SECTION 
      */}
      <section className="flex flex-col lg:flex-row w-full border-b border-gray-200 min-h-[85vh] bg-white relative z-10">

        {/* Left Panel */}
        <div className="w-full lg:w-1/2 flex flex-col border-r border-gray-200 shrink-0 lg:shrink">
          {/* Logo Banner Area */}
          <div className="h-[30vh] lg:h-[45%] w-full border-b border-gray-200 flex flex-col justify-center relative bg-white overflow-hidden">
            <div
              className="absolute inset-0 opacity-40 pointer-events-none bg-grid-static"
              style={{ clipPath: 'inset(20% 0 20% 0)' }}
            />
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-center text-gray-900 relative z-10 transition-transform duration-700 hover:scale-[1.02] cursor-default">
              COLORSOME
            </h1>
          </div>

          {/* Copy Area */}
          <div
            className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-end relative"
            style={{ background: 'radial-gradient(circle at 30% 70%, #ffffff 0%, #f9fafb 100%)' }}
          >
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-tighter leading-[0.95] text-gray-900">
                We build digital experiences for web, mobile and beyond.
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-6 md:mt-8 max-w-md leading-relaxed font-normal">
                Lumina combines user-centric design, robust engineering and modern tech stacks to deliver production-ready solutions for forward-thinking brands and ambitious startups.
              </p>
            </div>

            <button
              onClick={scrollToNextSection}
              className="mt-12 md:mt-20 flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group w-max outline-none"
              aria-label="Scroll to explore"
            >
              scroll to explore
              <iconify-icon icon="solar:alt-arrow-down-linear" className="transition-transform group-hover:translate-y-1 duration-300" />
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex flex-col h-[60vh] lg:h-auto">
          {/* Hero Image */}
          {/* <div className="flex-1 relative overflow-hidden group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bacc4a0-99e3-4167-8620-7d28e052331b_1600w.webp" 
              alt="Abstract Blue Wave" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
              loading="eager"
            />
          </div> */}
          <div className="flex-1 relative overflow-hidden">
            <ScrollSequence
              currentFrame={currentFrame}
            />
          </div>

          {/* Action Blocks */}
          <div className="h-auto lg:h-[30%] flex flex-col sm:flex-row shrink-0 border-t border-gray-200">
            <Link href="/projects" className="w-full sm:w-1/2 p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-gray-200 flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors group relative min-h-[200px] lg:min-h-0 outline-none">
              <div className="flex justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 mb-2">Selected Work</h3>
                <p className="text-sm text-gray-500">View our case studies</p>
              </div>
            </Link>

            <Link href="/contact" className="w-full sm:w-1/2 p-8 lg:p-10 flex flex-col justify-between bg-[#0a0a0a] hover:bg-black transition-colors group relative min-h-[200px] lg:min-h-0 text-white outline-none">
              <div className="flex justify-end text-gray-600 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-2">Contact</h3>
                <p className="text-sm text-gray-400">Start your next project</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ARCHITECTURE SECTION 
      */}
      <div id="architecture-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pt-24 md:pt-40 pb-24 relative z-10">

        {/* Typography Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-24 md:mb-40">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">01 / Index</p>
            <div className="flex flex-col gap-6">
              <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
                Engineering spatial digital platforms and immersive web architectures.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-semibold mt-4">
                Scroll
                <iconify-icon icon="solar:arrow-down-linear" width="14" height="14" className="animate-bounce" />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-10 order-1 md:order-2">
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
              <RevealText text="Constructing Scalable Environments" />
            </h2>
          </div>
        </section>

        {/* Architectural Imagery Block */}
        {/* <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 md:mb-40">
          <div className="hidden md:block col-span-2 border-t border-gray-200 pt-4 relative">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold absolute top-8 left-0 origin-top-left -rotate-90 translate-y-24">Facade</p>
          </div>
          <div className="col-span-1 md:col-span-10 relative h-[50vh] md:h-[75vh] w-full overflow-hidden bg-gray-200 group">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/890403d8-9a92-467c-974f-3ad4b2ebfac6_3840w.webp"
              alt="Minimalist glass office overlooking misty fjord"
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
          </div>
        </section> */}
        <div className="flex-1 relative overflow-hidden">
          <ScrollSequence
            currentFrame={currentFrame}
          />
        </div>

        {/* Service & Capabilities Rows */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          <div className="hidden md:block col-span-3 border-t border-gray-200 pt-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">02 / Capabilities</p>
          </div>

          <div className="col-span-1 md:col-span-9 flex flex-col">

            {/* Row: Selected Work */}
            <Link href="/projects" className="group block border-t border-gray-200 py-10 md:py-14 hover:bg-white transition-colors duration-500 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-500">Selected Archive</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-gray-500 leading-relaxed font-medium">
                  Review our documented case studies and technical implementations for forward-thinking brands.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

            {/* Row: Contact */}
            <Link href="/contact" className="group block border-t border-b border-gray-200 py-10 md:py-14 hover:bg-white transition-colors duration-500 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-500">Engage Studio</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-gray-500 leading-relaxed font-medium">
                  Initiate a dialogue regarding your upcoming digital infrastructure and structural requirements.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

          </div>
        </section>
      </div>

      {/* 
        METHODOLOGY SECTION 
        Adapted from the architectural layout pattern for the next segment
      */}
      <div id="methodology-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pb-24 relative z-10">

        {/* Typography Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-24 md:mb-40 pt-24 md:pt-32 border-t border-gray-200">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">03 / Methodology</p>
            <div className="flex flex-col gap-6">
              <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
                Systematic execution of complex technical and experiential requirements.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-10 order-1 md:order-2">
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
              <RevealText text="Precision Driven Engineering" />
            </h2>
          </div>
        </section>

        {/* Architectural Imagery Block */}
        {/* <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 md:mb-40">
          <div className="hidden md:block col-span-2 border-t border-gray-200 pt-4 relative">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold absolute top-8 left-0 origin-top-left -rotate-90 translate-y-24">Structure</p>
          </div>
          <div className="col-span-1 md:col-span-10 relative h-[50vh] md:h-[75vh] w-full overflow-hidden bg-gray-200 group">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d5ff7d-a314-4917-9656-0c7b086f591f_1600w.webp"
              alt="Abstract building facade looking up at the sky"
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
          </div>
        </section> */}
        <div className="flex-1 relative overflow-hidden">
          <ScrollSequence
            currentFrame={currentFrame}
          />
        </div>

        {/* Systems Rows */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          <div className="hidden md:block col-span-3 border-t border-gray-200 pt-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">04 / Systems</p>
          </div>

          <div className="col-span-1 md:col-span-9 flex flex-col">

            {/* Row: Platform Architecture */}
            <Link href="/platform" className="group block border-t border-gray-200 py-10 md:py-14 hover:bg-white transition-colors duration-500 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-500">Platform Specs</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-gray-500 leading-relaxed font-medium">
                  Deep dive into the technological stack and deployment strategies we utilize.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

            {/* Row: Labs */}
            <Link href="/labs" className="group block border-t border-b border-gray-200 py-10 md:py-14 hover:bg-white transition-colors duration-500 relative px-4 md:px-8 -mx-4 md:mx-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-500">Experimental Labs</h3>
                </div>
                <div className="col-span-1 md:col-span-4 text-sm text-gray-500 leading-relaxed font-medium">
                  Explore our internal prototypes and cutting-edge interaction models.
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end text-gray-300 group-hover:text-gray-900 transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </div>
            </Link>

          </div>
        </section>

      </div>
<ProductsSection />

      <FAQSection />
      
        <ContactForm />
     
    </main>
  );
}