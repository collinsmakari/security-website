import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      title: "CCTV Installation",
      description:
        "High-definition surveillance systems for homes and businesses.",
    },
    {
      title: "Access Control",
      description:
        "Smart access systems with biometric and card entry solutions.",
    },
    {
      title: "Alarm Systems",
      description:
        "Reliable intrusion detection and emergency response systems.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>kenpalt Kenya | Security Systems</title>

        <meta
          name="description"
          content="Professional CCTV, alarm systems, and surveillance solutions."
        />
      </Helmet>

      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* More Button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/services"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
            >
              More Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}

export default Home;
