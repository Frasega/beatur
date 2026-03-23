"use client";
import { motion } from "framer-motion";
import { CalendarCheck, Users, MapPin, Award } from "lucide-react";

const features = [
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    title: "Logistica completa",
    desc: "Gestione di ogni aspetto organizzativo: venue, transfer, alloggi, ristorazione.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Coordinamento ECM",
    desc: "Supporto per l'accreditamento e gestione delle credenziali formative.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Destinazioni in Italia e all'estero",
    desc: "Network consolidato di strutture congressuali in tutta Europa.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Esperienza comprovata",
    desc: "Decenni di collaborazioni con società scientifiche e aziende farmaceutiche.",
  },
];

export default function MedicalSection() {
  return (
    <section id="congressi" className="py-24 md:py-32 bg-gradient-to-b from-[#F0EBE2]/30 via-transparent to-[#E8E2D4]/25">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=85"
                alt="Congresso medico internazionale"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
            >
              <p className="text-3xl font-bold text-gray-900">35+</p>
              <p className="text-xs text-gray-500 mt-1">anni di esperienza</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
              Congressi
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6 leading-tight">
              Congressi e conferenze{" "}
              <span className="font-semibold">medico-scientifiche</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Una divisione dedicata interamente all&apos;organizzazione di eventi
              nel settore della salute. Collaboriamo con società scientifiche,
              ospedali e aziende farmaceutiche per eventi di ogni dimensione.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#CC0000] flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
