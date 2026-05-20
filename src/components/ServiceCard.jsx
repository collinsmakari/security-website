import { Link } from "react-router-dom";

function ServiceCard({ icon, title, description, image }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden group min-h-[420px] transition duration-500 hover:scale-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 text-white text-center">
        {/* Top Content */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* Icon */}
          <div className="mb-6 flex justify-center">{icon}</div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4">{title}</h3>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
