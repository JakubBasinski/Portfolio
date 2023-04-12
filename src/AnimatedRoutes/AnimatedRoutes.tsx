import './animated.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';

import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AboutMe } from '../AboutMe/AboutMe';
import { Technologies } from '../Technologies/Technologies';

export interface AnimatedPros {
  className?: string;
  handleSetMenu: (e: boolean) => void;
  menuMiniDisplay: boolean;
}

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="animated-root">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
