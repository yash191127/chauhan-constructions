import Stack from "./ui/Stack";
import { FaHardHat, FaBuilding, FaHandshake, FaCheckCircle } from "react-icons/fa";

function WhyChoose() {

  const baseStyle =
    "flex flex-col items-center justify-center h-full text-white";

  const cards = [
    <div className={baseStyle}>
      <FaHardHat className="text-6xl text-yellow-400 mb-6" />
      <h3 className="text-2xl font-bold mb-3 text-center">
        15+ Years Experience
      </h3>
      <p className="text-gray-300 text-sm text-center px-3">
        Experienced engineers delivering strong & reliable construction.
      </p>
    </div>,

    <div className={baseStyle}>
      <FaBuilding className="text-6xl text-yellow-400 mb-6" />
      <h3 className="text-2xl font-bold mb-3 text-center">
        150+ Projects Completed
      </h3>
      <p className="text-gray-300 text-sm text-center px-3">
        Successfully delivered residential & commercial projects.
      </p>
    </div>,

    <div className={baseStyle}>
      <FaHandshake className="text-6xl text-yellow-400 mb-6" />
      <h3 className="text-2xl font-bold mb-3 text-center">
        100% Transparency
      </h3>
      <p className="text-gray-300 text-sm text-center px-3">
        Clear pricing, no hidden costs.
      </p>
    </div>,

    <div className={baseStyle}>
      <FaCheckCircle className="text-6xl text-yellow-400 mb-6" />
      <h3 className="text-2xl font-bold mb-3 text-center">
        On-Time Delivery
      </h3>
      <p className="text-gray-300 text-sm text-center px-3">
        We respect deadlines and ensure timely completion.
      </p>
    </div>,
  ];

  return (
    <div className="py-28 bg-black text-white">

      {/* 🔥 STACK + HEADING WRAPPER */}
      <div className="relative flex justify-center items-center min-h-[500px] pt-24">

        {/* ✅ CENTER HEADING */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center w-full">

          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-yellow-400"></span>{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              
            </span>
          </h2>

          <div className="w-24 h-[3px] bg-yellow-400 mt-3 mx-auto rounded-full" />

        </div>

        {/* STACK */}
        <Stack cards={cards} />

      </div>

      {/* CTA */}
      <p className="mt-12 text-gray-300 text-center">
       
      </p>

    </div>
  );
}

export default WhyChoose;