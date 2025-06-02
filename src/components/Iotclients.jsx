import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TechnologyPartners() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Call to Action Section */}
      <section className="bg-[#e0e4eb] text-center py-16 px-4">
        <div className="flex flex-col items-center">
          <FaSearch className="text-6xl text-orange-600 mb-6" />
          <h3 className="text-2xl text-[#303345] md:text-3xl font-bold mb-4">
            Transform your data. <br className="hidden md:block" />
            Accelerate your performance.
          </h3>
          <button onClick={() =>{
            navigate("/request-demo")
          }} className="mt-4 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
            Schedule demo
          </button>
        </div>
      </section>
    </div>
  );
}
