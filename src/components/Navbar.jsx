import React, { useState } from "react";
import "./Styles/NavbarStyle.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo-white.png";
import { FaRegFileArchive } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <img className="tedx-logo" src={logo} alt="logo" />

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
        {/* Add navigation links to different sections */}
        <li>
          <Link className="nav-links" to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <HashLink
            className="nav-links"
            smooth
            to="/#about"
            onClick={handleClick}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            className="nav-links"
            smooth
            to="/#speakers"
            onClick={handleClick}
          >
            Speakers
          </HashLink>
        </li>
        <li>
          <HashLink
            className="nav-links"
            smooth
            to="/#partners"
            onClick={handleClick}
          >
            Partners
          </HashLink>
        </li>
        <li>
          <Link className="nav-links" to="/Team" onClick={handleClick}>
            Team
          </Link>
        </li>
        <li>
          <HashLink
            className="nav-links"
            smooth
            to="/#footer"
            onClick={handleClick}
          >
            Contact
          </HashLink>
        </li>
        <li>
          <a className="nav-links" id="registerbutton" href="https://docs.google.com/forms/d/e/1FAIpQLSez7A3pYU3_gSeFXxcLzYrTHQP6RARIOmfwFgC9Ibq0HKCsWQ/viewform"><b>REGISTER</b></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
