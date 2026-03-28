import { motion } from "framer-motion";
import { FaHome, FaTools, FaPaintRoller } from "react-icons/fa";

const services = [
  {
    icon: <FaHome size={40} />,
    title: "House Construction",
    desc: "Complete house construction service",
  },
  {
    icon: <FaPaintRoller size={40} />,
    title: "Interior Design",
    desc: "Modern and stylish interiors",
  },
  {
    icon: <FaTools size={40} />,
    title: "Renovation",
    desc: "Upgrade your old house",
  },
];

function Services() {
  return (
    <div id="services" style={{ padding: "80px 40px", color: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px", marginBottom: "40px" }}
        >
          Our Services
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 40px rgba(250,204,21,0.6)",
              }}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0px 0px 20px rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#facc15", marginBottom: "10px" }}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p style={{ color: "#ccc" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;