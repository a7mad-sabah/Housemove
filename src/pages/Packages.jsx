import { motion } from "framer-motion";
import {
  Package,
  CheckCircle,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

const packages = [
  {
    title: "Basic",
    price: "£99",
    color: "from-emerald-500 to-green-600",
    icon: Package,
    features: [
      "Small House Move",
      "2 Professional Movers",
      "Loading & Unloading",
      "Basic Insurance",
      "Customer Support",
    ],
  },
  {
    title: "Standard",
    price: "£199",
    popular: true,
    color: "from-blue-600 to-cyan-500",
    icon: Truck,
    features: [
      "Medium House Move",
      "3 Professional Movers",
      "Packing Included",
      "Furniture Protection",
      "Insurance Included",
      "Priority Support",
    ],
  },
  {
    title: "Premium",
    price: "£399",
    color: "from-purple-600 to-pink-500",
    icon: ShieldCheck,
    features: [
      "Large House Move",
      "Full Packing Service",
      "Disassembly & Assembly",
      "Premium Insurance",
      "Dedicated Team",
      "24/7 Support",
    ],
  },
];

export default function Packages() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-15">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-semibold tracking-widest uppercase">
            Pricing Packages
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Choose Your Perfect Plan
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Affordable, transparent pricing designed for every type of move.
            Whether you're moving a small apartment or a large family home,
            we've got the right package for you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10">

          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="relative rounded-3xl overflow-hidden"
              >

                {item.popular && (
                  <div className="absolute top-5 right-5 z-20 bg-yellow-400 text-black text-xs px-4 py-2 rounded-full flex items-center gap-2 font-bold">
                    <Star size={14} fill="black" />
                    Most Popular
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-15`}
                />

                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8`}
                  >
                    <Icon className="text-white" size={38} />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="my-6">
                    <span className="text-5xl font-extrabold text-white">
                      {item.price}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">

                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <CheckCircle
                          className="text-emerald-400"
                          size={20}
                        />

                        {feature}
                      </div>
                    ))}

                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${item.color} hover:scale-105 duration-300`}
                  >
                    Choose Package
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}