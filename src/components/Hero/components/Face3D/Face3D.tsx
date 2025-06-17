import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

// import Scene from '../3DScene/Scene'
// import NewScene from '../3DScene/NewScene'

import { Container, SceneContainer } from "./styles.js";
import { MathUtils } from "three";
import Spline from "@splinetool/react-spline";

function RigCamera() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  const targetRotation = new Euler();
  const lerpFactor = 7000; // Adjust this value to change the speed of the rotation

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.9);

    // Calculate the target rotation based on the mouse position
    targetRotation.set(mouse.y * Math.PI, mouse.x * Math.PI, 0);

    // Use lerp to smoothly transition the camera's rotation to the target rotation
    camera.rotation.x = MathUtils.lerp(
      camera.rotation.x,
      targetRotation.x,
      lerpFactor
    );
    camera.rotation.y = MathUtils.lerp(
      camera.rotation.y,
      targetRotation.y,
      lerpFactor
    );

    camera.lookAt(mouse.x * 30, mouse.y * 10, 100 * mouse.y);
  });
}

export default function Face3D() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <SceneContainer>
        <Suspense>
          <Spline scene="https://prod.spline.design/xwgjuT3XdlHHXEnb/scene.splinecode" />
        </Suspense>
      </SceneContainer>
    </Container>
  );
}
