import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function NewScene({ ...props }) {
	const { nodes, materials } = useSpline(
		"https://prod.spline.design/xwgjuT3XdlHHXEnb/scene.splinecode"
	);
	return (
		<>
			<color attach="background" args={["#74757a"]} />
			<group {...props} dispose={null}>
				<scene name="Scene 1">
					<pointLight
						name="Point Light"
						castShadow
						intensity={0.26}
						decay={2}
						distance={1871}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={100}
						shadow-camera-far={100000}
						position={[0, 131.4, 240.81]}
					/>
					<group
						name="Group 2"
						position={[-24.48, 0, 0.29]}
						rotation={[0, -0.19, 0]}
					>
						<mesh
							name="Dodecahedron"
							geometry={nodes.Dodecahedron.geometry}
							material={nodes.EyeRight.material}
							castShadow
							receiveShadow
							position={[-122.47, 186.06, -8.8]}
							rotation={[0.02, -0.02, 0]}
							scale={1}
						/>
						<mesh
							name="Sphere"
							geometry={nodes.Sphere.geometry}
							material={nodes.EyeRight.material}
							castShadow
							receiveShadow
							position={[168.55, 109.08, -61.91]}
							rotation={[0.02, -0.02, -0.01]}
							scale={1}
						/>
						<mesh
							name="Pyramid"
							geometry={nodes.Pyramid.geometry}
							material={nodes.EyeRight.material}
							castShadow
							receiveShadow
							position={[-160.43, -73.96, 13.07]}
							rotation={[0.02, -0.02, 0]}
							scale={1}
						/>
						<mesh
							name="Helix"
							geometry={nodes.Helix.geometry}
							material={nodes.EyeRight.material}
							castShadow
							receiveShadow
							position={[206.96, -75.29, 29.2]}
						/>
						<group name="Group" position={[24.48, 0, -0.29]} scale={4.37}>
							<mesh
								name="EyeLeft"
								geometry={nodes.EyeLeft.geometry}
								material={nodes.EyeLeft.material}
								castShadow
								receiveShadow
								position={[0.7, -379.5, -5.3]}
								scale={4.33}
							/>
							<mesh
								name="Wolf3D_Hair"
								geometry={nodes.Wolf3D_Hair.geometry}
								material={nodes.Wolf3D_Hair.material}
								castShadow
								receiveShadow
								position={[0.7, -379.5, -5.3]}
								scale={4.33}
							/>
							<mesh
								name="EyeRight"
								geometry={nodes.EyeRight.geometry}
								material={nodes.EyeRight.material}
								castShadow
								receiveShadow
								position={[0.7, -379.5, -5.3]}
								scale={4.33}
							/>
							<mesh
								name="Wolf3D_Head"
								geometry={nodes.Wolf3D_Head.geometry}
								material={nodes.Wolf3D_Head.material}
								castShadow
								position={[0.7, -379.5, -5.3]}
								scale={4.33}
							/>
						</group>
					</group>
					<directionalLight
						name="Directional Light 2"
						castShadow
						intensity={0.45}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={-10000}
						shadow-camera-far={100000}
						shadow-camera-left={-500}
						shadow-camera-right={500}
						shadow-camera-top={500}
						shadow-camera-bottom={-500}
						position={[-315.83, 236.12, 75.16]}
					/>
					<OrthographicCamera
						name="1"
						makeDefault={true}
						far={10000}
						near={-50000}
					/>
					<hemisphereLight
						name="Default Ambient Light"
						intensity={0.75}
						color="#eaeaea"
					/>
				</scene>
			</group>
		</>
	);
}
