

import React, { useState, useRef } from 'react';

const contents = [
  {
    title: 'Knowledge',
    description:
      'Fin uses all of your support knowledge to generate accurate answers. It scans existing docs, FAQs, and internal wikis. You get consistent, helpful responses every time.',
  },
  {
    title: 'Behaviour',
    description:
      'Fin speaks in your tone of voice, and follows your policies and procedures. Customizable prompts ensure it sounds like your brand. Compliance and trust are built-in.',
  },
  {
    title: 'Actions',
    description:
      'Fin personalizes every interaction and takes actions on behalf of customers. It integrates with your CRM and ticketing tools. Customers get real-time, effective resolutions.',
  },
  {
    title: 'Insights',
    description:
      'AI-generated insights give you full visibility and trust in Fin’s performance. Track trends, identify gaps, and improve content. Decisions become faster and more data-driven.',
  },
];

const videos = [
  '/assests/images/w1.mp4',
  '/assests/images/W13.mp4',
  '/assests/images/w2.mp4',
  '/assests/images/W4.mp4',
];

const SplitContentVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleTitleClick = (index) => {
    setCurrentVideoIndex(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/assests/images/F.svg')" }}
    >
      <div
        className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden"
        style={{ border: '4px solid #DDA853' }}
      >
        {/* Top Header */}
        <div className="w-full text-center px-4 pt-10 pb-6">
          <h1 className="text-4xl font-bold mb-4 text-[#DDA853]">Workflow</h1>
          <p className="text-lg text-gray-900">
            Fin helps you automate your frontline support efficiently.
          </p>
          <p className="text-lg text-gray-900">
            Each interaction is smarter, faster, and fully aligned with your brand.
          </p>
        </div>

        {/* Split Layout */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Section */}
          <div className="w-full h-[600px] md:w-1/2 p-6 flex flex-col bg-white justify-start">
            <div className="space-y-5">
              {contents.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer flex flex-col"
                  onClick={() => handleTitleClick(idx)}
                >
                  <div>
                    <h2
                      className={`text-xl transition-all duration-300 ${
                        idx === currentVideoIndex
                          ? 'font-bold text-[#DDA853]'
                          : 'font-normal text-black'
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`transition-all duration-300 text-sm whitespace-pre-line ${
                        idx === currentVideoIndex ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                  {idx !== contents.length - 1 && (
                    <hr className="my-3 border-t border-[#DDA853]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div
            className="hidden md:flex w-full md:w-1/2 h-[600px] bg-white relative overflow-hidden"
            style={{ borderLeft: '4px solid #DDA853' }}
          >
            {/* Optional Background Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/images/bg-right.jpg')" }}
            ></div>

            {/* Video */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <video
                ref={videoRef}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                controls={false}
                onEnded={() =>
                  setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
                }
                className="rounded-lg max-h-full h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitContentVideo;

