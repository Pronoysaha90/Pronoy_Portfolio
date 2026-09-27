import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AnimatedStars() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={0.3} fade speed={1} />
    </group>
  );
}

function DistortedSphere() {
  const sphereRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, (state.pointer.x * state.viewport.width) / 10, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, (state.pointer.y * state.viewport.height) / 10, 0.05);
    }
  });

  return (
    <group ref={sphereRef} position={[0, 0, -8]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[3, 64, 64]}>
          <MeshDistortMaterial
            color="#A53860"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            transparent
            opacity={0.07}
            wireframe
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1]" style={{ background: 'linear-gradient(180deg, #0d0208 0%, #120310 50%, #0d0208 100%)' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
        <DistortedSphere />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0208]/40 to-[#0d0208] pointer-events-none" />
    </div>
  );
}
