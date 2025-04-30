import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[#8B5CF6] text-white text-center py-2 fixed top-0 left-0 w-full z-40 lg:ml-[170px] lg:w-[calc(100%-170px)]">
      <Link
        href="/contact"
        className="text-sm font-bold hover:underline"
      >
        Book a consultation with Tyrell Dasilva today!
      </Link>
    </div>
  );
};

export default Banner;
