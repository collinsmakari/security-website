import { Link } from "react-router-dom";
import heroimg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Advanced Security Systems For Homes & Businesses
        </h1>

        <p className="text-slate-300 mt-6 text-lg md:text-xl">
          CCTV Installation, Alarm Systems, Access Control, Smart Surveillance
          and 24/7 Monitoring Solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Our Services
          </Link>

          <Link
            to="/contact"
            className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 text-white transition duration-300 font-semibold shadow-lg hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
