import { motion } from "framer-motion";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "800px",
        }}
      >
        {/* 🔥 HEADING */}
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#facc15,#ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 20px rgba(250,204,21,0.5)",
          }}
        >
          Build Your Dream Home
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            marginTop: "15px",
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          From Foundation to Fully Furnished Homes
        </p>

        {/* 🔥 CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* 🟡 PRIMARY BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px #facc15",
            }}
            onClick={() => scrollToSection("contact")}
            style={{
              background: "linear-gradient(90deg,#facc15,#f59e0b)",
              padding: "14px 30px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              color: "black",
              cursor: "pointer",
            }}
          >
            Get Free Estimate
          </motion.button>

          {/* ⚪ SECONDARY BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "rgba(255,255,255,0.2)",
            }}
            onClick={() => scrollToSection("projects")}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "14px 30px",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;