"use client";
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-4">
      {/* Contact Title */}
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-md">
        Have a project in mind? Let’s talk and bring your ideas to life!
      </p>

      {/* Contact Form */}
      <div className="bg-white bg-opacity-50 backdrop-blur-lg border border-gray-300 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <form className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
