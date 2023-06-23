import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'

import Scene from '../3DScene/Scene'

import { Container, SceneContainer } from './styles.js'



function RigCamera() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 1)
    camera.lookAt(mouse.x * 10, mouse.y, 50)
  })
}

export default function Face3D() {
  return (
    <Container >
      <SceneContainer>
        <Suspense fallback={null} >
          <Canvas
            shadows
            flat
            linear
            eventPrefix='client'
          >
            <Scene faceScale="5.37" elementsScale="1.4" />
            <OrbitControls enableZoom={false} />
            <RigCamera />
            {/* <Stats /> */}
          </Canvas>
        </Suspense>
      </SceneContainer>
    </Container>
  )
}