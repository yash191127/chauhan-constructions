import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

function Cities() {
  const cities = [
    "Saharanpur",
    "Roorkee",
    "Dehradun",
    "Haridwar",
  ];

  return (
    <div style={container}>
      <h2 style={heading}>We Are Currently Available In</h2>

      <div style={grid}>
        {cities.map((city, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={card}
          >
            <FaMapMarkerAlt style={icon} />
            <p>{city}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 🔥 Styles
const container = {
  padding: "80px 20px",
  background: "#020617",
  color: "white",
  textAlign: "center",
};

const heading = {
  marginBottom: "40px",
  fontSize: "28px",
};

const grid = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
};

const card = {
  background: "#111827",
  padding: "25px",
  borderRadius: "12px",
  minWidth: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

const icon = {
  fontSize: "24px",
  color: "#facc15",
};

export default Cities;