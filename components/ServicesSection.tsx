"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  subtitle: string;
  slug: string;
  images: [{ src: string; alt: string }, { src: string; alt: string }];
}

const services: ServiceItem[] = [
  {
    title: "Viaggi Leisure",
    subtitle: "Pacchetti vacanza, tour, soggiorni su misura",
    slug: "viaggi-leisure",
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=80",
        alt: "Spiaggia tropicale",
      },
      {
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&auto=format&fit=crop&q=80",
        alt: "Paesaggio montano",
      },
    ],
  },
  {
    title: "Viaggi di Nozze",
    subtitle: "Luna di miele e lista nozze personalizzata",
    slug: "viaggi-di-nozze",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&auto=format&fit=crop&q=80",
        alt: "Viaggio di nozze romantico",
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&auto=format&fit=crop&q=80",
        alt: "Resort di lusso",
      },
    ],
  },
  {
    title: "Corporate Travel",
    subtitle: "Trasferte aziendali, meeting e incentive",
    slug: "corporate-travel",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&auto=format&fit=crop&q=80",
        alt: "Business travel",
      },
      {
        src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&auto=format&fit=crop&q=80",
        alt: "Aeroporto professionale",
      },
    ],
  },
  {
    title: "Congressi",
    subtitle: "Organizzazione completa di congressi ed eventi",
    slug: "congressi-medici",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=80",
        alt: "Congresso medico",
      },
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&auto=format&fit=crop&q=80",
        alt: "Conferenza scientifica",
      },
    ],
  },
  {
    title: "Biglietteria",
    subtitle: "Voli IATA, treni, traghetti e transfer",
    slug: "biglietteria",
    images: [
      {
        src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&auto=format&fit=crop&q=80",
        alt: "Aereo in volo",
      },
      {
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&auto=format&fit=crop&q=80",
        alt: "Treno ad alta velocità",
      },
    ],
  },
  {
    title: "Crociere",
    subtitle: "MSC e i migliori armatori internazionali",
    slug: "crociere",
    images: [
      {
        src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=300&auto=format&fit=crop&q=80",
        alt: "Nave da crociera",
      },
      {
        src: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=300&auto=format&fit=crop&q=80",
        alt: "Crociera nel Mediterraneo",
      },
    ],
  },
];

function ServiceListItem({ item }: { item: ServiceItem }) {
  // Immagini appaiono a SINISTRA (invertita rispetto a RevealImageList)
  const container = "absolute left-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-xl";

  return (
    <Link href={`/servizi/${item.slug}`} className="block group relative h-fit w-full overflow-visible border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between py-7 px-2 transition-all duration-300">
        {/* Immagini a sinistra — appaiono sull'hover */}
        <div className={container}>
          <div className={effect}>
            <img
              alt={item.images[1].alt}
              src={item.images[1].src}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div
          className={cn(
            container,
            "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:-rotate-12"
          )}
        >
          <div className={cn(effect, "duration-200")}>
            <img
              alt={item.images[0].alt}
              src={item.images[0].src}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Testo a destra */}
        <div className="flex items-center justify-between w-full pl-4 group-hover:pl-32 transition-all duration-500">
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 group-hover:opacity-30 transition-opacity duration-500 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 group-hover:opacity-30 transition-opacity duration-500 font-light">
              {item.subtitle}
            </p>
          </div>
          <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
            <div className="w-8 h-8 rounded-full border border-[#CC0000] flex items-center justify-center">
              <span className="text-[#CC0000] text-xs">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-4">
            Cosa facciamo
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight max-w-md leading-tight">
              I nostri <span className="font-black">servizi</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Passa con il cursore su ogni voce per scoprire le destinazioni
            </p>
          </div>
        </motion.div>

        {/* Service list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-100"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <ServiceListItem item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
