import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRulerCombined, FaRupeeSign, FaArrowRight } from "react-icons/fa";

// Premium Demo Data with Realistic Indian Formatting
const projectsData = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Saharanpur, UP",
    category: "Residential Construction",
    area: "3,200 sq.ft",
    value: "1.2 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Hillview Premium Duplex",
    location: "Dehradun, UK",
    category: "Turnkey Project",
    area: "2,800 sq.ft",
    value: "95 Lakhs",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Corporate Glass Complex",
    location: "Roorkee, UK",
    category: "Commercial Build",
    area: "8,500 sq.ft",
    value: "3.5 Cr",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Luxury Interior Restyling",
    location: "Haridwar, UK",
    category: "Interior & Renovation",
    area: "1,500 sq.ft",
    value: "25 Lakhs",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  },
];

function Projects() {
  return (
    <div id="projects" className="relative py-32 bg-zinc-950 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(234,179,8,0.05),_transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Explore our portfolio of high-end residential and commercial builds. Quality craftsmanship delivered on time.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-400 transition-colors group">
            View All Projects 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Massive 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] lg:h-[550px] w-full rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* High-Res Image with smooth zoom on hover */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Default Dark Gradient (Always visible at bottom for readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Hover Overlay Gradient (Darkens the whole image slightly on hover) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Category Pill */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                {project.category}
              </div>

              {/* Content Block at the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                
                <div className="flex items-center gap-2 text-yellow-500 font-medium mb-6">
                  <FaMapMarkerAlt />
                  <span>{project.location}</span>
                </div>

                {/* Hidden Stats that fade in and slide up on hover */}
                <div className="flex flex-wrap items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/20 pt-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-300">
                      <FaRulerCombined />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 uppercase tracking-wider">Area</p>
                      <p className="text-white font-semibold">{project.area}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <FaRupeeSign />
                    </div>
                    <div>
                      <p className="text-xs text-yellow-500/80 uppercase tracking-wider">Project Value</p>
                      <p className="text-white font-bold text-lg">₹ {project.value}</p>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;