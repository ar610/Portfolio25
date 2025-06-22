import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
// src/components/Hero.jsx
import Profile from "./assets/Amal.png";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import SkillsPage from "./pages/Skills";
function App() {
  return (
    <>
    <div className="relative bg-[#14151C] ">
    <Hero />
    <About />
        
    <SkillsPage />
    </div>
    </>
  );
}

export default App;
