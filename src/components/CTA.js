import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaHammer, FaDraftingCompass, FaCheckCircle } from "react-icons/fa";
// Your Firebase Imports
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

  // 🔥 Integrated Submit Function (Firestore + WhatsApp)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Firebase
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: new Date(),
      });

      // 2. Format WhatsApp Message
      const message = `Hello Chauhan Construction 👷‍♂️\n\nI want a construction estimate.\n\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}`;
      const whatsappURL = `https://wa.me/918006651693?text=${encodeURIComponent(message)}`;

      // 3. Open WhatsApp and Alert
      window.open(whatsappURL, "_blank");
      alert("✅ Request Submitted Successfully!");

      // 4. Reset Form
      setForm({ name: "", phone: "", city: "" });

    } catch (error) {
      console.error(error);
      alert("❌ Error submitting form. Please check your connection.");
    }
    setLoading(false);
  };

  return (
    <div id="contact" className="relative py-32 bg-zinc-950 overflow-hidden">
      
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SIDE: Brand Authority */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-left"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Let's Calculate Your <span className="text-yellow-500">Vision.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-12 max-w-lg leading-relaxed">
              Our engineers will provide a detailed structural and financial breakdown for your project within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: <FaCalculator />, title: "Precision Costing", desc: "No hidden charges, just honest engineering math." },
                { icon: <FaDraftingCompass />, title: "Structural Planning", desc: "Initial layout concepts included in the quote." },
                { icon: <FaHammer />, title: "Material Selection", desc: "Choose from Premium to Ultra-Luxury grades." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-500 text-xl shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: The High-End Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-zinc-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Yash Rana"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 80066 51693"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">City / Location</label>
                <input 
                  name="city"
                  type="text" 
                  required
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Saharanpur"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`w-full bg-yellow-500 text-black font-extrabold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(234,179,8,0.2)] ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-400"}`}
              >
                {loading ? "Processing..." : "Get Free Estimate"}
                {!loading && <FaCheckCircle />}
              </motion.button>
              
              <p className="text-center text-zinc-500 text-xs">
                Data secured by Firebase. WhatsApp redirect will follow submission.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default CTA;