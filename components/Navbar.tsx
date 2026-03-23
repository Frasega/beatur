"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MobileNavSidebar } from "@/components/ui/sidebar";
import { NavBar } from "@/components/ui/tubelight-navbar";
import {
  Home,
  Layers,
  Package,
  Globe,
  Users,
  Phone,
} from "lucide-react";

const tubelightItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Servizi", url: "#servizi", icon: Layers },
  { name: "Pacchetti", url: "#pacchetti", icon: Package },
  { name: "Chi Siamo", url: "#chi-siamo", icon: Users },
  { name: "Contatti", url: "#contatti", icon: Phone },
];

const mobileLinks = tubelightItems.map((item) => ({
  label: item.name,
  href: item.url,
}));

function BeaturLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-9 h-9 bg-[#CC0000] rounded-sm flex-shrink-0">
        <span
          className="text-white font-black text-xl leading-none"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.05em" }}
        >
          B
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-black text-base tracking-widest uppercase transition-colors ${
            scrolled ? "text-[#111111]" : "text-[#111111]"
          }`}
          style={{ letterSpacing: "0.12em" }}
        >
          BEA TUR
        </span>
        <span
          className={`text-[10px] font-light tracking-[0.18em] uppercase transition-colors ${
            scrolled ? "text-gray-500" : "text-gray-500"
          }`}
        >
          viaggi e turismo
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar: logo + CTA */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <BeaturLogo scrolled={scrolled} />

          {/* Desktop: right side CTA only */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contatti"
              className="px-5 py-2.5 bg-[#CC0000] text-white text-xs font-bold rounded-sm hover:bg-[#aa0000] transition-colors duration-200 cursor-pointer tracking-widest uppercase"
            >
              Preventivo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <MobileNavSidebar links={mobileLinks} />
        </div>
      </motion.header>

      {/* Tubelight pill nav — desktop center, mobile bottom */}
      <NavBar items={tubelightItems} />
    </>
  );
}
