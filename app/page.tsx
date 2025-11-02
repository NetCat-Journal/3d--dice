'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RoundedBoxGeometry } from "@react-three/drei";

export default function Home() {
  return (
    <div className="bg-[#110828] w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5] }} shadows>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={0.5} color={("white")} castShadow />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
        <mesh castShadow>
          <RoundedBoxGeometry
            args={[1, 1, 1]}
            radius={0.08}
            steps={1}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
          />
          <meshPhongMaterial color="#f3f3f3" />
        </mesh>
        {/* one dot front*/}
        <mesh position={[0, 0, 0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* six dots back */}
        <mesh position={[0.25, 0.25, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, 0.25, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.25, -0.25, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, -0.25, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.25, 0, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, 0, -0.51]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* four dots bottom */}
        <mesh position={[-0.25, -0.51, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.25, -0.51, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, -0.51, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.25, -0.51, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/*two dots top*/}
        <mesh position={[0.25, 0.51, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, 0.51, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* three dots left */}
        <mesh position={[-0.51, 0.25, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.51, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.51, -0.25, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* five dots right */}
        <mesh position={[0.51, 0.25, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.51, -0.25, 0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.51, 0.25, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.51, -0.25, -0.25]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.51, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <mesh position-y={-1.0} rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" roughness={0.8} metalness={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}
