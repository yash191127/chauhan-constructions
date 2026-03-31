import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaDraftingCompass, FaFileContract, FaKey } from "react-icons/fa";

const processSteps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    desc: "Initial meeting to understand your vision, budget, and site requirements.",
    color: "from-yellow-500 to-yellow-300",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Planning & Design",
    desc: "Architectural blueprints and 3D interior renders are created for your approval.",
    color: "from-yellow-400 to-yellow-200",
  },
  {
    icon: <FaFileContract />,
    title: "Agreement & Payment",
    desc: "Transparent itemized contracts and flexible milestone-based payment scheduling.",
  },
  {
    icon: <FaKey />,
    title: "Construction & Delivery",
    desc: "Our engineers execute the build with daily updates until we hand over the keys.",
  },
];

function Process() {
  return (
    <div id="process" className="relative py-32 bg-zinc-950 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            The Journey to Your <span className="text-yellow-500">Dream Home</span>
          </motion.h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group flex flex-col items-center text-center"
            >
              
              {/* STEP NUMBER CIRCLE */}
              <div className="relative z-10 w-24 h-24 mb-8">
                {/* Outer Rotating Border */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-500/30 group-hover:border-yellow-500 transition-colors"
                />
                
                {/* Main Icon Hub */}
                <div className="absolute inset-2 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-3xl text-yellow-500 shadow-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  {step.icon}
                  
                  {/* Small Step Counter Label */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black text-xs font-black flex items-center justify-center shadow-lg">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="px-4">
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-yellow-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {step.desc}
                </p>
              </div>

              {/* ANIMATED CONNECTOR (Desktop Only) */}
              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[70%] w-full h-px border-t border-dashed border-white/20 z-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Process;