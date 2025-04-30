"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function AIAdoptionPage() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[70vh] overflow-hidden mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/consulting-hero.jpg"
            alt="Professional AI consulting session with team"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="relative h-full flex items-center z-20">
          <div className="max-w-4xl px-4 lg:px-12 mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oswald uppercase text-white">
              AI Adoption & Strategy
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert guidance to harness the transformative power of AI and digital technologies for your business growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Orchestrator Introduction */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald uppercase text-white">About Orchestrator</h2>
                <p className="text-gray-300 mb-6">
                  Orchestrator was founded on the belief that the transformative power of AI and digital technologies should be accessible and beneficial for businesses of all sizes. We are a dedicated agency focused on AI Strategy and Adoption, and broader Digital Transformation.
                </p>
                <p className="text-gray-300 mb-6">
                  <span className="font-bold text-white">Our Mission:</span> To empower organizations to confidently navigate the complexities of AI and digital change, turning potential into measurable performance and sustainable growth.
                </p>
              </div>
              <div>
                <Image
                  src="/images/P2599532-Enhanced-NR.jpg"
                  alt="Orchestrator AI Strategy"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-oswald uppercase text-white">Our Approach</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <p className="text-gray-300 mb-6">
                We combine deep expertise in AI capabilities (like agentic systems and RAG) with a pragmatic understanding of business operations, particularly the unique dynamics of SMBs. We know resources can be limited, and the need for clear ROI is critical. Our approach is collaborative and tailored – no generic solutions. We focus on:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Understanding Your Context:</span> Deeply analyzing your goals, processes, data landscape, and readiness.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Practical Strategy:</span> Developing achievable roadmaps and identifying high-value use cases.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Value-Driven Implementation:</span> Guiding the adoption of the right tools and processes, focusing on outcomes.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span><span className="font-bold text-white">Building Capability:</span> Empowering your teams through targeted training and knowledge sharing.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                We believe in building partnerships based on trust and transparency, helping you avoid common adoption mistakes and orchestrate a successful transformation journey.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald uppercase text-white">Tailored Services for Your AI & Transformation Journey</h2>
            <p className="text-gray-300 mb-8">
              We offer a suite of services designed to meet you where you are and guide you toward your goals. Our offerings are often modular, allowing you to engage based on your immediate needs and scale as you progress.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Strategy & Readiness */}
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-oswald uppercase text-[#8B5CF6]">AI Strategy & Readiness</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">AI Readiness Assessment:</span> Understand your organization's current state – culture, processes, data, technology – and identify prerequisites for successful AI adoption.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">AI Strategy & Roadmap Development:</span> Define a clear vision and actionable plan for leveraging AI, aligned with your business objectives.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">Use Case Identification & Prioritization:</span> Collaboratively discover and evaluate high-impact, feasible AI applications tailored to your specific challenges and opportunities.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AI Implementation & Enablement */}
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-oswald uppercase text-[#8B5CF6]">AI Implementation & Enablement</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">Solution Architecture & Design:</span> Define the technical blueprint for your AI solutions, focusing on practical integration and maintainability.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">AI Agent Strategy & Deployment:</span> Identify opportunities for AI agents, select appropriate platforms (low-code/no-code focus for accessibility).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#8B5CF6] mr-3 mt-1">•</div>
                      <div>
                        <span className="font-bold text-white">Data Analytics & Business Intelligence:</span> Leverage your data assets to drive insights and informed decision-making across your organization.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-oswald uppercase text-white text-center">AI & Digital Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-8 rounded-lg text-center transform transition duration-300 hover:translate-y-[-8px]">
                <div className="mx-auto mb-6 w-24 h-24">
                  <Image
                    src="/images/digital-transformation.png"
                    alt="AI Strategy Icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 font-oswald uppercase text-white">AI Strategy</h3>
                <p className="text-gray-300">
                  Expert guidance in developing comprehensive AI strategies aligned with your business goals, ensuring a clear path to value and sustainable adoption.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg text-center transform transition duration-300 hover:translate-y-[-8px]">
                <div className="mx-auto mb-6 w-24 h-24">
                  <Image
                    src="/images/enhance-profitability.png"
                    alt="AI Implementation Icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 font-oswald uppercase text-white">AI Implementation</h3>
                <p className="text-gray-300">
                  From proof-of-concept to full deployment, we guide your AI implementations with a focus on practical solutions and measurable outcomes.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-lg text-center transform transition duration-300 hover:translate-y-[-8px]">
                <div className="mx-auto mb-6 w-24 h-24">
                  <Image
                    src="/images/scaleable-growth.png"
                    alt="Digital Transformation Icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 font-oswald uppercase text-white">Digital Transformation</h3>
                <p className="text-gray-300">
                  Comprehensive support for your broader digital transformation initiatives, integrating AI as part of a cohesive technology strategy.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="bg-[#1a1a1a] rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald uppercase text-white">Ready to Transform Your Business with AI?</h2>
                <p className="text-gray-300 mb-8">
                  Whether you're just beginning your AI journey or looking to scale existing initiatives, Orchestrator provides the expertise and guidance you need to achieve meaningful results and sustainable growth.
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
