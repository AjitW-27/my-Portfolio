import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Home from "./Componants/Home";
import About from "./Componants/About";
import Projects from "./Componants/Projects";
import Contact from "./Componants/Contact";
import Footer from "./Componants/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
