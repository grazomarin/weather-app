'use client';

import { Center, Environment, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface WeatherSceneProps {
  temperature?: number;
  condition?: string;
}

export default function WeatherScene({ temperature, condition }: WeatherSceneProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Environment preset="city" />

        <Center>
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={condition === 'Rain' ? '#444444' : '#fcd34d'}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Center>

        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
}
