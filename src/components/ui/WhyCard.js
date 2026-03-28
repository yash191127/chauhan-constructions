import { motion } from "framer-motion";

function WhyCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-md hover:shadow-yellow-500/20 hover:shadow-xl transition"
    >
      {/* Icon */}
      <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default WhyCard;