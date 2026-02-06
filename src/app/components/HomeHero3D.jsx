"use client";
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Stars, MeshDistortMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

// Animated wireframe grid background
function AnimatedGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      gridRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  const gridSize = 30;
  const divisions = 20;

  return (
    <group ref={gridRef}>
      <gridHelper args={[gridSize, divisions, 0x4f46e5, 0x1e293b]} />
    </group>
  );
}

// Central floating sphere with distortion
function CentralSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

// Orbiting particles system
function OrbitalParticles() {
  const groupRef = useRef();
  const particlesRef = useRef();

  const particleCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.3;
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;
        const angle = time * 0.1 + (i / particleCount) * Math.PI * 2;
        const radius = 8 + Math.random() * 4;

        positions[index] = Math.cos(angle) * radius;
        positions[index + 1] = Math.sin(angle) * radius * 0.3;
        positions[index + 2] = Math.sin(angle + time * 0.2) * radius * 0.5;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#3b82f6" sizeAttenuation />
      </points>
    </group>
  );
}

// Rotating rings
function RotatingRings() {
  const rings1Ref = useRef();
  const rings2Ref = useRef();
  const rings3Ref = useRef();

  useFrame((state) => {
    if (rings1Ref.current) {
      rings1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
    if (rings2Ref.current) {
      rings2Ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
    if (rings3Ref.current) {
      rings3Ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <Torus ref={rings1Ref} args={[5, 0.15, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} wireframe />
      </Torus>
      <Torus ref={rings2Ref} args={[7, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} wireframe />
      </Torus>
      <Torus ref={rings3Ref} args={[3, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} wireframe />
      </Torus>
    </>
  );
}

// Corner accent boxes
function AccentBoxes() {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (box1Ref.current) {
      box1Ref.current.rotation.x = time * 0.3;
      box1Ref.current.rotation.y = time * 0.4;
    }
    if (box2Ref.current) {
      box2Ref.current.rotation.x = time * 0.2;
      box2Ref.current.rotation.z = time * 0.35;
    }
    if (box3Ref.current) {
      box3Ref.current.rotation.y = time * 0.25;
      box3Ref.current.rotation.z = time * 0.4;
    }
    if (box4Ref.current) {
      box4Ref.current.rotation.x = time * 0.35;
      box4Ref.current.rotation.y = time * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} floatIntensity={1.5}>
        <Box ref={box1Ref} args={[0.8, 0.8, 0.8]} position={[-8, 4, -5]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} wireframe />
        </Box>
      </Float>

      <Float speed={1.8} floatIntensity={1.8}>
        <Box ref={box2Ref} args={[0.8, 0.8, 0.8]} position={[8, 4, -5]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} wireframe />
        </Box>
      </Float>

      <Float speed={2.2} floatIntensity={1.6}>
        <Box ref={box3Ref} args={[0.8, 0.8, 0.8]} position={[-8, -4, -5]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} wireframe />
        </Box>
      </Float>

      <Float speed={1.9} floatIntensity={1.7}>
        <Box ref={box4Ref} args={[0.8, 0.8, 0.8]} position={[8, -4, -5]}>
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.2} wireframe />
        </Box>
      </Float>
    </>
  );
}

export default function HomeHero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#06b6d4" />
          <pointLight position={[-10, -10, 10]} intensity={0.6} color="#3b82f6" />

          {/* Background elements */}
          <AnimatedGrid />
          <RotatingRings />
          <OrbitalParticles />

          {/* Main focal point */}
          <CentralSphere />

          {/* Accent elements */}
          <AccentBoxes />

          {/* Stars background */}
          <Stars radius={100} depth={50} count={500} factor={4} fade />
        </Suspense>
      </Canvas>
    </div>
  );
}
