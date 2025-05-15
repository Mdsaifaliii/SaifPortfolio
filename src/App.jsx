import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonial";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact />
        {/* <Testimonials/> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;