// src/App.jsx
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
