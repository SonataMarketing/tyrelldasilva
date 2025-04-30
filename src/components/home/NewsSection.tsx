import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'Digital Transformation Solutions',
    image: 'https://ext.same-assets.com/2460879115/1701754211.webp',
    link: '/digital-transformation',
    badge: "WHAT'S NEW"
  },
  {
    id: 2,
    title: 'The Future of Sustainable Architecture: Climate-Responsive Design',
    image: 'https://ext.same-assets.com/2460879115/3849035198.webp',
    link: '/climate-responsive-design',
    badge: 'READ THIS',
    categories: ['Design', 'Sustainability', 'Architecture']
  },
  {
    id: 3,
    title: 'Smart Lighting Integration for Modern Buildings',
    image: 'https://garyvaynerchuk.com/wp-content/uploads/2024/10/Article_Oct21_Twitter_v2.jpg',
    link: '/smart-lighting',
    categories: ['Technology', 'Light Integration']
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-[#141516]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="inline-block mb-10 bg-[#f1ca3b] text-black font-bold uppercase text-xl px-3 py-1">
          WHAT'S NEW
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <div className="bg-black overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />

                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-[#f1ca3b] text-black font-bold uppercase text-xs px-2 py-1">
                      {item.badge}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {item.categories && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.categories.map((category, idx) => (
                        <span key={idx} className="text-xs text-gray-400">
                          {category}
                          {idx < item.categories.length - 1 && ' • '}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-xl font-bold group-hover:text-[#f1ca3b] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
