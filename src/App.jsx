import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Partials/Navbar'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
