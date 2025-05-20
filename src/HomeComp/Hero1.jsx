

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const domains = [
//   {
//     title: "Chatbot",
//     description:
//       "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
//     videoUrl: "/assests/images/D1.mp4",
//   },
//   {
//     title: "CRM (Customer Relationship Management)",
//     description:
//       "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
//     videoUrl: "/assests/images/D2.mp4",
//   },
//   {
//     title: "IoT (Internet of Things)",
//     description:
//       "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
//     videoUrl: "/assests/images/D4.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
//     videoUrl: "/assests/images/D3.mp4",
//   },
// ];

// const DomainShowcase = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
//     >
//       {/* Desktop layout with sidebar */}
//       <div className="hidden md:flex h-screen">
//         {/* Sidebar */}
//         <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
//           {domains.map((domain, idx) => (
//             <div
//               key={idx}
//               onClick={() => setSelectedDomain(domain)}
//               className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
//                 selectedDomain.title === domain.title
//                   ? "bg-black text-white font-bold"
//                   : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-gray-600 text-white"
//               } ${idx !== domains.length - 1 ? "border-b border-gray-600" : ""}`}
//             >
//               {domain.title}
//             </div>
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="w-3/4 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
//           <div className="max-w-2xl space-y-4">
//             <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
//               {selectedDomain.title}
//             </h2>
//             <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
//               {selectedDomain.description}
//             </p>
//           </div>
//           <div
//             className="w-full mt-10 max-w-4xl relative"
//             style={{ paddingBottom: "56.25%" }}
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <video
//               src={selectedDomain.videoUrl}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute top-0 left-0 w-full h-full object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout: All domains stacked */}
//       <div className="block md:hidden p-4 space-y-12">
//         {domains.map((domain, idx) => (
//           <div key={idx} className="text-center space-y-4" data-aos="fade-up">
//             <h2 className="text-2xl font-bold">{domain.title}</h2>
//             <p className="text-base">{domain.description}</p>
//             <div
//               className="w-full relative"
//               style={{ paddingBottom: "56.25%" }}
//             >
//               <video
//                 src={domain.videoUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute top-0 left-0 w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainShowcase;

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const domains = [
//   {
//     title: "Chatbot",
//     description:
//       "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
//     videoUrl: "/assests/images/D1.mp4",
//   },
//   {
//     title: "CRM",
//     description:
//       "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
//     videoUrl: "/assests/images/D2.mp4",
//   },
//   {
//     title: "IoT (Internet of Things)",
//     description:
//       "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
//     videoUrl: "/assests/images/D4.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
//     videoUrl: "/assests/images/D3.mp4",
//   },
// ];

// const DomainShowcase = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
//     >
//       {/* Desktop layout with sidebar */}
//       <div className="hidden md:flex h-screen overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
//           {domains.map((domain, idx) => (
//             <div
//               key={idx}
//               onClick={() => setSelectedDomain(domain)}
//               className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
//                 selectedDomain.title === domain.title
//                   ? "bg-black text-white font-bold"
//                   : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-gray-600 text-white"
//               } ${idx !== domains.length - 1 ? "border-b border-gray-600" : ""}`}
//             >
//               {domain.title}
//             </div>
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="w-3/4 p-10 mt-4 flex flex-col items-center justify-center text-center overflow-hidden">
//           <div className="max-w-2xl space-y-4">
//             <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
//               {selectedDomain.title}
//             </h2>
//             <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
//               {selectedDomain.description}
//             </p>
            
//           </div>
//           <div
//             className="w-full mt-10 max-w-4xl relative"
//             style={{ paddingBottom: "56.25%" }}
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <video
//               src={selectedDomain.videoUrl}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute top-0 left-0 w-full h-[75%] object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout: All domains stacked */}
//       <div className="block md:hidden p-4 space-y-12">
//         {domains.map((domain, idx) => (
//           <div key={idx} className="text-center space-y-4" data-aos="fade-up">
//             <h2 className="text-2xl font-bold">{domain.title}</h2>
//             <p className="text-base">{domain.description}</p>
//             <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
//               <video
//                 src={domain.videoUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute top-0 left-0 w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainShowcase;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const domains = [
  {
    title: "Chatbot",
    description:
      "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
    videoUrl: "/assests/images/D1.mp4",
    logos: [
      "/assests/images/gpt.png",
      "/assests/images/DG.png",
      "/assests/images/rasa.png",
      "/assests/images/per.png",
      "assests/images/gemini.png",
    ],
  },
  {
    title: "CRM",
    description:
      "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
    videoUrl: "/assests/images/D2.mp4",
    logos: [
      "/assests/images/sf.png",
      "/assests/images/zoho.png",
      "/assests/images/Hs.png",
      "/assests/images/pipe.png",
      
    ],
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
    videoUrl: "/assests/images/D4.mp4",
    logos: [
      "/assets/logos/aws-iot.png",
      "/assets/logos/arduino.png",
      "/assets/logos/raspberrypi.png",
    ],
  },
  {
    title: "Automation",
    description:
      "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
    videoUrl: "/assests/images/D3.mp4",
    logos: [
      "/assets/logos/uipath.png",
      "/assets/logos/bluepr.png",
      "/assets/logos/automationanywhere.png",
    ],
  },
];

const DomainShowcase = () => {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen bg-[#e0e4eb] text-[#302350] bg-cover bg-center"
      
    >
      {/* Desktop layout */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDomain(domain)}
              className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
                selectedDomain.title === domain.title
                  ? "bg-black text-white font-bold"
                  : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-gray-600 text-white"
              } ${idx !== domains.length - 1 ? "border-b border-gray-600" : ""}`}
            >
              {domain.title}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="w-3/4 px-10 flex items-center justify-center text-center overflow-hidden">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
              {selectedDomain.title}
            </h2>
            <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
              {selectedDomain.description}
            </p>

            {/* Logo Marquee */}
            <div className="w-full overflow-hidden py-4" data-aos="fade-up" data-aos-delay="50">
              <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {selectedDomain.logos.map((logo, i) => (
                  <img key={i} src={logo} alt={`logo-${i}`} className="h-16 inline-block" />
                ))}
              </div>
            </div>

            {/* Video */}
            <div
              className="w-full mt-6 max-w-4xl relative"
              style={{ paddingBottom: "56.25%" }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <video
                src={selectedDomain.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden p-4 space-y-12">
        {domains.map((domain, idx) => (
          <div key={idx} className="text-center space-y-4" data-aos="fade-up">
            <h2 className="text-2xl font-bold">{domain.title}</h2>
            <p className="text-base">{domain.description}</p>

            {/* Logo Marquee for mobile */}
            <div className="w-full overflow-hidden py-4">
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {domain.logos.map((logo, i) => (
                  <img key={i} src={logo} alt={`logo-${i}`} className="h-10 inline-block" />
                ))}
              </div>
            </div>

            <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
              <video
                src={domain.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainShowcase;

