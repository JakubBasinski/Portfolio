import React from 'react';
import './App.scss';
import { Navbar } from './Navbar/Navbar';
import { Main } from './Main/Main';
import { AnimatedRoutes } from './AnimatedRoutes/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <AnimatedRoutes />
      <Navbar />
    </div>
  );
}

export default App;
