import React, { useEffect, useState } from "react";
import Amal2 from "../assets/Amal2.png";

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1f8Nr2i_I-TgQOoegrRchHgtMwJJsEZjN/view?usp=sharing"; // replace with your ID
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate transform based on scroll position - made less aggressive

  return (
    <div
      id="about"
      className="relative z-30 min-h-screen  flex lg:flex-row flex-col items-center justify-center p-8 transition-transform duration-300 ease-out "
    >
      {/* Image */}
      <div className="lg:w-[50vw] w-[70vw]  flex justify-center items-center mt-24 lg:mb-16 mb:8">
        <div className="w-[70vw] flex justify-center items-center">
          <div>
            <img
              src={Amal2}
              alt="Your Profile"
              className="lg:w-auto lg:h-[60vh] w-[80vw] h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="w-[70vw] lg:w-[40vw] flex flex-col items-center justify-center mx-auto lg:text-left text-center space-y-8 mt-24 mb-16">
        <div className="lg:pr-8 pr-0">
          {/* Main Heading */}
          <div className="space-y-0.5 ">
            <h1 className="w-full flex justify-center items-center lg:hidden text-2xl md:text-8xl font-syne mb-4 text-center bg-black bg-clip-text text-transparent">
              Hi, I am
            </h1>
            <h1 className="w-full flex justify-center items-center lg:hidden text-4xl md:text-8xl font-syne mb-4 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              AMAL RAJ R
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mt-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              I'm Amal Raj, someone who enjoys designing clean user interfaces
              and building web experiences that work well and feel right. I love
              exploring UI/UX and web technologies, and I'm always curious to
              learn and improve. Whether it's designing in Figma or coding in
              React, I enjoy the process of creating things that are both useful
              and beautiful.
            </p>
          </div>

          {/* Download Button */}
          <div className="mt-8">
            <button
              onClick={handleDownloadResume}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-4 rounded-xl text-lg font-semibold overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="relative z-10 w-10 h-10 group-hover:animate-bounce"
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
