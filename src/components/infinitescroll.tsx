import React from "react";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const technologies = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaVuejs />, name: "Vue.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <FaNodeJs />, name: "Node.js" },
];

const InfiniteScroll = () => {
  return (
    <div className="relative w-[800px] mx-auto overflow-hidden bg-white py-10">
      <p className="text-center text-gray-600 mb-4">
        We develop with several technologies, including:
      </p>

      {/* Scrolling Container */}
      <div className="relative flex w-[250%] overflow-hidden">
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="text-5xl text-gray-800 mx-8">
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
