"use client";

import { PointerLockControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export const controlsMap = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] }
] as const;

const MOVE_SPEED = 5;
const BOUNDARY = 24;

export default function FirstPersonController() {
  const camera = useThree((state) => state.camera);
  const [, getKeys] = useKeyboardControls<"forward" | "backward" | "left" | "right">();

  const forward = useMemo(() => new THREE.Vector3(), []);
  const right = useMemo(() => new THREE.Vector3(), []);
  const direction = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const { forward: moveForward, backward, left, right: moveRight } = getKeys();

    direction.set(0, 0, 0);
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    right.crossVectors(forward, camera.up).normalize();

    if (moveForward) direction.add(forward);
    if (backward) direction.sub(forward);
    if (left) direction.sub(right);
    if (moveRight) direction.add(right);

    if (direction.lengthSq() > 0) {
      direction.normalize().multiplyScalar(MOVE_SPEED * delta);
      camera.position.add(direction);
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -BOUNDARY, BOUNDARY);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -BOUNDARY, BOUNDARY);
      camera.position.y = 1.7;
    }
  });

  return <PointerLockControls />;
}
