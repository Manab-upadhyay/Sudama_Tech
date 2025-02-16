"use client";
import Image from "next/image";
import { HeroParallaxDemo } from "@/components/parellex";
import ScrollingLogos from "@/components/infinitescroll";
import { TextRevealCardPreview } from "@/components/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import ServicesMobile from "@/components/mobile"; // ✅ Fixed Import
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on screen width
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              All-Rounded Technology Company
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We are not just a company, we are a vision to renovate software and hardware technologies. We also work as
              an agency and provide solutions on various topics. Have an awesome idea to get started?
            </p>
            <Link href={'/contact'}>
              <button className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto lg:mx-0 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://www.cybersync-technologies.com/_astro/hero.6fdd0dc6_WxIWw.webp"
              alt="Astronaut with rocket illustration"
              className="w-full h-auto max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Conditionally render the component based on screen size */}
      {isMobile ? <ServicesMobile /> : <HeroParallaxDemo />}

      <ScrollingLogos />
      <TextRevealCardPreview />
      
    </>
  );
}