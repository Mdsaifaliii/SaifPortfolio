import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>404 Not Found | Mohd Saif Ali</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Go back to the homepage."
        />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
        <div className="text-center text-gray-600 max-w-2xl">

          {/* 404 Text */}
          <h1
            data-aos="zoom-in"
            className="text-[120px] md:text-[160px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"
          >
            404
          </h1>

          {/* Heading */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 mt-4 text-lg leading-relaxed"
          >
            The page you’re looking for doesn’t exist or may have been moved.
            Don’t worry, let’s get you back on track.
          </p>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 rounded-full text-white text-lg font-semibold
                         bg-gradient-to-r from-blue-500 to-purple-600
                         hover:from-purple-600 hover:to-blue-500
                         transition-all duration-300 shadow-lg hover:shadow-2xl
                         hover:-translate-y-1"
            >
              ⬅ Back to Home
            </Link>
          </div>

          {/* Decorative Animation */}
          <div className="mt-16 flex justify-center gap-3">
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-300"></span>
          </div>

        </div>
      </section>
    </>
  );
};

export default NotFound;
