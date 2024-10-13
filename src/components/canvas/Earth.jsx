import {Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'

import Loader from '../Loader'

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{ }}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}>
        </OrbitControls>
        <Earth></Earth>
      </Suspense>


    </Canvas>
  )
}

export default Earth