import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* 🔥 SEO Helmet Section */}
      <Helmet>
        <title>Mohd Saif Ali — Full Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Hi, I'm Mohd Saif Ali — a Full Stack Web Developer specializing in React, Node.js, Firebase, and UI/UX design. I build modern, responsive, and scalable web applications."
        />
        <meta
          name="keywords"
          content="Mohd Saif Ali, Full Stack Developer, React Developer, UI UX Designer, Web Developer, Portfolio"
        />
        <link rel="canonical" href="https://saifali.vercel.app/" />
      </Helmet>

      <section
        id="home"
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-black relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundAttachment:
            window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/40"></div>

        <div className="relative p-6 sm:p-8 rounded-lg text-center z-10">
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide leading-tight text-gray-800"
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ fontFamily: "'Noto Sans', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
              Hi,
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
              Mohd Saif Ali
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-700 tracking-wide font-light"
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-delay="200"
            style={{ fontFamily: "'Noto Sans', sans-serif" }}
          >
            Building Creative & Scalable Web Applications
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="contact"
              className="bg-blue-500 px-8 py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white inline-flex items-center"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="400"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              Let's Connect <FaEnvelope className="ml-2" />
            </a>

            <a
              href="about"
              className="bg-gray-800 px-8 py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition duration-300 transform hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 text-white inline-flex items-center"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="500"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6"
            data-aos="fade-up"
            data-aos-duration="3500"
            data-aos-delay="600"
          >
            <a
              href="https://github.com/Mdsaifaliii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-3xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saif-ali-b703aa28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          <p
            className="mt-6 text-lg sm:text-xl md:text-2xl italic text-gray-500 font-light tracking-wide"
            data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-delay="800"
            style={{ fontFamily: "'Noto Sans', sans-serif" }}
          >
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
        </div>

        {/* Scroll Down */}
        <div
          className="absolute bottom-10 text-blue-500 animate-bounce"
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-delay="1000"
        >
          <a href="#about" aria-label="Scroll Down">
            <FaArrowDown className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
