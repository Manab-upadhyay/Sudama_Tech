import Image from "next/image";
import { HeroParallaxDemo } from "@/components/parellex";
import ScrollingLogos from "@/components/infinitescroll";
import { TextRevealCardPreview } from "@/components/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">All-Rounded Technology Company</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            We are not just a company, we are a vision to rennovate software and hardware technologies. We also work as
            an agency and provide solutions on various topics. Have an awesome idea to get started?
          </p>
          <Link href={'/contact'}><button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
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
          </button></Link>
        </div>
        <div className="relative">
          <img
            src="https://www.cybersync-technologies.com/_astro/hero.6fdd0dc6_WxIWw.webp"
            alt="Astronaut with rocket illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    <HeroParallaxDemo></HeroParallaxDemo>
    <ScrollingLogos></ScrollingLogos>
    <TextRevealCardPreview></TextRevealCardPreview>
   
    </>
  );
}
