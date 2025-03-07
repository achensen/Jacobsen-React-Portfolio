import React from "react";
import "./style.css"; 
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { SiStackoverflow } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialLinks">
        <a href="https://github.com/achensen" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/erin-j-3806b123a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://stackoverflow.com/users/29934081/erin-j" target="_blank" rel="noopener noreferrer">
        <SiStackoverflow size={30} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Erin Jacobsen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
