import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Clock3,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Truck,
      title: "Fast Transportation",
      desc: "Safe and quick moving services for homes, offices, and businesses.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      desc: "We handle your furniture and belongings with maximum care.",
    },
    {
      icon: Clock3,
      title: "On Time",
      desc: "Always arriving on schedule with professional planning.",
    },
  ];
// Hello
  const stats = [
    { number: "1500+", text: "Happy Clients" },
    { number: "8+", text: "Years Experience" },
    { number: "3500+", text: "Completed Moves" },
    { number: "24/7", text: "Customer Support" },
  ];

  return (
    <section className="bg-slate-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Our Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100"
          >
            We provide reliable transportation and moving services with
            professionalism, safety, and customer satisfaction at the center of
            everything we do.
          </motion.p>
        </div>
      </div>

      {/* About */}

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200"
            className="rounded-3xl shadow-2xl"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6 text-slate-900">
            Moving Made Easy & Stress Free
          </h2>

          <p className="text-slate-600 leading-8 mb-6">
            Our experienced team provides professional moving and transportation
            services for homes and businesses. We focus on quality, safety,
            punctuality, and customer satisfaction.
          </p>

          <p className="text-slate-600 leading-8">
            Whether you are relocating your house or office, we ensure every
            item arrives safely and on time.
          </p>
        </motion.div>
      </div>

      {/* Features */}

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>

            <p className="text-slate-500 mt-4">
              Trusted transportation services with years of experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-slate-600 leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold">{item.number}</h2>

              <p className="mt-3 text-blue-100">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl shadow-lg bg-white">
            <Users className="text-blue-600 mb-5" size={45} />
            <h3 className="text-2xl font-bold mb-4">Customer First</h3>
            <p className="text-slate-600">
              Every decision we make is focused on delivering the best customer
              experience.
            </p>
          </div>

          <div className="p-10 rounded-3xl shadow-lg bg-white">
            <ShieldCheck className="text-blue-600 mb-5" size={45} />
            <h3 className="text-2xl font-bold mb-4">Trust & Safety</h3>
            <p className="text-slate-600">
              Your belongings are protected throughout every stage of the move.
            </p>
          </div>

          <div className="p-10 rounded-3xl shadow-lg bg-white">
            <Award className="text-blue-600 mb-5" size={45} />
            <h3 className="text-2xl font-bold mb-4">Professional Team</h3>
            <p className="text-slate-600">
              Skilled movers with years of experience and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24">
        <div className="max-w-5xl mx-auto text-center text-white px-6">
          <h2 className="text-5xl font-bold mb-6">Ready To Move?</h2>

          <p className="text-blue-100 text-lg mb-10">
            Contact us today and let our professional team handle your move with
            care and efficiency.
          </p>

          <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto hover:scale-105 transition">
            Contact Us
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
