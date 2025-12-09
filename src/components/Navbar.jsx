import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // Adjust for navbar height

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile after navigating
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Portfolio.
        </div>
        
        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 items-center absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all ease-in-out ${
            isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
          } md:transform-none md:translate-y-0`}
        >
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="relative">
              <a
                href={`${section}`}
                onClick={() => scrollToSection(section)}
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
