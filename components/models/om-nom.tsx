"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Object3D } from "three";

function Model() {
  const gltf = useGLTF("/models/om-nom.glb");
  const ref = useRef<Object3D>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={3.45} />;
}

export default function OmNomModel() {
  return (
    <div style={{ width: "160px", height: "160px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="sunset" />
        <Model />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}
