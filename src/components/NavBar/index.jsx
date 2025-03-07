import React from "react";
import "./style.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div className="navLogo" >Erin Jacobsen</div>
      <div className="navLinks">
        <NavLink to="/" end>
          About Me
        </NavLink>
        <NavLink to="/portfolio" end>
          Portfolio
        </NavLink>
        <NavLink to="/contact" end>
          Contact
        </NavLink>
        <NavLink to="/resume" end>
          Resume
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
