import React from "react";
import { Helmet } from "react-helmet-async";
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
  SiAdobexd,
  SiMongodb,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Skills() {
  return (
    <>
      {/* 🔥 SEO Helmet */}
      <Helmet>
        <title>Skills — Mohd Saif Ali | Web Developer & Designer | Software Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Explore the technical and creative skills of Mohd Saif Ali, including React, JavaScript, Tailwind CSS, Firebase, MongoDB, Python, Photoshop, UI/UX tools like Figma & Adobe XD, and more."
        />
        <meta
          name="keywords"
          content="Saif Ali Skills, Web Developer, MERN Developer, React Developer, JavaScript, MongoDB, Firebase, UI UX Designer, Tailwind CSS"
        />
        <link rel="canonical" href="https://saifali.vercel.app/skills" />
      </Helmet>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {/* Skill Cards */}
            {[
              { icon: faReact, name: "React", color: "text-blue-500", fa: true },
              { icon: faCss3Alt, name: "CSS", color: "text-blue-400", fa: true },
              { icon: faJsSquare, name: "JavaScript", color: "text-yellow-500", fa: true },
              { icon: faNode, name: "Node.js", color: "text-green-500", fa: true },
              { icon: faHtml5, name: "HTML5", color: "text-orange-500", fa: true },
              { icon: faJava, name: "Java", color: "text-blue-500", fa: true },
              { icon: SiFirebase, name: "Firebase", color: "text-yellow-600" },
              { icon: SiPython, name: "Python", color: "text-blue-400" },
              { icon: SiAdobephotoshop, name: "Adobe Photoshop", color: "text-blue-700" },
              { icon: SiGithub, name: "GitHub", color: "text-gray-900" },
              { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
              { icon: SiCplusplus, name: "C++", color: "text-blue-500" },
              { icon: FaFigma, name: "Figma", color: "text-blue-500" },
              { icon: SiAdobexd, name: "AdobeXD", color: "text-blue-500" },
              { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="transform transition-all duration-300 hover:scale-110"
              >
                <div className={`w-24 h-24 mx-auto mb-4 ${skill.color}`}>
                  {skill.fa ? (
                    <FontAwesomeIcon icon={skill.icon} size="4x" />
                  ) : (
                    <skill.icon className="text-6xl mx-auto" />
                  )}
                </div>
                <p className="text-lg font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
