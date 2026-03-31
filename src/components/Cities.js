import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBuilding, FaHardHat } from "react-icons/fa";

// Upgraded data structure with operational stats to make the company look massive
const locations = [
  { 
    id: 1, 
    city: "Saharanpur", 
    role: "Headquarters", 
    completed: "80+", 
    active: "12" 
  },
  { 
    id: 2, 
    city: "Dehradun", 
    role: "Regional Hub", 
    completed: "45+", 
    active: "8" 
  },
  { 
    id: 3, 
    city: "Roorkee", 
    role: "Service Area", 
    completed: "25+", 
    active: "5" 
  },
  { 
    id: 4, 
    city: "Haridwar", 
    role: "Service Area", 
    completed: "15+", 
    active: "3" 
  },
];

function Cities() {
  return (
    <div className="relative py-32 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. THE PREMIUM BACKGROUND: Blueprint Grid & Radar Glow */}
      <div className="absolute inset-0 z-0">
        {/* Animated Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Giant Centered Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* 2. THE HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Service <span className="text-yellow-500">Footprint</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Delivering premium construction and renovation services across key cities in Uttar Pradesh and Uttarakhand.
          </p>
        </motion.div>

        {/* 3. THE INTERACTIVE CITY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Staggered fade in
              className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-zinc-800/60 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden"
            >
              
              {/* Hover Glow Effect inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 group-hover:to-yellow-500/20 transition-all duration-500" />

              {/* Pulsing Map Pin */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="absolute w-full h-full rounded-full border border-yellow-500/50 animate-ping opacity-75" />
                <FaMapMarkerAlt className="text-2xl text-yellow-500 z-10" />
              </div>

              {/* City Info */}
              <h3 className="text-2xl font-bold text-white mb-1">{loc.city}</h3>
              <p className="text-yellow-500/80 text-sm font-medium mb-6 uppercase tracking-wider">
                {loc.role}
              </p>

              {/* Operational Stats (Makes you look highly established) */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <FaBuilding className="text-zinc-500 group-hover:text-yellow-500/70 transition-colors" />
                    <span className="text-sm">Completed</span>
                  </div>
                  <span className="font-semibold text-white">{loc.completed}</span>
                </div>
                
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <FaHardHat className="text-zinc-500 group-hover:text-yellow-500/70 transition-colors" />
                    <span className="text-sm">Active Sites</span>
                  </div>
                  <span className="font-semibold text-white">{loc.active}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Cities;