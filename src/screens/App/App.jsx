import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../../components/3DScene/Scene.jsx'

export default function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Scene />
        <OrbitControls/>
      </Canvas>
    </Suspense>
  )
}
