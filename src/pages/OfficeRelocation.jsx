import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  ShieldCheck,
  Star,
  Phone,
  Check,
} from "lucide-react";
import Plan from "../pages/Plan";

export default function OfficeRelocation() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/OfficeRelocation.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-3xl mt-16 lg:mt-25">
            {/* <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
            >
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              Professional House Removal Service
            </motion.div> */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-4xl font-bold text-white leading-tight"
            >
              Professional Office Relocation
              <span className="block text-blue-400"> Services in London </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-6 sm:leading-8"
            >
              Moving your business in London demands more than muscle and vans.
              Success comes from understanding that trading floors can’t pause
              for market hours, server rooms need climate control, and City
              loading bays require advance booking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-3 sm:space-y-4"
            >
              {[
                "Business continuity guaranteed – minimal disruption",
                "Complete IT equipment relocation expertise",
                "Professional project management from start to finish",
                "Fully insured service with £30.000 coverage",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full  flex-shrink-0">
                    <Check size={16} className="text-white stroke-[3]" />
                  </div>
                  <p className="text-lg md:text-xl text-gray-200">{item}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-row gap-3 mt-8"
            >
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-2">
                Order removal <ArrowRight size={18} />
              </button>
              <button className="flex-1 lg:flex-none bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 lg:px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Now
              </button>{" "}
            </motion.div>
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-4 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <Home className="text-blue-400 mb-3" size={28} />
              <h3 className="text-white font-semibold">Experienced</h3>
              <p className="text-gray-300 text-sm mt-2">
                Experienced with all kinds of property moves{" "}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <ShieldCheck className="text-green-400 mb-3" size={28} />
              <h3 className="text-white font-semibold">Full coverage</h3>
              <p className="text-gray-300 text-sm mt-2">
                Full coverage across all London areas and beyond{" "}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <Star className="text-yellow-400 mb-3" size={28} />
              <h3 className="text-white font-semibold">Flexible scheduling</h3>
              <p className="text-gray-300 text-sm mt-2">
                Flexible scheduling to match completion dates
              </p>
            </div>
          </motion.div> */}
          </div>
        </div>
        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl"
        >
          ↓
        </motion.div>
      </section>

      <Plan />
    </>
  );
}
