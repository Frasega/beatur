"use client";
import { Particles } from "@/components/ui/particles";

export default function ParticlesBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      quantity={65}
      staticity={45}
      ease={55}
      size={0.35}
      color="#8a7060"
    />
  );
}
