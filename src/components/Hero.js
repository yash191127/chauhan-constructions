import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaShieldAlt } from "react-icons/fa";
function Hero() {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-black">
      
      {/* 1. THE CINEMATIC BACKGROUND IMAGE (Full Screen) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=100" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover"
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
      </div>

      {/* 2. FLOATING ARCHITECTURAL ELEMENTS (The "Innovation" Part) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-px h-64 bg-yellow-500 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-px bg-yellow-500 animate-pulse" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 w-full">
        
        {/* 3. THE "GLASS CANARY" CONTENT BOX */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }} // 🔥 Add a margin so it starts earlier
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{ willChange: "transform" }} // 🔥 This tells the browser to use the GPU
>
          {/* Quality Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="px-4 py-1 rounded-full bg-yellow-500 text-black text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(234,179,8,0.5)]">
              ESTD 2011
            </span>
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <FaShieldAlt className="text-yellow-500" /> ISO Certified Construction
            </span>
          </div>

          {/* MASSIVE HEADLINE */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8">
            ENGINEERING <br />
            <span className="relative inline-block mt-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">
                PERFECTION.
              </span>
              {/* Animated underline */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute -bottom-2 left-0 h-2 bg-yellow-500 rounded-full shadow-[0_0_30px_#facc15]"
              />
            </span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light border-l-2 border-yellow-500 pl-6 bg-white/5 py-4 backdrop-blur-sm rounded-r-xl">
            From Saharanpur to Dehradun, we build <span className="text-white font-bold italic">Legacy Homes</span> using structural intelligence and elite interior artistry.
          </p>

          {/* CTA GROUP */}
          <div className="flex flex-wrap items-center gap-8">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-xl bg-yellow-500 text-black font-black text-sm tracking-widest uppercase transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:shadow-yellow-500/60"
            >
              Get Free Estimate
            </motion.a>

            <a href="#projects" className="group flex items-center gap-4 text-white font-bold tracking-widest text-xs">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500 transition-all duration-500">
                <FaPlay className="text-[10px] ml-1 group-hover:text-black" />
              </div>
              WATCH SHOWREEL
            </a>
          </div>
        </motion.div>

        {/* 4. STATS FLOATER (The eye-catcher) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-[-100px] right-0 hidden lg:flex gap-12 bg-zinc-900/80 backdrop-blur-2xl p-10 rounded-tl-[100px] border-t border-l border-white/10 shadow-[-20px_-20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="text-center">
            <h4 className="text-3xl font-black text-yellow-500">150+</h4>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Projects</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <h4 className="text-3xl font-black text-yellow-500">15+</h4>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Years</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <h4 className="text-3xl font-black text-yellow-500">100%</h4>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Quality</p>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right pointer-events-none">
        <span className="text-[150px] font-black text-white/[0.03] whitespace-nowrap leading-none select-none">
          CHAUHAN CONSTRUCTION
        </span>
      </div>
    </div>
  );
}

export default Hero;