import './App.css';

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import States from './components/States'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <States />
      <Footer />
    </>
  );
}

export default App;
