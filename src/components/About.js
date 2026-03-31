import React from "react";
import { motion } from "framer-motion";
// Importing your photo from the assets folder
import aboutImg from "../assets/about.jpg"; 

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-20 bg-zinc-950 text-white overflow-hidden">

      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Image with Architectural Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Back Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500/20 rounded-[2rem] z-0" />
          
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
            <img
              src={aboutImg}
              alt="Yash Rana"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* 🔥 FIXED: Floating Luxury Badge now has z-30 to stay on top */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-8 -right-8 z-30 bg-yellow-500 text-black px-8 py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] font-black text-center min-w-[140px]"
          >
            <div className="text-3xl leading-none mb-1">15+</div>
            <div className="text-[10px] uppercase tracking-widest">Years Experience</div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-yellow-500" />
            <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-[10px]">The Founder</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Yash Rana</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-6 leading-relaxed font-light">
            Founder of <span className="text-white font-semibold underline underline-offset-4 decoration-yellow-500/50">Chauhan Construction</span>, 
            dedicated to engineering excellence and luxury living spaces for over 15 years.
          </p>

          <p className="text-zinc-500 mb-10 leading-relaxed italic border-l-2 border-yellow-500/30 pl-6">
            "We focus on durability, modern architectural design, and strict on-time delivery. 
            Trusted by 150+ families across Saharanpur, Dehradun, Roorkee & Haridwar."
          </p>

          {/* Premium Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: "Years", val: "15+" },
              { label: "Projects", val: "150+" },
              { label: "Quality", val: "100%" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 text-center group hover:border-yellow-500/50 transition-colors">
                <h3 className="text-2xl font-black text-yellow-500 mb-1">{stat.val}</h3>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://wa.me/919719478845")}
              className="bg-yellow-500 text-black px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-[0_15px_35px_rgba(234,179,8,0.2)] hover:shadow-yellow-500/40 transition-all"
            >
              Consult Now
            </motion.button>

            <a href="#projects" className="group flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-xs font-bold tracking-widest">
              VIEW PROJECTS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}