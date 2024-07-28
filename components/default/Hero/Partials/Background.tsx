"use client";
import React, { useRef, useState } from "react";

import "@fontsource/caveat-brush";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, CameraControls, Box, Plane, Svg } from "@react-three/drei";
import { inSphere } from "maath/random";
//FBX Loader
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";


import {
  faReact,
  faBootstrap,
  faHtml5,
  faPython,
  faPhp,
  faJava,
  faJs,
  faLinux,
  faFigma,
  faCss3,
  faAws,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAnchor,
  faBook,
  faCloud,
  faCloudDownloadAlt,
  faCode,
  faCodeBranch,
  faDatabase,
  faFire,
  faG,
  faGear,
  faGlobe,
  faLightbulb,
  faMobileScreenButton,
  faR,
  faUsers,
  faV,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

//svg core

import { library, icon as iconDD, IconDefinition, IconParams } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

interface FontAwesomeBoxProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  icon: IconDefinition | string;
  background: string;
}

function FontAwesomeBox({ position, rotation, scale, icon, background }: FontAwesomeBoxProps) {

  const ref = useRef() as any;
  const color = background;
  const [frefall, setFreefall] = useState<boolean>(false);

  const material = new THREE.MeshBasicMaterial({ color: color });

  console.log("position", position, "icon", icon, "background", background);

  const fsvg = typeof icon === "string" ? icon : iconDD(icon, { transform: { size: 10 } }).html[0];


  useFrame(() => {
    if (!frefall) return;
    if (ref.current.position.y < -10) {
      //delete
      ref.current.remove();
    }
    ref.current.position.y -= 0.1;
  }
  );

  return (
    <group position={position} ref={ref} rotation={rotation} scale={scale ? scale : [1, 1, 1]} onClick={() => setFreefall(!frefall)}>
      <Box args={[1, 1, 1]} position={[0, 0, 0]} material={material} />
      {/* FRONT */}
      <Svg src={fsvg} position={[-0.25, 0.25, 0.501]} scale={[0.001, 0.001, 0.001]} />
      {/* BACK */}
      <Svg src={fsvg} position={[-0.25, 0.25, -0.501]} scale={[0.001, 0.001, 0.001]} />
      {/* LEFT */}
      <Svg src={fsvg} position={[-0.501, 0.25, 0.25]} scale={[0.001, 0.001, 0.001]} rotation={[0, Math.PI / 2, 0]} />
      {/* RIGHT */}
      <Svg src={fsvg} position={[0.501, 0.25, 0.25]} scale={[0.001, 0.001, 0.001]} rotation={[0, Math.PI / 2, 0]} />
      {/* TOP */}
      <Svg src={fsvg} position={[-0.25, 0.501, 0.25]} scale={[0.001, 0.001, 0.001]} rotation={[Math.PI / 2, 0, 0]} />
      {/* BOTTOM */}
      <Svg src={fsvg} position={[-0.25, -0.501, 0.25]} scale={[0.001, 0.001, 0.001]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

function Background() {

  //positions between [-20 to 20, -6 to 6, -3 to -10]
  //rotation between [0 to 2PI]
  //scale between [1 to 3]

  const defaultPosition = [0, 0, 0];
  const defaultRotation = [0, 0, 0];
  const defaultScale = [1, 1, 1];

  function getRandomPosition() : [number, number, number] {
    return [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  }

  function getRandomRotation() : [number, number, number] {
    //const number between 0 and 2PI
    return [Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI];
  }

  function getRandomScale() : [number, number, number] {
    const level = Math.floor(Math.random() * 3) + 1;
    return [level, level, level];
  }


  var canvasMatrix = [
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faReact,
      background: "#61dafb",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faHtml5,
      background: "#e34c26",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faPython,
      background: "#306998",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faPhp,
      background: "#8892be",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faJava,
      background: "#5382a1",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faJs,
      background: "#f7df1e",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faLinux,
      background: "#f5a962",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faFigma,
      background: "#f24e1e",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faCss3,
      background: "#264de4",
    },
    {
      position: getRandomPosition(),
      rotation: getRandomRotation(),
      scale: getRandomScale(),
      icon: faAws,
      background: "#232f3e",
    }
  ];

  function getRandomNumber() {
    return Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
  }

  function getRandomNumberScale() {
    return Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
  }





  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 50,
        width: "100%",
        height: "100%",
      }}
    >
      <CameraControls />
      <ambientLight intensity={0.5} />
      {canvasMatrix.map((fontAwesomeBox, index) => (
        <FontAwesomeBox key={index} {...fontAwesomeBox} />
      ))}


    </Canvas>
  );
}


export default Background;