"use client";

import { Html } from "@react-three/drei";
import { certificates } from "@/data/profile";

export default function CertificatesDisplay() {
  return (
    <group position={[16, 2.2, -2]} rotation={[0, -Math.PI / 2, 0]}>
      <mesh>
        <boxGeometry args={[9, 4.5, 0.3]} />
        <meshStandardMaterial color="#151f35" emissive="#12486a" emissiveIntensity={0.45} metalness={0.5} roughness={0.28} />
      </mesh>
      <Html transform distanceFactor={3.6} position={[0, 0.1, 0.22]}>
        <div className="w-[460px] rounded-xl border border-cyan-400/60 bg-slate-950/90 p-5 text-cyan-100 shadow-neon">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Certificates</p>
          {certificates.map((certificate) => (
            <div key={certificate.title} className="mt-3 rounded border border-cyan-800/70 bg-slate-900/70 p-3">
              <h4 className="text-sm font-semibold">{certificate.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-cyan-100/90">{certificate.details}</p>
            </div>
          ))}
        </div>
      </Html>
    </group>
  );
}
