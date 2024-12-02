import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-300 body-font bg-gradient-to-r from-black via-gray-900 to-gray-800">
        <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Footer Title */}
          <a 
            href="/" 
            className="flex title-font font-bold items-center md:justify-start justify-center text-2xl text-gray-200"
          >
            <span className="ml-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Fareed Nathani
            </span>
          </a>

          {/* Social Links */}
          <span className="inline-flex text-3xl gap-5 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/fareed-nathani-30180a324/" 
              aria-label="LinkedIn Profile"
              className="text-blue-400 hover:text-purple-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/FareedNathani" 
              aria-label="GitHub Profile"
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
            >
              <IoLogoGithub />
            </a>
          </span>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-6">
          <p className="text-center py-4 text-sm text-gray-400">
            © 2024 Fareed Nathani - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
