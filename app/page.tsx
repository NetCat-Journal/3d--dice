'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dices from "./components/Dices";
import { Physics } from "@react-three/rapier";


export default function Home() {
  return (
    <div className="bg-[#110828] w-screen h-screen">
      <Canvas camera={{ position: [0, 0, -10] }} shadows>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={0.5} color={("white")} castShadow />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
        <Physics>
          <Dices />
        </Physics>
      </Canvas>
    </div>
  );
}
