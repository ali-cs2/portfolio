"use client";

import { Html, Float } from "@react-three/drei";
import { useState } from "react";
import type { Project } from "@/types/project";

type ProjectPanelProps = {
  project: Project;
  position: [number, number, number];
  rotationY?: number;
  onSelect: (project: Project) => void;
};

export default function ProjectPanel({ project, position, rotationY = 0, onSelect }: ProjectPanelProps) {
  const [hovered, setHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(`/images/${project.image}`);

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.14}>
      <group position={position} rotation={[0, rotationY, 0]}>
        <mesh
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={(event) => {
            event.stopPropagation();
            setHovered(false);
          }}
          onClick={(event) => {
            event.stopPropagation();
            onSelect(project);
          }}
        >
          <boxGeometry args={[3.8, 2.4, 0.18]} />
          <meshStandardMaterial
            color={hovered ? "#1d5f8f" : "#0f2742"}
            emissive={hovered ? "#1ec9ff" : "#0a1022"}
            emissiveIntensity={hovered ? 1.1 : 0.5}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>

        <Html transform distanceFactor={2.2} position={[0, 0, 0.12]} occlude>
          <div className="w-72 rounded-lg border border-cyan-400/50 bg-slate-950/90 p-3 text-cyan-50 shadow-neon backdrop-blur-sm transition">
            <img
              src={imageSrc}
              alt={project.title}
              className="mb-3 h-28 w-full rounded object-cover"
              onError={() => setImageSrc("/images/placeholder_default.svg")}
            />
            <h3 className="text-sm font-semibold text-cyan-100">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-cyan-200/80">{project.shortDescription}</p>
            <button
              type="button"
              className="mt-3 w-full rounded border border-cyan-300/70 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-100 hover:bg-cyan-400/20"
              onClick={(event) => {
                event.stopPropagation();
                onSelect(project);
              }}
            >
              View Details
            </button>
          </div>
        </Html>
      </group>
    </Float>
  );
}
