"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  const onThumbnailClick = () => {
    setLoaded(true);
  };

  // Get thumbnail URL from YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
      {!loaded ? (
        <button
          onClick={onThumbnailClick}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0">
            <Image
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
