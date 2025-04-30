"use client";

import React, { useRef, useEffect } from 'react';

// Updated client reviews data with new images
const clientReviews = [
  {
    id: 1,
    name: "Nav Dhaliwal",
    company: "Residential Client",
    position: "Homeowner",
    image: "/images/testimonials/nav-dhaliwal.jpg",
    review: "One of the most professional companies I have encountered, they exceeded all of my expectations. I was completely unaware of their presence until they left, and they installed remarkable blinds that have significantly improved our home's aesthetic."
  },
  {
    id: 2,
    name: "Navila Hasan",
    company: "Residential Client",
    position: "Homeowner",
    image: "/images/testimonials/navila-hasan.jpg",
    review: "Tyrell and his team have been fantastic! They really understood my need and the vision I had for our house. They helped me pick out the fabrics to create a seamless look. Tyrell was quick in responding to any questions I had and he was great in working with the timeline I had provided. Overall, very happy with their service."
  },
  {
    id: 3,
    name: "Emera Howden-Gareau",
    company: "Design Client",
    position: "Interior Designer",
    image: "/images/testimonials/emera-howden.jpg",
    review: "Tyrell is absolutely incredible! His support, knowledge, and passion for design truly set him apart. As an interior designer, I know how fast this industry evolves, and having professionals like Tyrell on your team makes all the difference. His expertise and enthusiasm make every project more exciting and seamless."
  },
  {
    id: 4,
    name: "Janet Edwards",
    company: "Residential Client",
    position: "Homeowner",
    image: "/images/testimonials/janet-edwards.jpg",
    review: "Tyrell is such a professional. Blinds are overwhelming and he made it all make sense and guided us through the process in a way that made it stress free. Installation was included and we are very happy. Would highly recommend."
  }
];

const ClientReviewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling effect (will be disabled when user interacts)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    let isHovering = false;

    const scroll = () => {
      if (scrollContainer && !isHovering) {
        scrollPos += 0.5; // Adjust speed here
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling animation
    animationId = requestAnimationFrame(scroll);

    // Pause scrolling on hover/touch
    const handleMouseEnter = () => { isHovering = true; };
    const handleMouseLeave = () => { isHovering = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleMouseEnter);
    scrollContainer.addEventListener('touchend', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('touchstart', handleMouseEnter);
        scrollContainer.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-[#141516]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="inline-block mb-10 bg-[#8B5CF6] text-white font-bold uppercase text-xl px-3 py-1">
          CLIENT REVIEWS
        </h2>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 min-w-max">
            {clientReviews.map((review) => (
              <div
                key={review.id}
                className="group w-80 md:w-96 flex-shrink-0 bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg snap-center
                transition-all duration-300 ease-in-out
                hover:translate-y-[-8px] hover:shadow-xl hover:shadow-[#8B5CF6]/20
                hover:border-[#8B5CF6]/30 hover:scale-[1.02]
                border border-transparent"
              >
                <div className="p-6 h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-[#8B5CF6]/70 transition-colors duration-300">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors duration-300">{review.name}</h3>
                      <p className="text-sm text-gray-400">{review.position}</p>
                      <p className="text-sm text-[#8B5CF6] group-hover:text-[#A17AFB] transition-colors duration-300">{review.company}</p>
                    </div>
                  </div>

                  <div className="mb-4 relative z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B5CF6] group-hover:text-[#A17AFB] transition-colors duration-300 mb-2">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor" />
                    </svg>
                    <p className="text-gray-300 italic group-hover:text-white transition-colors duration-300">{review.review}</p>
                  </div>

                  <div className="flex relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#A17AFB] transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400">Swipe or drag to see more reviews</p>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
