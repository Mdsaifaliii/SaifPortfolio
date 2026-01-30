import React from "react";
import SwipeCards from "../components/SwipeCards";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

function Projects() {

  const websites = [
    {
      title: "Travel Booking Website",
      description: "A full tour booking platform with packages, booking & dashboard.",
      image: "/images/Travelgo.webp",
      live: "https://travel-go-neon.vercel.app/",
    },
    {
      title: "Clothing E-Commerce",
      description: "Modern fashion store with cart, filters & product variants.",
      image: "/images/Wearluxe.webp",
      live: "https://wearluxe-ten.vercel.app/",
    },
  ];

  const miniProjects = [
    {
      title: "Weather App",
      description: "Live weather forecast using API integration.",
      image: "/images/weather image.webp",
      live: "https://mdsaifaliii.github.io/CBTC/",
    },
    {
      title: "To-Do List",
      description: "Task manager with local storage support.",
      image: "/images/to do list image.webp",
      live: "https://mdsaifaliii.github.io/Todo-list/",
    },
  ];

 const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 sm:h-80 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition duration-500 border-none"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm">{project.description}</p>

        {/* Arrow Icon for Link */}
        <div className="mt-4 flex justify-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaArrowRight size={30} />
          </a>
        </div>
      </div>
    </a>
  );
};



  return (
    <>
      <Helmet>
        <title>Projects — Mohd Saif Ali | Full Stack Developer</title>
        <meta
          name="description"
          content="Professional portfolio projects by Mohd Saif Ali including full-stack websites and interactive mini projects."
        />
        <link rel="canonical" href="https://saifali.vercel.app/projects" />
      </Helmet>

      <section id="projects" className="py-20 px-4 sm:px-10 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Project Highlights
          </h2>

          {/* 🔥 TOP NAV TABS */}
          <div className="flex justify-center gap-6 mb-16">
  <button
    onClick={() => document.getElementById("websites").scrollIntoView({ behavior: "smooth" })}
    className="px-6 py-2 rounded-full font-semibold border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
  >
    Web Apps
  </button>

  <button
    onClick={() => document.getElementById("mini-projects").scrollIntoView({ behavior: "smooth" })}
    className="px-6 py-2 rounded-full font-semibold border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
  >
    Mini Projects
  </button>
</div>

          {/* 🌐 WEBSITES SECTION */}
          <h3
            id="websites"
            className="text-2xl font-bold text-gray-800 mb-10 scroll-mt-24"
          >
            Web Apps
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 mb-20 ">
            {websites.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* 🧩 MINI PROJECTS SECTION */}
          <h3
            id="mini-projects"
            className="text-2xl font-bold text-gray-800 mb-10 scroll-mt-24"
          >
            Mini Projects
          </h3>

          <div className="flex justify-center">
            <SwipeCards cards={miniProjects} />
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;
