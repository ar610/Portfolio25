
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
// src/components/Hero.jsx
import Profile from "../assets/Amal.png";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
export default function Hero(){
    return (
        <>
        <div className="relative">
      <Cursor />
      <div className="min-h-screen w-screen bg-[#14151C] text-white relative overflow-hidden">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        
          {/* Left Content */}
          <div className="max-w-xl absolute left-50 ">
            <h1 className="text-4xl md:text-8xl font-syne mb-4 ">
              Hi
              <br />I am <span className="text-cyan-400  font-syne">AMAL</span>
            </h1>
             
            <div className="space-y-3 mb-5 text-lg text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 transform rotate-45 hover:bg-cyan-400"></div>
                <span className="hover:text-cyan-400 transition-all duration-200 ">UI/UX Curious.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 transform rotate-45  "></div>
                <span className="hover:text-cyan-400 transition-all duration-200 " > Web Obsessed.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 transform rotate-45  hover:bg-cyan-400"></div>
                <span className="hover:text-cyan-400 transition-all duration-200 ">Forever Iterating.</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-5">
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Download Resume Button */}
            <button className="flex items-center space-x-3 px-6 py-3 bg-[#080B1B]  rounded-lg hover:border hover:border-white draw-border transition-all duration-200 group">
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>
          {/* Right Content - Profile Image Area */}

        {/* Circular Text Animation */}
        <div className="absolute bottom-60 right-20 z-10">
          <div
            className="absolute -top-80 -right-25 w-[100vh] h-[100vh]  z-10 animate-spin"
            style={{ animationDuration: "40s" }}
          >
            <svg className="w-full h-full" viewBox="0 0 600 600">
              <path
                id="circle"
                d="M 300, 300 m -250, 0 a 250,250 0 1,1 500,0 250,250 0 1,1 -500,0"
                fill="none"
              />
              <text className="text-xs fill-gray-400 font-light">
                <textPath href="#circle" startOffset="0%">
                  Forever Learning • UX Curious • Web Obsessed • Forever
                  Learning • UX Curious • Web Obsessed • Forever Learning • UX
                  Curious • Web Obsessed • Forever Learning • UX Curious • Web
                  Obsessed • Forever Learning • UX Curious • Web Obsessed •
                  Forever Learning • UX Curious • Web Obsessed •Forever Learning
                  • UX Curious • Web Obsessed • Forever Learning • UX Curious •
                  Web Obsessed •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        {/* Background Image */}
        <div className="absolute bottom-0 right-0 z-20">
          <img
            src={Profile}
            alt="Your Profile"
            className="w-auto h-[85vh] object-cover"
          />
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/6 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>
    </div>
        </>
    );
}