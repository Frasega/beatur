"use client";
import { motion } from "framer-motion";
import { RevealImageList } from "@/components/ui/reveal-images";

export default function SpecializationsSection() {
  return (
    <section id="specializzazioni" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
              Le nostre aree
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6 leading-tight">
              Tre anime,{" "}
              <span className="font-semibold">un&apos;unica passione</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Da oltre 35 anni accompagniamo i nostri clienti in ogni tipo di
              viaggio: dalla vacanza da sogno alla trasferta professionale, fino
              all&apos;organizzazione di grandi eventi nel congressi.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Oltre 35 anni di esperienza nel settore",
                "Partner certificati: Turisanda, MSC Crociere",
                "Specializzati in eventi e congressi",
                "Sede a Desio (MB), operativi in tutta Italia",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#CC0000] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: reveal image list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <RevealImageList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
