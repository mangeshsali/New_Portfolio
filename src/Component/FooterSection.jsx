import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const FooterSection = () => {
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-regal-blue text-white font-poppins text-[1rem] rounded-md pb-0 w-full">
      <div className="lg:max-w-[1100px] mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
          {/* Portfolio Section */}
          <div>
            <h3 className="my-4 font-poppins font-semibold text-[1.8rem]">
              Mangesh's Portfolio
            </h3>
            <p className="text-[1rem] leading-5">
              Thank you for visiting my personal portfolio website.
              <br />
              Connect with me over socials.
            </p>
            <p className="my-4">Keep Rising 🚀. Connect me on social media!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="my-4 font-poppins font-semibold text-[1.8rem]">
              Quick Links
            </h3>
            <ul>
              {["Home", "About", "Projects", "Contact"].map((section) => (
                <li
                  key={section}
                  className="cursor-pointer flex items-center mb-2"
                >
                  <FaChevronRight className="mr-2" />

                  <a href={`/#${section}`}>{section}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-5">
            <h3 className="my-4 font-poppins font-semibold text-[1.8rem] mr-2">
              Contact
            </h3>
            <p className="font-poppins text-[1rem] my-2 flex items-center">
              <FaPhone className="mr-2" /> +91-9665900023
            </p>
            <p className="font-poppins text-[1rem] my-2 flex items-center">
              <FaEnvelope className="mr-2" /> mangeshsali16@gmail.com
            </p>
            <p className="font-poppins text-[1rem] my-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Pune, India
            </p>
          </div>
        </div>

        <hr />

        {/* Footer Bottom Section */}
        <div className="flex justify-center">
          <p className="font-poppins font-semibold text-[1rem] mt-4 text-center">
            Developed with ❤️ By Mangesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
