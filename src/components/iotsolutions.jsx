
import {
  FaBuilding,
  FaBolt,
  FaTint,
  FaCarBattery,
  FaHome,
  FaTractor,
  FaTruckMoving,
  FaTools,
} from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";

const solutions = [
  {
    title: "Building Management Solution 4.0",
    desc: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: <FaBuilding className="text-3xl text-orange-600" />,
  },
  {
    title: "Energy Management",
    desc: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: <FaBolt className="text-3xl text-orange-600" />,
  },
  {
    title: "Water Management",
    desc: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: <FaTint className="text-3xl text-orange-600" />,
  },
  {
    title: "Electric Vehicle Solutions",
    desc: "For 2W, 3W, 4W EV OEMs and Battery Infrastructure Providers",
    icon: <FaCarBattery className="text-3xl text-orange-600" />,
  },
  {
    title: "Home Automation",
    desc: "For Smart Homes and Residential Automation Integrators",
    icon: <FaHome className="text-3xl text-orange-600" />,
  },
  {
    title: "Agricultural Equipment Solutions",
    desc: "For Tractors, Tillers & Harvester OEMs",
    icon: <FaTractor className="text-3xl text-orange-600" />,
  },
  {
    title: "Earth Moving Equipment Solutions",
    desc: "For earth moving equipment OEMs",
    icon: <FaTruckMoving className="text-3xl text-orange-600" />,
  },
  {
    title: "Construction Fleet Management",
    desc: "For Construction Fleet Management",
    icon: <FaTools className="text-3xl text-orange-600" />,
  },
  {
    title: "Smart City Infrastructure",
    desc: "For integrating intelligent systems across urban public services and utilities",
    icon: <RiCommunityLine className="text-3xl text-orange-600" />,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-16 bg-[#e0e4eb] text-center">
      <div className="mb-12">
        <h2 className="text-4xl text-[#302350] font-bold mb-2">Solutions</h2>
        <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
          Explore our tailored solutions built for smart infrastructure, automation, and intelligent management across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-lg transition"
          >
            <div>{solution.icon}</div>
            <div>
              <h3 className="text-lg text-[#302350] font-semibold">{solution.title}</h3>
              <p className="text-sm text-black">{solution.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
