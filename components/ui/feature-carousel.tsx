"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Heart,
  Briefcase,
  GraduationCap,
  Ticket,
  Ship,
  Mountain,
  Globe,
  Users,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "leisure",
    label: "Viaggi Leisure",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
    description: "Vacanze su misura in ogni angolo del mondo.",
  },
  {
    id: "nozze",
    label: "Viaggi di Nozze",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
    description: "La luna di miele perfetta, pensata solo per voi.",
  },
  {
    id: "corporate",
    label: "Corporate Travel",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
    description: "Trasferte aziendali gestite con professionalità.",
  },
  {
    id: "congressi",
    label: "Congressi",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    description: "Organizzazione completa di eventi e congressi.",
  },
  {
    id: "biglietteria",
    label: "Biglietteria",
    icon: Ticket,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
    description: "Voli IATA, treni, traghetti e transfer.",
  },
  {
    id: "crociere",
    label: "Crociere",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200",
    description: "Le migliori rotte con MSC e grandi armatori.",
  },
  {
    id: "montagna",
    label: "Montagna & Sci",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1200",
    description: "Dolomiti, Alpi e vette di tutto il mondo.",
  },
  {
    id: "gruppi",
    label: "Viaggi di Gruppo",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200",
    description: "Esperienze condivise, ricordi indimenticabili.",
  },
  {
    id: "pacchetti",
    label: "Pacchetti Offerta",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    description: "Le migliori destinazioni ai prezzi più vantaggiosi.",
  },
  {
    id: "voli",
    label: "Voli & Transfer",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200",
    description: "Biglietteria aerea per ogni compagnia del mondo.",
  },
];

const AUTO_PLAY_INTERVAL = 3200;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-[1120px] mx-auto px-0 md:px-0">
      <div className="relative overflow-hidden rounded-none md:rounded-[2rem] lg:rounded-[3rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-gray-200 shadow-sm">
        {/* LEFT — Lista servizi scorrevole */}
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[420px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#F8F7F5]">
          {/* Gradient top */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F8F7F5] via-[#F8F7F5]/80 to-transparent z-40" />
          {/* Gradient bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F8F7F5] via-[#F8F7F5]/80 to-transparent z-40" />

          {/* Brand header */}
          <div className="absolute top-6 left-8 md:left-16 z-50 flex items-center gap-2">
            <div className="w-6 h-6 bg-[#CC0000] rounded-sm flex items-center justify-center">
              <span className="text-white font-black text-xs">B</span>
            </div>
            <span className="text-gray-400 text-xs font-light tracking-[0.2em] uppercase">
              BEA TUR · Dal 1988
            </span>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-8 md:left-16 z-50 flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-widest font-medium">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              ↕
            </motion.div>
            Scorri per esplorare
          </div>

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-8 py-3.5 rounded-full transition-all duration-700 text-left group border cursor-pointer",
                      isActive
                        ? "bg-[#CC0000] text-white border-[#CC0000] z-10"
                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 flex-shrink-0 transition-colors duration-500",
                        isActive ? "text-white" : "text-gray-400"
                      )}
                    />
                    <span className="font-medium text-sm tracking-wider whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Card immagine */}
        <div className="flex-1 min-h-[420px] md:min-h-[540px] lg:h-full relative bg-white flex items-center justify-center py-12 md:py-20 lg:py-14 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-100">
          <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.87 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-6 border-white bg-white origin-center shadow-xl"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-[#CC0000] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit mb-3">
                          {index + 1} · {feature.label}
                        </div>
                        <p className="text-white font-light text-lg md:text-xl leading-tight tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
