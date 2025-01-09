import './App.css'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  



  return (
    <>
      <Canvas camera={{ position: [0, 200, 300], fov: 75 }} style={{ width: '100vw', height: '100vh' }}>
      {/* Lighting */}
      <ambientLight intensity={3} />
      <directionalLight position={[1, 0.75, 0.5]} intensity={3} />

      {/* Rectangle Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 300]} />
        <meshBasicMaterial color="#443c3c" side={2} />
      </mesh>

      {/* Camera Controls */}
        <OrbitControls enablePan={false} enableZoom maxPolarAngle={Math.PI / 6} minPolarAngle={Math.PI / 3} />
    </Canvas>
    </>
  )
}

export default App

