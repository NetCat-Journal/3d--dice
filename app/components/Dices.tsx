import { RigidBody } from "@react-three/rapier";
import Dice from "./Dice";

function Dices() {

  return (
    <>
      <Dice id={1} />
      <Dice id={2} />
      <RigidBody type='fixed'>
        <mesh position-y={-1.0} rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial color="#1a1a3e" roughness={0.8} metalness={0.2} />
        </mesh>
      </RigidBody>
    </>
  )
}

export default Dices