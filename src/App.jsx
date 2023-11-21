import { useState } from 'react'
import './App.css'
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Reference from "./Component/Reference";
import Footer from "./Component/Footer";

function App() {
 
  return (
    <>
    <div style={{ backgroundColor: 'black', color: 'white' }}>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <Contact />
     <Reference />
     <Footer />
     </div>
    </>
  )
}

export default App
