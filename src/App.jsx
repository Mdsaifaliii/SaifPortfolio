import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="mt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
            <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
