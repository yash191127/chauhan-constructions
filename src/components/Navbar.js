import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa"; // Make sure to import this!

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO - Responsive text size */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <h1 className="text-lg md:text-2xl font-black tracking-tighter text-white uppercase">
            CHAUHAN <span className="text-yellow-500 font-black">CONSTRUCTION</span>
          </h1>
        </div>

        {/* DESKTOP NAVIGATION (Hidden on Phone) */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className="relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
            >
              {activeTab === link.name ? (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-yellow-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className={`relative z-10 ${activeTab === link.name ? "text-black" : "text-zinc-400 hover:text-white"}`}>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">
          {/* DESKTOP QUOTE BUTTON (Hidden on Phone) */}
          <a 
            href="#contact" 
            className="hidden md:block px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black tracking-widest hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500"
          >
            GET A QUOTE
          </a>

          {/* MOBILE CALL BUTTON (Only shows on Phone) */}
          <motion.a 
            whileTap={{ scale: 0.9 }}
            href="tel:+919719478845"
            className="md:hidden w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            <FaPhoneAlt size={14} />
          </motion.a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;