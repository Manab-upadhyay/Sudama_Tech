"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const handleNavigation = (path:string) => {
    setIsOpen(false); // Close the mobile menu
    router.push(path); // Navigate to the selected page
  };

  return (
    <>
    <nav className="fixed top-4 bg-black left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%]  bg-opacity-10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex justify-between items-center z-50 shadow-lg">
      {/* Logo */}
      <Link href={"/"} className="flex items-center space-x-2">
  <img src="/logoss.jpg" className="w-8" alt="Logo" />
  <span className="text-black font-semibold">Sudama Solutions</span>
</Link>


      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-black">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        //   { name: "Services", path: "/services" },
          { name: "Contact", path: "/contact" },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <button onClick={() => handleNavigation(item.path)} className="text-lg">
              {item.name}
            </button>
            {/* Underline on Hover */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-black">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
           
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="text-lg"
                >
                  {item.name}
                </button>
                {/* Underline on Hover */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </nav>
   
      </>
  );
};

export default Navbar;
