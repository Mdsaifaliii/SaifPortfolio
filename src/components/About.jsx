import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";   // ✅ Add Helmet
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>About — Mohd Saif Ali | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Learn about Mohd Saif Ali, a Full Stack Web Developer and UI/UX Designer skilled in React, Node.js, Firebase, Tailwind CSS, and modern web technologies."
        />
        <meta
          name="keywords"
          content="About Mohd Saif Ali, Full Stack Developer, React Developer, UI/UX Designer, Web Developer Portfolio"
        />
        <link rel="canonical" href="https://saifali.vercel.app/about" />
      </Helmet>

      {/* 🔵 ABOUT SECTION */}
      <section
        id="about"
        className="bg-white py-24 px-6 md:px-12 lg:px-20 text-gray-900"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: About Text */}
          <div data-aos="fade-right">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              I'm <span className="text-blue-600">Mohd Saif Ali</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-600 mb-6">
              Software Developer & UI/UX Designer
            </h3>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              With a passion for both design and development, I build modern,
              responsive, and interactive web applications using tools like React,
              Node.js, Firebase, and Tailwind CSS.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              From crafting pixel-perfect UI designs in Figma to building 
              scalable backend systems, I ensure every project delivers 
              exceptional user experience and performance.
            </p>

            <a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Explore My Projects
            </a>
          </div>

          {/* RIGHT: Skills Grid */}
          <div data-aos="fade-left">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
              <SkillCard icon={<FaHtml5 />} label="HTML5" color="text-orange-600" />
              <SkillCard icon={<FaCss3Alt />} label="CSS3" color="text-blue-500" />
              <SkillCard icon={<FaJs />} label="JavaScript" color="text-yellow-400" />
              <SkillCard icon={<FaReact />} label="React" color="text-cyan-500" />
              <SkillCard icon={<FaNodeJs />} label="Node.js" color="text-green-500" />
              <SkillCard icon={<FaFigma />} label="Figma" color="text-pink-500" />
              <SkillCard icon={<FaGitAlt />} label="Git" color="text-red-500" />
              <SkillCard
                icon={
                  <img
                    src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png"
                    alt="Firebase"
                    className="w-8 h-8"
                  />
                }
                label="Firebase"
                color=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Skill Card Component
function SkillCard({ icon, label, color }) {
  return (
    <div className="flex flex-col items-center group transform transition-transform hover:scale-110">
      <div
        className={`w-14 h-14 flex items-center justify-center text-3xl ${color}`}
      >
        {icon}
      </div>
      <span className="text-sm mt-2 text-gray-800 group-hover:text-blue-600 font-medium">
        {label}
      </span>
    </div>
  );
}

export default About;
