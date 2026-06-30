import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const closeMenu = () => {
  setIsOpen(false);
};
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-4 left-0 w-full z-50 px-4 lg:px-8"
    >
      {" "}
      <nav className="backdrop-blur-2xl bg-white/80 border border-white/30 rounded-3xl shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                K
              </div>

              <div>
                <h1 className="font-bold text-xm md:text-xl text-gray-900">
                  K REMOVAL SERVICES
                </h1>
                <p className="text-xs text-gray-500">Moving Services</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                  Services
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition duration-300"
                  />
                </button>

                <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="w-72 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-3">
                    <Link
                      to="/house-removals"
                      className="block p-3 rounded-xl hover:bg-blue-50 transition"
                    >
                      <h4 className="font-semibold text-gray-900">
                        House Removals
                      </h4>

                      <p className="text-sm text-gray-500">
                        Home moving services
                      </p>
                    </Link>

                    <Link
                      to="/office-relocation"
                      className="block p-3 rounded-xl hover:bg-blue-50 transition"
                    >
                      <h4 className="font-semibold text-gray-900">
                        Office Relocation
                      </h4>

                      <p className="text-sm text-gray-500">
                        Office moving solutions
                      </p>
                    </Link>

                    <Link
                      to="/student-moving"
                      className="block p-3 rounded-xl hover:bg-blue-50 transition"
                    >
                      <h4 className="font-semibold text-gray-900">
                        Student Moving
                      </h4>

                      <p className="text-sm text-gray-500">
                        Affordable student moves
                      </p>
                    </Link>

                    <Link
                      to="/rubbish-removal"
                      className="block p-3 rounded-xl hover:bg-blue-50 transition"
                    >
                      <h4 className="font-semibold text-gray-900">
                        Rubbish Removal
                      </h4>

                      <p className="text-sm text-gray-500">
                        Fast waste collection
                      </p>
                    </Link>

                    <Link
                      to="/packages"
                      className="block p-3 rounded-xl hover:bg-blue-50 transition"
                    >
                      <h4 className="font-semibold text-gray-900">
                        Packages Delivery
                      </h4>

                      <p className="text-sm text-gray-500">
                        Secure package transport
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/Packages"
                className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Packages
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition duration-300 shadow-lg">
                Get Moving
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div
              onClick={closeMenu}
              className="flex flex-col p-6 gap-4 bg-white/90 backdrop-blur-xl rounded-b-3xl"
            >
              <Link to="/">Home</Link>
              <Link to="/house-removals">House Removals</Link>
              <Link to="/office-relocation">Office Relocation</Link>
              <Link to="/student-moving">Student Moving</Link>
              <Link to="/rubbish-removal">Rubbish Removal</Link>
              <Link to="/packages">Packages</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>

              <button className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold">
                Get Moving
              </button>
            </div>{" "}
          </div>
        )}
      </nav>
    </motion.header>
  );
}
