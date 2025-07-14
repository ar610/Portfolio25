import React, { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import Profile from "../assets/Amal.png";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { motion } from "framer-motion";

export function TypingSkills() {
  const skills = ["UI/UX Curious.", "Web Obsessed.", "Forever Iterating."];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;
    let isMounted = true;
    const currentSkill = skills[currentSkillIndex];

    if (!isDeleting) {
      if (currentText.length < currentSkill.length) {
        timeout = setTimeout(() => {
          if (isMounted)
            setCurrentText(currentSkill.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          if (isMounted) setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          if (isMounted)
            setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [currentText, isDeleting, currentSkillIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="space-y-3 mb-5 text-3xl text-gray-300">
      <div className="flex items-center space-x-3">
        <span className="hover:text-cyan-400 transition-all duration-200">
          {currentText}
          <span
            className={`ml-1 text-cyan-400 ${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-150`}
          >
            |
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const radius = 250;
  const d = `M 300,300 m -${radius},0 a ${radius},${radius} 0 1,1 ${
    radius * 2
  },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`;

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1hWodMeDzmasuC1AHjPuiL3B_ZnHVGPe6/view?usp=drive_link"; // replace with your ID
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll position
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const opacity = 1 - scrollProgress * 0.7; // Dims to 30% opacity
  const scale = 1 - scrollProgress * 0.1; // Scales down to 90%
  const blur = scrollProgress * 3; // Adds blur effect

  return (
    <>
      <div className="relative">
        {/* Fixed Hero Section with Dynamic Effects */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[#14151C] text-white overflow-hidden z-10 transition-all duration-300"
          style={{
            opacity: opacity,
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
          }}
        >
          {/* Main Content */}

          {/* Left Content */}
          <div className="absolute z-24 left-1/2 top-[25%] transform -translate-x-1/2 -translate-y-1/2 lg:left-50 lg:top-90 lg:translate-x-0 lg:translate-y-[-50%] lg:max-w-xl w-full">
            {/* Hi iam amal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              layout
            >
              <h1 className="hidden lg:block text-4xl md:text-8xl font-syne mb-4">
                Hi
                <br />I am{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  AMAL
                </span>
              </h1>
              <h1 className="w-full flex justify-center items-center lg:hidden text-3xl md:text-8xl font-syne mb-4 text-center bg-white bg-clip-text text-transparent">
  Hi, I am 
</h1>
<h1 className="w-full flex justify-center items-center lg:hidden text-6xl md:text-8xl font-syne mb-4 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
  AMAL
</h1>

            </motion.div>
            {/* Who am i */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              layout
            >
              <div className="hidden lg:block space-y-3 mb-5 text-lg text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 transform rotate-45 hover:bg-cyan-400"></div>
                  <span className="hover:text-cyan-400 transition-all duration-200">
                    UI/UX Curious.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 transform rotate-45"></div>
                  <span className="hover:text-cyan-400 transition-all duration-200">
                    Web Obsessed.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 transform rotate-45 hover:bg-cyan-400"></div>
                  <span className="hover:text-cyan-400 transition-all duration-200">
                    Forever Iterating.
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="w-full flex flex-row justify-center items-center  lg:hidden">
              <TypingSkills />
            </div>

            {/* Social Links*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              layout
            >
              {/* Social Links */}
              <div className="hidden lg:flex space-x-6 mb-5">
                <a
                  href="www.linkedin.com/in/amal-raj-r-0b1ab6292"
                  className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/ar610"
                  className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.instagram.com/pa_r_adox?igsh=MXAzNXZlNGN5eGNscw=="
                  className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>
            {/* Download Resume*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              layout
            >
              {/* Download Resume Button */}
              <button
                onClick={downloadResume}
                className="hidden lg:flex cursor-pointer  items-center space-x-3 px-6 py-3 bg-[#080B1B] rounded-lg hover:border hover:border-white draw-border transition-all duration-200 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Circular Text Animation */}
          <div
            className="absolute left-1/2 bottom-20 w-[30vw] transform -translate-x-1/2 z-10 
                lg:left-auto lg:right-20 lg:bottom-60 lg:translate-x-0"
          >
            {" "}
            <div
              className="absolute lg:-top-80 lg:-right-25 lg:w-[100vh] lg:h-[100vh] -top-105 -right-41 w-[70vh] h-[100vh] z-10 animate-spin"
              style={{ animationDuration: "40s" }}
            >
              <svg className="w-full h-full" viewBox="0 0 600 600">
                <path id="circle" d={d} fill="none" />
                <text className="text-xs fill-gray-400 font-light">
                  <textPath href="#circle" startOffset="0%">
                    Forever Learning • UX Curious • Web Obsessed • Forever
                    Learning • UX Curious • Web Obsessed • Forever Learning • UX
                    Curious • Web Obsessed • Forever Learning • UX Curious • Web
                    Obsessed • Forever Learning • UX Curious • Web Obsessed •
                    Forever Learning • UX Curious • Web Obsessed •Forever
                    Learning • UX Curious • Web Obsessed • Forever Learning • UX
                    Curious • Web Obsessed •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute bottom-0 z-20 w-full flex flex-row items-center justify-center lg:items-end lg:justify-end">
            <img
              src={Profile}
              alt="Your Profile"
              className=" w-auto h-[60vh] lg:h-[85vh] object-cover "
            />
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/6 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
        </div>

        {/* Spacer div to maintain scroll height */}
        <div className="h-screen"></div>
      </div>
    </>
  );
}
