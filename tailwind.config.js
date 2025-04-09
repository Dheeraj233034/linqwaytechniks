// tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // or your actual paths
//   ],
//   theme: {
//     extend: {
//       clipPath: {
//         diagonal: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
//       },
//     },
//   },
//   plugins: [
//     require('tailwind-clip-path'),
//   ],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        diagonal: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(135deg, #2563eb, #ffffff)',
        neon: 'linear-gradient(90deg, #00f0ff, #8a2be2, #00f0ff)',
      },
      keyframes: {
        neonFlow: {
          '0%': { backgroundPosition: '0% 50%', opacity: '20' },
          '25%': { opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { backgroundPosition: '100% 50%', opacity: '20' },
        },
        moveBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        neonFlow: 'neonFlow 5s ease-in-out infinite',
        'bg-move': 'moveBG 8s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-clip-path'),
  ],
};

