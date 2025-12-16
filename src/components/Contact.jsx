import React, { useState, useEffect } from "react";
import { firestoreDB } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(firestoreDB, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Mohd Saif Ali | Software Developer | UI/UX Designer</title>
        <meta
          name="description"
          content="Contact Mohd Saif Ali for freelance projects, collaborations, or hiring opportunities. Send your message through this secure and responsive contact form."
        />
        <meta
          name="keywords"
          content="Contact Saif Ali, Hire Developer, Contact Mohd Saif, Software Developer Contact"
        />
        <link rel="canonical" href="https://saifali.vercel.app/contact" />
      </Helmet>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Image */}
       

          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold text-gray-900 mb-6"
          >
            Get in Touch
          </h2>

          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          >
            Whether you want to discuss a project, collaboration, or just say
            hello — feel free to send a message. I’ll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="bg-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto 
                       transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Name */}
            <div className="mb-5 text-left">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg 
                           focus:ring-2 focus:ring-blue-400 focus:outline-none
                           transition-all duration-200 hover:shadow-md"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5 text-left">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg 
                           focus:ring-2 focus:ring-blue-400 focus:outline-none
                           transition-all duration-200 hover:shadow-md"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-5 text-left">
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg 
                           focus:ring-2 focus:ring-blue-400 focus:outline-none
                           transition-all duration-200 hover:shadow-md"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white text-lg shadow-lg transition-all 
                ${loading
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div
              data-aos="zoom-in"
              className="mt-8 bg-green-100 text-green-800 p-5 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold">Thank you for reaching out!</h3>
              <p className="mt-1">Your message has been sent successfully.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;
