"use client"
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';
import Image from 'next/image';

export default function ContactPage() {
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
      <div className="relative w-full h-[40vh] lg:h-[60vh] overflow-hidden mt-0">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
          8  <source src="/videos/Tyrell Banner Video V2.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/modern-office-hero-hq.jpg"
              alt="Modern office interior with large windows and city view"
              fill
              className="object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative h-full flex items-center z-20">
          <div className="max-w-4xl px-4 lg:px-12 mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oswald uppercase text-white">
              Contact Me
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Ready to discuss your project? 
              <br />
              Reach out today for expert consulting in climate-sensitive building design.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="bg-[#0e0e0e] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald uppercase text-white">Get In Touch</h2>
              <p className="text-gray-300 mb-6">
                Whether you're planning a new project in a climate-sensitive area or looking to retrofit an existing structure for greater resilience, I can help you navigate the complexities and create solutions that stand the test of time and nature.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-[#8B5CF6] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Email</h3>
                    <a href="mailto:contact@tyrelldasilva.com" className="text-gray-300 hover:text-[#8B5CF6] transition-colors">
                      contact@tyrelldasilva.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#8B5CF6] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Phone</h3>
                    <a href="tel:+15877778800" className="text-gray-300 hover:text-[#8B5CF6] transition-colors">
                      +1 (587) 777-8800
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#8B5CF6] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Location</h3>
                    <p className="text-gray-300">
                      Calgary, Alberta (Available for projects worldwide)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 font-oswald uppercase text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8B5CF6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/tyrelldasilva/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8B5CF6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@SonataDesign" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8B5CF6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
