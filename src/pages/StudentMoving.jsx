import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Check,
  GraduationCap,
  Package,
  ShieldCheck,
} from "lucide-react";
import Plan from "../pages/Plan";
import Carddetails from "../components/Carddetails";

export default function StudentMoving() {
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
          <source src="/videos/StudentMoving.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center py-12">
          <div className="max-w-3xl mt-16 sm:mt-24">
            {/* <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
            >
              <GraduationCap
                size={18}
                className="text-blue-400"
              />
              Professional Student Moving Service
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-٤ xl font-bold text-white leading-tight"
            >
              Student Moving &
              <span className="block text-blue-400">
                University Relocation Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-200 text-base md:text-lg leading-8 max-w-2xl"
            >
              Moving into student accommodation, university halls, or a new
              apartment? We provide affordable and stress-free moving services
              specially designed for students across London.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 space-y-4"
            >
              {[
                "£50,000 goods in transit insurance",
                "Family-run London business",
                "Free packing materials Included",
                "Fixed-price, no hidden fees",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    <Check size={16} className="text-white stroke-[3]" />
                  </div>

                  <p className="text-gray-200 text-lg">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2">
                Book Student Move
                <ArrowRight size={18} />
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
            </motion.div>

            {/* Cards */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid md:grid-cols-3 gap-4 mt-12"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <GraduationCap
                  className="text-blue-400 mb-3"
                  size={28}
                />
                <h3 className="text-white font-semibold">
                  Student Friendly
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Flexible moving services designed for students.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <Package
                  className="text-green-400 mb-3"
                  size={28}
                />
                <h3 className="text-white font-semibold">
                  Secure Packing
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Safe handling of laptops, books and personal belongings.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <ShieldCheck
                  className="text-yellow-400 mb-3"
                  size={28}
                />
                <h3 className="text-white font-semibold">
                  Fully Insured
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Complete peace of mind during your move.
                </p>
              </div>
            </motion.div>
 */}
          </div>
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl z-20"
        >
          ↓
        </motion.div>
      </section>

      <Carddetails />
      <Plan />
    </>
  );
}