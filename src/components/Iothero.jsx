import React from 'react';

const Info = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-[#e0e4eb] text-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#302350] leading-tight max-w-4xl">
        IoT Platform for Data Collection <br className="hidden md:block" />
        <span className="text-[#ef4948]">Processing, Visualization</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-3xl">
        It enables device connectivity via industry standard IoT protocols – MQTT, CoAP and HTTP and supports both cloud and
        on-premises deployments. ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data.
      </p>

      {/* Video */}
      <div className="mt-10 w-full max-w-4xl">
        <video
          className="w-full h-auto rounded-lg shadow-md"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/assests/images/Iot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Info;
