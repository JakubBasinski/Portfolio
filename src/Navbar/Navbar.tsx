//@ts-check
//@ts-ignore

import './module.navbar.scss';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './module.navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 2.5,
        }}
        className="navbar-root"
      >
        <nav className="nav-menu">
          <ul>
            <li className="bumb">
              <NavLink to="/">About Me</NavLink>
            </li>
            <li className="bumb">
              <NavLink to="/Technologies">Technologies</NavLink>
            </li>
            <li className="bumb">
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li className="bumb">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="canvas-wrapper">
          <Canvas camera={{ fov: 3, position: [0, 0, 100] }}>
            <OrbitControls enabled={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[10, 14, 2]} />
            <mesh position={[0, 0, 0]} scale={[37, 3.8, 4]}>
              <sphereGeometry args={[0.5, 100, 100]} />
              <MeshDistortMaterial
                color="#311736"
                attach="material"
                distort={0.2}
                speed={1.5}
                transparent={true}
                opacity={0.7}
              />
            </mesh>
          </Canvas>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
