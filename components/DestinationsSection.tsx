"use client";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Maldive",
    tag: "Mare & Relax",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Santorini",
    tag: "Grecia",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Giappone",
    tag: "Asia & Cultura",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Dolomiti",
    tag: "Italia · Montagna",
    img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Marrakech",
    tag: "Marocco",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8f22b66?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "New York",
    tag: "USA · City Break",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Costiera Amalfitana",
    tag: "Italia · Sud",
    img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Thailandia",
    tag: "Asia · Esotico",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&auto=format&fit=crop&q=80",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinazioni" className="py-20 md:py-28 bg-[#F8F7F5]">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
            Le nostre destinazioni
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
              Dove ti <span className="font-black">portiamo</span>
            </h2>
            <a
              href="#contatti"
              className="text-sm text-[#CC0000] font-medium hover:underline cursor-pointer self-start md:self-auto"
            >
              Richiedi una destinazione →
            </a>
          </div>
        </motion.div>

        {/* Grid destinazioni */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* Immagine */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-medium mb-1">
                  {dest.tag}
                </p>
                <h3 className="text-white font-bold text-base leading-tight">
                  {dest.name}
                </h3>
              </div>

              {/* Hover CTA */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#CC0000] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                  Info →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
