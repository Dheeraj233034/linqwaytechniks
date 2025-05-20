import React from "react";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] text-[#1f2937] p-6 md:p-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-[#e84644] mb-3">Careers at Linqway Techniks</h1>
        <p className="text-xl text-[#302350]">Be part of something great. Join our growing team.</p>
      </header>

      {/* Open Positions */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-[#e84644] border-b-2 border-[#e84644] inline-block">
          Open Positions
        </h2>

        {/* Job Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-4xl border-l-8 border-[#e84644]">
          <h3 className="text-2xl font-bold text-[#e84644] mb-2">Business Analyst</h3>
          <p className="text-[#302350] mb-4">
            We're looking for a detail-oriented Business Analyst to help drive better decision-making with data.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-[#e84644] mb-1">Qualifications:</h4>
            <ul className="list-disc list-inside text-[#302350] space-y-1">
              <li>Bachelor’s degree in Business, Economics, or related field</li>
              <li>Strong analytical and problem-solving skills</li>
              <li>Experience with tools like Excel, Power BI, or Tableau</li>
              <li>Excellent communication and documentation skills</li>
              <li>Understanding of business processes and systems</li>
            </ul>
          </div>

          <button className="mt-4 px-6 py-2 bg-[#e84644] text-[#302350] font-medium rounded-md hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

