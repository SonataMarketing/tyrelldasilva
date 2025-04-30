"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logo image with increased size (now 87.5% larger than original) and transparent background
  const logo = (
    <Image
      src="/images/Tyrell_Varaint_logos.png"
      alt="Tyrell Dasilva Logo"
      width={188}
      height={188}
      className="object-contain"
      priority
    />
  );

  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="fixed left-0 top-0 h-full bg-black/65 text-white w-64 z-40 flex flex-col items-center pt-8 border-r border-zinc-800 hidden md:flex">
        {/* Logo */}
        <Link href="/" className="mb-10 group">
          <div className="relative h-44 w-44 flex items-center justify-center bg-transparent transition-transform duration-300 group-hover:scale-105">
            {logo}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
          </div>
        </Link>
        {/* Nav Links */}
        <nav className="flex-1 w-full flex flex-col items-stretch space-y-6 px-4">
          <Link
            href="/projects"
            className="group relative gary-nav-link font-bold text-lg text-white py-3 px-4 rounded transition-all duration-300 border-b border-zinc-800 pb-4 hover:border-[#8B5CF6]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">AI ADOPTION + STRATEGY CONSULTING</span>
          </Link>
          <Link
            href="/lighting"
            className="group relative gary-nav-link font-bold text-lg text-white py-3 px-4 rounded transition-all duration-300 border-b border-zinc-800 pb-4 hover:border-[#8B5CF6]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">THE LIGHT ENVIRONMENT</span>
          </Link>
          <Link
            href="/services"
            className="group relative gary-nav-link font-bold text-lg text-white py-3 px-4 rounded transition-all duration-300 border-b border-zinc-800 pb-4 hover:border-[#8B5CF6]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">BUILDING IN CLIMATE SENSITIVE AREAS</span>
          </Link>
          <Link
            href="/contact"
            className="group relative gary-nav-link font-bold text-lg text-white py-3 px-4 rounded transition-all duration-300 hover:border-[#8B5CF6]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">CONTACT</span>
          </Link>
        </nav>

        {/* Social icons -- Desktop */}
        <div className="flex space-x-5 mt-auto mb-8">
          <Link
            href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541"
            className="group text-white transition-colors duration-300 hover:text-[#8B5CF6]"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 transition-all duration-300 group-hover:shadow-[0_0_8px_#8B5CF6]"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/tyrelldasilva/"
            className="group text-white transition-colors duration-300 hover:text-[#8B5CF6]"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 transition-all duration-300 group-hover:shadow-[0_0_8px_#8B5CF6]"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@SonataDesign"
            className="group text-white transition-colors duration-300 hover:text-[#8B5CF6]"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 transition-all duration-300 group-hover:shadow-[0_0_8px_#8B5CF6]"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>
        </div>
      </aside>

      {/* Mobile menu button, only displayed on small screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-[#8B5CF6] transition-colors fixed left-5 top-6 z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-65 z-50 flex flex-col items-center justify-center px-8">
          <div className="mb-8">
            <Link href="/" onClick={toggleMenu} className="group">
              <div className="relative h-32 w-32 flex items-center justify-center bg-transparent mx-auto transition-transform duration-300 group-hover:scale-105">
                {logo}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </Link>
          </div>
          <nav className="space-y-10 flex flex-col items-center w-full max-w-xs">
            <Link
              href="/projects"
              className="group relative gary-nav-link text-2xl text-center border-b border-zinc-800 pb-4 w-full transition-all duration-300 hover:border-[#8B5CF6]/30"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">AI ADOPTION + STRATEGY CONSULTING</span>
            </Link>
            <Link
              href="/lighting"
              className="group relative gary-nav-link text-2xl text-center border-b border-zinc-800 pb-4 w-full transition-all duration-300 hover:border-[#8B5CF6]/30"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">THE LIGHT ENVIRONMENT</span>
            </Link>
            <Link
              href="/services"
              className="group relative gary-nav-link text-2xl text-center border-b border-zinc-800 pb-4 w-full transition-all duration-300 hover:border-[#8B5CF6]/30"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">BUILDING IN CLIMATE SENSITIVE AREAS</span>
            </Link>
            <Link
              href="/contact"
              className="group relative gary-nav-link text-2xl text-center w-full transition-all duration-300"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8B5CF6]">CONTACT</span>
            </Link>
          </nav>
          <div className="flex space-x-8 mt-8">
            <Link
              href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541"
              className="text-white transition-colors duration-300 hover:text-[#8B5CF6] hover:shadow-[0_0_8px_#8B5CF6]"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
            <Link
              href="https://www.instagram.com/tyrelldasilva/"
              className="text-white transition-colors duration-300 hover:text-[#8B5CF6] hover:shadow-[0_0_8px_#8B5CF6]"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@SonataDesign"
              className="text-white transition-colors duration-300 hover:text-[#8B5CF6] hover:shadow-[0_0_8px_#8B5CF6]"
              aria-label="YouTube"
            >
              YouTube
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
