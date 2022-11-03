import React from 'react';
import Map from './components/Map';
import Navbar from './components/Navbar';
import './App.css';
import Container from './components/Container';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Container/>
      <Navbar/>
    </div>
  )
}

export default App;