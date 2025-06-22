import React, { useEffect, useState } from 'react';
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import Profile from "../assets/Amal.png";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate opacity and scale based on scroll position
    const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
    const opacity = 1 - scrollProgress * 0.7; // Dims to 30% opacity
    const scale = 1 - scrollProgress * 0.1; // Scales down to 90%
    const blur = scrollProgress * 3; // Adds blur effect

    return (
        <>
            <div className="relative">
                <Cursor />
                {/* Fixed Hero Section with Dynamic Effects */}
                <div 
                    className="fixed top-0 left-0 w-full h-screen bg-[#14151C] text-white overflow-hidden z-10 transition-all duration-300"
                    style={{
                        opacity: opacity,
                        transform: `scale(${scale})`,
                        filter: `blur(${blur}px)`,
                    }}
                >
                    {/* Navigation */}
                    <Nav />

                    {/* Main Content */}
                    {/* Left Content */}
                    <div className="max-w-xl absolute left-50 top-90 transform -translate-y-1/2">
                        <h1 className="text-4xl md:text-8xl font-syne mb-4">
                            Hi
                            <br />I am <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">AMAL</span>
                        </h1>
                        
                        <div className="space-y-3 mb-5 text-lg text-gray-300">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 transform rotate-45 hover:bg-cyan-400"></div>
                                <span className="hover:text-cyan-400 transition-all duration-200">UI/UX Curious.</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 transform rotate-45"></div>
                                <span className="hover:text-cyan-400 transition-all duration-200">Web Obsessed.</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 transform rotate-45 hover:bg-cyan-400"></div>
                                <span className="hover:text-cyan-400 transition-all duration-200">Forever Iterating.</span>
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
                        <button className="flex items-center space-x-3 px-6 py-3 bg-[#080B1B] rounded-lg hover:border hover:border-white draw-border transition-all duration-200 group">
                            <Download size={20} className="group-hover:animate-bounce" />
                            <span>Download Resume</span>
                        </button>
                    </div>

                    {/* Circular Text Animation */}
                    <div className="absolute bottom-60 right-20 z-10">
                        <div
                            className="absolute -top-80 -right-25 w-[100vh] h-[100vh] z-10 animate-spin"
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

                {/* Dark overlay that appears during scroll */}
                <div 
                    className="fixed top-0 left-0 w-full h-screen bg-black pointer-events-none z-15"
                    style={{
                        opacity: scrollProgress * 0.5,
                        transition: 'opacity 0.3s ease-out'
                    }}
                ></div>

                {/* Spacer div to maintain scroll height */}
                <div className="h-screen"></div>
            </div>
        </>
    );
}