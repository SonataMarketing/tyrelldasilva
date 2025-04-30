"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConsultationCTA from './ConsultationCTA';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Consultation CTA Section */}
        <ConsultationCTA />

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <Link
            href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541"
            className="group relative transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/30 opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
            <Image
              src="https://ext.same-assets.com/2460879115/3619512037.png"
              alt="LinkedIn"
              width={36}
              height={36}
              unoptimized
              priority
              className="relative z-10 transform transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.instagram.com/tyrelldasilva/"
            className="group relative transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/30 opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
            <Image
              src="https://ext.same-assets.com/2460879115/1807712311.png"
              alt="Instagram"
              width={36}
              height={36}
              unoptimized
              priority
              className="relative z-10 transform transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@SonataDesign"
            className="group relative transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/30 opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
            <Image
              src="https://ext.same-assets.com/2460879115/3653008664.png"
              alt="YouTube"
              width={36}
              height={36}
              unoptimized
              priority
              className="relative z-10 transform transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">©Tyrell Dasilva, LLC 2024</p>
          <div className="flex justify-center space-x-2">
            <Link href="/privacy-policy" className="hover:text-[#8B5CF6] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-use" className="hover:text-[#8B5CF6] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
