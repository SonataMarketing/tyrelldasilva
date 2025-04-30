"use client";

import React from 'react';
import Link from 'next/link';

const ConsultationCTA = () => {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="relative w-full max-w-[600px] mx-auto mb-4">
        <div className="w-full flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#8B5CF6] tracking-wider">BOOK A CONSULTATION</h2>
            <div className="h-1 w-40 bg-[#8B5CF6] mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 uppercase">Transform Your Vision Into Reality</h3>
      <p className="text-gray-400 mb-8 max-w-xl">
        Whether you're looking to elevate your space with premium window fashions,
        build sustainably in climate-sensitive areas, or implement AI strategies for
        your business, Tyrell is ready to help you achieve exceptional results.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="bg-[#8B5CF6] text-white font-bold py-4 px-8 rounded hover:bg-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
        >
          Schedule Now
        </Link>
        <a
          href="tel:+15877778800"
          className="border border-[#8B5CF6] text-white font-bold py-4 px-8 rounded hover:bg-[#8B5CF6]/20 transition-all duration-300"
        >
          Call: (587) 777-8800
        </a>
      </div>

      <div className="mt-8 text-sm text-gray-500 max-w-lg">
        Consultations are available in-person or virtually. Book today and discover
        how Tyrell's expertise can bring your project to the next level of excellence.
      </div>
    </div>
  );
};

export default ConsultationCTA;
