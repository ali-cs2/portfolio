"use client";

import { Fog } from "three";
import { MeshReflectorMaterial, Stars } from "@react-three/drei";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import ProjectPanel from "@/components/ProjectPanel";
import AwardsWall from "@/components/AwardsWall";
import CertificatesDisplay from "@/components/CertificatesDisplay";

type MuseumSceneProps = {
  onSelectProject: (project: Project) => void;
};

const panelPositions: Array<[number, number, number]> = [
  [-10, 2.4, -7],
  [-5, 2.4, -7],
  [0, 2.4, -7],
  [5, 2.4, -7],
  [10, 2.4, -7],
  [-7.5, 2.4, 1],
  [7.5, 2.4, 1]
];

export default function MuseumScene({ onSelectProject }: MuseumSceneProps) {
  return (
    <>
      <color attach="background" args={["#05070f"]} />
      <primitive attach="fog" object={new Fog("#07101d", 12, 52)} />
      <ambientLight intensity={0.45} color="#7ccfff" />
      <spotLight position={[0, 12, 0]} angle={0.45} penumbra={0.9} intensity={75} color="#67d2ff" castShadow />
      <spotLight position={[-12, 8, -6]} angle={0.55} penumbra={0.8} intensity={48} color="#1ec9ff" />
      <spotLight position={[12, 8, -6]} angle={0.55} penumbra={0.8} intensity={48} color="#1ec9ff" />
      <Stars radius={80} depth={30} count={1600} factor={4} saturation={0} fade speed={0.5} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <MeshReflectorMaterial
          blur={[250, 120]}
          resolution={1024}
          mixBlur={1}
          mixStrength={32}
          roughness={0.2}
          depthScale={1.2}
          minDepthThreshold={0.25}
          maxDepthThreshold={1.3}
          color="#0a1320"
          metalness={0.85}
          mirror={0.65}
        />
      </mesh>

      <mesh position={[0, 2.5, -16]}>
        <boxGeometry args={[40, 6, 0.7]} />
        <meshStandardMaterial color="#0e1729" emissive="#11243a" emissiveIntensity={0.42} />
      </mesh>

      <mesh position={[-20, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[32, 6, 0.7]} />
        <meshStandardMaterial color="#0e1729" emissive="#102438" emissiveIntensity={0.38} />
      </mesh>

      <mesh position={[20, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[32, 6, 0.7]} />
        <meshStandardMaterial color="#0e1729" emissive="#102438" emissiveIntensity={0.38} />
      </mesh>

      {projects.map((project, index) => (
        <ProjectPanel
          key={project.title}
          project={project}
          position={panelPositions[index]}
          onSelect={onSelectProject}
          rotationY={index >= 5 ? (index === 5 ? Math.PI / 2.5 : -Math.PI / 2.5) : 0}
        />
      ))}

      <AwardsWall />
      <CertificatesDisplay />
    </>
  );
}
