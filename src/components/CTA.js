import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 Updated Submit Function (Firestore + WhatsApp)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: new Date(),
      });

      // 🔥 WHATSAPP AUTO MESSAGE
      const message = `Hello Chauhan Construction 👷‍♂️

I want a construction estimate.

Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}`;

      // ⚠️ Replace number here
      const whatsappURL = `https://wa.me/918006651693?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");

      alert("✅ Request Submitted!");

      // Reset form
      setForm({
        name: "",
        phone: "",
        city: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Error submitting form");
    }

    setLoading(false);
  };

  return (
    <div id="contact" style={{ padding: "80px 20px", color: "white" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>

        <h2 style={{ textAlign: "center" }}>
          Get Free Construction Estimate
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            style={{
              ...buttonStyle,
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Submitting..." : "Get Free Estimate"}
          </motion.button>

        </form>
      </div>
    </div>
  );
}

// 🔥 Styles
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

export default CTA;