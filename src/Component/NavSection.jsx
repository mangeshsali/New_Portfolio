import React, { useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import LOGO from "/src/assets/logo.png";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white h-16 w-full fixed top-0 my-0 flex items-center z-10">
      <div className="flex w-[1100px] lg:mx-auto bg-white items-center text-black font-poppins text-[22px] justify-between mx-5">
        <img src={LOGO} alt="logo" className="w-8 cursor-pointer" />
        <div className="links">
          <ul className="justify-between hidden md:flex">
            <li className="mx-5">
              <a href="#Home">Home</a>
            </li>
            <li className="mx-5">
              <a href="#About">About</a>
            </li>
            <li className="mx-5">
              <a href="#Projects">Projects</a>
            </li>
            <li className="mx-5">
              <a href="#Contact">Contact</a>
            </li>
            {/* <li className="mx-5">
              <a href="#">
                <FaMoon className="w-5" alt="Toggle Dark Mode" />
              </a>
            </li> */}
          </ul>

          <div id="hamburger" className="md:hidden z-50" onClick={toggleMenu}>
            <div>
              <FaBars className="w-6" />
            </div>
          </div>

          {isOpen && (
            <ul
              id="menu"
              className="bg-regal-blue absolute top-0 left-0 w-full text-center p-10 text-white rounded-b-3xl"
            >
              <li className="mx-5 my-4">
                <a href="#Home" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li className="mx-5 my-4">
                <a href="#About" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li className="mx-5 my-4">
                <a href="#Projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li className="mx-5 my-4">
                <a href="#Contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
              {/* <li className="mx-5 my-4">
                <a href="#">
                  <FaMoon />
                </a>
              </li> */}
              <li
                className="mx-5  py-8 flex justify-center"
                onClick={toggleMenu}
              >
                <FaTimes />
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
