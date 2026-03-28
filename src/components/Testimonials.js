import { motion } from "framer-motion";

function Testimonials() {
  return (
    <div className="py-20 px-8 text-center">
      <h2 className="text-5xl font-bold mb-10">What Our Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Very professional work and timely delivery.",
          "Best construction service in Saharanpur.",
          "Highly satisfied with quality and design.",
        ].map((review, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
            <p>"{review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;