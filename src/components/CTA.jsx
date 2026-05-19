import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20 px-6 bg-neutral-300 text-center text-black">
      <h2 className="text-4xl font-bold">
        Need Professional Security Solutions?
      </h2>

      <p className="mt-4 text-lg">
        Contact our experts today for installation and consultation.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300 shadow-lg hover:scale-105"
      >
        Get Started
      </Link>
    </section>
  );
}

export default CTA;
