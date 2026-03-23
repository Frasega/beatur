"use client";
import { motion } from "framer-motion";
import { Clock, Users, Star, Tag } from "lucide-react";

const packages = [
  {
    badge: "Più richiesto", badgeColor: "#CC0000",
    destination: "Maldive", tag: "Mare & Relax", duration: "10 notti", persons: "2 persone", stars: 5,
    originalPrice: "€ 4.800", price: "€ 3.990", discount: "-17%",
    includes: ["Volo A/R", "Resort 5★", "All Inclusive", "Transfer"],
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop&q=80",
  },
  {
    badge: "Offerta limitata", badgeColor: "#111111",
    destination: "Grecia — Santorini", tag: "Coppia & Romantico", duration: "7 notti", persons: "2 persone", stars: 4,
    originalPrice: "€ 2.400", price: "€ 1.790", discount: "-25%",
    includes: ["Volo A/R", "Hotel vista mare", "Colazione", "Transfer"],
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&auto=format&fit=crop&q=80",
  },
  {
    badge: "Luna di miele", badgeColor: "#CC0000",
    destination: "Bali", tag: "Esperienziale", duration: "14 notti", persons: "2 persone", stars: 5,
    originalPrice: "€ 5.200", price: "€ 4.290", discount: "-17%",
    includes: ["Volo A/R", "Villa privata", "Mezza pensione", "Escursioni"],
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&auto=format&fit=crop&q=80",
  },
  {
    badge: "Estate 2025", badgeColor: "#111111",
    destination: "Costiera Amalfitana", tag: "Italia · Lusso", duration: "5 notti", persons: "2 persone", stars: 5,
    originalPrice: "€ 1.900", price: "€ 1.490", discount: "-22%",
    includes: ["Hotel boutique", "Colazione", "Tour in barca", "Transfer"],
    img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=700&auto=format&fit=crop&q=80",
  },
  {
    badge: "Avventura", badgeColor: "#CC0000",
    destination: "Giappone", tag: "Cultura & Scoperta", duration: "12 notti", persons: "2 persone", stars: 4,
    originalPrice: "€ 4.100", price: "€ 3.390", discount: "-17%",
    includes: ["Volo A/R", "Hotel 4★", "Colazione", "Rail pass"],
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&auto=format&fit=crop&q=80",
  },
  {
    badge: "Last minute", badgeColor: "#CC0000",
    destination: "Marrakech", tag: "Weekend lungo", duration: "4 notti", persons: "2 persone", stars: 4,
    originalPrice: "€ 1.100", price: "€ 790", discount: "-28%",
    includes: ["Volo A/R", "Riad 4★", "Colazione", "Tour città"],
    img: "https://images.unsplash.com/photo-1539020140153-e479b8f22b66?w=700&auto=format&fit=crop&q=80",
  },
];

export default function PackagesSection() {
  return (
    <section id="pacchetti" className="py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#E8E2D4]/50 via-[#DFD8C8]/55 to-[#E4DDD0]/45">
      {/* Header */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#CC0000] mb-2">
              Pacchetti in offerta
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
              I nostri <span className="font-black">pacchetti</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-light max-w-sm">
              Scorri per scoprire tutte le offerte. Prezzi speciali per chi prenota ora.
            </p>
          </div>
          <a
            href="#contatti"
            className="text-sm text-[#CC0000] font-semibold hover:underline self-start md:self-auto whitespace-nowrap"
          >
            Richiedi un preventivo →
          </a>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-10 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="group flex-none w-[300px] md:w-[340px] bg-white rounded-2xl overflow-hidden snap-start cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={pkg.img}
                alt={pkg.destination}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Badge */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm"
                style={{ backgroundColor: pkg.badgeColor }}
              >
                {pkg.badge}
              </div>

              {/* Discount */}
              <div className="absolute top-3 right-3 bg-white text-[#CC0000] text-xs font-black px-2 py-1 rounded-sm">
                {pkg.discount}
              </div>

              {/* Stars overlay */}
              <div className="absolute bottom-3 left-3 flex items-center gap-0.5">
                {Array.from({ length: pkg.stars }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-white text-white" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-lg leading-tight tracking-tight">{pkg.destination}</h3>
                <span className="text-gray-400 text-xs font-medium flex-shrink-0 mt-0.5">{pkg.tag}</span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4 mt-2">
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Users className="h-3.5 w-3.5" /> {pkg.persons}
                </span>
              </div>

              {/* Includes */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {pkg.includes.map((inc, j) => (
                  <span key={j} className="flex items-center gap-1 text-[10px] font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                    <Tag className="h-2.5 w-2.5 text-[#CC0000]" />
                    {inc}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray-400 text-xs line-through">{pkg.originalPrice}</p>
                  <p className="text-gray-900 text-xl font-black leading-none">{pkg.price}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">a persona, volo incluso</p>
                </div>
                <a
                  href="#contatti"
                  className="px-4 py-2.5 bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#aa0000] transition-colors cursor-pointer"
                >
                  Richiedi info
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* End card */}
        <div className="flex-none w-[200px] flex flex-col items-center justify-center gap-4 snap-start">
          <p className="text-gray-400 text-sm font-light text-center leading-relaxed">
            Non trovi quello che cerchi?
          </p>
          <a
            href="#contatti"
            className="px-6 py-3 bg-[#111111] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#CC0000] transition-colors cursor-pointer text-center"
          >
            Pacchetto su misura
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {packages.map((_, i) => (
          <div key={i} className={`h-1 rounded-full bg-gray-300 transition-all ${i === 0 ? "w-6 bg-[#CC0000]" : "w-1.5"}`} />
        ))}
      </div>
    </section>
  );
}
