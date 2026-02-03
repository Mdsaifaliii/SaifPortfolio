import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Mohd Saif Ali. All Rights Reserved.</p>

        {/* Social Media Icons */}
        <div className="mt-3 flex justify-center items-center gap-6 text-blue-400">
          <a
            href="https://www.linkedin.com/in/mohd-saif-ali-software-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          {/* 
  <a
    href="https://github.com/Mdsaifaliii"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition duration-300"
  >
    <FaGithub size={22} />
  </a> 
  */}

          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaXTwitter size={22} />
          </a>

          <a
            href="https://www.instagram.com/md_saifaly/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
