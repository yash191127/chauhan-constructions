import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = {
  1: {
    title: "Luxury House - Saharanpur",
    desc: "Complete 2 floor construction with modern design.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687126-8a3414349c0f",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ],
    reviews: [
      { name: "Rahul Sharma", text: "Amazing work! Very professional." },
      { name: "Amit Verma", text: "Quality construction and timely delivery." },
    ],
  },

  2: {
    title: "Villa - Roorkee",
    desc: "Premium villa with modern architecture.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    ],
    reviews: [
      { name: "Sanjay Singh", text: "Highly recommended!" },
    ],
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project)
    return <h1 style={{ color: "white" }}>Project not found</h1>;

  return (
    <div style={{ padding: "80px 20px", color: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* 🔥 TITLE */}
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {project.title}
        </h1>

        <p style={{ textAlign: "center", color: "#ccc" }}>
          {project.desc}
        </p>

        {/* 🖼 IMAGE GALLERY */}
        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "20px"
        }}>
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              style={{
                width: "100%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* ⭐ CLIENT REVIEWS */}
        <div style={{ marginTop: "60px" }}>
          <h2 style={{ marginBottom: "20px" }}>Client Reviews</h2>

          {project.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <strong>{review.name}</strong>
              <p style={{ color: "#ccc" }}>{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* 💰 PRICE ESTIMATION FORM */}
        <div style={{ marginTop: "60px" }}>
          <h2>Get Price Estimation</h2>

          <form
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Plot Size (sq ft)"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="City"
              style={inputStyle}
            />

            <button style={buttonStyle}>
              Get Estimate
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

/* 🔥 STYLES */
const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "rgba(255,255,255,0.1)",
  color: "white",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#facc15",
  fontWeight: "bold",
  cursor: "pointer",
};

export default ProjectDetails;