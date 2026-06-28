import React from "react";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  // Facebook,
  // Instagram,
  // Twitter,
  // Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <Truck size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">K REMOVAL SERVICES</h3>
                <p className="text-gray-400 text-sm">Moving Services</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Professional moving solutions for homes, offices, students and
              businesses. Safe, reliable and stress-free moving experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>House Removals</li>
              <li>Office Relocation</li>
              <li>Student Moving</li>
              <li>Rubbish Removal</li>
              <li>Package Delivery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact Info</h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-400" />
                <span>London, United Kingdom</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+44 123 456 789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@ K REMOVAL SERVICES.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                {/* <Facebook size={18} /> */}
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                {/* <Instagram size={18} /> */}
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                {/* <Twitter size={18} /> */}
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                {/* <Linkedin size={18} /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 K REMOVAL SERVICES. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
