function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-blue-950 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg text-center">
      {/* Icon */}
      <div className="flex justify-center mb-5">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 leading-7">{description}</p>
    </div>
  );
}

export default ServiceCard;
