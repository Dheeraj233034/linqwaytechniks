
import React from 'react';
import customerBg from '/assests/images/crmb2.svg'; // Ensure correct path

const customers = [
   { id: 1, name: 'Balaji', logoUrl: '/assests/images/rasa.png' },
  { id: 2, name: 'Flame University', logoUrl: '/assests/images/zoho.png' },
  { id: 3, name: 'Genpact', logoUrl: '/assests/images/sf.png' },
  { id: 4, name: 'Godrej & Boyce', logoUrl: '/assests/images/bluepr.png' },
  { id: 5, name: 'Mahindra', logoUrl: '/assests/images/per.png' },
  { id: 6, name: 'Puma Jeans', logoUrl: '/assests/images/Hs.png' },
];

const CustomerShowcase = () => {
  return (
    <div className="relative min-h-[700px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${customerBg})` }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10 text-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#302350] sm:text-2xl lg:text-5xl leading-tight">
            Over 150 companies, both big and small, are growing their business with Salesforce.
          </h2>
        </div>

        {/* Responsive Logo Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 max-w-4xl mx-auto">
          {customers.slice(0, 6).map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-center w-full h-20"
            >
              <img
                src={customer.logoUrl}
                alt={`${customer.name} Logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerShowcase;

