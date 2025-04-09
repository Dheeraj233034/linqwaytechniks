

import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#3A8DBA] to-[#6AA9D2] min-h-screen flex items-center px-10 overflow-hidden">
      <div className="max-w-2xl">
        <button className="px-4 py-2 bg-[#BFDCEC] text-gray-700 rounded-md mb-4">Preview</button>
        <h1 className="text-6xl font-bold text-black">
          <span className="text-[#2B5D80]">LinQ</span> Your Business with Our Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          Creating sustainable solutions for the business and trafficking
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all duration-300">
          Get Started
        </button>
      </div>
      <div className="absolute right-0 top-0 w-full sm:w-1/2 h-full flex items-center justify-center">
        <div className="relative flex items-center space-x-4">
          <div className="bg-gray-300 mt-60 w-40 h-72 bg-white rounded-2xl shadow-lg"></div>
          <div className="w-72 h-80 bg-white  shadow-lg relative">
            <input
              type="text"
              placeholder="Search"
              className="absolute top-4 left-4 w-2/3 px-3 py-2 bg-gray-200 rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1/4 bg-white"
        style={{
          clipPath: "polygon(100% 0%, 100% -30%, -100% -100%, -100% -100%)",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
