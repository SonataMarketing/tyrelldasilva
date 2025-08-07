import React from 'react';

export default function QuoteSection() {
  return (
    <div className="bg-[#0D0D0D] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 text-center">
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 text-white leading-relaxed font-roboto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          "I believe a stronger society starts with unlocking the potential of everyone. When we invest in people, empower their ambitions, and give them the tools to thrive — we all go further, together."
        </h2>
        <div className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 bg-[#8B5CF6] mx-auto my-5 sm:my-6 md:my-7 lg:my-8 xl:my-5"></div>
        <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-400 uppercase tracking-wider font-medium">
          - Tyrell DaSilva
        </p>
      </div>
    </div>
  );
}
