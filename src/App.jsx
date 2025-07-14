import { useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Profile from "./assets/Amal.png";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import SkillsPage from "./pages/Skills";
import Works from "./pages/Works";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. fetching assets, fonts, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="relative bg-[#14151C] min-h-screen">
        {/* Ripple Background - Fixed position covers entire viewport */}
        {/* Existing content with proper z-index layering */}
        <div className="relative z-10">
          <Cursor />
          <Nav />
          <Hero />
          <div
            className="relative z-30 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/bg3.jpg')" }}
          >
            <About />
            <SkillsPage />
            <Works />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
