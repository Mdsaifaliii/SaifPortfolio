import React, { useEffect } from "react";
import { FaReact, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa"; // FontAwesome icons
import AOS from "aos"; // AOS (Animate On Scroll) for scroll animations
import "aos/dist/aos.css"; // AOS CSS for animations

function About() {
  // Initialize AOS animations when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-800 py-20 px-6 sm:px-12 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-shadow-md text-gray-900"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          About Me
        </h2>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="200"
        >
          I'm Mohd Saif Ali, a passionate web developer with a strong focus on
          building scalable and creative web applications. I specialize in front-end
          development using the latest frameworks like React, Tailwind CSS, and
          more. I believe in creating web experiences that are both functional and
          beautiful. Whether it's crafting a sleek UI or optimizing performance,
          I strive for excellence in every project.
        </p>

        {/* Skills/Tools section with light color icons */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="400"
        >
          {/* React icon with light color theme */}
          <div className="flex items-center justify-center space-x-2">
            <FaReact className="w-12 h-12 text-blue-500" />
            <span className="text-lg text-gray-800">React</span>
          </div>
          {/* CSS3 icon with light color theme */}
          <div className="flex items-center justify-center space-x-2">
            <FaCss3Alt className="w-12 h-12 text-blue-500" />
            <span className="text-lg text-gray-800">CSS3</span>
          </div>
          {/* JavaScript icon with light color theme */}
          <div className="flex items-center justify-center space-x-2">
            <FaJsSquare className="w-12 h-12 text-yellow-400" />
            <span className="text-lg text-gray-800">JavaScript</span>
          </div>
          {/* Node.js icon with light color theme */}
          <div className="flex items-center justify-center space-x-2">
            <FaNodeJs className="w-12 h-12 text-green-500" />
            <span className="text-lg text-gray-800">Node.js</span>
          </div>
        </div>

        {/* View Projects Button */}
        <a
          href="#projects"
          className="bg-blue-500 px-8 py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white inline-flex items-center"
          data-aos="fade-up"
          data-aos-duration="3500"
          data-aos-delay="600"
        >
          View My Projects
        </a>
      </div>

      {/* Optional light background illustration */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"
        style={{ zIndex: -1 }}
      ></div>
    </section>
  );
}

export default About;
