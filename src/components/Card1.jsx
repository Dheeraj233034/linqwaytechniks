// import React from "react";

// const SolutionsGrid = () => {
//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-16">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:justify-between md:items-center">
//         <div>
//           <h3 className="text-blue-700 font-semibold text-lg">Drive Financial Innovation for your Business</h3>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">Data-Driven Solutions</h2>
//           <p className="mt-3 text-gray-600 max-w-xl">
//             Compete and grow with powerful solutions designed for retail banking, credit and lending,
//             open banking, and more. Use individual solutions or combine them to meet the specific
//             needs of your organization.
//           </p>
//         </div>
//         <div className="mt-6 md:mt-0">
//           <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition">
//             View All Solutions →
//           </button>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
//         {/* Row 1 */}
//         <div className="md:col-span-8">
//           <Card image="/assests/images/1.png" title="Credit & Lending" />
//         </div>
//         <div className="md:col-span-4">
//           <Card image="/assests/images/6.png" title="Retail Banking" />
//         </div>

//         {/* Row 2 */}
//         <div className="md:col-span-4">
//           <Card image="/assests/images/9.png" title="Open Banking" />
//         </div>
//         <div className="md:col-span-4">
//           <Card image="/assests/images/4.png" title="Financial Wellness" />
//         </div>
//         <div className="md:col-span-4">
//           <Card image="/assests/images/5.png" title="Tech & FinTech" />
//         </div>

//         {/* Row 3 */}
//         <div className="md:col-span-4">
//           <Card image="/assests/images/7.png" title="Wealth Management" />
//         </div>
//         <div className="md:col-span-8">
//           <Card image="/assests/images/8.png" title="Enterprise Banking" />
//         </div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ image, title }) => (
//   <div className="relative h-48 md:h-56 rounded overflow-hidden shadow-md">
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-full object-cover brightness-90 hover:brightness-75 transition duration-300"
//     />
//     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
//       <h3 className="text-white text-lg font-semibold">{title}</h3>
//     </div>
//   </div>
// );

// export default SolutionsGrid;

import React from "react";

const SolutionsGrid = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="text-blue-700 font-semibold text-lg">Drive Financial Innovation for your Business</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Data-Driven Solutions</h2>
         
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition">
            View All Solutions →
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <Card image="/assests/images/1.png" title="Credit & Lending" description="Optimize your credit workflow and lending systems." />
        </div>
        <div className="md:col-span-4">
          <Card image="/assests/images/6.png" title="Retail Banking" description="Transform customer experiences with smarter banking." />
        </div>
        <div className="md:col-span-4">
          <Card image="/assests/images/9.png" title="Open Banking" description="Connect and grow with open banking APIs." />
        </div>
        <div className="md:col-span-4">
          <Card image="/assests/images/4.png" title="Financial Wellness" description="Empower users with financial literacy tools." />
        </div>
        <div className="md:col-span-4">
          <Card image="/assests/images/5.png" title="Tech & FinTech" description="Innovate at the intersection of tech and finance." />
        </div>
        <div className="md:col-span-4">
          <Card image="/assests/images/7.png" title="Wealth Management" description="Grow wealth with personalized investment insights." />
        </div>
        <div className="md:col-span-8">
          <Card image="/assests/images/8.png" title="Enterprise Banking" description="Streamline large-scale operations and solutions." />
        </div>
      </div>
    </section>
  );
};

const Card = ({ image, title, description }) => (
  <div className="relative h-48 md:h-56 rounded overflow-hidden shadow-md group cursor-pointer">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Always visible title at bottom */}
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </div>

    {/* Blue overlay with title and description */}
    <div className="absolute inset-0 bg-blue-700 bg-opacity-90 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-white text-sm mt-2">{description}</p>
    </div>
  </div>
);

export default SolutionsGrid;
