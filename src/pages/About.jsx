import React from 'react';
import Nav from '../components/Nav';
export default function AmalRajLanding() {
  const handleDownloadResume = () => {
    console.log('Download resume clicked');
  };

  return (
    <>
     
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 via-black to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-0.5 mt-8">
          <h1 className="text-6xl font-bold text-gray-900 ">
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
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
            I'm Amal Raj, someone who enjoys designing clean user interfaces and building 
            web experiences that work well and feel right. I love exploring UI/UX and web 
            technologies, and I'm always curious to learn and improve. Whether it's 
            designing in Figma or coding in React, I enjoy the process of creating things 
            that are both useful and beautiful.
          </p>
        </div>

        {/* Download Button */}
        <div >
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <svg 
              className="w-5 h-5" 
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
            Download Resume
          </button>
        </div>
      </div>
    </div>
    </>
  );
}