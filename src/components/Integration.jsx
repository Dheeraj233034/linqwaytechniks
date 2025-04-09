// import React from "react";

// const IntegrationGrid = () => {
//   const platforms = [
//     { name: "Shopify", logo: "assests/images/gogle.png" },
//     { name: "WooCommerce", logo: "assests/images/urbn.png" },
//     { name: "Vinculum", logo: "assests/images/openai.png" },
//     { name: "Ezyslips", logo: "assests/images/tata.png" },
//     { name: "ClickPost", logo: "assests/images/shopsy.png" },
//     { name: "Magento", logo: "assests/images/wipro.png" },
//     { name: "Opencart", logo: "assests/images/gogle.png" },
//     { name: "Unicommerce", logo: "assests/images/flipkart.png" },
//     { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
//   ];

//   return (
//     <div className="w-full bg-[#E8F9FF] p-6 md:p-12">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
//         {/* Text Section */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Ready <span className="text-cyan-500">Integrations</span> with all leading e-commerce platforms
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Connect your store <span className="text-cyan-500 italic">‘in few clicks’</span> to enable same day logistics
//           </p>
//         </div>

//         {/* Logo Grid Section */}
//         <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3">
//           {platforms.map((platform, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition"
//             >
//               <img
//                 src={platform.logo}
//                 alt={platform.name}
//                 className="h-10 max-w-[100px] object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrationGrid;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntegrationGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const platforms = [
    { name: "Shopify", logo: "assests/images/gogle.png" },
    { name: "WooCommerce", logo: "assests/images/urbn.png" },
    { name: "Vinculum", logo: "assests/images/openai.png" },
    { name: "Ezyslips", logo: "assests/images/tata.png" },
    { name: "ClickPost", logo: "assests/images/shopsy.png" },
    { name: "Magento", logo: "assests/images/wipro.png" },
    { name: "Opencart", logo: "assests/images/gogle.png" },
    { name: "Unicommerce", logo: "assests/images/amzon.png" },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-cyan-50 to-blue-100 p-6 md:p-12 relative overflow-hidden">
      {/* Optional background accents */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assests/images/grid-pattern.png')] bg-cover pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Section */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready <span className="text-cyan-500">Integrations</span> with all
            leading e-commerce platforms
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect your store{" "}
            <span className="text-cyan-500 italic">‘in few clicks’</span> to
            enable same day logistics
          </p>
        </div>

        {/* Logo Grid Section */}
        <div
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3"
          data-aos="fade-left"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-10 max-w-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationGrid;
