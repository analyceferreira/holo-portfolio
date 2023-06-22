import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { easing } from 'maath'

import Scene from './components/3DScene/Scene.jsx'

import {Container, SceneContainer, Name} from './styles.ts'



import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 1)
    camera.lookAt(mouse.x*-20, mouse.y, 50)
  })
}



export default function App() {
    // const { fonts } = useTheme();
  return (
    <Container >

      <SceneContainer>
        <Suspense fallback={null} >
          <Canvas 
            shadows 
            flat 
            linear
            eventPrefix='client'
            camera={{position: [-1000, 110 ,2.5], fov:5050 }}
          >
            {/* <CameraRig> */}
            <Scene  faceScale="4.37" elementsScale="1" />
            {/* </CameraRig> */}
            <OrbitControls enableZoom={false} />
            <Rig />
            
            {/* <Stats /> */}
          </Canvas>
        </Suspense>
      </SceneContainer>
      
      <Name>Ana<strong>.</strong></Name>
      
    </Container>
  )
}




// function CameraRig({ children }) {
//   const group = useRef()
//   console.log(group)
  
//   useFrame((state, delta) => {
//     easing.damp3(
//       group.current.rotation, 
//       [-state.pointer.x /5, state.pointer.y , 0],
//       0.25,
//       delta
//     )
//   })
//   return <group ref={group}>{children}</group>
// }