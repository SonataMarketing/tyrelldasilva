"use client";

import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function LightingPage() {
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
            <source src="/videos/Light control Banner  (1).mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/1200x688_LivingRoom_SeaholmPH_CC_Energize_B.jpg"
              alt="Beautifully lit living room with natural and artificial light integration"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="relative h-full flex items-center z-20">
          <div className="max-w-4xl px-4 lg:px-12 mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oswald uppercase text-white">
              The Light Environment
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Harmonizing natural and artificial light sources to create sustainable, energy-efficient, and human-centric environments.
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the page content stays the same */}
      <div className="bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Introduction Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald uppercase text-white">The Power of Light Environments</h2>
                <p className="text-gray-300 mb-6">
                  Light is one of the most powerful elements in architectural design, affecting everything from our psychological well-being to energy consumption. My approach to creating light environments goes beyond simple illumination to design spaces that respond to human needs while minimizing environmental impact.
                </p>
                <p className="text-gray-300 mb-6">
                  <span className="font-bold text-white">Our Philosophy:</span> The most effective light environments harmonize natural daylight with precision-controlled artificial lighting systems, creating spaces that flow with the natural rhythms of the day while maintaining optimal functionality.
                </p>
              </div>
              <div>
                <Image
                  src="/images/AdobeStock_458246442-scaled.jpeg"
                  alt="Modern interior space with balanced natural and artificial lighting"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Benefits of The Light Environment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Energy Efficiency</h3>
                <p className="text-gray-300">
                  Properly designed daylighting can reduce artificial lighting needs by up to 80%, significantly decreasing energy consumption. Our systems automatically adjust artificial lighting based on available natural light, optimizing energy use throughout the day.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Human-Centric Design</h3>
                <p className="text-gray-300">
                  Exposure to natural daylight cycles improves mood, productivity, and sleep quality. Our designs balance optimal daylight exposure with precise artificial lighting that supports circadian rhythms and creates comfortable, glare-free environments.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <div className="text-[#8B5CF6] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Cost Effectiveness</h3>
                <p className="text-gray-300">
                  While the initial investment in advanced lighting systems may be higher, the long-term benefits are substantial: reduced energy costs, increased property value, improved occupant well-being, and decreased maintenance expenses through the use of long-lasting LED technology.
                </p>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          {/* <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Our Technical Approach</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-oswald uppercase text-[#8B5CF6]">Daylighting Strategies</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Strategic Fenestration:</span> Optimizing window placement, size, and glazing properties to maximize daylight penetration while minimizing heat gain and glare.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Light Shelves & Reflectors:</span> Utilizing specialized architectural elements to redirect daylight deeper into interior spaces, improving light distribution.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Motorized Shading Systems:</span> Automated solar shading that responds to changing sun positions, protecting interiors while maximizing natural light.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-oswald uppercase text-[#8B5CF6]">Artificial Lighting Integration</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Smart Controls:</span> Advanced lighting management systems that automatically adjust artificial lighting based on daylight availability, occupancy, and time of day.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Tunable LED Systems:</span> Lighting that can adjust color temperature throughout the day to complement natural light and support human circadian rhythms.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Layered Lighting Design:</span> Creating multi-dimensional lighting environments that combine ambient, task, and accent lighting for optimal functionality and aesthetics.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section> */}

          {/* Case Studies Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Light Environment Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                <Image
                  src="/images/climate-building3.jpg"
                  alt="Office space with integrated natural and artificial lighting"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-oswald uppercase text-[#8B5CF6]">Commercial Applications</h3>
                  <p className="text-gray-300 mb-4">
                    Our light environment designs for commercial spaces enhance worker productivity, reduce operational costs, and create distinctive environments that reflect brand identity. Smart lighting controls provide granular management of energy use while supporting diverse work activities.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>Increased employee satisfaction and productivity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>Energy savings of 40-60% compared to conventional lighting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>LEED and WELL certification point contributions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                <Image
                  src="/images/climate-building1.jpg"
                  alt="Residential space with integrated natural and artificial lighting"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-oswald uppercase text-[#8B5CF6]">Residential Applications</h3>
                  <p className="text-gray-300 mb-4">
                    For homes, our light environment designs create personalized spaces that adapt to different activities, times of day, and seasons. We prioritize occupant comfort while incorporating energy-efficient technologies that seamlessly integrate with smart home systems.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>Enhanced visual comfort and living experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>Support for healthy sleep-wake cycles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-2">•</div>
                      <span>Reduced energy bills and environmental impact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          {/* <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Advanced Lighting Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Dynamic Glazing Systems</h3>
                <p className="text-gray-300">
                  Electrochromic and thermochromic glass technologies that automatically adjust tint based on external conditions, optimizing daylight while preventing heat gain and glare without blocking views.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Daylight Harvesting Controls</h3>
                <p className="text-gray-300">
                  Advanced sensor networks that continuously monitor natural light levels and automatically adjust artificial lighting in response, maintaining consistent illumination while minimizing energy use.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg transform transition duration-300 hover:translate-y-[-8px]">
                <h3 className="text-xl font-bold mb-3 font-oswald uppercase text-white">Biophilic Lighting Design</h3>
                <p className="text-gray-300">
                  Integration of plant life with lighting systems to create environments that mimic natural settings, combining the benefits of greenery with optimized illumination for enhanced wellbeing.
                </p>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </Layout>
  );
}
