import React from 'react';
import { View } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const ModelView = ({ index, groupRef, gsapType }) => {
  const meshRef = useRef();

  // Example: Create a cube and add it to the group
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  groupRef.current.add(cube);

  return (
    <div></div>
  );
};

export default ModelView;
