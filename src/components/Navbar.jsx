import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = "hover:text-orange-500 transition duration-300";

  return (
    <>
      <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-orange-600">Kenpalt Kenya</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className={navLink}>
              Home
            </Link>

            <Link to="/about" className={navLink}>
              About
            </Link>

            <Link to="/services" className={navLink}>
              Services
            </Link>

            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-end p-6 border-b border-slate-700">
          <button
            className="text-3xl hover:text-orange-500 transition duration-300"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 p-6 text-lg">
          <Link to="/" className={navLink} onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" className={navLink} onClick={() => setOpen(false)}>
            About
          </Link>

          <Link
            to="/services"
            className={navLink}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className={navLink}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
