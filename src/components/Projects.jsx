import React, { useState } from "react";

import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A scalable and responsive platform with integrated payment solutions.",
      link: "https://wearluxe-ten.vercel.app/",
      image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid",
      status: "Live",
      stack: [<FaReact key="react" className="text-blue-500" />, <FaNodeJs key="node" className="text-green-500" />, <FaCss3Alt key="css" className="text-blue-300" />],
    },
    {
      title: "Weather App",
      description: "Real-time weather updates using a REST API and geolocation.",
      link: "https://mdsaifaliii.github.io/CBTC/",
      image: "https://img.freepik.com/premium-photo/create-modern-weather-app-interface-image_1008415-70513.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid",
      status: "In Progress",
      stack: [<FaHtml5 key="Html" className="text-orange-500" />, <FaCss3Alt key="css" className="text-blue-500" />,<FaJs key="javascript" className="text-yellow-500" />],
    },
    {
      title: "Todo List App",
      description: "A to-do list contains all the tasks that need to be done and can be ticked off accordingly.",
      link: "https://mdsaifaliii.github.io/Todo-list/",
      image: "https://img.freepik.com/free-vector/checklist-concept-illustration_114360-479.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid",
      stack: [<FaHtml5 key="Html" className="text-orange-500" />, <FaCss3Alt key="css" className="text-blue-500" />,<FaJs key="javascript" className="text-yellow-500" />],
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
    <section id="projects" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              onClick={() => handleModalOpen(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-gray-500">Status: {project.status}</p>
              <div className="flex space-x-2 mt-4">
                {project.stack.map((icon, index) => (
                  <div key={index} className="text-xl">{icon}</div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {modalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-3/4 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <p className="text-sm text-gray-500">Status: {selectedProject.status}</p>
              <div className="flex space-x-2 mt-4">
                {selectedProject.stack.map((icon, index) => (
                  <div key={index} className="text-xl">{icon}</div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Live
                </a>
              </div>
              <button
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
