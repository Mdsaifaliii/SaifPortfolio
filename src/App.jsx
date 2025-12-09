// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="mt-16">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Section-specific routes */}
          <Route path="/about" element={<Home scrollTo="about" />} />
          <Route path="/skills" element={<Home scrollTo="skills" />} />
          <Route path="/projects" element={<Home scrollTo="projects" />} />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
