import React, { useState } from "react";
import { SiFirebase, SiMongodb, SiVercel } from 'react-icons/si';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub
} from "react-icons/fa";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Wearluxe E-Commerce Website",
      description: "A scalable and responsive platform with integrated payment solutions.",
      link: "https://wearluxe-ten.vercel.app/",
      image: "images/wearluxe image.png",
      status: "In Progress",
      stack: [
        <FaReact key="react" className="text-blue-500" />,
        <FaNodeJs key="node" className="text-green-500" />,
        <FaCss3Alt key="css" className="text-blue-300" />,
        <SiVercel key="vercel" className="text-black" />,
        <SiFirebase key="firebase" className="text-yellow-500" />,
        <SiMongodb key="mongodb" className="text-green-600" />,
        <FaGithub key="github" className="text-gray-800" />

      ],
    },
     {
      title: "Travel Go Website",
      description: "Explore, book, and experience unforgettable journeys with Travel Go – your ultimate travel companion.",
      link: "https://travel-go-neon.vercel.app/",
      image: "images/travel go image.png",
      status: "In Progress",
      stack: [
        <FaReact key="react" className="text-blue-500" />,
        <FaNodeJs key="node" className="text-green-500" />,
        <FaCss3Alt key="css" className="text-blue-300" />,
        <SiVercel key="vercel" className="text-black" />,
        <SiFirebase key="firebase" className="text-yellow-500" />,
        <SiMongodb key="mongodb" className="text-green-600" />,
        <FaGithub key="github" className="text-gray-800" />
      ],
    },
    {
      title: "Weather App",
      description: "Real-time weather updates using a REST API and geolocation.",
      link: "https://mdsaifaliii.github.io/CBTC/",
      image: "images/weather image.png",
      status: "Live",
      stack: [
        <FaHtml5 key="Html" className="text-orange-500" />,
        <FaCss3Alt key="css" className="text-blue-500" />,
        <FaJs key="javascript" className="text-yellow-500" />,
        <FaGithub key="github" className="text-gray-800" />
      ],
    },
    {
      title: "Todo List App",
      description: "A to-do list contains all the tasks that need to be done and can be ticked off accordingly.",
      link: "https://mdsaifaliii.github.io/Todo-list/",
      image: "images/to do list image.png",
      status: "Live",
      stack: [
        <FaHtml5 key="Html" className="text-orange-500" />,
        <FaCss3Alt key="css" className="text-blue-500" />,
        <FaJs key="javascript" className="text-yellow-500" />,
        <FaGithub key="github" className="text-gray-800" />
      ],
    },
  ];

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleModalOpen(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
                <div className="flex items-center gap-3 mt-3">
                  {project.stack.map((icon, i) => (
                    <span key={i} className="text-2xl">{icon}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-3xl rounded-lg overflow-y-auto max-h-[90vh] p-6 relative shadow-2xl">
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-red-600 font-bold text-xl hover:text-red-800"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-3">{selectedProject.description}</p>
              <p className="text-sm text-gray-500 mb-2">Status: {selectedProject.status}</p>
              <div className="flex items-center gap-3 mt-2 mb-4">
                {selectedProject.stack.map((icon, i) => (
                  <span key={i} className="text-2xl">{icon}</span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
