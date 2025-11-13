import React, { useEffect, useRef } from 'react'
import { RoundedBoxGeometry } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from '@react-three/fiber';

function Dice({ id }: { id: number }) {
    const refRigi = useRef<any>(null);
    useEffect(() => {
        if (!refRigi.current) return;
        const x = Math.random() - 1.5;
        const y = Math.random() + 2;
        const z = Math.random() - 1.5;
        refRigi.current.applyImpulse({ x: x * 5, y: y * 3, z: z * 5 }, true);

        const spinX = (Math.random() - 0.5) * 40;
        const spinY = (Math.random() - 0.5) * 40;
        const spinZ = (Math.random() - 0.5) * 40;
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

    useFrame(() => {
        if (!refRigi.current) return;

        // Get position from the RigidBody
        const position = refRigi.current.translation();
        const velocity = refRigi.current.linvel();
        const angularVel = refRigi.current.angvel();

        // Calculate speeds
        const linearSpeed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2);
        const angularSpeed = Math.sqrt(angularVel.x ** 2 + angularVel.y ** 2 + angularVel.z ** 2);

        // Stop if settled
        if (linearSpeed < 0.5 && angularSpeed < 0.5 && position.y < 1) {
            refRigi.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
            refRigi.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
            return;
        }

        // Only apply forces if dice is in air or moving fast
        if (position.y > 0.6 || linearSpeed > 1) {
            const airForceX = (Math.random() - 0.5) * 0.3;
            const airForceY = (Math.random() - 0.5) * 0.1;
            const airForceZ = (Math.random() - 0.5) * 0.3;
            refRigi.current.applyImpulse({ x: airForceX, y: airForceY, z: airForceZ }, true);

            const torqueX = (Math.random() - 0.5) * 0.5;
            const torqueY = (Math.random() - 0.5) * 0.5;
            const torqueZ = (Math.random() - 0.5) * 0.5;
            refRigi.current.applyTorqueImpulse({ x: torqueX, y: torqueY, z: torqueZ }, true);
        }
    });

    return (
        <>
            <RigidBody ref={refRigi} position={[randomX, randomY, randomZ]} rotation={randomRotation} mass={1} restitution={0.3} friction={1.5} linearDamping={0.5} angularDamping={0.5}>
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