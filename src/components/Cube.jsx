import React, { useRef } from "react";
import { Image, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import tailwind from './../assets/tech/tailwind.png'
import javascript from './../assets/tech/javascript.png'
import typescript from './../assets/tech/typescript.png'
import threejs from './../assets/tech/threejs.svg'
import reactjs from './../assets/tech/reactjs.png'
import spring from './../assets/tech/spring.png'
import redux from './../assets/tech/redux.png'
import nodejs from './../assets/tech/nodejs.png'

const Cube = () => {
  const textRef = useRef();
 /*  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  ); */
  const color="#6c6a6a";
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial attach="material-0">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={typescript} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-1">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={threejs} scale={2.5}  transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-2">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={reactjs} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-3">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={javascript} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-4">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={spring} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-5">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={tailwind} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-6">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={nodejs} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
      <meshStandardMaterial attach="material-7">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[color]} />
          <Image url={redux} scale={2.5} transparent={true}/>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;