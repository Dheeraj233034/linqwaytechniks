import React from 'react';

const LearningCRM = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 bg-[#e0e4eb]">
      {/* Left Text Section */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-center lg:text-left">
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-[#0b1224] leading-tight">
          Unlock Growth <br />
          With Built-in smart<br />
          Learning Management <br />
          System (LMS)
        </h2>
        <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
          Use relevant product and professional training directly from your Vtiger CRM account
          to accelerate sales and deliver exceptional customer experiences.
        </p>
      </div>

      {/* Right Video/Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <video
          className="w-full max-w-xl rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/assests/images/lms.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </section>
  );
};

export default LearningCRM;
