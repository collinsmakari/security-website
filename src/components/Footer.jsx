// src/components/Footer.jsx

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Name */}
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              Kenpalt Kenya
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Professional CCTV surveillance, intruder alarm systems,
              biometric access control, fire systems, electric fencing,
              automatic gates and smart security solutions for homes
              and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-orange-600">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-orange-600">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-900 hover:bg-orange-500 transition p-3 rounded-xl"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-900 hover:bg-orange-500 transition p-3 rounded-xl"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-900 hover:bg-orange-500 transition p-3 rounded-xl"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-900 hover:bg-orange-500 transition p-3 rounded-xl"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Kenpalt Kenya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}