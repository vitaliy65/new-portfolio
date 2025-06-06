import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense, useRef, useEffect } from "react";
import { Group } from "three";
import { Html, useProgress } from "@react-three/drei";

interface CubeProps {
  size: number;
}

const ComputerModelControls = ({ size }: CubeProps) => {
  const model = useLoader(GLTFLoader, "/models/retro_computer/scene.gltf");
  const modelRef = useRef<Group>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.translateY(-0.5);
    }
  }, []);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      object={model.scene}
      scale={size}
      ref={modelRef}
      rotation={[Math.PI / 12, 0, 0]} // 30 градусів по X
    />
  );
};

function Computer() {
  const { progress } = useProgress();

  return (
    <Canvas className="full" camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Html center>{progress} % loaded</Html>}>
        <ComputerModelControls size={8} />
      </Suspense>
    </Canvas>
  );
}

export default Computer;
