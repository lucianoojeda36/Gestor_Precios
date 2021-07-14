import React from 'react';
import './App.css';
import Detalles from './components/Detalles';
import { Precios } from './components/Precios'

function App() {

  return (
    <div className="App">
      <Precios />
      <Detalles/>
    </div>
  );
}

export default App;
