import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
          Advanced Security Systems For Homes & Businesses
        </h1>

        <p className="text-gray-900 mt-6 text-lg md:text-xl">
          CCTV Installation, Alarm Systems, Access Control, Smart Surveillance
          and 24/7 Monitoring Solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            Our Services
          </Link>

          <Link
            to="/contact"
            className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 text-slate-900 hover:text-white transition duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
