import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";

import {
  Camera,
  ShieldAlert,
  LockKeyhole,
  Flame,
  Fence,
  DoorClosed,
  Network,
  ScanSearch,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "CCTV Surveillance",
      description:
        "High-definition surveillance systems that let you monitor your premises 24/7. Enjoy real-time viewing, remote access, and intelligent motion detection for enhanced security.",
      icon: <Camera size={50} className="text-orange-500" />,
    },
    {
      title: "Intruder Alarm Systems",
      description:
        "Advanced alarm systems that detect unauthorised entry and trigger instant alerts. Protect your property with reliable intrusion detection and 24/7 monitoring services.",
      icon: <ShieldAlert size={50} className="text-orange-500" />,
    },
    {
      title: "Access Control Systems",
      description:
        "Manage who enters your premises with ease. Our access control solutions include biometric scanners, card readers, and smart locks for secure and convenient entry management.",
      icon: <LockKeyhole size={50} className="text-orange-500" />,
    },
    {
      title: "Fire Alarm Systems",
      description:
        "Early detection saves lives and property. We install reliable smoke and fire detection systems that provide timely alerts to keep you safe from fire hazards.",
      icon: <Flame size={50} className="text-orange-500" />,
    },
    {
      title: "Electric Fencing",
      description:
        "Deter intruders with our robust electric fencing solutions. Provide perimeter security for your property with reliable and effective deterrent systems.",
      icon: <Fence size={50} className="text-orange-500" />,
    },
    {
      title: "Automatic Gates",
      description:
        "Durable and smart gate automation solutions for seamless and secure access control.",
      icon: <DoorClosed size={50} className="text-orange-500" />,
    },
    {
      title: "Networking and Electrical installation",
      description:
        "Professional networking and electrical installation services for residential and commercial properties.",
      icon: <Network size={50} className="text-orange-500" />,
    },
    {
      title: "X-ray Baggage scanners and Walkthrough Metal Detactors",
      description:
        "X-ray baggage scanners and walkthrough metal detectors provide fast and reliable security screening solutions. They help detect prohibited items, weapons, and concealed metallic objects with accuracy and efficiency.",
      icon: <ScanSearch size={50} className="text-orange-500" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Kenpalt Kenya</title>

        <meta
          name="description"
          content="Explore professional security and surveillance services."
        />
      </Helmet>

      {/* Services Section */}
      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">Our Services</h1>

          <p className="text-slate-900 text-center mb-14 max-w-2xl mx-auto">
            We provide advanced security technologies for homes, offices,
            businesses, and industrial properties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
