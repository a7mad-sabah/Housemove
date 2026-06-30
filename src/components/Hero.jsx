import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/moving.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl mt-15 lg:mt-5">
          {" "}
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
          >
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            Trusted By 5000+ Customers
          </motion.div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Moving Made
            <span className="block text-blue-400">Easy & Stress-Free</span>
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl"
          >
            Professional house removals, office relocation, student moving and
            package delivery services.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-row gap-3 mt-8"
          >
            
            <button className="flex-1 lg:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
              Get Moving
              <ArrowRight size={18} />
            </button>
            <button className="flex-1 lg:flex-none bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 lg:px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Now
            </button>{" "}
          </motion.div>
          {/* Stats */}
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        ↓
      </motion.div>
    </section>
  );
}
