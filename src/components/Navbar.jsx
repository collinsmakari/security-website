import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLink = "hover:text-orange-500 transition duration-300";

  return (
    <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-orange-600">Kenpalt Kenya</h1>

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

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800 px-6 pb-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
