import React, { useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks((prevState) => !prevState)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "link-container"
          }`}
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>
                  <FaTwitter />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
