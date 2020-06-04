import React, { useRef, useState, Suspense } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ghibli from '../assets/ghibli/source/model.gltf';
// import { OctahedronGeometry } from 'three';

export function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export function Octa(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      ref={mesh}
      scale={active ? [3, 3, 3] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <octahedronGeometry attach="geometry" args={[1, 0]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export function Totoro(props) {
  function Asset({ url }) {
    const gltf = useLoader(GLTFLoader, ghibli)
    return (
      <primitive
        object={gltf.scene}
        dispose={null}
        position={[-.5, -.5, 0]}
        scale={[0.05, 0.05, 0.05]}
      />
    )
  }

  return (
    <Suspense fallback={<Octa />}>
      <Asset url="../assets/ghibli/source/model.gltf" />
    </Suspense>
  );
}