"use client";

import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[70vh] overflow-hidden mt-0">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/Empower_Website_Banner.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/climate-building1.jpg"
              alt="Empower Projects Construction"
              fill
              className="object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative h-full flex items-center z-20">
          <div className="max-w-4xl px-4 lg:px-12 mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oswald uppercase text-white">
              Empower Projects
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Revolutionary building systems that withstand extreme weather while promoting sustainability, efficiency, and resilience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              Start Your Building Project
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Company Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Company Overview</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  Empower Projects originated from a concept aimed at introducing modern, affordable, and notably durable construction methods, initially targeting markets in the Caribbean and South America. The company emphasizes its commitment to durability, citing the resilience of its structures during Hurricane Dorian even when only partially complete, which served to galvanize the founder's vision. Key tenets of their approach include process transparency, detailed specifications, adherence to budget and timelines, and operating with integrity.
                </p>
              </div>
              {/* Photo removed for layout simplification */}
              <div />
            </div>
          </section>

          {/* Simplified YouTube Video Link Button */}
          <div className="w-full max-w-lg mx-auto mb-10">
            <a
              href="https://www.youtube.com/watch?v=h3dHJWGvSrU"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-center shadow-md transition-colors"
            >
              <span className="flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Empower Building System Demo on YouTube
              </span>
            </a>
          </div>

          {/* Removed YouTube Video Info Box per request */}

          {/* The Empower Building System */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">The Empower Building System</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg mb-8">
              <p className="text-gray-300 mb-6">
                The core of Empower Projects' offering is a distinct building system characterized by the use of 5.5-inch thick expanded polystyrene (EPS, commonly known as Styrofoam) panels integrated with 16-gauge steel studs placed 16 inches on center. This composite panel forms the structural wall system. A key feature is that the system is bolted directly to a concrete pad foundation, and notably, it does not require the inclusion of concrete or reinforcing steel (rebar) within the walls themselves.
              </p>
              <p className="text-gray-300">
                Structurally, the system boasts a significant rating, capable of withstanding 146 pounds per square foot (PSF) of transverse wind load. This rating substantially exceeds the threshold for a Category 5 hurricane, which is rated at 63 PSF, indicating a high degree of inherent structural strength. The system offers flexibility in foundation design, allowing for construction on either a traditional concrete slab-on-grade or on suspended foundations. This adaptability is particularly relevant for sites with specific constraints, including potential flood risk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Modern Finishes column */}
              <div className="flex flex-col items-center bg-[#181818] rounded-lg p-6 min-h-[540px]">
                <a
                  href="https://simplebooklet.com/71CkcFuhN9cbIkT1PbPpD6?source=forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs mb-3 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="https://simplebooklet.com/thumbs/71CkcFuhN9cbIkT1PbPpD6.jpg"
                    alt="Modern Finishes Booklet"
                    className="w-full object-cover rounded"
                  />
                </a>
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-xl font-bold mb-2 font-oswald uppercase text-[#8B5CF6] text-center">Modern Finishes</h3>
                  <p className="text-gray-300 text-center">
                    Internally, Empower Projects specifies modern, luxurious finishes, including stone countertops, engineered flooring, and stainless steel appliances. Materials for the projects are sourced internationally, drawing from suppliers in both North America and Asia.
                  </p>
                </div>
              </div>
              {/* Turnkey Solutions column */}
              <div className="flex flex-col items-center bg-[#181818] rounded-lg p-6 min-h-[540px]">
                <a
                  href="https://simplebooklet.com/Z9cMEvTlbP3a83aShStBS6?source=forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[145%] min-w-[140px] max-w-full mb-3 rounded overflow-hidden shadow-md"
                >
                  <img
                    src="https://simplebooklet.com/thumbs/Z9cMEvTlbP3a83aShStBS6.jpg"
                    alt="Turnkey Packages Booklet"
                    className="w-full object-cover rounded"
                  />
                </a>
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-xl font-bold mb-2 font-oswald uppercase text-[#8B5CF6] text-center">Turnkey Solutions</h3>
                  <p className="text-gray-300 text-center">
                    The company emphasizes a construction process focused on detailed specifications and transparent costing. We also offer turnkey packages, including options for professionally designed furnishing packages, window coverings, and home automation, providing a hassle-free, move-in ready experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Environmental and Efficiency Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Environmental and Efficiency Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Superior Insulation</h3>
                <p className="text-gray-300">
                  The substantial 5.5-inch thickness of the EPS foam panels provides a high level of thermal insulation, achieving an energy rating exceeding R40 for exterior walls. This high R-value significantly reduces thermal transfer, critical for maintaining comfortable indoor temperatures and minimizing energy consumption.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Eco-Friendly Materials</h3>
                <p className="text-gray-300">
                  From a materials perspective, the system utilizes recycled materials and has no off-gassing properties. This addresses concerns about indoor air quality and reduces the environmental footprint associated with virgin material extraction and processing.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Construction Efficiency</h3>
                <p className="text-gray-300">
                  The lightweight nature of the EPS and steel stud components offers efficiency advantages during construction. Easier handling leads to faster build times and potentially lower labor and equipment costs compared to heavier traditional materials.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="bg-[#1a1a1a] rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald uppercase text-white">Ready to Build Resilience?</h2>
                <p className="text-gray-300 mb-8">
                  Whether you're planning a new project in a climate-sensitive area or looking to retrofit an existing structure for greater resilience, we can help you navigate the complexities and create solutions that stand the test of time and nature.
                </p>
                <Link href="/contact" className="inline-block bg-[#8B5CF6] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#7C3AED] transition-colors">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
