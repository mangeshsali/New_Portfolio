import React from "react";
import HtmlImage from "/assets/html-5--v1.png"; // Adjust the path as needed
import JavaScriptImage from "/assets/javascript--v1.png";
import BootstrapImage from "/assets/bootstrap.png";
import ReactImage from "/assets/react--v1.png";
import NodeImage from "/assets/node-js.svg";
import CImage from "/assets/c.png";
import CssImage from "/assets/css3.png";
import TailwindImage from "/assets/tailwindcss.png";
import PythonImage from "/assets/Python.png";

const TechStack = () => {
  return (
    <section>
      <div className="lg:w-[1100px] mx-auto my-[15px]">
        <h2
          id="#"
          className="font-poppins font-medium text-[2.5rem] lg:text-[38px] text-center"
        >
          Tech Stack
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:w-[900px] mx-auto my-[50px] place-content-center">
          <div className="flex items-center justify-center">
            <img
              src={HtmlImage}
              alt="HTML"
              className="w-[95px] py-4 px-4 rounded-full bg-[#F6F0F0] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={JavaScriptImage}
              alt="JavaScript"
              className="w-[95px] py-4 px-4 rounded-full bg-[#FDF9E5] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={BootstrapImage}
              alt="Bootstrap"
              className="w-[95px] py-4 px-4 rounded-full bg-[#F0F0F6] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={ReactImage}
              alt="React"
              className="w-[95px] py-4 px-4 rounded-full bg-[#EFF3F9] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={NodeImage}
              alt="Node"
              className="w-[95px] py-4 px-4 rounded-full bg-[#F6F0F0] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={CImage}
              alt="C Programming"
              className="w-[95px] py-4 px-4 rounded-full bg-[#EEF2F7] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={CssImage}
              alt="CSS"
              className="w-[95px] py-4 px-4 rounded-full bg-[#E8F2F8] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={TailwindImage}
              alt="Tailwind CSS"
              className="w-[95px] py-4 px-4 rounded-full bg-[#E6F2F7] my-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={PythonImage}
              alt="Python"
              className="w-[95px] py-4 px-4 rounded-full bg-[#FDF9E5] my-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
