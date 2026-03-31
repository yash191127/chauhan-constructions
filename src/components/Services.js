import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaPaintRoller, FaTools, FaArrowRight } from "react-icons/fa";

const servicesData = [
  {
    icon: FaHome,
    title: "House Construction",
    desc: "A-to-Z house construction with premium materials and technical supervision in the Saharanpur region.",
    image: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1000", 
  },
  {
    icon: FaPaintRoller,
    title: "Interior Design",
    desc: "Luxury interior services that balance durability with sophisticated, modern aesthetic for fully furnished homes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: FaTools,
    title: "Renovation",
    desc: "From minor upgrades to full remodeling turnkey projects for residential & commercial properties.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
];

function Services() {
  return (
    <div id="services" className="relative py-32 bg-zinc-950 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. ARCHITECTURAL BACKGROUND (Like Hero.js) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* The Blueprint Grid */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid-services" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-services)" />
        </svg>
        
        {/* Massive Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <span className="text-[250px] font-black text-white/[0.02] whitespace-nowrap uppercase">
            Excellence
          </span>
        </div>
      </div>

      {/* 2. THE LIGHTING (Ambient Glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -mr-64 -mt-64 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -ml-64 -mb-64 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-yellow-500 text-xs font-black tracking-[0.3em] uppercase">Premium Solutions</span>
            <div className="h-px w-8 bg-yellow-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase italic">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Craft</span>
          </h2>
        </motion.div>

        {/* The Card Stack */}
        <div className="w-full flex justify-center items-center gap-10 perspective-1000 flex-wrap">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex h-[550px] w-[350px] rounded-[45px] overflow-hidden cursor-pointer bg-zinc-900 shadow-2xl border border-white/5 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-4"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60" 
                />

                {/* Smoky Bottom Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

                {/* Content Panel */}
                <div className="absolute bottom-0 left-0 w-full p-10 z-20 flex flex-col items-center text-center">
                  
                  {/* Floating Icon with Glow */}
                  <div className="mb-8 p-5 rounded-[25px] bg-zinc-900/90 border border-white/10 backdrop-blur-md group-hover:bg-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_30px_#facc15] group-hover:-rotate-12">
                    <Icon className="text-3xl text-yellow-500 group-hover:text-black transition-colors" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8 px-2 group-hover:text-zinc-200 transition-colors">
                    {service.desc}
                  </p>

                  <button className="flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black tracking-widest hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500">
                    LEARN MORE <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Services;