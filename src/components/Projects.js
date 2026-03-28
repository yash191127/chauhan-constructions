import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Luxury House - Saharanpur",
    desc: "2 Floor Modern Home",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Villa - Roorkee",
    desc: "Modern Architecture",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    title: "Modern Home - Dehradun",
    desc: "Premium Interior",
    img: "https://images.unsplash.com/photo-1600607687126-8a3414349c0f",
  },
  {
    id: 4,
    title: "Duplex - Haridwar",
    desc: "Luxury Duplex",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  
];

function Projects() {
  const navigate = useNavigate();

  return (
    <div
      id="projects"
      style={{
        padding: "80px 40px",
        color: "white",
        textAlign: "center",
       
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", }}>

        {/* TITLE */}
        <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>
          Our Projects
        </h2>

        {/* 🔥 GRID CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px" , 
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(250,204,21,0.6)",
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "15px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <img
                src={project.img}
                alt=""
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{project.title}</h3>
                <p style={{ color: "#ccc" }}>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;