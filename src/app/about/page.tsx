"use client";
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-black min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-8 text-gray-900">
          About Us
        </h1>
        <div className="space-y-6 text-gray-700">
          <p className="text-xl leading-relaxed">
            We are a team of dedicated professionals committed to delivering 
            innovative digital solutions. With expertise in{" "}
            <span className="font-semibold text-blue-600">web development</span>,{" "}
            <span className="font-semibold text-blue-600">UI/UX design</span>, and{" "}
            <span className="font-semibold text-blue-600">branding</span>, we help 
            businesses establish a strong online presence.
          </p>
          <p className="text-xl leading-relaxed">
            Our approach blends creativity with technology to craft seamless, 
            high-quality experiences that drive growth and success. We believe 
            in building long-term relationships with our clients by delivering 
            value-driven results.
          </p>
          <p className="text-xl leading-relaxed">
            Whether you're a startup or an established enterprise, we tailor 
            our solutions to meet your unique needs and help you achieve your 
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
