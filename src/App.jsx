import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import About from './Pages/About';
import Nav from './components/Nav';
import Layout from './Pages/Layout';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </Router>
    
    
  );
};
