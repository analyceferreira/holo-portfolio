import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Scene from '../../components/3DScene'
import HeaderTitle from '../../components/HeaderTitle/index'
import Menu from '../../components/Menu/index'

export default function App() {
  return (
    <>
      <Menu/>
      <HeaderTitle/>
      <Suspense fallback={null}>
        <Canvas shadows flat linear>
          <Scene />
          <OrbitControls/>
        </Canvas>
      </Suspense>
    </>
  )
}
