import React from 'react';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowNavbar(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 hidden md:block ${
          showNavbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center space-x-8 px-8 py-3 border border-gray-600 rounded-full backdrop-blur-sm bg-black/60">
          <button
            onClick={() => scrollToSection('about')}
            className="relative text-white group cursor-pointer bg-transparent border-none"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="relative text-white group cursor-pointer bg-transparent border-none"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="relative text-white group cursor-pointer bg-transparent border-none"
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative text-white group cursor-pointer bg-transparent border-none"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-4 right-4 z-50 transition-opacity duration-500 md:hidden ${
          showNavbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="relative z-50 p-3 border border-gray-600 rounded-full backdrop-blur-sm bg-black/60 text-white"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Fullscreen */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm bg-black/90 z-40">
            <div className="flex flex-col space-y-8 text-center">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-200"
              >
                Projects
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}