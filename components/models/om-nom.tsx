"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const gltf = useGLTF("/models/om-nom.glb");
  return <primitive object={gltf.scene} scale={3.45} />;
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
