import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import { Color } from 'three'
import { useFrame } from '@react-three/fiber'



export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/4G1xK7WAnLZN-vua/scene.splinecode')
  
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    ref.current.lookAt(x /3, y/2, 1)
    ref2.current.lookAt(x*-8, y*-8, 1)
    ref3.current.lookAt(x/3, y/2, 1)
    ref4.current.lookAt(x , y/2, 1)
  })

  let facePartsPositions = [4, -384, -60]
  
  return (
    <group {...props} rotateX={0.4} dispose={null} style="width:100%">
      <mesh
        name="Dodecahedron"
        geometry={nodes.Dodecahedron.geometry}
        material={materials.Holo}
        castShadow
        receiveShadow
        position={[-176.95, 186.06, 12.49]}
        rotation={[0.02, -0.02, 0]}
        scale={props.elementsScale}

        ref={ref}
      />
      <mesh
        name="Sphere"
        geometry={nodes.Sphere.geometry}
        material={materials['Holo Material']}
        castShadow
        receiveShadow
        position={[274.07, 109.08, 117.38]}
        rotation={[0.02, -0.02, -0.01]}
        scale={props.elementsScale}
        ref={ref2}

      />
      <mesh
        name="Pyramid"
        geometry={nodes.Pyramid.geometry}
        material={materials['Holo Material']}
        castShadow
        receiveShadow
        position={[-218.91, -85.46, 86.91]}
        rotation={[0.2, -0.02, 0]}
        scale={props.elementsScale}
        ref={ref3}

      />
      <mesh
        name="Helix"
        geometry={nodes.Helix.geometry}
        material={materials['Holo Material']}
        castShadow
        receiveShadow
        position={[302.48, -75.29, 65.48]}
        scale={props.elementsScale}
        ref={ref4}
      />
      <group name="Group 2" position={[30, 27, 239]} rotation={[0, 0, 0]} scale={props.faceScale}>
        <mesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={nodes.EyeLeft.material}
          castShadow
          receiveShadow
          position={facePartsPositions}
          scale={4.33}
        />
        <mesh
          name="Wolf3D_Hair"
          geometry={nodes.Wolf3D_Hair.geometry}
          material={nodes.Wolf3D_Hair.material}
          castShadow
          receiveShadow
          position={facePartsPositions}
          scale={4.33}
        />
        <mesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={nodes.EyeRight.material}
          castShadow
          receiveShadow
          position={facePartsPositions}
          scale={4.33}
        />
        <mesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={nodes.Wolf3D_Head.material}
          castShadow
          position={facePartsPositions}
          scale={4.33}
        />
        <mesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={nodes.Wolf3D_Teeth.material}
          castShadow
          receiveShadow
          position={facePartsPositions}
          scale={4.33}
        />
      </group>
      <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-500}
        shadow-camera-right={500}
        shadow-camera-top={500}
        shadow-camera-bottom={-500}
        position={[-265.83, 311.12, 165.16]}
      />
      <OrthographicCamera
        name="1"
        makeDefault={true}
        zoom={0.9}
        far={100000}
        near={-1000}
        position={[50, -33.79, 2539.28]}
        scale={props.scale}
      />
      <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
    </group>
  )
}

