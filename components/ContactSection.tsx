"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
              Contattaci
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6 leading-tight">
              Parliamo del tuo{" "}
              <span className="font-semibold">prossimo viaggio</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Che si tratti di una vacanza da sogno, una trasferta aziendale o
              un congresso, il nostro team è pronto ad ascoltarti.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <MapPin className="h-5 w-5" />,
                  label: "Indirizzo",
                  value: "Via Matteotti, 66 — Desio (MB)",
                  href: "https://maps.google.com/?q=Via+Matteotti+66+Desio",
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  label: "Telefono",
                  value: "+39 0362 629394",
                  href: "tel:+390362629394",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  label: "Email",
                  value: "info@beaturviaggi.it",
                  href: "mailto:info@beaturviaggi.it",
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  label: "Orari",
                  value: "Lun–Ven 9:00–13:00 / 15:00–19:00",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#CC0000] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-800 font-medium hover:text-[#CC0000] transition-colors duration-200 cursor-pointer"
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Richiedi un preventivo
            </h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Mario"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/30 focus:border-[#CC0000] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Cognome
                  </label>
                  <input
                    id="cognome"
                    type="text"
                    placeholder="Rossi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/30 focus:border-[#CC0000] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mario@esempio.it"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/30 focus:border-[#CC0000] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="servizio" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Servizio di interesse
                </label>
                <select
                  id="servizio"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#CC0000]/30 focus:border-[#CC0000] transition-colors cursor-pointer appearance-none"
                >
                  <option value="">Seleziona un servizio</option>
                  <option>Viaggio Leisure</option>
                  <option>Viaggio di Nozze</option>
                  <option>Corporate Travel</option>
                  <option>Congresso Medico</option>
                  <option>Biglietteria</option>
                  <option>Crociera</option>
                </select>
              </div>
              <div>
                <label htmlFor="messaggio" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  rows={4}
                  placeholder="Raccontaci la tua idea di viaggio..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CC0000]/30 focus:border-[#CC0000] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#CC0000] text-white font-semibold rounded-xl hover:bg-[#aa0000] transition-colors duration-200 cursor-pointer text-sm tracking-wide"
              >
                Invia richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
