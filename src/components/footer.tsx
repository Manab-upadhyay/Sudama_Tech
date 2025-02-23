import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Hide full footer on mobile */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
          <img src="/logoss.jpg" className="w-16 h-auto" alt="Sudama Solutions Logo" />
<h3 className="text-lg font-semibold">SudamaSolutions Technology</h3>

            <p className="text-gray-600 mt-2">
              Elevating your digital experience with innovation and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className="text-gray-600 hover:text-black">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright text - Always visible */}
        <div className="border-t border-gray-300 mt-6 pt-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sudama Solutions
        </div>
      </div>
    </footer>
  );
}
