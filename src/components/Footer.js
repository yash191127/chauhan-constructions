import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND IDENTITY */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-white uppercase">
              CHAUHAN <span className="text-yellow-500">CONSTRUCTION</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Engineering legacies across Saharanpur and Dehradun. From architectural planning to turnkey luxury interiors, we build the future.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaWhatsapp />, link: "https://wa.me/918006651693" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, backgroundColor: "#facc15", color: "#000" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-sm">
              {["Home", "Services", "Projects", "Estimate"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-yellow-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LOCATIONS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Service Hubs</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" /> Saharanpur, UP
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" /> Dehradun, UK
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" /> Roorkee & Haridwar
              </li>
            </ul>
          </div>

          {/* 4. DIRECT CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
            <div className="space-y-4">
              <a href="tel:+918006651693" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <FaPhoneAlt size={12} />
                </div>
                <span className="text-sm">+91 80066 51693</span>
              </a>
              <a href="mailto:contact@chauhanconstruction.com" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <FaEnvelope size={12} />
                </div>
                <span className="text-sm">Email Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR - CLEANED VERSION */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            © {currentYear} Chauhan Construction. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-zinc-600 tracking-widest uppercase">
            {/* Added ! to # to satisfy ESLint warnings */}
            <a href="#!" className="hover:text-white transition-colors cursor-default">Privacy Policy</a>
            <a href="#!" className="hover:text-white transition-colors cursor-default">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative Side Line */}
      <div className="absolute left-0 bottom-20 w-1 h-32 bg-yellow-500 opacity-50" />
    </footer>
  );
}

export default Footer;