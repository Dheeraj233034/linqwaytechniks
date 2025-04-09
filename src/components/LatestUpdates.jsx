// export default function LatestUpdates() {
//   return (
//     <div className="bg-white py-10 px-6 md:px-16">
//       <div className="relative group p-1 rounded-[2rem] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-border-glow">
//         <div
//           className="relative bg-white/60 backdrop-blur-lg rounded-[2rem] p-8 overflow-hidden"
//           style={{
//             clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)`,
//           }}
//         >
//           {/* Animated Sparkles */}
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
//             <div className="animate-confetti absolute w-1 h-1 bg-pink-400 rounded-full top-10 left-10 opacity-60" />
//             <div className="animate-confetti absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-20 right-16 opacity-60" />
//             <div className="animate-confetti absolute w-1 h-1 bg-yellow-300 rounded-full bottom-12 left-1/2 opacity-50" />
//           </div>

//           <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center animate-fade-in-up z-10 relative">
//             🚀 Latest Updates
//           </h2>

//           <div className="space-y-5 relative z-10">
//             {[
//               {
//                 title: "New feature released!",
//                 icon: "🚨",
//                 badge: "New",
//               },
//               {
//                 title: "System maintenance today at 9PM",
//                 icon: "🛠️",
//                 badge: "Alert",
//               },
//               {
//                 title: "Dashboard UI improved 🎨",
//                 icon: "✨",
//                 badge: "Update",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md transform transition duration-300 hover:scale-[1.02] animate-slide-in-left"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="text-2xl mr-3">{item.icon}</div>
//                 <div>
//                   <div className="text-blue-900 font-semibold">{item.title}</div>
//                   <span className="text-xs mt-1 inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">
//                     {item.badge}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes slide-in-left {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes border-glow {
//           0%,
//           100% {
//             filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
//           }
//           50% {
//             filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
//           }
//         }

//         @keyframes confetti {
//           0% {
//             transform: translateY(0) rotate(0);
//           }
//           100% {
//             transform: translateY(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 0.6s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-border-glow {
//           animation: border-glow 3s ease-in-out infinite;
//         }

//         .animate-confetti {
//           animation: confetti 6s infinite linear;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function LatestUpdates() {
//   return (
//     <div className="bg-white py-10 px-6 md:px-16">
//       <div className="relative group p-1 rounded-[2rem] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-border-glow">
//         <div
//           className="relative bg-white/60 backdrop-blur-lg rounded-[2rem] p-8 overflow-hidden"
//           style={{
//             clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)`,
//           }}
//         >
//           {/* Sparkles */}
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
//             <div className="animate-confetti absolute w-1 h-1 bg-pink-400 rounded-full top-10 left-10 opacity-60" />
//             <div className="animate-confetti absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-20 right-16 opacity-60" />
//             <div className="animate-confetti absolute w-1 h-1 bg-yellow-300 rounded-full bottom-12 left-1/2 opacity-50" />
//           </div>

//           <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center animate-fade-in-up z-10 relative">
//             🚀 Latest Updates
//           </h2>

//           <div className="space-y-5 relative z-10">
//             {[
//               {
//                 title: "New feature released!",
//                 icon: "🚨",
//                 badge: "New",
//                 color: "bg-blue-500",
//               },
//               {
//                 title: "System maintenance today at 9PM",
//                 icon: "🛠️",
//                 badge: "Alert",
//                 color: "bg-red-500",
//               },
//               {
//                 title: "Dashboard UI improved 🎨",
//                 icon: "✨",
//                 badge: "Update",
//                 color: "bg-purple-500",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="relative flex items-start bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md transform transition duration-300 hover:scale-[1.03] animate-slide-in-left"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Blinking badge (only top-right) */}
//                 <span
//                   className={`absolute top-2 right-2 text-xs text-white font-semibold px-2 py-0.5 rounded-full animate-blink shadow-md ${item.color}`}
//                 >
//                   {item.badge}
//                 </span>

//                 <div className="text-2xl mr-3">{item.icon}</div>
//                 <div className="text-gray-900 font-semibold">{item.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes slide-in-left {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes border-glow {
//           0%,
//           100% {
//             filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
//           }
//           50% {
//             filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
//           }
//         }

//         @keyframes confetti {
//           0% {
//             transform: translateY(0) rotate(0);
//           }
//           100% {
//             transform: translateY(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes blink {
//           0% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.3;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 0.6s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-border-glow {
//           animation: border-glow 3s ease-in-out infinite;
//         }

//         .animate-confetti {
//           animation: confetti 6s infinite linear;
//         }

//         .animate-blink {
//           animation: blink 1.5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function LatestUpdates() {
//   return (
//     <div className="relative py-16 px-6 md:px-16 bg-white overflow-hidden" data-aos="fade-up">
//       {/* Neon Lines Background using Framer Motion */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.span
//             key={i}
//             className="absolute w-0.5 h-full bg-cyan-400 opacity-30 blur-sm"
//             initial={{ y: "-100%" }}
//             animate={{ y: "100%" }}
//             transition={{
//               duration: 6 + i * 0.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.3,
//             }}
//             style={{ left: `${10 + i * 15}%` }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10" data-aos="zoom-in">
//         <div className="relative p-1 rounded-3xl border-4 border-transparent animate-border-gradient">
//           <div
//             className="rounded-3xl p-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-xl ring-2 ring-blue-200 border border-white relative"
//             style={{
//               clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)",
//               zIndex: 10,
//             }}
//           >
//             {/* Sparkles */}
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
//               <div className="animate-confetti absolute w-1 h-1 bg-blue-400 rounded-full top-10 left-10 opacity-60" />
//               <div className="animate-confetti absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-20 right-16 opacity-60" />
//               <div className="animate-confetti absolute w-1 h-1 bg-yellow-300 rounded-full bottom-12 left-1/2 opacity-50" />
//             </div>

//             <h2
//               className="text-4xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in-up z-10 relative"
//               data-aos="fade-down"
//             >
//               Latest Updates
//             </h2>

//             <div className="space-y-6 relative z-10">
//               {[
//                 {
//                   title: "New feature released!",
//                   icon: "🚨",
//                   badge: "New",
//                   color: "bg-blue-500",
//                 },
//                 {
//                   title: "System maintenance today at 9PM",
//                   icon: "🛠️",
//                   badge: "Alert",
//                   color: "bg-red-500",
//                 },
//                 {
//                   title: "Dashboard UI improved 🎨",
//                   icon: "✨",
//                   badge: "Update",
//                   color: "bg-purple-500",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="p-[2px] rounded-xl gradient-border-blue shadow-lg"
//                   data-aos="fade-up"
//                   data-aos-delay={`${index * 200}`}
//                 >
//                   <div className="relative flex items-start bg-gradient-to-br from-gray-100 via-white to-gray-100 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-md transform transition duration-300 hover:scale-[1.03] animate-slide-in-left">
//                     <span
//                       className={`absolute top-2 right-2 text-xs text-white font-semibold px-2 py-0.5 rounded-full animate-blink shadow-md ${item.color}`}
//                     >
//                       {item.badge}
//                     </span>
//                     <div className="text-2xl mr-3">{item.icon}</div>
//                     <div className="text-gray-800 font-medium">{item.title}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Styles */}
//       <style>{`
//         @keyframes border-gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         .animate-border-gradient {
//           background-image: linear-gradient(270deg, #4f46e5, #ec4899, #06b6d4, #4f46e5);
//           background-size: 600% 600%;
//           animation: border-gradient 6s ease infinite;
//           border-radius: 1.5rem;
//         }

//         @keyframes slide-in-left {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes confetti {
//           0% {
//             transform: translateY(0) rotate(0);
//           }
//           100% {
//             transform: translateY(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes blink {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 0.6s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-confetti {
//           animation: confetti 6s infinite linear;
//         }

//         .animate-blink {
//           animation: blink 1.5s infinite;
//         }

//         .gradient-border-blue {
//           background: linear-gradient(to right, #2563eb, #3b82f6, #93c5fd);
//         }
//       `}</style>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function LatestUpdates() {
  return (
    <div className="relative py-16 px-6 md:px-16 bg-black overflow-hidden" data-aos="fade-up">
      {/* Neon Shapes Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const shapeType = ["circle", "square", "triangle"][i % 3];
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const size = Math.floor(Math.random() * 100) + 80; // Large size 80px–180px
          const duration = 6 + Math.random() * 4;

          if (shapeType === "triangle") {
            return (
              <motion.div
                key={i}
                className="absolute opacity-0"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: 0,
                  height: 0,
                  borderLeft: `${size / 2}px solid transparent`,
                  borderRight: `${size / 2}px solid transparent`,
                  borderBottom: `${size}px solid rgba(0, 255, 60, 0.3)`,
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.7, 0], y: [-15, 15, -15] }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            );
          } else {
            return (
              <motion.div
                key={i}
                className={`absolute ${shapeType === "circle" ? "rounded-full" : ""}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: "rgba(0,255,255,0.2)",
                  boxShadow: "0 0 30px rgba(0,255,255,0.5)",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.7, 0], y: [-20, 20, -20] }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            );
          }
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10" data-aos="zoom-in">
        <div className="relative p-1 rounded-3xl border-4 border-transparent animate-border-gradient">
          <div
            className="rounded-3xl p-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-xl ring-2 ring-blue-200 border border-white relative"
            style={{
              clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)",
              zIndex: 10,
            }}
          >
            {/* Title */}
            <h2 className="text-4xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in-up z-10 relative">
              Latest Updates
            </h2>

            {/* Updates List */}
            <div className="space-y-6 relative z-10">
              {[
                {
                  title: "New feature released!",
                  icon: "🚨",
                  badge: "New",
                  color: "bg-blue-500",
                },
                {
                  title: "System maintenance today at 9PM",
                  icon: "🛠️",
                  badge: "Alert",
                  color: "bg-red-500",
                },
                {
                  title: "Dashboard UI improved 🎨",
                  icon: "✨",
                  badge: "Update",
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-[2px] rounded-xl gradient-border-blue shadow-lg"
                >
                  <div className="relative flex items-start bg-gradient-to-br from-gray-100 via-white to-gray-100 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-md transform transition duration-300 hover:scale-[1.03] animate-slide-in-left">
                    <span
                      className={`absolute top-2 right-2 text-xs text-white font-semibold px-2 py-0.5 rounded-full animate-blink shadow-md ${item.color}`}
                    >
                      {item.badge}
                    </span>
                    <div className="text-2xl mr-3">{item.icon}</div>
                    <div className="text-gray-800 font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes border-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border-gradient {
          background-image: linear-gradient(270deg, #4f46e5, #ec4899, #06b6d4, #4f46e5);
          background-size: 600% 600%;
          animation: border-gradient 6s ease infinite;
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
        .gradient-border-blue {
          background: linear-gradient(to right, #2563eb, #3b82f6, #93c5fd);
        }
      `}</style>
    </div>
  );
}
