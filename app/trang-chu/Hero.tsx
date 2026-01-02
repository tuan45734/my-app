"use client";

import { useState } from 'react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState<boolean>(true);

  const handleToggle = (): void => {
    setShowVideo(!showVideo);
  };

  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={handleToggle}
          className="bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all backdrop-blur-sm shadow-lg hover:scale-110"
        >
          {showVideo ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {showVideo ? (
        <div className="w-full h-auto aspect-video bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/NbWkmT79i5s?si=pwPrb7H0QqmlBipb&autoplay=1&mute=1&loop=1&playlist=NbWkmT79i5s&controls=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="w-full h-auto">
          <img 
            src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1763794770/hr-04_vixdqj.png" 
            alt="Hero Background"
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        <div 
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
            showVideo ? 'bg-white' : 'bg-gray-400'
          }`}
          onClick={() => setShowVideo(true)}
        />
        <div 
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
            !showVideo ? 'bg-white' : 'bg-gray-400'
          }`}
          onClick={() => setShowVideo(false)}
        />
      </div>
    </section>
  );
}