import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Newspaper, RefreshCcw, PlusCircle } from "lucide-react";

const updates = [
  {
    icon: <Newspaper className="w-6 h-6 text-blue-400 mb-2" />, // News
    title: "Platform Enhancements Released",
    message:
      "We’ve rolled out a new set of features focused on developer workflow improvements, faster load times, and real-time code collaboration support.",
    author: "",
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-yellow-400 mb-2" />, // Update
    title: "Security Patch Update",
    message:
      "A critical patch has been applied to address known vulnerabilities across the assessment modules. All systems are now up to date.",
    author: "",
  },
  {
    icon: <PlusCircle className="w-6 h-6 text-green-400 mb-2" />, // New
    title: "Integration with Azure DevOps",
    message:
      "You can now link assessments directly into your Azure DevOps pipelines, enabling faster CI/CD-driven recruitment workflows.",
    author: "",
  },
];

export default function LatestUpdates() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % updates.length);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      nextSlide();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const container = document.getElementById("scroll-listener");
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }
    const interval = setInterval(nextSlide, 5000);

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="scroll-listener"
      className="relative bg-[#0c0c14] border-4 border-white rounded-none min-h-[60vh] flex flex-col justify-center items-center text-white px-4 py-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f0f1a] via-[#10101a] to-[#0f0f1a] animate-pulse opacity-10 blur-2xl"></div>

      <h1 className="relative z-10 text-2xl md:text-3xl font-light text-center mb-6 leading-snug"
        data-aos="fade-up"
      >
        Stay up to date with our<br />Latest Updates & Announcements
      </h1>

      <div className="relative z-10 w-full max-w-3xl border border-white p-4" data-aos="zoom-in">
        <div className="flex flex-col items-center text-center px-6">
          {updates[current].icon}
          <h3 className="text-xl font-semibold mb-2">
            {updates[current].title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            {updates[current].message}
          </p>
          {updates[current].author && (
            <p className="text-sm text-gray-500 italic">
              — {updates[current].author}
            </p>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-1 mt-4" data-aos="fade-up">
        {updates.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-white" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
