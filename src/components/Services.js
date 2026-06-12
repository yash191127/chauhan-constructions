import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaPaintRoller, FaTools, FaArrowRight, FaChevronUp } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: FaHome,
    title: "House Construction",
    desc: "A-to-Z house construction with premium materials and technical supervision .",
    moreText: "We handle architectural planning, foundation work, and structural engineering using top-tier cement and steel to ensure your home lasts generations.",
    image: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1000", 
  },
  {
    id: 2,
    icon: FaPaintRoller,
    title: "Interior Design",
    desc: "Luxury interior services that balance durability with sophisticated, modern aesthetic for fully furnished homes.",
    moreText: "From modular kitchens to custom lighting and Italian marble flooring, we create spaces that reflect your personality and style.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    icon: FaTools,
    title: "Renovation",
    desc: "From minor upgrades to full remodeling turnkey projects for residential & commercial properties.",
    moreText: "Whether it's waterproofing, electrical overhauling, or modernizing an old layout, our turnkey solutions take the stress out of remodeling.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
];

function Services() {
  // Track which service ID is currently expanded
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="services" className="relative py-32 bg-zinc-950 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid-services" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-services)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <span className="text-[250px] font-black text-white/[0.02] whitespace-nowrap uppercase">
            Excellence
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -mr-64 -mt-64 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -ml-64 -mb-64 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
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

        <div className="w-full flex justify-center items-center gap-10 flex-wrap">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layout // Added layout prop for smooth resizing
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative flex min-h-[550px] w-[350px] rounded-[45px] overflow-hidden cursor-pointer bg-zinc-900 shadow-2xl border border-white/5 hover:border-yellow-500/30 transition-all duration-500"
              >
                <img 
                  src={service.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />

                <div className="relative bottom-0 left-0 w-full p-10 z-20 flex flex-col items-center text-center mt-auto">
                  
                  <div className="mb-8 p-5 rounded-[25px] bg-zinc-900/90 border border-white/10 backdrop-blur-md group-hover:bg-yellow-500 transition-all duration-500 group-hover:shadow-[0_0_30px_#facc15]">
                    <Icon className="text-3xl text-yellow-500 group-hover:text-black transition-colors" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-4 px-2 group-hover:text-zinc-200 transition-colors">
                    {service.desc}
                  </p>

                  {/* The Revealed Text Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-yellow-500/80 text-xs leading-relaxed mb-6 italic overflow-hidden"
                      >
                        {service.moreText}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => handleToggle(service.id)}
                    className={`flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-500 text-[10px] font-black tracking-widest ${
                      isExpanded 
                      ? 'bg-yellow-500 text-black border-yellow-500' 
                      : 'bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
                    }`}
                  >
                    {isExpanded ? "SHOW LESS" : "LEARN MORE"} 
                    {isExpanded ? <FaChevronUp /> : <FaArrowRight />}
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