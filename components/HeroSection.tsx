"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format&fit=crop&q=80", alt: "Maldive", style: { top: 0, left: 0, width: 220, height: 158, rotate: -2.5 } },
  { src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop&q=80", alt: "Santorini", style: { top: 24, right: 0, width: 186, height: 142, rotate: 2.8 } },
  { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80", alt: "Bali", style: { top: 178, left: 50, width: 204, height: 156, rotate: -0.8 } },
  { src: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&auto=format&fit=crop&q=80", alt: "Amalfi", style: { bottom: 0, left: 10, width: 172, height: 132, rotate: 2.2 } },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop&q=80", alt: "Giappone", style: { bottom: 10, right: 14, width: 194, height: 148, rotate: -3 } },
];

const WORDS = ["viaggiare.", "scoprire il mondo.", "sognare in grande.", "le avventure.", "la luna di miele."];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-transparent pt-16">
      {/* Animated background paths — no overflow-hidden so they fade naturally */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      {/* Bottom fade: smooth transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#EAE4D8]/70 to-transparent pointer-events-none z-10" />
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center min-h-[520px]">

          {/* LEFT — headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.35em] text-[#CC0000] mb-6"
            >
              Desio, Milano · Dal 1988
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.1]">
                Per chi ama
                <br />
                <span className="font-black text-[#CC0000]">viaggiare.</span>
              </h1>

              <div className="mt-5 space-y-1.5">
                {["Per le coppie di sposi.", "Per gli avventurosi.", "Per chi sogna il mondo."].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                    className="text-lg md:text-xl text-gray-600 font-light"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#servizi"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#aa0000] transition-colors"
              >
                Scopri i servizi
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="tel:+390362629394"
                className="flex items-center gap-2 text-gray-700 text-sm hover:text-[#CC0000] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                0362 629394
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-5 text-[11px] text-gray-500 uppercase tracking-widest font-medium"
            >
              <span>Turisanda</span><span>·</span>
              <span>MSC Crociere</span><span>·</span>
              <span>IATA Certified</span><span>·</span>
              <span>35+ anni</span>
            </motion.div>
          </div>

          {/* RIGHT — photo collage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[420px] lg:h-[500px] hidden lg:block overflow-hidden"
          >
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.55, ease: "easeOut" }}
                whileHover={{ scale: 1.04, zIndex: 20 }}
                className="absolute overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                style={{
                  ...(photo.style.top !== undefined ? { top: photo.style.top } : {}),
                  ...(photo.style.bottom !== undefined ? { bottom: photo.style.bottom } : {}),
                  ...(photo.style.left !== undefined ? { left: photo.style.left } : {}),
                  ...(photo.style.right !== undefined ? { right: photo.style.right } : {}),
                  width: photo.style.width,
                  height: photo.style.height,
                  rotate: `${photo.style.rotate}deg`,
                  zIndex: i === 2 ? 10 : i,
                }}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-[10px] font-bold uppercase tracking-widest">
                  {photo.alt}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
