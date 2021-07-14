import React from 'react';
import axios from 'axios'
import dotenv from 'dotenv'
import './App.css';
import Detalles from './components/Detalles';
import { Precios } from './components/Precios'



dotenv.config()
axios.defaults.baseURL=process.env.REACT_APP_API || "http://localhost:4000"

function App() {

  return (
    <div className="App">
      <Precios />
      <Detalles/>
    </div>
  );
}

export default App;
