"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "35+", label: "Anni di attività" },
  { value: "10k+", label: "Clienti soddisfatti" },
  { value: "120+", label: "Destinazioni gestite" },
  { value: "500+", label: "Congressi organizzati" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#CC0000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/80 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
