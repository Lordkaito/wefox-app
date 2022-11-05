import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from './components/Map';
import Navbar from './components/Navbar';
import './App.css';
import Container from './components/Container';
import PostElement from './pages/PostElement';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/map" element={<PostElement />} />
      </Routes>
    </Router>
  )
}

export default App;