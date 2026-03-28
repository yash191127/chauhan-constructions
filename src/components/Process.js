function Process() {
  return (
    <div className="bg-gray-100 py-20 px-8 text-center">
      <h2 className="text-5xl font-bold mb-12">Our Process</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          "Consultation",
          "Planning & Design",
          "Agreement & Payment",
          "Construction & Delivery",
        ].map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">{step}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;