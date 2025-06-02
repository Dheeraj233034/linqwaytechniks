import React, { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto"
    });
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Optional: reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#e0e4eb] py-12 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10 border-4 border-[#302350]">
        <h2 className="text-3xl font-extrabold text-[#302350] mb-8 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#302350] p-3 shadow-sm focus:ring-[#302350] focus:border-[#302350] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#302350] p-3 shadow-sm focus:ring-[#302350] focus:border-[#302350] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#302350] p-3 shadow-sm focus:ring-[#302350] focus:border-[#302350] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full rounded-lg border border-[#302350] p-3 shadow-sm focus:ring-[#302350] focus:border-[#302350] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-[#302350] p-3 shadow-sm focus:ring-[#302350] focus:border-[#302350] transition resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ef4948] text-[#302350] hover:bg-[#302350] hover:text-[#ef4948] font-bold py-3 px-10 rounded-xl transition duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-[#ef494850]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
