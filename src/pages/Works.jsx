import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import ProjectCard from "../components/Project_Card";
import PhotoFrame from "../components/PhotoFrame";
import { title } from "framer-motion/client";
const MyWorks = () => {
  const [activeTab, setActiveTab] = useState("Dev Projects");

  const projects = [
    {
      id: 1,
      title: "NXT MOVIE",
      description:
        "NXT Movie - Your Personal Movie Watchlist! NXT Movie is a simple and fun web app that helps you manage your personal movie watchlist. Just type the name of a movie and our app fetches the poster and adds it to your collection. You can add and delete movies anytime. If you are bored spin to choose!",
      image: "/nxtmovie.png",
      link: "https://github.com/ar610/nxt-movie",
      category: "Dev Projects",
    },
    {
      id: 2,
      title: "MOZHI",
      description:
        "Indian Sign Language Learning platform with gamified user experience",
      image: "/mozhi.png",
      category: "Dev Projects",
    },
    {
      id: 3,
      title: "HOSTEL_O_Hub",
      description:
        "HosteloHub is a full-stack e-commerce platform designed specifically for college students. It serves as a centralized solution where students can find and rent hostels, owners can list their hostels, and alumni can sell their used items to incoming students.",
      image: "/hostelohub.png",
      link: "https://github.com/ar610/HOSTEL_E_COMMERCE",
      category: "Dev Projects",
    },
    {
      id: 4,
      title: "Angel Bags",
      description:
        "A clean and minimal landing page for Angel Bags, a B2B premium bag manufacturing company. The design highlights the brand’s color options, material quality, and customization capabilities, aimed at attracting bulk buyers and corporate clients",
      image: "/angelbags.png",
      category: "Designs",
    },
    {
      id: 5,
      title: "OOFDI",
      description:
        "Landing page design for Oofdi, a local delivery service platform. The goal was to establish a trustworthy brand presence and clearly communicate service benefits to both customers and delivery partners. The layout guides users through key offerings, how the platform works, and call-to-action points.",
      image: "/oofdi.png",
      category: "Designs",
    },
    {
      id: 6,
      title: "ShowMySkills",
      description:
        "A full-fledged UI design for ShowMySkills, a web platform to showcase individual talents and find collaborators or opportunities based on specific skills. Designed profile pages, skill categories, and a clean navigation flow to encourage discovery and connection.",
      image: "/showmyskills.png",
      category: "Designs",
    },{
      id:7,
      image:"/thudarum.jpg",
      category:"Art",
    },
    {
      id:8,
      image:"/zuko.jpg",
      category:"Art",
    },
    {
      id:9,
      image:"/96.jpg",
      category:"Art",
    },
    {
      id:10,
      image:"/sg.jpg",
      category:"Art",
    },
    {
      id:11,
      image:"/self.jpg",
      category:"Art",
    },
    {
      id:12,
      image:"/jane.jpg",
      category:"Art",
    },
    {
      id:13,
      image:"/krishnan.jpg",
      category:"Art",
    },
    {
      id:14,
      image:"/jigar.jpg",
      category:"Art",
    },

  ];



  const tabs = ["Dev Projects", "Designs", "Art"];

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <div id="works" className="relative min-h-screen  p-8 z-30 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center ">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">
          My Works
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-200 rounded-full p-1 flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative group cursor-pointer lg:px-8 px-5 lg:py-3 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-400 rounded-full flex items-center justify-center"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  >
                    {tab}
                  </motion.div>
                )}

                {tab}
                {/* Active tab background transition */}
                <span
                  className={`absolute left-[25%] bottom-3 w-0 h-0.5 bg-black transition-all duration-300 ${
                    activeTab === tab ? "" : "group-hover:w-[50%]"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
          {activeTab === "Art" ? (
            <div className="space-y-8 space-x-6 flex flex-row justify-center flex-wrap  w-[80vw]">
              {filteredProjects.map((project, index) => (
                <PhotoFrame
                  key={index}
                  id={project.id}
                  index={index}
                  image={project.image}
                  
                />
              ))}
            </div>
          ):
        (
        <div className="space-y-8 lg:w-[60vw] w=[80vw]">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              index={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>)}
      </div>
    </div>
  );
};

export default MyWorks;
