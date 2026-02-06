"use client";
import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function HeroSphere() {
  const texture = useTexture('/images/hero-image.jpeg');
  const meshRef = React.useRef();
  const materialRef = React.useRef();

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0;
    }
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.distort = Math.sin(state.clock.elapsedTime) * 0.1 + 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]} onPointerOver={() => meshRef.current.rotation.y += 0.1}>
        <MeshDistortMaterial
          ref={materialRef}
          map={texture}
          distort={0.2}
          speed={1.5}
          metalness={0.3}
          roughness={0.4}
          color="#ffffff"
        />
      </Sphere>
    </Float>
  );
}

function EnergyRings() {
  const ringsRef = React.useRef();

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.x = state.clock.elapsedTime * (0.3 + index * 0.1);
        ring.material.emissiveIntensity = Math.sin(state.clock.elapsedTime * 2 + index) * 0.3 + 0.2;
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[0, 0, 0]}>
          <torusGeometry args={[1.5 + index * 0.3, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={`hsl(${(index * 120) % 360}, 70%, 60%)`}
            emissive={`hsl(${(index * 120) % 360}, 70%, 40%)`}
            emissiveIntensity={0.2}
            transparent
            opacity={0.6 - index * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = React.useRef();
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = mouse.y * 0.5;
      particlesRef.current.rotation.y = mouse.x * 0.5;
      particlesRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color={`hsl(${i * 7.2}, 80%, 60%)`}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#4ecdc4" />

      <HeroSphere />
      <EnergyRings />
      <FloatingParticles />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0.8} fade speed={0.5} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={2}
        maxDistance={6}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

const Hero3D = () => {
  return (
    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative shadow-lg dark:shadow-xl rounded-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;