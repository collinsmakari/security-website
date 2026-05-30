import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

import cctvImg from "../assets/cam 2.jpg";
import accessImg from "../assets/access control.jpg";
import alarmImg from "../assets/intruder 2.jpg";

function Home() {
  const services = [
    {
      title: "CCTV Installation",
      description:
        "High-definition surveillance systems for homes and businesses.",
      image: cctvImg,
    },

    {
      title: "Access Control",
      description:
        "Smart access systems with biometric and card entry solutions.",
      image: accessImg,
    },

    {
      title: "Alarm Systems",
      description:
        "Reliable intrusion detection and emergency response systems.",
      image: alarmImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kenpalt Kenya | Security Systems</title>

        <meta
          name="description"
          content="Professional CCTV, alarm systems, and surveillance solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
              Our Services
            </h2>

            <p className="text-black mt-4 text-lg">
              Reliable security solutions for homes, businesses and
              institutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-96 rounded-3xl overflow-hidden group shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/75 group-hover:bg-slate-950/60 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-8">
                  <h3 className="text-3xl font-bold text-orange-500 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Services Button */}
          <div className="flex justify-center mt-14">
            <Link
              to="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
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
