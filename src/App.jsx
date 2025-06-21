import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cursor from './components/Cursor';

// src/components/Hero.jsx
import Profile from './assets/Amal.png';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';

function App() {
  return (
    <div className='relative'>
      <Cursor />
    <div className="min-h-screen w-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 border border-gray-700 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border border-gray-700 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      {/* Navigation */}
      <nav className="flex justify-center pt-8 pb-16">
        <div className="flex items-center space-x-8 px-8 py-3 border border-gray-600 rounded-full backdrop-blur-sm bg-gray-800/30">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 flex items-center justify-between min-h-[60vh]">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-6xl md:text-7xl font-light mb-4">
            Hi<br />
            I am <span className="text-cyan-400 font-medium">AMAL</span>
          </h1>
          
          <div className="space-y-3 mb-12 text-lg text-gray-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 transform rotate-45"></div>
              <span>UI/UX Curious.</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 transform rotate-45"></div>
              <span>Web Obsessed.</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 transform rotate-45"></div>
              <span>Forever Iterating.</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-12">
            <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200">
              <Instagram size={24} />
            </a>
          </div>

          {/* Download Resume Button */}
          <button className="flex items-center space-x-3 px-6 py-3 bg-transparent border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 group">
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Right Content - Profile Image Area */}
        <div className="flex-1 flex justify-end items-center relative">
          <div className="relative">
            {/* Circular text animation */}
            <div className="absolute -top-70 -right-60 w-[50vw] h-[50vw]  z-10 animate-spin" style={{animationDuration: '20s'}}>
              <svg className="w-full h-full" viewBox="0 0 600 600">
                <path 
                  id="circle" 
                  d="M 300, 300 m -250, 0 a 250,250 0 1,1 500,0 250,250 0 1,1 -500,0"
                  fill="none"
                />
                <text className="text-xs fill-gray-500 font-light">
                  <textPath href="#circle" startOffset="0%">
                    Forever Learning • UX Curious • Web Obsessed •  Forever Learning • UX Curious • Web Obsessed • Forever Learning • UX Curious • Web Obsessed •  Forever Learning • UX Curious • Web Obsessed • Forever Learning • UX Curious • Web Obsessed •  Forever Learning • UX Curious • Web Obsessed •Forever Learning • UX Curious • Web Obsessed •  Forever Learning • UX Curious • Web Obsessed •
                  </textPath> 
                </text>
              </svg>
            </div>
            
            {/* Profile placeholder - you can replace this with an actual image */}
             
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-20">
  <img
  src={Profile}
  alt="Your Profile"
  className="w-auto h-[90vh] object-cover"
/>
</div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-1/6 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
    </div>
    </div>
  );
}

export default App
