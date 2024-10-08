import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import Loader from '../Loader'



const Computers = ({isMobile}) => {

const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black"/>
      <pointLight intensity={2} position={[-0.4,-0.8,0]}/>
      <spotLight position={[0,0,0]} angle={1.5} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 1} position={isMobile ? [0, -3, -1.5] : [0,-4.75,-1.5]} rotation={[-0.01,-0.2,-0.1]}></primitive>
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return(
    <Canvas
    frameloop="demand"
    shadows
    camera={{position:[25,0,20], fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        ></OrbitControls>
        <Computers isMobile={isMobile}></Computers>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas