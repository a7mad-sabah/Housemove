import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-700 to-cyan-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg max-w-2xl mx-auto text-gray-200"
          >
            Have questions? Need a moving quote? We're always ready to help you.
          </motion.p>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Talk</h2>

          <p className="text-gray-600 mb-10 leading-8">
            Contact us anytime. Whether you're moving your home, office, or
            furniture, our professional team is ready to help.
          </p>

          <div className="space-y-6">
            <div className="flex gap-5 p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Phone className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Phone</h3>

                <p className="text-gray-500">+964 750 123 4567</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Mail className="text-cyan-600" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Email</h3>

                <p className="text-gray-500">info@moving.com</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <MapPin className="text-green-600" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Address</h3>

                <p className="text-gray-500">Sulaymaniyah, Kurdistan, Iraq</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                <Clock className="text-orange-600" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Working Hours</h3>

                <p className="text-gray-500">Sat - Thu</p>

                <p className="text-gray-500">8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white shadow-2xl rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Map */}

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Sulaymaniyah&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
