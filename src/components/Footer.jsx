import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Mohd Saif Ali. All Rights Reserved.</p>
        
        {/* Social Media Icons */}
        <div className="mt-2">
          <a
            href="https://www.linkedin.com/in/saif-ali-b703aa28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 mr-4 hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6 inline" />
          </a>
          <a
            href="https://github.com/Mdsaifaliii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 mr-4 hover:text-blue-600 transition duration-300"
          >
            <FaGithub className="w-6 h-6 inline" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 mr-4 hover:text-blue-600 transition duration-300"
          >
            <FaTwitter className="w-6 h-6 inline" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <FaInstagram className="w-6 h-6 inline" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
