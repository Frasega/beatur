"use client";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

const milestones = [
  { year: "1988", label: "Fondazione a Desio" },
  { year: "2000", label: "Seconda generazione" },
  { year: "2010", label: "Partner MSC & Turisanda" },
  { year: "oggi", label: "35+ anni di viaggi" },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="relative py-24 md:py-32 bg-[#2a2218] overflow-hidden">

      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={55}
        staticity={40}
        ease={60}
        size={0.45}
        color="#d4c4a8"
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CC0000] mb-4">
              Chi siamo
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
              Una storia di famiglia{" "}
              <span className="font-black text-white">dal 1988.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-5 font-light">
              Tutto inizia nel 1988 a Desio, in Brianza, quando nostro nonno aprì
              le porte di Beatur Viaggi con un'idea semplice ma potente: portare
              le persone dove desiderano andare, con cura e competenza vera.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10 font-light">
              Negli anni, l'agenzia è passata di mano in mano nella nostra
              famiglia — da padre a figlio — mantenendo intatta quella filosofia
              di servizio personalizzato che nessun algoritmo potrà mai sostituire.
              Oggi, dopo 35 anni e migliaia di viaggiatori felici, continuiamo
              a organizzare ogni partenza come se fosse la nostra.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="border border-white/10 rounded-xl p-3 text-center"
                >
                  <p className="text-[#CC0000] font-black text-lg leading-none">{m.year}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-medium leading-tight">{m.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+390362629394"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#aa0000] transition-colors"
              >
                0362 629394
              </a>
              <a
                href="mailto:info@beaturviaggi.it"
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white/60 text-sm font-medium rounded-sm hover:border-[#CC0000] hover:text-white transition-colors"
              >
                info@beaturviaggi.it
              </a>
            </div>
          </motion.div>

          {/* RIGHT — image collage */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&auto=format&fit=crop&q=80"
                  alt="Paesaggio di viaggio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
                  alt="Spiaggia paradisiaca"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-3 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=80"
                  alt="Montagne e natura"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=80"
                  alt="Hotel di lusso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
