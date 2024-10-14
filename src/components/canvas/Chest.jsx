import {Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Float, Preload, useGLTF} from '@react-three/drei'

import Loader from '../Loader'


const Chest = () => {
  const chest = useGLTF("./fortnite_chest/scene.gltf")
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <hemisphereLight intensity={0.75} color="white"/>
      <pointLight intensity={30} position={[0,2,3]} castShadow/>
      <pointLight intensity={30} position={[0,2,-3]} castShadow/>
      {/* <spotLight position={[0,0,0]} angle={1.5} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/> */}
      <primitive
      object={chest.scene}
      scale={6}
      position-y={0}
      rotation-y={0}
      />
    </Float>
    
  )
}

const ChestCanvas = () => {
  return(
    <Canvas
    shadows
    gl={{preserveDrawingBuffer: true}}
    camera={{fov:45, near:0.1, far:200, position:[-4,3,6]}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}>
        </OrbitControls>
        <Chest></Chest>
      </Suspense>
      <Preload all/>


    </Canvas>
  )
}

export default ChestCanvas