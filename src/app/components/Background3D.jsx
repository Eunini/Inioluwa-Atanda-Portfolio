"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';

function FloatingShapes() {
  return (
    <>
      <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, 1, -2]}>
          <meshStandardMaterial color="#3b82f6" opacity={0.1} transparent />
        </Box>
      </Float>
      <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.7}>
        <Sphere args={[0.3, 16, 16]} position={[2, -1, -1]}>
          <meshStandardMaterial color="#10b981" opacity={0.1} transparent />
        </Sphere>
      </Float>
      <Float speed={0.6} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[0.4, 0.1, 16, 100]} position={[0, 2, -3]}>
          <meshStandardMaterial color="#f59e0b" opacity={0.1} transparent />
        </Torus>
      </Float>
    </>
  );
}

const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;