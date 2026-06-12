import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import saharaHouseImg from "../assets/saharanpur-geometric-house.jpg";

const projects = [
  {
    id: 1,
    title: "Geometric Multi-Story House",
    location: "Saharanpur",
    category: "Residential",
    image: saharaHouseImg, // Using the imported variable
    description: "Modern, complex facade architecture featuring geometric stone and wood panels."
  },
  {
    id: 2,
    title: "Modern Skyline Hub",
    location: "Dehradun",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Elegance Heights",
    location: "Roorkee",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Chauhan Corporate Plaza",
    location: "Haridwar",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=60",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-zinc-950 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-[10px]">Portfolio</span>
            <h2 className="text-5xl font-black text-white mt-4">Featured <span className="text-zinc-600 font-light italic text-4xl">Works</span></h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-4 border-b border-white/5 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 transition-all duration-300 ${
                  filter === cat ? "text-yellow-500 border-b-2 border-yellow-500" : "text-zinc-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-zinc-900 border border-white/5"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-yellow-500 text-[10px] font-black tracking-widest uppercase mb-2">{project.category} — {project.location}</span>
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight">{project.title}</h3>
                  
                  <div className="w-12 h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}