
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { MdChatBubble } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import AbstractModel from "./3d";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Update isMobile on window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-screen bg-[#e0e4eb] relative overflow-hidden">
      {/* Left Text Section */}
      <div className="absolute z-10 left-0 md:left-32 top-20 md:top-24 max-w-[90%] md:max-w-xl px-2 md:px-0">
        <h1 className="text-3xl md:text-5xl font-black leading-snug md:leading-tight text-[#302350] mt-4">
          <span className="text-[#e84644]">The Best </span> <br />
          AI Agent And
          <br />
          AI-First Customer Services Platform...
        </h1>
        <p className="mt-4 text-base md:text-lg text-black">
          Streamline customer service operations with accurate, faster, and personalized interactions, powered by our platform’s superior AI capabilities—optimized for seamless iPhone experiences.
        </p>
        <button onClick={ () => {
          navigate("/request-demo")
        }} className="mt-6 px-5 py-2 bg-[#ef4948] text-[#302350] rounded-md shadow-md hover:bg-[#302350] hover:text-[#ef4948] transition">
          Get Started
        </button>
      </div>

      {/* 3D Canvas Section - render only if not mobile */}
      {!isMobile && (
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full cursor-grab">
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 5]} intensity={1.5} />
            <Environment preset="studio" />
            <Suspense fallback={<Loader />}>
              <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <AbstractModel />
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      )}

      {/* Chat Box */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-[90%] sm:w-[500px]">
        <div className="flex items-center px-4 py-3 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 text-black shadow-lg">
          <MdChatBubble className="h-6 w-6 mr-3 text-black" />
          <input
            type="text"
            placeholder="Chat with us..."
            className="flex-1 bg-transparent outline-none placeholder:text-black text-black text-sm sm:text-base"
          />
          <IoPaperPlane className="h-6 w-6 ml-3 text-black cursor-pointer rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
