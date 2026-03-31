import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" }, // Goes to top
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
   // Goes to the CTA section
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
          ? "py-4 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <h1 className="text-xl md:text-2xl font-black tracking-wider text-white">
            CHAUHAN <span className="text-yellow-500">CONSTRUCTION</span>
          </h1>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`${
                activeTab === link.name ? "text-black" : "text-zinc-300 hover:text-white"
              } relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300`}
            >
              {activeTab === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-yellow-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* GET A QUOTE BUTTON */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/20 text-white text-xs font-black tracking-widest hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;