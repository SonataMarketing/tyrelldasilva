"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] relative bg-black overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Tyrell_Website_Banner_V.2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content - Heading, Subheading and button */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 font-roboto leading-tight">
          Tyrell DaSilva
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-roboto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl leading-relaxed">
          From Builder to Automator — I Help Businesses Run Smarter, Scale Faster, and Sell for More
        </p>
        <Link href="/contact">
          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 rounded-md border-none cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8B5CF6]/30 shadow-[#8B5CF6]/25">
            Book a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
