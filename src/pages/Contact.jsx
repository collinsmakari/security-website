// src/components/ContactSection.jsx

import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-emerald-400 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={18} />
            <span className="text-sm font-medium text-orange-500">
              24/7 Security Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Protect What Matters Most
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Need CCTV installation, alarm systems, access control, or smart
            surveillance solutions? Contact our security specialists today for
            a free consultation.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-xl">
                <Phone className="text-orange-400" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-slate-400">+254 731 388 444/+
254 701 686 304</p>
                
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-xl">
                <Mail className="text-orange-400" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email Address</h4>
                <p className="text-slate-400">
                  info@kenpalt.co.ke
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-xl">
                <MapPin className="text-orange-400" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Office Location</h4>
                <p className="text-slate-400">
                  Nairobi CBD, Kenya
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-xl">
                <Clock3 className="text-orange-400" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Working Hours</h4>
                <p className="text-slate-400">
                  Mon - Sat: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">
            Request a Security Consultation
          </h3>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+254..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Security Service Needed
              </label>

              <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition">
                <option>CCTV Installation</option>
                <option>Alarm Systems</option>
                <option>Access Control</option>
                <option>Electric Fence</option>
                <option>Biometric Systems</option>
                <option>General Consultation</option>
                <option>Networking & Electrical Wiring</option>
                <option>Automatic Gates</option>
                <option>Fire Detection, Suppression & Extinguishing Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your security needs..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-black font-semibold py-4 rounded-xl"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}