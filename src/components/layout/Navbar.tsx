"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logo image optimized with better sizing and proportions
  const logo = (
    <Image
      src="/images/Tyrell_Varaint_logos.png"
      alt="Tyrell Dasilva Logo"
      width={160}
      height={160}
      className="object-contain"
      priority
    />
  );

  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="fixed left-0 top-0 h-full bg-gradient-to-b from-black/80 to-black/70 backdrop-blur-sm text-white w-72 z-40 flex flex-col items-center border-r border-zinc-700/50 shadow-2xl hidden md:flex">
        {/* Logo Section with improved spacing */}
        <div className="flex flex-col items-center pt-8 pb-2 border-b border-zinc-700/30 w-full">
          <Link href="/" className="group">
            <div className="relative h-36 w-36 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-[#8B5CF6]/20">
              {logo}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </Link>
          <div className="mt-4 text-center">
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Tyrell Dasilva</h2>
            <p className="text-xs text-gray-400 mt-1">Strategic Consultant</p>
          </div>
        </div>

        {/* Navigation Links with improved typography and spacing */}
        <nav className="flex-1 w-full flex flex-col px-6 py-6 space-y-4 items-center">
          <Link
            href="/projects"
            className="group relative flex justify-center items-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:shadow-md w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 text-center">
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6]  decoration-2 underline-offset-2 leading-tight">AI ADOPTION</span>
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 leading-tight">+ STRATEGY</span>
            </div>
          </Link>

          <Link
            href="/lighting"
            className="group relative flex justify-center items-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:shadow-md w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 text-center">
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6]  decoration-2 underline-offset-2 leading-tight">THE LIGHT</span>
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 leading-tight">ENVIRONMENT</span>
            </div>
          </Link>

          <Link
            href="/services"
            className="group relative flex justify-center items-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:shadow-md w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 text-center">
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6]  decoration-2 underline-offset-2 leading-tight">EMPOWER</span>
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 leading-tight">PROJECTS</span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group relative flex justify-center items-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:shadow-md w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 text-center">
              <span className="block font-bold text-base transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 leading-tight">CONTACT ME</span>
            </div>
          </Link>
        </nav>

        {/* Social Icons Section with improved layout */}
        <div className="border-t border-zinc-700/30 w-full px-6 py-6">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/tyrelldasilva/"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@SonataDesign"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile menu button with improved positioning */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-[#8B5CF6] transition-colors fixed left-4 top-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-zinc-700/50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu drawer - More compact and responsive */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center px-6">
          {/* Logo Section */}
          <div className="mb-8">
            <Link href="/" onClick={toggleMenu} className="group">
              <div className="relative h-24 w-24 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl mx-auto transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">
                {logo}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>
            <div className="mt-3 text-center">
              <h2 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Tyrell Dasilva</h2>
            </div>
          </div>

          {/* Navigation Links - More compact */}
          <nav className="space-y-6 flex flex-col items-center w-full max-w-sm">
            <Link
              href="/projects"
              className="group relative p-3 rounded-lg w-full text-center transition-all duration-300 hover:bg-white/5"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">AI ADOPTION</span>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">+ STRATEGY</span>
              <span className="relative z-10 text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-all block">Strategic consulting</span>
            </Link>

            <Link
              href="/lighting"
              className="group relative p-3 rounded-lg w-full text-center transition-all duration-300 hover:bg-white/5"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">THE LIGHT</span>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">ENVIRONMENT</span>
              <span className="relative z-10 text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-all block">Lighting design</span>
            </Link>

            <Link
              href="/services"
              className="group relative p-3 rounded-lg w-full text-center transition-all duration-300 hover:bg-white/5"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">EMPOWER</span>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">PROJECTS</span>
              <span className="relative z-10 text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-all block">Climate building</span>
            </Link>

            <Link
              href="/contact"
              className="group relative p-3 rounded-lg w-full text-center transition-all duration-300 hover:bg-white/5"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 text-lg font-bold transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:underline decoration-[#8B5CF6] decoration-2 underline-offset-2 block">CONTACT</span>
              <span className="relative z-10 text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-all block">Get in touch</span>
            </Link>
          </nav>

          {/* Social Media Links - Improved with icons */}
          <div className="flex justify-center space-x-4 mt-8 p-3 bg-black/20 backdrop-blur-sm rounded-xl border border-zinc-700/50">
            <Link
              href="https://www.linkedin.com/in/tyrell-dasilva-b15bb541"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/tyrelldasilva/"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@SonataDesign"
              className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:scale-110"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#8B5CF6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
