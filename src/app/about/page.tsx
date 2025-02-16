"use client";
import React from "react";
import { FaCheckCircle, FaRocket, FaUsers, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          We are a team of passionate freelancers dedicated to helping brands
          grow with innovative and creative digital solutions.
        </p>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a **creative freelance agency** specializing in web
            development, UI/UX design, and digital marketing. With years of
            experience, we bring fresh and strategic solutions to help your
            business succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow-md bg-white">
              <FaRocket className="text-4xl mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Web Development</h3>
              <p className="text-gray-600">
                We build fast, scalable, and high-performance websites tailored
                to your needs.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md bg-white">
              <FaUsers className="text-4xl mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Stunning, user-friendly designs to enhance customer engagement
                and experience.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md bg-white">
              <FaBriefcase className="text-4xl mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Branding & Strategy</h3>
              <p className="text-gray-600">
                We help you build a strong brand identity and develop a winning
                marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Client-focused approach",
              "On-time project delivery",
              "Creative & innovative solutions",
              "Affordable pricing",
              "Expert team of freelancers",
              "100% customer satisfaction",
            ].map((reason, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Got an Awesome Idea?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Let's bring it to life! Get in touch with us today.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition">
          Get a Call 📞
        </button>
      </section>
    </div>
  );
};

export default About;
