"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceData } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={service.heroImg}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 pb-16 pt-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/#servizi"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                Tutti i servizi
              </Link>
              <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.25em] mb-3">
                Beatur Viaggi
              </p>
              <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-white/70 text-lg font-light max-w-xl">
                {service.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1120px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
                  Perché sceglierci
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight leading-tight mb-6">
                  {service.description}
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  {service.intro}
                </p>
                <Link href="#contatti-servizio">
                  <div className="inline-flex items-center gap-2 px-7 py-4 bg-[#CC0000] text-white font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-[#aa0000] transition-colors cursor-pointer">
                    {service.cta}
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 md:py-24 bg-[#F8F7F5]">
          <div className="max-w-[1120px] mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-3">
                Cosa offriamo
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                I nostri <span className="font-black">servizi inclusi</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="bg-white p-7 hover:-translate-y-1 transition-all duration-250 cursor-default"
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="w-1 h-8 bg-[#CC0000] rounded-full mb-5" />
                  <h3 className="font-bold text-gray-900 text-base mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included (checklist) — solo per alcuni servizi */}
        {service.includes && service.includes.length > 0 && (
          <section className="py-20 md:py-24 bg-white">
            <div className="max-w-[1120px] mx-auto px-6 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-3">
                  Dettaglio
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                  Tutto quello che <span className="font-black">gestiamo</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#CC0000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Destinations grid — solo per alcuni servizi */}
        {service.destinations && service.destinations.length > 0 && (
          <section className="py-20 md:py-24 bg-[#F8F7F5]">
            <div className="max-w-[1120px] mx-auto px-6 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-3">
                  Dove andiamo
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                  Destinazioni <span className="font-black">selezionate</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.destinations.map((dest, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group relative overflow-hidden cursor-pointer"
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={dest.img}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">
                        {dest.tag}
                      </p>
                      <h3 className="text-white font-bold text-base">
                        {dest.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA finale */}
        <section
          id="contatti-servizio"
          className="py-20 md:py-28 bg-[#111111]"
        >
          <div className="max-w-[1120px] mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Contattaci
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4 leading-tight">
                Pronti a iniziare?
              </h2>
              <p className="text-white/50 text-base font-light max-w-md mx-auto mb-10">
                Contattaci per un preventivo gratuito e personalizzato. Risponderemo entro 24 ore.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+390362629394"
                  className="px-8 py-4 bg-[#CC0000] text-white font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-[#aa0000] transition-colors cursor-pointer"
                >
                  +39 0362 629394
                </a>
                <a
                  href="mailto:info@beaturviaggi.it"
                  className="px-8 py-4 border border-white/20 text-white font-medium text-sm rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
                >
                  info@beaturviaggi.it
                </a>
              </div>

              <p className="text-white/30 text-xs mt-8">
                Via Matteotti, 66 — Desio (MB) · Lun–Ven 9:00–13:00 / 15:00–19:00
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
