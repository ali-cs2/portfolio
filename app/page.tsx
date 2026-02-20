"use client";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import type { KeyboardControlsEntry } from "@react-three/drei";
import { useState } from "react";

import FirstPersonController from "@/components/FirstPersonController";
import MuseumScene from "@/components/MuseumScene";
import OverlayHUD from "@/components/OverlayHUD";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/types/project";

const controlsMap: KeyboardControlsEntry<string>[] = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["ShiftLeft"] },
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-museum-bg text-cyan-50">
      <KeyboardControls map={controlsMap}>
        <Canvas camera={{ position: [0, 1.7, 9], fov: 70 }} shadows>
          <MuseumScene onSelectProject={setSelectedProject} />
          <FirstPersonController />
        </Canvas>
      </KeyboardControls>

      <OverlayHUD />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
