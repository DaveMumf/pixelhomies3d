/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/banana-v1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[0.26, 0.5, 0.26]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Negro} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Gris} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Piel} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Bigote} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials.Nariz} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials.Sombra} />
      </group>
    </group>
  )
}

useGLTF.preload('/banana-v1-transformed.glb')
