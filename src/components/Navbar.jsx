import React, { useState, useEffect } from "react";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* 🔵 Logo */}
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection("home")}
          aria-label="Go to Home section"
        >
          Portfolio.
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-600 focus:outline-none text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 items-center absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="relative">
             <a
  href={`#${section}`}      
  onClick={(e) => {
    e.preventDefault();      
    scrollToSection(section); 
  }}
  className={`block py-2 px-4 text-lg font-medium hover:text-blue-500 transition-all ${
    activeSection === section ? "text-blue-600 font-bold" : ""
  }`}
>
  {section.charAt(0).toUpperCase() + section.slice(1)}

  {activeSection === section && (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
  )}
</a>

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
