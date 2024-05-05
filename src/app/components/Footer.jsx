import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      
      <div className="container p-12 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-6">
            
            <a
              href="https://ca.linkedin.com/in/prabhjot-harike-170a8319a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/prabhjotHarike123?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/prabhjot.harike/?igsh=MXFyMTAxd2RldjR1Mw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/Prabhjotharike?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
            
              <FaTwitter className="text-3xl" />
            
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
