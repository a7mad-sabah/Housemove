import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-slate-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-cyan-600 to-slate-900"></div>

        {/* Blur Circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold"
          >
            Contact Us
          </motion.h1>

          <p className="mt-6 text-slate-200 max-w-2xl mx-auto text-lg">
            Get in touch with our moving experts. We're ready to help make your
            move smooth and stress-free.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 font-semibold uppercase">
            Contact Information
          </span>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Let's Discuss Your Move
          </h2>

          <p className="text-slate-400 mt-6 leading-8">
            Whether you're moving home, office, or furniture, our professional
            team is always available to answer your questions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                text: "+964 750 123 4567",
              },
              {
                icon: Mail,
                title: "Email",
                text: "info@moving.com",
              },
              {
                icon: MapPin,
                title: "Address",
                text: "Sulaymaniyah, Iraq",
              },
              {
                icon: Clock,
                title: "Working Hours",
                text: "Sat - Thu | 8 AM - 7 PM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">
                  <item.icon className="text-cyan-400" />
                </div>

                <h3 className="font-semibold text-xl">{item.title}</h3>

                <p className="text-slate-400 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8">Send Message</h2>

            <form className="space-y-6">
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-cyan-500"
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-cyan-500"
                />
              </div>

              <div className="relative">
                <Phone
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-cyan-500"
                />
              </div>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl p-5 outline-none resize-none focus:border-cyan-500"
              />

              <button
                className="
                w-full py-4 rounded-2xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:scale-[1.02]
                transition-all duration-300
                flex items-center justify-center gap-3
                font-semibold text-lg
              "
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
        >
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Sulaymaniyah&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[550px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
