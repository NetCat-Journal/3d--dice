import React, { useEffect, useRef } from 'react'
import { RoundedBoxGeometry } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

function Dice({ id }: { id: number }) {
    const refRigi = useRef<any>(null);
    useEffect(() => {
        if (!refRigi.current) return;
        const x = Math.random() - 0.5;
        const y = Math.random() + 2;
        const z = Math.random() - 0.5;
        refRigi.current.applyImpulse({ x: x * 5, y: y * 3, z: z * 5 }, true);

        const spinX = (Math.random() - 0.5) * 20;
        const spinY = (Math.random() - 0.5) * 20;
        const spinZ = (Math.random() - 0.5) * 20;
        refRigi.current.applyTorqueImpulse({ x: spinX, y: spinY, z: spinZ }, true);
    }, [id]);

    const start = id == 1 ? -1.5 : 1.5
    const randomX = start + Math.random() - 0.5;
    const randomY = Math.random() * 8;
    const randomZ = Math.random() - 0.5;

    const randomRotation: [number, number, number] = [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
    ]
    return (
        <>
            <RigidBody ref={refRigi} position={[randomX, randomY, randomZ]} rotation={randomRotation} mass={1} restitution={0.4} friction={0.8} linearDamping={0.3} angularDamping={0.2}>
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
            </RigidBody>
        </>
    )
}

export default Dice