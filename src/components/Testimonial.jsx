import React, { useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const testimonials = [
  {
    quoteTitle: "Seamless one day delivery",
    quote:
      "Blowhorn has seamless one day delivery in Mumbai and Pune, are very responsive to calls and queries and I am happy to be associated with them as my delivery partner.",
    name: "Devendra Chawla",
    title: "Founder",
  },
  {
    quoteTitle: "Absolutely Seamless",
    quote:
      "Over the last year Blowhorn and its experienced team helped us with smooth last-mile delivery of non-perishable items.",
    name: "Gaurav Arora",
    title: "Vice President",
  },
  {
    quoteTitle: "Love Blowhorn",
    quote:
      "We've had great success in metro cities using Blowhorn's logistics service for fast delivery.",
    name: "BYJU'S",
    title: "",
  },
  {
    quoteTitle: "Fast & Reliable",
    quote:
      "Their team ensures quick turnaround time and reliable performance even under pressure.",
    name: "Anita Sharma",
    title: "Logistics Head",
  },
  {
    quoteTitle: "Great Support",
    quote:
      "Customer support is top-notch. Queries are resolved quickly and professionally.",
    name: "Ravi Kumar",
    title: "CTO",
  },
  {
    quoteTitle: "Highly Recommended",
    quote:
      "I would highly recommend Blowhorn to anyone looking for dependable logistics.",
    name: "Priya Nair",
    title: "Manager",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#e9f9fc] py-12 px-6">
      {/* Header + Navigation */}
      <div className="flex justify-between items-center mb-8">
        {/* Header on Left */}
        <h2 className="text-4xl font-bold text-left">
          Our customers <span className="text-cyan-400">love</span> us
        </h2>

        {/* Navigation Arrows on Right */}
        <div className="flex gap-4">
          <ArrowLeftCircle
            className="w-10 h-10 text-gray-400 hover:text-cyan-500 cursor-pointer"
            onClick={() => scroll("left")}
          />
          <ArrowRightCircle
            className="w-10 h-10 text-gray-400 hover:text-cyan-500 cursor-pointer"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* Testimonial Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide px-2"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 min-w-[300px] max-w-sm flex-shrink-0 border-b-4 border-cyan-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">"{t.quoteTitle}"</h3>
              <p className="text-gray-600 text-sm">{t.quote}</p>
            </div>
            <div className="mt-4 bg-[#e9f9fc] p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👏</span>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
