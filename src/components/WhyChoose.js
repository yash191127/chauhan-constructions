import Stack from "./ui/Stack";
import { FaHardHat, FaBuilding, FaHandshake, FaCheckCircle } from "react-icons/fa";

function WhyChoose() {
  const cards = [
  <div className="flex flex-col items-center justify-center h-full text-white">
    <FaHardHat className="text-6xl text-yellow-400 mb-6 drop-shadow-[0_0_20px_#facc15]" />
    <h3 className="text-2xl font-bold mb-3 tracking-wide">15+ Years Experience</h3>
    <p className="text-gray-300 text-sm text-center px-3 leading-relaxed">
      Experienced engineers delivering strong & reliable construction.
    </p>
  </div>,

  <div className="flex flex-col items-center justify-center h-full text-white">
    <FaBuilding className="text-6xl text-yellow-400 mb-6 drop-shadow-[0_0_20px_#facc15]" />
    <h3 className="text-2xl font-bold mb-3 tracking-wide">150+ Projects Completed</h3>
    <p className="text-gray-300 text-sm text-center px-3 leading-relaxed">
      Successfully delivered residential & commercial projects.
    </p>
  </div>,

  <div className="flex flex-col items-center justify-center h-full text-white">
    <FaHandshake className="text-6xl text-yellow-400 mb-6 drop-shadow-[0_0_20px_#facc15]" />
    <h3 className="text-2xl font-bold mb-3 tracking-wide">100% Transparency</h3>
    <p className="text-gray-300 text-sm text-center px-3 leading-relaxed">
      Clear pricing, proper agreements & no hidden costs.
    </p>
  </div>,

  <div className="flex flex-col items-center justify-center h-full text-white">
    <FaCheckCircle className="text-6xl text-yellow-400 mb-6 drop-shadow-[0_0_20px_#facc15]" />
    <h3 className="text-2xl font-bold mb-3 tracking-wide">On-Time Delivery</h3>
    <p className="text-gray-300 text-sm text-center px-3 leading-relaxed">
      We respect deadlines and ensure timely completion.
    </p>
  </div>,
];

  return (
    <div id="whychoose" className="py-32 bg-black text-white text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center relative">
  <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 text-transparent bg-clip-text animate-pulse">
    Why Choose
  </span>{" "}
  <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
    Chauhan Construction
  </span>

  {/* Glow line */}
  <div className="w-32 h-[3px] bg-yellow-400 mx-auto mt-6 rounded-full shadow-[0_0_20px_#facc15]" />
</h2>

      <div className="flex justify-center items-center min-h-[550px]">
        <Stack cards={cards} />
      </div>
    </div>
  );
}

export default WhyChoose;