// src/components/Loader.jsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import animationData from "../assets/Gradient.json";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-60px h-60px">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default Loader;
