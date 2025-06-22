import React, { useEffect, useState } from 'react';
import Amal2 from '../assets/Amal2.png';

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    console.log('Download resume clicked');
  };

  // Calculate transform based on scroll position
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const translateY = (1 - scrollProgress) * 100; // Slides up from bottom

  return (
    <div 
      className="relative z-20 min-h-screen bg-gradient-to-br from-purple-100 via-blue-50  to-indigo-100 flex flex-row items-center justify-center p-8 transition-transform duration-300 ease-out "
      style={{
        transform: `translateY(${translateY}vh)`,
      }}
    >
      <div className="w-[50vw] flex justify-center items-center">
        <div >
                                <img
                                    src={Amal2}
                                    alt="Your Profile"
                                    className="w-auto h-[60vh] object-cover"
                                />
                            </div>
      </div>
      <div className="w-[50vw] flex flex-col items-center justify-center mx-auto text-left space-y-8">
        <div className='pr-8'>
        {/* Main Heading */}
        <div className="space-y-0.5 ">
          <h1 className="text-6xl font-bold text-gray-900">
            Hi There,
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
            I am{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Amal Raj R
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mt-4">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
            I'm Amal Raj, someone who enjoys designing clean user interfaces and building
            web experiences that work well and feel right. I love exploring UI/UX and web
            technologies, and I'm always curious to learn and improve. Whether it's
            designing in Figma or coding in React, I enjoy the process of creating things
            that are both useful and beautiful.
          </p>
        </div>

        {/* Download Button */}
        <div className='mt-8'>
          <button
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  className="relative z-10 w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="relative z-10">Download Resume</span>
              </button>
        </div>
        </div>
      </div>
    </div>
  );
}