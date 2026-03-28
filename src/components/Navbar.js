import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");

  // ✅ FIX: useMemo use kiya
  const links = useMemo(() => [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]); // ✅ now stable

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "15px 40px",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        zIndex: 1000,
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>
        Chauhan Construction
      </h2>

      <div style={{ display: "flex", gap: "15px" }}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            style={{
              position: "relative",
              padding: "5px 10px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: active === link.id ? "bold" : "normal",
              color: active === link.id ? "#facc15" : "white",
              transition: "0.3s",
            }}
          >
            {link.name}

            {active === link.id && (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  zIndex: -1,
                }}
              />
            )}

            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -5,
                width: active === link.id ? "100%" : "0%",
                height: "2px",
                background: "#facc15",
                transition: "0.3s",
              }}
            />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
