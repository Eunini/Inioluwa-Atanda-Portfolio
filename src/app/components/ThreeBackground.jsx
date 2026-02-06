"use client";
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Stars, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Morphing geometric shapes with dynamic materials
function MorphingGeometry() {
  const groupRef = useRef();
  const sphereRef = useRef();
  const boxRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(time * 0.8) * 3;
      sphereRef.current.position.y = Math.cos(time * 0.6) * 2;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.5;
      boxRef.current.rotation.z = time * 0.3;
      boxRef.current.position.x = Math.cos(time * 0.7) * 2.5;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.y = time * 0.4;
      torusRef.current.position.y = Math.sin(time * 0.9) * 1.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ff6b6b"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[3, 0, 0]}>
          <meshPhysicalMaterial
            color="#4ecdc4"
            transmission={0.8}
            opacity={0.8}
            metalness={0.1}
            roughness={0.1}
            thickness={0.5}
          />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={2.5}>
        <Torus ref={torusRef} args={[1.5, 0.6, 16, 100]} position={[-3, 0, 0]}>
          <meshStandardMaterial
            color="#ffe66d"
            emissive="#ffe66d"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
    </group>
  );
}

// Enhanced particle system with different sizes and colors
function DynamicParticles() {
  const pointsRef = useRef();

  const particlesData = useMemo(() => {
    const positions = new Float32Array(1500 * 3);
    const colors = new Float32Array(1500 * 3);
    const sizes = new Float32Array(1500);

    for (let i = 0; i < 1500; i++) {
      // Create a more interesting distribution
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color gradient based on position
      const hue = (theta / (Math.PI * 2)) * 360;
      const color = new THREE.Color().setHSL(hue / 360, 0.7, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 0.05 + 0.01;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesData.positions.length / 3}
          array={particlesData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesData.colors.length / 3}
          array={particlesData.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesData.sizes.length}
          array={particlesData.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        transparent={true}
        alphaTest={0.001}
      />
    </points>
  );
}

// Organic wave-like background
function WaveBackground() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      pos.z += sin(pos.x * 0.5 + time) * 0.5;
      pos.z += cos(pos.y * 0.3 + time * 0.7) * 0.3;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec3 color1 = vec3(0.1, 0.2, 0.4);
      vec3 color2 = vec3(0.2, 0.1, 0.3);
      vec3 color3 = vec3(0.4, 0.2, 0.1);
      
      float mix1 = sin(vUv.x * 3.0 + time) * 0.5 + 0.5;
      float mix2 = cos(vUv.y * 2.0 + time * 0.8) * 0.5 + 0.5;
      
      vec3 finalColor = mix(color1, color2, mix1);
      finalColor = mix(finalColor, color3, mix2);
      
      gl_FragColor = vec4(finalColor, 0.3);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Main Three.js background component
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'radial-gradient(ellipse at center, #0f172a 0%, #1e293b 35%, #334155 70%, #475569 100%)' }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff6b6b" />
        <pointLight position={[10, -10, 10]} intensity={0.6} color="#4ecdc4" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={0.5} 
          intensity={0.5} 
          color="#ffe66d" 
          castShadow 
        />

        {/* 3D Elements */}
        <WaveBackground />
        <MorphingGeometry />
        <DynamicParticles />
        <Stars 
          radius={50} 
          depth={100} 
          count={3000} 
          factor={6} 
          saturation={0.8} 
          fade={true} 
          speed={0.5} 
        />

        {/* Subtle Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}