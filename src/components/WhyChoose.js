import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaHandshake, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

const chooseData = [
  {
    icon: <FaHardHat />,
    title: "15+ Years Experience",
    description: "Our engineered team has delivered 150+ successful architectural projects.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "150+ Projects Complete",
    description: "Trust in our extensive portfolio of high-quality construction across the region.",
  },
  {
    icon: <FaHandshake />,
    title: "100% Transparency",
    description: "We guarantee clear, itemized pricing and structural plans at every stage.",
  },
  {
    icon: <FaCheckCircle />,
    title: "On-Time Delivery",
    description: "We strictly respect all agreed-upon architectural deadlines.",
  },
];

function WhyChoose() {
  return (
    <div className="relative py-28 bg-zinc-950 overflow-hidden">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Partner with <span className="text-yellow-500">Us?</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Updated Grid: Removed Hexagon to prevent text cut-off, used Premium Rounded Cards instead */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chooseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col items-center justify-center min-h-[350px] shadow-2xl hover:border-yellow-500/40 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-4xl text-yellow-500 mb-8 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 shadow-lg">
                {item.icon}
              </div>

              {/* Title - Static (No more overlap) */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description - Static and Centered */}
              <p className="text-zinc-400 text-sm leading-relaxed font-light px-2">
                {item.description}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-500/0 group-hover:border-yellow-500/50 transition-all duration-500 rounded-tr-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;