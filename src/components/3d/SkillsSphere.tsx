'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

interface Skill {
  name: string;
  level: number;
}

interface SkillsSphereProps {
  skills: Skill[];
}

const SkillPoint: React.FC<{ position: [number, number, number]; skill: Skill }> = ({ position, skill }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <motion.mesh
      ref={ref}
      position={position}
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Sphere args={[0.1, 16, 16]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Sphere>
      <Text
        position={[0, 0, 0.15]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </motion.mesh>
  );
};

const SkillsSphere: React.FC<SkillsSphereProps> = ({ skills }) => {
  const radius = 2;
  const positions = skills.map((_, index) => {
    const phi = Math.acos(-1 + (2 * index) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    
    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ] as [number, number, number];
  });

  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {skills.map((skill, index) => (
          <SkillPoint
            key={skill.name}
            position={positions[index]}
            skill={skill}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default SkillsSphere; 