import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { BulbSettings } from "../../_data/bulbSettings";

interface BulbsProps {
  bulbSettings: BulbSettings[];
  windowWidth: number;
  windowHeight: number;
  activeSectionId: string;
}

export function Bulbs({
  bulbSettings,
  windowWidth,
  activeSectionId,
}: BulbsProps) {
  const meshesRef = useRef<(THREE.Mesh | null)[]>([]);

  // Define scale factor once for consistency
  const scaleFactor = windowWidth / 1920; // You can adjust 1920 to your desired reference width

  useFrame(() => {
    meshesRef.current.forEach((mesh, index) => {
      if (mesh) {
        const settings = bulbSettings[index];

        // Find the position based on the active section ID
        const activeSectionIndex = settings.sectionIds.indexOf(activeSectionId);
        const targetPosition = settings.positions[activeSectionIndex];

        // Scale position based on window width
        const scaledX = targetPosition.x * scaleFactor;
        const scaledY = targetPosition.y * scaleFactor;
        const scaledZ = targetPosition.z * scaleFactor;

        const targetVector = new THREE.Vector3(scaledX, scaledY, scaledZ);
        mesh.position.lerp(targetVector, 0.03); // 0.05 is the interpolation factor, adjust for desired smoothness

        // Scale size based on window width and targetPosition.scale
        const scaledSize = settings.size * scaleFactor * targetPosition.scale;
        mesh.geometry.dispose(); // Dispose old geometry
        mesh.geometry = new THREE.SphereGeometry(scaledSize, 32, 32); // Create new geometry
      }
    });
  });

  return (
    <>
      {bulbSettings.map((settings, index) => (
        <mesh
          key={settings.id}
          ref={(el) => (meshesRef.current[index] = el)}
          position={[
            settings.positions[0].x * scaleFactor,
            settings.positions[0].y * scaleFactor,
            settings.positions[0].z * scaleFactor,
          ]}
        >
          <sphereGeometry
            args={[
              settings.size * scaleFactor * settings.positions[0].scale,
              32,
              32,
            ]}
          />
          <meshStandardMaterial
            color={settings.color}
            transparent={true}
            opacity={0.8}
            emissive={settings.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  );
}
