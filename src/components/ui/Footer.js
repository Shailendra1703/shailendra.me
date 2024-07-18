"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Footer = () => {
  return (
    <footer className="text-quaternary text-center border-gray-200 pb-24 mx-auto max-w-5xl border-t border-dashed py-12 pt-4 text-sm dark:border-gray-700 dark:text-gray-600">
      <FooterGraphics />
      <span className="">
        © Shailendra Singh {new Date().getFullYear()}. Website built using
        Next.js & TailwindCSS
      </span>
    </footer>
  );
};

function PixelatedSphere() {
  const sphereRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.elapsedTime * 1.2;
      sphereRef.current.rotation.z = clock.elapsedTime * 0.7;
    }
  });

  return (
    <points ref={sphereRef}>
      <icosahedronGeometry args={[1, 4]} />
      <pointsMaterial color="gray" size={0.05} />
    </points>
  );
}

function Birds() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    groupRef.current.children.forEach((bird, index) => {
      const angle = (elapsedTime + index * 0.2) % (2 * Math.PI);
      const radius = 2.3 + Math.random() * 0.0001;
      bird.position.x =
        radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index);
      bird.position.y =
        radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index);
      bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index);
    });
  });

  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.04 : 0.06;
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    );
  });

  return <group ref={groupRef}>{birds}</group>;
}

function FooterGraphics() {
  return (
    <Canvas camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: false }}>
      <PixelatedSphere />
      <Birds />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Footer;
