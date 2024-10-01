import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei"
import Loader from "../Loader"

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])
  return (
    <div>Ball</div>
  )
}


const BallCanvas = ({icon}) => {
  <Canvas
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls 
          enableZoom={false}
        ></OrbitControls>
        <Ball isMobile={isMobile}></Ball>
      </Suspense>
      <Preload all/>
    </Canvas>
}

export default BallCanvas