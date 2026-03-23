import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SplitSection from "@/components/SplitSection";
import PackagesSection from "@/components/PackagesSection";
import MedicalSection from "@/components/MedicalSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Separator: Hero → Servizi */}
      <div className="relative bg-[#EAE4D8]/80 py-6">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#CC0000]/50" />
        <div className="flex justify-center">
          <span className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-white bg-[#CC0000] px-4 py-1.5 rounded-full z-10 shadow-sm">
            I nostri servizi &amp; destinazioni
          </span>
        </div>
      </div>

      <SplitSection />

      {/* Separator: Servizi → Pacchetti */}
      <div className="relative bg-[#DFD8C8]/70 py-6">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#5c3d1e]/50" />
        <div className="flex justify-center">
          <span className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-white bg-[#5c3d1e] px-4 py-1.5 rounded-full z-10 shadow-sm">
            I nostri pacchetti
          </span>
        </div>
      </div>

      <PackagesSection />
      <MedicalSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
