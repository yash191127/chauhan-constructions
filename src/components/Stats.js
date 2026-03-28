import { FaCheckCircle, FaHardHat, FaBuilding, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

function WhyChoose() {
  const data = [
    {
      icon: <FaHardHat />,
      title: "15+ Years Experience",
      desc: "Experienced engineers delivering strong & reliable construction.",
    },
    {
      icon: <FaBuilding />,
      title: "150+ Projects Completed",
      desc: "Successfully delivered residential & commercial projects.",
    },
    {
      icon: <FaHandshake />,
      title: "100% Transparency",
      desc: "Clear pricing, proper agreements & no hidden costs.",
    },
    {
      icon: <FaCheckCircle />,
      title: "On-Time Delivery",
      desc: "We respect deadlines and ensure timely completion.",
    },
  ];

  return (
    <div id="whychoose" className="py-24 bg-black text-white">
      
      {/* 🔥 CENTERED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Choose <span className="text-yellow-400">Chauhan Construction</span>
        </motion.h2>

        {/* 🔥 CENTERED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto place-items-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[260px] p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-md hover:shadow-yellow-500/20 hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed break-words">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 STATS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto text-center">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "150+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-yellow-400">
                {stat.number}
              </h2>
              <p className="text-gray-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WhyChoose;