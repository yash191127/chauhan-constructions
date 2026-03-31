import React from "react";
import { FaHome, FaTools, FaUser, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex justify-between items-center px-8">
        <a href="#home" className="text-zinc-400 hover:text-yellow-500 transition-colors"><FaHome size={20} /></a>
        <a href="#services" className="text-zinc-400 hover:text-yellow-500 transition-colors"><FaTools size={20} /></a>
        
        {/* Central Action Button */}
        <a href="https://wa.me/919719478845" className="bg-yellow-500 p-4 rounded-2xl -mt-12 shadow-lg shadow-yellow-500/20 text-black scale-110">
          <FaWhatsapp size={24} />
        </a>

        <a href="#about" className="text-zinc-400 hover:text-yellow-500 transition-colors"><FaUser size={20} /></a>
        <a href="tel:+919719478845" className="text-zinc-400 hover:text-yellow-500 transition-colors"><FaPhone size={20} /></a>
      </div>
    </div>
  );
}