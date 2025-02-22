import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faNode,
  faCss3Alt,
  faHtml5,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiFirebase,
  SiPython,
  SiAdobephotoshop,
  SiGithub,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si"; // Import additional icons

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {/* React */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-500">
              <FontAwesomeIcon icon={faReact} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">React</p>
          </div>

          {/* CSS */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-400">
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-yellow-500">
              <FontAwesomeIcon icon={faJsSquare} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">JavaScript</p>
          </div>

          {/* Node.js */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-green-500">
              <FontAwesomeIcon icon={faNode} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">Node.js</p>
          </div>

          {/* HTML5 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-orange-500">
              <FontAwesomeIcon icon={faHtml5} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">HTML5</p>
          </div>

          {/* Java */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-500">
              <FontAwesomeIcon icon={faJava} size="4x" />
            </div>
            <p className="text-lg font-medium text-gray-700">Java</p>
          </div>

          {/* Firebase */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-yellow-600">
              <SiFirebase className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">Firebase</p>
          </div>

          {/* Python */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-400">
              <SiPython className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">Python</p>
          </div>

          {/* Adobe Photoshop */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-700">
              <SiAdobephotoshop className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">Adobe Photoshop</p>
          </div>

          {/* GitHub */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-900">
              <SiGithub className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">GitHub</p>
          </div>

          {/* Tailwind CSS */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-teal-400">
              <SiTailwindcss className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">Tailwind CSS</p>
          </div>

          {/* C++ */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <div className="w-24 h-24 mx-auto mb-4 text-blue-500">
              <SiCplusplus className="text-6xl mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">C++</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
