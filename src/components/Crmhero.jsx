
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const modules = [
  {
    title: 'Pilot CRM : Quick Look',
    description: 'Learn how Salesforce helps your business build stronger relationships with your customers.',
    image: '/assests/images/crmc1.png',
  },
  {
    title: 'Automation in CRM',
    description: 'Learn how to use customer relationship management (CRM) software to grow your business.',
    image: '/assests/images/crma.png',
  },
  {
    title: 'Sales Cloud Basics',
    description: 'Grow your business, boost productivity, and make smart decisions with Sales Cloud.',
    image: '/assests/images/crmcl.png',
  },
  {
    title: 'Marketing Cloud',
    description: 'Automate and personalize your marketing using Salesforce.',
    image: '/assests/images/crmm.png',
  },
  {
    title: 'Service Cloud Essentials',
    description: 'Support your customers efficiently with Service Cloud.',
    image: '/assests/images/crmcs.png',
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center text-center px-6 pt-20 bg-[#e0e4eb]">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#302350] leading-tight">
        We bring companies and customers<br />
        <span className="text-[#ef4948]">together in CRM</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl">
        Linqway is the world’s most trusted customer relationship management (CRM) platform.
        We help your marketing, sales, commerce, service and IT teams work as one from anywhere –
        so you can keep your customers happy everywhere.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button  onClick={() =>{
          navigate("/request-demo")
        }} className="bg-[#ef4948] text-[#302350] font-semibold py-3 px-6 rounded hover:bg-[#302350] transition hover:text-white">
          Start free trial
        </button>
      </div>

      {/* Video Section */}
      <div className="mt-10 w-full max-w-3xl">
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/assests/images/crmb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Trailhead Cards Slider */}
      <div className="w-full bg-[#e0e4eb] py-16 px-4 mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#302350] mb-4">
          Integrate your bussiness with AI and CRM
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          Unify your sales, marketing, and service teams with the intelligence of AI and structure of CRM.<br/>
          Drive growth through smarter insights, predictive analytics, and seamless automation
        </p>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto px-4 scroll-smooth scrollbar-hide"
        >
          {modules.map((module, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-xs bg-white hover:bg-[#f5f8fc] border border-[#ef4948] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#ef4948]"
            >
              <div className="flex justify-center">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-36 h-32 mb-4"
                />
              </div>
            
              <h3 className="text-lg font-bold text-[#302350] mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm">{module.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => scroll('left')}
            className="bg-white text-[#002e6d] border border-gray-300 shadow-md px-4 py-2 rounded-full hover:bg-[#002e6d] hover:text-white transition"
          >
            ◀ Prev
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white text-[#002e6d] border border-gray-300 shadow-md px-4 py-2 rounded-full hover:bg-[#002e6d] hover:text-white transition"
          >
            Next ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
