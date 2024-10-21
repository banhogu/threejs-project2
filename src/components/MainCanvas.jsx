import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export const MainCanvas = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      // shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}
      // shadows={"basic"}
      // shadows={"percentage"}
      shadows={"soft"}
      camera={{
        fov: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 100,
        position: [5, 5, 5],
      }}
      scene={{ background: new THREE.Color(0x000000) }} // 매번 리렌더되므로, 지양해야할 패턴
    >
      <Controls />
      <Lights />
      <Meshes />
      <GLBModel />
    </Canvas>
  );
};
