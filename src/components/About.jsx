import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
      {/* SEO Helmet */}
      <Helmet>
        <title>
          About — Mohd Saif Ali | Full Stack Web Developer | Software Developer
          & UI/UX Designer
        </title>
        <meta
          name="description"
          content="Learn about Mohd Saif Ali, a Full Stack Web Developer and UI/UX Designer skilled in React, Node.js, Firebase, Tailwind CSS, and modern web technologies."
        />
        <meta
          name="keywords"
          content="About Mohd Saif Ali, Full Stack Developer, React Developer, Software Developer, Software Engineer, UI/UX Designer, Web Developer Portfolio"
        />
        <link rel="canonical" href="https://saifali.vercel.app/about" />
      </Helmet>

      {/* ABOUT SECTION */}
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
              A passionate Software Developer who loves
              turning ideas into fast, scalable, and user-friendly digital
              products. I specialize in building modern web applications using
              technologies like React, Node.js, Firebase, JavaScript, and
              Tailwind CSS, with a strong understanding of UI/UX principles.
              With an eye for clean design and a mind for logical
              problem-solving, I enjoy creating applications that not only look
              great but also perform smoothly across all devices. Whether it’s
              building interactive front-end interfaces, designing efficient
              backend structures, or optimizing overall application performance,
              I always strive to deliver work that is practical, reliable, and
              impactful.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              I’m continuously learning new tools, exploring better solutions,
              and staying updated with the latest industry trends to improve my
              craft and provide high-quality digital experiences. My goal is to
              build software that genuinely solves real-world problems while
              offering an excellent user experience.
            </p>

            <Link
              to="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Explore My Projects
            </Link>
          </div>

          {/* RIGHT: Skills Grid */}
          <div data-aos="fade-left">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
              <SkillCard
                icon={<FaHtml5 />}
                label="HTML5"
                color="text-orange-600"
              />
              <SkillCard
                icon={<FaCss3Alt />}
                label="CSS3"
                color="text-blue-500"
              />
              <SkillCard
                icon={<FaJs />}
                label="JavaScript"
                color="text-yellow-400"
              />
              <SkillCard
                icon={<FaReact />}
                label="React"
                color="text-cyan-500"
              />
              <SkillCard
                icon={<FaNodeJs />}
                label="Node.js"
                color="text-green-500"
              />
              <SkillCard
                icon={<FaFigma />}
                label="Figma"
                color="text-pink-500"
              />
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
