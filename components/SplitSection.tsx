"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Heart, Briefcase, GraduationCap, Ticket, Ship, ArrowRight,
} from "lucide-react";

/* ─── Services ─────────────────────────────────────────────────── */
const services = [
  { title: "Viaggi Leisure", subtitle: "Vacanze su misura in ogni angolo del mondo", slug: "viaggi-leisure", icon: Globe, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80" },
  { title: "Viaggi di Nozze", subtitle: "La luna di miele perfetta, pensata solo per voi", slug: "viaggi-di-nozze", icon: Heart, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format&fit=crop&q=80" },
  { title: "Corporate Travel", subtitle: "Trasferte aziendali gestite con professionalità", slug: "corporate-travel", icon: Briefcase, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80" },
  { title: "Congressi", subtitle: "Organizzazione completa di congressi ed eventi", slug: "congressi-medici", icon: GraduationCap, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=80" },
  { title: "Biglietteria", subtitle: "Voli IATA, treni, traghetti e transfer", slug: "biglietteria", icon: Ticket, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80" },
  { title: "Crociere", subtitle: "MSC e i migliori armatori internazionali", slug: "crociere", icon: Ship, img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&auto=format&fit=crop&q=80" },
];

/* ─── Destinations ──────────────────────────────────────────────── */
const destinations = [
  { name: "Maldive", tag: "Mare", slug: "maldive", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&auto=format&fit=crop&q=80" },
  { name: "Santorini", tag: "Grecia", slug: "santorini", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&auto=format&fit=crop&q=80" },
  { name: "Giappone", tag: "Asia", slug: "giappone", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&auto=format&fit=crop&q=80" },
  { name: "Dolomiti", tag: "Italia", slug: "dolomiti", img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&auto=format&fit=crop&q=80" },
  { name: "Marrakech", tag: "Marocco", slug: "marrakech", img: "https://images.unsplash.com/photo-1539020140153-e479b8f22b66?w=400&auto=format&fit=crop&q=80" },
  { name: "New York", tag: "USA", slug: "new-york", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=80" },
  { name: "Costiera Amalfitana", tag: "Italia", slug: "costiera-amalfitana", img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&auto=format&fit=crop&q=80" },
  { name: "Thailandia", tag: "Asia", slug: "thailandia", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&auto=format&fit=crop&q=80" },
];

/* ─── Service row — full-row image reveal on hover ─────────────── */
function ServiceRow({ item, index }: { item: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
    >
      <Link
        href={`/servizi/${item.slug}`}
        className="group relative flex items-center justify-between py-8 px-6 border-b border-gray-100 last:border-0 overflow-hidden cursor-pointer"
      >
        {/* Full background image — reveals on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-5">
          <item.icon className="h-6 w-6 text-gray-300 group-hover:text-white/70 transition-colors duration-400 flex-shrink-0" />
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 group-hover:text-white transition-colors duration-400 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-white/55 transition-colors duration-400 mt-0.5 font-light">
              {item.subtitle}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">
          <span className="text-white/70 text-xs font-medium uppercase tracking-widest hidden sm:block">Scopri</span>
          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
            <ArrowRight className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main ──────────────────────────────────────────────────────── */
export default function SplitSection() {
  return (
    <section className="relative py-0">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[72fr_28fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          {/* ── LEFT 70%: Servizi ─────────────────────────────────── */}
          <div id="servizi" className="py-16 lg:pr-10 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#CC0000] mb-2">Cosa facciamo</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight leading-tight">
                I nostri <span className="font-black">servizi</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2 font-light">Passa con il cursore per scoprire ogni servizio</p>
            </motion.div>

            <div className="border-t border-gray-100">
              {services.map((item, i) => (
                <ServiceRow key={item.slug} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* ── RIGHT 30%: Destinazioni ──────────────────────────── */}
          <div id="destinazioni" className="py-16 lg:pl-10 bg-slate-50">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-end justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#CC0000] mb-1">Dove ti portiamo</p>
                <h2 className="text-xl md:text-2xl font-light text-gray-900 tracking-tight leading-tight">
                  Le <span className="font-black">destinazioni</span>
                </h2>
              </div>
              <a href="#contatti" className="text-xs text-[#CC0000] font-semibold hover:underline whitespace-nowrap self-end">
                Altre →
              </a>
            </motion.div>

            {/* Compact 2-col grid */}
            <div className="grid grid-cols-2 gap-2">
              {destinations.map((dest, i) => (
                <motion.div
                  key={dest.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={`/destinazioni/${dest.slug}`}
                    className="group relative block overflow-hidden rounded-xl aspect-square cursor-pointer"
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-[#CC0000]/0 group-hover:bg-[#CC0000]/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white/50 text-[8px] uppercase tracking-widest">{dest.tag}</p>
                      <h3 className="text-white font-bold text-xs leading-tight">{dest.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
