import { useState } from 'react'
import './App.css'
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

function App() {
 
  return (
    <>
    <div style={{ backgroundColor: 'black', color: 'white' }}>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <Contact />
     </div>
    </>
  )
}

export default App
