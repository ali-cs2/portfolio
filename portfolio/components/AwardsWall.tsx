"use client";

import { Html } from "@react-three/drei";
import { award } from "@/data/profile";

export default function AwardsWall() {
  return (
    <group position={[0, 2.2, -14]}>
      <mesh>
        <boxGeometry args={[12, 4.5, 0.4]} />
        <meshStandardMaterial color="#12182d" emissive="#15344f" emissiveIntensity={0.5} metalness={0.5} roughness={0.3} />
      </mesh>
      <Html transform distanceFactor={4} position={[0, 0.2, 0.25]}>
        <div className="w-[520px] rounded-xl border border-cyan-400/60 bg-slate-950/90 p-5 text-cyan-50 shadow-neon">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Awards Wall</p>
          <h3 className="mt-2 text-xl font-semibold text-cyan-100">{award.title}</h3>
          <p className="mt-2 text-sm text-cyan-200">{award.event}</p>
          <p className="mt-1 text-sm text-cyan-200/90">{award.venue}</p>
          <p className="mt-3 text-sm leading-relaxed text-cyan-100/90">{award.description}</p>
        </div>
      </Html>
    </group>
  );
}
